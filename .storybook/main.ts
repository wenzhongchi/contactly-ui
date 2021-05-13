import path from "path";

const tsconfig = path.resolve(__dirname, "../tsconfig.json");

const storybookConfig = {
    stories: [
        "../packages/**/*.stories.mdx",
        "../packages/**/Box.stories.@(js|jsx|ts|tsx)",
        "../packages/**/Flex.stories.@(js|jsx|ts|tsx)",
        "../packages/**/Text.stories.@(js|jsx|ts|tsx)",
        "../packages/**/Button.stories.@(js|jsx|ts|tsx)",
        "../packages/**/Input.stories.@(js|jsx|ts|tsx)",
        // "../packages/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "storybook-dark-mode",
        "@storybook/addon-essentials",
        "@storybook/addon-links",
        "@storybook/addon-postcss",
    ],
    typescript: {
        check: true,
        checkOptions: { tsconfig },
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            tsconfigPath: tsconfig,
            propFilter: (prop) => {
                if (["theme", "ref"].includes(prop.name)) {
                    return false;
                }
                if (prop.parent) {
                    return (
                        !prop.parent.fileName.includes("node_modules") ||
                        !prop.parent.fileName.includes("dist")
                    );
                }

                return true;
            },
        },
    },
    webpackFinal: async (config) => ({
        ...config,
        resolve: {
            ...config.resolve,
            alias: {
                ...config.resolve?.alias,
            },
        },
    }),
};

export default storybookConfig;
