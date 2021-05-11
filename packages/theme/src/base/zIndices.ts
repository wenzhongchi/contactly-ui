import CSS from "csstype";

const zIndices = {
    hide: -1,
    auto: "auto" as CSS.Property.ZIndex,
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    drawer: 1400,
    modal: 1500,
    popover: 1600,
    toast: 1700,
    tooltip: 1800,
};

export type ZIndices = typeof zIndices;

export default zIndices;
