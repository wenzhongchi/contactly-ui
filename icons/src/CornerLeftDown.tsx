import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const CornerLeftDown = forwardRef<
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
            <polyline points="14 15 9 20 4 15" />
            <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
        </React.Fragment>
    </BaseSvg>
));

CornerLeftDown.displayName = "IconCornerLeftDown";

export default CornerLeftDown;
