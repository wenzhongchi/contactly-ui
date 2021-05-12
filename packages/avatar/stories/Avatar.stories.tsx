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
                options: ["sm", "md", "lg"],
            },
        },
    },
};

export const Image: Story<AvatarComponentProps> = (props: AvatarComponentProps) => (
    <Avatar {...props} />
);

Image.args = {
    src: "https://i1.sndcdn.com/avatars-000333187303-234nv2-t500x500.jpg",
};

export const Placeholder: Story<AvatarComponentProps> = (props: AvatarComponentProps) => (
    <Avatar {...props} />
);

Placeholder.args = {
    src: undefined,
};
