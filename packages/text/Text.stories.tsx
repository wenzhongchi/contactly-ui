import React from "react";

import { Flex } from "@components/Flex";

import { Text } from "./Text";

export default {
    title: "Components/Text",
    component: Text,
};

export const Heading: React.FC = () => (
    <Flex flexDirection="column" flexGrow={1}>
        <Text variant="h1">Heading 1 - Page titles</Text>
        <Text variant="h2">Heading 2 - Section titles</Text>
        <Text variant="h2">Heading 3 - Component titles</Text>
        <Text variant="h2">Heading 4 - Component titles</Text>
        <Text variant="h2">Heading 5 - Small component titles</Text>
    </Flex>
);

export const Label: React.FC = () => (
    <Flex flexDirection="column" flexGrow={1}>
        <Text variant="label-lg" fontWeight="bold" mb={5}>
            Large labels - 700
        </Text>
        <Text variant="label-lg" fontWeight={600} mb={5}>
            Large labels - 600
        </Text>
        <Text variant="label-lg" fontWeight="normal" mb={5}>
            Large labels - 400
        </Text>
        <Text variant="label-md" fontWeight="bold" mb={5}>
            Medium labels - 700
        </Text>
        <Text variant="label-md" fontWeight={600} mb={5}>
            Medium labels - 600
        </Text>
        <Text variant="label-md" fontWeight="normal" mb={5}>
            Medium labels - 400
        </Text>
        <Text variant="label-sm" fontWeight="bold" mb={5}>
            Small labels - 700
        </Text>
        <Text variant="label-sm" fontWeight={600} mb={5}>
            Small labels - 600
        </Text>
        <Text variant="label-sm" fontWeight="normal" mb={5}>
            Small labels - 400
        </Text>
    </Flex>
);

export const Body: React.FC = () => (
    <Flex flexDirection="column" flexGrow={1}>
        <Text variant="body-lg" fontWeight="normal" mb={5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
        </Text>
        <Text variant="body-lg" fontWeight="bold" mb={5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
        </Text>
        <Text variant="body-md" fontWeight={600} mb={5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
        </Text>
        <Text variant="body-md" fontWeight="normal" mb={5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
        </Text>
        <Text variant="body-md" fontWeight="bold" mb={5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
        </Text>
        <Text variant="body-md" fontWeight={600} mb={5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
        </Text>
        <Text variant="body-sm" fontWeight={600} mb={5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
        </Text>
        <Text variant="body-sm" fontWeight="normal" mb={5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
        </Text>
    </Flex>
);
