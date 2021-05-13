import { createContext, useContext } from "react";

import { InputGroupProps } from "./InputGroup";

export type InputGroupContextProps = InputGroupProps;

export const InputGroupContext = createContext<Partial<InputGroupContextProps>>({});

export const InputGroupProvider = InputGroupContext.Provider;

export const useInputGroup = (): Partial<InputGroupContextProps> => useContext(InputGroupContext);
