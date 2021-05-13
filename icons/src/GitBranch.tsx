import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const GitBranch = forwardRef<
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
            <line x1={6} y1={3} x2={6} y2={15} />
            <circle cx={18} cy={6} r={3} />
            <circle cx={6} cy={18} r={3} />
            <path d="M18 9a9 9 0 0 1-9 9" />
        </React.Fragment>
    </BaseSvg>
));

GitBranch.displayName = "IconGitBranch";

export default GitBranch;
