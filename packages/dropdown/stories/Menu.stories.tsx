/* eslint-disable no-console, react/jsx-no-bind */

import React, { useCallback, useState } from "react";

import { Flex } from "@components/Flex";
import IconUser from "@icon/User";
import IconArrowDown from "@icon/ArrowDown";

import { Menu } from "./Menu";
import { HoverMenu } from "../src/HoverMenu";
import { MenuItem } from "./MenuItem";

export default {
    title: "Components/Menu",
    component: Menu,
};

export const HoverDefault: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("English");

    const handleSelect = useCallback(
        (item) => {
            setSelectedValue(item);
            setIsOpen(false);
        },
        [setSelectedValue],
    );

    return (
        <Flex justifyContent="center" height="300px" width="100%">
            <HoverMenu
                label="Dashboard"
                leftIcon={<IconArrowDown />}
                placement="bottom-start"
                visible={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                onOuterClick={() => setIsOpen(false)}
                onHoverOver={(hover) => setIsOpen(hover)}
                value={selectedValue}
            >
                <MenuItem onClick={() => handleSelect("English")}>English</MenuItem>
                <MenuItem onClick={() => handleSelect("Chinese")}>Chinese</MenuItem>
                <MenuItem onClick={() => handleSelect("German")}>German</MenuItem>
            </HoverMenu>
        </Flex>
    );
};

export const HoverLogin: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("English");

    const handleSelect = useCallback(
        (item) => {
            setSelectedValue(item);
            setIsOpen(false);
        },
        [setSelectedValue],
    );

    return (
        <Flex justifyContent="center" height="300px" width="100%">
            <HoverMenu
                label="Get Started"
                leftIcon={<IconUser />}
                placement="bottom-end"
                visible={isOpen}
                buttonVariant="transparent"
                hasLeftHover
                leftHoverColor="bg.transparent"
                onClick={() => setIsOpen(!isOpen)}
                onOuterClick={() => setIsOpen(false)}
                onHoverOver={(hover) => setIsOpen(hover)}
                value={selectedValue}
            >
                <MenuItem onClick={() => handleSelect("English")}>English</MenuItem>
                <MenuItem onClick={() => handleSelect("Chinese")}>Chinese</MenuItem>
                <MenuItem onClick={() => handleSelect("German")}>German</MenuItem>
            </HoverMenu>
        </Flex>
    );
};
