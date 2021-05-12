import React from "react";
import { Story } from "@storybook/react";

import { Input, InputComponentProps } from "../src/Input";
import { TextInput, TextInputProps } from "./TextInput";
import { PasswordInput, PasswordInputProps } from "./PasswordInput";

export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["default", "error", "success", "warning", "disabled", "dark"],
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

export const Text: Story<TextInputProps> = (props: TextInputProps) => <TextInput {...props} />;

Text.argTypes = {
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

Text.args = {
    variant: "default",
    inputSize: "sm",
    statusVariant: "success",
    statusLabel: "success input check",
    placeholder: "Please enter your email",
    title: "Email",
};

export const Password: Story<PasswordInputProps> = (props: PasswordInputProps) => (
    <PasswordInput {...props} />
);

Password.argTypes = {
    variant: {
        control: {
            type: "select",
            options: ["default", "error", "success", "warning", "disabled", "dark"],
        },
    },
    inputSize: {
        control: {
            type: "select",
            options: ["sm", "md", "lg"],
        },
    },
    title: {
        type: "string",
    },
};

Password.args = {
    variant: "default",
    placeholder: "Please enter your password",
    title: "Password",
    showHint: true,
    hasProgress: true,
};
