import React, { ReactElement, useEffect, useRef, useState, useCallback } from "react";
import _get from "lodash/get";
import {
    border,
    BorderProps,
    color,
    ColorProps,
    compose,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    space,
    SpaceProps,
} from "styled-system";
import styled, { useTheme, DefaultTheme, StyledComponentProps } from "styled-components";

import { Flex } from "@components/Flex/Flex";
import { Tab, TabProps } from "@components/Tab/Tab";
import { useTabGroupContext } from "@components/Tab/TabGroup";
import IconArrowLeft from "@icon/ArrowLeft";
import IconArrowUp from "@icon/ArrowUp";
import IconArrowRight from "@icon/ArrowRight";
import IconArrowDown from "@icon/ArrowDown";
import { AnyObject } from "@type/types";

type StyledTabListProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps;

export type TabListProps = StyledComponentProps<"div", AnyObject, StyledTabListProps, never>;

type TabListWithOrientation = TabListProps & {
    orientation: "horizontal" | "vertical";
};
const StyledTabList = styled(Flex)<TabListWithOrientation>`
    ${({ orientation }) => {
        if (orientation === "horizontal")
            return {
                width: "100%",
                overflowX: "scroll",
            };

        return {
            width: "auto",
            overflowY: "scroll",
            flexShrink: 0,
        };
    }}
    position: relative;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    ${compose(space, color, layout, flexbox, border, position)}
`;

type IconDirection = "left" | "right" | "up" | "down";

type TabListIconWrapperProps = {
    direction: IconDirection;
    onClick: () => void;
    children: React.ReactNode;
};

const getIconComponentByDirection = (direction: IconDirection) => {
    switch (direction) {
        case "left":
            return IconArrowLeft;
        case "right":
            return IconArrowRight;
        case "up":
            return IconArrowUp;
        case "down":
            return IconArrowDown;
    }
};

const getTabListIconWrapperStyles = (direction: IconDirection, theme: DefaultTheme) => {
    const primaryColor = _get(theme, "colors.bg.primary");
    const transparentColor = _get(theme, "colors.bg.transparent");

    switch (direction) {
        case "left":
            return {
                background: `linear-gradient(90deg, ${primaryColor} , ${transparentColor})`,
                height: "100%",
                alignItems: "center",
                left: 0,
            };
        case "right":
            return {
                background: `linear-gradient(270deg, ${primaryColor} , ${transparentColor})`,
                height: "100%",
                alignItems: "center",
                right: 0,
            };
        case "up":
            return {
                background: `linear-gradient(180deg, ${primaryColor} , ${transparentColor})`,
                width: "100%",
                justifyContent: "center",
                top: 0,
            };
        case "down":
            return {
                background: `linear-gradient(0deg, ${primaryColor} , ${transparentColor})`,
                width: "100%",
                justifyContent: "center",
                bottom: 0,
            };
    }
};

const TabListIconWrapper: React.FC<TabListIconWrapperProps> = ({
    direction,
    onClick,
    children,
}) => {
    const theme = useTheme();

    return (
        <Flex
            position="sticky"
            opacity={0.9}
            zIndex={1000}
            {...getTabListIconWrapperStyles(direction, theme)}
            onClick={onClick}
        >
            {children}
        </Flex>
    );
};

type TabListIconProps = {
    direction: IconDirection;
    onClick: () => void;
};

const TabListIcon: React.FC<TabListIconProps> = (props) => {
    const IconComponent = getIconComponentByDirection(props.direction);

    return (
        <TabListIconWrapper {...props}>
            <IconComponent direction={props.direction} cursor="pointer" />
        </TabListIconWrapper>
    );
};

