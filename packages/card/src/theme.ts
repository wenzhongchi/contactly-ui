import { Colors } from "@contactly-ui/system";

export type CardColors = {
    default: string;
    primary: string;
    secondary: string;
    white: string;
    border: string;
    success: string;
    error: string;
};

export type CardTheme = {
    light: CardColors;
    dark: CardColors;
};

export const getCardColors = (colors: Colors): CardTheme => ({
    light: {
        default: colors.blue[50],
        primary: colors.blue[200],
        secondary: colors.gray[20],
        white: colors.white,
        border: colors.gray[30],
        success: colors.green[50],
        error: colors.red[50],
    },
    dark: {
        default: colors.blue[50],
        primary: colors.blue[200],
        secondary: colors.gray[20],
        white: colors.white,
        border: colors.gray[30],
        success: colors.green[50],
        error: colors.red[50],
    },
});
