/* eslint-disable no-console, react/jsx-no-bind */

import React from "react";

import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import { Flex } from "../flex/src/Flex";
import { Modal } from "./Modal";
import { ContentModal } from "./ContentModal";
import { InfoModal } from "./InfoModal";

import { useToggle } from "../../hooks/useToggle";

export default {
    title: "Components/Modal",
    component: Modal,
};

export const Content: React.FC = () => {
    const { isShown, toggle } = useToggle();

    return (
        <Flex height="50%">
            <Button onClick={toggle}>Open modal</Button>
            <ContentModal
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
                <Text variant="body-md">
                    Hey, I'm a model. Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a
                    model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey,
                    I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a
                    model.Hey, I'm a model.Hey, I'm a model.
                </Text>
            </ContentModal>
        </Flex>
    );
};

export const Info: React.FC = () => {
    const { isShown, toggle } = useToggle();

    return (
        <Flex height="50%">
            <Button onClick={toggle}>Open modal</Button>
            <InfoModal
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
                <Text variant="body-md">
                    Hey, I'm a model. Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a
                    model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey,
                    I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a model.Hey, I'm a
                    model.Hey, I'm a model.Hey, I'm a model.
                </Text>
            </InfoModal>
        </Flex>
    );
};
