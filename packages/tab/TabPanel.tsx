import React, { forwardRef } from "react";
import {
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
} from "styled-system";
import { StyledComponentProps } from "styled-components";

import { Flex } from "@components/Flex/Flex";
import { AnyObject } from "@type/types";

export type StyledTabPanelProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps & {
        children?: React.ReactElement;
    };

export type TabPanelProps = StyledComponentProps<"div", AnyObject, StyledTabPanelProps, never>;

export const TabPanel: React.FC<TabPanelProps> = forwardRef<HTMLDivElement, TabPanelProps>(
    ({ children, ...props }, ref) => (
        <Flex ref={ref} {...props}>
            {children}
        </Flex>
    ),
);
