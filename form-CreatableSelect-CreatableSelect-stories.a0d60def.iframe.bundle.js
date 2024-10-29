"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[297],{"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,t,n)=>{n.d(t,{A:()=>l,G:()=>i});var o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={size:20,padding:0,rotate:0},a=o.Ay.span.withConfig({shouldForwardProp:(e,t)=>!["size","rotate","padding","inline","color"].includes(e)&&t(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,o.AH)`
      background-image: url(${e});
    `}
  ${({size:e=i.size,padding:t=i.padding})=>(0,o.AH)`
    width: ${e-2*t}px;
    height: ${e-2*t}px;
  `}
  ${({padding:e})=>e&&(0,o.AH)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=i.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=i.size,padding:t=i.padding})=>(0,o.AH)`
      width: ${e-2*t}px;
      height: ${e-2*t}px;
    `}
  }

  ${({color:e})=>e&&(0,r.G2)(e)};
`,l=a},"./src/form/CreatableSelect/CreatableSelect.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>Q,MenuPortal:()=>et,Preselected:()=>Z,WithError:()=>ee,WithLabel:()=>X,default:()=>en});var o,r,i,a,l,c,s,u,d,p,m,b,f,g,v,h=n("./node_modules/react/jsx-runtime.js"),y=n("./node_modules/@babel/runtime/helpers/esm/extends.js"),O=n("./node_modules/react/index.js"),x=n("./node_modules/react-select/dist/Select-aecb2a80.esm.js"),j=n("./node_modules/react-select/dist/useStateManager-7e1e8489.esm.js"),w=n("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),C=n("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),S=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),P=n("./node_modules/react-select/dist/index-baa8dc4f.esm.js"),_=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,o=String(e).toLowerCase(),r=String(n.getOptionValue(t)).toLowerCase(),i=String(n.getOptionLabel(t)).toLowerCase();return r===o||i===o},k={formatCreateLabel:function(e){return'Create "'.concat(e,'"')},isValidNewOption:function(e,t,n,o){return!(!e||t.some(function(t){return A(e,t,o)})||n.some(function(t){return A(e,t,o)}))},getNewOptionData:function(e,t){return{label:t,value:e,__isNew__:!0}}};n("./node_modules/react-dom/index.js"),n("./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");var $=(0,O.forwardRef)(function(e,t){var n=function(e){var t=e.allowCreateWhileLoading,n=void 0!==t&&t,o=e.createOptionPosition,r=void 0===o?"last":o,i=e.formatCreateLabel,a=void 0===i?k.formatCreateLabel:i,l=e.isValidNewOption,c=void 0===l?k.isValidNewOption:l,s=e.getNewOptionData,u=void 0===s?k.getNewOptionData:s,d=e.onCreateOption,p=e.options,m=void 0===p?[]:p,b=e.onChange,f=(0,S.A)(e,_),g=f.getOptionValue,v=void 0===g?x.g:g,h=f.getOptionLabel,y=void 0===h?x.b:h,j=f.inputValue,A=f.isLoading,$=f.isMulti,z=f.value,I=f.name,D=(0,O.useMemo)(function(){return c(j,(0,P.H)(z),m,{getOptionValue:v,getOptionLabel:y})?u(j,a(j)):void 0},[a,u,y,v,j,c,m,z]),L=(0,O.useMemo)(function(){return(n||!A)&&D?"first"===r?[D].concat((0,C.A)(m)):[].concat((0,C.A)(m),[D]):m},[n,r,A,D,m]),H=(0,O.useCallback)(function(e,t){if("select-option"!==t.action)return b(e,t);var n=Array.isArray(e)?e:[e];if(n[n.length-1]===D){if(d)d(j);else{var o=u(j,j);b((0,P.D)($,[].concat((0,C.A)((0,P.H)(z)),[o]),o),{action:"create-option",name:I,option:o})}return}b(e,t)},[u,j,$,I,D,d,b,z]);return(0,w.A)((0,w.A)({},f),{},{options:L,onChange:H})}((0,j.u)(e));return O.createElement(x.S,(0,y.A)({ref:t},n))}),z=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),I=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),D=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");z.Ay.input.attrs({type:"checkbox"})`
  cursor: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 6px;
  top: 6px;
