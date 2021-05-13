import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const ArrowDownRight = forwardRef<
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
            <line x1={7} y1={7} x2={17} y2={17} />
            <polyline points="17 7 17 17 7 17" />
        </React.Fragment>
    </BaseSvg>
));

ArrowDownRight.displayName = "IconArrowDownRight";

export default ArrowDownRight;
