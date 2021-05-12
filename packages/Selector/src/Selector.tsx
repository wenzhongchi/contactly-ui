import React, { forwardRef } from "react";
import {
    border,
    BorderProps,
    color,
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
    variant,
} from "styled-system";
import styled, { StyledComponentProps } from "styled-components";
import { Tag, TagProps } from "@components/Tag/Tag";
import { Badge, BadgeProps } from "@components/Badge/Badge";
import { IconProps } from "@components/Icon";
import { AnyObject } from "@type/types";
import { Flex } from "@components/Flex/Flex";
import { Checkbox, CheckboxProps } from "@components/Checkbox/Checkbox";
import { Toggle, ToggleProps } from "@components/Toggle/Toggle";
import { Text } from "@components/Text/Text";
import { Radio, RadioProps } from "@components/Radio/Radio";
import { renderElement, RenderElementProp } from "@utils/renderElement";

type StyledSelectorProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps & {
        type?: "toggle" | "check" | "radio";
        typeProps?: CheckboxProps | ToggleProps | RadioProps;
        typeAlign?: "left" | "right";
        size?: "sm" | "md" | "lg";
        variant?: "default" | "primary" | "danger" | "disabled";
        label?: string;
        description?: string;
        hasTag?: boolean;
        tagProps?: TagProps;
        hasBadge?: boolean;
        badgeProps?: BadgeProps;
        icon?: RenderElementProp<IconProps>;
    };

const selectorVariants = variant({
    variants: {
        default: {
            bg: "bg.outlined",
            border: 1,
            borderColor: "border.secondary",
        },
        primary: {
            bg: "bg.outlined",
            border: 1,
            borderColor: "border.tertiary",
        },
        danger: {
            bg: "bg.outlined",
            border: 1,
            borderColor: "border.danger",
        },
        disabled: {
            bg: "bg.disabled",
            border: 1,
            borderColor: "bg.transparent",
        },
        transparent: {
            bg: "bg.transparent",
            border: 0,
        },
    },
});

const sizeVariants = variant({
    prop: "size",
    variants: {
        sm: {
            height: 24,
        },
        md: {
            height: 56,
        },
        lg: {
            height: 100,
        },
    },
});

export type SelectorProps = StyledComponentProps<"div", AnyObject, StyledSelectorProps, never>;

const StyledSelector = styled(Flex)<SelectorProps>`
    width: auto;
    align-items: center;
    flex-grow: 1;
    padding: 0 16px;
    border-radius: 4px;
    ${selectorVariants}
    ${sizeVariants}
    ${compose(space, color, layout, flexbox, border, position)}
`;

export const Selector: React.FC<SelectorProps> = forwardRef<HTMLDivElement, SelectorProps>(
    (
        {
            label,
            type,
            typeProps,
            typeAlign,
            size,
            variant,
            description,
            hasTag,
            tagProps,
            hasBadge,
            badgeProps,
            icon,
            ...props
        },
        ref,
    ) => {
        const getCheckboxVariant = () => {
            switch (variant) {
                case "danger":
                    return "error";
                case "disabled":
                    return "disabled";
                case "default":
                case "primary":
                default:
                    return "default";
            }
        };

        const getRadioVariant = () => {
            switch (variant) {
                case "danger":
                    return "error";
                case "disabled":
                    return "disabled";
                case "default":
                case "primary":
                default:
                    return "default";
            }
        };

        const getSelector = () => {
            switch (type) {
                case "check":
                    return (
                        <Checkbox
                            variant={getCheckboxVariant()}
                            {...(typeProps as CheckboxProps)}
                        />
                    );
                case "radio":
                    return <Radio variant={getRadioVariant()} {...(typeProps as RadioProps)} />;
                case "toggle":
                    return (
                        <Toggle
                            variant={variant === "danger" ? "error" : "default"}
                            disabled={variant === "disabled"}
                            ml={typeAlign === "right" ? "auto" : 0}
                            {...(typeProps as ToggleProps)}
                        />
                    );
            }
        };

        return (
            <StyledSelector
                variant={size === "sm" ? undefined : variant}
                size={size}
                ref={ref}
                {...props}
            >
                {size !== "sm" &&
                    type === "toggle" &&
                    typeAlign === "right" &&
                    icon &&
                    renderElement(icon, {
                        mt: size === "lg" ? 16 : 0,
                        alignSelf: size === "lg" ? "flex-start" : "auto",
                        mr: 12,
                    })}
                <Flex flexGrow={1} flexDirection="column">
                    <Flex flexDirection="column" flexGrow={1}>
                        <Flex alignItems="center" flexGrow={1} flexDirection="row">
                            {typeAlign === "left" && getSelector()}
                            <Text
                                ml={typeAlign === "right" ? 0 : 8}
                                variant="body-md"
                                color={variant === "disabled" ? "text.disabled" : "text.primary"}
                            >
                                {label}
                            </Text>
                            {hasBadge && badgeProps && <Badge ml={8} {...badgeProps} />}
                            {hasTag && tagProps && <Tag ml={8} {...tagProps} />}
                            {type === "toggle" && typeAlign === "right" && getSelector()}
                        </Flex>
                        <Flex flexGrow={1}>
                            {description && (
                                <Text
                                    mt={6}
                                    variant="body-md"
                                    color={
                                        variant === "disabled" ? "text.disabled" : "text.default"
                                    }
                                >
                                    {description}
                                </Text>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
                {size !== "sm" &&
                    typeAlign === "left" &&
                    icon &&
                    renderElement(icon, {
                        mt: size === "lg" ? 16 : 0,
                        alignSelf: size === "lg" ? "flex-start" : "auto",
                        ml: "auto",
                    })}
            </StyledSelector>
        );
    },
);

Selector.defaultProps = {
    variant: "default",
    size: "sm",
    type: "check",
    typeAlign: "left",
};
