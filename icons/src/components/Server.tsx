import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Server = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
                <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
                <line x1={6} y1={6} x2={6.01} y2={6} />
                <line x1={6} y1={18} x2={6.01} y2={18} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Server.displayName = "IconServer";

export default Server;
