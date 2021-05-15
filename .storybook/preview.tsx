import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "storybook-dark-mode";

import { themes } from "../packages/theme/src/theme";

export const decorators = [
    (Story) => (
        <ThemeProvider theme={useDarkMode() ? themes.dark : themes.light}>
            <Story />
        </ThemeProvider>
    ),
];
