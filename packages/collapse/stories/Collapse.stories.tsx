/* eslint-disable no-console, react/jsx-no-bind */

import React from "react";

import { Box } from "../../box/src/Box";
import { Button } from "../../button/src/Button";
import { Text } from "../../text/src/Text";
import { Collapse } from "../src/Collapse";

export default {
    title: "Components/Collapse",
    component: Collapse,
};

export const Basic: React.FC = () => {
    const [isShow, setShow] = React.useState(false);
    const handleToggle = () => setShow(!isShow);

    return (
        <Box>
            <Box mb="2x">
                <Button onClick={handleToggle}>Toggle</Button>
            </Box>
            <Collapse isOpen={isShow}>
                <Text variant="body-md">
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual mockups. Lorem ipsum is
                    placeholder text commonly used in the graphic, print, and publishing industries
                    for previewing layouts and visual mockups. Lorem ipsum is placeholder text
                    commonly used in the graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                </Text>
            </Collapse>
        </Box>
    );
};
