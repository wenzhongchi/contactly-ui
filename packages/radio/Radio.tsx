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
import { Box } from "@components/Box/Box";

export type RadioComponentProps = {
    variant?: "default" | "error" | "disabled";
    defaultChecked?: boolean;
    label?: string;
    onChange?: (checked: boolean) => void;
};

type StyledRadioProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    RadioComponentProps;

export type RadioProps = Omit<
    StyledComponentProps<"div", AnyObject, StyledRadioProps, never>,
    "onChange"
> &
    RadioComponentProps;

const styleVariants = variant({
    variants: {
        default: {
            border: 1,
            borderColor: "border.default",
            ":hover": {
                borderColor: "highlight.check",
            },
        },
        error: {
            border: 1,
            borderColor: "border.error",
            ":hover": {
                borderColor: "highlight.error",
            },
        },
        disabled: {
            border: 1,
            borderColor: "border.disabled",
            cursor: "not-allowed",
        },
    },
});

const StyledRadio = styled.div<RadioProps>(
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        transition: "all 150ms",
    },
    ({ variant, theme: { colors }, defaultChecked }) => {
        if (defaultChecked) {
            if (variant === "default") return { borderColor: colors.border.check };
            if (variant === "error") return { borderColor: colors.border.error };
        }
    },
    styleVariants,
    compose(space, layout, flexbox, border, position),
);

export const Radio: React.FC<RadioProps> = forwardRef<HTMLDivElement, RadioProps>(
    ({ variant, defaultChecked, onChange, label, ml, mr, mt, mb, ...props }, ref) => {
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

        const getIconColor = () => {
            if (checked) {
                if (variant === "disabled") return "border.light";
                if (variant === "error") return "highlight.error";
                return "highlight.check";
            }
            if (hovered) {
                return "highlight.light";
            }
            return "icon.transparent";
        };

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
                <StyledRadio
                    ref={ref}
                    variant={variant}
                    defaultChecked={checked}
                    onClick={handleChange}
                    {...props}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >
                    <Box borderRadius={4} height={8} width={8} backgroundColor={getIconColor()} />
                </StyledRadio>
                {label && (
                    <Text variant="body-md" ml={8}>
                        {label}
                    </Text>
                )}
            </Flex>
        );
    },
);

Radio.defaultProps = {
    variant: "default",
};
