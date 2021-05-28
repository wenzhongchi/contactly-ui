import { Colors } from "@contactly-ui/system";

export type CheckboxColors = {
    unchecked: string;
    checked: string;
    disabled: string;
    "checked-disabled": string;
    "border-default": string;
    "border-hover": string;
    "border-transparent": string;
    "icon-white": string;
};

export type CheckboxTheme = {
    light: CheckboxColors;
    dark: CheckboxColors;
};

export const getCheckboxColors = (colors: Colors): CheckboxTheme => ({
    light: {
        unchecked: colors.gray[10],
        checked: colors.blue[200],
        disabled: colors.gray[30],
        "checked-disabled": colors.gray[60],
        "border-default": colors.gray[50],
        "border-hover": colors.gray[30],
        "border-transparent": colors.transparent,
        "icon-white": colors.white,
    },
    dark: {
        unchecked: colors.gray[10],
        checked: colors.blue[200],
        disabled: colors.gray[30],
        "checked-disabled": colors.gray[60],
        "border-default": colors.gray[50],
        "border-hover": colors.gray[30],
        "border-transparent": colors.transparent,
        "icon-white": colors.white,
    },
});
