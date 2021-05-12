import React from "react";

import { Box } from "../src";

export default {
    title: "Components/Box",
    component: Box,
};

export const Basic: React.FC = () => <Box>Put Something in the Box</Box>;

export const Advanced: React.FC = () => (
    <Box
        css={{
            "&:hover": {
                border: 1,
                backgroundColor: "red",
            },
        }}
    >
        Hover over me
    </Box>
);
