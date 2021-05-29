import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const FastForward = forwardRef<
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
            <polygon points="13 19 22 12 13 5 13 19" />
            <polygon points="2 19 11 12 2 5 2 19" />
        </React.Fragment>
    </BaseSvg>
));

FastForward.displayName = "IconFastForward";

export default FastForward;
