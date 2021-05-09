import { useTheme } from "styled-components";
import _get from "lodash/get";

export const useZIndex = (path: string): number => {
    const theme = useTheme();
    return _get(theme, `zIndices.${path}`);
};
