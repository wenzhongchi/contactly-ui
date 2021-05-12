import React from "react";
import { Story } from "@storybook/react";

import { Card, CardComponentProps } from "../src/Card";

export default {
    title: "Components/Card",
    component: Card,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["soft", "medium", "strong", "none"],
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

export const Basic: Story<CardComponentProps> = (props: CardComponentProps) => (
    <Card height="200px" width="80%" {...props} />
);

Basic.args = {};
