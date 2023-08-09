"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[153],{"./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js":(e,t,n)=>{n.d(t,{Z:()=>o});var r=n("./node_modules/react/jsx-runtime.js");let o=function(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,r.jsx)("path",{d:"m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,t,n)=>{n.d(t,{Z:()=>a,l:()=>i});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={size:20,padding:0,rotate:0},s=r.ZP.span.withConfig({shouldForwardProp:(e,t)=>!["size","rotate","padding","inline","color"].includes(e)&&t(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,r.iv)`
      background-image: url(${e});
    `}
  ${({size:e=i.size,padding:t=i.padding})=>(0,r.iv)`
    width: ${e-2*t}px;
    height: ${e-2*t}px;
  `}
  ${({padding:e})=>e&&(0,r.iv)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=i.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=i.size,padding:t=i.padding})=>(0,r.iv)`
      width: ${e-2*t}px;
      height: ${e-2*t}px;
    `}
  }

  ${({color:e})=>e&&(0,o.yh)(e)};
`,a=s},"./node_modules/@amsterdam/asc-ui/es/components/Link/Link.js":(e,t,n)=>{n.d(t,{Z:()=>w});var r=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js");let i=function(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,r.jsx)("path",{d:"M19.006 0H32.01v12.992h-4.002V6.826L14.434 20.417l-2.83-2.818L25.187 3.998h-6.182V0zm7.002 13.991L26.018 32H.01V6.016h17.975l-3.98 3.978.02.02H4.01v17.988h18.006l-.01-10.013 4-3.998z",fillRule:"evenodd"})}))},s=function(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,r.jsx)("path",{d:"M0 27.996h32V32H0v-4.004zm22.36-13.983 2.83 2.823L16 26.044l-9.19-9.208 2.83-2.823L14 18.377V0h4v18.377l4.36-4.364z"})}))};var a=n("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),d=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),u=n("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let p=(0,l.iv)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`,m=(0,l.iv)`
  color: ${(0,c.EN)("primary")};
  ${(0,c.yh)((0,c.EN)("primary"))};

  &:hover {
    color: ${(0,c.EN)("secondary")};
    ${(0,c.yh)((0,c.EN)("secondary"))};
  }
`,f=(0,l.iv)`
  text-decoration: none;
  font-weight: 700;
  padding-right: ${(0,c.QJ)(1)};
  color: ${(0,c.EN)("tint","level7")};

  &:hover {
    text-decoration: underline;
    color: ${(0,c.EN)("secondary")};
    ${(0,c.yh)((0,c.EN)("secondary"))};
  }
`,g=(0,l.ZP)(d.Z)`
  display: inline;
`,y=(0,l.ZP)(g)`
  margin-right: ${(0,c.QJ)(1)};
`,h=(0,l.ZP)(g)`
  margin-left: ${(0,c.QJ)(2)};
`,v=l.ZP.span`
  width: 100%; /* IE11 Fix */
`,b=(0,l.ZP)(u.Z)`
  display: inline-flex;
  ${({variant:e})=>{switch(e){case"blank":return p;case"inline":return m;default:return f}}}
  ${({darkBackground:e,$darkBackground:t})=>(e||t)&&(0,l.iv)`
      &,
      &:hover {
        color: ${(0,c.EN)("tint","level1")};
        ${d.Z} {
          ${(0,c.yh)((0,c.EN)("tint","level1"))}
        }
      }
    `};
`;var j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function O(e){var{children:t,variant:n,as:l,icon:c,inList:d}=e,u=j(e,["children","variant","as","icon","inList"]);return"with-chevron"===n&&(0,a.Z)("Please note that the `with-chevron` variant will be deprecated soon, please use the `inList` prop"),c&&"string"!=typeof c&&(0,a.Z)('Please note that passing a component to prop `icon` will be deprecated soon. If you need to use a custom Icon, just pass it as a child. If your link is a download or external link, you can pass `icon="download"` or `icon="external"`'),(0,r.jsxs)(b,Object.assign({},u,{variant:n,forwardedAs:l},{children:[(d||"with-chevron"===n)&&(0,r.jsx)(y,Object.assign({size:12},{children:(0,r.jsx)(o.Z,{})})),d||"with-chevron"===n?(0,r.jsx)(v,{children:t}):t,("external"===c||"download"===c)&&(0,r.jsxs)(h,Object.assign({size:14},{children:["external"===c&&(0,r.jsx)(i,{}),"download"===c&&(0,r.jsx)(s,{})]})),c&&"string"!=typeof c&&c]}))}O.defaultProps={as:"a"};let w=O},"./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js":(e,t,n)=>{n.d(t,{Z:()=>a});var r=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js"),i=n("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let a=function(e){var{children:t}=e,n=s(e,["children"]);return n.color&&(0,i.Z)("You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules"),(0,r.jsx)(o.Z,Object.assign({},n,{children:t}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,t,n)=>{n.d(t,{Z:()=>s});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={em:(0,r.iv)`
    font-style: italic;
  `},s=r.ZP.p`
  ${({as:e,forwardedAs:t})=>{let n=null!=e?e:t;return"string"==typeof n&&i[n]}}
  margin: 0;
  ${(0,o.HE)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:e})=>e&&(0,r.iv)`
      font-weight: 700;
      color: ${(0,o.EN)("tint","level7")};
    `}
  ${({color:e})=>e&&(0,r.iv)`
      color: ${(0,o.EN)(e)};
    `}
  ${({fontSize:e})=>e&&(0,r.iv)`
      font-size: ${e}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js":(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>{console.warn(e)}},"./src/common/src/DescriptionList/DescriptionList.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>J,WithLinks:()=>V,WithoutHeader:()=>Q,default:()=>H});var r,o,i,s,a,l,c,d,u,p=n("./node_modules/react/jsx-runtime.js"),m=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),f=n("./node_modules/polished/dist/polished.esm.js"),g=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let y=m.ZP.span`
  margin-top: 0;
  display: inline-block;
  padding: ${(0,g.QJ)(1)};
  ${({theme:e,colorType:t,colorSubtype:n})=>(0,m.iv)`
    background-color: ${(0,g.EN)(t,n)({theme:e})};
    color: ${(0,f.XV)((0,g.EN)(t,n)({theme:e}))};
  `}
`;var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function v(e){var{children:t}=e,n=h(e,["children"]);return(0,p.jsx)(y,Object.assign({},n,{children:t}))}v.defaultProps={colorType:"primary",colorSubtype:"main"};var b=n("./node_modules/@amsterdam/asc-ui/es/components/Link/Link.js");function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function O(){var e=j(["\n	display: flex;\n	flex-direction: column;\n	background-color: ",";\n	padding: 0 ",";\n	margin: "," 0;\n	width: 100%;\n"]);return O=function(){return e},e}function w(){var e=j(["\n	margin-bottom: 0;\n"]);return w=function(){return e},e}function x(){var e=j(["\n	margin: "," 0;\n"]);return x=function(){return e},e}function P(){var e=j(["\n	&:not(:last-child) {\n		margin-bottom: ",";\n	}\n"]);return P=function(){return e},e}function _(){var e=j(["\n	margin-bottom: ",";\n	font-weight: 400;\n	font-size: 16px;\n	line-height: 18px;\n	color: ",";\n"]);return _=function(){return e},e}function $(){var e=j(["\n	margin: 0;\n	font-weight: 700;\n	font-size: 16px;\n	line-height: 18px;\n	color: ",";\n"]);return $=function(){return e},e}function k(){var e=j(["\n	margin: 0 0 "," 0;\n"]);return k=function(){return e},e}var L=m.ZP.div(O(),(0,g.EN)("tint","level2"),(0,g.QJ)(4),(0,g.QJ)(2)),S=m.ZP.h2(w()),D=m.ZP.dl(x(),(0,g.QJ)(4)),Z=m.ZP.div(P(),(0,g.QJ)(4)),E=m.ZP.dt(_(),(0,g.QJ)(2),(0,g.EN)("tint","level7")),N=m.ZP.dd($(),(0,g.EN)("tint","level7")),z=m.ZP.div(k(),(0,g.QJ)(4)),I=function(e){var t=e.heading,n=e.list,r=e.footer,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["heading","list","footer"]);return(0,p.jsxs)(L,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({"data-testid":"description"},o),{children:[t&&(0,p.jsx)(S,{children:t}),(0,p.jsx)(D,{"data-testid":"description-list",children:n.map(function(e){return(0,p.jsxs)(Z,{children:[(0,p.jsx)(E,{children:e.label}),(0,p.jsx)(N,{children:e.value})]},e.label)})}),r&&(0,p.jsx)(z,{"data-testid":"description-footer",children:r})]}))};try{I.displayName="DescriptionList",I.__docgenInfo={description:"",displayName:"DescriptionList",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"DescriptionList"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DescriptionList/DescriptionList.tsx#DescriptionList"]={docgenInfo:I.__docgenInfo,name:"DescriptionList",path:"src/common/src/DescriptionList/DescriptionList.tsx#DescriptionList"})}catch(e){}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function C(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var B=function(e){return(0,p.jsx)(I,T({},e))},R=[{label:"Datum",value:"12-03-2021"},{label:"Batch",value:"Werkpakket Ingenieursdiensten contract PBK"},{label:"Conditie",value:(0,p.jsx)(v,{children:"Redelijk"})}],J=B.bind({});J.args={heading:"Ingenieursbureau werkpakket PBK",list:R};var Q=B.bind({});Q.args={list:R};var V=B.bind({});V.args={list:[{label:"Naam",value:(0,p.jsx)(b.Z,{variant:"inline",href:"#",onClick:function(e){return e.preventDefault()},children:"BRU0315 Galgenbrug"})},{label:"Locatie",value:"Dijksgracht (centrum)"},{label:"Type",value:"Brug (vast)"},{label:"Bouwjaar",value:"1879"}],footer:(0,p.jsx)(b.Z,{variant:"inline",href:"#",onClick:function(e){return e.preventDefault()},children:"Toon paspoortgegevens"})};let H={title:"common/DescriptionList",component:I};J.parameters=C(T({},J.parameters),{docs:C(T({},null===(r=J.parameters)||void 0===r?void 0:r.docs),{source:T({originalSource:"args => <DescriptionList {...args} />"},null===(i=J.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})}),Q.parameters=C(T({},Q.parameters),{docs:C(T({},null===(s=Q.parameters)||void 0===s?void 0:s.docs),{source:T({originalSource:"args => <DescriptionList {...args} />"},null===(l=Q.parameters)||void 0===l?void 0:null===(a=l.docs)||void 0===a?void 0:a.source)})}),V.parameters=C(T({},V.parameters),{docs:C(T({},null===(c=V.parameters)||void 0===c?void 0:c.docs),{source:T({originalSource:"args => <DescriptionList {...args} />"},null===(u=V.parameters)||void 0===u?void 0:null===(d=u.docs)||void 0===d?void 0:d.source)})})}}]);