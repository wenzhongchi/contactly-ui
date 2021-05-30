import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { variant } from "styled-system";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";

export type CardComponentProps = {
    variant?: "default" | "soft" | "medium" | "strong";
};

export type StyledCardProps = StyledSystemProps & CardComponentProps;

const styleVariants = variant({
    variants: {
        default: {
            border: 1,
            borderColor: "card.border",
            borderRadius: 4,
            boxShadow: "none",
        },
        soft: {
            border: 1,
            borderColor: "card.border",
            borderRadius: 4,
            boxShadow: "elevation1",
        },
        medium: {
            border: 1,
            borderColor: "card.border",
            borderRadius: 4,
            boxShadow: "elevation2",
        },
        strong: {
            border: 1,
            borderColor: "card.border",
            borderRadius: 4,
            boxShadow: "elevation3",
        },
    },
});

export type CardProps = StyledComponentProps<"div", AnyObject, StyledCardProps, never>;

const StyledCard: React.FC<CardProps> = styled.div<CardProps>(
    {
        boxSizing: "border-box",
        display: "flex",
        overflow: "hidden",
    },
    styleVariants,
    composedSystem,
);

export const Card: React.FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
    ({ children, variant = "default", ...restProps }, ref) => (
        <StyledCard ref={ref} variant={variant} {...restProps}>
            {children}
        </StyledCard>
    ),
);
