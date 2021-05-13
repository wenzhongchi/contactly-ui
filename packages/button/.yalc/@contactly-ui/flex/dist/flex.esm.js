import r from"styled-components";import o,{forwardRef as t}from"react";import{compose as e,space as i,layout as n,flexbox as a,border as s,position as d,color as p,shadow as c,typography as l}from"styled-system";function f(r){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}
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
***************************************************************************** */var g=function(){return(g=Object.assign||function(r){for(var o,t=1,e=arguments.length;t<e;t++)for(var i in o=arguments[t])Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i]);return r}).apply(this,arguments)};function m(r){return(m="function"==typeof Symbol&&"symbol"==f(Symbol.iterator)?function(r){return f(r)}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":f(r)})(r)}function b(){return(b=Object.assign||function(r){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])}return r}).apply(this,arguments)}var u=function(r,o,t,e,i){for(o=o&&o.split?o.split("."):[o],e=0;e<o.length;e++)r=r?r[o[e]]:i;return r===i?t:r},y=[40,52,64].map((function(r){return r+"em"})),h={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},S={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},v={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},R={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},z=function(r,o){if("number"!=typeof o||o>=0)return u(r,o,o);var t=Math.abs(o),e=u(r,t,t);return"string"==typeof e?"-"+e:-1*e},O=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(r,o){var t;return b({},r,((t={})[o]=z,t))}),{}),w=function r(o){return function(t){void 0===t&&(t={});var e=b({},h,{},t.theme||t),i={},n=function(r){return function(o){var t={},e=u(o,"breakpoints",y),i=[null].concat(e.map((function(r){return"@media screen and (min-width: "+r+")"})));for(var n in r){var a="function"==typeof r[n]?r[n](o):r[n];if(null!=a)if(Array.isArray(a))for(var s=0;s<a.slice(0,i.length).length;s++){var d=i[s];d?(t[d]=t[d]||{},null!=a[s]&&(t[d][n]=a[s])):t[n]=a[s]}else t[n]=a}return t}}("function"==typeof o?o(e):o)(e);for(var a in n){var s=n[a],d="function"==typeof s?s(e):s;if("variant"!==a)if(d&&"object"===m(d))i[a]=r(d)(e);else{var p=u(S,a,a),c=u(R,p),l=u(e,c,u(e,p,{})),f=u(O,p,u)(l,d,d);if(v[p])for(var g=v[p],z=0;z<g.length;z++)i[g[z]]=f;else i[p]=f}else i=b({},i,{},r(u(e,d))(e))}return i}},x=e(i,n,a,s,d,p,c);e(i,n,d,p,l);var B=r.div({boxSizing:"border-box"},(function(r){var o=r.css;return w(o)}),x),W=t((function(r,t){var e=r.css,i=r.children,n=function(r,o){var t={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&o.indexOf(e)<0&&(t[e]=r[e]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(e=Object.getOwnPropertySymbols(r);i<e.length;i++)o.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(r,e[i])&&(t[e[i]]=r[e[i]])}return t}(r,["css","children"]);return o.createElement(B,g({ref:t,css:e},n),i)})),L=r(W)({display:"flex"});export{L as Flex};
