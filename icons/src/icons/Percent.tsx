import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Percent = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <line x1={19} y1={5} x2={5} y2={19} />
                <circle cx={6.5} cy={6.5} r={2.5} />
                <circle cx={17.5} cy={17.5} r={2.5} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Percent.displayName = "IconPercent";

export default Percent;
