import React, { forwardRef, useState, useCallback } from "react";
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
import { Flex } from "@components/Flex/Flex";
import { Text } from "@components/Text/Text";

import CheckMarkIcon from "./CheckMarkIcon";

export type CheckboxComponentProps = {
    variant?: "default" | "error" | "disabled";
    defaultChecked?: boolean;
    label?: string;
    onChange?: (checked: boolean) => void;
};

type StyledCheckboxProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    CheckboxComponentProps;

export type CheckboxProps = Omit<
    StyledComponentProps<"div", AnyObject, StyledCheckboxProps, never>,
    "onChange"
> &
    CheckboxComponentProps;

const styleVariants = variant({
    prop: "variant",
    variants: {
        default: {
            border: 1,
            borderColor: "border.default",
            cursor: "pointer",
            ":hover": {
                borderColor: "highlight.check",
                backgroundColor: "bg.disabled",
            },
        },
        error: {
            border: 1,
            borderColor: "border.error",
            cursor: "pointer",
            ":hover": {
                borderColor: "highlight.error",
                backgroundColor: "bg.disabled",
            },
        },
        disabled: {
            border: 1,
            borderColor: "border.disabled",
            cursor: "not-allowed",
        },
    },
});

const StyledCheckbox = styled.div<CheckboxProps>(
    styleVariants,
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "16px",
        height: "16px",
        borderRadius: "4px",
        transition: "all 150ms",
    },
    ({ variant, theme: { colors }, defaultChecked }) => {
        if (defaultChecked) {
            if (variant === "default") return { borderColor: colors.border.check };
            if (variant === "error") return { borderColor: colors.border.error };
        }
    },
    compose(space, layout, flexbox, border, position),
);

export const Checkbox: React.FC<CheckboxProps> = forwardRef<HTMLDivElement, CheckboxProps>(
    (
        { variant = "default", defaultChecked, onChange, label, ml, mr, mt, mb, ...restProps },
        ref,
    ) => {
        const [checked, setChecked] = useState(defaultChecked ?? false);
        const [hovered, setHovered] = useState(false);
        const isDisabled = variant === "disabled";

        const handleMouseOver = useCallback(() => {
            if (isDisabled) return;
            setHovered(true);
        }, [isDisabled]);

        const handleMouseLeave = useCallback(() => {
            if (isDisabled) return;
            setHovered(false);
        }, [isDisabled]);

        const handleChange = useCallback(() => {
            if (isDisabled) return;
            if (onChange) onChange(!checked);
            setChecked(!checked);
        }, [onChange, checked, isDisabled]);

        return (
            <Flex
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                ml={ml}
                mr={mr}
                mt={mt}
                mb={mb}
            >
                <StyledCheckbox
                    ref={ref}
                    variant={variant}
                    defaultChecked={checked}
                    onClick={handleChange}
                    {...restProps}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >
                    <CheckMarkIcon defaultChecked={checked} hovered={hovered} variant={variant}>
                        <path d="M1 3.58578L4 7L9.99997 1" />
                    </CheckMarkIcon>
                </StyledCheckbox>
                {label && (
                    <Text variant="body-md" color="text.default" ml={6}>
                        {label}
                    </Text>
                )}
            </Flex>
        );
    },
);
