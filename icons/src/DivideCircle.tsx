import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const DivideCircle = forwardRef<
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
            <line x1={8} y1={12} x2={16} y2={12} />
            <line x1={12} y1={16} x2={12} y2={16} />
            <line x1={12} y1={8} x2={12} y2={8} />
            <circle cx={12} cy={12} r={10} />
        </React.Fragment>
    </BaseSvg>
));

DivideCircle.displayName = "IconDivideCircle";

export default DivideCircle;