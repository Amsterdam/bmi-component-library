"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[905],{"./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js":(e,r,n)=>{n.d(r,{A:()=>o});var t=n("./node_modules/react/jsx-runtime.js");let o=function(e){return(0,t.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,t.jsx)("path",{d:"m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-assets/es/icons/Close.js":(e,r,n)=>{n.d(r,{A:()=>o});var t=n("./node_modules/react/jsx-runtime.js");let o=function(e){return(0,t.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,t.jsx)("path",{d:"M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,r,n)=>{n.d(r,{A:()=>y});var t=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/react/index.js"),s=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),i=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=n("./node_modules/polished/dist/polished.esm.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),d=n("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let m=e=>(0,c.B7)(11)({theme:e}),u=l.default.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,c.hm)("secondary")};
  border-right: 0;
  ${(0,a.bm)("border-color","0.1s ease-in-out")}
`,p=(0,l.default)(i.A)`
  margin-right: 10px;
`,f=(0,l.default)(i.A)`
  margin-left: 10px;
`,h=l.default.button`
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
  padding: ${({size:e,theme:r})=>e?"0":(0,c.B7)(3,4)({theme:r})};
  ${({size:e,square:r})=>(e||r)&&(0,l.css)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,a.Ej)(e||30)}// width and height
    `}
  ${(0,a.bm)(["color","background-color"],"0.1s ease-in-out")}
  ${({theme:e,variant:r,color:n})=>{switch(r){case"primary":return(0,l.css)`
          min-width: 90px;
          background-color: ${(0,c.hm)("primary")};
          color: ${(0,a.W0)((0,c.hm)("primary")({theme:e}))};
          ${(0,c.G2)((0,c.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,c.hm)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,l.css)`
          min-width: 90px;
          background-color: ${(0,c.hm)("secondary")};
          color: ${(0,c.hm)("tint","level1")};
          ${(0,c.G2)((0,c.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,c.hm)("secondary")({theme:e}))};
          }

          ${r=>r&&(0,l.css)`
              &:not(:disabled)&:focus
                ${u},
                &:not(:disabled)&:hover
                ${u} {
                border-left-color: ${(0,a.e$)(.1,(0,c.hm)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,l.css)`
          min-width: 90px;
          background-color: ${(0,c.hm)("tint","level4")};
          ${(0,c.G2)((0,c.hm)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,c.hm)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,l.css)`
          min-width: 90px;
          color: ${(0,c.hm)("primary")};
          border: 1px solid ${(0,c.hm)("primary")};
          background-color: ${(0,c.hm)("tint","level1")};
          ${(0,c.G2)((0,c.hm)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,c.hm)("primary")};
          }
        `;case"textButton":return(0,l.css)`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${(0,c.hm)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${(0,c.G2)((0,c.hm)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${(0,a.bm)("color","0s")}

          &:hover {
            color: ${(0,c.hm)("secondary")};
            ${(0,c.G2)((0,c.hm)("secondary","main"))};
          }

          ${p} {
            margin-right: ${(0,c.B7)(1)};
          }
          ${f} {
            margin-left: ${(0,c.B7)(1)};
          }
        `;case"blank":return(0,l.css)`
          background-color: ${(0,c.hm)("tint","level1")};
          ${(0,c.G2)((0,c.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,c.hm)("tint","level3")};
          }
        `;case"application":return(0,l.css)`
          border: 1px solid ${(0,c.hm)("tint","level7")};
          background-color: ${(0,c.hm)("tint","level1")};
          height: 32px;
          padding: ${(0,c.B7)(1,2)};
          ${(0,c.G2)((0,c.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,c.hm)("tint","level4")};
          }
        `;default:return(0,l.css)`
          color: ${n?(0,a.W0)((0,c.hm)(n)({theme:e})):(0,c.hm)("primary")({theme:e})};
          ${n&&(0,l.css)`
            background: ${(0,c.hm)(n)};
          `}

          ${!n&&(0,l.css)`
            border: 1px solid ${(0,c.hm)("primary")};
          `}

        &:hover {
            background: ${n?(0,c.hm)(n,"dark")({theme:e}):(0,c.hm)("tint","level3")({theme:e})};
            ${!n&&(0,l.css)`
              outline: 1px solid ${(0,c.hm)("primary")};
            `}
          }
        `}}}
  ${(0,d.h)()} // ie fix
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
    color: ${(0,c.hm)("tint","level4")};
    background-color: ${(0,c.hm)("tint","level3")};
    ${(0,c.G2)((0,c.hm)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:e})=>e&&(0,l.css)`
        ${u} {
          border-left-color: ${(0,c.hm)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,l.css)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var g=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>r.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};let y=(0,o.forwardRef)((e,r)=>{var{children:n,iconLeft:o,iconRight:a,icon:l,iconSize:c,taskflow:d}=e,m=g(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let y={size:c||s.G.size};return(0,t.jsxs)(h,Object.assign({ref:r},m,{taskflow:d},{children:[o&&(0,t.jsx)(p,Object.assign({},y,{children:o})),l?(0,t.jsx)(i.A,Object.assign({},y,{children:l})):n,a&&(0,t.jsx)(f,Object.assign({},y,{children:a})),d&&(0,t.jsx)(u,{})]}))})},"./node_modules/@amsterdam/asc-ui/es/components/Heading/Heading.js":(e,r,n)=>{n.d(r,{A:()=>a});var t=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js"),s=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>r.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};function i(e){var{children:r,as:n}=e,i=s(e,["children","as"]);return(0,t.jsx)(o.A,Object.assign({forwardedAs:n},i,{children:r}))}i.defaultProps={as:"h1"};let a=i},"./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js":(e,r,n)=>{n.d(r,{A:()=>i});var t=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let s=(0,t.css)`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,i=(0,t.default)(o.A)`
  ${s}
`},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,r,n)=>{n.d(r,{A:()=>t});let t=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js").A},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,r,n)=>{n.d(r,{A:()=>i,G:()=>s});var t=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={size:20,padding:0,rotate:0},i=t.default.span.withConfig({shouldForwardProp:(e,r)=>!["size","rotate","padding","inline","color"].includes(e)&&r(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,t.css)`
      background-image: url(${e});
    `}
  ${({size:e=s.size,padding:r=s.padding})=>(0,t.css)`
    width: ${e-2*r}px;
    height: ${e-2*r}px;
  `}
  ${({padding:e})=>e&&(0,t.css)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=s.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=s.size,padding:r=s.padding})=>(0,t.css)`
      width: ${e-2*r}px;
      height: ${e-2*r}px;
    `}
  }

  ${({color:e})=>e&&(0,o.G2)(e)};
`},"./node_modules/@amsterdam/asc-ui/es/components/Link/Link.js":(e,r,n)=>{n.d(r,{A:()=>w});var t=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js");let s=function(e){return(0,t.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,t.jsx)("path",{d:"M19.006 0H32.01v12.992h-4.002V6.826L14.434 20.417l-2.83-2.818L25.187 3.998h-6.182V0zm7.002 13.991L26.018 32H.01V6.016h17.975l-3.98 3.978.02.02H4.01v17.988h18.006l-.01-10.013 4-3.998z",fillRule:"evenodd"})}))},i=function(e){return(0,t.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,t.jsx)("path",{d:"M0 27.996h32V32H0v-4.004zm22.36-13.983 2.83 2.823L16 26.044l-9.19-9.208 2.83-2.823L14 18.377V0h4v18.377l4.36-4.364z"})}))};var a=n("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),d=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),m=n("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let u=(0,l.css)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`,p=(0,l.css)`
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
`,x=l.default.span`
  width: 100%; /* IE11 Fix */
`,j=(0,l.default)(m.A)`
  display: inline-flex;
  ${({variant:e})=>{switch(e){case"blank":return u;case"inline":return p;default:return f}}}
  ${({darkBackground:e,$darkBackground:r})=>(e||r)&&(0,l.css)`
      &,
      &:hover {
        color: ${(0,c.hm)("tint","level1")};
        ${d.A} {
          ${(0,c.G2)((0,c.hm)("tint","level1"))}
        }
      }
    `};
`;var b=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>r.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};function v(e){var{children:r,variant:n,as:l,icon:c,inList:d}=e,m=b(e,["children","variant","as","icon","inList"]);return"with-chevron"===n&&(0,a.A)("Please note that the `with-chevron` variant will be deprecated soon, please use the `inList` prop"),c&&"string"!=typeof c&&(0,a.A)('Please note that passing a component to prop `icon` will be deprecated soon. If you need to use a custom Icon, just pass it as a child. If your link is a download or external link, you can pass `icon="download"` or `icon="external"`'),(0,t.jsxs)(j,Object.assign({},m,{variant:n,forwardedAs:l},{children:[(d||"with-chevron"===n)&&(0,t.jsx)(g,Object.assign({size:12},{children:(0,t.jsx)(o.A,{})})),d||"with-chevron"===n?(0,t.jsx)(x,{children:r}):r,("external"===c||"download"===c)&&(0,t.jsxs)(y,Object.assign({size:14},{children:["external"===c&&(0,t.jsx)(s,{}),"download"===c&&(0,t.jsx)(i,{})]})),c&&"string"!=typeof c&&c]}))}v.defaultProps={as:"a"};let w=v},"./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js":(e,r,n)=>{n.d(r,{A:()=>c});var t=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js");let i=(0,o.css)`
  margin-top: 0;
  color: inherit;
`,a=(0,o.default)(s.A)`
  ${i};
`;var l=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>r.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};let c=function(e){var{children:r,as:n}=e,o=l(e,["children","as"]);return(0,t.jsx)(a,Object.assign({forwardedAs:n},o,{children:r}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js":(e,r,n)=>{n.d(r,{A:()=>a});var t=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js"),s=n("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),i=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>r.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};let a=function(e){var{children:r}=e,n=i(e,["children"]);return n.color&&(0,s.A)("You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules"),(0,t.jsx)(o.A,Object.assign({},n,{children:r}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,r,n)=>{n.d(r,{A:()=>i});var t=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={em:(0,t.css)`
    font-style: italic;
  `},i=t.default.p`
  ${({as:e,forwardedAs:r})=>{let n=null!=e?e:r;return"string"==typeof n&&s[n]}}
  margin: 0;
  ${(0,o.Jx)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:e})=>e&&(0,t.css)`
      font-weight: 700;
      color: ${(0,o.hm)("tint","level7")};
    `}
  ${({color:e})=>e&&(0,t.css)`
      color: ${(0,o.hm)(e)};
    `}
  ${({fontSize:e})=>e&&(0,t.css)`
      font-size: ${e}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,r,n)=>{n.d(r,{h:()=>o});var t=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");let o=()=>(0,t.css)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js":(e,r,n)=>{n.d(r,{A:()=>t});let t=e=>{console.warn(e)}},"./src/common/src/DocumentViewer/DocumentViewer.stories.tsx":(e,r,n)=>{n.r(r),n.d(r,{Image:()=>X,NoViewerAvailable:()=>Q,NotFound:()=>J,PDF:()=>Z,__namedExportsOrder:()=>er,default:()=>ee});var t,o,s=n("./node_modules/react/jsx-runtime.js"),i=n("./node_modules/react/index.js"),a=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),l=n("./node_modules/@amsterdam/asc-ui/es/components/Heading/Heading.js"),c=n("./node_modules/@amsterdam/asc-assets/es/icons/Close.js"),d=n("./node_modules/deepmerge/dist/cjs.js"),m=n.n(d),u=n("./node_modules/@amsterdam/asc-ui/es/theme/ThemeProvider.js"),p=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>r.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};let f={typography:{h2:{fontSize:"20px",lineHeight:"24px",breakpoints:{laptop:{fontSize:"24px",lineHeight:"30px"}}},h3:{fontSize:"18px",lineHeight:"23px",breakpoints:void 0},h4:{fontSize:"14px",lineHeight:"17px",breakpoints:{laptop:{fontSize:"16px",lineHeight:"20px"}}},p:{fontSize:"16px",lineHeight:"20px",breakpoints:void 0},a:{fontSize:"16px",lineHeight:"20px",breakpoints:void 0}}},h=function(e){var{overrides:r,deep:n=!0,children:t}=e,o=p(e,["overrides","deep","children"]);let i=r?n?m()(f,r):Object.assign(Object.assign({},f),r):f;return(0,s.jsx)(u.A,Object.assign({},o,{overrides:i,deep:n},{children:t}))};var g=n("./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js"),y=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),x=n("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js");let j={error:(0,a.hm)("error"),info:(0,a.hm)("primary"),neutral:(0,a.hm)("tint","level3"),warning:(0,a.hm)("support","focus")},b=y.default.div`
  float: right;
  margin-left: ${(0,a.B7)(4)};
`,v=(0,y.default)(x.A)`
  background-color: transparent;
  min-width: initial; /* non-blank buttons have a min-width. This is an exception and need to override this */
`,w=y.default.div`
  width: 100%;
  overflow-wrap: anywhere;
  overflow: hidden;

  & > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
`,O=(0,y.default)(l.A)`
  margin: 0;
`,_=y.default.div`
  position: relative;
  width: 100%; /* IE11 fix */

  /* IE11 fix: display 'flex' only when dismissible */
  ${({dismissible:e})=>e&&(0,y.css)`
      display: flex;
    `}

  ${({level:e,outline:r,theme:n})=>(0,y.css)`
      padding: ${(0,a.B7)(4)};

      /* Solid colors */
      ${!r&&(0,y.css)`
        background-color: ${j[e||"neutral"]({theme:n})};
      `}
      ${!r&&("error"===e||"info"===e)&&(0,y.css)`
        ${(0,a.G2)((0,a.hm)("tint","level1"))}
        &, & * {
          color: ${(0,a.hm)("tint","level1")};
        }
      `}
      
      /* Outline color */
      ${r&&(0,y.css)`
        box-shadow: ${j[e||"neutral"]({theme:n})}
          0px 0px 0px 2px inset;
      `}
      ${r&&("error"===e||"info"===e)&&(0,y.css)`
        ${(0,a.G2)((0,a.hm)("tint","level7"))}
      `}
    `}
`;var $=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>r.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};let S="Sluiten",A=function(e){var{children:r,content:n,dismissible:t,heading:o,level:a,onDismiss:l,outline:d}=e,m=$(e,["children","content","dismissible","heading","level","onDismiss","outline"]);let[u,p]=(0,i.useState)(!0),f="tertiary";return d?f="blank":"error"===a?f="secondary":"info"===a&&(f="primary"),u?(0,s.jsx)(_,Object.assign({},Object.assign({dismissible:t,level:a,outline:d},m),{tabIndex:0,role:"alert","aria-live":"polite"},{children:(0,s.jsx)(h,{children:(0,s.jsxs)(w,{children:[t&&(0,s.jsx)(b,{children:(0,s.jsx)(v,{title:S,"aria-label":S,size:30,variant:f,onClick:()=>{p(!1),l&&l()},iconSize:20,icon:(0,s.jsx)(c.A,{})})}),o&&(0,s.jsx)(O,Object.assign({forwardedAs:"strong",styleAs:"h3"},{children:o})),n&&(0,s.jsx)(g.A,{children:n}),r]})})})):null},R=function(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,s.jsx)("path",{d:"M50 100C22.4 99.967.033 77.6 0 50h10c0 22.091 17.909 40 40 40s40-17.909 40-40-17.909-40-40-40V0c27.614 0 50 22.386 50 50s-22.386 50-50 50z"})}))};var I=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js");let D=y.default.div.withConfig({shouldForwardProp:(e,r)=>!["size","color"].includes(e)&&r(e)})`
  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  & svg {
    animation: rotating 1s linear infinite;
  }
`;var P=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>r.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};function k(e){var{size:r,color:n}=e,t=P(e,["size","color"]);return(0,s.jsx)(D,Object.assign({size:r},t,{children:(0,s.jsx)(I.A,Object.assign({size:r,color:n},{children:(0,s.jsx)(R,{})}))}))}function T(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function z(){var e=T([`
	display: flex;
	flex-direction: column;
`]);return z=function(){return e},e}function E(){var e=T([`
	margin: 0 auto;
`]);return E=function(){return e},e}k.defaultProps={size:20};var V=y.default.div(z()),C=(0,y.default)(k)(E()),B=function(e){var r=e.uri;return(0,s.jsx)("img",{src:r,alt:"Afbeelding"})};try{B.displayName="ImageRenderer",B.__docgenInfo={description:"",displayName:"ImageRenderer",props:{uri:{defaultValue:null,description:"",name:"uri",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentViewer/Renderer/ImageRenderer.tsx#ImageRenderer"]={docgenInfo:B.__docgenInfo,name:"ImageRenderer",path:"src/common/src/DocumentViewer/Renderer/ImageRenderer.tsx#ImageRenderer"})}catch(e){}var F=n("./node_modules/@amsterdam/asc-ui/es/components/Link/Link.js");function L(){var e,r,n=(e=[`
	height: calc(100vh - 80px);
	width: 100%;
`],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return L=function(){return n},n}var G=y.default.object(L()),H=function(e){var r=e.uri;return(0,s.jsx)(G,{data:r,role:"document",children:(0,s.jsxs)(A,{level:"warning",outline:!0,children:[(0,s.jsx)(g.A,{children:"Document kan niet weergegeven worden in de browser."}),(0,s.jsx)(F.A,{href:r,icon:"download",children:"Download"})]})})};try{H.displayName="PDFRenderer",H.__docgenInfo={description:"",displayName:"PDFRenderer",props:{uri:{defaultValue:null,description:"",name:"uri",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentViewer/Renderer/PDFRenderer.tsx#PDFRenderer"]={docgenInfo:H.__docgenInfo,name:"PDFRenderer",path:"src/common/src/DocumentViewer/Renderer/PDFRenderer.tsx#PDFRenderer"})}catch(e){}var N=function(e){var r=e.uri;return(0,s.jsxs)(A,{level:"warning",outline:!0,children:[(0,s.jsx)(g.A,{children:"Document kan niet weergegeven worden in de browser."}),(0,s.jsx)(F.A,{href:r,icon:"download",children:"Download"})]})};try{N.displayName="DownloadRenderer",N.__docgenInfo={description:"",displayName:"DownloadRenderer",props:{uri:{defaultValue:null,description:"",name:"uri",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentViewer/Renderer/DownloadRenderer.tsx#DownloadRenderer"]={docgenInfo:N.__docgenInfo,name:"DownloadRenderer",path:"src/common/src/DocumentViewer/Renderer/DownloadRenderer.tsx#DownloadRenderer"})}catch(e){}var Y=((t={})[t.jpg=0]="jpg",t[t.jpeg=1]="jpeg",t[t["image/jpg"]=2]="image/jpg",t[t["image/jpeg"]=3]="image/jpeg",t[t.png=4]="png",t[t["image/png"]=5]="image/png",t[t.bmp=6]="bmp",t[t["image/bmp"]=7]="image/bmp",t[t.tif=8]="tif",t[t.tiff=9]="tiff",t[t["image/tif"]=10]="image/tif",t[t["image/tiff"]=11]="image/tiff",t),K=((o={})[o["application/pdf"]=0]="application/pdf",o[o.pdf=1]="pdf",o),q=function(e){var r=e.uri,n=e.contentType;return n in Y?(0,s.jsx)(B,{uri:r}):n in K?(0,s.jsx)(H,{uri:r}):(0,s.jsx)(N,{uri:r})};try{q.displayName="DocumentRenderer",q.__docgenInfo={description:"",displayName:"DocumentRenderer",props:{uri:{defaultValue:null,description:"",name:"uri",required:!0,type:{name:"string"}},contentType:{defaultValue:null,description:"",name:"contentType",required:!0,type:{name:"string | ContentTypes"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentViewer/Renderer/DocumentRenderer.tsx#DocumentRenderer"]={docgenInfo:q.__docgenInfo,name:"DocumentRenderer",path:"src/common/src/DocumentViewer/Renderer/DocumentRenderer.tsx#DocumentRenderer"})}catch(e){}function U(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}function M(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n,t,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var s=[],i=!0,a=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(s.push(n.value),!r||s.length!==r);i=!0);}catch(e){a=!0,t=e}finally{try{i||null==o.return||o.return()}finally{if(a)throw t}}return s}}(e,r)||function(e,r){if(e){if("string"==typeof e)return U(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=function(e){var r=e.uri,n=e.onFailure,t=e.currentFilename,o=M((0,i.useState)({loading:!0}),2),c=o[0],d=o[1],m=c.loading,u=c.filename,p=c.error,f=c.contentType,h=function(e){d(function(r){return function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t,o,s;t=e,o=r,s=n[r],r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s})}return e}({},r,e)})};return((0,i.useEffect)(function(){h({loading:!0,error:void 0,contentType:void 0}),fetch(r,{method:"GET"}).then(function(e){if(!e.ok)throw Error(404===e.status?"Document niet gevonden.":"Fout bij het ophalen.");var r,n,t,o=M((null==(r=e.headers.get("content-type"))?void 0:r.split(";"))||[],1)[0];if(!o)throw Error("Fout bij het ophalen.");h({loading:!1,contentType:o,filename:null==(t=((null==(n=e.headers.get("content-disposition"))?void 0:n.split("filename="))||[])[1])?void 0:t.replace(/^"(.+(?="$))"$/,"$1")})}).catch(function(e){h({loading:!1,error:e.message}),n&&n(e)})},[r]),m)?(0,s.jsx)(V,{"data-testid":"document-viewer",children:(0,s.jsx)(C,{"data-testid":"spinner",color:(0,a.hm)("secondary"),size:25})}):(0,s.jsxs)(V,{"data-testid":"document-viewer",children:[(0,s.jsx)(l.A,{forwardedAs:"h3",children:null!=u?u:t}),p&&(0,s.jsx)(A,{level:"error",outline:!0,children:p}),f&&(0,s.jsx)(q,{uri:r,contentType:f})]})};try{W.displayName="DocumentViewer",W.__docgenInfo={description:"",displayName:"DocumentViewer",props:{uri:{defaultValue:null,description:"",name:"uri",required:!0,type:{name:"string"}},onFailure:{defaultValue:null,description:"",name:"onFailure",required:!1,type:{name:"((e: Error) => void)"}},currentFilename:{defaultValue:null,description:"",name:"currentFilename",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentViewer/DocumentViewer.tsx#DocumentViewer"]={docgenInfo:W.__docgenInfo,name:"DocumentViewer",path:"src/common/src/DocumentViewer/DocumentViewer.tsx#DocumentViewer"})}catch(e){}var J=function(){return(0,s.jsx)(W,{currentFilename:"notfound.txt",uri:"assets/notfound.txt"})},Q=function(){return(0,s.jsx)(W,{currentFilename:"example.xlsx",uri:"assets/example.xlsx"})},X=function(){return(0,s.jsx)(W,{currentFilename:"example.png",uri:"assets/example.png"})},Z=function(){return(0,s.jsx)(W,{currentFilename:"example.pdf",uri:"assets/example.pdf"})};let ee={title:"common/DocumentViewer",component:W};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <DocumentViewer currentFilename="notfound.txt" uri="assets/notfound.txt" />;
}`,...J.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <DocumentViewer currentFilename="example.xlsx" uri="assets/example.xlsx" />;
}`,...Q.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <DocumentViewer currentFilename="example.png" uri="assets/example.png" />;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <DocumentViewer currentFilename="example.pdf" uri="assets/example.pdf" />;
}`,...Z.parameters?.docs?.source}}};let er=["NotFound","NoViewerAvailable","Image","PDF"]}}]);