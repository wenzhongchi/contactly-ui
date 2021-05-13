import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const PlayCircle = forwardRef<
    SVGSVGElement,
    React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps
>(({ size, ...restProps }, ref) => (
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
            <circle cx={12} cy={12} r={10} />
            <polygon points="10 8 16 12 10 16 10 8" />
        </React.Fragment>
    </BaseSvg>
));

PlayCircle.displayName = "IconPlayCircle";

export default PlayCircle;
