import React from "react";

import { Flex } from "../Flex/Flex";
import { Tab } from "./Tab";

export default {
    title: "Components/Tab",
    component: Tab,
};

export const Basic: React.FC = () => (
    <Flex flexDirection="row" flexGrow={1}>
        <Flex flexDirection="row">
            <Tab isActive={true} label="Active" m={16} />
            <Tab isActive={false} label="Default" m={16} />
            <Tab isDisabled={true} label="Disabled" m={16} />
        </Flex>
        <Flex ml={64} flexDirection="row">
            <Tab orientation="vertical" isActive={true} label="Active" ml={24} />
            <Tab orientation="vertical" isActive={false} label="Default" ml={24} />
            <Tab orientation="vertical" isDisabled={true} label="Disabled" ml={24} />
        </Flex>
    </Flex>
);
