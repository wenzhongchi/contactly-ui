import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Minus = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
    ({ size, ...restProps }, ref) => (
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
            <line x1={5} y1={12} x2={19} y2={12} />
        </BaseSvg>
    ),
);

Minus.displayName = "IconMinus";

export default Minus;
