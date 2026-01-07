(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[94],{"./node_modules/@amsterdam/asc-assets/es/icons/Close.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>n});var s=o("./node_modules/react/jsx-runtime.js");let n=function(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,s.jsx)("path",{d:"M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>g});var s=o("./node_modules/react/jsx-runtime.js"),n=o("./node_modules/react/index.js"),r=o("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),i=o("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=o("./node_modules/polished/dist/polished.esm.js"),l=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),d=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),c=o("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let m=e=>(0,d.B7)(11)({theme:e}),u=l.default.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,d.hm)("secondary")};
  border-right: 0;
  ${(0,a.bm)("border-color","0.1s ease-in-out")}
`,p=(0,l.default)(i.A)`
  margin-right: 10px;
`,h=(0,l.default)(i.A)`
  margin-left: 10px;
`,f=l.default.button`
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
  padding: ${({size:e,theme:t})=>e?"0":(0,d.B7)(3,4)({theme:t})};
  ${({size:e,square:t})=>(e||t)&&(0,l.css)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,a.Ej)(e||30)}// width and height
    `}
  ${(0,a.bm)(["color","background-color"],"0.1s ease-in-out")}
  ${({theme:e,variant:t,color:o})=>{switch(t){case"primary":return(0,l.css)`
          min-width: 90px;
          background-color: ${(0,d.hm)("primary")};
          color: ${(0,a.W0)((0,d.hm)("primary")({theme:e}))};
          ${(0,d.G2)((0,d.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,d.hm)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,l.css)`
          min-width: 90px;
          background-color: ${(0,d.hm)("secondary")};
          color: ${(0,d.hm)("tint","level1")};
          ${(0,d.G2)((0,d.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,d.hm)("secondary")({theme:e}))};
          }

          ${t=>t&&(0,l.css)`
              &:not(:disabled)&:focus
                ${u},
                &:not(:disabled)&:hover
                ${u} {
                border-left-color: ${(0,a.e$)(.1,(0,d.hm)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,l.css)`
          min-width: 90px;
          background-color: ${(0,d.hm)("tint","level4")};
          ${(0,d.G2)((0,d.hm)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,d.hm)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,l.css)`
          min-width: 90px;
          color: ${(0,d.hm)("primary")};
          border: 1px solid ${(0,d.hm)("primary")};
          background-color: ${(0,d.hm)("tint","level1")};
          ${(0,d.G2)((0,d.hm)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,d.hm)("primary")};
          }
        `;case"textButton":return(0,l.css)`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${(0,d.hm)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${(0,d.G2)((0,d.hm)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${(0,a.bm)("color","0s")}

          &:hover {
            color: ${(0,d.hm)("secondary")};
            ${(0,d.G2)((0,d.hm)("secondary","main"))};
          }

          ${p} {
            margin-right: ${(0,d.B7)(1)};
          }
          ${h} {
            margin-left: ${(0,d.B7)(1)};
          }
        `;case"blank":return(0,l.css)`
          background-color: ${(0,d.hm)("tint","level1")};
          ${(0,d.G2)((0,d.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,d.hm)("tint","level3")};
          }
        `;case"application":return(0,l.css)`
          border: 1px solid ${(0,d.hm)("tint","level7")};
          background-color: ${(0,d.hm)("tint","level1")};
          height: 32px;
          padding: ${(0,d.B7)(1,2)};
          ${(0,d.G2)((0,d.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,d.hm)("tint","level4")};
          }
        `;default:return(0,l.css)`
          color: ${o?(0,a.W0)((0,d.hm)(o)({theme:e})):(0,d.hm)("primary")({theme:e})};
          ${o&&(0,l.css)`
            background: ${(0,d.hm)(o)};
          `}

          ${!o&&(0,l.css)`
            border: 1px solid ${(0,d.hm)("primary")};
          `}

        &:hover {
            background: ${o?(0,d.hm)(o,"dark")({theme:e}):(0,d.hm)("tint","level3")({theme:e})};
            ${!o&&(0,l.css)`
              outline: 1px solid ${(0,d.hm)("primary")};
            `}
          }
        `}}}
  ${(0,c.h)()} // ie fix
  ${({taskflow:e})=>e&&(0,l.css)`
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
  ${i.A} {
    flex-shrink: 0;
  }
  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    color: ${(0,d.hm)("tint","level4")};
    background-color: ${(0,d.hm)("tint","level3")};
    ${(0,d.G2)((0,d.hm)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:e})=>e&&(0,l.css)`
        ${u} {
          border-left-color: ${(0,d.hm)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,l.css)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var y=function(e,t){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(o[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,s=Object.getOwnPropertySymbols(e);n<s.length;n++)0>t.indexOf(s[n])&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(o[s[n]]=e[s[n]]);return o};let g=(0,n.forwardRef)((e,t)=>{var{children:o,iconLeft:n,iconRight:a,icon:l,iconSize:d,taskflow:c}=e,m=y(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let g={size:d||r.G.size};return(0,s.jsxs)(f,Object.assign({ref:t},m,{taskflow:c},{children:[n&&(0,s.jsx)(p,Object.assign({},g,{children:n})),l?(0,s.jsx)(i.A,Object.assign({},g,{children:l})):o,a&&(0,s.jsx)(h,Object.assign({},g,{children:a})),c&&(0,s.jsx)(u,{})]}))})},"./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>i});var s=o("./node_modules/polished/dist/polished.esm.js"),n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i=n.default.hr`
  height: 1px;
  margin: 0;
  border: none;
  ${({gutter:e})=>e&&(0,n.css)`
      ${(0,s.Lc)(0,"15px")}
    `}
  background-color:
    ${({theme:e,transparent:t})=>t?"background-color: transparent;":(0,r.hm)("tint","level4")({theme:e})};
`},"./node_modules/@amsterdam/asc-ui/es/components/Heading/Heading.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var s=o("./node_modules/react/jsx-runtime.js"),n=o("./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js"),r=function(e,t){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(o[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,s=Object.getOwnPropertySymbols(e);n<s.length;n++)0>t.indexOf(s[n])&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(o[s[n]]=e[s[n]]);return o};function i(e){var{children:t,as:o}=e,i=r(e,["children","as"]);return(0,s.jsx)(n.A,Object.assign({forwardedAs:o},i,{children:t}))}i.defaultProps={as:"h1"};let a=i},"./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>i});var s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let r=(0,s.css)`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,i=(0,s.default)(n.A)`
  ${r}
`},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>s});let s=o("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js").A},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>i,G:()=>r});var s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let r={size:20,padding:0,rotate:0},i=s.default.span.withConfig({shouldForwardProp:(e,t)=>!["size","rotate","padding","inline","color"].includes(e)&&t(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,s.css)`
      background-image: url(${e});
    `}
  ${({size:e=r.size,padding:t=r.padding})=>(0,s.css)`
    width: ${e-2*t}px;
    height: ${e-2*t}px;
  `}
  ${({padding:e})=>e&&(0,s.css)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=r.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=r.size,padding:t=r.padding})=>(0,s.css)`
      width: ${e-2*t}px;
      height: ${e-2*t}px;
    `}
  }

  ${({color:e})=>e&&(0,n.G2)(e)};
