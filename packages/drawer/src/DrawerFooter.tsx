import React, { forwardRef } from "react";
import { StyledComponentProps } from "styled-components";

import { Box, BoxProps } from "@components/Box/Box";
import { AnyObject } from "@type/types";

export type DrawerFooterProps = StyledComponentProps<"div", AnyObject, BoxProps, never>;

export const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
    ({ children, ...props }, ref) => (
        <Box
            ref={ref}
            position="relative"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="bg.tertiary"
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
