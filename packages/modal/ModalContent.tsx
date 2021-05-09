import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { ResponsiveValue, variant } from "styled-system";

import { Box, BoxProps } from "@components/Box/Box";
import { AnyObject } from "@type/types";
import zIndices from "@theme/zIndices";

type ModalVariant = "top" | "center" | "bottom";

type StyledModalContentProps = BoxProps & {
    variant?: ResponsiveValue<ModalVariant>;
};

export type ModalContentProps = StyledComponentProps<
    "div",
    AnyObject,
    StyledModalContentProps,
    never
>;

const StyledBox = styled(Box)(
    variant({
        variants: {
            top: {
                top: "20%",
                bottom: "unset",
                left: "50%",
                width: "512px",
                transform: "translate(-50%,-20%)",
                m: 0,
            },
            center: {
                top: "50%",
                bottom: "unset",
                left: "50%",
                width: "512px",
                transform: "translate(-50%,-50%)",
                m: 0,
            },
            bottom: {
                bottom: 0,
                width: "100%",
                left: "0%",
                m: 0,
            },
        },
    }),
);

export const ModalContent: React.FC<ModalContentProps> = forwardRef<
    HTMLDivElement,
    ModalContentProps
>(({ children, ...props }, ref) => (
    <StyledBox
        ref={ref}
        display="flex"
        position="fixed"
        flexDirection="column"
        borderRadius={4}
        my={16}
        mx={24}
        zIndex={zIndices.modal}
        backgroundColor="modal.bg"
        boxShadow="medium"
        {...props}
    >
        {children}
    </StyledBox>
));

ModalContent.defaultProps = {
    variant: "center",
};
