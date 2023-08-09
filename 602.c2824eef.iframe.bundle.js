(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[602],{"./node_modules/@amsterdam/asc-assets/es/icons/Close.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var n=o("./node_modules/react/jsx-runtime.js");let r=function(e){return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,n.jsx)("path",{d:"M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>v});var n=o("./node_modules/react/jsx-runtime.js"),r=o("./node_modules/react/index.js"),s=o("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),i=o("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=o("./node_modules/polished/dist/polished.esm.js"),l=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),d=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),c=o("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let m={size:30},u=e=>(0,d.QJ)(11)({theme:e}),p=l.ZP.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,d.EN)("secondary")};
  border-right: 0;
  ${(0,a.pB)("border-color","0.1s ease-in-out")}
`,y=(0,l.ZP)(i.Z)`
  margin-right: 10px;
`,f=(0,l.ZP)(i.Z)`
  margin-left: 10px;
`,h=l.ZP.button`
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
  padding: ${({size:e,theme:t})=>e?"0":(0,d.QJ)(3,4)({theme:t})};
  ${({size:e,square:t})=>(e||t)&&(0,l.iv)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,a.dp)(e||m.size)}// width and height
    `}
  ${(0,a.pB)(["color","background-color"],"0.1s ease-in-out")}
  ${(()=>({theme:e,variant:t,color:o})=>{switch(t){case"primary":return(0,l.iv)`
          min-width: 90px;
          background-color: ${(0,d.EN)("primary")};
          color: ${(0,a.XV)((0,d.EN)("primary")({theme:e}))};
          ${(0,d.yh)((0,d.EN)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a._j)(.1,(0,d.EN)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,l.iv)`
          min-width: 90px;
          background-color: ${(0,d.EN)("secondary")};
          color: ${(0,d.EN)("tint","level1")};
          ${(0,d.yh)((0,d.EN)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a._j)(.1,(0,d.EN)("secondary")({theme:e}))};
          }

          ${t=>t&&(0,l.iv)`
              &:not(:disabled)&:focus
                ${p},
                &:not(:disabled)&:hover
                ${p} {
                border-left-color: ${(0,a._j)(.1,(0,d.EN)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,l.iv)`
          min-width: 90px;
          background-color: ${(0,d.EN)("tint","level4")};
          ${(0,d.yh)((0,d.EN)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,a._j)(.1,(0,d.EN)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,l.iv)`
          min-width: 90px;
          color: ${(0,d.EN)("primary")};
          border: 1px solid ${(0,d.EN)("primary")};
          background-color: ${(0,d.EN)("tint","level1")};
          ${(0,d.yh)((0,d.EN)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,d.EN)("primary")};
          }
        `;case"textButton":return(0,l.iv)`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${(0,d.EN)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${(0,d.yh)((0,d.EN)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${(0,a.pB)("color","0s")}

          &:hover {
            color: ${(0,d.EN)("secondary")};
            ${(0,d.yh)((0,d.EN)("secondary","main"))};
          }

          ${y} {
            margin-right: ${(0,d.QJ)(1)};
          }
          ${f} {
            margin-left: ${(0,d.QJ)(1)};
          }
        `;case"blank":return(0,l.iv)`
          background-color: ${(0,d.EN)("tint","level1")};
          ${(0,d.yh)((0,d.EN)("tint","level7"))};
          &:hover {
            background-color: ${(0,d.EN)("tint","level3")};
          }
        `;case"application":return(0,l.iv)`
          border: 1px solid ${(0,d.EN)("tint","level7")};
          background-color: ${(0,d.EN)("tint","level1")};
          height: 32px;
          padding: ${(0,d.QJ)(1,2)};
          ${(0,d.yh)((0,d.EN)("tint","level7"))};
          &:hover {
            background-color: ${(0,d.EN)("tint","level4")};
          }
        `;default:return(0,l.iv)`
          color: ${o?(0,a.XV)((0,d.EN)(o)({theme:e})):(0,d.EN)("primary")({theme:e})};
          ${o&&(0,l.iv)`
            background: ${(0,d.EN)(o)};
          `}

          ${!o&&(0,l.iv)`
            border: 1px solid ${(0,d.EN)("primary")};
          `}

        &:hover {
            background: ${o?(0,d.EN)(o,"dark")({theme:e}):(0,d.EN)("tint","level3")({theme:e})};
            ${!o&&(0,l.iv)`
              outline: 1px solid ${(0,d.EN)("primary")};
            `}
          }
        `}})()}
  ${(0,c.k)()} // ie fix
  ${({taskflow:e})=>e&&(0,l.iv)`
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
  ${i.Z} {
    flex-shrink: 0;
  }
  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    color: ${(0,d.EN)("tint","level4")};
    background-color: ${(0,d.EN)("tint","level3")};
    ${(0,d.yh)((0,d.EN)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:e})=>e&&(0,l.iv)`
        ${p} {
          border-left-color: ${(0,d.EN)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,l.iv)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var g=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let b=(0,r.forwardRef)((e,t)=>{var{children:o,iconLeft:r,iconRight:a,icon:l,iconSize:d,taskflow:c}=e,m=g(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let u={size:d||s.l.size};return(0,n.jsxs)(h,Object.assign({ref:t},m,{taskflow:c},{children:[r&&(0,n.jsx)(y,Object.assign({},u,{children:r})),l?(0,n.jsx)(i.Z,Object.assign({},u,{children:l})):o,a&&(0,n.jsx)(f,Object.assign({},u,{children:a})),c&&(0,n.jsx)(p,{})]}))}),v=b},"./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var n=o("./node_modules/polished/dist/polished.esm.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i=r.ZP.hr`
  height: 1px;
  margin: 0;
  border: none;
  ${({gutter:e})=>e&&(0,r.iv)`
      ${(0,n.e6)(0,"15px")}
    `}
  background-color:
    ${({theme:e,transparent:t})=>t?"background-color: transparent;":(0,s.EN)("tint","level4")({theme:e})};
`,a=i},"./node_modules/@amsterdam/asc-ui/es/components/Heading/Heading.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var n=o("./node_modules/react/jsx-runtime.js"),r=o("./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js"),s=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};function i(e){var{children:t,as:o}=e,i=s(e,["children","as"]);return(0,n.jsx)(r.Z,Object.assign({forwardedAs:o},i,{children:t}))}i.defaultProps={as:"h1"};let a=i},"./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let s=(0,n.iv)`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,i=(0,n.ZP)(r.Z)`
  ${s}
`},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var n=o("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");let r=n.Z},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>a,l:()=>s});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={size:20,padding:0,rotate:0},i=n.ZP.span.withConfig({shouldForwardProp:(e,t)=>!["size","rotate","padding","inline","color"].includes(e)&&t(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,n.iv)`
      background-image: url(${e});
    `}
  ${({size:e=s.size,padding:t=s.padding})=>(0,n.iv)`
    width: ${e-2*t}px;
    height: ${e-2*t}px;
  `}
  ${({padding:e})=>e&&(0,n.iv)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=s.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=s.size,padding:t=s.padding})=>(0,n.iv)`
      width: ${e-2*t}px;
      height: ${e-2*t}px;
    `}
  }

  ${({color:e})=>e&&(0,r.yh)(e)};
