import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    compose,
    space,
    layout,
    flexbox,
    position,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
} from "styled-system";

import { AnyObject } from "@type/types";

type StyledInputGroupProps = SpaceProps & LayoutProps & FlexboxProps & PositionProps;

export type InputGroupProps = StyledComponentProps<"div", AnyObject, StyledInputGroupProps, never>;

const StyledInputGroup = styled.div<InputGroupProps>`
    ${compose(space, layout, flexbox, position)}
`;

export const InputGroup: React.FC<InputGroupProps> = forwardRef<HTMLDivElement, InputGroupProps>(
    ({ ...props }, ref) => <StyledInputGroup ref={ref} {...props} />,
);
