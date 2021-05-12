import { createContext, useContext } from "react";

import { ButtonGroupProps } from "./ButtonGroup";

type ButtonGroupContextProps = ButtonGroupProps;

const ButtonGroupContext = createContext<Partial<ButtonGroupContextProps>>({});

const ButtonGroupProvider = ButtonGroupContext.Provider;

const useButtonGroup = (): Partial<ButtonGroupContextProps> => useContext(ButtonGroupContext);

export { ButtonGroupContext, ButtonGroupProvider, useButtonGroup };
