import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const ArrowUpCircle = forwardRef<
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
            <polyline points="16 12 12 8 8 12" />
            <line x1={12} y1={16} x2={12} y2={8} />
        </React.Fragment>
    </BaseSvg>
));

ArrowUpCircle.displayName = "IconArrowUpCircle";

export default ArrowUpCircle;
