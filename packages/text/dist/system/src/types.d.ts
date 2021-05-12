import { SpaceProps, ColorProps, LayoutProps, FlexboxProps, BorderProps, PositionProps, ShadowProps, TypographyProps } from "styled-system";
export declare type AnyObject = typeof Object;
export declare type AnyStringObject = {
    [name: string]: any;
};
export declare type StringObject = {
    [name: string]: string;
};
export declare type StyledSystemProps = SpaceProps & ColorProps & LayoutProps & FlexboxProps & BorderProps & PositionProps & ShadowProps;
export declare type StyledSystemTextProps = SpaceProps & ColorProps & LayoutProps & PositionProps & TypographyProps;
