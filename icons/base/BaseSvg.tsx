import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { composedSystem, StyledSystemProps } from "@contactly-ui/system";
import { useColor } from "@hooks/useColor";

const Svg = styled.svg(
    {
        alignItems: "center",
        justifyContent: "center",
    },
    composedSystem,
);

export type SvgProps = StyledSystemProps & {
    title?: string;
};

export type SvgSizeProps = { size?: 12 | 16 | 24 | 32 | 48 | 64 };

export type BaseSvgProps = SvgProps &
    SvgSizeProps & {
        children: React.ReactElement;
    };

type BaseSvgForwardedProps = Omit<React.SVGProps<SVGSVGElement>, "children"> & BaseSvgProps;

const getColorProp = (
    props: React.SVGAttributes<SVGSVGElement>,
    prop: "fill" | "stroke",
    color?: string,
) => (props[prop] === "currentColor" ? color : props[prop]);

export const BaseSvg = forwardRef<SVGSVGElement, BaseSvgForwardedProps>(
    ({ title, size = 16, children, color, ...restProps }, ref) => {
        const [titleId] = useState(() => (title ? uuid() : undefined));
        const selectedColor = useColor(color || "text.primary");

        return (
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox={`0 0 24 24`}
                aria-labelledby={titleId}
                {...restProps}
                fill={getColorProp(restProps, "fill", color)}
                stroke={getColorProp(restProps, "stroke", color)}
                ref={ref}
            >
                {title && <title id={titleId}>{title}</title>}
                {React.cloneElement(children, { selectedColor, ...restProps })}
            </Svg>
        );
    },
);
