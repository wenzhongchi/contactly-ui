import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    border,
    compose,
    flexbox,
    layout,
    position,
    space,
    variant,
    BorderProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
} from "styled-system";

import { IconProps } from "@components/Icon";
import { AnyObject } from "@type/types";
import { useColor } from "@hooks/useColor";
import { renderElement, RenderElementProp } from "@utils/renderElement";
import { Text } from "@components/Text";

export type ButtonVariant =
    | "default"
    | "success"
    | "error"
    | "warning"
    | "disabled"
    | "transparent";

export type ButtonComponentProps = {
    label?: string;
    size?: "sm" | "md" | "lg";
    outlined?: boolean;
    variant?: ButtonVariant;
    leftIcon?: RenderElementProp<IconProps>;
    rightIcon?: RenderElementProp<IconProps>;
    hoverColor?: string;
};

type StyledButtonProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    ButtonComponentProps;

const sharedStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 16,
    borderRadius: 4,
    border: 1,
    boxSizing: "border-box",
    appearance: "none",
    "&:focus": {
        outline: "none",
    },
    ml: 0,
    mr: 0,
    mt: 0,
    mb: 0,
};

const defaultStyles = {
    borderColor: "border.default",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.light",
    },
};

const successStyles = {
    borderColor: "border.success",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.success",
    },
};

const errorStyles = {
    borderColor: "border.error",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.error",
    },
};

const warningStyles = {
    borderColor: "border.secondary",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.warning",
    },
};

const disabledStyles = {
    borderColor: "border.disabled",
    cursor: "not-allowed",
};

const transparentStyles = {
    borderColor: "border.transparent",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.light",
    },
};

const styleVariants = variant({
    variants: {
        default: {
            ...sharedStyles,
            ...defaultStyles,
        },
        success: {
            ...sharedStyles,
            ...successStyles,
        },
        error: {
            ...sharedStyles,
            ...errorStyles,
        },
        warning: {
            ...sharedStyles,
            ...warningStyles,
        },
        disabled: {
            ...sharedStyles,
            ...disabledStyles,
        },
        transparent: {
            ...sharedStyles,
            ...transparentStyles,
        },
    },
});

const sizeVariants = variant({
    prop: "size",
    variants: {
        sm: {
            height: "28px",
            padding: "0px 8px",
        },
        md: {
            height: "32px",
            padding: "0px 16px",
        },
        lg: {
            height: "38px",
            padding: "0px 16px",
        },
    },
});

export type ButtonProps = StyledComponentProps<"button", AnyObject, StyledButtonProps, never>;

const StyledButton = styled.button<ButtonProps>(
    ({ hoverColor }) => {
        if (hoverColor) {
            return {
                "&:hover": {
                    backgroundColor: hoverColor,
                },
            };
        }
    },
    ({ theme: { colors }, outlined, variant }) => {
        if (outlined)
            return {
                backgroundColor: colors.button.transparent,
            };

        switch (variant) {
            case "default":
                return {
                    backgroundColor: colors.button.default,
                };
            case "transparent":
                return {
                    backgroundColor: colors.button.transparent,
                };
            case "success":
                return {
                    backgroundColor: colors.button.success,
                };
            case "warning":
                return {
                    backgroundColor: colors.button.warning,
                };
            case "error":
                return {
                    backgroundColor: colors.button.error,
                };
            case "disabled":
                return {
                    backgroundColor: colors.button.disabled,
                };
        }
    },
    styleVariants,
    sizeVariants,
    compose(space, layout, flexbox, border, position),
);

export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const {
            outlined,
            label,
            variant = "default",
            size = "sm",
            leftIcon,
            rightIcon,
            hoverColor,
            ...restProps
        } = props;

        const getFontColor = () => {
            switch (variant) {
                case "default":
                case "transparent":
                    return "text.default";
                case "success":
                    return outlined ? "text.success" : "text.white";
                case "warning":
                    return outlined ? "text.warning" : "text.white";
                case "error":
                    return outlined ? "text.error" : "text.white";
                case "disabled":
                    return "text.disabled";
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

        const getIconColor = () => {
            switch (variant) {
                case "default":
                case "transparent":
                    return "icon.default";
                case "success":
                    return outlined ? "icon.success" : "icon.white";
                case "error":
                    return outlined ? "icon.error" : "icon.white";
                case "warning":
                    return outlined ? "icon.warning" : "icon.white";
                case "disabled":
                    return "icon.disabled";
            }
        };

        const getIconSize = () => {
            switch (size) {
                case "sm":
                    return 12;
                case "md":
                    return 16;
                case "lg":
                    return 24;
            }
        };

        const getIconMargin = () => {
            switch (size) {
                case "sm":
                    return 6;
                case "md":
                case "lg":
                    return 10;
            }
        };

        return (
            <StyledButton
                ref={ref}
                outlined={outlined}
                variant={variant}
                size={size}
                hoverColor={useColor(hoverColor ?? "")}
                {...restProps}
            >
                {leftIcon &&
                    renderElement(leftIcon, {
                        color: getIconColor(),
                        size: getIconSize(),
                        mr: getIconMargin(),
                    })}
                {label && (
                    <Text variant={getFontVariant()} color={getFontColor()}>
                        {label}
                    </Text>
                )}
                {rightIcon &&
                    renderElement(rightIcon, {
                        color: getIconColor(),
                        size: getIconSize(),
                        ml: getIconMargin(),
                    })}
            </StyledButton>
        );
    },
);
