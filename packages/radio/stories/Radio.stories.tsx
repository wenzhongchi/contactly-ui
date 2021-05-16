import React from "react";
import { Story } from "@storybook/react";

import { Radio, RadioComponentProps } from "../src/Radio";

export default {
    title: "Components/Radio",
    component: Radio,
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

export const Basic: Story<RadioComponentProps> = (props: RadioComponentProps) => (
    <Radio {...props} />
);

Basic.args = {
    variant: "default",
    label: "checkbox description",
};
