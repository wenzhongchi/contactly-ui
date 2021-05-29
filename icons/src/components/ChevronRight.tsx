import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const ChevronRight = forwardRef<
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
        <polyline points="9 18 15 12 9 6" />
    </BaseSvg>
));

ChevronRight.displayName = "IconChevronRight";

export default ChevronRight;
