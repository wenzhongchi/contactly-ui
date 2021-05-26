import React from "react";
import { Story } from "@storybook/react";

import { Button } from "../../button";

import { Input, InputComponentProps } from "../src/Input";
import { LabelInput, LabelInputProps } from "../src/LabelInput";

export default {
    title: "Components/Input",
    component: Input,
    parameters: { layout: "centered" },
    argTypes: {
        variant: {
            control: {
                type: "select",
                labels: ["default", "error", "success", "warning", "text"],
            },
        },
        inputSize: {
            control: {
                type: "select",
                labels: ["sm", "md", "lg"],
            },
        },
        value: {
            type: "string",
        },
        placeholder: {
            type: "string",
        },
    },
};

export const Default: Story<InputComponentProps> = (props: InputComponentProps) => (
    <Input {...props} placeholder="placeholder" />
);

Default.args = {
    variant: "default",
    inputSize: "sm",
};

export const Label: Story<LabelInputProps> = (props: LabelInputProps) => (
    <LabelInput {...props} button={<Button size="xs" variant="text" label="action" />} />
);

Label.argTypes = {
    variant: {
        control: {
            type: "select",
            labels: ["default", "error", "success", "warning", "text"],
        },
    },
    inputSize: {
        control: {
            type: "select",
            labels: ["sm", "md", "lg"],
        },
    },
    title: {
        type: "string",
    },
};

Label.args = {
    variant: "default",
    inputSize: "sm",
    label: "Email",
};
