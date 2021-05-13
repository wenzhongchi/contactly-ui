import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Speaker = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <circle cx={12} cy={14} r={4} />
                <line x1={12} y1={6} x2={12.01} y2={6} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Speaker.displayName = "IconSpeaker";

export default Speaker;
