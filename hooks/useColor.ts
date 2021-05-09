import { useTheme } from "styled-components";
import _has from "lodash/has";
import _get from "lodash/get";

export const useColor = (path: string): string => {
    const theme = useTheme();

    if (_has(theme, `colors.${path}`)) {
        return _get(theme, `colors.${path}`);
    }

    return path;
};
