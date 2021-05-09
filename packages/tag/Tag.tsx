import React, { forwardRef, useCallback } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    border,
    BorderProps,
    color,
    compose,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    shadow,
    space,
    SpaceProps,
    variant,
} from "styled-system";

import { Text } from "@components/Text";
import { IconProps } from "@components/Icon";
import { Flex } from "@components/Flex";
import { AnyObject } from "@type/types";
import { renderElement, RenderElementProp } from "@utils/renderElement";
import IconClose from "@icon/Close";

export type TagComponentProps = {
    label: string;
    variant: "default" | "success" | "warning" | "error";
    size?: "sm" | "md" | "lg";
    icon?: RenderElementProp<IconProps>;
    isClosable?: boolean;
    onClose?: () => void;
};

type StyledTagProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    TagComponentProps;

export type TagProps = StyledComponentProps<"div", AnyObject, StyledTagProps, never>;

const sizeVariants = variant({
    prop: "size",
    variants: {
        sm: {
            height: 24,
            padding: "0px 8px",
        },
        md: {
            height: 32,
            padding: "0px 12px",
        },
        lg: {
            height: 40,
            padding: "0px 12px",
        },
    },
});

const styleVariants = variant({
    prop: "variant",
    variants: {
        default: {
            bg: "tag.default",
        },
        success: {
            bg: "tag.success",
        },
        error: {
            bg: "tag.error",
        },
        warning: {
            bg: "tag.warning",
        },
    },
});

const StyledTag = styled(Flex)<TagProps>(
    {
        borderRadius: "4px",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        cursor: "default",
    },
    sizeVariants,
    styleVariants,
    compose(space, color, layout, flexbox, border, position, shadow),
);

export const Tag: React.FC<TagProps> = forwardRef<HTMLDivElement, TagProps>(
    ({ label, variant = "default", size = "sm", icon, isClosable, onClose, ...restProps }, ref) => {
        const getFontColor = () => {
            switch (variant) {
                case "default":
                    return "text.default";
                case "success":
                    return "text.success";
                case "warning":
                    return "text.warning";
                case "error":
                    return "text.error";
            }
        };

        const getFontVariant = () => {
            switch (size) {
                case "sm":
                    return "label-sm";
                case "md":
                    return "label-md";
                case "lg":
                    return "label-lg";
            }
        };

        const getIconColor = () => {
            switch (variant) {
                case "default":
                    return "icon.default";
                case "success":
                    return "icon.success";
                case "warning":
                    return "icon.warning";
                case "error":
                    return "icon.error";
            }
        };

        const getIconMargin = () => {
            switch (size) {
                case "sm":
                    return 6;
                case "md":
                case "lg":
                    return 10;
            }
        };

        const getCloseIconMargin = () => {
            switch (size) {
                case "sm":
                    return 8;
                case "md":
                case "lg":
                    return 12;
            }
        };

        const getIconSize = () => {
            switch (size) {
                case "sm":
                    return 12;
                case "md":
                    return 16;
                case "lg":
                    return 20;
            }
        };

        const handleCloseClick = useCallback(() => {
            if (onClose) onClose();
        }, [onClose]);

        return (
            <StyledTag variant={variant} label={label} size={size} ref={ref} {...restProps}>
                {renderElement(icon, {
                    color: getIconColor(),
                    mr: getIconMargin(),
                    size: getIconSize(),
                })}
                <Text variant={getFontVariant()} color={getFontColor()}>
                    {label}
                </Text>
                {isClosable && (
                    <Flex ml={getCloseIconMargin()} onClick={handleCloseClick}>
                        <IconClose color={getFontColor()} />
                    </Flex>
                )}
            </StyledTag>
        );
    },
);
