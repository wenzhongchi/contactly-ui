import React, { forwardRef, useCallback, useState } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { css as customCSS, SystemStyleObject } from "@styled-system/css";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";
import { Text } from "@contactly-ui/text";

import { getButtonGroupStyle, sizeVariants, styleVariants } from "./styles";
import { useButtonGroup } from "./ButtonContext";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export type ButtonVariant =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "text";

type ButtonComponentProps = {
    label?: string;
    size?: ButtonSize;
    variant?: ButtonVariant;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    disabled?: boolean;
    css?: SystemStyleObject;
};

type StyledButtonProps = StyledSystemProps & ButtonComponentProps;

export type ButtonProps = StyledComponentProps<"button", AnyObject, StyledButtonProps, never>;

export const StyledButton = styled.button<ButtonProps>(
    styleVariants,
    sizeVariants,
    ({ css }) => customCSS(css),
    composedSystem,
);

export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            label,
            variant = "default",
            size = "sm",
            leftIcon,
            rightIcon,
            disabled,
            css,
            children,
            ...restProps
        },
        ref,
    ) => {
        const [isHovered, setIsHovered] = useState(false);
        const {
            variant: groupVariant,
            size: groupSize,
            orientation: groupOrientation,
        } = useButtonGroup();

        const selectedVariant = groupVariant ?? variant;
        const selectedSize = groupSize ?? size;

        const handleMouseEnter = useCallback(() => {
            setIsHovered(true);
        }, [setIsHovered]);

        const handleMouseLeave = useCallback(() => {
            setIsHovered(false);
        }, [setIsHovered]);

        const getFontColor = useCallback(() => {
            switch (selectedVariant) {
                case "default":
                    return disabled ? "button.text-disabled" : "button.text-default";
                case "primary":
                    return disabled ? "button.text-white" : "button.text-white";
                case "secondary":
                    return disabled ? "button.text-disabled" : "button.text-white";
                case "success":
                    return disabled ? "button.text-disabled" : "button.text-white";
                case "warning":
                    return disabled ? "button.text-disabled" : "button.text-default";
                case "error":
                    return disabled ? "button.text-disabled" : "button.text-white";
                case "text":
                    if (disabled) return "button.text-disabled";
                    return isHovered ? "button.text-hover" : "button.text-default";
            }
        }, [selectedVariant, disabled, isHovered]);

        const getFontVariant = useCallback(() => {
            switch (selectedSize) {
                case "xs":
                    return "subheading";
                case "sm":
                    return "body";
                case "md":
                    return "body";
                case "lg":
                    return "display-sm";
            }
        }, [selectedSize]);

        const getIconColor = useCallback(() => {
            switch (selectedVariant) {
                case "default":
                    return disabled ? "button.icon-disabled" : "button.icon-default";
                case "primary":
                    return "button.icon-white";
                case "secondary":
                    return "button.icon-white";
                case "success":
                    return "button.icon-white";
                case "warning":
                    return disabled ? "button.icon-disabled" : "button.icon-default";
                case "error":
                    return "button.icon-white";
                case "text":
                    return disabled ? "button.icon-disabled" : "button.icon-default";
            }
        }, [selectedVariant, disabled]);

        const getIconSize = useCallback(() => {
            switch (selectedSize) {
                case "sm":
                    return 14;
                case "md":
                    return 16;
                case "lg":
                    return 24;
            }
        }, [selectedSize]);

        const getIconMargin = useCallback(() => {
            switch (selectedSize) {
                case "sm":
                    return 8;
                case "md":
                case "lg":
                    return 8;
            }
        }, [selectedSize]);

        const renderIcon = useCallback(
            (icon: React.ReactElement, isLeft: boolean) => {
                const baseStyle = {
                    width: getIconSize(),
                    height: getIconSize(),
                    color: getIconColor(),
                };

                return React.cloneElement(
                    icon as React.ReactElement,
                    isLeft
                        ? {
                              ...baseStyle,
                              mr: getIconMargin(),
                          }
                        : {
                              ...baseStyle,
                              ml: getIconMargin(),
                          },
                );
            },
            [getIconSize, getIconMargin, getIconColor],
        );

        return (
            <StyledButton
                ref={ref}
                size={selectedSize}
                variant={selectedVariant}
                disabled={disabled}
                css={groupOrientation ? { ...getButtonGroupStyle(groupOrientation), ...css } : css}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...restProps}
            >
                {leftIcon && renderIcon(leftIcon as React.ReactElement, true)}
                {label ? (
                    <Text variant={getFontVariant()} color={getFontColor()}>
                        {label}
                    </Text>
                ) : (
                    children
                )}
                {rightIcon && renderIcon(rightIcon as React.ReactElement, false)}
            </StyledButton>
        );
    },
);
