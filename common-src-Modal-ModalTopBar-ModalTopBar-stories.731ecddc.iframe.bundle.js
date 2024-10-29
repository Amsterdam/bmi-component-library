"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[993],{"./node_modules/@amsterdam/asc-assets/es/icons/Close.js":(e,o,t)=>{t.d(o,{A:()=>r});var n=t("./node_modules/react/jsx-runtime.js");let r=function(e){return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,n.jsx)("path",{d:"M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,o,t)=>{t.d(o,{A:()=>v});var n=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/react/index.js"),s=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),a=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),i=t("./node_modules/polished/dist/polished.esm.js"),d=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),c=t("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let m={size:30},u=e=>(0,l.B7)(11)({theme:e}),p=d.Ay.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,l.hm)("secondary")};
  border-right: 0;
  ${(0,i.bm)("border-color","0.1s ease-in-out")}
`,h=(0,d.Ay)(a.A)`
  margin-right: 10px;
`,y=(0,d.Ay)(a.A)`
  margin-left: 10px;
`,g=d.Ay.button`
  height: ${({theme:e})=>u(e)};
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
  ${({size:e,square:o})=>(e||o)&&(0,d.AH)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,i.Ej)(e||m.size)}// width and height
    `}
  ${(0,i.bm)(["color","background-color"],"0.1s ease-in-out")}
  ${(()=>({theme:e,variant:o,color:t})=>{switch(o){case"primary":return(0,d.AH)`
          min-width: 90px;
          background-color: ${(0,l.hm)("primary")};
          color: ${(0,i.W0)((0,l.hm)("primary")({theme:e}))};
          ${(0,l.G2)((0,l.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,i.e$)(.1,(0,l.hm)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,d.AH)`
          min-width: 90px;
          background-color: ${(0,l.hm)("secondary")};
          color: ${(0,l.hm)("tint","level1")};
          ${(0,l.G2)((0,l.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,i.e$)(.1,(0,l.hm)("secondary")({theme:e}))};
          }

          ${o=>o&&(0,d.AH)`
              &:not(:disabled)&:focus
                ${p},
                &:not(:disabled)&:hover
                ${p} {
                border-left-color: ${(0,i.e$)(.1,(0,l.hm)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,d.AH)`
          min-width: 90px;
          background-color: ${(0,l.hm)("tint","level4")};
          ${(0,l.G2)((0,l.hm)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,i.e$)(.1,(0,l.hm)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,d.AH)`
          min-width: 90px;
          color: ${(0,l.hm)("primary")};
          border: 1px solid ${(0,l.hm)("primary")};
          background-color: ${(0,l.hm)("tint","level1")};
          ${(0,l.G2)((0,l.hm)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,l.hm)("primary")};
          }
        `;case"textButton":return(0,d.AH)`
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

          ${h} {
            margin-right: ${(0,l.B7)(1)};
          }
          ${y} {
            margin-left: ${(0,l.B7)(1)};
          }
        `;case"blank":return(0,d.AH)`
          background-color: ${(0,l.hm)("tint","level1")};
          ${(0,l.G2)((0,l.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,l.hm)("tint","level3")};
          }
        `;case"application":return(0,d.AH)`
          border: 1px solid ${(0,l.hm)("tint","level7")};
          background-color: ${(0,l.hm)("tint","level1")};
          height: 32px;
          padding: ${(0,l.B7)(1,2)};
          ${(0,l.G2)((0,l.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,l.hm)("tint","level4")};
          }
        `;default:return(0,d.AH)`
          color: ${t?(0,i.W0)((0,l.hm)(t)({theme:e})):(0,l.hm)("primary")({theme:e})};
          ${t&&(0,d.AH)`
            background: ${(0,l.hm)(t)};
          `}

          ${!t&&(0,d.AH)`
            border: 1px solid ${(0,l.hm)("primary")};
          `}

        &:hover {
            background: ${t?(0,l.hm)(t,"dark")({theme:e}):(0,l.hm)("tint","level3")({theme:e})};
            ${!t&&(0,d.AH)`
              outline: 1px solid ${(0,l.hm)("primary")};
            `}
          }
        `}})()}
  ${(0,c.h)()} // ie fix
  ${({taskflow:e})=>e&&(0,d.AH)`
      position: relative;
      min-width: initial;
      padding-right: 0;
      padding-top: 0; // safari fix
      padding-bottom: 0; // safari fix
      line-height: ${({theme:e})=>u(e)}; // safari 10.1 fix
      z-index: 0;
      && {
        margin-right: 25px;
      }
      &:focus ${p}:after {
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
    ${({taskflow:e})=>e&&(0,d.AH)`
        ${p} {
          border-left-color: ${(0,l.hm)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,d.AH)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var f=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>o.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>o.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};let b=(0,r.forwardRef)((e,o)=>{var{children:t,iconLeft:r,iconRight:i,icon:d,iconSize:l,taskflow:c}=e,m=f(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let u={size:l||s.G.size};return(0,n.jsxs)(g,Object.assign({ref:o},m,{taskflow:c},{children:[r&&(0,n.jsx)(h,Object.assign({},u,{children:r})),d?(0,n.jsx)(a.A,Object.assign({},u,{children:d})):t,i&&(0,n.jsx)(y,Object.assign({},u,{children:i})),c&&(0,n.jsx)(p,{})]}))}),v=b},"./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js":(e,o,t)=>{t.d(o,{A:()=>i});var n=t("./node_modules/polished/dist/polished.esm.js"),r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let a=r.Ay.hr`
  height: 1px;
  margin: 0;
  border: none;
  ${({gutter:e})=>e&&(0,r.AH)`
      ${(0,n.Lc)(0,"15px")}
    `}
  background-color:
    ${({theme:e,transparent:o})=>o?"background-color: transparent;":(0,s.hm)("tint","level4")({theme:e})};
`,i=a},"./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js":(e,o,t)=>{t.d(o,{A:()=>a});var n=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let s=(0,n.AH)`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,a=(0,n.Ay)(r.A)`
  ${s}
`},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,o,t)=>{t.d(o,{A:()=>r});var n=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");let r=n.A},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,o,t)=>{t.d(o,{A:()=>i,G:()=>s});var n=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={size:20,padding:0,rotate:0},a=n.Ay.span.withConfig({shouldForwardProp:(e,o)=>!["size","rotate","padding","inline","color"].includes(e)&&o(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,n.AH)`
      background-image: url(${e});
    `}
  ${({size:e=s.size,padding:o=s.padding})=>(0,n.AH)`
    width: ${e-2*o}px;
    height: ${e-2*o}px;
  `}
  ${({padding:e})=>e&&(0,n.AH)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=s.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=s.size,padding:o=s.padding})=>(0,n.AH)`
      width: ${e-2*o}px;
      height: ${e-2*o}px;
    `}
  }

  ${({color:e})=>e&&(0,r.G2)(e)};
`,i=a},"./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBar.js":(e,o,t)=>{t.d(o,{A:()=>a});var n=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBarStyle.js"),s=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>o.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>o.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};let a=function(e){var{children:o}=e,t=s(e,["children"]);return(0,n.jsx)(r.A,Object.assign({},t,{children:o}))}},"./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBarStyle.js":(e,o,t)=>{t.d(o,{A:()=>d});var n=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js"),s=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),a=t("./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js");let i=n.Ay.header`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 10px;
  background-color: ${({backgroundColor:e,theme:o})=>e||(0,s.hm)("tint","level1")({theme:o})};
  ${(0,r.h)()};

  @media screen and ${(0,s.C9)("min-width","tabletS")} {
    padding: 0 15px;
  }

  ${a.A} {
    flex-grow: 1;
    margin-bottom: 0;
  }
`,d=i},"./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js":(e,o,t)=>{t.d(o,{A:()=>i});var n=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js"),s=t("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),a=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>o.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>o.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};let i=function(e){var{children:o}=e,t=a(e,["children"]);return t.color&&(0,s.A)("You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules"),(0,n.jsx)(r.A,Object.assign({},t,{children:o}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,o,t)=>{t.d(o,{A:()=>a});var n=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={em:(0,n.AH)`
    font-style: italic;
  `},a=n.Ay.p`
  ${({as:e,forwardedAs:o})=>{let t=null!=e?e:o;return"string"==typeof t&&s[t]}}
  margin: 0;
  ${(0,r.Jx)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:e})=>e&&(0,n.AH)`
      font-weight: 700;
      color: ${(0,r.hm)("tint","level7")};
    `}
  ${({color:e})=>e&&(0,n.AH)`
      color: ${(0,r.hm)(e)};
    `}
  ${({fontSize:e})=>e&&(0,n.AH)`
      font-size: ${e}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,o,t)=>{t.d(o,{h:()=>r});var n=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");let r=()=>(0,n.AH)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js":(e,o,t)=>{t.d(o,{A:()=>n});let n=e=>{console.warn(e)}},"./src/common/src/Modal/ModalTopBar/ModalTopBar.stories.tsx":(e,o,t)=>{t.r(o),t.d(o,{Default:()=>u,default:()=>p});var n,r,s,a=t("./node_modules/react/jsx-runtime.js"),i=t("./src/common/src/Modal/ModalTopBar/ModalTopBar.tsx");function d(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(o){!function(e,o,t){o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t}(e,o,t[o])})}return e}function l(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t})(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}),e}var c=(0,t("./src/utils/storybook.ts").i)(["children"]),m={title:"common/Modal/ModalTopBar",component:i.A,argTypes:d({},c)},u=(function(e){return(0,a.jsx)(i.A,l(d({},e),{children:"Afgerond - Assetnaam"}))}).bind({});let p=m;u.parameters=l(d({},u.parameters),{docs:l(d({},null===(n=u.parameters)||void 0===n?void 0:n.docs),{source:d({originalSource:"args => {\n  return <ModalTopBar {...args}>Afgerond - Assetnaam</ModalTopBar>;\n}"},null===(s=u.parameters)||void 0===s?void 0:null===(r=s.docs)||void 0===r?void 0:r.source)})})},"./src/common/src/Modal/ModalTopBar/ModalTopBar.tsx":(e,o,t)=>{t.d(o,{A:()=>c});var n=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),s=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=t("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),i=t("./node_modules/@amsterdam/asc-assets/es/icons/Close.js"),d=t("./src/common/src/Modal/ModalTopBar/ModalTopBarStyles.ts"),l=function(e){var o=e.hideCloseButton,t=void 0!==o&&o,l=e.hideDivider,c=e.onCloseButton,m=e.children;return(0,n.jsxs)(d.Z,{"data-testid":"modal-top-bar",hideDivider:void 0===l||l,children:[(0,n.jsx)(d.z,{children:m}),function(){return t?null:(0,n.jsx)(r.A,{type:"button","data-testid":"modal-close-button",size:26,onClick:function(e){void 0!==c&&c(e)},variant:"blank",children:(0,n.jsx)(s.A,{size:26,children:(0,n.jsx)(i.A,{})})})}(),(0,n.jsx)(a.A,{})]})};let c=l;try{l.displayName="ModalTopBar",l.__docgenInfo={description:"",displayName:"ModalTopBar",props:{hideDivider:{defaultValue:{value:"true"},description:"",name:"hideDivider",required:!1,type:{name:"boolean"}},hideCloseButton:{defaultValue:{value:"false"},description:"",name:"hideCloseButton",required:!1,type:{name:"boolean"}},onCloseButton:{defaultValue:null,description:"",name:"onCloseButton",required:!1,type:{name:"((evt: SyntheticEvent<Element, Event>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/Modal/ModalTopBar/ModalTopBar.tsx#ModalTopBar"]={docgenInfo:l.__docgenInfo,name:"ModalTopBar",path:"src/common/src/Modal/ModalTopBar/ModalTopBar.tsx#ModalTopBar"})}catch(e){}},"./src/common/src/Modal/ModalTopBar/ModalTopBarStyles.ts":(e,o,t)=>{t.d(o,{Z:()=>c,z:()=>m});var n=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBar.js"),s=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),a=t("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js");function i(e,o){return o||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}}))}function d(){var e=i(["\n	display: grid;\n	grid-template-columns: 1fr auto;\n	grid-template-rows: 44px ",";\n	padding: 0;\n	margin-bottom: ",";\n\n	@media screen and (",") {\n		padding: 0;\n	}\n\n	&::after {\n		content: unset;\n	}\n\n	"," {\n		grid-column: 1 / span 2;\n		align-self: flex-end;\n		background-color: ",";\n	}\n"]);return d=function(){return e},e}function l(){var e=i(["\n	white-space: nowrap;\n	overflow: hidden;\n	text-overflow: ellipsis;\n	min-width: 0;\n	font-size: 40px;\n	font-weight: 800;\n	letter-spacing: 0;\n	font-style: normal;\n	line-height: 110%;\n"]);return l=function(){return e},e}var c=(0,n.Ay)(r.A)(d(),function(e){return e.hideDivider?0:(0,s.B7)(6)},function(e){return e.hideDivider?0:"12px"},(0,s.C9)("min-width","tabletS"),a.A,function(e){return e.hideDivider?"transparent":"#000"}),m=n.Ay.div(l())},"./src/utils/storybook.ts":(e,o,t)=>{t.d(o,{B:()=>n,i:()=>r});var n={description:"Disabled control for this story",control:!1};function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce(function(e,o){return e[o]=n,e},{})}}}]);