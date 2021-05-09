import React, { forwardRef } from "react";
import { StyledComponentProps } from "styled-components";

import { Box, BoxProps } from "@components/Box/Box";
import { AnyObject } from "@type/types";

export type ModalFooterProps = StyledComponentProps<"div", AnyObject, BoxProps, never>;

export const ModalFooter: React.FC<ModalFooterProps> = forwardRef<HTMLDivElement, ModalFooterProps>(
    ({ children, ...props }, ref) => (
        <Box
            ref={ref}
            position="relative"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="modal.header"
            mb={8}
            mx={8}
            borderRadius={4}
            padding={16}
            {...props}
        >
            {children}
        </Box>
    ),
);