`},"./node_modules/@amsterdam/asc-ui/es/components/Modal/Modal.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>x});var s=o("./node_modules/react/jsx-runtime.js"),n=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=o("./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBarStyle.js"),a=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let l=r.default.div`
  background-color: ${(0,a.hm)("tint","level1")};
  overflow: auto;
  width: 100%;
  max-width: 620px;
  max-height: 75%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: all;

  ${i.A} {
    min-height: 54px;
  }

  ${(0,a.H_)(!0)}
`;var d=o("./node_modules/@amsterdam/asc-ui/es/types/KeyboardKeys.js");let c=function(e){var t;return null!=(t=null==e?void 0:e.ownerDocument)?t:window.document},m=["a[href]:not([disabled])","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])"];var u=o("./node_modules/polished/dist/polished.esm.js"),p=o("./node_modules/@amsterdam/asc-ui/es/components/shared/constants.js");let h=r.default.div`
  display: block;
  ${(0,u.G1)("fixed",0,0,0,0)};
  background-color: ${({backdropOpacity:e,theme:t})=>(0,u.No)(e||.3,(0,a.hm)("tint","level7")({theme:t}))};
  z-index: ${({zIndexOffset:e})=>e?p.Zq+e:p.Zq};

  & > * {
    pointer-events: none;
  }
