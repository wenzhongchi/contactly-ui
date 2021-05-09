import React from "react";

import { Text } from "@components/Text/Text";
import { Button } from "@components/Button/Button";
import IconVolume2 from "@icon/Volume2";

import { ModalOverlay } from "./ModalOverlay";
import { ModalHeader } from "./ModalHeader";
import { Modal } from "./Modal";
import { ModalContent } from "./ModalContent";
import { ModalFooter } from "./ModalFooter";
import { ModalBody } from "./ModalBody";

export interface InfoModalProps {
    heading: string;
    leftButtonLabel: string;
    rightButtonLabel: string;
    isShown: boolean;
    children: React.ReactNode;
    hide: () => void;
    onLeftButtonClick: () => void;
    onRightButtonClick: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
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
            <IconVolume2 mt={8} mx={8} px={16} py={12} />
            <ModalHeader backgroundColor="bg.transparent">
                <Text variant="h5">{heading}</Text>
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
                    flexGrow={{ _: 1, md: 0 }}
                    variant="default"
                    size="md"
                    onClick={onRightButtonClick}
                >
                    {rightButtonLabel}
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);
