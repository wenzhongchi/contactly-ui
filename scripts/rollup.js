import path from "path";

import { terser as pluginTerser } from "rollup-plugin-terser";
import pluginPeerDepsExternal from "rollup-plugin-peer-deps-external";
import pluginTypescript from "rollup-plugin-typescript2";
import pluginCommonjs from "@rollup/plugin-commonjs";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import pluginClean from "rollup-plugin-clean";
import { babel } from "@rollup/plugin-babel";

const PLUGINS = [
    pluginClean(),
    pluginPeerDepsExternal(),
    pluginTypescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        tsconfig: "tsconfig.json",
    }),
    pluginNodeResolve(),
    pluginCommonjs({
        extensions: [".js", "jsx", ".ts", ".tsx"],
    }),
    pluginTerser(),
];

export const getRollupConfig = (pwd, icon = false) => {
    const SOURCE_DIR = path.resolve(pwd);
    const pkg = require(`${SOURCE_DIR}/package.json`);
    const input = `${SOURCE_DIR}/index.ts`;

    const cjsConfig = {
        input,
        output: { file: `${SOURCE_DIR}/${pkg.main}`, format: "cjs" },
        plugins: [
            ...PLUGINS,
            babel({
                babelHelpers: "bundled",
                configFile: icon
                    ? path.resolve(SOURCE_DIR, "../.babelrc")
                    : path.resolve(SOURCE_DIR, "../../.babelrc"),
            }),
        ],
    };

    const esmConfig = {
        input,
        output: { file: `${SOURCE_DIR}/${pkg.module}`, format: "esm" },
        plugins: [
            ...PLUGINS,
            babel({
                babelHelpers: "bundled",
                configFile: icon
                    ? path.resolve(SOURCE_DIR, "../.babelrc")
                    : path.resolve(SOURCE_DIR, "../../.babelrc"),
            }),
        ],
    };

    const iconCjsConfig = {
        input: [`${SOURCE_DIR}/Activity.tsx`, `${SOURCE_DIR}/Airplay.tsx`],
        output: [
            {
                dir: `${SOURCE_DIR}/dist`,
                format: "cjs",
            },
        ],
        plugins: [...PLUGINS],
        preserveModules: true,
    };

    if (icon) return [iconCjsConfig];

    if (process.env.WATCH_MODE) {
        return [esmConfig, cjsConfig];
    }

    return [esmConfig, cjsConfig];
};
