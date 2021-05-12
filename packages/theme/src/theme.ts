import { Theme } from "styled-system";

import { colors } from "@contactly-ui/system";
import { getTextColors } from "@contactly-ui/text";
import { getButtonColors } from "@contactly-ui/button";

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
    },
    breakpoints,
};

const dark: Theme = {
    ...baseTheme,
    colors: {
        text: getTextColors(colors).dark,
        button: getButtonColors(colors).dark,
    },
    breakpoints,
};

export default { light, dark };
