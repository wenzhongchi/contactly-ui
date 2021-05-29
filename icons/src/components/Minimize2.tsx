import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Minimize2 = forwardRef<
    SVGSVGElement,
    React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps
>(({ size, ...restProps }, ref) => (
    <BaseSvg
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...restProps}
        size={size}
        ref={ref}
    >
        <React.Fragment>
            <polyline points="4 14 10 14 10 20" />
            <polyline points="20 10 14 10 14 4" />
            <line x1={14} y1={10} x2={21} y2={3} />
            <line x1={3} y1={21} x2={10} y2={14} />
        </React.Fragment>
    </BaseSvg>
));

Minimize2.displayName = "IconMinimize2";

export default Minimize2;
