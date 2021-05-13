import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Music = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <path d="M9 18V5l12-2v13" />
                <circle cx={6} cy={18} r={3} />
                <circle cx={18} cy={16} r={3} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Music.displayName = "IconMusic";

export default Music;
