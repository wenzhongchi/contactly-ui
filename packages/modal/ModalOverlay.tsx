import React, { forwardRef } from "react";
import { StyledComponentProps } from "styled-components";

import { Box, BoxProps } from "@components/Box/Box";
import { AnyObject } from "@type/types";
import zIndices from "@theme/zIndices";

type StyledModalOverlayProps = BoxProps & {
    hide: () => void;
};

export type ModalOverlayProps = StyledComponentProps<
    "div",
    AnyObject,
    StyledModalOverlayProps,
    never
>;

export const ModalOverlay: React.FC<ModalOverlayProps> = forwardRef<
    HTMLDivElement,
    ModalOverlayProps
>(({ hide, ...props }, ref) => (
    <Box
        ref={ref}
        position="fixed"
        left={0}
        top={0}
        width="100vw"
        height="100vh"
        backgroundColor="bg.overlay"
        zIndex={zIndices.overlay}
        onClick={hide}
        {...props}
    />
));
