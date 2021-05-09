import styled, { StyledComponentProps } from "styled-components";
import { FlexboxProps } from "styled-system";

import { AnyObject } from "@contactly-ui/system";
import { Box, BoxProps } from "@contactly-ui/box";

type StyledFlexProps = BoxProps & FlexboxProps;

export type FlexProps = StyledComponentProps<"div", AnyObject, StyledFlexProps, never>;

export const Flex = styled(Box)<FlexProps>({
    display: "flex",
});
