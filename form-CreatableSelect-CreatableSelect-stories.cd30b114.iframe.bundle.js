"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[874],{"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,t,n)=>{n.d(t,{Z:()=>l,l:()=>i});var o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={size:20,padding:0,rotate:0},a=o.ZP.span.withConfig({shouldForwardProp:(e,t)=>!["size","rotate","padding","inline","color"].includes(e)&&t(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,o.iv)`
      background-image: url(${e});
    `}
  ${({size:e=i.size,padding:t=i.padding})=>(0,o.iv)`
    width: ${e-2*t}px;
    height: ${e-2*t}px;
  `}
  ${({padding:e})=>e&&(0,o.iv)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=i.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=i.size,padding:t=i.padding})=>(0,o.iv)`
      width: ${e-2*t}px;
      height: ${e-2*t}px;
    `}
  }

  ${({color:e})=>e&&(0,r.yh)(e)};
`,l=a},"./src/form/CreatableSelect/CreatableSelect.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>K,MenuPortal:()=>et,Preselected:()=>X,WithError:()=>ee,WithLabel:()=>Q,default:()=>en});var o,r,i,a,l,c,s,u,d,p,m,b,f,v,g,h=n("./node_modules/react/jsx-runtime.js"),y=n("./node_modules/@babel/runtime/helpers/esm/extends.js"),O=n("./node_modules/react/index.js"),x=n("./node_modules/react-select/dist/Select-aecb2a80.esm.js"),j=n("./node_modules/react-select/dist/useStateManager-7e1e8489.esm.js"),C=n("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),S=n("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),w=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),P=n("./node_modules/react-select/dist/index-baa8dc4f.esm.js"),_=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,o=String(e).toLowerCase(),r=String(n.getOptionValue(t)).toLowerCase(),i=String(n.getOptionLabel(t)).toLowerCase();return r===o||i===o},$={formatCreateLabel:function(e){return'Create "'.concat(e,'"')},isValidNewOption:function(e,t,n,o){return!(!e||t.some(function(t){return k(e,t,o)})||n.some(function(t){return k(e,t,o)}))},getNewOptionData:function(e,t){return{label:t,value:e,__isNew__:!0}}};n("./node_modules/react-dom/index.js"),n("./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");var z=(0,O.forwardRef)(function(e,t){var n=function(e){var t=e.allowCreateWhileLoading,n=void 0!==t&&t,o=e.createOptionPosition,r=void 0===o?"last":o,i=e.formatCreateLabel,a=void 0===i?$.formatCreateLabel:i,l=e.isValidNewOption,c=void 0===l?$.isValidNewOption:l,s=e.getNewOptionData,u=void 0===s?$.getNewOptionData:s,d=e.onCreateOption,p=e.options,m=void 0===p?[]:p,b=e.onChange,f=(0,w.Z)(e,_),v=f.getOptionValue,g=void 0===v?x.g:v,h=f.getOptionLabel,y=void 0===h?x.b:h,j=f.inputValue,k=f.isLoading,z=f.isMulti,I=f.value,D=f.name,E=(0,O.useMemo)(function(){return c(j,(0,P.H)(I),m,{getOptionValue:g,getOptionLabel:y})?u(j,a(j)):void 0},[a,u,y,g,j,c,m,I]),L=(0,O.useMemo)(function(){return(n||!k)&&E?"first"===r?[E].concat((0,S.Z)(m)):[].concat((0,S.Z)(m),[E]):m},[n,r,k,E,m]),N=(0,O.useCallback)(function(e,t){if("select-option"!==t.action)return b(e,t);var n=Array.isArray(e)?e:[e];if(n[n.length-1]===E){if(d)d(j);else{var o=u(j,j);b((0,P.D)(z,[].concat((0,S.Z)((0,P.H)(I)),[o]),o),{action:"create-option",name:D,option:o})}return}b(e,t)},[u,j,z,D,E,d,b,I]);return(0,C.Z)((0,C.Z)({},f),{},{options:L,onChange:N})}((0,j.u)(e));return O.createElement(x.S,(0,y.Z)({ref:t},n))}),I=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),D=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),E=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");I.ZP.input.attrs({type:"checkbox"})`
  cursor: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 6px;
  top: 6px;
