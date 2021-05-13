/// <reference types="react" />
import { ButtonGroupProps } from "./ButtonGroup";
export declare type ButtonGroupContextProps = ButtonGroupProps;
export declare const ButtonGroupContext: import("react").Context<Partial<ButtonGroupProps>>;
export declare const ButtonGroupProvider: import("react").Provider<Partial<ButtonGroupProps>>;
export declare const useButtonGroup: () => Partial<ButtonGroupContextProps>;