`;let L=(0,z.Ay)(D.A)`
  display: flex;
  border-width: 1px;
  border-style: solid;
  width: 22px;
  height: 22px;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${(0,I.hm)("tint","level1")};
  transition: background-color 0.2s ease-in-out;
  pointer-events: none;
  ${({checked:e,indeterminate:t})=>(e||t)&&(0,z.AH)`
      color: ${(0,I.hm)("tint","level7")};
      background-color: ${(0,I.hm)("tint","level7")};
      ${(0,I.G2)((0,I.hm)("tint","level1"))};
    `};
`,H=z.Ay.span`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  margin-bottom: 1px;
  padding: 6px;
  flex-shrink: 0; /* IE11 fix */
  color: ${(0,I.hm)("tint","level5")};
  ${({disabled:e})=>e&&(0,z.AH)`
      pointer-events: none;
    `}
  ${({checked:e,disabled:t})=>!e&&!t&&(0,z.AH)`
      &:hover {
        color: ${(0,I.hm)("tint","level7")};

        ${L} {
          outline-style: solid;
          outline-width: 1px;
        }
      }
    `}
    ${({error:e,checked:t,disabled:n})=>e&&!t&&!n&&(0,z.AH)`
      ${L} {
        border-color: red;
        outline: 1px solid red;
      }
    `}
`,M=z.Ay.label`
  display: inline-flex;
  align-items: ${({align:e})=>e};
  vertical-align: middle;
  color: ${(0,I.hm)("tint","level7")};
  ${({srOnly:e})=>e&&I.Du}
  ${({disabled:e})=>e?(0,z.AH)`
          opacity: 0.3;
        `:(0,z.AH)`
          cursor: pointer;
        `}
  ${({position:e})=>("top"===e||"bottom"===e)&&(0,z.AH)`
      flex-direction: column;
    `}
  ${({position:e})=>e&&(0,z.AH)`
      & ${H} {
        padding-${e}: 12px;
      }
    `}
  
  ${({active:e})=>e&&(0,z.AH)`
      font-weight: 700;
    `}
`;M.defaultProps={position:"right",align:"center"};let E=z.Ay.span`
  ${({position:e})=>"top"!==e&&"bottom"!==e&&(0,z.AH)`
      margin: 9.2px 0; /* To align the label to a checkbox / radiobutton when having a long text. line-height is 1.15 / 18.4px (from normalize css). Margin top & bottom = lineheight / 2 */
    `}
  ${({position:e})=>"top"===e||"left"===e?(0,z.AH)`
          order: 0;
        `:(0,z.AH)`
          order: 1;
        `}
