import React, { forwardRef } from "react";

import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

const Film = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(
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
                <rect x={2} y={2} width={20} height={20} rx={2.18} ry={2.18} />
                <line x1={7} y1={2} x2={7} y2={22} />
                <line x1={17} y1={2} x2={17} y2={22} />
                <line x1={2} y1={12} x2={22} y2={12} />
                <line x1={2} y1={7} x2={7} y2={7} />
                <line x1={2} y1={17} x2={7} y2={17} />
                <line x1={17} y1={17} x2={22} y2={17} />
                <line x1={17} y1={7} x2={22} y2={7} />
            </React.Fragment>
        </BaseSvg>
    ),
);

Film.displayName = "IconFilm";

export default Film;
