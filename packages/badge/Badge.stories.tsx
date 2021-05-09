import React from "react";

import { Flex } from "../Flex/Flex";
import IconUser from "../../icons/User";

import { Badge } from "./Badge";

export default {
    title: "Components/Badge",
    component: Badge,
};

export const Number: React.FC = () => (
    <Flex flexDirection="column" flexGrow={1}>
        <Flex flexDirection="row" alignItems="center" justifyContent="space-evenly" mb="10">
            <Badge label={99} variant="primary" />
            <Badge label={99} variant="secondary" />
            <Badge label={99} variant="success" />
            <Badge label={99} variant="warning" />
            <Badge label={99} variant="danger" />
            <Badge label={99} variant="default" />
            <Badge label={99} variant="dark" />
            <Badge label={99} variant="light" />
        </Flex>
        <Flex flexDirection="row" alignItems="center" justifyContent="space-evenly">
            <Badge label={99} variant="primary" size="md" />
            <Badge label={99} variant="secondary" size="md" />
            <Badge label={99} variant="success" size="md" />
            <Badge label={99} variant="warning" size="md" />
            <Badge label={99} variant="danger" size="md" />
            <Badge label={99} variant="default" size="md" />
            <Badge label={99} variant="dark" size="md" />
            <Badge label={99} variant="light" size="md" />
        </Flex>
    </Flex>
);

export const Icon: React.FC = () => (
    <Flex flexDirection="column" flexGrow={1}>
        <Flex flexDirection="row" alignItems="center" justifyContent="space-evenly">
            <Badge label={99} variant="primary" size="md" icon={<IconUser />} />
            <Badge label={99} variant="secondary" size="md" icon={<IconUser />} />
            <Badge label={99} variant="success" size="md" icon={<IconUser />} />
            <Badge label={99} variant="warning" size="md" icon={<IconUser />} />
            <Badge label={99} variant="danger" size="md" icon={<IconUser />} />
            <Badge label={99} variant="default" size="md" icon={<IconUser />} />
            <Badge label={99} variant="dark" size="md" icon={<IconUser />} />
            <Badge label={99} variant="light" size="md" icon={<IconUser />} />
        </Flex>
    </Flex>
);
