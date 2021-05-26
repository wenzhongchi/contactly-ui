import { Theme } from "styled-system";

import { colors } from "@contactly-ui/system";
import { getTextColors } from "@contactly-ui/text";
import { getButtonColors } from "@contactly-ui/button";
import { getIconColors } from "@contactly-ui/icon";
import { getCardColors } from "@contactly-ui/card";
import { getAvatarColors } from "@contactly-ui/avatar";
import { getCheckboxColors } from "@contactly-ui/checkbox";
import { getInputColors } from "@contactly-ui/input";

import { fonts, fontSizes, fontWeights, lineHeights, letterSpacings } from "./base/typography";
import space from "./base/spaces";
import breakpoints from "./base/breakpoints";
import { borders, borderWidths } from "./base/borders";
import shadows from "./base/shadows";
import radii from "./base/radius";
import zIndices from "./base/zIndices";

const baseTheme = {
    space,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    borders,
    borderWidths,
    shadows,
    radii,
    zIndices,
};

const light: Theme = {
    ...baseTheme,
    colors: {
        text: getTextColors(colors).light,
        button: getButtonColors(colors).light,
        icon: getIconColors(colors).light,
        card: getCardColors(colors).light,
        avatar: getAvatarColors(colors).light,
        checkbox: getCheckboxColors(colors).light,
        input: getInputColors(colors).light,
    },
    breakpoints,
};

const dark: Theme = {
    ...baseTheme,
    colors: {
        text: getTextColors(colors).dark,
        button: getButtonColors(colors).dark,
        icon: getIconColors(colors).dark,
        card: getCardColors(colors).dark,
        avatar: getAvatarColors(colors).dark,
        checkbox: getCheckboxColors(colors).dark,
        input: getInputColors(colors).dark,
    },
    breakpoints,
};

export const themes = { light, dark };
