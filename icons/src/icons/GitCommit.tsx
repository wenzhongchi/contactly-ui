import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const GitCommit = forwardRef<
    SVGSVGElement,
    React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps
>(({ size, ...restProps }, ref) => (
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
            <circle cx={12} cy={12} r={4} />
            <line x1={1.05} y1={12} x2={7} y2={12} />
            <line x1={17.01} y1={12} x2={22.96} y2={12} />
        </React.Fragment>
    </BaseSvg>
));

GitCommit.displayName = "IconGitCommit";

export default GitCommit;
