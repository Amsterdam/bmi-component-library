"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[149],{"./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js":(e,t,n)=>{n.d(t,{A:()=>o});var r=n("./node_modules/react/jsx-runtime.js");let o=function(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,r.jsx)("path",{d:"m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,t,n)=>{n.d(t,{A:()=>a,G:()=>s});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={size:20,padding:0,rotate:0},i=r.Ay.span.withConfig({shouldForwardProp:(e,t)=>!["size","rotate","padding","inline","color"].includes(e)&&t(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,r.AH)`
      background-image: url(${e});
    `}
  ${({size:e=s.size,padding:t=s.padding})=>(0,r.AH)`
    width: ${e-2*t}px;
    height: ${e-2*t}px;
  `}
  ${({padding:e})=>e&&(0,r.AH)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=s.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=s.size,padding:t=s.padding})=>(0,r.AH)`
      width: ${e-2*t}px;
      height: ${e-2*t}px;
    `}
  }

  ${({color:e})=>e&&(0,o.G2)(e)};
`,a=i},"./node_modules/@amsterdam/asc-ui/es/components/Link/Link.js":(e,t,n)=>{n.d(t,{A:()=>w});var r=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js");let s=function(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,r.jsx)("path",{d:"M19.006 0H32.01v12.992h-4.002V6.826L14.434 20.417l-2.83-2.818L25.187 3.998h-6.182V0zm7.002 13.991L26.018 32H.01V6.016h17.975l-3.98 3.978.02.02H4.01v17.988h18.006l-.01-10.013 4-3.998z",fillRule:"evenodd"})}))},i=function(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,r.jsx)("path",{d:"M0 27.996h32V32H0v-4.004zm22.36-13.983 2.83 2.823L16 26.044l-9.19-9.208 2.83-2.823L14 18.377V0h4v18.377l4.36-4.364z"})}))};var a=n("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),d=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),u=n("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let p=(0,l.AH)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`,m=(0,l.AH)`
  color: ${(0,c.hm)("primary")};
  ${(0,c.G2)((0,c.hm)("primary"))};

  &:hover {
    color: ${(0,c.hm)("secondary")};
    ${(0,c.G2)((0,c.hm)("secondary"))};
  }
`,f=(0,l.AH)`
  text-decoration: none;
  font-weight: 700;
  padding-right: ${(0,c.B7)(1)};
  color: ${(0,c.hm)("tint","level7")};

  &:hover {
    text-decoration: underline;
    color: ${(0,c.hm)("secondary")};
    ${(0,c.G2)((0,c.hm)("secondary"))};
  }
`,y=(0,l.Ay)(d.A)`
  display: inline;
`,h=(0,l.Ay)(y)`
  margin-right: ${(0,c.B7)(1)};
`,g=(0,l.Ay)(y)`
  margin-left: ${(0,c.B7)(2)};
`,b=l.Ay.span`
  width: 100%; /* IE11 Fix */
`,v=(0,l.Ay)(u.A)`
  display: inline-flex;
  ${({variant:e})=>{switch(e){case"blank":return p;case"inline":return m;default:return f}}}
  ${({darkBackground:e,$darkBackground:t})=>(e||t)&&(0,l.AH)`
      &,
      &:hover {
        color: ${(0,c.hm)("tint","level1")};
        ${d.A} {
          ${(0,c.G2)((0,c.hm)("tint","level1"))}
        }
      }
    `};
`;var j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function O(e){var{children:t,variant:n,as:l,icon:c,inList:d}=e,u=j(e,["children","variant","as","icon","inList"]);return"with-chevron"===n&&(0,a.A)("Please note that the `with-chevron` variant will be deprecated soon, please use the `inList` prop"),c&&"string"!=typeof c&&(0,a.A)('Please note that passing a component to prop `icon` will be deprecated soon. If you need to use a custom Icon, just pass it as a child. If your link is a download or external link, you can pass `icon="download"` or `icon="external"`'),(0,r.jsxs)(v,Object.assign({},u,{variant:n,forwardedAs:l},{children:[(d||"with-chevron"===n)&&(0,r.jsx)(h,Object.assign({size:12},{children:(0,r.jsx)(o.A,{})})),d||"with-chevron"===n?(0,r.jsx)(b,{children:t}):t,("external"===c||"download"===c)&&(0,r.jsxs)(g,Object.assign({size:14},{children:["external"===c&&(0,r.jsx)(s,{}),"download"===c&&(0,r.jsx)(i,{})]})),c&&"string"!=typeof c&&c]}))}O.defaultProps={as:"a"};let w=O},"./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js":(e,t,n)=>{n.d(t,{A:()=>a});var r=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js"),s=n("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let a=function(e){var{children:t}=e,n=i(e,["children"]);return n.color&&(0,s.A)("You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules"),(0,r.jsx)(o.A,Object.assign({},n,{children:t}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,t,n)=>{n.d(t,{A:()=>i});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={em:(0,r.AH)`
    font-style: italic;
  `},i=r.Ay.p`
  ${({as:e,forwardedAs:t})=>{let n=null!=e?e:t;return"string"==typeof n&&s[n]}}
  margin: 0;
  ${(0,o.Jx)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:e})=>e&&(0,r.AH)`
      font-weight: 700;
      color: ${(0,o.hm)("tint","level7")};
    `}
  ${({color:e})=>e&&(0,r.AH)`
      color: ${(0,o.hm)(e)};
    `}
  ${({fontSize:e})=>e&&(0,r.AH)`
      font-size: ${e}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js":(e,t,n)=>{n.d(t,{A:()=>r});let r=e=>{console.warn(e)}},"./src/common/src/DescriptionList/DescriptionList.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>V,WithLinks:()=>W,WithoutHeader:()=>G,default:()=>U});var r,o,s,i,a,l,c,d,u,p=n("./node_modules/react/jsx-runtime.js"),m=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),f=n("./node_modules/polished/dist/polished.esm.js"),y=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let h=m.Ay.span`
  margin-top: 0;
  display: inline-block;
  padding: ${(0,y.B7)(1)};
  ${({theme:e,colorType:t,colorSubtype:n})=>(0,m.AH)`
    background-color: ${(0,y.hm)(t,n)({theme:e})};
    color: ${(0,f.W0)((0,y.hm)(t,n)({theme:e}))};
  `}
`;var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function b(e){var{children:t}=e,n=g(e,["children"]);return(0,p.jsx)(h,Object.assign({},n,{children:t}))}b.defaultProps={colorType:"primary",colorSubtype:"main"};var v=n("./node_modules/@amsterdam/asc-ui/es/components/Link/Link.js");function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function O(){var e=j(["\n	display: flex;\n	flex-direction: column;\n	background-color: ",";\n	padding: 0 ",";\n	margin: "," 0;\n	width: 100%;\n"]);return O=function(){return e},e}function w(){var e=j(["\n	margin-bottom: 0;\n"]);return w=function(){return e},e}function x(){var e=j(["\n	margin: "," 0;\n"]);return x=function(){return e},e}function A(){var e=j(["\n	&:not(:last-child) {\n		margin-bottom: ",";\n	}\n"]);return A=function(){return e},e}function P(){var e=j(["\n	margin-bottom: ",";\n	font-weight: 400;\n	font-size: 16px;\n	line-height: 18px;\n	color: ",";\n"]);return P=function(){return e},e}function _(){var e=j(["\n	margin: 0;\n	font-weight: 700;\n	font-size: 16px;\n	line-height: 18px;\n	color: ",";\n"]);return _=function(){return e},e}function $(){var e=j(["\n	margin: 0 0 "," 0;\n"]);return $=function(){return e},e}var k=m.Ay.div(O(),(0,y.hm)("tint","level2"),(0,y.B7)(4),(0,y.B7)(2)),L=m.Ay.h2(w()),S=m.Ay.dl(x(),(0,y.B7)(4)),D=m.Ay.div(A(),(0,y.B7)(4)),B=m.Ay.dt(P(),(0,y.B7)(2),(0,y.hm)("tint","level7")),H=m.Ay.dd(_(),(0,y.hm)("tint","level7")),z=m.Ay.div($(),(0,y.B7)(4)),I=function(e){var t=e.heading,n=e.list,r=e.footer,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["heading","list","footer"]);return(0,p.jsxs)(k,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({"data-testid":"description"},o),{children:[t&&(0,p.jsx)(L,{children:t}),(0,p.jsx)(S,{"data-testid":"description-list",children:n.map(function(e){return(0,p.jsxs)(D,{children:[(0,p.jsx)(B,{children:e.label}),(0,p.jsx)(H,{children:e.value})]},e.label)})}),r&&(0,p.jsx)(z,{"data-testid":"description-footer",children:r})]}))};try{I.displayName="DescriptionList",I.__docgenInfo={description:"",displayName:"DescriptionList",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"DescriptionList"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DescriptionList/DescriptionList.tsx#DescriptionList"]={docgenInfo:I.__docgenInfo,name:"DescriptionList",path:"src/common/src/DescriptionList/DescriptionList.tsx#DescriptionList"})}catch(e){}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function E(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var C=function(e){return(0,p.jsx)(I,T({},e))},R=[{label:"Datum",value:"12-03-2021"},{label:"Batch",value:"Werkpakket Ingenieursdiensten contract PBK"},{label:"Conditie",value:(0,p.jsx)(b,{children:"Redelijk"})}],V=C.bind({});V.args={heading:"Ingenieursbureau werkpakket PBK",list:R};var G=C.bind({});G.args={list:R};var W=C.bind({});W.args={list:[{label:"Naam",value:(0,p.jsx)(v.A,{variant:"inline",href:"#",onClick:function(e){return e.preventDefault()},children:"BRU0315 Galgenbrug"})},{label:"Locatie",value:"Dijksgracht (centrum)"},{label:"Type",value:"Brug (vast)"},{label:"Bouwjaar",value:"1879"}],footer:(0,p.jsx)(v.A,{variant:"inline",href:"#",onClick:function(e){return e.preventDefault()},children:"Toon paspoortgegevens"})};let U={title:"common/DescriptionList",component:I};V.parameters=E(T({},V.parameters),{docs:E(T({},null===(r=V.parameters)||void 0===r?void 0:r.docs),{source:T({originalSource:"args => <DescriptionList {...args} />"},null===(s=V.parameters)||void 0===s?void 0:null===(o=s.docs)||void 0===o?void 0:o.source)})}),G.parameters=E(T({},G.parameters),{docs:E(T({},null===(i=G.parameters)||void 0===i?void 0:i.docs),{source:T({originalSource:"args => <DescriptionList {...args} />"},null===(l=G.parameters)||void 0===l?void 0:null===(a=l.docs)||void 0===a?void 0:a.source)})}),W.parameters=E(T({},W.parameters),{docs:E(T({},null===(c=W.parameters)||void 0===c?void 0:c.docs),{source:T({originalSource:"args => <DescriptionList {...args} />"},null===(u=W.parameters)||void 0===u?void 0:null===(d=u.docs)||void 0===d?void 0:d.source)})})}}]);