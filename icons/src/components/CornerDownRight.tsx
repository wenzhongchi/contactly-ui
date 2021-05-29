import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const CornerDownRight = forwardRef<
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
            <polyline points="15 10 20 15 15 20" />
            <path d="M4 4v7a4 4 0 0 0 4 4h12" />
        </React.Fragment>
    </BaseSvg>
));

CornerDownRight.displayName = "IconCornerDownRight";

export default CornerDownRight;
