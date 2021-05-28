import React from "react";
import { Story } from "@storybook/react";

import { Checkbox, CheckboxComponentProps } from "../src/Checkbox";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: { layout: "centered" },
    argTypes: {
        label: {
            type: "string",
        },
        disabled: {
            control: {
                type: "select",
                options: [true, false],
            },
        },
        checked: {
            control: {
                type: "select",
                options: [true, false],
            },
        },
        onChange: { action: "clicked" },
    },
};

export const Default: Story<CheckboxComponentProps> = (props: CheckboxComponentProps) => (
    <Checkbox {...props} />
);

Default.args = {
    label: "checkbox text",
    disabled: false,
    checked: false,
};
