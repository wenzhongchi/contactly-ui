import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Type = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <polyline points="4 7 4 4 20 4 20 7" />
                <line x1={9} y1={20} x2={15} y2={20} />
                <line x1={12} y1={4} x2={12} y2={20} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Type.displayName = "IconType";

export default Type;
