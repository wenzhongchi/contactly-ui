import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const ToggleLeft = forwardRef<
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
            <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
            <circle cx={8} cy={12} r={3} />
        </React.Fragment>
    </BaseSvg>
));

ToggleLeft.displayName = "IconToggleLeft";

export default ToggleLeft;
