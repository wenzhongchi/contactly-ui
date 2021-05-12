import { Colors } from "@contactly-ui/system";
export declare type TextColors = {
    primary: string;
    secondary: string;
};
export declare type TextTheme = {
    light: TextColors;
    dark: TextColors;
};
export declare const getTextColors: (colors: Colors) => TextTheme;
