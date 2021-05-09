import path from "path";

import { terser as pluginTerser } from "rollup-plugin-terser";
import pluginPeerDepsExternal from "rollup-plugin-peer-deps-external";
import pluginTypescript from "rollup-plugin-typescript2";
import pluginCommonjs from "@rollup/plugin-commonjs";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

const PLUGINS = [
    pluginPeerDepsExternal(),
    pluginTypescript({ 
        rollupCommonJSResolveHack: true,
        clean: true,
        tsconfig: 'tsconfig.json',
    }),
    pluginCommonjs({
        extensions: [".js", "jsx", ".ts", ".tsx"],
    }),
    pluginNodeResolve(),
    pluginTerser(),
];

export const getRollupConfig = (pwd) => {
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
                configFile: path.resolve(SOURCE_DIR, "../../.babelrc"),
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
                configFile: path.resolve(SOURCE_DIR, "../../.babelrc"),
            }),
        ],
    };

    if (process.env.WATCH_MODE) {
        return [esmConfig, cjsConfig];
    }

    return [esmConfig, cjsConfig];
};
