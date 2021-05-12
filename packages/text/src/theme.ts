import { Colors } from "@contactly-ui/system";

export type TextColors = {
    default: string;
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    white: string;
};

export type TextTheme = {
    light: TextColors;
    dark: TextColors;
};

export const getTextColors = (colors: Colors): TextTheme => ({
    light: {
        default: colors.gray[700],
        primary: colors.gray[900],
        secondary: colors.gray[800],
        tertiary: colors.gray[600],
        disabled: colors.gray[80],
        white: colors.white,
    },
    dark: {
        default: colors.gray[700],
        primary: colors.gray[900],
        secondary: colors.gray[800],
        tertiary: colors.gray[600],
        disabled: colors.gray[80],
        white: colors.white,
    },
});
