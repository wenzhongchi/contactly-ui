import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Sunset = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <path d="M17 18a5 5 0 0 0-10 0" />
                <line x1={12} y1={9} x2={12} y2={2} />
                <line x1={4.22} y1={10.22} x2={5.64} y2={11.64} />
                <line x1={1} y1={18} x2={3} y2={18} />
                <line x1={21} y1={18} x2={23} y2={18} />
                <line x1={18.36} y1={11.64} x2={19.78} y2={10.22} />
                <line x1={23} y1={22} x2={1} y2={22} />
                <polyline points="16 5 12 9 8 5" />
            </React.Fragment>
        </BaseSvg>
    ),
);

Sunset.displayName = "IconSunset";

export default Sunset;
