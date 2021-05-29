import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const ArrowLeftCircle = forwardRef<
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
            <circle cx={12} cy={12} r={10} />
            <polyline points="12 8 8 12 12 16" />
            <line x1={16} y1={12} x2={8} y2={12} />
        </React.Fragment>
    </BaseSvg>
));

ArrowLeftCircle.displayName = "IconArrowLeftCircle";

export default ArrowLeftCircle;
