import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const BarChart2 = forwardRef<
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
            <line x1={18} y1={20} x2={18} y2={10} />
            <line x1={12} y1={20} x2={12} y2={4} />
            <line x1={6} y1={20} x2={6} y2={14} />
        </React.Fragment>
    </BaseSvg>
));

BarChart2.displayName = "IconBarChart2";

export default BarChart2;
