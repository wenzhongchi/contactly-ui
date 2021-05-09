import { useState, useEffect } from "react";
import _findIndex from "lodash/findIndex";
import _findLastIndex from "lodash/findLastIndex";
import _head from "lodash/head";
import _throttle from "lodash/throttle";
import _drop from "lodash/drop";
import { breakpointValues, breakpointKeys } from "@theme/breakpoints";

type BreakPointKeys = typeof breakpointKeys[number];

export type BreakpointHookProps = {
    breakpoint: string;
    queryBreakpoint: (key: BreakPointKeys, exclude?: boolean) => boolean;
};

const getBreakpointKey = (width: number): string => {
    const index = _findLastIndex(
        breakpointValues,
        (breakpoint) => width >= Number(breakpoint.replace("px", "")),
    );

    if (index !== null) return breakpointKeys[index];
    return _head(breakpointKeys) as string;
};

export const useBreakpoint = (): BreakpointHookProps => {
    const [breakpoint, setBreakpoint] = useState(() =>
        getBreakpointKey(typeof window !== "undefined" ? window.innerWidth : 0),
    );

    useEffect(() => {
        const handleWindowResize = _throttle(() => {
            setBreakpoint(getBreakpointKey(window.innerWidth));
        }, 100);

        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const queryBreakpoint = (key: BreakPointKeys, exclude?: boolean) => {
        const index = _findIndex(breakpointKeys, (breakpointKey) => breakpointKey === key);
        const keys = _drop(breakpointKeys, exclude ? index + 1 : index);
        return keys.includes(breakpoint as BreakPointKeys);
    };

    return { breakpoint, queryBreakpoint };
};
