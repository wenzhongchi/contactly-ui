import React, { forwardRef } from "react";
import { Placement } from "@popperjs/core/lib";
import styled, { StyledComponentProps } from "styled-components";
import {
    compose,
    space,
    layout,
    flexbox,
    position,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
} from "styled-system";

import { RenderElementProp } from "@utils/renderElement";
import { ButtonVariant } from "@components/Button/Button";
import { IconProps } from "@components/Icon";
import { AnyObject } from "@type/types";

type StyledMenuProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    PositionProps & {
        label?: string;
        variant?: ButtonVariant;
        leftIcon?: RenderElementProp<IconProps>;
        rightIcon?: RenderElementProp<IconProps>;
        visible?: boolean;
        value?: string;
        placement?: Placement;
        onClick?: () => void;
        onOuterClick?: () => void;
        onHoverOver?: (hover: boolean) => void;
    };

export type MenuProps = StyledComponentProps<"div", AnyObject, StyledMenuProps, never>;

const StyledMenu = styled.div<MenuProps>`
    ${compose(space, layout, flexbox, position)}
`;

export const Menu: React.FC<MenuProps> = forwardRef<HTMLDivElement, MenuProps>(
    ({ ...props }, ref) => <StyledMenu position="relative" ref={ref} {...props} />,
);

Menu.defaultProps = {
    placement: "bottom-start",
    variant: "default",
};
