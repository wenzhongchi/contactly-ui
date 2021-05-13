module.exports = ({ icons }) => `
  import React from "react";

  import { Flex } from "@contactly-ui/flex";
  import { Text } from "@contactly-ui/text";
  import { Box } from "@contactly-ui/box";

  ${icons
      .map(({ componentName }) => `import { ${componentName} } from "../src";`)
      .join("\n")}

  export default {
    title: "Components/Icon",
  };

  export const Icons = () => (
    <Flex width="100%" flexWrap="wrap">
      ${icons
          .map(
              ({ componentName }) => `
      <Box display="flex" flexDirection="column" alignItems="center" flexBasis="10%" p="15px 10px">
        <Text variant="body" mb={8}>
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
