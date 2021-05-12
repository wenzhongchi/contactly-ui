import React from "react";

import { Flex } from "../../flex/src/Flex";
import IconInfo from "../../icons/Info";
import { ProgressBar } from "../src/ProgressBar";

export default {
    title: "Components/ProgressBar",
    component: ProgressBar,
};

export const Default: React.FC = () => (
    <Flex flexGrow={1} flexDirection="column">
        <ProgressBar label="Default Label" secondaryLabel="Default Secondary Text" percent={20} />
    </Flex>
);

export const DefaultUnfilled: React.FC = () => (
    <Flex flexGrow={1} flexDirection="column">
        <ProgressBar
            isFill={false}
            label="Default Label"
            secondaryLabel="Default Secondary Text"
            percent={20}
        />
    </Flex>
);

export const Icons: React.FC = () => (
    <Flex flexGrow={1} flexDirection="column">
        <ProgressBar
            icon={<IconInfo />}
            label="Default Label"
            secondaryLabel="Default Secondary Text"
            percent={20}
        />
    </Flex>
);

export const Tag: React.FC = () => (
    <Flex flexGrow={1} flexDirection="column">
        <ProgressBar
            hasTag
            tagProps={{ variant: "default", label: "Primary", size: "sm" }}
            label="Default Label"
            secondaryLabel="Default Secondary Text"
            percent={85}
        />
    </Flex>
);

export const Validation: React.FC = () => (
    <Flex flexGrow={1} flexDirection="column">
        <ProgressBar
            color="warning"
            hasStatus
            label="Default Label"
            secondaryLabel="Default Secondary Text"
            percent={20}
            statusProps={{ variant: "default", label: "Hint for validation" }}
        />
    </Flex>
);

export const Badge: React.FC = () => (
    <Flex flexGrow={1} flexDirection="column">
        <ProgressBar
            color="danger"
            hasBadge
            badgeProps={{ label: 99 }}
            label="Default Label"
            secondaryLabel="Default Secondary Text"
            percent={20}
        />
    </Flex>
);

export const Avatar: React.FC = () => (
    <Flex flexGrow={1} flexDirection="column">
        <ProgressBar
            color="success"
            avatarSrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            name="Nikita"
            secondaryLabel="Default Secondary Text"
            percent={20}
        />
    </Flex>
);
