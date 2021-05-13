import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const MinusCircle = forwardRef<
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
            <line x1={8} y1={12} x2={16} y2={12} />
        </React.Fragment>
    </BaseSvg>
));

MinusCircle.displayName = "IconMinusCircle";

export default MinusCircle;
