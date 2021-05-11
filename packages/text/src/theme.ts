import { Colors } from "@contactly-ui/system";

export type TextColors = {
    primary: string;
    secondary: string;
};

export type TextTheme = {
    light: TextColors;
    dark: TextColors;
};

export const getTextColors = (colors: Colors): TextTheme => ({
    light: {
        primary: colors.gray[800],
        secondary: colors.gray[600],
    },
    dark: {
        primary: colors.gray[800],
        secondary: colors.gray[600],
    },
});
