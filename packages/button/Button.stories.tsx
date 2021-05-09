/* eslint-disable no-console, react/jsx-no-bind */

import React from "react";
import { Story } from "@storybook/react";
import _get from "lodash/get";

import * as ICONS from "@icon/index";

import { Button, ButtonComponentProps } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    parameters: { layout: "centered" },
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["default", "success", "error", "warning", "disabled", "transparent"],
            },
        },
        size: {
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
        leftIcon: {
            control: {
                type: "select",
                options: ["undefined", ...Object.keys(ICONS)],
            },
        },
        rightIcon: {
            control: {
                type: "select",
                options: ["undefined", ...Object.keys(ICONS)],
            },
        },
        label: {
            type: "string",
        },
        outlined: {
            control: {
                type: "select",
                options: [true, false],
            },
        },
    },
};

export const Basic: Story<ButtonComponentProps> = ({
    leftIcon,
    rightIcon,
    ...restProps
}: ButtonComponentProps) => {
    const LeftIcon = _get(ICONS, `${leftIcon}`, "div"); // eslint-disable-line
    const RightIcon = _get(ICONS, `${rightIcon}`, "div"); // eslint-disable-line
    return <Button leftIcon={<LeftIcon />} rightIcon={<RightIcon />} {...restProps} />;
};

Basic.args = {
    variant: "default",
    size: "sm",
    label: "Click Me",
    outlined: false,
};
