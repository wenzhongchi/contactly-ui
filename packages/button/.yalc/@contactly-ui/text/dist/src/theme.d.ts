import { Colors } from "@contactly-ui/system";
export declare type TextColors = {
    default: string;
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    error: string;
    white: string;
};
export declare type TextTheme = {
    light: TextColors;
    dark: TextColors;
};
export declare const getTextColors: (colors: Colors) => TextTheme;
