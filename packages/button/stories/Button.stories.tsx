import React from "react";
import { Story } from "@storybook/react";

import { IconHome, IconArrowRightCircle, IconPlusCircle } from "@contactly-ui/icons";

import { Button, ButtonProps } from "../src/Button";
import { IconButton, IconButtonProps } from "../src/IconButton";

export default {
    title: "Components/Button",
    component: Button,
    parameters: { layout: "centered" },
    argTypes: {
        variant: {
            control: {
                type: "select",
                labels: ["default", "primary", "secondary", "success", "warning", "error", "text"],
            },
        },
        size: {
            control: {
                type: "select",
                labels: ["sm", "md", "lg"],
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
                labels: [true, false],
            },
        },
    },
};

export const Basic: Story<ButtonProps> = (props) => <Button {...props} />;

Basic.args = {
    variant: "default",
    size: "sm",
    label: "Click Me",
    disabled: false,
};

export const LeftIcon: Story<ButtonProps> = (props) => (
    <Button leftIcon={<IconHome />} {...props} />
);

LeftIcon.args = {
    variant: "default",
    size: "sm",
    label: "Click Me",
    disabled: false,
};

export const RightIcon: Story<ButtonProps> = (props) => (
    <Button rightIcon={<IconArrowRightCircle />} {...props} />
);

RightIcon.args = {
    variant: "default",
    size: "sm",
    label: "Click Me",
    disabled: false,
};

export const Icon: Story<IconButtonProps> = (props) => (
    <IconButton icon={<IconPlusCircle />} {...props} />
);

Icon.args = {
    variant: "default",
    size: "sm",
    disabled: false,
};
