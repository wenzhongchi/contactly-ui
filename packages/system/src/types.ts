import {
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    ShadowProps,
} from "styled-system";

export type AnyObject = typeof Object;

export type StyledSystemProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    ShadowProps;
