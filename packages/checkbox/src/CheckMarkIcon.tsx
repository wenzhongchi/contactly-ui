import React from "react";
import styled from "styled-components";

import { composedSystem } from "@contactly-ui/system";

const StyledCheckMarkIcon = styled.svg(
    {
        viewBox: "0 0 12 12",
        width: "12px",
        height: "12px",
        fill: "checkbox.icon-white",
        stroke: "checkbox.icon-white",
    },
    composedSystem,
);

export const CheckMarkIcon = () => (
    <StyledCheckMarkIcon>
        <path
            d="M10.3536 2.64645C10.5488 2.84171 10.5488 3.15829 10.3536 3.35355L4.85355 8.85355C4.65829 9.04882 4.34171 9.04882 4.14645 8.85355L1.64645 6.35355C1.45118 6.15829 1.45118 5.84171 1.64645 5.64645C1.84171 5.45118 2.15829 5.45118 2.35355 5.64645L4.5 7.79289L9.64645 2.64645C9.84171 2.45118 10.1583 2.45118 10.3536 2.64645Z"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </StyledCheckMarkIcon>
);
