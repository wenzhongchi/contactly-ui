import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    compose,
    variant,
    space,
    layout,
    flexbox,
    border,
    position,
    color,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    ShadowProps,
} from "styled-system";

import { AnyObject } from "@type/types";

export type CardComponentProps = {
    variant?: "soft" | "medium" | "strong" | "none";
};

export type StyledCardProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    ShadowProps &
    CardComponentProps;

const styleVariants = variant({
    variants: {
        soft: {
            border: 1,
            borderColor: "border.default",
            borderRadius: 4,
            boxShadow: "soft",
        },
        medium: {
            border: 1,
            borderColor: "border.default",
            borderRadius: 4,
            boxShadow: "medium",
        },
        strong: {
            border: 1,
            borderColor: "border.default",
            borderRadius: 4,
            boxShadow: "strong",
        },
        none: {
            border: 0,
            borderColor: "border.transparent",
        },
    },
});

export type CardProps = StyledComponentProps<"div", AnyObject, StyledCardProps, never>;

const StyledCard: React.FC<CardProps> = styled.div<CardProps>(
    {
        boxSizing: "border-box",
        display: "flex",
    },
    styleVariants,
    compose(space, color, layout, flexbox, border, position),
);

export const Card: React.FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
    ({ children, variant = "soft", ...restProps }, ref) => (
        <StyledCard ref={ref} variant={variant} {...restProps}>
            {children}
        </StyledCard>
    ),
);
