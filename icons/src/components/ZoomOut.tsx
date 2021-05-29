import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const ZoomOut = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2={16.65} y2={16.65} />
                <line x1={8} y1={11} x2={14} y2={11} />
            </React.Fragment>
        </BaseSvg>
    ),
);

ZoomOut.displayName = "IconZoomOut";

export default ZoomOut;
