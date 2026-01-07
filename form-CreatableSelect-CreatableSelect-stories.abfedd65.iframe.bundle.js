"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[297],{"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,t,o)=>{o.d(t,{A:()=>i,G:()=>a});var r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let a={size:20,padding:0,rotate:0},i=r.default.span.withConfig({shouldForwardProp:(e,t)=>!["size","rotate","padding","inline","color"].includes(e)&&t(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,r.css)`
      background-image: url(${e});
    `}
  ${({size:e=a.size,padding:t=a.padding})=>(0,r.css)`
    width: ${e-2*t}px;
    height: ${e-2*t}px;
  `}
  ${({padding:e})=>e&&(0,r.css)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=a.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=a.size,padding:t=a.padding})=>(0,r.css)`
      width: ${e-2*t}px;
      height: ${e-2*t}px;
    `}
  }

  ${({color:e})=>e&&(0,n.G2)(e)};
`},"./src/form/CreatableSelect/CreatableSelect.stories.tsx":(e,t,o)=>{o.r(t),o.d(t,{Default:()=>M,MenuPortal:()=>F,Preselected:()=>V,WithError:()=>W,WithLabel:()=>E,__namedExportsOrder:()=>R,default:()=>N});var r=o("./node_modules/react/jsx-runtime.js"),n=o("./node_modules/@babel/runtime/helpers/esm/extends.js"),a=o("./node_modules/react/index.js"),i=o("./node_modules/react-select/dist/Select-ef7c0426.esm.js"),l=o("./node_modules/react-select/dist/useStateManager-7e1e8489.esm.js"),s=o("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),c=o("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),d=o("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),u=o("./node_modules/react-select/dist/index-641ee5b8.esm.js"),p=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,r=String(e).toLowerCase(),n=String(o.getOptionValue(t)).toLowerCase(),a=String(o.getOptionLabel(t)).toLowerCase();return n===r||a===r},b=function(e){return'Create "'.concat(e,'"')},f=function(e,t,o,r){return!(!e||t.some(function(t){return m(e,t,r)})||o.some(function(t){return m(e,t,r)}))},g=function(e,t){return{label:t,value:e,__isNew__:!0}};o("./node_modules/react-dom/index.js"),o("./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");var h=(0,a.forwardRef)(function(e,t){var o,r,m,h,v,y,x,O,j,C,S,w,_,P,k,$,z,I,L,A,D,M,E,V,W,F,N,R,T=(m=void 0!==(r=(o=(0,l.u)(e)).allowCreateWhileLoading)&&r,v=void 0===(h=o.createOptionPosition)?"last":h,x=void 0===(y=o.formatCreateLabel)?b:y,j=void 0===(O=o.isValidNewOption)?f:O,S=void 0===(C=o.getNewOptionData)?g:C,w=o.onCreateOption,P=void 0===(_=o.options)?[]:_,k=o.onChange,I=void 0===(z=($=(0,d.A)(o,p)).getOptionValue)?i.g:z,A=void 0===(L=$.getOptionLabel)?i.b:L,D=$.inputValue,M=$.isLoading,E=$.isMulti,V=$.value,W=$.name,F=(0,a.useMemo)(function(){return j(D,(0,u.H)(V),P,{getOptionValue:I,getOptionLabel:A})?S(D,x(D)):void 0},[x,S,A,I,D,j,P,V]),N=(0,a.useMemo)(function(){return(m||!M)&&F?"first"===v?[F].concat((0,c.A)(P)):[].concat((0,c.A)(P),[F]):P},[m,v,M,F,P]),R=(0,a.useCallback)(function(e,t){if("select-option"!==t.action)return k(e,t);var o=Array.isArray(e)?e:[e];if(o[o.length-1]===F){if(w)w(D);else{var r=S(D,D);k((0,u.D)(E,[].concat((0,c.A)((0,u.H)(V)),[r]),r),{action:"create-option",name:W,option:r})}return}k(e,t)},[S,D,E,W,F,w,k,V]),(0,s.A)((0,s.A)({},$),{},{options:N,onChange:R}));return a.createElement(i.S,(0,n.A)({ref:t},T))}),v=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),y=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),x=o("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");v.default.input.attrs({type:"checkbox"})`
  cursor: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 6px;
  top: 6px;
