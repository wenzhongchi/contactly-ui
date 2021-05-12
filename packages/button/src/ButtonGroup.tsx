import React, { forwardRef, useMemo } from "react";

import { Flex } from "@contactly-ui/flex";

import { ButtonSize, ButtonVariant } from "./Button";
import { ButtonGroupProvider } from "./ButtonContext";

export type ButtonOrientation = "horizontal" | "vertical";

export type ButtonGroupProps = {
    orientation?: ButtonOrientation;
    variant?: ButtonVariant;
    size?: ButtonSize;
};

export const ButtonGroup: React.FC<ButtonGroupProps> = forwardRef<HTMLDivElement, ButtonGroupProps>(
    (
        { children, orientation = "horizontal", variant = "default", size = "sm", ...restProps },
        ref,
    ) => {
        const state = useMemo<ButtonGroupProps>(
            () => ({
                orientation,
                variant,
                size,
            }),
            [orientation, variant, size],
        );

        return (
            <ButtonGroupProvider value={state}>
                <Flex
                    ref={ref}
                    display="inline-flex"
                    flexDirection={orientation === "horizontal" ? "row" : "column"}
                    {...restProps}
                >
                    {children}
                </Flex>
            </ButtonGroupProvider>
        );
    },
);
