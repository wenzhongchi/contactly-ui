import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { variant } from "styled-system";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";

export type ArrowCardComponentProps = {
    variant?: "default" | "soft" | "medium" | "strong";
};

export type StyledArrowCardProps = StyledSystemProps & ArrowCardComponentProps;

const styleVariants = variant({
    variants: {
        default: {
            border: 1,
            borderColor: "card.border-default",
            borderRadius: 4,
            boxShadow: "none",
        },
        soft: {
            border: 1,
            borderColor: "card.border-default",
            borderRadius: 4,
            boxShadow: "elevation1",
        },
        medium: {
            border: 1,
            borderColor: "card.border-default",
            borderRadius: 4,
            boxShadow: "elevation2",
        },
        strong: {
            border: 1,
            borderColor: "card.border-default",
            borderRadius: 4,
            boxShadow: "elevation3",
        },
    },
});

export type ArrowCardProps = StyledComponentProps<"div", AnyObject, StyledArrowCardProps, never>;

const StyledArrowCard: React.FC<ArrowCardProps> = styled.div<ArrowCardProps>(
    ({
        theme: {
            colors: { card },
        },
    }) => ({
        boxSizing: "border-box",
        display: "flex",
        position: "relative",
        "::before": {
            content: "''",
            position: "absolute",
            bottom: "8px",
            left: "-14px",
            width: 0,
            height: 0,
            border: "7px solid transparent",
            borderRightColor: card["border"],
        },
        "::after": {
            content: "''",
            position: "absolute",
            bottom: "9px",
            left: "-12px",
            width: 0,
            height: 0,
            border: "6px solid transparent",
            borderRightColor: "white",
        },
    }),
    styleVariants,
    composedSystem,
);

export const ArrowCard: React.FC<ArrowCardProps> = forwardRef<HTMLDivElement, ArrowCardProps>(
    ({ children, variant = "default", ...restProps }, ref) => (
        <StyledArrowCard ref={ref} variant={variant} {...restProps}>
            {children}
        </StyledArrowCard>
    ),
);
