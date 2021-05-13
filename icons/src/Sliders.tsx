import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Sliders = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <line x1={4} y1={21} x2={4} y2={14} />
                <line x1={4} y1={10} x2={4} y2={3} />
                <line x1={12} y1={21} x2={12} y2={12} />
                <line x1={12} y1={8} x2={12} y2={3} />
                <line x1={20} y1={21} x2={20} y2={16} />
                <line x1={20} y1={12} x2={20} y2={3} />
                <line x1={1} y1={14} x2={7} y2={14} />
                <line x1={9} y1={8} x2={15} y2={8} />
                <line x1={17} y1={16} x2={23} y2={16} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Sliders.displayName = "IconSliders";

export default Sliders;
