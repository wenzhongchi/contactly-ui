import React, { forwardRef } from "react";
import {
    border,
    BorderProps,
    ColorProps,
    compose,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    space,
    SpaceProps,
} from "styled-system";
import styled, { StyledComponentProps } from "styled-components";

import { IconProps } from "@components/Icon";
import { Badge, BadgeProps } from "@components/Badge/Badge";
import { Tag, TagProps } from "@components/Tag/Tag";
import { Box } from "@components/Box/Box";
import { Text } from "@components/Text/Text";
import { Flex } from "@components/Flex/Flex";
import { AnyObject } from "@type/types";
import { renderElement, RenderElementProp } from "@utils/renderElement";

type StyledTabProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps & {
        isActive?: boolean;
        isDisabled?: boolean;
        iconSize?: "sm" | "lg";
        icon?: RenderElementProp<IconProps>;
        hasBadge?: boolean;
        badgeProps?: BadgeProps;
        hasTag?: boolean;
        tagProps?: TagProps;
        variant?: "default" | "card" | "transparent";
        label?: string;
        orientation?: "horizontal" | "vertical";
        onClick?: () => void;
    };

export type TabProps = StyledComponentProps<"div", AnyObject, StyledTabProps, never>;

type IndicatorProps = {
    orientation?: "horizontal" | "vertical";
    isActive?: boolean;
    isDisabled?: boolean;
};

const Indicator = styled(Box)<IndicatorProps>`
    position: absolute;
    ${({ orientation }) => {
        if (orientation === "horizontal")
            return {
                bottom: 0,
                left: 0,
                right: 0,
            };

        return {
            top: 0,
            bottom: 0,
            left: 0,
        };
    }}
    ${({ theme: { colors }, isDisabled, isActive, orientation }) => {
        if (isDisabled || !isActive)
            return {
                background: colors.highlight.senary,
                width: orientation === "horizontal" ? "auto" : "1px",
                height: orientation === "horizontal" ? "1px" : "auto",
            };

        return {
            background: colors.highlight.quaternary,
            width: orientation === "horizontal" ? "auto" : "2px",
            height: orientation === "horizontal" ? "2px" : "auto",
        };
    }};
`;

const StyledTab = styled(Flex)<TabProps>`
    position: relative;
    align-items: center;
    box-sizing: border-box;
    border-radius: 4px 4px 0 0;
    width: ${({ iconSize, orientation }) =>
        iconSize === "lg" && orientation === "vertical" ? "100%" : "auto"};
    cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
    justify-content: ${({ orientation }) => (orientation === "vertical" ? "flex-start" : "center")};
    min-height: ${({ iconSize }) => (iconSize === "lg" ? "80px" : "40px")};
    padding: 0 ${({ orientation }) => (orientation === "horizontal" ? "24px" : "18px")};
    background: ${({ orientation, variant, isActive, isDisabled, theme: { colors } }) => {
        if (orientation === "vertical") return "none";
        if (variant === "default" || variant === "transparent") return "none";
        if (variant === "card") {
            if (isDisabled) return colors.tab.disabled;
            if (isActive) return colors.tab.active;
            return colors.tab.inactive;
        }
    }};
    ${compose(space, layout, flexbox, border, position)}
`;

export const Tab: React.FC<TabProps> = forwardRef<HTMLDivElement, TabProps>(
    (
        {
            label,
            hasBadge,
            badgeProps,
            hasTag,
            tagProps,
            iconSize,
            icon,
            orientation,
            variant,
            onClick,
            isDisabled,
            isActive,
            ...props
        },
        ref,
    ) => {
        const getFontColor = (): string => {
            if (isDisabled) return "text.disabled";
            if (isActive) return "text.link";
            return "text.primary";
        };

        const getIconColor = (): string => {
            if (isActive) return "icon.light";
            return "icon.disabled";
        };

        return (
            <StyledTab
                isActive={isActive}
                isDisabled={isDisabled}
                variant={variant}
                iconSize={iconSize}
                orientation={orientation}
                flexDirection={iconSize === "lg" ? "column" : "row"}
                onClick={isDisabled ? undefined : onClick}
                ref={ref}
                {...props}
            >
                {iconSize === "lg" && icon && <Flex>{renderElement(icon, { mb: 12 })}</Flex>}
                <Flex flexDirection="row" alignItems="center">
                    {iconSize === "sm" &&
                        icon &&
                        renderElement(icon, { color: getIconColor(), display: "flex", mr: 8 })}
                    <Box css={{ whiteSpace: "nowrap" }}>
                        <Text color={getFontColor()} variant="label-md">
                            {label}
                        </Text>
                    </Box>
                    {hasBadge && badgeProps && <Badge ml={8} {...badgeProps} />}
                    {hasTag && tagProps && <Tag ml={8} {...tagProps} />}
                </Flex>

                {variant !== "transparent" && (
                    <Indicator
                        isActive={isActive}
                        isDisabled={isDisabled}
                        orientation={orientation}
                    />
                )}
            </StyledTab>
        );
    },
);

Tab.defaultProps = {
    isActive: false,
    variant: "default",
    isDisabled: false,
    orientation: "horizontal",
    iconSize: "sm",
};
