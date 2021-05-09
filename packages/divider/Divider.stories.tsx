import React from "react";

import { Divider } from "../Divider/Divider";
import { Flex } from "../Flex/Flex";

export default {
    title: "Components/Divider",
    component: Divider,
};

export const Horizontal: React.FC = () => (
    <Flex width={20}>
        <Divider variant="horizontal" />
    </Flex>
);

export const Vertical: React.FC = () => (
    <Flex height={20}>
        <Divider variant="vertical" />
    </Flex>
);
