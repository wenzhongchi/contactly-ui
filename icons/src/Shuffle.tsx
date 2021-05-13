import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Shuffle = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <polyline points="16 3 21 3 21 8" />
                <line x1={4} y1={20} x2={21} y2={3} />
                <polyline points="21 16 21 21 16 21" />
                <line x1={15} y1={15} x2={21} y2={21} />
                <line x1={4} y1={4} x2={9} y2={9} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Shuffle.displayName = "IconShuffle";

export default Shuffle;