export const TabList: React.FC<TabListProps> = ({ children, ...props }) => {
    const [scrollThreshold, setScrollThreshold] = useState(200);
    const [leftArrowVisible, setLeftArrowVisible] = useState(false);
    const [rightArrowVisible, setRightArrowVisible] = useState(false);
    const [topArrowVisible, setTopArrowVisible] = useState(false);
    const [bottomArrowVisible, setBottomArrowVisible] = useState(false);

    const tabListRef = useRef<HTMLDivElement>(null);
    const { currentSelected, orientation, onTabChange } = useTabGroupContext();

    const getCardVariantMargin = (tab: React.ReactElement<TabProps>, isLast: boolean): number => {
        if (tab.props.variant === "card") {
            if (isLast) return 0;
            else return 8;
        } else return 0;
    };

    const tabs = React.Children.toArray(children)
        .filter((value) => (value as ReactElement).type === Tab)
        .map((value, index, array) => {
            const tab = value as React.ReactElement<TabProps>;
            return React.cloneElement<TabProps>(tab, {
                isActive: index === currentSelected,
                mr:
                    orientation === "horizontal"
                        ? getCardVariantMargin(tab, index === array.length - 1)
                        : 0,
                mb:
                    orientation === "vertical"
                        ? getCardVariantMargin(tab, index === array.length - 1)
                        : 0,
                onClick: () => {
                    if (currentSelected !== index) {
                        onTabChange && onTabChange(index);
                    }
                },
                orientation: orientation,
            });
        });

    const checkArrowVisibility = () => {
        const container = tabListRef.current;
        if (!container) return;
        if (orientation === "horizontal") {
            const scrollRight =
                container.scrollWidth - container.clientWidth - container.scrollLeft;
            const scrollLeft = container.scrollLeft;
            setLeftArrowVisible(scrollLeft >= 10);
            setRightArrowVisible(scrollRight >= 10);
        } else {
            const scrollBottom =
                container.scrollHeight - container.clientHeight - container.scrollTop;
            const scrollTop = container.scrollTop;
            setTopArrowVisible(scrollTop >= 10);
            setBottomArrowVisible(scrollBottom >= 10);
        }
    };

    useEffect(() => {
        const container = tabListRef.current;
        if (!container) return;

        if (orientation === "horizontal") setScrollThreshold(container.clientWidth * 0.75);
        else setScrollThreshold(container.clientHeight * 0.75);

        checkArrowVisibility();
        container.addEventListener("scroll", checkArrowVisibility);

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            container.removeEventListener("scroll", checkArrowVisibility);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scroll = useCallback(
        (direction: IconDirection) => {
            const container = tabListRef.current;
            if (!container) return;
            switch (direction) {
                case "left":
                    container.scrollBy(-1 * scrollThreshold, 0);
                    break;
                case "right":
                    container.scrollBy(scrollThreshold, 0);
                    break;
                case "up":
                    container.scrollBy(0, -1 * scrollThreshold);
                    break;
                case "down":
                    container.scrollBy(0, scrollThreshold);
            }
        },
        [scrollThreshold],
    );

    const handleScroll = useCallback(() => {
        if (leftArrowVisible && orientation === "horizontal") {
            scroll("left");
            return;
        }
        if (topArrowVisible && orientation === "vertical") {
            scroll("up");
            return;
        }
        if (rightArrowVisible && orientation === "horizontal") {
            scroll("right");
            return;
        }
        if (bottomArrowVisible && orientation === "vertical") {
            scroll("down");
            return;
        }
    }, [
        leftArrowVisible,
        orientation,
        topArrowVisible,
        rightArrowVisible,
        bottomArrowVisible,
        scroll,
    ]);

    return (
        <StyledTabList
            orientation={orientation ? orientation : "horizontal"}
            alignItems={orientation === "horizontal" ? "center" : "flex-start"}
            flexDirection={orientation === "horizontal" ? "row" : "column"}
            {...props}
            ref={tabListRef}
        >
            {leftArrowVisible && orientation === "horizontal" && (
                <TabListIcon direction="left" onClick={handleScroll} />
            )}
            {topArrowVisible && orientation === "vertical" && (
                <TabListIcon direction="up" onClick={handleScroll} />
            )}
            {tabs}
            {rightArrowVisible && orientation === "horizontal" && (
                <TabListIcon direction="right" onClick={handleScroll} />
            )}
            {bottomArrowVisible && orientation === "vertical" && (
                <TabListIcon direction="down" onClick={handleScroll} />
            )}
        </StyledTabList>
    );
};
