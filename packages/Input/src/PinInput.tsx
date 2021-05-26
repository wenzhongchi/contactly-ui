import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { variant } from "styled-system";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";

type StyledPinInputProps = StyledSystemProps & {
    variant?: "primary" | "success" | "danger";
};

const defaultStyles = {
    boxSizing: "border-box",
    borderRadius: 4,
    textAlign: "center",
    padding: 0,
    height: 48,
    background: "bg.secondary",
    color: "text.primary",
    border: 1,
    fontFamily: "heading",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24,
};

const inputVariants = variant({
    variants: {
        primary: {
            ...defaultStyles,
            borderColor: "border.light",
            "&:focus": {
                borderColor: "button.primary",
                outline: "none",
            },
            "&:valid": {
                borderColor: "button.primary",
                outline: "none",
            },
        },
        success: {
            ...defaultStyles,
            borderColor: "border.light",
            "&:focus": {
                borderColor: "button.success",
                outline: "none",
            },
            "&:valid": {
                borderColor: "button.success",
                outline: "none",
            },
        },
        danger: {
            ...defaultStyles,
            borderColor: "border.light",
            "&:focus": {
                borderColor: "button.danger",
                outline: "none",
            },
            "&:valid": {
                borderColor: "button.danger",
                outline: "none",
            },
        },
    },
});

export type PinInputFieldProps = StyledComponentProps<
    "input",
    AnyObject,
    StyledPinInputProps,
    never
>;

const StyledPinInput = styled.input<PinInputFieldProps>(inputVariants, composedSystem);

export const PinInput: React.FC<PinInputFieldProps> = forwardRef<
    HTMLInputElement,
    PinInputFieldProps
>(({ variant, ...props }, ref) => (
    <StyledPinInput required={true} maxLength={1} ref={ref} variant={variant} {...props} />
));

PinInput.defaultProps = {
    variant: "primary",
};
