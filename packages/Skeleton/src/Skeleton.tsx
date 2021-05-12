import React from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    variant,
    compose,
    space,
    layout,
    flexbox,
    border,
    position,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
} from "styled-system";

import { AnyObject } from "@type/types";
import { useColor } from "@hooks/useColor";
import { Box } from "@components/Box/Box";
import { Flex } from "@components/Flex/Flex";

type StyledSkeletonProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps & {
        startColor?: string;
        transitionColor?: string;
        endColor?: string;
        variant?:
            | "text"
            | "button"
            | "field-md"
            | "field-md-w-button"
            | "field-lg"
            | "field-lg-w-button"
            | "icon"
            | "avatar";
    };

const skeletonVariants = variant({
    variants: {
        text: { width: 112, height: 4, borderRadius: 6 },
        button: {
            width: 100,
            height: 40,
            borderRadius: 6,
        },
        "field-md": {
            width: 200,
            height: 40,
            borderRadius: 6,
        },
        "field-md-w-button": {
            width: 200,
            height: 40,
            borderRadius: 6,
        },
        "field-lg": {
            width: 200,
            height: 80,
            borderRadius: 6,
        },
        "field-lg-w-button": {
            width: 200,
            height: 80,
            borderRadius: 6,
        },
        icon: {
            width: 32,
            height: 32,
            borderRadius: 6,
        },
        avatar: {
            width: 32,
            height: 32,
            borderRadius: 999999,
        },
    },
});

export type SkeletonProps = StyledComponentProps<"div", AnyObject, StyledSkeletonProps, never>;

const StyledSkeleton = styled.div<SkeletonProps>`
    display: inline-block;
    height: 100%;
    width: 100%;
    ${({ startColor, transitionColor, endColor }) =>
        `background: linear-gradient(-90deg, ${startColor} 0%, ${transitionColor} 50%, ${endColor} 100%);`}
    background-size: 400% 400%;
    animation: pulse 1.2s ease-in-out infinite;
    @keyframes pulse {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }
    ${skeletonVariants}
    ${compose(space, layout, flexbox, border, position)}
`;

export const Skeleton: React.FC<SkeletonProps> = ({ variant, ...props }) => {
    const startColor = useColor("skeleton.start");
    const transitionColor = useColor("skeleton.transition");
    const endColor = useColor("skeleton.end");
    return (
        <StyledSkeleton
            variant={variant}
            {...props}
            startColor={startColor}
            transitionColor={transitionColor}
            endColor={endColor}
            justifyContent="center"
            alignItems="center"
            display="flex"
        >
            {variant === "button" && (
                <Flex flex={1} justifyContent="center" alignItems="center">
                    <Box bg="button.disabled" height={4} width="50%" borderRadius={6} />
                </Flex>
            )}
            {variant === "field-md-w-button" && (
                <Flex flex={1} justifyContent="flex-end" alignItems="center">
                    <Box bg="button.disabled" height={4} width="20%" borderRadius={6} mr={10} />
                </Flex>
            )}
            {variant === "field-lg-w-button" && (
                <Flex flex={1} justifyContent="flex-end" alignItems="center">
                    <Box bg="button.disabled" height={4} width="20%" borderRadius={6} mr={10} />
                </Flex>
            )}
        </StyledSkeleton>
    );
};

Skeleton.defaultProps = {
    variant: "text",
};
