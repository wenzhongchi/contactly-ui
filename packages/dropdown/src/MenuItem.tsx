import React, { forwardRef, useCallback } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    compose,
    space,
    variant,
    color,
    layout,
    flexbox,
    border,
    position,
    typography,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    TypographyProps,
} from "styled-system";

import { AnyObject } from "@type/types";
import { useColor } from "@hooks/useColor";

type StyledMenuItemProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    TypographyProps & {
        variant?: "menu" | "regular";
        hoverBgColor?: string;
        hoverTextColor?: string;
        activeBgColor?: string;
        activeTextColor?: string;
        item?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
        onClick?: (item: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
    };

const menuItemVariants = variant({
    variants: {
        menu: {
            cursor: "pointer",
            fontFamily: "body",
            fontWeight: 600,
            lineHeight: 16,
            fontSize: 14,
            borderRadius: 4,
        },
        regular: {
            cursor: "pointer",
            fontFamily: "body",
            fontWeight: 400,
            lineHeight: 20,
            fontSize: 14,
            minWidth: "195px",
            borderRadius: 4,
        },
    },
});

export type MenuItemProps = StyledComponentProps<"div", AnyObject, StyledMenuItemProps, never>;

const StyledMenItem = styled.div<MenuItemProps>`
    ${menuItemVariants}
    ${({ variant, hoverBgColor, hoverTextColor, activeBgColor, activeTextColor }) => {
        if (variant === "menu") {
            return {
                "&:hover": {
                    color: useColor(hoverTextColor ?? "highlight.secondary"),
                    backgroundColor: useColor(hoverBgColor ?? "bg.tertiary"),
                },
                "&:active": {
                    color: useColor(activeTextColor ?? ""),
                    backgroundColor: useColor(activeBgColor ?? ""),
                },
            };
        }
        return {
            "&:hover": {
                color: useColor(hoverTextColor ?? ""),
                backgroundColor: useColor(hoverBgColor ?? "bg.tertiary"),
            },
            "&:active": {
                color: useColor(activeTextColor ?? ""),
                backgroundColor: useColor(activeBgColor ?? ""),
            },
        };
    }}
    ${compose(space, color, layout, flexbox, border, position, typography)}
`;

export const MenuItem: React.FC<MenuItemProps> = forwardRef<HTMLDivElement, MenuItemProps>(
    (
        {
            item,
            onClick,
            variant,
            hoverBgColor,
            hoverTextColor,
            activeBgColor,
            activeTextColor,
            ...props
        },
        ref,
    ) => {
        const handleClick = useCallback(() => {
            if (onClick) onClick(item);
        }, [onClick, item]);

        return (
            <StyledMenItem
                ref={ref}
                {...props}
                variant={variant}
                hoverBgColor={hoverBgColor}
                hoverTextColor={hoverTextColor}
                activeBgColor={activeBgColor}
                activeTextColor={activeTextColor}
                onClick={handleClick}
            />
        );
    },
);

MenuItem.defaultProps = {
    variant: "regular",
    color: "text.primary",
};
