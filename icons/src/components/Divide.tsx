import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Divide = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
            <React.Fragment>
                <circle cx={12} cy={6} r={2} />
                <line x1={5} y1={12} x2={19} y2={12} />
                <circle cx={12} cy={18} r={2} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Divide.displayName = "IconDivide";

export default Divide;
