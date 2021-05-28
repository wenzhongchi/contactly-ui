import {
    compose,
    space,
    layout,
    flexbox,
    border,
    position,
    color,
    shadow,
    typography,
    background,
} from "styled-system";

export const composedSystem = compose(
    space,
    layout,
    flexbox,
    border,
    position,
    color,
    shadow,
    background,
);
export const composedTextSystem = compose(space, layout, position, color, typography);