`,a=i},"./node_modules/@amsterdam/asc-ui/es/components/Modal/Modal.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>$});var n=o("./node_modules/react/jsx-runtime.js"),r=o("./node_modules/react/index.js"),s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=o("./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBarStyle.js"),a=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let l=s.ZP.div`
  background-color: ${(0,a.EN)("tint","level1")};
  overflow: auto;
  width: 100%;
  max-width: 620px;
  max-height: 75%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: all;

  ${i.Z} {
    min-height: 54px;
  }

  ${(0,a.F$)(!0)}
`;var d=o("./node_modules/@amsterdam/asc-ui/es/types/KeyboardKeys.js");let c=function(e){var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:window.document},m=["a[href]:not([disabled])","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])"],u=e=>({keyDown:t=>{if(e.current){let o=e.current,n=o.querySelectorAll(m.join(", ")),r=n[0],s=n[n.length-1],i=t.key===d.Z.Tab;i&&(t.shiftKey?c(o).activeElement===r&&s instanceof HTMLElement&&(s.focus(),t.preventDefault()):c(o).activeElement===s&&r instanceof HTMLElement&&(r.focus(),t.preventDefault()))}}});var p=o("./node_modules/polished/dist/polished.esm.js"),y=o("./node_modules/@amsterdam/asc-ui/es/components/shared/constants.js");let f=s.ZP.div`
  display: block;
  ${(0,p.FK)("fixed",0,0,0,0)};
  background-color: ${({backdropOpacity:e,theme:t})=>(0,p.DZ)(e||.3,(0,a.EN)("tint","level7")({theme:t}))};
  z-index: ${({zIndexOffset:e})=>e?y.vQ+e:y.vQ};

  & > * {
    pointer-events: none;
  }
