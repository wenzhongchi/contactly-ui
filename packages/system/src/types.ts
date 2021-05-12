import {
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    TypographyProps,
} from "styled-system";

export type AnyObject = typeof Object;
export type AnyStringObject = {
    [name: string]: any; // eslint-disable-line
};
export type StringObject = {
    [name: string]: string;
};

export type StyledSystemProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    ShadowProps;

export type StyledSystemTextProps = SpaceProps &
    ColorProps &
    LayoutProps &
    PositionProps &
    TypographyProps;
