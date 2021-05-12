import React from "react";
import { ButtonSize, ButtonVariant } from "./Button";
export declare type ButtonOrientation = "horizontal" | "vertical";
export declare type ButtonGroupProps = {
    orientation?: ButtonOrientation;
    variant?: ButtonVariant;
    size?: ButtonSize;
};
export declare const ButtonGroup: React.FC<ButtonGroupProps>;
