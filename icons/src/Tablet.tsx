import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Tablet = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
                <line x1={12} y1={18} x2={12.01} y2={18} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Tablet.displayName = "IconTablet";

export default Tablet;
