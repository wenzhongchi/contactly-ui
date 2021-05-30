module.exports = ({ icons }) =>
    `\n${icons
        .map(
            ({ fileName, componentName }) =>
                `export { default as ${componentName} } from "./icons/${fileName}";`,
        )
        .join("\n")}`;