`,V=(e,t)=>{let n=O.Children.map(e,(e,n)=>(0,O.cloneElement)(e,"function"==typeof t?t(n):t));return{children:n}},N=(0,O.createContext)({active:!1,setActive:()=>{}});var W=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};function F(e){var{children:t,label:n,disabled:o,position:r,noActiveState:i}=e,a=W(e,["children","label","disabled","position","noActiveState"]);let[l,c]=(0,O.useState)(!1),{children:s}=V(t,{disabled:o}),u=!i&&l,d=(0,O.useMemo)(()=>({active:l,setActive:c}),[l]);return(0,h.jsx)(N.Provider,Object.assign({value:d},{children:(0,h.jsxs)(M,Object.assign({},Object.assign(Object.assign({},a),{disabled:o,position:r}),{active:u},{children:[(0,h.jsx)(E,Object.assign({position:r},{children:n})),s]}))}))}F.defaultProps={noActiveState:!1};var R=n("./src/form/Select/SelectStyles.ts");function T(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n	font-weight: 700;\n"]);return T=function(){return e},e}var B=(0,z.Ay)(F)(T());function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}var q=function(e){var t=e.inputId,n=e.label,o=e.options,r=e.value,i=e.error,a=e.createLabel,l=void 0===a?"Voeg toe":a,c=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["inputId","label","options","value","error","createLabel"]);return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(B,{htmlFor:t,label:n}),(0,h.jsx)($,G({styles:(0,R.m)(G({error:i},c)),value:r,inputId:t,openMenuOnFocus:!0,formatCreateLabel:function(e){return"".concat(l,' "').concat(e,'"')},options:o,menuPlacement:"auto"},c))]})};try{q.displayName="CreatableSelect",q.__docgenInfo={description:"",displayName:"CreatableSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},createLabel:{defaultValue:{value:"Voeg toe"},description:"",name:"createLabel",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},zIndexMenu:{defaultValue:null,description:"",name:"zIndexMenu",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form/CreatableSelect/CreatableSelect.tsx#CreatableSelect"]={docgenInfo:q.__docgenInfo,name:"CreatableSelect",path:"src/form/CreatableSelect/CreatableSelect.tsx#CreatableSelect"})}catch(e){}var U=n("./src/form/Select/__stubs__/options.ts");function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function K(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var J=function(e){var t=e.id,n=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["id"]);return(0,h.jsx)(q,Y({inputId:void 0===t?"creatable-demo":t,isClearable:!0,onChange:function(e){return console.log("onChange",e)},options:U.f,menuPlacement:"bottom"},n))},Q=J.bind({});Q.args={zIndexMenu:9999};var X=J.bind({});X.args={label:"Documentomschrijving"};var Z=J.bind({});Z.args={label:"Documentomschrijving",value:U.f[3]};var ee=J.bind({});ee.args={label:"Documentomschrijving",value:"",error:!0};var et=J.bind({});et.storyName="Menu in portal",et.args={menuPortalTarget:document.body,zIndexMenu:9999,label:"Documentomschrijving",value:""};let en={title:"form/CreatableSelect",component:q,argTypes:{isClearable:{control:"boolean"},isDisabled:{control:"boolean"},isMulti:{control:"boolean"},isSearchable:{control:"boolean"},isLoading:{control:"boolean"},onChange:{action:"change"}}};Q.parameters=K(Y({},Q.parameters),{docs:K(Y({},null===(o=Q.parameters)||void 0===o?void 0:o.docs),{source:Y({originalSource:"({\n  id = 'creatable-demo',\n  ...props\n}) => {\n  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement=\"bottom\" {...props} />;\n}"},null===(i=Q.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})}),X.parameters=K(Y({},X.parameters),{docs:K(Y({},null===(a=X.parameters)||void 0===a?void 0:a.docs),{source:Y({originalSource:"({\n  id = 'creatable-demo',\n  ...props\n}) => {\n  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement=\"bottom\" {...props} />;\n}"},null===(c=X.parameters)||void 0===c?void 0:null===(l=c.docs)||void 0===l?void 0:l.source)})}),Z.parameters=K(Y({},Z.parameters),{docs:K(Y({},null===(s=Z.parameters)||void 0===s?void 0:s.docs),{source:Y({originalSource:"({\n  id = 'creatable-demo',\n  ...props\n}) => {\n  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement=\"bottom\" {...props} />;\n}"},null===(d=Z.parameters)||void 0===d?void 0:null===(u=d.docs)||void 0===u?void 0:u.source)})}),ee.parameters=K(Y({},ee.parameters),{docs:K(Y({},null===(p=ee.parameters)||void 0===p?void 0:p.docs),{source:Y({originalSource:"({\n  id = 'creatable-demo',\n  ...props\n}) => {\n  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement=\"bottom\" {...props} />;\n}"},null===(b=ee.parameters)||void 0===b?void 0:null===(m=b.docs)||void 0===m?void 0:m.source)})}),et.parameters=K(Y({},et.parameters),{docs:K(Y({},null===(f=et.parameters)||void 0===f?void 0:f.docs),{source:Y({originalSource:"({\n  id = 'creatable-demo',\n  ...props\n}) => {\n  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement=\"bottom\" {...props} />;\n}"},null===(v=et.parameters)||void 0===v?void 0:null===(g=v.docs)||void 0===g?void 0:g.source)})})},"./src/form/Select/SelectStyles.ts":(e,t,n)=>{n.d(t,{m:()=>p,w:()=>d});var o=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),r=n("./node_modules/@amsterdam/asc-ui/es/theme/default/index.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function c(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n	border-right: 3px solid;\n	border-bottom: 3px solid;\n	height: 11px;\n	width: 11px;\n	transform: rotate(45deg) translateY(-4px);\n	border-color: inherit;\n"]);return c=function(){return e},e}var s=function(e,t,n){return(0,o.hm)(e,t,n)({theme:r})},u=function(e,t,n,i){return(0,o.B7)(e,t,n,i)({theme:r})},d=i.Ay.span(c());function p(e){var t=e.error,n=void 0!==t&&t,o=e.maxWidth,r=void 0===o?"100%":o,i=e.zIndexMenu;return{container:function(e){return l(a({},e),{maxWidth:r||"100%"})},control:function(e,t){var o=t.isFocused,r=t.isDisabled;return l(a({},e),{pointerEvents:r?"none":"auto",borderWidth:"1px",borderColor:"".concat(r?s("tint","level4"):n?s("support","invalid"):s("primary")),backgroundColor:"".concat(s("tint","level1")),borderRadius:0,boxShadow:"".concat(r?"none":o?"inset 0 0 0 1px ".concat(s("primary")):"none"),"&:hover":{boxShadow:n?"inset 0 0 0 1px ".concat(s("support","invalid")):"inset 0 0 0 1px ".concat(s("primary"))},color:"".concat(r?s("tint","level5"):o?s("primary","dark"):s("primary")),height:"48px"})},menuList:function(e){return l(a({},e),{padding:"0",maxHeight:"calc(8 * 48px)"})},valueContainer:function(e,t){var n=t.isDisabled;return l(a({},e),{color:"".concat(n?s("tint","level4"):s("primary")),padding:"".concat(u(0,3)),fontSize:"18px"})},dropdownIndicator:function(e,t){var n=t.isFocused,o=t.isDisabled;return l(a({},e),{color:"".concat(o?s("tint","level3"):n?s("primary","dark"):s("primary")),"&:hover":{color:"".concat(s("primary","dark"))}})},indicatorsContainer:function(e){return l(a({},e),{paddingRight:"".concat(u(3)),color:"".concat(s("primary"))})},indicatorSeparator:function(){return{display:"none"}},noOptionsMessage:function(e){return l(a({},e),{padding:"".concat(u(0,3)),height:"48px",fontSize:"18px",backgroundColor:"".concat(s("tint","level1")),display:"flex",alignItems:"center",justifyContent:"spaceEvenly"})},option:function(e,t){var n=t.isFocused,o=t.isDisabled,r=t.isSelected;return l(a({},e),{padding:"".concat(u(0,3)),justifyContent:"space-between",display:"flex",alignItems:"center",color:o?"".concat(s("tint","level3")):r?"".concat(s("tint","level1")):n?"".concat(s("tint","level1")):"".concat(s("primary")),height:"48px",fontSize:"18px",backgroundColor:o?"".concat(s("tint","level1")):r?"".concat(s("primary")):n?"".concat(s("primary")):"".concat(s("tint","level1")),":active":{backgroundColor:"".concat(s("primary"))},"::after":{content:r?'""':void 0,float:"right",border:"solid ".concat(s("tint","level1")),borderWidth:"0 3px 3px 0",transform:"rotate(45deg) translate(-5px, 0)",width:"10px",height:"18px"}})},singleValue:function(e){return l(a({},e),{color:"".concat(s("tint","level7"))})},placeholder:function(e){return l(a({},e),{color:"".concat(s("tint","level5"))})},menu:function(e){return l(a({},e),{borderRadius:"0",margin:"0",zIndex:i||e.zIndex,padding:"0 2px 2px 2px",boxShadow:"inset 0 0 0 2px ".concat(s("primary"))})},menuPortal:function(e){return i?l(a({},e),{zIndex:i}):e}}}},"./src/form/Select/__stubs__/options.ts":(e,t,n)=>{n.d(t,{f:()=>o});var o=["Archeologisch (voor)onderzoek","Archiefonderzoek","Bomeninventarisatie en –onderzoek","Bouwkundig onderzoek","Flora- en faunaonderzoek","(Geo)hydrologisch onderzoek","Geotechnisch onderzoek","Materiaalonderzoek","Milieukundig onderzoek","Onderzoek gevaarlijke stoffen","Toets Constructieve Veiligheid","Milieutechnisch onderzoek"].map(function(e){return{label:e,value:e.toLowerCase().replace(/\W/g,"")}})}}]);