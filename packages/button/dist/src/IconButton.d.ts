import React from "react";
import { StyledComponentProps } from "styled-components";
import { SystemStyleObject } from "@styled-system/css";
import { AnyObject, StyledSystemProps } from "@contactly-ui/system";
import { ButtonSize, ButtonVariant } from "./Button";
export declare type IconButtonComponentProps = {
    size?: ButtonSize;
    variant?: ButtonVariant;
    icon: React.ReactNode;
    isDisabled?: boolean;
    css?: SystemStyleObject;
};
declare type StyledIconButtonProps = StyledSystemProps & IconButtonComponentProps;
export declare type IconButtonProps = StyledComponentProps<"button", AnyObject, StyledIconButtonProps, never>;
declare type OmittedIconButtonProps = Omit<IconButtonProps, "icon">;
export declare const StyledIconButton: import("styled-components").StyledComponent<"button", any, OmittedIconButtonProps, never>;
export declare const IconButton: React.FC<IconButtonProps>;
export {};
