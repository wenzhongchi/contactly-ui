import React from "react";
import { Story } from "@storybook/react";
import _get from "lodash/get";

import * as ICONS from "@icon/index";

import { Tag, TagComponentProps } from "../src/Tag";

export default {
    title: "Components/Tag",
    component: Tag,
    parameters: { layout: "centered" },
    argTypes: {
        variant: {
            control: {
                type: "select",
                labels: ["default", "error", "success", "warning"],
            },
        },
        size: {
            control: {
                type: "select",
                labels: ["sm", "md", "lg"],
            },
        },
        icon: {
            control: {
                type: "select",
                labels: ["undefined", ...Object.keys(ICONS)],
            },
        },
        isClosable: {
            control: {
                type: "select",
                labels: [true, false],
            },
        },
    },
};

export const Basic: Story<TagComponentProps> = ({ icon, ...restProps }: TagComponentProps) => {
    const SelectedIcon = _get(ICONS, `${icon}`, "div"); // eslint-disable-line
    return <Tag icon={<SelectedIcon />} {...restProps} />;
};

Basic.args = {
    label: "this is a tag",
    icon: undefined,
    size: "sm",
};
