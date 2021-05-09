/* eslint-disable no-console, react/jsx-no-bind */

import React, { useState, useCallback } from "react";
import _delay from "lodash/delay";

import { useToggle } from "../../hooks/useToggle";

import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Drawer } from "./Drawer";
import { HeaderDrawer } from "./HeaderDrawer";
import { MenuDrawer } from "./MenuDrawer";

export default {
    title: "Components/Drawer",
    component: Drawer,
};

export const Header: React.FC = () => {
    const [isShown, setIsShown] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        if (isShown) {
            setOpen(false);
            _delay(() => setIsShown(false), 300);
        } else {
            setIsShown(true);
            setOpen(true);
        }
    }, [isShown]);

    return (
        <>
            <Button onClick={handleOpen}>Open drawer</Button>
            <HeaderDrawer isShown={isShown} isOpen={isOpen}>
                <React.Fragment>
                    <Text variant="body-md">
                        Hey, I'm a model. Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey,
                        I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a
                        model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a
                        model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.
                    </Text>
                </React.Fragment>
            </HeaderDrawer>
        </>
    );
};

export const Menu: React.FC = () => {
    const { isShown, toggle } = useToggle();

    return (
        <>
            <Button onClick={toggle}>Open drawer</Button>
            <MenuDrawer
                heading="Heading of popover"
                isShown={isShown}
                hide={toggle}
                leftButtonLabel="Cancel"
                rightButtonLabel="Confirm"
                onLeftButtonClick={() => {
                    toggle();
                }}
                onRightButtonClick={() => {
                    console.log("right clicked");
                }}
            >
                <React.Fragment>
                    <Text variant="body-md">
                        Hey, I'm a model. Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey,
                        I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a
                        model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a
                        model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.
                    </Text>
                </React.Fragment>
            </MenuDrawer>
        </>
    );
};
