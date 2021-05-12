import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    compose,
    space,
    layout,
    flexbox,
    border,
    position,
    shadow,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    ShadowProps,
} from "styled-system";

import { AnyObject } from "@type/types";

type StyledImageProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    ShadowProps;

export type ImageProps = StyledComponentProps<"img", AnyObject, StyledImageProps, never>;

const StyledImage = styled.img<ImageProps>(
    compose(space, layout, flexbox, border, position, shadow),
);

export const Image: React.FC<ImageProps> = forwardRef<HTMLImageElement, ImageProps>(
    ({ ...props }, ref) => <StyledImage ref={ref} {...props} />,
);
