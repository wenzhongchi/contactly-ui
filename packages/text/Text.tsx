import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    compose,
    space,
    variant,
    color,
    layout,
    flexbox,
    border,
    position,
    typography,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    TypographyProps,
} from "styled-system";

import { AnyObject } from "@type/types";

type StyledTextProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    TypographyProps & {
        as?: "p" | "span";
        variant?:
            | "h1"
            | "h2"
            | "h3"
            | "h4"
            | "h5"
            | "label-lg"
            | "label-md"
            | "label-sm"
            | "body-lg"
            | "body-md"
            | "body-sm";
    };

const textVariants = variant({
    variants: {
        h1: {
            fontFamily: "heading",
            fontWeight: "bold",
            lineHeight: 48,
            fontSize: 32,
        },
        h2: {
            fontFamily: "heading",
            fontWeight: "bold",
            lineHeight: 32,
            fontSize: 24,
        },
        h3: {
            fontFamily: "heading",
            fontWeight: "bold",
            lineHeight: 24,
            fontSize: 18,
        },
        h4: {
            fontFamily: "heading",
            fontWeight: 600,
            lineHeight: 24,
            fontSize: 16,
        },
        h5: {
            fontFamily: "heading",
            fontWeight: 600,
            lineHeight: 24,
            fontSize: 14,
        },
        "label-lg": {
            fontFamily: "label",
            lineHeight: 24,
            fontSize: 16,
        },
        "label-md": {
            fontFamily: "label",
            lineHeight: 16,
            fontSize: 14,
        },
        "label-sm": {
            fontFamily: "label",
            lineHeight: 16,
            fontSize: 12,
        },
        "body-lg": {
            fontFamily: "body",
            lineHeight: 28,
            fontSize: 16,
        },
        "body-md": {
            fontFamily: "body",
            lineHeight: 20,
            fontSize: 14,
        },
        "body-sm": {
            fontFamily: "body",
            lineHeight: 18,
            fontSize: 12,
        },
    },
});

export type TextProps = StyledComponentProps<"p", AnyObject, StyledTextProps, never>;

const StyledText = styled.p<TextProps>(
    textVariants,
    compose(space, color, layout, flexbox, border, position, typography),
);

export const Text: React.FC<TextProps> = forwardRef<HTMLParagraphElement, TextProps>(
    ({ as, children, variant = "h1", color = "text.primary", ...restProps }, ref) => (
        <StyledText margin={0} variant={variant} color={color} ref={ref} as={as} {...restProps}>
            {children}
        </StyledText>
    ),
);