`;let L=(0,I.ZP)(E.Z)`
  display: flex;
  border-width: 1px;
  border-style: solid;
  width: 22px;
  height: 22px;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${(0,D.EN)("tint","level1")};
  transition: background-color 0.2s ease-in-out;
  pointer-events: none;
  ${({checked:e,indeterminate:t})=>(e||t)&&(0,I.iv)`
      color: ${(0,D.EN)("tint","level7")};
      background-color: ${(0,D.EN)("tint","level7")};
      ${(0,D.yh)((0,D.EN)("tint","level1"))};
    `};
`,N=I.ZP.span`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  margin-bottom: 1px;
  padding: 6px;
  flex-shrink: 0; /* IE11 fix */
  color: ${(0,D.EN)("tint","level5")};
  ${({disabled:e})=>e&&(0,I.iv)`
      pointer-events: none;
    `}
  ${({checked:e,disabled:t})=>!e&&!t&&(0,I.iv)`
      &:hover {
        color: ${(0,D.EN)("tint","level7")};

        ${L} {
          outline-style: solid;
          outline-width: 1px;
        }
      }
    `}
    ${({error:e,checked:t,disabled:n})=>e&&!t&&!n&&(0,I.iv)`
      ${L} {
        border-color: red;
        outline: 1px solid red;
      }
    `}
`,M=I.ZP.label`
  display: inline-flex;
  align-items: ${({align:e})=>e};
  vertical-align: middle;
  color: ${(0,D.EN)("tint","level7")};
  ${({srOnly:e})=>e&&D.Ri}
  ${({disabled:e})=>e?(0,I.iv)`
          opacity: 0.3;
        `:(0,I.iv)`
          cursor: pointer;
        `}
  ${({position:e})=>("top"===e||"bottom"===e)&&(0,I.iv)`
      flex-direction: column;
    `}
  ${({position:e})=>e&&(0,I.iv)`
      & ${N} {
        padding-${e}: 12px;
      }
    `}
  
  ${({active:e})=>e&&(0,I.iv)`
      font-weight: 700;
    `}
`;M.defaultProps={position:"right",align:"center"};let Z=I.ZP.span`
  ${({position:e})=>"top"!==e&&"bottom"!==e&&(0,I.iv)`
      margin: 9.2px 0; /* To align the label to a checkbox / radiobutton when having a long text. line-height is 1.15 / 18.4px (from normalize css). Margin top & bottom = lineheight / 2 */
    `}
  ${({position:e})=>"top"===e||"left"===e?(0,I.iv)`
          order: 0;
        `:(0,I.iv)`
          order: 1;
        `}
