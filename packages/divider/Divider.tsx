import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
    compose,
    space,
    variant,
    color,
    layout,
    border,
    position,
    SpaceProps,
    ColorProps,
    LayoutProps,
    BorderProps,
    PositionProps,
} from "styled-system";

import { AnyObject } from "@type/types";
import { useColor } from "@hooks/useColor";

type StyledDividerProps = SpaceProps &
    ColorProps &
    LayoutProps &
    BorderProps &
    PositionProps & {
        variant?: "horizontal" | "vertical";
        colorType?: "solid" | "light";
    };

const dividerVariants = variant({
    variants: {
        horizontal: {
            borderBottom: 1,
            display: "block",
            width: "100%",
        },
        vertical: {
            borderLeft: 1,
            height: "100%",
            width: 1,
        },
    },
});

export type DividerProps = StyledComponentProps<"div", AnyObject, StyledDividerProps, never>;

const StyledDivider = styled.div<DividerProps>`
    ${dividerVariants}
    ${compose(space, color, layout, border, position)}
`;

export const Divider: React.FC<DividerProps> = forwardRef<HTMLDivElement, DividerProps>(
    ({ variant, colorType, ...props }, ref) => {
        const solidColor = useColor("border.secondary");
        const lightColor = useColor("border.light");

        const getBorderColor = () => {
            if (colorType === "solid") {
                return solidColor;
            } else {
                return lightColor;
            }
        };

        return (
            <StyledDivider
                ref={ref}
                variant={variant}
                {...props}
                borderLeftColor={variant === "vertical" ? getBorderColor() : undefined}
                borderBottomColor={variant === "horizontal" ? getBorderColor() : undefined}
            />
        );
    },
);

Divider.defaultProps = {
    variant: "horizontal",
    colorType: "solid",
};
