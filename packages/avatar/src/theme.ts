import { Colors } from "@contactly-ui/system";

export type AvatarColors = {
    image: string;
    label: string;
};

export type AvatarTheme = {
    light: AvatarColors;
    dark: AvatarColors;
};

export const getAvatarColors = (colors: Colors): AvatarTheme => ({
    light: {
        image: colors.gray[30],
        label: colors.blue[300],
    },
    dark: {
        image: colors.gray[30],
        label: colors.blue[300],
    },
});