`;var h=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let g=function(e){var{backdropOpacity:t,onClick:o}=e,r=h(e,["backdropOpacity","onClick"]);return(0,n.jsx)(f,Object.assign({backdropOpacity:t,onClick:e=>{o&&o(e)}},r))};var b=o("./node_modules/react-dom/index.js");let v=null;"undefined"!=typeof window&&(v=window.document.createElement("div")).setAttribute("style","position: absolute;");class j extends r.Component{static getOwnerDocument(e){let t=b.findDOMNode(e);return c(t)}componentDidMount(){this.setMountNode()}componentWillUnmount(){let{blurredNode:e}=this.props,t=this.element;t.removeAttribute("style"),e&&e.removeAttribute("style"),v&&v.parentNode===t&&t.removeChild(v)}setMountNode(){let{blurredNode:e,hideOverFlow:t=!0}=this.props,o=this.element;t&&o.setAttribute("style","overflow: hidden;"),v&&o.appendChild(v),e&&e.setAttribute("style","filter: blur(1px)")}get element(){let{element:e}=this.props,{body:t}=j.getOwnerDocument(this),o=t;return e&&(o=e),o}render(){let{children:e}=this.props;return v?b.createPortal(e,v):null}}var x=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let $=function(e){var{open:t,disablePortal:o,children:s,backdropOpacity:i,element:a,blurredNodeSelector:c,onClose:p,zIndexOffset:y}=e,f=x(e,["open","disablePortal","children","backdropOpacity","element","blurredNodeSelector","onClose","zIndexOffset"]);let h=(0,r.useRef)(null),{keyDown:b}=u(h),v=(0,r.useMemo)(()=>document.activeElement,[t]);(0,r.useEffect)(()=>{if(!t||!h.current)return;let e=h.current.querySelector(m.join(", "));e instanceof HTMLElement&&e.focus()},[t]);let $=()=>{p&&(v instanceof HTMLElement&&v.focus(),p())},w=o?r.Fragment:j;return t?(0,n.jsxs)(w,Object.assign({},o?{}:{element:a,blurredNode:c?window.document.querySelector(c):void 0},{children:[(0,n.jsx)(g,{backdropOpacity:i,onClick:$,zIndexOffset:y}),(0,n.jsx)(l,Object.assign({role:"dialog","aria-modal":"true",ref:h,onKeyDown:e=>{b(e),e.key===d.Z.Escape&&(e.stopPropagation(),$())},zIndexOffset:y},f,{children:s}))]})):null}},"./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBar.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o("./node_modules/react/jsx-runtime.js"),r=o("./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBarStyle.js"),s=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let i=function(e){var{children:t}=e,o=s(e,["children"]);return(0,n.jsx)(r.Z,Object.assign({},o,{children:t}))}},"./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBarStyle.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js"),s=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),i=o("./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js");let a=n.ZP.header`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 10px;
  background-color: ${({backgroundColor:e,theme:t})=>e||(0,s.EN)("tint","level1")({theme:t})};
  ${(0,r.k)()};

  @media screen and ${(0,s.eq)("min-width","tabletS")} {
    padding: 0 15px;
  }

  ${i.Z} {
    flex-grow: 1;
    margin-bottom: 0;
  }
`,l=a},"./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var n=o("./node_modules/react/jsx-runtime.js"),r=o("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js"),s=o("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),i=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let a=function(e){var{children:t}=e,o=i(e,["children"]);return o.color&&(0,s.Z)("You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules"),(0,n.jsx)(r.Z,Object.assign({},o,{children:t}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={em:(0,n.iv)`
    font-style: italic;
  `},i=n.ZP.p`
  ${({as:e,forwardedAs:t})=>{let o=null!=e?e:t;return"string"==typeof o&&s[o]}}
  margin: 0;
  ${(0,r.HE)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:e})=>e&&(0,n.iv)`
      font-weight: 700;
      color: ${(0,r.EN)("tint","level7")};
    `}
  ${({color:e})=>e&&(0,n.iv)`
      color: ${(0,r.EN)(e)};
    `}
  ${({fontSize:e})=>e&&(0,n.iv)`
      font-size: ${e}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,t,o)=>{"use strict";o.d(t,{k:()=>r});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let r=()=>(0,n.iv)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./node_modules/@amsterdam/asc-ui/es/types/KeyboardKeys.js":(e,t,o)=>{"use strict";var n;o.d(t,{Z:()=>r}),function(e){e.ArrowUp="ArrowUp",e.ArrowDown="ArrowDown",e.ArrowRight="ArrowRight",e.ArrowLeft="ArrowLeft",e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space="Space",e.Home="Home",e.End="End"}(n||(n={}));let r=n},"./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js":(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});let n=e=>{console.warn(e)}},"./node_modules/classnames/index.js":(e,t)=>{var o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var s=typeof o;if("string"===s||"number"===s)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===s){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(o=(function(){return r}).apply(t,[]))&&(e.exports=o)}()}}]);