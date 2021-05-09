import React, { forwardRef } from "react";
import AnimateHeight from "react-animate-height";
import styled, { StyledComponentProps } from "styled-components";
import {
    compose,
    space,
    color,
    layout,
    flexbox,
    border,
    position,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
} from "styled-system";

import { AnyObject } from "@type/types";
import { BoxProps } from "@components/Box/Box";

type StyledCollapseProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps & {
        isOpen: boolean;
        animateOpacity?: boolean;
        duration?: number;
        easing?: string;
        startingHeight?: number;
        endingHeight?: number;
        onAnimationStart?: (props: { newHeight: number }) => void;
        onAnimationEnd?: (props: { newHeight: number }) => void;
    };

export type CollapseProps = StyledComponentProps<"div", AnyObject, StyledCollapseProps, never>;

const StyledCollapse = styled.div<BoxProps>`
    ${compose(space, color, layout, flexbox, border, position)}
`;

export const Collapse: React.FC<CollapseProps> = forwardRef<HTMLDivElement, CollapseProps>(
    (
        {
            isOpen,
            animateOpacity = true,
            onAnimationStart,
            onAnimationEnd,
            duration,
            easing = "ease",
            startingHeight = 0,
            endingHeight = "auto",
            ...props
        },
        ref,
    ) => (
        <AnimateHeight
            duration={duration}
            easing={easing}
            animateOpacity={animateOpacity}
            height={isOpen ? endingHeight : startingHeight}
            applyInlineTransitions={false}
            onAnimationStart={onAnimationStart}
            onAnimationEnd={onAnimationEnd}
        >
            <StyledCollapse ref={ref} {...props}></StyledCollapse>
        </AnimateHeight>
    ),
);
