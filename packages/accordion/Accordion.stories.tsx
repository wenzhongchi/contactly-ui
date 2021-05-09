import React from "react";

import { Flex } from "../Flex/Flex";
import { Text } from "../Text/Text";
import { Accordion } from "./Accordion";
import { AccordionButton } from "./AccordionButton";
import { AccordionItem } from "./AccordionItem";
import { AccordionPanel } from "./AccordionPanel";
import { AccordionIcon } from "./AccordionIcon";

export default {
    title: "Components/Accordion",
    component: Accordion,
};

export const Multiple: React.FC = () => (
    <Flex flexDirection="column" flexGrow={1}>
        <Accordion allowMultiple={true}>
            <AccordionItem>
                <AccordionButton>
                    <Text variant="body-md">Open Here</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    <Text variant="body-md">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for previewing layouts and visual mockups. Lorem ipsum
                        is placeholder text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups. Lorem ipsum is
                        placeholder text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                    </Text>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton>
                    <Text variant="body-md">Open Here</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    <Text variant="body-md">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for previewing layouts and visual mockups. Lorem ipsum
                        is placeholder text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups. Lorem ipsum is
                        placeholder text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                    </Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Flex>
);

export const Single: React.FC = () => (
    <Flex flexDirection="column" flexGrow={1}>
        <Accordion allowMultiple={false}>
            <AccordionItem>
                <AccordionButton>
                    <Text variant="body-md">Open will close other</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    <Text variant="body-md">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for previewing layouts and visual mockups. Lorem ipsum
                        is placeholder text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups. Lorem ipsum is
                        placeholder text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                    </Text>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton>
                    <Text variant="body-md">Open will close other</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    <Text variant="body-md">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for previewing layouts and visual mockups. Lorem ipsum
                        is placeholder text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups. Lorem ipsum is
                        placeholder text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                    </Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Flex>
);
