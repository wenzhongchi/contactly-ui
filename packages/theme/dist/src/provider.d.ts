import React from "react";
import { DefaultTheme } from "styled-components";
declare type ThemeProviderProps = {
    children: React.ReactNode;
    theme: DefaultTheme;
};
declare const ThemeProvider: React.FC<ThemeProviderProps>;
export default ThemeProvider;
