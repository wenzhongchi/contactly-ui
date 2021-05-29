import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Anchor = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <circle cx={12} cy={5} r={3} />
                <line x1={12} y1={22} x2={12} y2={8} />
                <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
            </React.Fragment>
        </BaseSvg>
    ),
);

Anchor.displayName = "IconAnchor";

export default Anchor;
