import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const SkipBack = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <polygon points="19 20 9 12 19 4 19 20" />
                <line x1={5} y1={19} x2={5} y2={5} />
            </React.Fragment>
        </BaseSvg>
    ),
);

SkipBack.displayName = "IconSkipBack";

export default SkipBack;
