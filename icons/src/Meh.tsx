import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Meh = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <line x1={8} y1={15} x2={16} y2={15} />
                <line x1={9} y1={9} x2={9.01} y2={9} />
                <line x1={15} y1={9} x2={15.01} y2={9} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Meh.displayName = "IconMeh";

export default Meh;
