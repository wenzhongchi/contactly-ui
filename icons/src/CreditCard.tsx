import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const CreditCard = forwardRef<
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
            <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
            <line x1={1} y1={10} x2={23} y2={10} />
        </React.Fragment>
    </BaseSvg>
));

CreditCard.displayName = "IconCreditCard";

export default CreditCard;
