import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Chrome = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <line x1={21.17} y1={8} x2={12} y2={8} />
                <line x1={3.95} y1={6.06} x2={8.54} y2={14} />
                <line x1={10.88} y1={21.94} x2={15.46} y2={14} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Chrome.displayName = "IconChrome";

export default Chrome;
