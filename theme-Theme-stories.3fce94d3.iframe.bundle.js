"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[30],{"./src/theme/Theme.stories.tsx":(e,r,t)=>{t.r(r),t.d(r,{ASCPallette:()=>C,MUIPalette:()=>A,__namedExportsOrder:()=>w,default:()=>y});var n=t("./node_modules/react/jsx-runtime.js"),o=t("./src/theme/material-ui-theme.ts"),u=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=t("./node_modules/@amsterdam/asc-ui/es/theme/default/colors.js"),a=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");function c(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function i(){var e=c([`
	width: 140px;
	height: 140px;
	border: 1px solid `,`;
`]);return i=function(){return e},e}function l(){var e=c([`
	font-size: 12px;
`]);return l=function(){return e},e}function d(){var e=c([`
	margin: 0 10px 10px 0;
	flex: 0 1 auto;
	align-self: auto;
`]);return d=function(){return e},e}function p(){var e=c([`
	font-size: 18px;
`]);return p=function(){return e},e}function m(){var e=c([`
	display: flex;
	flex-flow: row wrap;
`]);return m=function(){return e},e}function f(){var e=c([`
	padding: 10px 20px;
`]);return f=function(){return e},e}let y={title:"theme/Theme"};var g=u.default.div(i(),(0,a.hm)("tint","level7")),h=u.default.h3(l()),x=u.default.div(d()),j=u.default.h2(p()),v=u.default.div(m()),b=u.default.div(f()),K=function(e){var r=e.name,t=e.value;return(0,n.jsxs)(x,{children:[(0,n.jsx)(g,{style:{backgroundColor:t}}),(0,n.jsx)(h,{children:r})]})},_=function(e){var r=e.groupKey;return(0,n.jsxs)(b,{children:[(0,n.jsx)(j,{children:r}),(0,n.jsx)(v,{children:Object.keys(s.A[r]).map(function(e){return(0,n.jsx)(K,{groupKey:r,name:e,value:s.A[r][e]},"".concat(r,"-").concat(e))})})]})},k=function(e){var r=e.groupKey;return(0,n.jsxs)(b,{children:[(0,n.jsx)(j,{children:r}),(0,n.jsx)(v,{children:Object.keys(o.A.palette[r]).map(function(e){return(0,n.jsx)(K,{groupKey:r,name:e,value:o.A.palette[r][e]},"".concat(r,"-").concat(e))})})]})},C=function(){return(0,n.jsx)(n.Fragment,{children:Object.keys(s.A).map(function(e){return(0,n.jsx)(_,{groupKey:e},e)})})};C.storyName="ASC Palette";var O=["contrastThreshold","getContrastText","augmentColor","tonalOffset","type","divider"],A=function(){return(0,n.jsx)(n.Fragment,{children:Object.keys(o.A.palette).filter(function(e){return!O.includes(e)}).map(function(e){return(0,n.jsx)(k,{groupKey:e},e)})})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <>
        {Object.keys(ascDefaultTheme.colors).map((groupKey: string) => <ASCColorGroup key={groupKey} groupKey={groupKey} />)}
    </>`,...C.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => <>
        {Object.keys(muiTheme.palette).filter((groupKey: string) => !ignoreKeys.includes(groupKey)).map((groupKey: string) => <MUIColorGroup key={groupKey} groupKey={groupKey} />)}
    </>`,...A.parameters?.docs?.source}}};let w=["ASCPallette","MUIPalette"]}}]);