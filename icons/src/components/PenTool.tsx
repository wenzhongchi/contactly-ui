import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const PenTool = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx={11} cy={11} r={2} />
            </React.Fragment>
        </BaseSvg>
    ),
);

PenTool.displayName = "IconPenTool";

export default PenTool;
