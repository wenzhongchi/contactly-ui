import React from "react";
import { Story } from "@storybook/react";

import { PinInput } from "../src/PinInput";
import { PinInputGroup, PinInputGroupProps } from "../src/PinInputGroup";

export default {
    title: "Components/PinInput",
    component: PinInputGroup,
    parameters: { layout: "centered" },
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["default", "error", "success"],
            },
        },
        size: {
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
    },
};

export const Default: Story<PinInputGroupProps> = (props: PinInputGroupProps) => (
    <PinInputGroup {...props}>
        <PinInput />
        <PinInput />
        <PinInput />
        <PinInput />
    </PinInputGroup>
);

Default.args = {
    variant: "default",
    size: "md",
};
