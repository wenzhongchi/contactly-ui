module.exports = ({ iconsMeta }) =>
    `\n${iconsMeta
        .map(
            ({ fileName, componentName }) =>
                `export { default as ${componentName} } from "./${fileName}";`,
        )
        .join("\n")}`;
