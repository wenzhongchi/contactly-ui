import React from "react";
import { Story } from "@storybook/react";

import { Stack, StackProps } from "../src/Stack";
import { Text } from "../../text";

export default {
    title: "Components/Stack",
    component: Stack,
    parameters: { layout: "centered" },
    argTypes: {
        direction: {
            control: {
                type: "select",
                labels: ["column", "row"],
            },
        },
    },
};

export const Column: Story<StackProps> = (props: StackProps) => (
    <Stack {...props}>
        <Text>Row 1</Text>
        <Text>Row 2</Text>
        <Text>Row 3</Text>
    </Stack>
);

Column.args = {
    direction: "column",
};
