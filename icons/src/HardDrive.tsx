import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const HardDrive = forwardRef<
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
            <line x1={22} y1={12} x2={2} y2={12} />
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            <line x1={6} y1={16} x2={6.01} y2={16} />
            <line x1={10} y1={16} x2={10.01} y2={16} />
        </React.Fragment>
    </BaseSvg>
));

HardDrive.displayName = "IconHardDrive";

export default HardDrive;
