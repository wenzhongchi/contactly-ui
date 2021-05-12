"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("react"),e=require("styled-components"),t=require("styled-system");function o(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var i=o(r),n=o(e),a=function(){return(a=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r}).apply(this,arguments)};function s(r,e){var t={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(r);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(r,o[i])&&(t[o[i]]=r[o[i]])}return t}function d(r){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function l(){return(l=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r}).apply(this,arguments)}var c=function(r,e,t,o,i){for(e=e&&e.split?e.split("."):[e],o=0;o<e.length;o++)r=r?r[e[o]]:i;return r===i?t:r},f=[40,52,64].map((function(r){return r+"em"})),u={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},p={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},g={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},h={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},b=function(r,e){if("number"!=typeof e||e>=0)return c(r,e,e);var t=Math.abs(e),o=c(r,t,t);return"string"==typeof o?"-"+o:-1*o},m=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(r,e){var t;return l({},r,((t={})[e]=b,t))}),{}),y=function r(e){return function(t){void 0===t&&(t={});var o=l({},u,{},t.theme||t),i={},n=function(r){return function(e){var t={},o=c(e,"breakpoints",f),i=[null].concat(o.map((function(r){return"@media screen and (min-width: "+r+")"})));for(var n in r){var a="function"==typeof r[n]?r[n](e):r[n];if(null!=a)if(Array.isArray(a))for(var s=0;s<a.slice(0,i.length).length;s++){var d=i[s];d?(t[d]=t[d]||{},null!=a[s]&&(t[d][n]=a[s])):t[n]=a[s]}else t[n]=a}return t}}("function"==typeof e?e(o):e)(o);for(var a in n){var s=n[a],b="function"==typeof s?s(o):s;if("variant"!==a)if(b&&"object"===d(b))i[a]=r(b)(o);else{var y=c(p,a,a),v=c(h,y),x=c(o,v,c(o,y,{})),z=c(m,y,c)(x,b,b);if(g[y])for(var R=g[y],S=0;S<R.length;S++)i[R[S]]=z;else i[y]=z}else i=l({},i,{},r(c(o,b))(o))}return i}},v=t.compose(t.space,t.layout,t.flexbox,t.border,t.position,t.color,t.shadow),x=t.compose(t.space,t.layout,t.position,t.color,t.typography),z=t.variant({variants:{"display-xl":{fontFamily:"body",fontWeight:500,lineHeight:44,fontSize:42},"display-lg":{fontFamily:"body",fontWeight:"normal",lineHeight:32,fontSize:28},"display-md":{fontFamily:"body",fontWeight:"normal",lineHeight:32,fontSize:26},"display-sm":{fontFamily:"body",fontWeight:"normal",lineHeight:24,fontSize:20},heading:{fontFamily:"heading",fontWeight:500,lineHeight:24,fontSize:16},caption:{fontFamily:"heading",fontWeight:"normal",lineHeight:16,fontSize:12},subheading:{fontFamily:"heading",fontWeight:600,lineHeight:16,fontSize:12},body:{fontFamily:"heading",fontWeight:"normal",lineHeight:20,fontSize:14}}}),R=n.default.p(z,x),S=r.forwardRef((function(r,e){var t=r.as,o=r.children,n=r.variant,d=void 0===n?"body":n,l=r.color,c=void 0===l?"text.primary":l,f=s(r,["as","children","variant","color"]);return i.default.createElement(R,a({margin:0,variant:d,color:c,ref:e,as:t},f),o)})),w=n.default.div({boxSizing:"border-box"},(function(r){var e=r.css;return y(e)}),v),B=r.forwardRef((function(r,e){var t=r.css,o=r.children,n=s(r,["css","children"]);return i.default.createElement(w,a({ref:e,css:t},n),o)})),C={display:"flex",alignItems:"center",justifyContent:"center",lineHeight:16,borderRadius:4,border:1,boxSizing:"border-box",appearance:"none",ml:0,mr:0,mt:0,mb:0},W=t.variant({variants:{default:a(a({},C),{borderColor:"border.default",cursor:"pointer","&:hover":{bg:"highlight.light"},"&:focus":{outline:"none"}}),primary:a(a({},C),{borderColor:"border.default",cursor:"pointer","&:hover":{bg:"highlight.light"},"&:focus":{outline:"none"}}),secondary:a(a({},C),{borderColor:"border.default",cursor:"pointer","&:hover":{bg:"highlight.light"}}),success:a(a({},C),{borderColor:"border.success",cursor:"pointer","&:hover":{bg:"highlight.success"}}),error:a(a({},C),{borderColor:"border.error",cursor:"pointer","&:hover":{bg:"highlight.error"}}),warning:a(a({},C),{borderColor:"border.secondary",cursor:"pointer","&:hover":{bg:"highlight.warning"}}),transparent:a(a({},C),{borderColor:"border.transparent",cursor:"pointer","&:hover":{bg:"highlight.light"}})}}),T=t.variant({prop:"size",variants:{sm:{height:"28px",padding:"0px 8px"},md:{height:"32px",padding:"0px 16px"},lg:{height:"38px",padding:"0px 16px"}}}),L=function(r){void 0===r&&(r="horizontal");return"horizontal"===r?{"&:not(:first-of-type)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}}:{"&:not(:first-of-type)":{borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},O=r.createContext({}),H=O.Provider,j=function(){return r.useContext(O)},E=n.default.button((function(r){var e=r.theme.colors;if(r.isDisabled)return{backgroundColor:e.button.transparent}}),(function(r){var e=r.css;return y(e)}),W,T,v),I=r.forwardRef((function(r,e){var t=r.label,o=r.variant,n=void 0===o?"default":o,d=r.size,l=void 0===d?"sm":d,c=r.leftIcon,f=r.rightIcon,u=r.isDisabled,p=s(r,["label","variant","size","leftIcon","rightIcon","isDisabled"]),g=j(),h=g.variant,b=g.size,m=g.orientation,y=null!=h?h:n,v=null!=b?b:l,x=function(){switch(v){case"sm":return 12;case"md":return 16;case"lg":return 24}},z=function(){switch(v){case"sm":return 8;case"md":case"lg":return 8}};return i.default.createElement(E,a({ref:e,isDisabled:u,size:v,variant:y,css:m?L(m):{}},p),c&&i.default.createElement(B,{width:x(),height:x(),mr:z()},c),t&&i.default.createElement(S,{variant:function(){switch(v){case"sm":case"md":case"lg":return"body"}}(),color:function(){switch(y){case"default":return u?"text.disabled":"text.default";case"primary":case"secondary":case"success":case"warning":case"error":return"text.white";case"text":return u?"text.disabled":"text.default"}}()},t),f&&i.default.createElement(B,{width:x(),height:x(),ml:z()},f))})),D=n.default.button((function(r){var e=r.theme.colors;if(r.isDisabled)return{backgroundColor:e.button.transparent}}),(function(r){var e=r.css;return y(e)}),W,T,v),F=r.forwardRef((function(r,e){var t=r.variant,o=void 0===t?"default":t,n=r.size,d=void 0===n?"sm":n,l=r.icon,c=r.isDisabled,f=s(r,["variant","size","icon","isDisabled"]),u=j(),p=u.variant,g=u.size,h=u.orientation,b=null!=p?p:o,m=null!=g?g:d,y=function(){switch(m){case"sm":return 12;case"md":return 16;case"lg":return 24}};return i.default.createElement(D,a({ref:e,isDisabled:c,size:m,variant:b,css:h?L(h):{}},f),i.default.createElement(B,{width:y(),height:y()},l))})),k=n.default(B)({display:"flex"}),P=r.forwardRef((function(e,t){var o=e.children,n=e.orientation,d=void 0===n?"horizontal":n,l=e.variant,c=void 0===l?"default":l,f=e.size,u=void 0===f?"sm":f,p=s(e,["children","orientation","variant","size"]),g=r.useMemo((function(){return{orientation:d,variant:c,size:u}}),[d,c,u]);return i.default.createElement(H,{value:g},i.default.createElement(k,a({ref:t,display:"inline-flex",flexDirection:"horizontal"===d?"row":"column"},p),o))}));exports.Button=I,exports.ButtonGroup=P,exports.IconButton=F,exports.StyledButton=E,exports.StyledIconButton=D,exports.getTextColors=function(r){return{light:{primary:r.gray[800],secondary:r.gray[600]},dark:{primary:r.gray[800],secondary:r.gray[600]}}};
