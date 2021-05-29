import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Tv = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
                <polyline points="17 2 12 7 7 2" />
            </React.Fragment>
        </BaseSvg>
    ),
);

Tv.displayName = "IconTv";

export default Tv;
