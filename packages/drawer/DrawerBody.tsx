import React, { forwardRef } from "react";
import { StyledComponentProps } from "styled-components";

import { Box, BoxProps } from "@components/Box/Box";
import { AnyObject } from "@type/types";

export type DrawerBodyProps = StyledComponentProps<"div", AnyObject, BoxProps, never>;

export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
    ({ children, ...props }, ref) => (
        <Box
            ref={ref}
            position="relative"
            display="flex"
            flexDirection="column"
            my={16}
            mx={24}
            {...props}
        >
            {children}
        </Box>
    ),
);
