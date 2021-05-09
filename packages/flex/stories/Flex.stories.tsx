import React from "react";

import { Text } from "@components/Text";

import { Flex } from "../src/Flex";

export default {
    title: "Components/Flex",
    component: Flex,
};

export const Center: React.FC = () => (
    <Flex justifyContent="center">
        <Text variant="h1">Heading Text</Text>
    </Flex>
);

export const Between: React.FC = () => (
    <Flex flexGrow={1} justifyContent="space-between" alignItems="center">
        <Text variant="h1">Left Text</Text>
        <Text variant="h1">Right Text</Text>
    </Flex>
);
