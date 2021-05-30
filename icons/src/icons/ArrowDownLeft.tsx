import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const ArrowDownLeft = forwardRef<
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
            <line x1={17} y1={7} x2={7} y2={17} />
            <polyline points="17 17 7 17 7 7" />
        </React.Fragment>
    </BaseSvg>
));

ArrowDownLeft.displayName = "IconArrowDownLeft";

export default ArrowDownLeft;
