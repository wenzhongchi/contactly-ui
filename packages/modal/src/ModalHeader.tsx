import React, { forwardRef } from "react";
import { StyledComponentProps } from "styled-components";

import { Box, BoxProps } from "@components/Box/Box";
import { AnyObject } from "@type/types";

export type ModalHeaderProps = StyledComponentProps<"div", AnyObject, BoxProps, never>;

export const ModalHeader: React.FC<ModalHeaderProps> = forwardRef<HTMLDivElement, ModalHeaderProps>(
    ({ children, ...props }, ref) => (
        <Box
            ref={ref}
            position="relative"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="modal.header"
            mt={8}
            mx={8}
            px={16}
            py={12}
            borderRadius={4}
            {...props}
        >
            {children}
        </Box>
    ),
);
