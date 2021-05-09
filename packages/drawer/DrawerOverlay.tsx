import React, { forwardRef } from "react";
import { StyledComponentProps } from "styled-components";

import { Box, BoxProps } from "@components/Box/Box";
import { AnyObject } from "@type/types";
import zIndices from "@theme/zIndices";

type StyledDrawerOverlayProps = BoxProps & {
    hide: () => void;
};

export type DrawerOverlayProps = StyledComponentProps<
    "div",
    AnyObject,
    StyledDrawerOverlayProps,
    never
>;

export const DrawerOverlay = forwardRef<HTMLDivElement, DrawerOverlayProps>(
    ({ hide, ...props }, ref) => (
        <Box
            ref={ref}
            position="fixed"
            left={0}
            top={0}
            width="100vw"
            height="100vh"
            backgroundColor="bg.overlay"
            zIndex={zIndices.base}
            onClick={hide}
            {...props}
        />
    ),
);
