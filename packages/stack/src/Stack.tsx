import React, { Children, forwardRef, isValidElement } from "react";
import { StyledComponentProps } from "styled-components";

import { AnyObject } from "@contactly-ui/system";
import { Box, BoxProps } from "@contactly-ui/box";

type StyledStackProps = BoxProps & {
    as?: React.ElementType | string;
    direction?: "column" | "row";
    spacing?: string;
};

export type StackProps = StyledComponentProps<"div", AnyObject, StyledStackProps, never>;

export const Stack: React.FC<StackProps> = forwardRef(
    ({ as = "div", children, direction = "column", spacing = "0px", ...restProps }, ref) => {
        const validChildrenArray = Children.toArray(children).filter(isValidElement);

        const marginType = direction === "column" ? "mb" : "mr";

        return (
            <Box display="flex" flexDirection={direction} ref={ref} {...restProps}>
                {validChildrenArray.map((child, index) => {
                    const isLastChild = validChildrenArray.length === index + 1;

                    const childProps = {
                        as: as === "ol" || as === "ul" ? "li" : "div",
                        key: `stack-item-${index}`,
                        [marginType]: isLastChild ? null : spacing,
                    };

                    // eslint-disable-next-line
                    return <Box {...childProps}>{child}</Box>;
                })}
            </Box>
        );
    },
);
