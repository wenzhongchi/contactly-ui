import React, { forwardRef, useCallback } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { css as customCSS, SystemStyleObject } from "@styled-system/css";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";

import { getButtonGroupStyle, iconSizeVariants, styleVariants } from "./styles";
import { useButtonGroup } from "./ButtonContext";
import { ButtonSize, ButtonVariant } from "./Button";

type IconButtonComponentProps = {
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
    ({ css }) => customCSS(css),
    styleVariants,
    iconSizeVariants,
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

        const getIconColor = useCallback(() => {
            switch (selectedVariant) {
                case "default":
                    return isDisabled ? "button.icon-disabled" : "button.icon-default";
                case "primary":
                    return "button.icon-white";
                case "secondary":
                    return "button.icon-white";
                case "success":
                    return "button.icon-white";
                case "warning":
                    return isDisabled ? "button.icon-disabled" : "button.icon-default";
                case "error":
                    return "button.icon-white";
                case "text":
                    return isDisabled ? "button.icon-disabled" : "button.icon-default";
            }
        }, [selectedVariant, isDisabled]);

        const getIconSize = useCallback(() => {
            switch (selectedSize) {
                case "sm":
                    return 20;
                case "md":
                    return 24;
                case "lg":
                    return 32;
            }
        }, [selectedSize]);

        const renderIcon = useCallback(
            (icon: React.ReactElement) =>
                React.cloneElement(icon as React.ReactElement, {
                    width: getIconSize(),
                    height: getIconSize(),
                    color: getIconColor(),
                }),
            [getIconSize, getIconColor],
        );

        return (
            <StyledIconButton
                ref={ref}
                size={selectedSize}
                variant={selectedVariant}
                css={groupOrientation ? getButtonGroupStyle(groupOrientation) : {}}
                {...restProps}
            >
                {icon && renderIcon(icon as React.ReactElement)}
            </StyledIconButton>
        );
    },
);
