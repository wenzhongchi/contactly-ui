import CSS from "csstype";
declare const zIndices: {
    hide: number;
    auto: CSS.Property.ZIndex;
    base: number;
    dropdown: number;
    sticky: number;
    fixed: number;
    overlay: number;
    drawer: number;
    modal: number;
    popover: number;
    toast: number;
    tooltip: number;
};
export declare type ZIndices = typeof zIndices;
export default zIndices;
