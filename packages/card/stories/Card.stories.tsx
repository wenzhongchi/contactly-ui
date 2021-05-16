import React from "react";
import { Story } from "@storybook/react";

import { Card, CardProps } from "../src/Card";
import { ArrowCard, ArrowCardProps } from "../src/ArrowCard";

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

export const Arrow: Story<ArrowCardProps> = (props: ArrowCardProps) => <ArrowCard {...props} />;

Arrow.args = {
    height: "200px",
    width: "80%",
    variant: "default",
};
