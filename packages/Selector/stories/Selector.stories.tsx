import React from "react";

import { Flex } from "../flex/src/Flex";
import { Selector } from "./Selector";
import { Text } from "../text/src/Text";

export default {
    title: "Components/Selector",
    component: Selector,
};

export const Small: React.FC = () => (
    <Flex flexDirection="column" flexGrow={1}>
        <Text>Default</Text>
        <Flex flexDirection="row" flexGrow={1}>
            <Selector variant="default" type="check" label="Check selector" m={8} />
            <Selector variant="primary" type="check" label="Check selector" m={8} />
            <Selector variant="danger" type="check" label="Check selector" m={8} />
            <Selector variant="disabled" type="check" label="Check selector" m={8} />
        </Flex>
    </Flex>
);
