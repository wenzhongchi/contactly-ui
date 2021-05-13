import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const ArrowUp = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <line x1={12} y1={19} x2={12} y2={5} />
                <polyline points="5 12 12 5 19 12" />
            </React.Fragment>
        </BaseSvg>
    ),
);

ArrowUp.displayName = "IconArrowUp";

export default ArrowUp;
