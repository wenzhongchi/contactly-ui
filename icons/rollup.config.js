import { terser as pluginTerser } from "rollup-plugin-terser";
import pluginPeerDepsExternal from "rollup-plugin-peer-deps-external";
import pluginTypescript from "@rollup/plugin-typescript";
import pluginCommonjs from "@rollup/plugin-commonjs";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import pluginClean from "rollup-plugin-clean";
import pluginJson from "@rollup/plugin-json";
import pluginAutoExternal from "rollup-plugin-auto-external";

import { getFiles } from "../scripts/file";

const extensions = [".js", ".ts", ".jsx", ".tsx"];

export default {
    input: ["src/index.ts", ...getFiles("src/icons", extensions)],
    output: {
        dir: "dist",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
        sourcemap: false,
    },
    plugins: [
        pluginClean(),
        pluginAutoExternal(),
        pluginPeerDepsExternal(),
        pluginNodeResolve(),
        pluginCommonjs(),
        pluginTypescript({
            tsconfig: "./tsconfig.json",
            declaration: true,
            declarationDir: "dist",
        }),
        pluginTerser(),
        pluginJson(),
    ],
};
