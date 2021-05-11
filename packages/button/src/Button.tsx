import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";

import { AnyObject, composeSystem, StyledSystemProps } from "@contactly-ui/system";
import { Text } from "@contactly-ui/text";

import { sizeVariants, styleVariants } from "./styles";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonVariant =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "text";

export type ButtonComponentProps = {
    label?: string;
    size?: ButtonSize;
    variant?: ButtonVariant;
    leftIcon?: React.ReactElement;
    rightIcon: React.ReactElement;
    isDisabled?: boolean;
};

type StyledButtonProps = StyledSystemProps & ButtonComponentProps;

export type ButtonProps = StyledComponentProps<"button", AnyObject, StyledButtonProps, never>;

const StyledButton = styled.button<ButtonProps>(
    ({ theme: { colors }, isDisabled }) => {
        if (isDisabled)
            return {
                backgroundColor: colors.button.transparent,
            };
    },
    styleVariants,
    sizeVariants,
    composeSystem,
);

export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const { label, variant = "default", size = "sm", icon, isDisabled, ...restProps } = props;

        const getFontColor = () => {
            switch (variant) {
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

        const getFontVariant = () => {
            switch (size) {
                case "sm":
                    return "body";
                case "md":
                    return "body";
                case "lg":
                    return "body";
            }
        };

        const getIconColor = () => {
            switch (variant) {
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
                    return 8;
                case "md":
                case "lg":
                    return 8;
            }
        };

        return (
            <StyledButton ref={ref} isDisabled={isDisabled} size={size} {...restProps}>
                {icon}
                {label && (
                    <Text variant={getFontVariant()} color={getFontColor()}>
                        {label}
                    </Text>
                )}
            </StyledButton>
        );
    },
);
