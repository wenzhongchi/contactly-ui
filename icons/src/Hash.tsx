import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Hash = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <line x1={4} y1={9} x2={20} y2={9} />
                <line x1={4} y1={15} x2={20} y2={15} />
                <line x1={10} y1={3} x2={8} y2={21} />
                <line x1={16} y1={3} x2={14} y2={21} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Hash.displayName = "IconHash";

export default Hash;
