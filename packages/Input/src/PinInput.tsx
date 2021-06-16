import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";

import { pinInputVariants, pinInputSizeVariants } from "./styles";
import { InputSize } from "./Input";

export type PinInputVariant = "default" | "success" | "error";

type StyledPinInputProps = StyledSystemProps & {
    variant?: PinInputVariant;
    inputSize?: InputSize;
};

export type PinInputProps = StyledComponentProps<"input", AnyObject, StyledPinInputProps, never>;

const StyledPinInput = styled.input<PinInputProps>(
    pinInputVariants,
    pinInputSizeVariants,
    composedSystem,
);

export const PinInput: React.FC<PinInputProps> = forwardRef<HTMLInputElement, PinInputProps>(
    ({ variant = "default", inputSize = "md", ...props }, ref) => (
        <StyledPinInput
            required={true}
            maxLength={1}
            ref={ref}
            variant={variant}
            inputSize={inputSize}
            {...props}
        />
    ),
);
