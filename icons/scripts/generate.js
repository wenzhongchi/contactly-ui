#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");
const _ = require("lodash");
const minimist = require("minimist");
const { parse } = require("svg-parser");
const find = require("unist-util-find");
const toJsx = require("@mapbox/hast-util-to-jsx");
const mkdirp = require("mkdirp");

const iconTemplate = require("./template");
const storiesTemplate = require("./stories-template");
const exportsTemplate = require("./exports-template");
const colorReplacements = [
    {
        from: /\"var\(--icons-bg-fill, #ffffff\)\"/g,
        to: '{useColor("icon.bgFill")}',
    },
    {
        from: /\"var\(--icons-primary, #0097db\)\"/g,
        to: '{useColor("icon.primary")}',
    },
    {
        from: /\"var\(--icons-secondary, #454c59\)\"/g,
        to: '{useColor("icon.secondary")}',
    },
    {
        from: /\"currentColor\"/g,
        to: "{color}",
    },
    {
        from: /\"#00A5EF\"/g,
        to: '{useColor("icon.light")}',
    },
];

const isSvg = (() => {
    const svgRegexp = /\.svg$/;

    return (fileName) => svgRegexp.test(fileName);
})();

const getIconsMetaByType = (iconsTypePath) =>
    fs.readdir(iconsTypePath).then((files) =>
        Promise.all(
            files.reduce((acc, fileName) => {
                if (isSvg(fileName)) {
                    acc.push({
                        fileName,
                        filePath: path.join(iconsTypePath, fileName),
                    });
                }
                return acc;
            }, []),
        ).then(_.flatten),
    );

const getSvgContent = (svgPath) =>
    fs.readFile(svgPath, "utf-8").then((data) => {
        const hast = parse(data);
        const svgNode = find(hast, { tagName: "svg" });

        Object.assign(svgNode, { type: "root" });
        const options = {};
        const content = colorReplacements.reduce((acc, { from, to }) => {
            const replaced = acc.replace(from, to);
            const isChanged = acc !== replaced;

            // add useColor hook import
            if (isChanged && to.includes("useColor")) {
                Object.assign(options, { useColor: true });
            }

            // Add render prop to use resolved color
            if (isChanged && from.toString().includes("currentColor")) {
                Object.assign(options, { RenderElementProp: true });
            }

            return replaced;
        }, toJsx(svgNode, { wrapper: "fragment" }));

        return { content, options, svgProps: svgNode.properties };
    });

const generateIconFilename = (fileName) => {
    const baseName = path.basename(fileName, path.extname(fileName));

    return _.startCase(baseName).replace(/\s/g, "");
};

const generateIconComponentName = (fileName) => `Icon${fileName}`;

const getIconTemplateData = (iconMeta) => {
    const iconFileName = generateIconFilename(iconMeta.fileName);

    return {
        fileName: iconFileName,
        componentName: generateIconComponentName(iconFileName),
    };
};

const generateIcon = (cwd, iconMeta, outputPath) =>
    getSvgContent(iconMeta.filePath).then(({ content, options, svgProps }) => {
        const outputFolderPath = outputPath;
        const templateData = getIconTemplateData(iconMeta);
        const outputFilePath = path.join(outputFolderPath, `${templateData.fileName}.tsx`);

        return mkdirp(outputFolderPath)
            .then(() =>
                fs.writeFile(
                    outputFilePath,
                    iconTemplate({ ...templateData, svgProps, content, options }),
                ),
            )
            .then(() => {
                console.log(
                    `${iconMeta.filePath.replace(cwd, "")} -> ${outputFilePath.replace(cwd, "")}`,
                );
            });
    });

const generateIconsComponents = (cwd, iconsTypePath, outputPath, iconsMeta) =>
    Promise.all(iconsMeta.map((meta) => generateIcon(cwd, meta, outputPath))).then(() =>
        console.log(`\nAll icons from "${iconsTypePath}" were successfully generated`),
    );

const generateIconsStories = (outputPath, iconsMeta) => {
    const storyFilePath = path.join(outputPath.replace("Icons", ""), `Icons.stories.tsx`);

    return fs
        .writeFile(
            storyFilePath,
            storiesTemplate({
                iconsMeta: iconsMeta.map(getIconTemplateData),
            }),
        )
        .then(() => console.log(`\nStories file was successfully generated`));
};

const generateIconsExports = (outputPath, iconsMeta) => {
    const outputFolderPath = outputPath;
    const outputFilePath = path.join(outputFolderPath, `index.ts`);

    return mkdirp(outputFolderPath).then(() =>
        fs.writeFile(
            outputFilePath,
            exportsTemplate({ iconsMeta: iconsMeta.map(getIconTemplateData) }),
        ),
    );
};

const run = () => {
    const cwd = process.cwd();
    const argv = minimist(process.argv.slice(2));

    if (!argv.o) {
        console.error("You must specify output directory!");
        return;
    }

    if (!argv._.length) {
        console.error("You must specify icons type input directory!");
        return;
    }

    const iconsPath = argv._[0];
    const outputPath = path.join(cwd, argv.o);

    console.log(`Gathering all icons meta from "${iconsPath}"\n`);
    getIconsMetaByType(path.join(cwd, iconsPath))
        .then((iconsMeta) =>
            Promise.all([
                generateIconsComponents(cwd, iconsPath, outputPath, iconsMeta),
                generateIconsStories(outputPath, iconsMeta),
                generateIconsExports(outputPath, iconsMeta),
            ]),
        )
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
};

run();
