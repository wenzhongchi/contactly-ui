import React from "react";
import { Story } from "@storybook/react";

import { Input, InputComponentProps } from "../src/Input";
import { LabelInput, LabelInputProps } from "../src/LabelInput";

export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["default", "error", "success", "warning", "text"],
            },
        },
        inputSize: {
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
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

export const Basic: Story<InputComponentProps> = (props: InputComponentProps) => (
    <Input {...props} />
);

Basic.args = {
    variant: "default",
    inputSize: "sm",
};

export const Label: Story<LabelInputProps> = (props: LabelInputProps) => <LabelInput {...props} />;

Label.argTypes = {
    statusVariant: {
        control: {
            type: "select",
            options: ["default", "error", "success", "warning", "loading"],
        },
    },
    statusLabel: {
        type: "string",
    },
    title: {
        type: "string",
    },
    isOptional: {
        control: {
            type: "select",
            options: [true, false],
        },
    },
};

Label.args = {
    variant: "default",
    inputSize: "sm",
    statusVariant: "success",
    statusLabel: "success input check",
    placeholder: "Please enter your email",
    title: "Email",
};
