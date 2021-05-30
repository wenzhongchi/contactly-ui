import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const CornerLeftUp = forwardRef<
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
            <polyline points="14 9 9 4 4 9" />
            <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
        </React.Fragment>
    </BaseSvg>
));

CornerLeftUp.displayName = "IconCornerLeftUp";

export default CornerLeftUp;
