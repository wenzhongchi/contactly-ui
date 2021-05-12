import path from "path";
import { StorybookConfig } from "@storybook/core/types";

const tsconfig = path.resolve(__dirname, "../tsconfig.json");

const storybookConfig: StorybookConfig = {
    stories: [
        "../stories/**/*.stories.mdx",
        "../packages/**/*.stories.mdx",
        "../packages/**/*.stories.@(js|jsx|ts|tsx)",
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
                    return !prop.parent.fileName.includes("node_modules");
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
