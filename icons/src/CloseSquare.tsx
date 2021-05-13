import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const CloseSquare = forwardRef<
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
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
            <line x1={9} y1={9} x2={15} y2={15} />
            <line x1={15} y1={9} x2={9} y2={15} />
        </React.Fragment>
    </BaseSvg>
));

CloseSquare.displayName = "IconCloseSquare";

export default CloseSquare;
