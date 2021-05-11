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
} from "styled-system";

export const composedSystem = compose(space, layout, flexbox, border, position, color, shadow);
export const composedTextSystem = compose(space, layout, position, color, typography);
