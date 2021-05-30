import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { variant } from "styled-system";

import { AnyObject, StyledSystemTextProps, composedTextSystem } from "@contactly-ui/system";

export type TextVariant =
    | "display-xl"
    | "display-lg"
    | "display-md"
    | "display-sm"
    | "heading"
    | "caption"
    | "subheading"
    | "body-lg"
    | "body-md"
    | "body-sm";

type TextComponentProps = {
    as?: "p" | "span";
    variant?: TextVariant;
};

type StyledTextProps = StyledSystemTextProps & TextComponentProps;

const textVariants = variant({
    variants: {
        "display-xl": {
            fontFamily: "body",
            fontWeight: 500,
            lineHeight: 44,
            fontSize: 42,
        },
        "display-lg": {
            fontFamily: "body",
            fontWeight: "normal",
            lineHeight: 32,
            fontSize: 28,
        },
        "display-md": {
            fontFamily: "body",
            fontWeight: "normal",
            lineHeight: 32,
            fontSize: 26,
        },
        "display-sm": {
            fontFamily: "body",
            fontWeight: "normal",
            lineHeight: 24,
            fontSize: 20,
        },
        heading: {
            fontFamily: "heading",
            fontWeight: 500,
            lineHeight: 24,
            fontSize: 16,
        },
        caption: {
            fontFamily: "heading",
            fontWeight: "normal",
            lineHeight: 16,
            fontSize: 12,
        },
        subheading: {
            fontFamily: "heading",
            fontWeight: 600,
            lineHeight: 16,
            fontSize: 12,
        },
        "body-lg": {
            fontFamily: "heading",
            fontWeight: "normal",
            lineHeight: 20,
            fontSize: 14,
        },
        "body-md": {
            fontFamily: "heading",
            fontWeight: "normal",
            lineHeight: 16,
            fontSize: 12,
        },
        "body-sm": {
            fontFamily: "heading",
            fontWeight: "normal",
            lineHeight: 14,
            fontSize: 10,
        },
    },
});

export type TextProps = StyledComponentProps<"p", AnyObject, StyledTextProps, never>;

const StyledText = styled.p<TextProps>(textVariants, composedTextSystem);

export const Text: React.FC<TextProps> = forwardRef<HTMLParagraphElement, TextProps>(
    ({ as, children, variant = "body-md", color = "text.primary", ...restProps }, ref) => (
        <StyledText margin={0} variant={variant} color={color} ref={ref} as={as} {...restProps}>
            {children}
        </StyledText>
    ),
);
