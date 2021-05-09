import React from "react";

import { Drawer } from "./Drawer";
import { DrawerContent } from "./DrawerContent";
import { DrawerBody } from "./DrawerBody";

export interface HeaderDrawerProps {
    isShown: boolean;
    isOpen: boolean;
    children: React.ReactNode;
    topOffset?: number;
}

export const HeaderDrawer: React.FC<HeaderDrawerProps> = ({
    isShown,
    isOpen,
    children,
    topOffset,
}) => (
    <Drawer isShown={isShown}>
        <DrawerContent isOpen={isOpen} variant="full" topOffset={topOffset}>
            <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
    </Drawer>
);
