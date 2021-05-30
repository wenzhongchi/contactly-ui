import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Monitor = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
                <line x1={8} y1={21} x2={16} y2={21} />
                <line x1={12} y1={17} x2={12} y2={21} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Monitor.displayName = "IconMonitor";

export default Monitor;
