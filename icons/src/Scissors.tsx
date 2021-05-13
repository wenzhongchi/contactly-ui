import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Scissors = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <circle cx={6} cy={6} r={3} />
                <circle cx={6} cy={18} r={3} />
                <line x1={20} y1={4} x2={8.12} y2={15.88} />
                <line x1={14.47} y1={14.48} x2={20} y2={20} />
                <line x1={8.12} y1={8.12} x2={12} y2={12} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Scissors.displayName = "IconScissors";

export default Scissors;
