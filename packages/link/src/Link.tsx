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

export type LinkComponentProps = {
    size?: "sm" | "md" | "lg";
};

type StyledLinkProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    TypographyProps &
    LinkComponentProps;

const sizeVariants = variant({
    prop: "size",
    variants: {
        sm: {
            cursor: "pointer",
            fontFamily: "label",
            fontWeight: 400,
            lineHeight: 16,
            fontSize: 12,
            textDecoration: "none",
            "&:hover": {
                color: "highlight.link",
            },
            "&:active": {
                color: "highlight.link",
            },
        },
        md: {
            cursor: "pointer",
            fontFamily: "body",
            fontWeight: 400,
            lineHeight: 16,
            fontSize: 14,
            textDecoration: "none",
            py: 4,
            "&:hover": {
                color: "highlight.link",
            },
            "&:active": {
                color: "highlight.link",
            },
        },
        lg: {
            cursor: "pointer",
            fontFamily: "body",
            fontWeight: 400,
            lineHeight: 24,
            fontSize: 16,
            textDecoration: "none",
            py: 8,
            "&:hover": {
                color: "highlight.link",
            },
            "&:active": {
                color: "highlight.link",
            },
        },
    },
});

export type LinkProps = StyledComponentProps<"a", AnyObject, StyledLinkProps, never>;

const StyledLink = styled.a<LinkProps>(
    sizeVariants,
    compose(space, color, layout, flexbox, border, position, typography),
);

export const Link: React.FC<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ size = "sm", color = "text.default", ...restProps }, ref) => (
        <StyledLink ref={ref} size={size} color={color} {...restProps} />
    ),
);
