import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Truck = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <rect x={1} y={3} width={15} height={13} />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx={5.5} cy={18.5} r={2.5} />
                <circle cx={18.5} cy={18.5} r={2.5} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Truck.displayName = "IconTruck";

export default Truck;
