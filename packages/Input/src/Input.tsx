import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";

import { inputVariants, inputSizeVariants } from "./styles";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "default" | "success" | "error" | "warning" | "text";

export type InputComponentProps = {
    inputSize?: InputSize;
    variant?: InputVariant;
};

type StyledInputProps = StyledSystemProps & InputComponentProps;

export type InputProps = StyledComponentProps<"input", AnyObject, StyledInputProps, never>;

const StyledInput = styled.input<InputProps>(inputVariants, inputSizeVariants, composedSystem);

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    ({ variant = "default", inputSize = "md", ...restProps }, ref) => (
        <StyledInput ref={ref} variant={variant} inputSize={inputSize} {...restProps} />
    ),
);
