import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Terminal = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <polyline points="4 17 10 11 4 5" />
                <line x1={12} y1={19} x2={20} y2={19} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Terminal.displayName = "IconTerminal";

export default Terminal;
