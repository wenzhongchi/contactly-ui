import { createContext, useContext } from "react";

import { ButtonGroupProps } from "./ButtonGroup";

export type ButtonGroupContextProps = ButtonGroupProps;

export const ButtonGroupContext = createContext<Partial<ButtonGroupContextProps>>({});

export const ButtonGroupProvider = ButtonGroupContext.Provider;

export const useButtonGroup = (): Partial<ButtonGroupContextProps> =>
    useContext(ButtonGroupContext);
