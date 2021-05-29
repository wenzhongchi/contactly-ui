import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const PauseCircle = forwardRef<
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
            <circle cx={12} cy={12} r={10} />
            <line x1={10} y1={15} x2={10} y2={9} />
            <line x1={14} y1={15} x2={14} y2={9} />
        </React.Fragment>
    </BaseSvg>
));

PauseCircle.displayName = "IconPauseCircle";

export default PauseCircle;
