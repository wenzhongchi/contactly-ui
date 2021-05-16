import React from "react";
import { Story } from "@storybook/react";

import { Checkbox, CheckboxComponentProps } from "../src/Checkbox";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: { layout: "centered" },
    argTypes: {
        variant: {
            control: {
                type: "select",
                labels: ["default", "error", "disabled"],
            },
        },
        label: {
            type: "string",
        },
        onChange: { action: "clicked" },
    },
};

export const Default: Story<CheckboxComponentProps> = (props: CheckboxComponentProps) => (
    <Checkbox {...props} />
);

Default.args = {
    variant: "default",
    label: "checkbox description",
};
