import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Smartphone = forwardRef<
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
            <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
            <line x1={12} y1={18} x2={12.01} y2={18} />
        </React.Fragment>
    </BaseSvg>
));

Smartphone.displayName = "IconSmartphone";

export default Smartphone;
