import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const GitPullRequest = forwardRef<
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
            <circle cx={18} cy={18} r={3} />
            <circle cx={6} cy={6} r={3} />
            <path d="M13 6h3a2 2 0 0 1 2 2v7" />
            <line x1={6} y1={9} x2={6} y2={21} />
        </React.Fragment>
    </BaseSvg>
));

GitPullRequest.displayName = "IconGitPullRequest";

export default GitPullRequest;
