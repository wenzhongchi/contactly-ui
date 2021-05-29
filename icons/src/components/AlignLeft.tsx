import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const AlignLeft = forwardRef<
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
            <line x1={17} y1={10} x2={3} y2={10} />
            <line x1={21} y1={6} x2={3} y2={6} />
            <line x1={21} y1={14} x2={3} y2={14} />
            <line x1={17} y1={18} x2={3} y2={18} />
        </React.Fragment>
    </BaseSvg>
));

AlignLeft.displayName = "IconAlignLeft";

export default AlignLeft;
