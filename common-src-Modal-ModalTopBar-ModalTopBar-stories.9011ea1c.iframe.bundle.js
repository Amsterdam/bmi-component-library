"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[993],{"./node_modules/@amsterdam/asc-assets/es/icons/Close.js":(e,o,t)=>{t.d(o,{A:()=>r});var s=t("./node_modules/react/jsx-runtime.js");let r=function(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,s.jsx)("path",{d:"M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,o,t)=>{t.d(o,{A:()=>y});var s=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/react/index.js"),n=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),a=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),i=t("./node_modules/polished/dist/polished.esm.js"),d=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),c=t("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let m=e=>(0,l.B7)(11)({theme:e}),u=d.default.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,l.hm)("secondary")};
  border-right: 0;
  ${(0,i.bm)("border-color","0.1s ease-in-out")}
`,p=(0,d.default)(a.A)`
  margin-right: 10px;
`,h=(0,d.default)(a.A)`
  margin-left: 10px;
`,f=d.default.button`
  height: ${({theme:e})=>m(e)};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  padding: ${({size:e,theme:o})=>e?"0":(0,l.B7)(3,4)({theme:o})};
  ${({size:e,square:o})=>(e||o)&&(0,d.css)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,i.Ej)(e||30)}// width and height
    `}
  ${(0,i.bm)(["color","background-color"],"0.1s ease-in-out")}
  ${({theme:e,variant:o,color:t})=>{switch(o){case"primary":return(0,d.css)`
          min-width: 90px;
          background-color: ${(0,l.hm)("primary")};
          color: ${(0,i.W0)((0,l.hm)("primary")({theme:e}))};
          ${(0,l.G2)((0,l.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,i.e$)(.1,(0,l.hm)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,d.css)`
          min-width: 90px;
          background-color: ${(0,l.hm)("secondary")};
          color: ${(0,l.hm)("tint","level1")};
          ${(0,l.G2)((0,l.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,i.e$)(.1,(0,l.hm)("secondary")({theme:e}))};
          }

          ${o=>o&&(0,d.css)`
              &:not(:disabled)&:focus
                ${u},
                &:not(:disabled)&:hover
                ${u} {
                border-left-color: ${(0,i.e$)(.1,(0,l.hm)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,d.css)`
          min-width: 90px;
          background-color: ${(0,l.hm)("tint","level4")};
          ${(0,l.G2)((0,l.hm)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,i.e$)(.1,(0,l.hm)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,d.css)`
          min-width: 90px;
          color: ${(0,l.hm)("primary")};
          border: 1px solid ${(0,l.hm)("primary")};
          background-color: ${(0,l.hm)("tint","level1")};
          ${(0,l.G2)((0,l.hm)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,l.hm)("primary")};
          }
        `;case"textButton":return(0,d.css)`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${(0,l.hm)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${(0,l.G2)((0,l.hm)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${(0,i.bm)("color","0s")}

          &:hover {
            color: ${(0,l.hm)("secondary")};
            ${(0,l.G2)((0,l.hm)("secondary","main"))};
          }

          ${p} {
            margin-right: ${(0,l.B7)(1)};
          }
          ${h} {
            margin-left: ${(0,l.B7)(1)};
          }
        `;case"blank":return(0,d.css)`
          background-color: ${(0,l.hm)("tint","level1")};
          ${(0,l.G2)((0,l.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,l.hm)("tint","level3")};
          }
        `;case"application":return(0,d.css)`
          border: 1px solid ${(0,l.hm)("tint","level7")};
          background-color: ${(0,l.hm)("tint","level1")};
          height: 32px;
          padding: ${(0,l.B7)(1,2)};
          ${(0,l.G2)((0,l.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,l.hm)("tint","level4")};
          }
        `;default:return(0,d.css)`
          color: ${t?(0,i.W0)((0,l.hm)(t)({theme:e})):(0,l.hm)("primary")({theme:e})};
          ${t&&(0,d.css)`
            background: ${(0,l.hm)(t)};
          `}

          ${!t&&(0,d.css)`
            border: 1px solid ${(0,l.hm)("primary")};
          `}

        &:hover {
            background: ${t?(0,l.hm)(t,"dark")({theme:e}):(0,l.hm)("tint","level3")({theme:e})};
            ${!t&&(0,d.css)`
              outline: 1px solid ${(0,l.hm)("primary")};
            `}
          }
        `}}}
  ${(0,c.h)()} // ie fix
  ${({taskflow:e})=>e&&(0,d.css)`
      position: relative;
      min-width: initial;
      padding-right: 0;
      padding-top: 0; // safari fix
      padding-bottom: 0; // safari fix
      line-height: ${({theme:e})=>m(e)}; // safari 10.1 fix
      z-index: 0;
      && {
        margin-right: 25px;
      }
      &:focus ${u}:after {
        opacity: 1;
      }
    `}
  ${a.A} {
    flex-shrink: 0;
  }
  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    color: ${(0,l.hm)("tint","level4")};
    background-color: ${(0,l.hm)("tint","level3")};
    ${(0,l.G2)((0,l.hm)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:e})=>e&&(0,d.css)`
        ${u} {
          border-left-color: ${(0,l.hm)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,d.css)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var g=function(e,o){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>o.indexOf(s)&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)0>o.indexOf(s[r])&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]]);return t};let y=(0,r.forwardRef)((e,o)=>{var{children:t,iconLeft:r,iconRight:i,icon:d,iconSize:l,taskflow:c}=e,m=g(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let y={size:l||n.G.size};return(0,s.jsxs)(f,Object.assign({ref:o},m,{taskflow:c},{children:[r&&(0,s.jsx)(p,Object.assign({},y,{children:r})),d?(0,s.jsx)(a.A,Object.assign({},y,{children:d})):t,i&&(0,s.jsx)(h,Object.assign({},y,{children:i})),c&&(0,s.jsx)(u,{})]}))})},"./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js":(e,o,t)=>{t.d(o,{A:()=>a});var s=t("./node_modules/polished/dist/polished.esm.js"),r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let a=r.default.hr`
  height: 1px;
  margin: 0;
  border: none;
  ${({gutter:e})=>e&&(0,r.css)`
      ${(0,s.Lc)(0,"15px")}
    `}
  background-color:
    ${({theme:e,transparent:o})=>o?"background-color: transparent;":(0,n.hm)("tint","level4")({theme:e})};
`},"./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js":(e,o,t)=>{t.d(o,{A:()=>a});var s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let n=(0,s.css)`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,a=(0,s.default)(r.A)`
  ${n}
`},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,o,t)=>{t.d(o,{A:()=>s});let s=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js").A},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,o,t)=>{t.d(o,{A:()=>a,G:()=>n});var s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let n={size:20,padding:0,rotate:0},a=s.default.span.withConfig({shouldForwardProp:(e,o)=>!["size","rotate","padding","inline","color"].includes(e)&&o(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,s.css)`
      background-image: url(${e});
    `}
  ${({size:e=n.size,padding:o=n.padding})=>(0,s.css)`
    width: ${e-2*o}px;
    height: ${e-2*o}px;
  `}
  ${({padding:e})=>e&&(0,s.css)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=n.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=n.size,padding:o=n.padding})=>(0,s.css)`
      width: ${e-2*o}px;
      height: ${e-2*o}px;
    `}
  }

  ${({color:e})=>e&&(0,r.G2)(e)};
`},"./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBar.js":(e,o,t)=>{t.d(o,{A:()=>a});var s=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBarStyle.js"),n=function(e,o){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>o.indexOf(s)&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)0>o.indexOf(s[r])&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]]);return t};let a=function(e){var{children:o}=e,t=n(e,["children"]);return(0,s.jsx)(r.A,Object.assign({},t,{children:o}))}},"./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBarStyle.js":(e,o,t)=>{t.d(o,{A:()=>i});var s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js"),n=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),a=t("./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js");let i=s.default.header`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 10px;
  background-color: ${({backgroundColor:e,theme:o})=>e||(0,n.hm)("tint","level1")({theme:o})};
  ${(0,r.h)()};

  @media screen and ${(0,n.C9)("min-width","tabletS")} {
    padding: 0 15px;
  }

  ${a.A} {
    flex-grow: 1;
    margin-bottom: 0;
  }
`},"./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js":(e,o,t)=>{t.d(o,{A:()=>i});var s=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js"),n=t("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),a=function(e,o){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>o.indexOf(s)&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)0>o.indexOf(s[r])&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]]);return t};let i=function(e){var{children:o}=e,t=a(e,["children"]);return t.color&&(0,n.A)("You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules"),(0,s.jsx)(r.A,Object.assign({},t,{children:o}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,o,t)=>{t.d(o,{A:()=>a});var s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let n={em:(0,s.css)`
    font-style: italic;
  `},a=s.default.p`
  ${({as:e,forwardedAs:o})=>{let t=null!=e?e:o;return"string"==typeof t&&n[t]}}
  margin: 0;
  ${(0,r.Jx)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:e})=>e&&(0,s.css)`
      font-weight: 700;
      color: ${(0,r.hm)("tint","level7")};
    `}
  ${({color:e})=>e&&(0,s.css)`
      color: ${(0,r.hm)(e)};
    `}
  ${({fontSize:e})=>e&&(0,s.css)`
      font-size: ${e}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,o,t)=>{t.d(o,{h:()=>r});var s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");let r=()=>(0,s.css)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js":(e,o,t)=>{t.d(o,{A:()=>s});let s=e=>{console.warn(e)}},"./src/common/src/Modal/ModalTopBar/ModalTopBar.stories.tsx":(e,o,t)=>{t.r(o),t.d(o,{Default:()=>d,__namedExportsOrder:()=>c,default:()=>l});var s=t("./node_modules/react/jsx-runtime.js"),r=t("./src/common/src/Modal/ModalTopBar/ModalTopBar.tsx");function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.forEach(function(o){var s;s=t[o],o in e?Object.defineProperty(e,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[o]=s})}return e}var a=(0,t("./src/utils/storybook.ts").i)(["children"]),i={title:"common/Modal/ModalTopBar",component:r.A,argTypes:n({},a)},d=(function(e){var o,t;return(0,s.jsx)(r.A,(o=n({},e),t=t={children:"Afgerond - Assetnaam"},Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):(function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t.push.apply(t,s)}return t})(Object(t)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))}),o))}).bind({});let l=i;d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  return <ModalTopBar {...args}>Afgerond - Assetnaam</ModalTopBar>;
}`,...d.parameters?.docs?.source}}};let c=["Default"]},"./src/common/src/Modal/ModalTopBar/ModalTopBar.tsx":(e,o,t)=>{t.d(o,{A:()=>c});var s=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),n=t("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),a=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),i=t("./node_modules/@amsterdam/asc-assets/es/icons/Close.js"),d=t("./src/common/src/Modal/ModalTopBar/ModalTopBarStyles.ts"),l=function(e){var o=e.hideCloseButton,t=e.hideDivider,l=e.onCloseButton,c=e.children;return(0,s.jsxs)(d.Z,{"data-testid":"modal-top-bar",hideDivider:void 0===t||t,children:[(0,s.jsx)(d.z,{children:c}),void 0!==o&&o?null:(0,s.jsx)(r.A,{type:"button","data-testid":"modal-close-button",size:26,onClick:function(e){void 0!==l&&l(e)},variant:"blank",children:(0,s.jsx)(a.A,{size:26,children:(0,s.jsx)(i.A,{})})}),(0,s.jsx)(n.A,{})]})};let c=l;try{l.displayName="ModalTopBar",l.__docgenInfo={description:"",displayName:"ModalTopBar",props:{hideDivider:{defaultValue:{value:"true"},description:"",name:"hideDivider",required:!1,type:{name:"boolean"}},hideCloseButton:{defaultValue:{value:"false"},description:"",name:"hideCloseButton",required:!1,type:{name:"boolean"}},onCloseButton:{defaultValue:null,description:"",name:"onCloseButton",required:!1,type:{name:"((evt: SyntheticEvent<Element, Event>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/Modal/ModalTopBar/ModalTopBar.tsx#ModalTopBar"]={docgenInfo:l.__docgenInfo,name:"ModalTopBar",path:"src/common/src/Modal/ModalTopBar/ModalTopBar.tsx#ModalTopBar"})}catch(e){}},"./src/common/src/Modal/ModalTopBar/ModalTopBarStyles.ts":(e,o,t)=>{t.d(o,{Z:()=>c,z:()=>m});var s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),n=t("./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBar.js"),a=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");function i(e,o){return o||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}}))}function d(){var e=i([`
	display: grid;
	grid-template-columns: 1fr auto;
	grid-template-rows: 44px `,`;
	padding: 0;
	margin-bottom: `,`;

	@media screen and (`,`) {
		padding: 0;
	}

	&::after {
		content: unset;
	}

	`,` {
		grid-column: 1 / span 2;
		align-self: flex-end;
		background-color: `,`;
	}
`]);return d=function(){return e},e}function l(){var e=i([`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	min-width: 0;
	font-size: 40px;
	font-weight: 800;
	letter-spacing: 0;
	font-style: normal;
	line-height: 110%;
`]);return l=function(){return e},e}var c=(0,s.default)(n.A)(d(),function(e){return e.hideDivider?0:(0,a.B7)(6)},function(e){return e.hideDivider?0:"12px"},(0,a.C9)("min-width","tabletS"),r.A,function(e){return e.hideDivider?"transparent":"#000"}),m=s.default.div(l())},"./src/utils/storybook.ts":(e,o,t)=>{t.d(o,{B:()=>s,i:()=>r});var s={description:"Disabled control for this story",control:!1},r=function(e){return e.reduce(function(e,o){return e[o]=s,e},{})}}}]);