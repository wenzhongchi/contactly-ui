import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { ResponsiveValue, variant } from "styled-system";
import { motion } from "framer-motion";

import { Box, BoxProps } from "@components/Box/Box";
import { AnyObject } from "@type/types";
import zIndices from "@theme/zIndices";
import { Flex } from "@components/Flex/Flex";

type DrawerVariant = "small" | "medium" | "large" | "full";

type StyledDrawerContentProps = BoxProps & {
    isOpen?: boolean;
    topOffset?: number;
    variant?: ResponsiveValue<DrawerVariant>;
};

export type DrawerContentProps = StyledComponentProps<
    "div",
    AnyObject,
    StyledDrawerContentProps,
    never
>;

const StyledBox = styled(Box)(
    variant({
        variants: {
            small: {
                height: "100vh",
                width: "200px",
                m: 0,
            },
            medium: {
                height: "100vh",
                width: "512px",
                m: 0,
            },
            large: {
                height: "100vh",
                width: "712px",
                m: 0,
            },
            full: {
                height: "100vh",
                width: "100vw",
                m: 0,
            },
        },
    }),
);

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
    ({ children, isOpen, topOffset, ...props }, ref) => (
        <Flex position="fixed" left={0} top={0} backgroundColor="bg.primary">
            <motion.div
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={{
                    hidden: {
                        opacity: 0,
                        x: "-100%",
                        y: 0,
                        position: "fixed",
                        width: "100%",
                        transition: {
                            delay: 0.1,
                            bounce: 0,
                        },
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        position: "fixed",
                        width: "100%",
                        transition: {
                            delay: 0.1,
                            bounce: 0,
                        },
                    },
                }}
            >
                <StyledBox
                    ref={ref}
                    display="flex"
                    position="fixed"
                    flexDirection="column"
                    justifyContent="space-between"
                    left={0}
                    top={topOffset}
                    zIndex={zIndices.drawer}
                    backgroundColor="bg.primary"
                    boxShadow="medium"
                    {...props}
                >
                    {children}
                </StyledBox>
            </motion.div>
        </Flex>
    ),
);

DrawerContent.defaultProps = {
    variant: "full",
    topOffset: 0,
};
