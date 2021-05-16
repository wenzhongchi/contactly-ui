import React from "react";
import { Story } from "@storybook/react";
import _get from "lodash/get";

import * as ICONS from "@icon/index";

import { Alert, AlertComponentProps } from "../src/Alert";

export default {
    title: "Components/Alert",
    component: Alert,
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
