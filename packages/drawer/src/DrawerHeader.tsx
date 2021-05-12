import React, { forwardRef } from "react";
import { StyledComponentProps } from "styled-components";

import { Box, BoxProps } from "@components/Box/Box";
import { AnyObject } from "@type/types";

export type DrawerHeaderProps = StyledComponentProps<"div", AnyObject, BoxProps, never>;

export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
    ({ children, ...props }, ref) => (
        <Box
            ref={ref}
            position="relative"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="bg.tertiary"
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
