import React from "react";

import { Box } from "@contactly-ui/box";

import { Flex } from "../src";

export default {
    title: "Components/Flex",
    component: Flex,
};

export const Center: React.FC = () => (
    <Flex justifyContent="center">
        <Box bg="green" width="40px" height="40px" />
    </Flex>
);

export const Between: React.FC = () => (
    <Flex flexGrow={1} justifyContent="space-between" alignItems="center">
        <Box bg="green" width="40px" height="40px" />
        <Box bg="red" width="40px" height="40px" />
    </Flex>
);
