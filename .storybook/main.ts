import path from "path";
import type { StorybookConfig } from "@storybook/core/types";

const tsconfig = path.resolve(__dirname, "../tsconfig.json");

const storybookConfig: StorybookConfig = {
    stories: [
        "../stories/**/*.stories.mdx",
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: ["storybook-dark-mode", "@storybook/addon-essentials", "@storybook/addon-links"],
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
                "@components": path.resolve(__dirname, "../src/components"),
                "@utils": path.resolve(__dirname, "../src/utils"),
                "@hooks": path.resolve(__dirname, "../src/hooks"),
                "@theme": path.resolve(__dirname, "../src/theme"),
                "@type": path.resolve(__dirname, "../src/types"),
                "@icon": path.resolve(__dirname, "../src/icons"),
            },
        },
    }),
};

export default storybookConfig;
