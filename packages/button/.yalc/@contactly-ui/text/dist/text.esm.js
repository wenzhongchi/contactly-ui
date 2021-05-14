import t,{forwardRef as e}from"react";import r from"styled-components";import{compose as i,space as n,layout as o,flexbox as a,border as l,position as y,color as f,shadow as g,typography as d,variant as h}from"styled-system";
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
***************************************************************************** */var m=function(){return(m=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};i(n,o,a,l,y,f,g);var p=i(n,o,y,f,d),s=h({variants:{"display-xl":{fontFamily:"body",fontWeight:500,lineHeight:44,fontSize:42},"display-lg":{fontFamily:"body",fontWeight:"normal",lineHeight:32,fontSize:28},"display-md":{fontFamily:"body",fontWeight:"normal",lineHeight:32,fontSize:26},"display-sm":{fontFamily:"body",fontWeight:"normal",lineHeight:24,fontSize:20},heading:{fontFamily:"heading",fontWeight:500,lineHeight:24,fontSize:16},caption:{fontFamily:"heading",fontWeight:"normal",lineHeight:16,fontSize:12},subheading:{fontFamily:"heading",fontWeight:600,lineHeight:16,fontSize:12},body:{fontFamily:"heading",fontWeight:"normal",lineHeight:20,fontSize:14}}}),c=r.p(s,p),b=e((function(e,r){var i=e.as,n=e.children,o=e.variant,a=void 0===o?"body":o,l=e.color,y=void 0===l?"text.primary":l,f=function(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(r[i[n]]=t[i[n]])}return r}(e,["as","children","variant","color"]);return t.createElement(c,m({margin:0,variant:a,color:y,ref:r,as:i},f),n)})),u=function(t){return{light:{default:t.gray[700],primary:t.gray[900],secondary:t.gray[800],tertiary:t.gray[600],disabled:t.gray[80],error:t.red[500],white:t.white},dark:{default:t.gray[700],primary:t.gray[900],secondary:t.gray[800],tertiary:t.gray[600],disabled:t.gray[80],error:t.red[500],white:t.white}}};export{b as Text,u as getTextColors};