`;var f=function(e,t){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(o[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,s=Object.getOwnPropertySymbols(e);n<s.length;n++)0>t.indexOf(s[n])&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(o[s[n]]=e[s[n]]);return o};let y=function(e){var{backdropOpacity:t,onClick:o}=e,n=f(e,["backdropOpacity","onClick"]);return(0,s.jsx)(h,Object.assign({backdropOpacity:t,onClick:e=>{o&&o(e)}},n))};var g=o("./node_modules/react-dom/index.js");let b=null;"undefined"!=typeof window&&(b=window.document.createElement("div")).setAttribute("style","position: absolute;");class j extends n.Component{static getOwnerDocument(e){return c(g.findDOMNode(e))}componentDidMount(){this.setMountNode()}componentWillUnmount(){let{blurredNode:e}=this.props,t=this.element;t.removeAttribute("style"),e&&e.removeAttribute("style"),b&&b.parentNode===t&&t.removeChild(b)}setMountNode(){let{blurredNode:e,hideOverFlow:t=!0}=this.props,o=this.element;t&&o.setAttribute("style","overflow: hidden;"),b&&o.appendChild(b),e&&e.setAttribute("style","filter: blur(1px)")}get element(){let{element:e}=this.props,{body:t}=j.getOwnerDocument(this),o=t;return e&&(o=e),o}render(){let{children:e}=this.props;return b?g.createPortal(e,b):null}}var v=function(e,t){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(o[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,s=Object.getOwnPropertySymbols(e);n<s.length;n++)0>t.indexOf(s[n])&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(o[s[n]]=e[s[n]]);return o};let x=function(e){var t,{open:o,disablePortal:r,children:i,backdropOpacity:a,element:u,blurredNodeSelector:p,onClose:h,zIndexOffset:f}=e,g=v(e,["open","disablePortal","children","backdropOpacity","element","blurredNodeSelector","onClose","zIndexOffset"]);let b=(0,n.useRef)(null),{keyDown:x}=(t=b,{keyDown:e=>{if(b.current){let t=b.current,o=t.querySelectorAll(m.join(", ")),s=o[0],n=o[o.length-1];e.key===d.A.Tab&&(e.shiftKey?c(t).activeElement===s&&n instanceof HTMLElement&&(n.focus(),e.preventDefault()):c(t).activeElement===n&&s instanceof HTMLElement&&(s.focus(),e.preventDefault()))}}}),$=(0,n.useMemo)(()=>document.activeElement,[o]);(0,n.useEffect)(()=>{if(!o||!b.current)return;let e=b.current.querySelector(m.join(", "));e instanceof HTMLElement&&e.focus()},[o]);let w=()=>{h&&($ instanceof HTMLElement&&$.focus(),h())},O=r?n.Fragment:j;return o?(0,s.jsxs)(O,Object.assign({},r?{}:{element:u,blurredNode:p?window.document.querySelector(p):void 0},{children:[(0,s.jsx)(y,{backdropOpacity:a,onClick:w,zIndexOffset:f}),(0,s.jsx)(l,Object.assign({role:"dialog","aria-modal":"true",ref:b,onKeyDown:e=>{x(e),e.key===d.A.Escape&&(e.stopPropagation(),w())},zIndexOffset:f},g,{children:i}))]})):null}},"./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBar.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>i});var s=o("./node_modules/react/jsx-runtime.js"),n=o("./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBarStyle.js"),r=function(e,t){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(o[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,s=Object.getOwnPropertySymbols(e);n<s.length;n++)0>t.indexOf(s[n])&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(o[s[n]]=e[s[n]]);return o};let i=function(e){var{children:t}=e,o=r(e,["children"]);return(0,s.jsx)(n.A,Object.assign({},o,{children:t}))}},"./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBarStyle.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js"),r=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),i=o("./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js");let a=s.default.header`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 10px;
  background-color: ${({backgroundColor:e,theme:t})=>e||(0,r.hm)("tint","level1")({theme:t})};
  ${(0,n.h)()};

  @media screen and ${(0,r.C9)("min-width","tabletS")} {
    padding: 0 15px;
  }

  ${i.A} {
    flex-grow: 1;
    margin-bottom: 0;
  }
`},"./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var s=o("./node_modules/react/jsx-runtime.js"),n=o("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js"),r=o("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),i=function(e,t){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(o[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,s=Object.getOwnPropertySymbols(e);n<s.length;n++)0>t.indexOf(s[n])&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(o[s[n]]=e[s[n]]);return o};let a=function(e){var{children:t}=e,o=i(e,["children"]);return o.color&&(0,r.A)("You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules"),(0,s.jsx)(n.A,Object.assign({},o,{children:t}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>i});var s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let r={em:(0,s.css)`
    font-style: italic;
  `},i=s.default.p`
  ${({as:e,forwardedAs:t})=>{let o=null!=e?e:t;return"string"==typeof o&&r[o]}}
  margin: 0;
  ${(0,n.Jx)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:e})=>e&&(0,s.css)`
      font-weight: 700;
      color: ${(0,n.hm)("tint","level7")};
    `}
  ${({color:e})=>e&&(0,s.css)`
      color: ${(0,n.hm)(e)};
    `}
  ${({fontSize:e})=>e&&(0,s.css)`
      font-size: ${e}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,t,o)=>{"use strict";o.d(t,{h:()=>n});var s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let n=()=>(0,s.css)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./node_modules/@amsterdam/asc-ui/es/types/KeyboardKeys.js":(e,t,o)=>{"use strict";var s,n;o.d(t,{A:()=>r}),(n=s||(s={})).ArrowUp="ArrowUp",n.ArrowDown="ArrowDown",n.ArrowRight="ArrowRight",n.ArrowLeft="ArrowLeft",n.Escape="Escape",n.Enter="Enter",n.Tab="Tab",n.Space="Space",n.Home="Home",n.End="End";let r=s},"./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>s});let s=e=>{console.warn(e)}},"./node_modules/classnames/index.js":(e,t)=>{var o;!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=r(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)s.call(e,o)&&e[o]&&(t=r(t,o));return t}(o)))}return e}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(o=(function(){return n}).apply(t,[]))||(e.exports=o)}()}}]);