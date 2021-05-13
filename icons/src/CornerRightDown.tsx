import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const CornerRightDown = forwardRef<
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
            <polyline points="10 15 15 20 20 15" />
            <path d="M4 4h7a4 4 0 0 1 4 4v12" />
        </React.Fragment>
    </BaseSvg>
));

CornerRightDown.displayName = "IconCornerRightDown";

export default CornerRightDown;
