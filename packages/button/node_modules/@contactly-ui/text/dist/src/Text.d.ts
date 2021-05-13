import React from "react";
import { StyledComponentProps } from "styled-components";
import { AnyObject, StyledSystemTextProps } from "@contactly-ui/system";
export declare type TextVariant = "display-xl" | "display-lg" | "display-md" | "display-sm" | "heading" | "caption" | "subheading" | "body";
declare type TextComponentProps = {
    as?: "p" | "span";
    variant?: TextVariant;
};
declare type StyledTextProps = StyledSystemTextProps & TextComponentProps;
export declare type TextProps = StyledComponentProps<"p", AnyObject, StyledTextProps, never>;
export declare const Text: React.FC<TextProps>;
export {};
