import React from "react";
import { Story } from "@storybook/react";

import { Button, ButtonProps } from "../src/Button";

export default {
    title: "Components/Button",
    component: Button,
    parameters: { layout: "centered" },
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["default", "primary", "secondary", "success", "warning", "error", "text"],
            },
        },
        size: {
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
        leftIcon: {
            type: "string",
        },
        rightIcon: {
            type: "string",
        },
        label: {
            type: "string",
        },
        disabled: {
            control: {
                type: "select",
                options: [true, false],
            },
        },
    },
};

export const Basic: Story<ButtonProps> = (props) => <Button {...props} />;

Basic.args = {
    variant: "default",
    size: "sm",
    label: "Click Me",
};
