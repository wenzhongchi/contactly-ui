import { Colors } from "@contactly-ui/system";

export type CardColors = {
    default: string;
    primary: string;
    secondary: string;
    white: string;
    "border-default": string;
    "border-primary": string;
    success: string;
    error: string;
    transparent: string;
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
        "border-default": colors.gray[30],
        "border-primary": colors.blue[200],
        success: colors.green[50],
        error: colors.red[50],
        transparent: colors.transparent,
    },
    dark: {
        default: colors.blue[50],
        primary: colors.blue[200],
        secondary: colors.gray[20],
        white: colors.white,
        "border-default": colors.gray[30],
        "border-primary": colors.blue[200],
        success: colors.green[50],
        error: colors.red[50],
        transparent: colors.transparent,
    },
});
