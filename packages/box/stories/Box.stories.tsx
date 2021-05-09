import React from "react";

import { Text } from "@components/Text";

import { Box } from "../src";

export default {
    title: "Components/Box",
    component: Box,
};

export const Basic: React.FC = () => (
    <Box>
        <Text variant="h1">Put Something in the Box</Text>
    </Box>
);

export const Advanced: React.FC = () => (
    <Box
        css={{
            "&:hover": {
                border: 1,
                backgroundColor: "red",
            },
        }}
    >
        <Text variant="h1">Hover over me</Text>
    </Box>
);