`,V=(e,t)=>{let n=O.Children.map(e,(e,n)=>(0,O.cloneElement)(e,"function"==typeof t?t(n):t));return{children:n}},A=(0,O.createContext)({active:!1,setActive:()=>{}});var W=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};function R(e){var{children:t,label:n,disabled:o,position:r,noActiveState:i}=e,a=W(e,["children","label","disabled","position","noActiveState"]);let[l,c]=(0,O.useState)(!1),{children:s}=V(t,{disabled:o}),u=!i&&l,d=(0,O.useMemo)(()=>({active:l,setActive:c}),[l]);return(0,h.jsx)(A.Provider,Object.assign({value:d},{children:(0,h.jsxs)(M,Object.assign({},Object.assign(Object.assign({},a),{disabled:o,position:r}),{active:u},{children:[(0,h.jsx)(Z,Object.assign({position:r},{children:n})),s]}))}))}R.defaultProps={noActiveState:!1};var F=n("./src/form/Select/SelectStyles.ts");function T(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n	font-weight: 700;\n"]);return T=function(){return e},e}var Y=(0,I.ZP)(R)(T());function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}var B=function(e){var t=e.inputId,n=e.label,o=e.options,r=e.value,i=e.error,a=e.createLabel,l=void 0===a?"Voeg toe":a,c=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["inputId","label","options","value","error","createLabel"]);return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(Y,{htmlFor:t,label:n}),(0,h.jsx)(z,q({styles:(0,F.J)(q({error:i},c)),value:r,inputId:t,openMenuOnFocus:!0,formatCreateLabel:function(e){return"".concat(l,' "').concat(e,'"')},options:o,menuPlacement:"auto"},c))]})};try{B.displayName="CreatableSelect",B.__docgenInfo={description:"",displayName:"CreatableSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},createLabel:{defaultValue:{value:"Voeg toe"},description:"",name:"createLabel",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},zIndexMenu:{defaultValue:null,description:"",name:"zIndexMenu",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form/CreatableSelect/CreatableSelect.tsx#CreatableSelect"]={docgenInfo:B.__docgenInfo,name:"CreatableSelect",path:"src/form/CreatableSelect/CreatableSelect.tsx#CreatableSelect"})}catch(e){}var H=n("./src/form/Select/__stubs__/options.ts");function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function U(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var G=function(e){var t=e.id,n=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["id"]);return(0,h.jsx)(B,J({inputId:void 0===t?"creatable-demo":t,isClearable:!0,onChange:function(e){return console.log("onChange",e)},options:H.Y,menuPlacement:"bottom"},n))},K=G.bind({});K.args={zIndexMenu:9999};var Q=G.bind({});Q.args={label:"Documentomschrijving"};var X=G.bind({});X.args={label:"Documentomschrijving",value:H.Y[3]};var ee=G.bind({});ee.args={label:"Documentomschrijving",value:"",error:!0};var et=G.bind({});et.storyName="Menu in portal",et.args={menuPortalTarget:document.body,zIndexMenu:9999,label:"Documentomschrijving",value:""};let en={title:"form/CreatableSelect",component:B,argTypes:{isClearable:{control:"boolean"},isDisabled:{control:"boolean"},isMulti:{control:"boolean"},isSearchable:{control:"boolean"},isLoading:{control:"boolean"},onChange:{action:"change"}}};K.parameters=U(J({},K.parameters),{docs:U(J({},null===(o=K.parameters)||void 0===o?void 0:o.docs),{source:J({originalSource:"({\n  id = 'creatable-demo',\n  ...props\n}) => {\n  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement=\"bottom\" {...props} />;\n}"},null===(i=K.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})}),Q.parameters=U(J({},Q.parameters),{docs:U(J({},null===(a=Q.parameters)||void 0===a?void 0:a.docs),{source:J({originalSource:"({\n  id = 'creatable-demo',\n  ...props\n}) => {\n  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement=\"bottom\" {...props} />;\n}"},null===(c=Q.parameters)||void 0===c?void 0:null===(l=c.docs)||void 0===l?void 0:l.source)})}),X.parameters=U(J({},X.parameters),{docs:U(J({},null===(s=X.parameters)||void 0===s?void 0:s.docs),{source:J({originalSource:"({\n  id = 'creatable-demo',\n  ...props\n}) => {\n  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement=\"bottom\" {...props} />;\n}"},null===(d=X.parameters)||void 0===d?void 0:null===(u=d.docs)||void 0===u?void 0:u.source)})}),ee.parameters=U(J({},ee.parameters),{docs:U(J({},null===(p=ee.parameters)||void 0===p?void 0:p.docs),{source:J({originalSource:"({\n  id = 'creatable-demo',\n  ...props\n}) => {\n  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement=\"bottom\" {...props} />;\n}"},null===(b=ee.parameters)||void 0===b?void 0:null===(m=b.docs)||void 0===m?void 0:m.source)})}),et.parameters=U(J({},et.parameters),{docs:U(J({},null===(f=et.parameters)||void 0===f?void 0:f.docs),{source:J({originalSource:"({\n  id = 'creatable-demo',\n  ...props\n}) => {\n  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement=\"bottom\" {...props} />;\n}"},null===(g=et.parameters)||void 0===g?void 0:null===(v=g.docs)||void 0===v?void 0:v.source)})})},"./src/form/Select/SelectStyles.ts":(e,t,n)=>{n.d(t,{J:()=>p,i:()=>d});var o=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),r=n("./node_modules/@amsterdam/asc-ui/es/theme/default/index.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function c(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n	border-right: 3px solid;\n	border-bottom: 3px solid;\n	height: 11px;\n	width: 11px;\n	transform: rotate(45deg) translateY(-4px);\n	border-color: inherit;\n"]);return c=function(){return e},e}var s=function(e,t,n){return(0,o.EN)(e,t,n)({theme:r})},u=function(e,t,n,i){return(0,o.QJ)(e,t,n,i)({theme:r})},d=i.ZP.span(c());function p(e){var t=e.error,n=void 0!==t&&t,o=e.maxWidth,r=void 0===o?"100%":o,i=e.zIndexMenu;return{container:function(e){return l(a({},e),{maxWidth:r||"100%"})},control:function(e,t){var o=t.isFocused,r=t.isDisabled;return l(a({},e),{pointerEvents:r?"none":"auto",borderWidth:"1px",borderColor:"".concat(r?s("tint","level4"):n?s("support","invalid"):s("primary")),backgroundColor:"".concat(s("tint","level1")),borderRadius:0,boxShadow:"".concat(r?"none":o?"inset 0 0 0 1px ".concat(s("primary")):"none"),"&:hover":{boxShadow:n?"inset 0 0 0 1px ".concat(s("support","invalid")):"inset 0 0 0 1px ".concat(s("primary"))},color:"".concat(r?s("tint","level5"):o?s("primary","dark"):s("primary")),height:"48px"})},menuList:function(e){return l(a({},e),{padding:"0",maxHeight:"calc(8 * 48px)"})},valueContainer:function(e,t){var n=t.isDisabled;return l(a({},e),{color:"".concat(n?s("tint","level4"):s("primary")),padding:"".concat(u(0,3)),fontSize:"18px"})},dropdownIndicator:function(e,t){var n=t.isFocused,o=t.isDisabled;return l(a({},e),{color:"".concat(o?s("tint","level3"):n?s("primary","dark"):s("primary")),"&:hover":{color:"".concat(s("primary","dark"))}})},indicatorsContainer:function(e){return l(a({},e),{paddingRight:"".concat(u(3)),color:"".concat(s("primary"))})},indicatorSeparator:function(){return{display:"none"}},noOptionsMessage:function(e){return l(a({},e),{padding:"".concat(u(0,3)),height:"48px",fontSize:"18px",backgroundColor:"".concat(s("tint","level1")),display:"flex",alignItems:"center",justifyContent:"spaceEvenly"})},option:function(e,t){var n=t.isFocused,o=t.isDisabled,r=t.isSelected;return l(a({},e),{padding:"".concat(u(0,3)),justifyContent:"space-between",display:"flex",alignItems:"center",color:o?"".concat(s("tint","level3")):r?"".concat(s("tint","level1")):n?"".concat(s("tint","level1")):"".concat(s("primary")),height:"48px",fontSize:"18px",backgroundColor:o?"".concat(s("tint","level1")):r?"".concat(s("primary")):n?"".concat(s("primary")):"".concat(s("tint","level1")),":active":{backgroundColor:"".concat(s("primary"))},"::after":{content:r?'""':void 0,float:"right",border:"solid ".concat(s("tint","level1")),borderWidth:"0 3px 3px 0",transform:"rotate(45deg) translate(-5px, 0)",width:"10px",height:"18px"}})},singleValue:function(e){return l(a({},e),{color:"".concat(s("tint","level7"))})},placeholder:function(e){return l(a({},e),{color:"".concat(s("tint","level5"))})},menu:function(e){return l(a({},e),{borderRadius:"0",margin:"0",zIndex:i||e.zIndex,padding:"0 2px 2px 2px",boxShadow:"inset 0 0 0 2px ".concat(s("primary"))})},menuPortal:function(e){return i?l(a({},e),{zIndex:i}):e}}}},"./src/form/Select/__stubs__/options.ts":(e,t,n)=>{n.d(t,{Y:()=>o});var o=["Archeologisch (voor)onderzoek","Archiefonderzoek","Bomeninventarisatie en –onderzoek","Bouwkundig onderzoek","Flora- en faunaonderzoek","(Geo)hydrologisch onderzoek","Geotechnisch onderzoek","Materiaalonderzoek","Milieukundig onderzoek","Onderzoek gevaarlijke stoffen","Toets Constructieve Veiligheid","Milieutechnisch onderzoek"].map(function(e){return{label:e,value:e.toLowerCase().replace(/\W/g,"")}})}}]);