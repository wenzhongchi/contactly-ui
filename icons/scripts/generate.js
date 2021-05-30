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
        from: /\"currentColor\"/g,
        to: "{color}",
    },
];

const isSvg = (() => {
    const svgRegexp = /\.svg$/;
    return (fileName) => svgRegexp.test(fileName);
})();

const getIconsByType = (iconsTypePath) =>
    fs.readdir(iconsTypePath).then((files) =>
        Promise.all(
            files.reduce((icons, fileName) => {
                if (isSvg(fileName)) {
                    icons.push({
                        fileName,
                        filePath: path.join(iconsTypePath, fileName),
                    });
                }
                return icons;
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

const getIconTemplate = (iconData) => {
    const iconFileName = generateIconFilename(iconData.fileName);

    return {
        fileName: iconFileName,
        componentName: generateIconComponentName(iconFileName),
    };
};

const generateIcon = (cwd, iconData, outputPath) =>
    getSvgContent(iconData.filePath).then(({ content, options, svgProps }) => {
        const outputFolderPath = path.join(outputPath, `icons`)
        const template = getIconTemplate(iconData);
        const outputFilePath = path.join(outputFolderPath, `${template.fileName}.tsx`);

        return mkdirp(outputFolderPath)
            .then(() =>
                fs.writeFile(
                    outputFilePath,
                    iconTemplate({ ...template, svgProps, content, options }),
                ),
            )
            .then(() => {
                console.log(
                    `${iconData.filePath.replace(cwd, "")} -> ${outputFilePath.replace(cwd, "")}`,
                );
            });
    });

const generateIconsComponents = (cwd, iconsTypePath, outputPath, icons) =>
    Promise.all(icons.map((data) => generateIcon(cwd, data, outputPath))).then(() =>
        console.log(`\nAll icons from "${iconsTypePath}" were successfully generated`),
    );

const generateIconsStories = (outputPath, icons) => {
    const storyFilePath = path.join(outputPath, `stories/Icons.stories.tsx`);

    return fs
        .writeFile(
            storyFilePath,
            storiesTemplate({
                icons: icons.map(getIconTemplate),
            }),
        )
        .then(() => console.log(`\nStories file was successfully generated`));
};

const generateIconsExports = (outputPath, icons) => {
    const outputFolderPath = outputPath;
    const outputFilePath = path.join(outputFolderPath, `index.ts`);

    return mkdirp(outputFolderPath).then(() =>
        fs.writeFile(
            outputFilePath,
            exportsTemplate({ icons: icons.map(getIconTemplate) }),
        ),
    );
};

const run = () => {
    const cwd = process.cwd();
    const argv = minimist(process.argv.slice(2));

    if (!argv.o) {
        console.error("You must enter output folder");
        return;
    }

    if (!argv.i) {
        console.error("You must enter input folder");
        return;
    }

    const iconsPath = argv.i;
    const outputPath = path.join(cwd, argv.o);

    console.log(`Gathering all icons from "${path.join(cwd, iconsPath)}"\n`);

    getIconsByType(path.join(cwd, iconsPath))
        .then((icons) =>
            Promise.all([
                generateIconsComponents(cwd, iconsPath, outputPath, icons),
                generateIconsStories(outputPath, icons),
                generateIconsExports(outputPath, icons),
            ]),
        )
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
};

run();
