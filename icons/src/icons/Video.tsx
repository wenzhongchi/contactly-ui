import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Video = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x={1} y={5} width={15} height={14} rx={2} ry={2} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Video.displayName = "IconVideo";

export default Video;
