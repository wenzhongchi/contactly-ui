import React from "react";

import { Portal } from "@components/Portal/Portal";

export interface DrawerProps {
    isShown: boolean;
    children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ isShown, children }) => {
    const drawer = <React.Fragment>{children}</React.Fragment>;
    return isShown ? <Portal id="drawer">{drawer}</Portal> : null;
};
