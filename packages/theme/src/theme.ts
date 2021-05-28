import { Theme } from "styled-system";

import { colors } from "../../system/src";
import { getTextColors } from "../../text/src";
import { getButtonColors } from "../../button/src";
import { getIconColors } from "../../icon/src";
import { getCardColors } from "../../card/src";
import { getAvatarColors } from "../../avatar/src";
import { getCheckboxColors } from "../../checkbox/src";
import { getInputColors } from "../../input/src";

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
