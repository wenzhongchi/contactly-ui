import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Trello = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                <rect x={7} y={7} width={3} height={9} />
                <rect x={14} y={7} width={3} height={5} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Trello.displayName = "IconTrello";

export default Trello;
