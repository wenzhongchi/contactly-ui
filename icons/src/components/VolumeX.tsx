import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const VolumeX = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1={23} y1={9} x2={17} y2={15} />
                <line x1={17} y1={9} x2={23} y2={15} />
            </React.Fragment>
        </BaseSvg>
    ),
);

VolumeX.displayName = "IconVolumeX";

export default VolumeX;
