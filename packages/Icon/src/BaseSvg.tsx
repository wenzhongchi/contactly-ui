import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import {
    compose,
    position,
    space,
    color,
    layout,
    typography,
    flexbox,
    PositionProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
} from "styled-system";

import { uuid } from "@utils/uuid";
import { renderElement, RenderElementProp } from "@utils/renderElement";
import { useColor } from "@hooks/useColor";

const Svg = styled.svg(
    {
        alignItems: "center",
        justifyContent: "center",
    },
    compose(position, space, color, layout, typography, flexbox),
);

export type SvgProps = PositionProps &
    SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps & {
        title?: string;
    };

export type SvgSizeProps = { size?: 12 | 16 | 24 | 32 | 48 | 64 };

export type BaseSvgProps = SvgProps &
    SvgSizeProps & {
        children: RenderElementProp<SvgProps>;
    };

type BaseSvgForwardedProps = Omit<React.SVGProps<SVGSVGElement>, "children"> & BaseSvgProps;

const currentColorOrInitialProp = (
    props: React.SVGAttributes<SVGSVGElement>,
    prop: "fill" | "stroke",
    color: string,
) => (props[prop] === "currentColor" ? color : props[prop]);

export const BaseSvg = forwardRef<SVGSVGElement, BaseSvgForwardedProps>(
    ({ title, size = 16, children, ...props }, ref) => {
        const [titleId] = useState(() => (title ? uuid() : undefined));
        const color = useColor(props.color || "text.primary");

        return (
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox={`0 0 24 24`}
                aria-labelledby={titleId}
                {...props}
                fill={currentColorOrInitialProp(props, "fill", color)}
                stroke={currentColorOrInitialProp(props, "stroke", color)}
                ref={ref}
            >
                {title && <title id={titleId}>{title}</title>}
                {renderElement(children, { color, ...props })}
            </Svg>
        );
    },
);
