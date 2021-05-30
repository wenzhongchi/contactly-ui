import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Battery = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <rect x={1} y={6} width={18} height={12} rx={2} ry={2} />
                <line x1={23} y1={13} x2={23} y2={11} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Battery.displayName = "IconBattery";

export default Battery;
