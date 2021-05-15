import React from "react";
import { Story } from "@storybook/react";

import { Avatar, AvatarComponentProps } from "../src/Avatar";

export default {
    title: "Components/Avatar",
    component: Avatar,
    parameters: { layout: "centered" },
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["xs", "sm", "md", "lg", "xl"],
            },
        },
        src: {
            type: "string",
        },
        label: {
            type: "string",
        },
    },
};

export const Image: Story<AvatarComponentProps> = (props: AvatarComponentProps) => (
    <Avatar {...props} />
);

Image.args = {
    src: "https://i1.sndcdn.com/avatars-000333187303-234nv2-t500x500.jpg",
    variant: "md",
};

export const Label: Story<AvatarComponentProps> = (props: AvatarComponentProps) => (
    <Avatar {...props} />
);

Label.args = {
    label: "AB",
    variant: "md",
};
