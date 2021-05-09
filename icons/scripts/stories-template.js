module.exports = ({ iconsMeta }) => `
  import React from "react";

  import { Flex } from "../Flex/Flex";
  import { Text } from "../Text/Text";
  import { Box } from "../Box/Box";

  ${iconsMeta
      .map(({ componentName }) => `  import { ${componentName} } from "./Icons";`)
      .join("\n")}

  export default {
    title: "Components/Icon",
  };

  export const Icons = () => (
    <Flex width="100%" flexWrap="wrap">
      ${iconsMeta
          .map(
              ({ componentName }) => `
      <Box display="flex" flexDirection="column" alignItems="center" flexBasis="10%" p="15px 10px">
        <Text variant="label-sm" mb={8}>
          ${componentName}
        </Text>
        <${componentName} size={24}/>
      </Box>
      `,
          )
          .join("")}
    </Flex>
  );
`;
