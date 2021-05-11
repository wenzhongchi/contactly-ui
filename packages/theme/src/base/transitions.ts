export const timingFunctions = {
    ease: "ease",
    linear: "linear",
    cubic: "cubic-bezier(0.41, 0.094, 0.54, 0.07)",
};

export const transitions = {
    slow: `500ms ${timingFunctions.cubic}`,
    medium: `300ms ${timingFunctions.ease}`,
    fast: `100ms ${timingFunctions.linear}`,
};

export default {};
