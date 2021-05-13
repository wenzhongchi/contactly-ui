import React, { forwardRef, useMemo } from "react";

import { Flex } from "@contactly-ui/flex";

import { InputSize, InputVariant } from "./Input";
import { InputGroupProvider } from "./InputContext";

export type InputGroupProps = {
    variant?: InputVariant;
    size?: InputSize;
};

export const InputGroup: React.FC<InputGroupProps> = forwardRef<HTMLDivElement, InputGroupProps>(
    ({ children, variant = "default", size = "sm", ...restProps }, ref) => {
        const state = useMemo<InputGroupProps>(
            () => ({
                variant,
                size,
            }),
            [variant, size],
        );

        return (
            <InputGroupProvider value={state}>
                <Flex ref={ref} display="inline-flex" flexDirection="row" {...restProps}>
                    {children}
                </Flex>
            </InputGroupProvider>
        );
    },
);
