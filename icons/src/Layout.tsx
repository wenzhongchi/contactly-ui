import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Layout = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <line x1={3} y1={9} x2={21} y2={9} />
                <line x1={9} y1={21} x2={9} y2={9} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Layout.displayName = "IconLayout";

export default Layout;
