import React from "react";

import { Flex } from "@components/Flex";
import { Button } from "@components/Button";
import { useToast } from "@hooks/useToast";
import IconVolume2 from "@icon/Volume2";

import { Toast } from "./Toast";

export default {
    title: "Components/Toasts",
    component: Toast,
};

const title = "Toast Title ";
const message =
    "You can currently trade up to 9246 EUR worth of bitcoin. Please verify your address to increase your trading limit.If you do not wish to verify, you have the option to be placed in Banned status and withdraw your funds.";

export const Basic: React.FC = () => {
    const { showToast } = useToast();

    return (
        <Flex flexGrow={1}>
            {/* eslint-disable-next-line */}
            <Button onClick={() => showToast("toast-1")}>Show Toast 1</Button>
            {/* eslint-disable-next-line */}
            <Button ml={10} onClick={() => showToast("toast-2")}>
                Show Toast 2
            </Button>
            <Toast
                width="500px"
                id="toast-1"
                title={title + 1}
                message={message}
                duration={15000}
                submitText="Submit"
                cancelText="Cancel"
                icon={<IconVolume2 />}
                autoClose
            />
            <Toast
                variant="error"
                width="300px"
                id="toast-2"
                title={title + 2}
                message={message}
                duration={15000}
                submitText="Submit"
                cancelText="Cancel"
                icon={<IconVolume2 />}
                autoClose
            />
        </Flex>
    );
};
