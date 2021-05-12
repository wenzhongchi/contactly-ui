import React from "react";

import { Text } from "@components/Text/Text";
import { Button } from "@components/Button/Button";
import IconClose from "@icon/Close";

import { ModalOverlay } from "./ModalOverlay";
import { ModalHeader } from "./ModalHeader";
import { Modal } from "./Modal";
import { ModalContent } from "./ModalContent";
import { ModalFooter } from "./ModalFooter";
import { ModalBody } from "./ModalBody";

export interface ContentModalProps {
    heading: string;
    leftButtonLabel: string;
    rightButtonLabel: string;
    isShown: boolean;
    children: React.ReactNode;
    hide: () => void;
    onLeftButtonClick: () => void;
    onRightButtonClick: () => void;
}

export const ContentModal: React.FC<ContentModalProps> = ({
    heading,
    leftButtonLabel,
    rightButtonLabel,
    isShown,
    children,
    hide,
    onLeftButtonClick,
    onRightButtonClick,
}) => (
    <Modal isShown={isShown}>
        <ModalOverlay hide={hide} />
        <ModalContent variant={{ _: "bottom", md: "center" }}>
            <ModalHeader>
                <Text variant="h5">{heading}</Text>
                <Button variant="transparent" size="md" leftIcon={<IconClose />} onClick={hide} />
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter backgroundColor={{ _: "bg.transparent", md: "modal.header" }}>
                <Button
                    variant="default"
                    size="md"
                    onClick={onLeftButtonClick}
                    display={{ _: "none", md: "flex" }}
                >
                    {leftButtonLabel}
                </Button>
                <Button
                    variant="default"
                    size="md"
                    onClick={onRightButtonClick}
                    flexGrow={{ _: 1, md: 0 }}
                >
                    {rightButtonLabel}
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);
