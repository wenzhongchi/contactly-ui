import { Colors } from "@contactly-ui/system";

export type InputColors = {
    text: string;
    placeholder: string;
    disabled: string;
    "border-default-default": string;
    "border-default-focus": string;
    "border-success-default": string;
    "border-success-focus": string;
    "border-warning-default": string;
    "border-warning-focus": string;
    "border-error-default": string;
    "border-error-focus": string;
    "border-disabled": string;
    "border-transparent": string;
    "bg-disabled": string;
};

export type InputTheme = {
    light: InputColors;
    dark: InputColors;
};

export const getInputColors = (colors: Colors): InputTheme => ({
    light: {
        text: colors.gray[800],
        disabled: colors.gray[80],
        placeholder: colors.gray[80],
        "border-default-default": colors.gray[40],
        "border-default-focus": colors.blue[300],
        "border-success-default": colors.green[400],
        "border-success-focus": colors.blue[300],
        "border-warning-default": colors.gray[40],
        "border-warning-focus": colors.blue[300],
        "border-error-default": colors.gray[40],
        "border-error-focus": colors.blue[300],
        "border-disabled": colors.gray[40],
        "border-transparent": colors.transparent,
        "bg-disabled": colors.gray[20],
    },
    dark: {
        text: colors.gray[800],
        disabled: colors.gray[80],
        placeholder: colors.gray[80],
        "border-default-default": colors.gray[40],
        "border-default-focus": colors.blue[300],
        "border-success-default": colors.green[400],
        "border-success-focus": colors.blue[300],
        "border-warning-default": colors.gray[40],
        "border-warning-focus": colors.blue[300],
        "border-error-default": colors.gray[40],
        "border-error-focus": colors.blue[300],
        "border-disabled": colors.gray[40],
        "border-transparent": colors.transparent,
        "bg-disabled": colors.gray[20],
    },
});
