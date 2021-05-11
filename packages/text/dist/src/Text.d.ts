import React from "react";
import { StyledComponentProps } from "styled-components";
import { AnyObject, StyledSystemTextProps } from "@contactly-ui/system";
declare type StyledTextProps = StyledSystemTextProps & {
    as?: "p" | "span";
    variant?: "display-xl" | "display-lg" | "display-md" | "display-sm" | "heading" | "caption" | "subheading" | "body";
};
export declare type TextProps = StyledComponentProps<"p", AnyObject, StyledTextProps, never>;
export declare const Text: React.FC<TextProps>;
export {};
