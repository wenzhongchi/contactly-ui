import React from "react";
import { Story } from "@storybook/react";
import _get from "lodash/get";

import * as ICONS from "@icon/index";

import { Alert, AlertComponentProps } from "./Alert";

export default {
    title: "Components/Alert",
    component: Alert,
    parameters: { layout: "centered" },
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["default", "error", "success", "warning"],
            },
        },
        size: {
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
        icon: {
            control: {
                type: "select",
                options: ["undefined", ...Object.keys(ICONS)],
            },
        },
    },
};

export const Basic: Story<AlertComponentProps> = ({ icon, ...restProps }: AlertComponentProps) => {
    const SelectedIcon = _get(ICONS, `${icon}`, "div"); // eslint-disable-line
    return <Alert icon={<SelectedIcon />} {...restProps} />;
};

Basic.args = {
    label: "this is a label",
    icon: "IconActivity",
    size: "sm",
};
