import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Crosshair = forwardRef<
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
            <line x1={22} y1={12} x2={18} y2={12} />
            <line x1={6} y1={12} x2={2} y2={12} />
            <line x1={12} y1={6} x2={12} y2={2} />
            <line x1={12} y1={22} x2={12} y2={18} />
        </React.Fragment>
    </BaseSvg>
));

Crosshair.displayName = "IconCrosshair";

export default Crosshair;
