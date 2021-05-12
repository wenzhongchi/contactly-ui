import React, { createContext, forwardRef, useContext, useState } from "react";
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
import { TabProps } from "@components/Tab/Tab";
import { TabList, TabListProps } from "@components/Tab/TabList";
import { TabPanels, TabPanelsProps } from "@components/Tab/TabPanels";
import { AnyObject } from "@type/types";

type TabGroupContextProps = {
    orientation: "horizontal" | "vertical";
    currentSelected: number;
    onTabChange: (tabIndex: number) => void;
};

const TabGroupContext = createContext<Partial<TabGroupContextProps>>({});
export const useTabGroupContext = (): Partial<TabGroupContextProps> => useContext(TabGroupContext);

type StyledTabGroupProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps & {
        orientation?: "horizontal" | "vertical";
        defaultSelected?: number;
        onChange?: (tabIndex: number) => void;
        children?: React.ReactElement<TabListProps | TabPanelsProps>[];
    };

export type TabGroupProps = StyledComponentProps<"div", AnyObject, StyledTabGroupProps, never>;

export const TabGroup: React.FC<TabGroupProps> = forwardRef<HTMLDivElement, TabGroupProps>(
    ({ orientation, children, defaultSelected, onChange, ...props }, ref) => {
        const tabs: React.ReactElement<TabProps>[] = [];

        const tabListElement = React.Children.toArray(children).filter(
            (value) => (value as React.ReactElement).type === TabList,
        );

        tabListElement.forEach((value) =>
            (value as React.ReactElement).props.children.forEach((tab: React.ReactElement) =>
                tabs.push(tab),
            ),
        );

        const getInitialDefaultSelected = () => {
            if (
                defaultSelected &&
                defaultSelected < tabs.length &&
                !tabs[defaultSelected].props.isDisabled
            ) {
                return defaultSelected;
            } else {
                const enabledTabs = tabs.filter((value) => !value.props.isDisabled);
                if (enabledTabs.length > 0) return tabs.indexOf(enabledTabs[0]);
                else return -1;
            }
        };

        const [selected, setSelected] = useState(getInitialDefaultSelected);

        const onTabChanged = (index: number) => {
            setSelected(index);
            onChange && onChange(index);
        };

        const tabPanelsElement = React.Children.toArray(children).filter(
            (value) => (value as React.ReactElement).type === TabPanels,
        );

        return (
            <TabGroupContext.Provider
                value={{
                    currentSelected: selected,
                    orientation: orientation,
                    onTabChange: onTabChanged,
                }}
            >
                <Flex
                    width="100%"
                    flexDirection={orientation === "horizontal" ? "column" : "row"}
                    ref={ref}
                    {...props}
                >
                    {tabListElement}
                    {tabPanelsElement}
                </Flex>
            </TabGroupContext.Provider>
        );
    },
);

TabGroup.defaultProps = {
    orientation: "horizontal",
    defaultSelected: 0,
};
