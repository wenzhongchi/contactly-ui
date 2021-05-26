import { Colors } from "@contactly-ui/system";

export type ButtonColors = {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    text: string;
    widget: string;
    "border-default-default": string;
    "border-default-hover": string;
    "border-default-disabled": string;
    "border-primary-default": string;
    "border-primary-hover": string;
    "border-primary-disabled": string;
    "border-secondary-default": string;
    "border-secondary-hover": string;
    "border-secondary-disabled": string;
    "border-success-default": string;
    "border-success-hover": string;
    "border-success-disabled": string;
    "border-warning-default": string;
    "border-warning-hover": string;
    "border-warning-disabled": string;
    "border-error-default": string;
    "border-error-hover": string;
    "border-error-disabled": string;
    "hover-default": string;
    "hover-primary": string;
    "hover-secondary": string;
    "hover-success": string;
    "hover-warning": string;
    "hover-error": string;
    "hover-text": string;
    "disabled-default": string;
    "disabled-primary": string;
    "disabled-secondary": string;
    "disabled-success": string;
    "disabled-warning": string;
    "disabled-error": string;
    "disabled-text": string;
    "text-default": string;
    "text-disabled": string;
    "text-white": string;
    "icon-default": string;
    "icon-disabled": string;
    "icon-white": string;
};

export type ButtonTheme = {
    light: ButtonColors;
    dark: ButtonColors;
};

export const getButtonColors = (colors: Colors): ButtonTheme => ({
    light: {
        default: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray[20]} 100%)`,
        primary: colors.blue[300],
        secondary: colors.teal[300],
        success: colors.green[400],
        warning: colors.yellow[100],
        error: colors.red[400],
        text: colors.transparent,
        widget: colors.blue[200],
        "border-default-default": colors.gray[40],
        "border-default-hover": colors.gray[50],
        "border-default-disabled": colors.gray[40],
        "border-primary-default": colors.gray[40],
        "border-primary-hover": colors.gray[50],
        "border-primary-disabled": colors.gray[40],
        "border-secondary-default": colors.gray[40],
        "border-secondary-hover": colors.gray[50],
        "border-secondary-disabled": colors.gray[40],
        "border-success-default": colors.gray[40],
        "border-success-hover": colors.green[500],
        "border-success-disabled": colors.gray[40],
        "border-warning-default": colors.gray[40],
        "border-warning-hover": colors.gray[50],
        "border-warning-disabled": colors.gray[40],
        "border-error-default": colors.gray[40],
        "border-error-hover": colors.gray[50],
        "border-error-disabled": colors.gray[40],
        "hover-default": colors.gray[30],
        "hover-primary": colors.blue[400],
        "hover-secondary": colors.teal[500],
        "hover-success": colors.green[500],
        "hover-warning": colors.yellow[200],
        "hover-error": colors.red[500],
        "hover-text": colors.gray[20],
        "disabled-default": `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray[20]} 100%)`,
        "disabled-primary": colors.blue[75],
        "disabled-secondary": colors.teal[75],
        "disabled-success": colors.green[75],
        "disabled-warning": colors.yellow[75],
        "disabled-error": colors.red[75],
        "disabled-text": colors.white,
        "text-default": colors.gray[700],
        "text-disabled": colors.gray[80],
        "text-white": colors.white,
        "icon-default": colors.gray[900],
        "icon-disabled": colors.gray[80],
        "icon-white": colors.white,
    },
    dark: {
        default: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray[20]} 100%)`,
        primary: colors.blue[300],
        secondary: colors.teal[300],
        success: colors.green[400],
        warning: colors.yellow[100],
        error: colors.red[400],
        text: colors.transparent,
        widget: colors.blue[200],
        "border-default-default": colors.gray[40],
        "border-default-hover": colors.gray[50],
        "border-default-disabled": colors.gray[40],
        "border-primary-default": colors.gray[40],
        "border-primary-hover": colors.gray[50],
        "border-primary-disabled": colors.gray[40],
        "border-secondary-default": colors.gray[40],
        "border-secondary-hover": colors.gray[50],
        "border-secondary-disabled": colors.gray[40],
        "border-success-default": colors.gray[40],
        "border-success-hover": colors.green[500],
        "border-success-disabled": colors.gray[40],
        "border-warning-default": colors.gray[40],
        "border-warning-hover": colors.gray[50],
        "border-warning-disabled": colors.gray[40],
        "border-error-default": colors.gray[40],
        "border-error-hover": colors.gray[50],
        "border-error-disabled": colors.gray[40],
        "hover-default": colors.gray[30],
        "hover-primary": colors.blue[400],
        "hover-secondary": colors.teal[500],
        "hover-success": colors.green[500],
        "hover-warning": colors.yellow[200],
        "hover-error": colors.red[500],
        "hover-text": colors.gray[20],
        "disabled-default": `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray[20]} 100%)`,
        "disabled-primary": colors.blue[75],
        "disabled-secondary": colors.teal[75],
        "disabled-success": colors.green[75],
        "disabled-warning": colors.yellow[75],
        "disabled-error": colors.red[75],
        "disabled-text": colors.white,
        "text-default": colors.gray[700],
        "text-disabled": colors.gray[80],
        "text-white": colors.white,
        "icon-default": colors.gray[900],
        "icon-disabled": colors.gray[80],
        "icon-white": colors.white,
    },
});
