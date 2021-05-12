import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "storybook-dark-mode";

import theme from "../packages/theme/src/theme";

export const decorators = [
    (Story) => (
        <ThemeProvider theme={useDarkMode() ? theme.dark : theme.light}>
            <Story />
        </ThemeProvider>
    ),
];
