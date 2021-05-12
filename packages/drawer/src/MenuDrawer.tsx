import React, { useEffect, useCallback, useState } from "react";
import _delay from "lodash/delay";

import { Text } from "@components/Text/Text";
import { Button } from "@components/Button/Button";
import { useBreakpoint } from "@hooks/useBreakpoint";
import IconClose from "@icon/Close";
import IconArrowRight from "@icon/ArrowRight";

import { DrawerOverlay } from "./DrawerOverlay";
import { DrawerHeader } from "./DrawerHeader";
import { Drawer } from "./Drawer";
import { DrawerContent } from "./DrawerContent";
import { DrawerFooter } from "./DrawerFooter";
import { DrawerBody } from "./DrawerBody";

export interface MenuDrawerProps {
    heading?: string;
    leftButtonLabel?: string;
    rightButtonLabel?: string;
    isShown: boolean;
    children: React.ReactNode;
    hide: () => void;
    onLeftButtonClick?: () => void;
    onRightButtonClick?: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
    heading,
    leftButtonLabel,
    rightButtonLabel,
    isShown,
    children,
    hide,
    onLeftButtonClick,
    onRightButtonClick,
}) => {
    const { queryBreakpoint } = useBreakpoint();
    const [isOpen, setOpen] = useState(isShown);

    const handleToggleClose = useCallback(() => {
        setOpen(false);
        _delay(() => hide(), 300);
    }, [hide]);

    const handleLeftButtonClick = useCallback(() => {
        setOpen(false);
        _delay(() => {
            hide();
            if (onLeftButtonClick) onLeftButtonClick();
        }, 300);
    }, [hide, onLeftButtonClick]);

    const handleRightButtonClick = useCallback(() => {
        setOpen(false);
        _delay(() => {
            hide();
            if (onRightButtonClick) onRightButtonClick();
        }, 300);
    }, [hide, onRightButtonClick]);

    useEffect(() => {
        setOpen(isShown);
    }, [isShown]);

    return (
        <Drawer isShown={isShown}>
            <DrawerOverlay hide={hide} />
            <DrawerContent isOpen={isOpen} variant="medium">
                {heading && (
                    <DrawerHeader>
                        <Text variant="h5">{heading}</Text>
                        <Button
                            variant="transparent"
                            size="md"
                            leftIcon={<IconClose />}
                            onClick={handleToggleClose}
                        />
                    </DrawerHeader>
                )}
                <DrawerBody>{children}</DrawerBody>
                <DrawerFooter backgroundColor={{ _: "bg.transparent", md: "bg.tertiary" }}>
                    <Button
                        variant="default"
                        size="md"
                        onClick={handleLeftButtonClick}
                        display={{ _: "none", md: "flex" }}
                    >
                        {leftButtonLabel}
                    </Button>
                    <Button
                        variant="default"
                        size="md"
                        onClick={handleRightButtonClick}
                        flexGrow={{ _: 1, md: 0 }}
                        rightIcon={queryBreakpoint("md") ? undefined : <IconArrowRight />}
                    >
                        {rightButtonLabel}
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
