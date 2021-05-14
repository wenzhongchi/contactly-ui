import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { css as customCSS, SystemStyleObject } from "@styled-system/css";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";
import { Box } from "@contactly-ui/box";

import { getButtonGroupStyle, sizeVariants, styleVariants } from "./styles";
import { useButtonGroup } from "./ButtonContext";
import { ButtonSize, ButtonVariant } from "./Button";

export type IconButtonComponentProps = {
    size?: ButtonSize;
    variant?: ButtonVariant;
    icon: React.ReactNode;
    isDisabled?: boolean;
    css?: SystemStyleObject;
};

type StyledIconButtonProps = StyledSystemProps & IconButtonComponentProps;

export type IconButtonProps = StyledComponentProps<
    "button",
    AnyObject,
    StyledIconButtonProps,
    never
>;

type OmittedIconButtonProps = Omit<IconButtonProps, "icon">;

export const StyledIconButton = styled.button<OmittedIconButtonProps>(
    ({ theme: { colors }, isDisabled }) => {
        if (isDisabled)
            return {
                backgroundColor: colors.button.transparent,
            };
    },
    ({ css }) => customCSS(css),
    styleVariants,
    sizeVariants,
    composedSystem,
);

export const IconButton: React.FC<IconButtonProps> = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ variant = "default", size = "sm", icon, isDisabled, ...restProps }, ref) => {
        const {
            variant: groupVariant,
            size: groupSize,
            orientation: groupOrientation,
        } = useButtonGroup();

        const selectedVariant = groupVariant ?? variant;
        const selectedSize = groupSize ?? size;

        const getIconSize = () => {
            switch (selectedSize) {
                case "sm":
                    return 12;
                case "md":
                    return 16;
                case "lg":
                    return 24;
            }
        };

        return (
            <StyledIconButton
                ref={ref}
                isDisabled={isDisabled}
                size={selectedSize}
                variant={selectedVariant}
                css={groupOrientation ? getButtonGroupStyle(groupOrientation) : {}}
                {...restProps}
            >
                {
                    <Box width={getIconSize()} height={getIconSize()}>
                        {icon}
                    </Box>
                }
            </StyledIconButton>
        );
    },
);
