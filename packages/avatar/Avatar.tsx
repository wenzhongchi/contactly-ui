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
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
} from "styled-system";

import { AnyObject } from "@type/types";
import { Box } from "@components/Box";
import IconUser from "@icon/User";

export type AvatarComponentProps = { variant?: "sm" | "md" | "lg"; src?: string };

type StyledAvatarProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    AvatarComponentProps;

const variants = variant({
    variants: {
        sm: {
            width: 24,
            height: 24,
            borderRadius: 999999,
        },
        md: {
            width: 32,
            height: 32,
            borderRadius: 999999,
        },
        lg: {
            width: 40,
            height: 40,
            borderRadius: 999999,
        },
    },
});

export type AvatarProps = StyledComponentProps<"img", AnyObject, StyledAvatarProps, never>;

const StyledAvatar = styled.img<AvatarProps>(
    {
        width: "100%",
        height: "100%",
    },
    compose(space, layout, flexbox, border, position),
    variants,
);

export const Avatar: React.FC<AvatarProps> = forwardRef<HTMLImageElement, AvatarProps>(
    ({ src, variant = "md", ...restProps }, ref) => {
        const getBoxSize = () => {
            switch (variant) {
                case "sm":
                    return 24;
                case "md":
                    return 32;
                case "lg":
                    return 40;
                default:
                    return 24;
            }
        };

        const getPlaceholderSize = () => {
            switch (variant) {
                case "sm":
                    return 16;
                case "md":
                    return 16;
                case "lg":
                    return 32;
                default:
                    return 16;
            }
        };

        return (
            <Box
                position="relative"
                size={getBoxSize()}
                justifyContent="center"
                alignItems="center"
                display="flex"
                borderRadius="999999px"
                backgroundColor="avatar.background"
                {...restProps}
            >
                {src && (
                    <StyledAvatar
                        src={src}
                        ref={ref}
                        variant={variant}
                        border={2}
                        borderColor="avatar.border"
                        referrerPolicy="no-referrer"
                    />
                )}
                {!src && <IconUser size={getPlaceholderSize()} />}
            </Box>
        );
    },
);
