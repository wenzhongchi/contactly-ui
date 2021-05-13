import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Image = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                <circle cx={8.5} cy={8.5} r={1.5} />
                <polyline points="21 15 16 10 5 21" />
            </React.Fragment>
        </BaseSvg>
    ),
);

Image.displayName = "IconImage";

export default Image;
