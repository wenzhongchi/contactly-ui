import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Italic = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <line x1={19} y1={4} x2={10} y2={4} />
                <line x1={14} y1={20} x2={5} y2={20} />
                <line x1={15} y1={4} x2={9} y2={20} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Italic.displayName = "IconItalic";

export default Italic;
