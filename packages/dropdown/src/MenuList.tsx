import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    compose,
    space,
    variant,
    layout,
    flexbox,
    position,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
} from "styled-system";

import { AnyObject } from "@type/types";

type StyledMenuListProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    PositionProps & {
        variant?: "single" | "double";
    };

const defaultStyles = {
    flexDirection: "column",
    border: 1,
    borderRadius: 4,
    boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.14)",
    padding: 5,
};

const menuListVariants = variant({
    variants: {
        single: {
            ...defaultStyles,
            borderColor: "border.secondary",
            bg: "bg.quaternary",
        },
        double: {
            flexWarp: "wrap",
            ...defaultStyles,
            borderColor: "border.secondary",
            bg: "bg.quaternary",
        },
    },
});

export type MenuListProps = StyledComponentProps<"div", AnyObject, StyledMenuListProps, never>;

const StyledMenList = styled.div<MenuListProps>`
    ${menuListVariants}
    ${compose(space, layout, flexbox, position)}
`;

export const MenuList: React.FC<MenuListProps> = forwardRef<HTMLDivElement, MenuListProps>(
    ({ ...props }, ref) => <StyledMenList ref={ref} {...props} />,
);

MenuList.defaultProps = {
    variant: "single",
};
