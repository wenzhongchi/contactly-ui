module.exports = ({ icons }) =>
    `\n${icons
        .map(
            ({ fileName, componentName }) =>
                `export { default as ${componentName} } from "./${fileName}";`,
        )
        .join("\n")}`;
