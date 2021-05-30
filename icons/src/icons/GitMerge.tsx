import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const GitMerge = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <circle cx={18} cy={18} r={3} />
                <circle cx={6} cy={6} r={3} />
                <path d="M6 21V9a9 9 0 0 0 9 9" />
            </React.Fragment>
        </BaseSvg>
    ),
);

GitMerge.displayName = "IconGitMerge";

export default GitMerge;
