import pluginType from "rollup-plugin-dts";

import { getRollupConfig } from "../../scripts/rollup";

const typeConfig = {
    input: "./dist/theme/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [pluginType()],
};

export default [...getRollupConfig(__dirname), typeConfig];
