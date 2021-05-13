import React from "react";
import { StyledComponentProps } from "styled-components";
import { SystemStyleObject } from "@styled-system/css";
import { AnyObject, StyledSystemProps } from "@contactly-ui/system";
declare type StyledBoxProps = StyledSystemProps & {
    css?: SystemStyleObject;
};
export declare type BoxProps = StyledComponentProps<"div", AnyObject, StyledBoxProps, never>;
export declare const Box: React.FC<BoxProps>;
export {};
