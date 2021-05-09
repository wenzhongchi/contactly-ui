import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { compose, space, layout, flexbox, border, position, color, shadow } from "styled-system";
import { css as customCSS, SystemStyleObject } from "@styled-system/css";

import { AnyObject, StyledSystemProps } from "@contactly-ui/system";

type StyledBoxProps = StyledSystemProps & {
    css?: SystemStyleObject;
};

export type BoxProps = StyledComponentProps<"div", AnyObject, StyledBoxProps, never>;

const StyledBox = styled.div<BoxProps>(
    {
        boxSizing: "border-box",
    },
    ({ css }) => customCSS(css),
    compose(space, color, layout, flexbox, border, position, shadow),
);

export const Box: React.FC<BoxProps> = forwardRef<HTMLDivElement, BoxProps>(
    ({ css, children, ...restProps }, ref) => (
        <StyledBox ref={ref} css={css} {...restProps}>
            {children}
        </StyledBox>
    ),
);
