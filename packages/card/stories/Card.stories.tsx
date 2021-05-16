import React from "react";
import { Story } from "@storybook/react";

import { Card, CardProps } from "../src/Card";

export default {
    title: "Components/Card",
    component: Card,
    argTypes: {
        variant: {
            control: {
                type: "select",
                labels: ["default", "soft", "medium", "strong"],
            },
        },
        height: {
            type: "string",
        },
        width: {
            type: "string",
        },
    },
};

export const Default: Story<CardProps> = (props: CardProps) => (
    <Card height="200px" width="80%" {...props} />
);

Default.args = {
    height: "200px",
    width: "80%",
    variant: "default",
};
