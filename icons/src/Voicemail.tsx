import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Voicemail = forwardRef<
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
            <circle cx={5.5} cy={11.5} r={4.5} />
            <circle cx={18.5} cy={11.5} r={4.5} />
            <line x1={5.5} y1={16} x2={18.5} y2={16} />
        </React.Fragment>
    </BaseSvg>
));

Voicemail.displayName = "IconVoicemail";

export default Voicemail;
