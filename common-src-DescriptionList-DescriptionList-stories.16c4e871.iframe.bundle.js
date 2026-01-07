"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[149],{"./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js":(e,t,r)=>{r.d(t,{A:()=>o});var n=r("./node_modules/react/jsx-runtime.js");let o=function(e){return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,n.jsx)("path",{d:"m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,t,r)=>{r.d(t,{A:()=>i,G:()=>s});var n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={size:20,padding:0,rotate:0},i=n.default.span.withConfig({shouldForwardProp:(e,t)=>!["size","rotate","padding","inline","color"].includes(e)&&t(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,n.css)`
      background-image: url(${e});
    `}
  ${({size:e=s.size,padding:t=s.padding})=>(0,n.css)`
    width: ${e-2*t}px;
    height: ${e-2*t}px;
  `}
  ${({padding:e})=>e&&(0,n.css)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=s.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=s.size,padding:t=s.padding})=>(0,n.css)`
      width: ${e-2*t}px;
      height: ${e-2*t}px;
    `}
  }

  ${({color:e})=>e&&(0,o.G2)(e)};
`},"./node_modules/@amsterdam/asc-ui/es/components/Link/Link.js":(e,t,r)=>{r.d(t,{A:()=>x});var n=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js");let s=function(e){return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,n.jsx)("path",{d:"M19.006 0H32.01v12.992h-4.002V6.826L14.434 20.417l-2.83-2.818L25.187 3.998h-6.182V0zm7.002 13.991L26.018 32H.01V6.016h17.975l-3.98 3.978.02.02H4.01v17.988h18.006l-.01-10.013 4-3.998z",fillRule:"evenodd"})}))},i=function(e){return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,n.jsx)("path",{d:"M0 27.996h32V32H0v-4.004zm22.36-13.983 2.83 2.823L16 26.044l-9.19-9.208 2.83-2.823L14 18.377V0h4v18.377l4.36-4.364z"})}))};var a=r("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),l=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),d=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),u=r("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let p=(0,l.css)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`,m=(0,l.css)`
  color: ${(0,c.hm)("primary")};
  ${(0,c.G2)((0,c.hm)("primary"))};

  &:hover {
    color: ${(0,c.hm)("secondary")};
    ${(0,c.G2)((0,c.hm)("secondary"))};
  }
`,f=(0,l.css)`
  text-decoration: none;
  font-weight: 700;
  padding-right: ${(0,c.B7)(1)};
  color: ${(0,c.hm)("tint","level7")};

  &:hover {
    text-decoration: underline;
    color: ${(0,c.hm)("secondary")};
    ${(0,c.G2)((0,c.hm)("secondary"))};
  }
`,h=(0,l.default)(d.A)`
  display: inline;
`,g=(0,l.default)(h)`
  margin-right: ${(0,c.B7)(1)};
`,y=(0,l.default)(h)`
  margin-left: ${(0,c.B7)(2)};
`,b=l.default.span`
  width: 100%; /* IE11 Fix */
`,j=(0,l.default)(u.A)`
  display: inline-flex;
  ${({variant:e})=>{switch(e){case"blank":return p;case"inline":return m;default:return f}}}
  ${({darkBackground:e,$darkBackground:t})=>(e||t)&&(0,l.css)`
      &,
      &:hover {
        color: ${(0,c.hm)("tint","level1")};
        ${d.A} {
          ${(0,c.G2)((0,c.hm)("tint","level1"))}
        }
      }
    `};
`;var v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function O(e){var{children:t,variant:r,as:l,icon:c,inList:d}=e,u=v(e,["children","variant","as","icon","inList"]);return"with-chevron"===r&&(0,a.A)("Please note that the `with-chevron` variant will be deprecated soon, please use the `inList` prop"),c&&"string"!=typeof c&&(0,a.A)('Please note that passing a component to prop `icon` will be deprecated soon. If you need to use a custom Icon, just pass it as a child. If your link is a download or external link, you can pass `icon="download"` or `icon="external"`'),(0,n.jsxs)(j,Object.assign({},u,{variant:r,forwardedAs:l},{children:[(d||"with-chevron"===r)&&(0,n.jsx)(g,Object.assign({size:12},{children:(0,n.jsx)(o.A,{})})),d||"with-chevron"===r?(0,n.jsx)(b,{children:t}):t,("external"===c||"download"===c)&&(0,n.jsxs)(y,Object.assign({size:14},{children:["external"===c&&(0,n.jsx)(s,{}),"download"===c&&(0,n.jsx)(i,{})]})),c&&"string"!=typeof c&&c]}))}O.defaultProps={as:"a"};let x=O},"./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js":(e,t,r)=>{r.d(t,{A:()=>a});var n=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js"),s=r("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};let a=function(e){var{children:t}=e,r=i(e,["children"]);return r.color&&(0,s.A)("You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules"),(0,n.jsx)(o.A,Object.assign({},r,{children:t}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,t,r)=>{r.d(t,{A:()=>i});var n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={em:(0,n.css)`
    font-style: italic;
  `},i=n.default.p`
  ${({as:e,forwardedAs:t})=>{let r=null!=e?e:t;return"string"==typeof r&&s[r]}}
  margin: 0;
  ${(0,o.Jx)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:e})=>e&&(0,n.css)`
      font-weight: 700;
      color: ${(0,o.hm)("tint","level7")};
    `}
  ${({color:e})=>e&&(0,n.css)`
      color: ${(0,o.hm)(e)};
    `}
  ${({fontSize:e})=>e&&(0,n.css)`
      font-size: ${e}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js":(e,t,r)=>{r.d(t,{A:()=>n});let n=e=>{console.warn(e)}},"./src/common/src/DescriptionList/DescriptionList.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>S,WithLinks:()=>A,WithoutHeader:()=>D,__namedExportsOrder:()=>z,default:()=>B});var n=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=r("./node_modules/polished/dist/polished.esm.js"),i=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let a=o.default.span`
  margin-top: 0;
  display: inline-block;
  padding: ${(0,i.B7)(1)};
  ${({theme:e,colorType:t,colorSubtype:r})=>(0,o.css)`
    background-color: ${(0,i.hm)(t,r)({theme:e})};
    color: ${(0,s.W0)((0,i.hm)(t,r)({theme:e}))};
  `}
`;var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function c(e){var{children:t}=e,r=l(e,["children"]);return(0,n.jsx)(a,Object.assign({},r,{children:t}))}c.defaultProps={colorType:"primary",colorSubtype:"main"};var d=r("./node_modules/@amsterdam/asc-ui/es/components/Link/Link.js");function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(){var e=u([`
	display: flex;
	flex-direction: column;
	background-color: `,`;
	padding: 0 `,`;
	margin: `,` 0;
	width: 100%;
`]);return p=function(){return e},e}function m(){var e=u([`
	margin-bottom: 0;
`]);return m=function(){return e},e}function f(){var e=u([`
	margin: `,` 0;
`]);return f=function(){return e},e}function h(){var e=u([`
	&:not(:last-child) {
		margin-bottom: `,`;
	}
`]);return h=function(){return e},e}function g(){var e=u([`
	margin-bottom: `,`;
	font-weight: 400;
	font-size: 16px;
	line-height: 18px;
	color: `,`;
`]);return g=function(){return e},e}function y(){var e=u([`
	margin: 0;
	font-weight: 700;
	font-size: 16px;
	line-height: 18px;
	color: `,`;
`]);return y=function(){return e},e}function b(){var e=u([`
	margin: 0 0 `,` 0;
`]);return b=function(){return e},e}var j=o.default.div(p(),(0,i.hm)("tint","level2"),(0,i.B7)(4),(0,i.B7)(2)),v=o.default.h2(m()),O=o.default.dl(f(),(0,i.B7)(4)),x=o.default.div(h(),(0,i.B7)(4)),w=o.default.dt(g(),(0,i.B7)(2),(0,i.hm)("tint","level7")),_=o.default.dd(y(),(0,i.hm)("tint","level7")),$=o.default.div(b(),(0,i.B7)(4)),P=function(e){var t,r,o=e.heading,s=e.list,i=e.footer,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["heading","list","footer"]);return(0,n.jsxs)(j,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,s;n=e,o=t,s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}({"data-testid":"description"},a),r=r={children:[o&&(0,n.jsx)(v,{children:o}),(0,n.jsx)(O,{"data-testid":"description-list",children:s.map(function(e){return(0,n.jsxs)(x,{children:[(0,n.jsx)(w,{children:e.label}),(0,n.jsx)(_,{children:e.value})]},e.label)})}),i&&(0,n.jsx)($,{"data-testid":"description-footer",children:i})]},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))};try{P.displayName="DescriptionList",P.__docgenInfo={description:"",displayName:"DescriptionList",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"DescriptionList"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DescriptionList/DescriptionList.tsx#DescriptionList"]={docgenInfo:P.__docgenInfo,name:"DescriptionList",path:"src/common/src/DescriptionList/DescriptionList.tsx#DescriptionList"})}catch(e){}var L=function(e){return(0,n.jsx)(P,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,s;n=e,o=t,s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}({},e))},k=[{label:"Datum",value:"12-03-2021"},{label:"Batch",value:"Werkpakket Ingenieursdiensten contract PBK"},{label:"Conditie",value:(0,n.jsx)(c,{children:"Redelijk"})}],S=L.bind({});S.args={heading:"Ingenieursbureau werkpakket PBK",list:k};var D=L.bind({});D.args={list:k};var A=L.bind({});A.args={list:[{label:"Naam",value:(0,n.jsx)(d.A,{variant:"inline",href:"#",onClick:function(e){return e.preventDefault()},children:"BRU0315 Galgenbrug"})},{label:"Locatie",value:"Dijksgracht (centrum)"},{label:"Type",value:"Brug (vast)"},{label:"Bouwjaar",value:"1879"}],footer:(0,n.jsx)(d.A,{variant:"inline",href:"#",onClick:function(e){return e.preventDefault()},children:"Toon paspoortgegevens"})};let B={title:"common/DescriptionList",component:P};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <DescriptionList {...args} />",...S.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <DescriptionList {...args} />",...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"args => <DescriptionList {...args} />",...A.parameters?.docs?.source}}};let z=["Default","WithoutHeader","WithLinks"]}}]);