`;let O=(0,v.default)(x.A)`
  display: flex;
  border-width: 1px;
  border-style: solid;
  width: 22px;
  height: 22px;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${(0,y.hm)("tint","level1")};
  transition: background-color 0.2s ease-in-out;
  pointer-events: none;
  ${({checked:e,indeterminate:t})=>(e||t)&&(0,v.css)`
      color: ${(0,y.hm)("tint","level7")};
      background-color: ${(0,y.hm)("tint","level7")};
      ${(0,y.G2)((0,y.hm)("tint","level1"))};
    `};
`,j=v.default.span`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  margin-bottom: 1px;
  padding: 6px;
  flex-shrink: 0; /* IE11 fix */
  color: ${(0,y.hm)("tint","level5")};
  ${({disabled:e})=>e&&(0,v.css)`
      pointer-events: none;
    `}
  ${({checked:e,disabled:t})=>!e&&!t&&(0,v.css)`
      &:hover {
        color: ${(0,y.hm)("tint","level7")};

        ${O} {
          outline-style: solid;
          outline-width: 1px;
        }
      }
    `}
    ${({error:e,checked:t,disabled:o})=>e&&!t&&!o&&(0,v.css)`
      ${O} {
        border-color: red;
        outline: 1px solid red;
      }
    `}
`,C=v.default.label`
  display: inline-flex;
  align-items: ${({align:e})=>e};
  vertical-align: middle;
  color: ${(0,y.hm)("tint","level7")};
  ${({srOnly:e})=>e&&y.Du}
  ${({disabled:e})=>e?(0,v.css)`
          opacity: 0.3;
        `:(0,v.css)`
          cursor: pointer;
        `}
  ${({position:e})=>("top"===e||"bottom"===e)&&(0,v.css)`
      flex-direction: column;
    `}
  ${({position:e})=>e&&(0,v.css)`
      & ${j} {
        padding-${e}: 12px;
      }
    `}
  
  ${({active:e})=>e&&(0,v.css)`
      font-weight: 700;
    `}
`;C.defaultProps={position:"right",align:"center"};let S=v.default.span`
  ${({position:e})=>"top"!==e&&"bottom"!==e&&(0,v.css)`
      margin: 9.2px 0; /* To align the label to a checkbox / radiobutton when having a long text. line-height is 1.15 / 18.4px (from normalize css). Margin top & bottom = lineheight / 2 */
    `}
  ${({position:e})=>"top"===e||"left"===e?(0,v.css)`
          order: 0;
        `:(0,v.css)`
          order: 1;
        `}
`,w=(0,a.createContext)({active:!1,setActive:()=>{}});var _=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};function P(e){var t,{children:o,label:n,disabled:i,position:l,noActiveState:s}=e,c=_(e,["children","label","disabled","position","noActiveState"]);let[d,u]=(0,a.useState)(!1),{children:p}=(t={disabled:i},{children:a.Children.map(o,(e,o)=>(0,a.cloneElement)(e,"function"==typeof t?t(o):t))}),m=!s&&d,b=(0,a.useMemo)(()=>({active:d,setActive:u}),[d]);return(0,r.jsx)(w.Provider,Object.assign({value:b},{children:(0,r.jsxs)(C,Object.assign({},Object.assign(Object.assign({},c),{disabled:i,position:l}),{active:m},{children:[(0,r.jsx)(S,Object.assign({position:l},{children:n})),p]}))}))}P.defaultProps={noActiveState:!1};var k=o("./src/form/Select/SelectStyles.ts");function $(){var e,t,o=(e=[`
	font-weight: 700;
