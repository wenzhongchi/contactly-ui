export const breakpointValues = ["340px", "568px", "667px", "768px", "992px", "1200px"];
export const breakpointKeys = ["xxs", "xs", "sm", "md", "lg", "xl"] as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const breakpoints: any = breakpointValues;
// aliases
breakpoints.xxs = breakpoints[0];
breakpoints.xs = breakpoints[1];
breakpoints.sm = breakpoints[2];
breakpoints.md = breakpoints[3];
breakpoints.lg = breakpoints[4];
breakpoints.xl = breakpoints[5];

export default breakpoints;
