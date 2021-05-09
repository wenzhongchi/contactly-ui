import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    border,
    compose,
    flexbox,
    layout,
    position,
    space,
    variant,
    BorderProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
} from "styled-system";
import { Text } from "@components/Text/Text";
import { IconProps } from "@components/Icon";
import { Flex } from "@components/Flex/Flex";
import { AnyObject } from "@type/types";
import { renderElement, RenderElementProp } from "@utils/renderElement";

type StyledBadgeProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps & {
        label?: number;
        variant?:
            | "primary"
            | "secondary"
            | "success"
            | "warning"
            | "danger"
            | "default"
            | "dark"
            | "light";
        size?: "sm" | "md";
        icon?: RenderElementProp<IconProps>;
    };

export type BadgeProps = StyledComponentProps<"div", AnyObject, StyledBadgeProps, never>;

const sizeVariants = variant({
    prop: "size",
    variants: {
        sm: {
            height: 16,
            pl: 4,
            pr: 4,
        },
        md: {
            height: 24,
            pl: 8,
            pr: 8,
        },
    },
});

const badgeVariants = variant({
    prop: "variant",
    variants: {
        primary: {
            bg: "badge.primary",
        },
        secondary: {
            bg: "badge.secondary",
        },
        success: {
            bg: "badge.success",
        },
        warning: {
            bg: "badge.warning",
        },
        danger: {
            bg: "badge.danger",
        },
        default: {
            bg: "badge.default",
        },
        dark: {
            bg: "badge.dark",
        },
        light: {
            bg: "badge.white",
        },
    },
});

const StyledBadge = styled(Flex)<BadgeProps>(
    { borderRadius: "16px" },
    badgeVariants,
    sizeVariants,
    compose(space, layout, flexbox, border, position),
);

export const Badge: React.FC<BadgeProps> = forwardRef<HTMLDivElement, BadgeProps>(
    ({ label, variant, size, icon, ...restProps }, ref) => {
        const textColor = variant === "default" || variant === "light" ? "text.dark" : "text.white";

        const getIconColor = () => {
            if (variant === "default") return "icon.disabled";
            if (variant === "light") return "icon.primary";
            return "icon.fill";
        };

        return (
            <StyledBadge
                variant={variant}
                size={size}
                alignItems="center"
                justifyContent="center"
                {...restProps}
                ref={ref}
            >
                <Flex
                    flexDirection="row"
                    alignItems="center"
                    alignContent="center"
                    justifyContent="center"
                >
                    {size === "md" && renderElement(icon, { color: getIconColor(), mr: 4 })}
                    <Text variant="label-sm" color={textColor}>
                        {label}
                    </Text>
                </Flex>
            </StyledBadge>
        );
    },
);

Badge.defaultProps = {
    variant: "primary",
    size: "sm",
};
