import t,{forwardRef as n}from"react";import e from"styled-components";import{compose as i,space as o,layout as r,flexbox as a,border as l,position as f,color as y,shadow as g,typography as m,variant as h}from"styled-system";
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
***************************************************************************** */var p=function(){return(p=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};i(o,r,a,l,f,y,g);var d=i(o,r,f,y,m),c=h({variants:{"display-xl":{fontFamily:"body",fontWeight:500,lineHeight:44,fontSize:42},"display-lg":{fontFamily:"body",fontWeight:"normal",lineHeight:32,fontSize:28},"display-md":{fontFamily:"body",fontWeight:"normal",lineHeight:32,fontSize:26},"display-sm":{fontFamily:"body",fontWeight:"normal",lineHeight:24,fontSize:20},heading:{fontFamily:"heading",fontWeight:500,lineHeight:24,fontSize:16},caption:{fontFamily:"heading",fontWeight:"normal",lineHeight:16,fontSize:12},subheading:{fontFamily:"heading",fontWeight:600,lineHeight:16,fontSize:12},body:{fontFamily:"heading",fontWeight:"normal",lineHeight:20,fontSize:14}}}),s=e.p(c,d),b=n((function(n,e){var i=n.as,o=n.children,r=n.variant,a=void 0===r?"body":r,l=n.color,f=void 0===l?"text.primary":l,y=function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(e[i[o]]=t[i[o]])}return e}(n,["as","children","variant","color"]);return t.createElement(s,p({margin:0,variant:a,color:f,ref:e,as:i},y),o)})),u=function(t){return{primary:t.gray[800],secondary:t.gray[600]}};export{b as Text,u as getTextColors};
