import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const CornerRightUp = forwardRef<
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
            <polyline points="10 9 15 4 20 9" />
            <path d="M4 20h7a4 4 0 0 0 4-4V4" />
        </React.Fragment>
    </BaseSvg>
));

CornerRightUp.displayName = "IconCornerRightUp";

export default CornerRightUp;
