export const breakpointValues = ["340px", "480px", "768px", "992px", "1200px"];
export const breakpointKeys = ["xs", "sm", "md", "lg", "xl"] as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const breakpoints: any = breakpointValues;
// aliases
breakpoints.xs = breakpoints[1];
breakpoints.sm = breakpoints[2];
breakpoints.md = breakpoints[3];
breakpoints.lg = breakpoints[4];
breakpoints.xl = breakpoints[5];

export default breakpoints;
