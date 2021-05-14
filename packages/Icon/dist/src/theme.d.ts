import { Colors } from "@contactly-ui/system";
export declare type IconColors = {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    text: string;
};
export declare type IconTheme = {
    light: IconColors;
    dark: IconColors;
};
export declare const getIconColors: (colors: Colors) => IconTheme;