`],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return $=function(){return o},o}var z=(0,v.default)(P)($());function I(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){var r;r=o[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}var L=function(e){var t=e.inputId,o=e.label,n=e.options,a=e.value,i=e.error,l=e.createLabel,s=void 0===l?"Voeg toe":l,c=function(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["inputId","label","options","value","error","createLabel"]);return(0,r.jsxs)(r.Fragment,{children:[o&&(0,r.jsx)(z,{htmlFor:t,label:o}),(0,r.jsx)(h,I({styles:(0,k.m)(I({error:i},c)),value:a,inputId:t,openMenuOnFocus:!0,formatCreateLabel:function(e){return"".concat(s,' "').concat(e,'"')},options:n,menuPlacement:"auto"},c))]})};try{L.displayName="CreatableSelect",L.__docgenInfo={description:"",displayName:"CreatableSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},createLabel:{defaultValue:{value:"Voeg toe"},description:"",name:"createLabel",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},zIndexMenu:{defaultValue:null,description:"",name:"zIndexMenu",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form/CreatableSelect/CreatableSelect.tsx#CreatableSelect"]={docgenInfo:L.__docgenInfo,name:"CreatableSelect",path:"src/form/CreatableSelect/CreatableSelect.tsx#CreatableSelect"})}catch(e){}var A=o("./src/form/Select/__stubs__/options.ts"),D=function(e){var t=e.id,o=function(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["id"]);return(0,r.jsx)(L,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){var r,n,a;r=e,n=t,a=o[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a})}return e}({inputId:void 0===t?"creatable-demo":t,isClearable:!0,onChange:function(e){return console.log("onChange",e)},options:A.f,menuPlacement:"bottom"},o))},M=D.bind({});M.args={zIndexMenu:9999};var E=D.bind({});E.args={label:"Documentomschrijving"};var V=D.bind({});V.args={label:"Documentomschrijving",value:A.f[3]};var W=D.bind({});W.args={label:"Documentomschrijving",value:"",error:!0};var F=D.bind({});F.storyName="Menu in portal",F.args={menuPortalTarget:document.body,zIndexMenu:9999,label:"Documentomschrijving",value:""};let N={title:"form/CreatableSelect",component:L,argTypes:{isClearable:{control:"boolean"},isDisabled:{control:"boolean"},isMulti:{control:"boolean"},isSearchable:{control:"boolean"},isLoading:{control:"boolean"},onChange:{action:"change"}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`({
  id = 'creatable-demo',
  ...props
}) => {
  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement="bottom" {...props} />;
}`,...M.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`({
  id = 'creatable-demo',
  ...props
}) => {
  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement="bottom" {...props} />;
}`,...E.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`({
  id = 'creatable-demo',
  ...props
}) => {
  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement="bottom" {...props} />;
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`({
  id = 'creatable-demo',
  ...props
}) => {
  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement="bottom" {...props} />;
}`,...W.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`({
  id = 'creatable-demo',
  ...props
}) => {
  return <CreatableSelect inputId={id} isClearable onChange={val => console.log('onChange', val)} options={options} menuPlacement="bottom" {...props} />;
}`,...F.parameters?.docs?.source}}};let R=["Default","WithLabel","Preselected","WithError","MenuPortal"]},"./src/form/Select/SelectStyles.ts":(e,t,o)=>{o.d(t,{m:()=>p,w:()=>u});var r=o("./node_modules/@amsterdam/asc-ui/es/theme/default/index.js"),n=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),a=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){var r;r=o[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o.push.apply(o,r)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}function s(){var e,t,o=(e=[`
	border-right: 3px solid;
	border-bottom: 3px solid;
	height: 11px;
	width: 11px;
	transform: rotate(45deg) translateY(-4px);
	border-color: inherit;
`],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return s=function(){return o},o}var c=function(e,t,o){return(0,n.hm)(e,t,o)({theme:r})},d=function(e,t,o,a){return(0,n.B7)(e,t,o,a)({theme:r})},u=a.default.span(s());function p(e){var t=e.error,o=void 0!==t&&t,r=e.maxWidth,n=void 0===r?"100%":r,a=e.zIndexMenu;return{container:function(e){return l(i({},e),{maxWidth:n||"100%"})},control:function(e,t){var r=t.isFocused,n=t.isDisabled;return l(i({},e),{pointerEvents:n?"none":"auto",borderWidth:"1px",borderColor:"".concat(n?c("tint","level4"):o?c("support","invalid"):c("primary")),backgroundColor:"".concat(c("tint","level1")),borderRadius:0,boxShadow:"".concat(n?"none":r?"inset 0 0 0 1px ".concat(c("primary")):"none"),"&:hover":{boxShadow:o?"inset 0 0 0 1px ".concat(c("support","invalid")):"inset 0 0 0 1px ".concat(c("primary"))},color:"".concat(n?c("tint","level5"):r?c("primary","dark"):c("primary")),height:"48px"})},menuList:function(e){return l(i({},e),{padding:"0",maxHeight:"calc(8 * 48px)"})},valueContainer:function(e,t){var o=t.isDisabled;return l(i({},e),{color:"".concat(o?c("tint","level4"):c("primary")),padding:"".concat(d(0,3)),fontSize:"18px"})},dropdownIndicator:function(e,t){var o=t.isFocused,r=t.isDisabled;return l(i({},e),{color:"".concat(r?c("tint","level3"):o?c("primary","dark"):c("primary")),"&:hover":{color:"".concat(c("primary","dark"))}})},indicatorsContainer:function(e){return l(i({},e),{paddingRight:"".concat(d(3)),color:"".concat(c("primary"))})},indicatorSeparator:function(){return{display:"none"}},noOptionsMessage:function(e){return l(i({},e),{padding:"".concat(d(0,3)),height:"48px",fontSize:"18px",backgroundColor:"".concat(c("tint","level1")),display:"flex",alignItems:"center",justifyContent:"spaceEvenly"})},option:function(e,t){var o=t.isFocused,r=t.isDisabled,n=t.isSelected;return l(i({},e),{padding:"".concat(d(0,3)),justifyContent:"space-between",display:"flex",alignItems:"center",color:r?"".concat(c("tint","level3")):n||o?"".concat(c("tint","level1")):"".concat(c("primary")),height:"48px",fontSize:"18px",backgroundColor:r?"".concat(c("tint","level1")):n||o?"".concat(c("primary")):"".concat(c("tint","level1")),":active":{backgroundColor:"".concat(c("primary"))},"::after":{content:n?'""':void 0,float:"right",border:"solid ".concat(c("tint","level1")),borderWidth:"0 3px 3px 0",transform:"rotate(45deg) translate(-5px, 0)",width:"10px",height:"18px"}})},singleValue:function(e){return l(i({},e),{color:"".concat(c("tint","level7"))})},placeholder:function(e){return l(i({},e),{color:"".concat(c("tint","level5"))})},menu:function(e){return l(i({},e),{borderRadius:"0",margin:"0",zIndex:a||e.zIndex,padding:"0 2px 2px 2px",boxShadow:"inset 0 0 0 2px ".concat(c("primary"))})},menuPortal:function(e){return a?l(i({},e),{zIndex:a}):e}}}},"./src/form/Select/__stubs__/options.ts":(e,t,o)=>{o.d(t,{f:()=>r});var r=["Archeologisch (voor)onderzoek","Archiefonderzoek","Bomeninventarisatie en –onderzoek","Bouwkundig onderzoek","Flora- en faunaonderzoek","(Geo)hydrologisch onderzoek","Geotechnisch onderzoek","Materiaalonderzoek","Milieukundig onderzoek","Onderzoek gevaarlijke stoffen","Toets Constructieve Veiligheid","Milieutechnisch onderzoek"].map(function(e){return{label:e,value:e.toLowerCase().replace(/\W/g,"")}})}}]);