import React from "react";
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from "styled-components";

import themes from "./theme";

type ThemeProviderProps = {
    children: React.ReactNode;
    theme: DefaultTheme;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    theme = themes.light,
}: ThemeProviderProps) => <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;

export default ThemeProvider;
