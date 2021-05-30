import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Sidebar = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <line x1={9} y1={3} x2={9} y2={21} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Sidebar.displayName = "IconSidebar";

export default Sidebar;
