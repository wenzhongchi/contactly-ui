import { Colors } from "@contactly-ui/system";

export type IconColors = {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    text: string;
    white: string;
};

export type IconTheme = {
    light: IconColors;
    dark: IconColors;
};

export const getIconColors = (colors: Colors): IconTheme => ({
    light: {
        default: colors.gray[80],
        primary: colors.blue[300],
        secondary: colors.teal[300],
        success: colors.green[300],
        warning: colors.yellow[300],
        error: colors.red[300],
        text: colors.transparent,
        white: colors.white,
    },
    dark: {
        default: colors.gray[20],
        primary: colors.blue[300],
        secondary: colors.blue[300],
        success: colors.blue[300],
        warning: colors.blue[300],
        error: colors.blue[300],
        text: colors.blue[300],
        white: colors.white,
    },
});
