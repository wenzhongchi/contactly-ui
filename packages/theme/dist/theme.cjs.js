"use strict";var e=require("react"),t=require("styled-components"),r=require("styled-system");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=p(e),o=p(t),n=function(){return(n=Object.assign||function(e){for(var t,r=1,p=arguments.length;r<p;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};r.compose(r.space,r.layout,r.flexbox,r.border,r.position,r.color,r.shadow);var i=r.compose(r.space,r.layout,r.position,r.color,r.typography),x={transparent:"transparent",black:"#000000",white:"#FFFFFF",gray:{10:"#FAFBFC",20:"#F4F5F7",30:"#EBECF0",40:"#DFE1E6",50:"#C1C7D0",60:"#B3BAC5",70:"#A5ADBA",80:"#97A0AF",90:"#8993A4",100:"#7A869A",200:"#6B778C",300:"#5E6C84",400:"#505F79",500:"#42526E",600:"#344563",700:"#253858",800:"#172B4D",900:"#061938"},red:{50:"#FFEBE6",75:"#FFBDAD",100:"#FF8F73",200:"#FF7452",300:"#FF5630",400:"#DE350B",500:"#B92500"},yellow:{50:"#FFFAE6",75:"#FFF0B3",100:"#FFE380",200:"#FFC400",300:"#FFAB00",400:"#FF991F",500:"#FF8B00"},green:{50:"#E3FCEF",75:"#ABF5D1",100:"#79F2C0",200:"#57D9A3",300:"#36B37E",400:"#00875A",500:"#006644"},teal:{50:"#E6FCFF",75:"#B3F5FF",100:"#79E2F2",200:"#00C7E6",300:"#00B8D9",400:"#00A3BF",500:"#008DA6"},blue:{50:"#DEEBFF",75:"#B3D4FF",100:"#4C9AFF",200:"#2684FF",300:"#0065FF",400:"#0052CC",500:"#0747A6"},purple:{50:"#EAE6FF",75:"#C0B6F2",100:"#998DD9",200:"#8777D9",300:"#6554C0",400:"#5243AA",500:"#403294"}},l=r.variant({variants:{"display-xl":{fontFamily:"body",fontWeight:500,lineHeight:44,fontSize:42},"display-lg":{fontFamily:"body",fontWeight:"normal",lineHeight:32,fontSize:28},"display-md":{fontFamily:"body",fontWeight:"normal",lineHeight:32,fontSize:26},"display-sm":{fontFamily:"body",fontWeight:"normal",lineHeight:24,fontSize:20},heading:{fontFamily:"heading",fontWeight:500,lineHeight:24,fontSize:16},caption:{fontFamily:"heading",fontWeight:"normal",lineHeight:16,fontSize:12},subheading:{fontFamily:"heading",fontWeight:600,lineHeight:16,fontSize:12},body:{fontFamily:"heading",fontWeight:"normal",lineHeight:20,fontSize:14}}}),F=o.default.p(l,i);e.forwardRef((function(e,t){var r=e.as,p=e.children,o=e.variant,i=void 0===o?"body":o,x=e.color,l=void 0===x?"text.primary":x,d=function(e,t){var r={};for(var p in e)Object.prototype.hasOwnProperty.call(e,p)&&t.indexOf(p)<0&&(r[p]=e[p]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(p=Object.getOwnPropertySymbols(e);a<p.length;a++)t.indexOf(p[a])<0&&Object.prototype.propertyIsEnumerable.call(e,p[a])&&(r[p[a]]=e[p[a]])}return r}(e,["as","children","variant","color"]);return a.default.createElement(F,n({margin:0,variant:i,color:l,ref:t,as:r},d),p)}));var d=function(e){return{light:{default:e.gray[700],primary:e.gray[900],secondary:e.gray[800],tertiary:e.gray[600],disabled:e.gray[80]},dark:{default:e.gray[700],primary:e.gray[900],secondary:e.gray[800],tertiary:e.gray[600],disabled:e.gray[80]}}},s=["340px","480px","768px","992px","1200px"];s.xs=s[1],s.sm=s[2],s.md=s[3],s.lg=s[4],s.xl=s[5];var g={space:{0:"0px",1:"1px",2:"2px",3:"3px",4:"4px",5:"5px",6:"6px",8:"8px",10:"10px",12:"12px",14:"14px",16:"16px",18:"18px",20:"20px",24:"24px",28:"28px",32:"32px",40:"40px",48:"48px",56:"56px",64:"64px"},fonts:{body:"Inter",heading:"Inter",label:"Inter",list:"Inter"},fontSizes:{10:"10px",11:"11px",12:"12px",14:"14px",16:"16px",18:"18px",24:"24px",32:"32px",48:"48px",64:"64px",72:"72px"},fontWeights:{normal:400,500:500,600:600,bold:700,800:800},lineHeights:{10:"10px",16:"16px",18:"18px",20:"20px",24:"24px",28:"28px",32:"32px",44:"44px",64:"64px",88:"88px"},letterSpacings:{default:"normal",tracked:"0.04em"},borders:{none:0,1:"1px solid",2:"2px solid",4:"4px solid"},borderWidths:{none:0,1:"1px",2:"2px"},shadows:{none:"none",elevation0:"0px 0px 2px rgba(23, 43, 77, 0.04), 0px 3px 2px rgba(23, 43, 77, 0.08)",elevation1:"0px 3px 2px rgba(23, 43, 77, 0.04), 0px 5px 3px rgba(23, 43, 77, 0.08)",elevation2:"0px 5px 3px rgba(23, 43, 77, 0.04), 0px 8px 5px rgba(23, 43, 77, 0.08)",elevation3:"0px 8px 5px rgba(23, 43, 77, 0.04), 0px 15px 12px rgba(23, 43, 77, 0.08)",elevation4:"0px 18px 12px rgba(23, 43, 77, 0.04), 0px 24px 18px rgba(23, 43, 77, 0.08)",elevation5:"0px 24px 18px rgba(23, 43, 77, 0.04), 0px 35px 24px rgba(23, 43, 77, 0.08)"},radii:{1:"1px",2:"2px",4:"4px",6:"6px",8:"8px"},zIndices:{hide:-1,auto:"auto",base:0,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,drawer:1400,modal:1500,popover:1600,toast:1700,tooltip:1800}};n(n({},g),{colors:{text:d(x).light},breakpoints:s}),n(n({},g),{colors:{text:d(x).dark},breakpoints:s});
