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

import { AnyObject } from "@type/types";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "default" | "success" | "error" | "warning" | "disabled" | "dark";

export type InputComponentProps = {
    inputSize?: InputSize;
    variant?: InputVariant;
};

type StyledInputProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    InputComponentProps;

const sharedStyles = {
    borderRadius: 4,
    border: 1,
    paddingLeft: 8,
    "::-webkit-input-placeholder": {
        color: "text.disabled",
    },
};

const smSizeStyles = {
    fontFamily: "body",
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 24,
    height: "28px",
};

const mdSizeStyles = {
    fontFamily: "body",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 24,
    height: "34px",
};

const lgSizeStyles = {
    fontFamily: "body",
    fontSize: 24,
    fontWeight: "normal",
    lineHeight: 32,
    height: "40px",
};

const defaultStyles = {
    type: "text",
    bg: "input.default",
    color: "text.primary",
    borderColor: "border.default",
    "&:focus": {
        borderColor: "border.default",
        outline: "none",
    },
};

const successStyles = {
    bg: "input.success",
    color: "text.primary",
    borderColor: "border.success",
    "&:focus": {
        borderColor: "border.success",
        outline: "none",
    },
};

const errorStyles = {
    bg: "input.error",
    color: "text.primary",
    borderColor: "border.error",
    "&:focus": {
        borderColor: "border.error",
        outline: "none",
    },
};

const warningStyles = {
    bg: "input.warning",
    color: "text.primary",
    borderColor: "border.warning",
    "&:focus": {
        borderColor: "border.warning",
        outline: "none",
    },
};

const darkStyles = {
    bg: "input.dark",
    color: "text.disabled",
    borderColor: "border.default",
    "&:focus": {
        borderColor: "border.white",
        outline: "none",
    },
};

const disabledStyles = {
    bg: "input.disabled",
    color: "text.disabled",
    borderColor: "border.light",
    disabled: "disabled",
    cursor: "not-allowed",
    "&:focus": {
        outline: "none",
    },
};

const inputVariants = variant({
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
        dark: {
            ...sharedStyles,
            ...darkStyles,
        },
    },
});

const inputSizeVariants = variant({
    prop: "inputSize",
    variants: {
        sm: smSizeStyles,
        md: mdSizeStyles,
        lg: lgSizeStyles,
    },
});

export type InputProps = StyledComponentProps<"input", AnyObject, StyledInputProps, never>;

const StyledInput = styled.input<InputProps>(
    inputVariants,
    inputSizeVariants,
    compose(space, layout, flexbox, border, position),
);

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    ({ variant = "default", inputSize = "md", ...props }, ref) => (
        <StyledInput
            ref={ref}
            variant={variant}
            inputSize={inputSize}
            disabled={variant === "disabled"}
            {...props}
        />
    ),
);
