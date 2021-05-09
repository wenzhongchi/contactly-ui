import styled, { StyledComponentProps } from "styled-components";
import { FlexboxProps } from "styled-system";

import { Box, BoxProps } from "@components/Box";
import { AnyObject } from "@type/types";

type StyledFlexProps = BoxProps & FlexboxProps;

export type FlexProps = StyledComponentProps<"div", AnyObject, StyledFlexProps, never>;

export const Flex = styled(Box)<FlexProps>({
    display: "flex",
});
