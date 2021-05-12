import React from "react";

import { Portal } from "@components/Portal/Portal";

export interface ModalProps {
    isShown: boolean;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isShown, children }) => {
    const modal = <React.Fragment>{children}</React.Fragment>;
    return isShown ? <Portal id="modal">{modal}</Portal> : null;
};
