import React from "react";
import { Story } from "@storybook/react";

import { Hint, HintComponentProps } from "../src/Hint";

export default {
    title: "Components/Hint",
    component: Hint,
    parameters: { layout: "centered" },
    argTypes: {
        variant: {
            control: {
                type: "select",
                labels: ["default", "error", "success", "warning"],
            },
        },
        label: {
            type: "string",
        },
    },
};

export const Basic: Story<HintComponentProps> = (props: HintComponentProps) => <Hint {...props} />;

Basic.args = {
    label: "this is a hint",
    variant: "default",
};
