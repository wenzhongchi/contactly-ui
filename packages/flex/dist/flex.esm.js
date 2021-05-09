import r from"styled-components";import o,{forwardRef as t}from"react";import{compose as e,space as i,layout as n,flexbox as a,border as d,position as s,color as p,shadow as c}from"styled-system";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var l=function(){return(l=Object.assign||function(r){for(var o,t=1,e=arguments.length;t<e;t++)for(var i in o=arguments[t])Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i]);return r}).apply(this,arguments)};function g(r){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function f(){return(f=Object.assign||function(r){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])}return r}).apply(this,arguments)}var m=function(r,o,t,e,i){for(o=o&&o.split?o.split("."):[o],e=0;e<o.length;e++)r=r?r[o[e]]:i;return r===i?t:r},b=[40,52,64].map((function(r){return r+"em"})),u={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},h={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},y={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},v={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},S=function(r,o){if("number"!=typeof o||o>=0)return m(r,o,o);var t=Math.abs(o),e=m(r,t,t);return"string"==typeof e?"-"+e:-1*e},R=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(r,o){var t;return f({},r,((t={})[o]=S,t))}),{}),z=function r(o){return function(t){void 0===t&&(t={});var e=f({},u,{},t.theme||t),i={},n=function(r){return function(o){var t={},e=m(o,"breakpoints",b),i=[null].concat(e.map((function(r){return"@media screen and (min-width: "+r+")"})));for(var n in r){var a="function"==typeof r[n]?r[n](o):r[n];if(null!=a)if(Array.isArray(a))for(var d=0;d<a.slice(0,i.length).length;d++){var s=i[d];s?(t[s]=t[s]||{},null!=a[d]&&(t[s][n]=a[d])):t[n]=a[d]}else t[n]=a}return t}}("function"==typeof o?o(e):o)(e);for(var a in n){var d=n[a],s="function"==typeof d?d(e):d;if("variant"!==a)if(s&&"object"===g(s))i[a]=r(s)(e);else{var p=m(h,a,a),c=m(v,p),l=m(e,c,m(e,p,{})),S=m(R,p,m)(l,s,s);if(y[p])for(var z=y[p],O=0;O<z.length;O++)i[z[O]]=S;else i[p]=S}else i=f({},i,{},r(m(e,s))(e))}return i}},O=e(i,n,a,d,s,p,c),w=r.div({boxSizing:"border-box"},(function(r){var o=r.css;return z(o)}),O),x=r(t((function(r,t){var e=r.css,i=r.children,n=function(r,o){var t={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&o.indexOf(e)<0&&(t[e]=r[e]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(e=Object.getOwnPropertySymbols(r);i<e.length;i++)o.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(r,e[i])&&(t[e[i]]=r[e[i]])}return t}(r,["css","children"]);return o.createElement(w,l({ref:t,css:e},n),i)})))({display:"flex"});export{x as Flex};
