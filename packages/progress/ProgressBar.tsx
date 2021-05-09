import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    space,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    variant,
    compose,
    color,
    layout,
    flexbox,
    border,
    position,
    shadow,
    ColorProps,
} from "styled-system";

import { Flex } from "@components/Flex/Flex";
import { Text } from "@components/Text/Text";
import { Avatar } from "@components/Avatar/Avatar";
import { Tag, TagProps } from "@components/Tag/Tag";
import { Badge, BadgeProps } from "@components/Badge/Badge";
import { Status, StatusProps } from "@components/Status/Status";
import { Box, BoxProps } from "@components/Box/Box";
import { IconProps } from "@components/Icon";
import { AnyObject } from "@type/types";
import { renderElement, RenderElementProp } from "@utils/renderElement";

type StyledProgressBarProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    ColorProps & {
        label?: string;
        secondaryLabel?: string;
        percent: number;
        color?: "primary" | "warning" | "danger" | "success";
        icon?: RenderElementProp<IconProps>;
        hasStatus?: boolean;
        hasTag?: boolean;
        hasBadge?: boolean;
        avatarSrc?: string;
        name?: string;
        isFill?: boolean;
        tagProps?: TagProps;
        badgeProps?: BadgeProps;
        statusProps?: StatusProps;
    };

export type ProgressBarProps = StyledComponentProps<
    "div",
    AnyObject,
    StyledProgressBarProps,
    never
>;

const colorVariants = variant({
    prop: "color",
    variants: {
        primary: {
            bg: "progressBar.primary",
        },
        warning: {
            bg: "progressBar.warning",
        },
        danger: {
            bg: "progressBar.danger",
        },
        success: {
            bg: "progressBar.success",
        },
    },
});

const StyledProgressBar = styled(Flex)<BoxProps>`
    ${compose(space, color, layout, flexbox, border, position, shadow)}
`;

const LineContainer = styled(Box)`
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 2px;
    ${color}
    ${space}
`;

type LineProps = {
    percent: number;
    color?: "primary" | "warning" | "danger" | "success";
};

const Line = styled.div<LineProps>`
    border-radius: 4px;
    position: absolute;
    ${colorVariants};
    width: ${({ percent }) => percent}%;
    height: 100%;
`;

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
    (
        {
            label,
            secondaryLabel,
            icon,
            hasStatus,
            hasTag,
            hasBadge,
            percent,
            color,
            isFill,
            avatarSrc,
            name,
            badgeProps,
            tagProps,
            statusProps,
            ...props
        },
        ref,
    ) => {
        const getTopSpacing = () => {
            if (avatarSrc) return 8;
            else if (tagProps) return 12;
            else return 10;
        };

        return (
            <StyledProgressBar
                pt={getTopSpacing()}
                pb={10}
                px={8}
                flexDirection="column"
                {...props}
                ref={ref}
            >
                <Flex alignItems="center">
                    {avatarSrc && <Avatar variant="sm" mr={8} src={avatarSrc} />}
                    {name && (
                        <Text variant="label-md" color="text.primary" mr={8}>
                            {name}
                        </Text>
                    )}
                    {renderElement(icon, { color: "status.primary", mr: 8 })}
                    <Text variant="label-md" color="text.primary">
                        {label}
                    </Text>
                    <Flex ml="auto">
                        {hasTag && tagProps && <Tag {...tagProps} />}
                        {hasBadge && <Badge {...badgeProps} />}
                    </Flex>
                </Flex>

                <LineContainer
                    bg={isFill ? "progressBar.default" : "bg.transparent"}
                    mt={getTopSpacing()}
                >
                    <Line color={color} percent={percent} />
                </LineContainer>

                <Flex alignItems="center" mt={4}>
                    {secondaryLabel && (
                        <Text color="status.secondary" variant="label-sm">
                            {secondaryLabel}
                        </Text>
                    )}
                    <Text color="status.secondary" ml="auto" variant="label-sm">
                        {percent}%
                    </Text>
                </Flex>

                {hasStatus && <Status mt={6} {...statusProps} />}
            </StyledProgressBar>
        );
    },
);

ProgressBar.defaultProps = {
    color: "primary",
    percent: 0,
    isFill: true,
};
