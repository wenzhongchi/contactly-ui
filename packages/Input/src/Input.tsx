import React, { forwardRef, useCallback } from "react";
import styled, { StyledComponentProps } from "styled-components";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";

import { Box } from "@contactly-ui/box";

import { inputVariants, inputSizeVariants } from "./styles";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "default" | "success" | "error" | "warning" | "text";

export type InputComponentProps = {
    inputSize?: InputSize;
    variant?: InputVariant;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};

type StyledInputProps = StyledSystemProps & InputComponentProps;

export type InputProps = StyledComponentProps<"input", AnyObject, StyledInputProps, never>;

const StyledInput = styled.input<InputProps>(inputVariants, inputSizeVariants, composedSystem);

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            variant = "default",
            inputSize = "md",
            disabled,
            leftIcon,
            rightIcon,
            m,
            ml,
            mr,
            mb,
            mt,
            width,
            ...restProps
        },
        ref,
    ) => {
        const getIconSize = useCallback(() => {
            switch (inputSize) {
                case "sm":
                    return 12;
                case "md":
                    return 14;
                case "lg":
                    return 20;
            }
        }, [inputSize]);

        const getIconMargin = useCallback(() => {
            switch (inputSize) {
                case "sm":
                    return 6;
                case "md":
                    return 11;
                case "lg":
                    return 12;
            }
        }, [inputSize]);

        const getInputPadding = useCallback(
            (icon: React.ReactNode) => {
                switch (inputSize) {
                    case "sm":
                        return icon ? "30px" : "10px";
                    case "md":
                        return icon ? "30px" : "12px";
                    case "lg":
                        return icon ? "36px" : "12px";
                }
            },
            [inputSize],
        );

        const renderIcon = useCallback(
            (icon: React.ReactNode) =>
                React.cloneElement(icon as React.ReactElement, {
                    width: getIconSize(),
                    height: getIconSize(),
                }),
            [getIconSize],
        );

        return (
            <Box m={m} ml={ml} mr={mr} mb={mb} mt={mt} width={width} position="relative">
                <StyledInput
                    ref={ref}
                    variant={variant}
                    inputSize={inputSize}
                    disabled={disabled}
                    backgroundColor={disabled ? "input.bg-disabled" : undefined}
                    color={disabled ? "input.disabled" : undefined}
                    pl={getInputPadding(leftIcon)}
                    pr={getInputPadding(rightIcon)}
                    width="100%"
                    {...restProps}
                />
                {leftIcon && (
                    <Box position="absolute" top={getIconMargin()} left="10px">
                        {renderIcon(leftIcon)}
                    </Box>
                )}
                {rightIcon && (
                    <Box position="absolute" top={getIconMargin()} right="10px">
                        {renderIcon(rightIcon)}
                    </Box>
                )}
            </Box>
        );
    },
);
