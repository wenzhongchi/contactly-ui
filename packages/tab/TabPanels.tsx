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
import { TabPanelProps } from "@components/Tab/TabPanel";
import { useTabGroupContext } from "@components/Tab/TabGroup";
import { AnyObject } from "@type/types";

type StyledTabPanelsProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps & {
        children?: React.ReactElement<TabPanelProps>[];
    };

export type TabPanelsProps = StyledComponentProps<"div", AnyObject, StyledTabPanelsProps, never>;

export const TabPanels: React.FC<TabPanelsProps> = forwardRef<HTMLDivElement, TabPanelsProps>(
    ({ children, ...props }, ref) => {
        const { currentSelected } = useTabGroupContext();
        const panels = React.Children.toArray(children);
        return (
            <Flex width="100%" {...props} ref={ref}>
                {currentSelected && currentSelected >= panels.length
                    ? null
                    : panels[currentSelected || 0]}
            </Flex>
        );
    },
);
