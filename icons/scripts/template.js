const _ = require("lodash");

const renderSvgProps = (svgProps) =>
    _.toPairs(_.omit(svgProps, ["xmlns", "version", "width", "height", "viewBox", "id", "x", "y"]))
        .map(([key, value]) => {
            const keyStr = _.camelCase(key);
            const valueStr = _.isNumber(value) ? `{${value}}` : `"${value}"`;

            return `${keyStr}=${valueStr}`;
        })
        .join(" ");

module.exports = ({ fileName, componentName, content, options, svgProps }) => `
  import React, { forwardRef } from "react";
  import { BaseSvg, SvgSizeProps, SvgProps } from "../base/BaseSvg";

  const ${fileName} = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & SvgSizeProps & SvgProps>(({size, ...restProps}, ref) => (
    <BaseSvg ${renderSvgProps(svgProps)} {...restProps} size={size} ref={ref}>
      ${options.RenderElementProp ? `{({ color }) => ${content}}` : content}
    </BaseSvg>
  ));

  ${fileName}.displayName = "${componentName}";

  export default ${fileName};
`;
