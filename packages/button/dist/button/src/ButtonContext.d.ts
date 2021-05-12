/// <reference types="react" />
import { ButtonGroupProps } from "./ButtonGroup";
declare type ButtonGroupContextProps = ButtonGroupProps;
declare const ButtonGroupContext: import("react").Context<Partial<ButtonGroupProps>>;
declare const ButtonGroupProvider: import("react").Provider<Partial<ButtonGroupProps>>;
declare const useButtonGroup: () => Partial<ButtonGroupContextProps>;
export { ButtonGroupContext, ButtonGroupProvider, useButtonGroup };
