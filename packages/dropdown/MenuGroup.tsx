import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    compose,
    space,
    layout,
    flexbox,
    position,
    shadow,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
    ShadowProps,
} from "styled-system";

import { AnyObject } from "@type/types";

type StyledMenuGroupProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    PositionProps &
    ShadowProps & { visible?: boolean };

export type MenuGroupProps = StyledComponentProps<"div", AnyObject, StyledMenuGroupProps, never>;

const StyledMenuGroup = styled.div<MenuGroupProps>`
    ${({ visible }) => {
        if (visible) {
            return { display: "flex" };
        }
        return { display: "none" };
    }}
    ${compose(space, layout, flexbox, position, shadow)}
`;

export const MenuGroup: React.FC<MenuGroupProps> = forwardRef<HTMLDivElement, MenuGroupProps>(
    ({ ...props }, ref) => <StyledMenuGroup ref={ref} {...props} />,
);
