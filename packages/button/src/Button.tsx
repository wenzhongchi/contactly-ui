import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { css as customCSS, SystemStyleObject } from "@styled-system/css";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";
import { Text, TextVariant } from "@contactly-ui/text";
import { Box } from "@contactly-ui/box";

import { getButtonGroupStyle, sizeVariants, styleVariants } from "./styles";
import { useButtonGroup } from "./ButtonContext";

export type ButtonSize = "sm" | "md" | "lg";

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
    isDisabled?: boolean;
    css?: SystemStyleObject;
};

type StyledButtonProps = StyledSystemProps & ButtonComponentProps;

export type ButtonProps = StyledComponentProps<"button", AnyObject, StyledButtonProps, never>;

export const StyledButton = styled.button<ButtonProps>(
    ({ theme: { colors }, isDisabled }) => {
        if (isDisabled)
            return {
                backgroundColor: colors.button.transparent,
            };
    },
    ({ css }) => customCSS(css),
    styleVariants,
    sizeVariants,
    composedSystem,
);

export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { label, variant = "default", size = "sm", leftIcon, rightIcon, isDisabled, ...restProps },
        ref,
    ) => {
        const {
            variant: groupVariant,
            size: groupSize,
            orientation: groupOrientation,
        } = useButtonGroup();

        const selectedVariant = groupVariant ?? variant;
        const selectedSize = groupSize ?? size;

        const getFontColor = () => {
            switch (selectedVariant) {
                case "default":
                    return isDisabled ? "text.disabled" : "text.default";
                case "primary":
                    return "text.white";
                case "secondary":
                    return "text.white";
                case "success":
                    return "text.white";
                case "warning":
                    return "text.white";
                case "error":
                    return "text.white";
                case "text":
                    return isDisabled ? "text.disabled" : "text.default";
            }
        };

        const getFontVariant = (): TextVariant => {
            switch (selectedSize) {
                case "sm":
                    return "body";
                case "md":
                    return "body";
                case "lg":
                    return "body";
            }
        };

        // const getIconColor = () => {
        //     switch (selectedVariant) {
        //         case "default":
        //             return isDisabled ? "text.disabled" : "text.default";
        //         case "primary":
        //             return "text.white";
        //         case "secondary":
        //             return "text.white";
        //         case "success":
        //             return "text.white";
        //         case "warning":
        //             return "text.white";
        //         case "error":
        //             return "text.white";
        //         case "text":
        //             return isDisabled ? "text.disabled" : "text.default";
        //     }
        // };

        const getIconSize = () => {
            switch (selectedSize) {
                case "sm":
                    return 12;
                case "md":
                    return 16;
                case "lg":
                    return 24;
            }
        };

        const getIconMargin = () => {
            switch (selectedSize) {
                case "sm":
                    return 8;
                case "md":
                case "lg":
                    return 8;
            }
        };

        return (
            <StyledButton
                ref={ref}
                isDisabled={isDisabled}
                size={selectedSize}
                variant={selectedVariant}
                css={groupOrientation ? getButtonGroupStyle(groupOrientation) : {}}
                {...restProps}
            >
                {leftIcon && (
                    <Box width={getIconSize()} height={getIconSize()} mr={getIconMargin()}>
                        {leftIcon}
                    </Box>
                )}
                {label && (
                    <Text variant={getFontVariant()} color={getFontColor()}>
                        {label}
                    </Text>
                )}
                {rightIcon && (
                    <Box width={getIconSize()} height={getIconSize()} ml={getIconMargin()}>
                        {rightIcon}
                    </Box>
                )}
            </StyledButton>
        );
    },
);
