import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const LifeBuoy = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <circle cx={12} cy={12} r={10} />
                <circle cx={12} cy={12} r={4} />
                <line x1={4.93} y1={4.93} x2={9.17} y2={9.17} />
                <line x1={14.83} y1={14.83} x2={19.07} y2={19.07} />
                <line x1={14.83} y1={9.17} x2={19.07} y2={4.93} />
                <line x1={14.83} y1={9.17} x2={18.36} y2={5.64} />
                <line x1={4.93} y1={19.07} x2={9.17} y2={14.83} />
            </React.Fragment>
        </BaseSvg>
    ),
);

LifeBuoy.displayName = "IconLifeBuoy";

export default LifeBuoy;
