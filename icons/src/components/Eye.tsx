import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Eye = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx={12} cy={12} r={3} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Eye.displayName = "IconEye";

export default Eye;
