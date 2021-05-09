import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    compose,
    space,
    layout,
    flexbox,
    border,
    position,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    variant,
    ShadowProps,
    shadow,
} from "styled-system";

import { AnyObject } from "@type/types";
import { IconProps } from "@components/Icon";
import { Flex } from "@components/Flex/Flex";
import { Text } from "@components/Text/Text";
import { renderElement, RenderElementProp } from "@utils/renderElement";

export type AlertComponentProps = {
    icon?: RenderElementProp<IconProps>;
    label: string;
    variant?: "default" | "error" | "success" | "warning";
    size?: "sm" | "md" | "lg";
};

type StyledAlertProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    ShadowProps &
    AlertComponentProps;

const styleVariants = variant({
    prop: "variant",
    variants: {
        default: {
            bg: "alert.default",
            border: 1,
            borderColor: "border.default",
        },
        error: {
            bg: "alert.error",
            border: 1,
            borderColor: "border.error",
        },
        success: {
            bg: "alert.success",
            border: 1,
            borderColor: "border.success",
        },
        warning: {
            bg: "alert.warning",
            border: 1,
            borderColor: "border.warning",
        },
    },
});

const sizeVariants = variant({
    prop: "size",
    variants: {
        sm: {
            height: "24px",
            padding: "0px 16px",
        },
        md: {
            height: "32px",
            padding: "0px 16px",
        },
        lg: {
            height: "40px",
            padding: "0px 16px",
        },
    },
});

export type AlertProps = StyledComponentProps<"div", AnyObject, StyledAlertProps, never>;

type OmitAlertProps = Omit<AlertProps, "label">;

const StyledAlert = styled(Flex)<OmitAlertProps>(
    { width: "auto", alignItems: "center", borderRadius: "4px" },
    styleVariants,
    sizeVariants,
    compose(space, layout, flexbox, border, position, shadow),
);

export const Alert: React.FC<AlertProps> = forwardRef<HTMLDivElement, AlertProps>(
    ({ label, size = "md", variant = "default", icon, ...restProps }, ref) => {
        const getIconColor = () => {
            switch (variant) {
                case "default":
                    return "icon.default";
                case "success":
                    return "icon.success";
                case "warning":
                    return "icon.warning";
                case "error":
                    return "icon.error";
            }
        };

        const getIconSize = () => {
            switch (size) {
                case "sm":
                    return 12;
                case "md":
                    return 16;
                case "lg":
                    return 20;
            }
        };

        const getFontVariant = () => {
            switch (size) {
                case "sm":
                    return "label-sm";
                case "md":
                    return "label-md";
                case "lg":
                    return "label-lg";
            }
        };

        return (
            <StyledAlert variant={variant} size={size} {...restProps} ref={ref}>
                {renderElement(icon, { color: getIconColor(), size: getIconSize() })}
                <Text color="text.default" variant={getFontVariant()} ml={icon ? 8 : 0}>
                    {label}
                </Text>
            </StyledAlert>
        );
    },
);
