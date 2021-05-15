import { Colors } from "@contactly-ui/system";

export type CardColors = {
    border: string;
};

export type CardTheme = {
    light: CardColors;
    dark: CardColors;
};

export const getCardColors = (colors: Colors): CardTheme => ({
    light: {
        border: colors.gray[30],
    },
    dark: {
        border: colors.gray[30],
    },
});
