import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { css as customCSS, SystemStyleObject } from "@styled-system/css";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";

type StyledBoxProps = StyledSystemProps & {
    css?: SystemStyleObject;
};

export type BoxProps = StyledComponentProps<"div", AnyObject, StyledBoxProps, never>;

const StyledBox = styled.div<BoxProps>(
    {
        boxSizing: "border-box",
    },
    ({ css }) => customCSS(css),
    composedSystem,
);

export const Box: React.FC<BoxProps> = forwardRef<HTMLDivElement, BoxProps>(
    ({ css, children, ...restProps }, ref) => (
        <StyledBox ref={ref} css={css} {...restProps}>
            {children}
        </StyledBox>
    ),
);
