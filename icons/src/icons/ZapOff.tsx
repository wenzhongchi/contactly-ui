import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const ZapOff = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <polyline points="12.41 6.75 13 2 10.57 4.92" />
                <polyline points="18.57 12.91 21 10 15.66 10" />
                <polyline points="8 8 3 14 12 14 11 22 16 16" />
                <line x1={1} y1={1} x2={23} y2={23} />
            </React.Fragment>
        </BaseSvg>
    ),
);

ZapOff.displayName = "IconZapOff";

export default ZapOff;
