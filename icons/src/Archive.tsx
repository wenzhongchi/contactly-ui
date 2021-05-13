import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Archive = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <polyline points="21 8 21 21 3 21 3 8" />
                <rect x={1} y={3} width={22} height={5} />
                <line x1={10} y1={12} x2={14} y2={12} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Archive.displayName = "IconArchive";

export default Archive;
