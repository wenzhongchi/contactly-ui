import React from "react";
import styled from "styled-components";

import { Box, BoxProps } from "@components/Box/Box";

type IconBoxProps = BoxProps & {
    animate?: boolean;
};

export const IconBox: React.FC<IconBoxProps> = styled(Box)<IconBoxProps>(({ animate }) => {
    const transition = "all 0.3s ease-out";
    if (animate) return { transform: `rotate(180deg)`, transition };
    return { transform: "rotate()", transition };
});
