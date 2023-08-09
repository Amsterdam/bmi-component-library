"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[481],{"./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js":(e,n,r)=>{r.d(n,{Z:()=>o});var t=r("./node_modules/react/jsx-runtime.js");let o=function(e){return(0,t.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,t.jsx)("path",{d:"m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-assets/es/icons/Close.js":(e,n,r)=>{r.d(n,{Z:()=>o});var t=r("./node_modules/react/jsx-runtime.js");let o=function(e){return(0,t.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,t.jsx)("path",{d:"M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,n,r)=>{r.d(n,{Z:()=>j});var t=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/react/index.js"),i=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),s=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=r("./node_modules/polished/dist/polished.esm.js"),l=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),d=r("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let u={size:30},m=e=>(0,c.QJ)(11)({theme:e}),p=l.ZP.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,c.EN)("secondary")};
  border-right: 0;
  ${(0,a.pB)("border-color","0.1s ease-in-out")}
`,f=(0,l.ZP)(s.Z)`
  margin-right: 10px;
`,g=(0,l.ZP)(s.Z)`
  margin-left: 10px;
`,y=l.ZP.button`
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
  padding: ${({size:e,theme:n})=>e?"0":(0,c.QJ)(3,4)({theme:n})};
  ${({size:e,square:n})=>(e||n)&&(0,l.iv)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,a.dp)(e||u.size)}// width and height
    `}
  ${(0,a.pB)(["color","background-color"],"0.1s ease-in-out")}
  ${(()=>({theme:e,variant:n,color:r})=>{switch(n){case"primary":return(0,l.iv)`
          min-width: 90px;
          background-color: ${(0,c.EN)("primary")};
          color: ${(0,a.XV)((0,c.EN)("primary")({theme:e}))};
          ${(0,c.yh)((0,c.EN)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a._j)(.1,(0,c.EN)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,l.iv)`
          min-width: 90px;
          background-color: ${(0,c.EN)("secondary")};
          color: ${(0,c.EN)("tint","level1")};
          ${(0,c.yh)((0,c.EN)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a._j)(.1,(0,c.EN)("secondary")({theme:e}))};
          }

          ${n=>n&&(0,l.iv)`
              &:not(:disabled)&:focus
                ${p},
                &:not(:disabled)&:hover
                ${p} {
                border-left-color: ${(0,a._j)(.1,(0,c.EN)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,l.iv)`
          min-width: 90px;
          background-color: ${(0,c.EN)("tint","level4")};
          ${(0,c.yh)((0,c.EN)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,a._j)(.1,(0,c.EN)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,l.iv)`
          min-width: 90px;
          color: ${(0,c.EN)("primary")};
          border: 1px solid ${(0,c.EN)("primary")};
          background-color: ${(0,c.EN)("tint","level1")};
          ${(0,c.yh)((0,c.EN)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,c.EN)("primary")};
          }
        `;case"textButton":return(0,l.iv)`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${(0,c.EN)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${(0,c.yh)((0,c.EN)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${(0,a.pB)("color","0s")}

          &:hover {
            color: ${(0,c.EN)("secondary")};
            ${(0,c.yh)((0,c.EN)("secondary","main"))};
          }

          ${f} {
            margin-right: ${(0,c.QJ)(1)};
          }
          ${g} {
            margin-left: ${(0,c.QJ)(1)};
          }
        `;case"blank":return(0,l.iv)`
          background-color: ${(0,c.EN)("tint","level1")};
          ${(0,c.yh)((0,c.EN)("tint","level7"))};
          &:hover {
            background-color: ${(0,c.EN)("tint","level3")};
          }
        `;case"application":return(0,l.iv)`
          border: 1px solid ${(0,c.EN)("tint","level7")};
          background-color: ${(0,c.EN)("tint","level1")};
          height: 32px;
          padding: ${(0,c.QJ)(1,2)};
          ${(0,c.yh)((0,c.EN)("tint","level7"))};
          &:hover {
            background-color: ${(0,c.EN)("tint","level4")};
          }
        `;default:return(0,l.iv)`
          color: ${r?(0,a.XV)((0,c.EN)(r)({theme:e})):(0,c.EN)("primary")({theme:e})};
          ${r&&(0,l.iv)`
            background: ${(0,c.EN)(r)};
          `}

          ${!r&&(0,l.iv)`
            border: 1px solid ${(0,c.EN)("primary")};
          `}

        &:hover {
            background: ${r?(0,c.EN)(r,"dark")({theme:e}):(0,c.EN)("tint","level3")({theme:e})};
            ${!r&&(0,l.iv)`
              outline: 1px solid ${(0,c.EN)("primary")};
            `}
          }
        `}})()}
  ${(0,d.k)()} // ie fix
  ${({taskflow:e})=>e&&(0,l.iv)`
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
      &:focus ${p}:after {
        opacity: 1;
      }
    `}
  ${s.Z} {
    flex-shrink: 0;
  }
  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    color: ${(0,c.EN)("tint","level4")};
    background-color: ${(0,c.EN)("tint","level3")};
    ${(0,c.yh)((0,c.EN)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:e})=>e&&(0,l.iv)`
        ${p} {
          border-left-color: ${(0,c.EN)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,l.iv)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var h=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};let v=(0,o.forwardRef)((e,n)=>{var{children:r,iconLeft:o,iconRight:a,icon:l,iconSize:c,taskflow:d}=e,u=h(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let m={size:c||i.l.size};return(0,t.jsxs)(y,Object.assign({ref:n},u,{taskflow:d},{children:[o&&(0,t.jsx)(f,Object.assign({},m,{children:o})),l?(0,t.jsx)(s.Z,Object.assign({},m,{children:l})):r,a&&(0,t.jsx)(g,Object.assign({},m,{children:a})),d&&(0,t.jsx)(p,{})]}))}),j=v},"./node_modules/@amsterdam/asc-ui/es/components/Heading/Heading.js":(e,n,r)=>{r.d(n,{Z:()=>a});var t=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js"),i=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};function s(e){var{children:n,as:r}=e,s=i(e,["children","as"]);return(0,t.jsx)(o.Z,Object.assign({forwardedAs:r},s,{children:n}))}s.defaultProps={as:"h1"};let a=s},"./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js":(e,n,r)=>{r.d(n,{Z:()=>s});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let i=(0,t.iv)`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,s=(0,t.ZP)(o.Z)`
  ${i}
`},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,n,r)=>{r.d(n,{Z:()=>o});var t=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");let o=t.Z},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,n,r)=>{r.d(n,{Z:()=>a,l:()=>i});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={size:20,padding:0,rotate:0},s=t.ZP.span.withConfig({shouldForwardProp:(e,n)=>!["size","rotate","padding","inline","color"].includes(e)&&n(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,t.iv)`
      background-image: url(${e});
    `}
  ${({size:e=i.size,padding:n=i.padding})=>(0,t.iv)`
    width: ${e-2*n}px;
    height: ${e-2*n}px;
  `}
  ${({padding:e})=>e&&(0,t.iv)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=i.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=i.size,padding:n=i.padding})=>(0,t.iv)`
      width: ${e-2*n}px;
      height: ${e-2*n}px;
    `}
  }

  ${({color:e})=>e&&(0,o.yh)(e)};
`,a=s},"./node_modules/@amsterdam/asc-ui/es/components/Link/Link.js":(e,n,r)=>{r.d(n,{Z:()=>w});var t=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js");let i=function(e){return(0,t.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,t.jsx)("path",{d:"M19.006 0H32.01v12.992h-4.002V6.826L14.434 20.417l-2.83-2.818L25.187 3.998h-6.182V0zm7.002 13.991L26.018 32H.01V6.016h17.975l-3.98 3.978.02.02H4.01v17.988h18.006l-.01-10.013 4-3.998z",fillRule:"evenodd"})}))},s=function(e){return(0,t.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,t.jsx)("path",{d:"M0 27.996h32V32H0v-4.004zm22.36-13.983 2.83 2.823L16 26.044l-9.19-9.208 2.83-2.823L14 18.377V0h4v18.377l4.36-4.364z"})}))};var a=r("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),l=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),d=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),u=r("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let m=(0,l.iv)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`,p=(0,l.iv)`
  color: ${(0,c.EN)("primary")};
  ${(0,c.yh)((0,c.EN)("primary"))};

  &:hover {
    color: ${(0,c.EN)("secondary")};
    ${(0,c.yh)((0,c.EN)("secondary"))};
  }
`,f=(0,l.iv)`
  text-decoration: none;
  font-weight: 700;
  padding-right: ${(0,c.QJ)(1)};
  color: ${(0,c.EN)("tint","level7")};

  &:hover {
    text-decoration: underline;
    color: ${(0,c.EN)("secondary")};
    ${(0,c.yh)((0,c.EN)("secondary"))};
  }
`,g=(0,l.ZP)(d.Z)`
  display: inline;
`,y=(0,l.ZP)(g)`
  margin-right: ${(0,c.QJ)(1)};
`,h=(0,l.ZP)(g)`
  margin-left: ${(0,c.QJ)(2)};
`,v=l.ZP.span`
  width: 100%; /* IE11 Fix */
`,j=(0,l.ZP)(u.Z)`
  display: inline-flex;
  ${({variant:e})=>{switch(e){case"blank":return m;case"inline":return p;default:return f}}}
  ${({darkBackground:e,$darkBackground:n})=>(e||n)&&(0,l.iv)`
      &,
      &:hover {
        color: ${(0,c.EN)("tint","level1")};
        ${d.Z} {
          ${(0,c.yh)((0,c.EN)("tint","level1"))}
        }
      }
    `};
`;var b=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};function x(e){var{children:n,variant:r,as:l,icon:c,inList:d}=e,u=b(e,["children","variant","as","icon","inList"]);return"with-chevron"===r&&(0,a.Z)("Please note that the `with-chevron` variant will be deprecated soon, please use the `inList` prop"),c&&"string"!=typeof c&&(0,a.Z)('Please note that passing a component to prop `icon` will be deprecated soon. If you need to use a custom Icon, just pass it as a child. If your link is a download or external link, you can pass `icon="download"` or `icon="external"`'),(0,t.jsxs)(j,Object.assign({},u,{variant:r,forwardedAs:l},{children:[(d||"with-chevron"===r)&&(0,t.jsx)(y,Object.assign({size:12},{children:(0,t.jsx)(o.Z,{})})),d||"with-chevron"===r?(0,t.jsx)(v,{children:n}):n,("external"===c||"download"===c)&&(0,t.jsxs)(h,Object.assign({size:14},{children:["external"===c&&(0,t.jsx)(i,{}),"download"===c&&(0,t.jsx)(s,{})]})),c&&"string"!=typeof c&&c]}))}x.defaultProps={as:"a"};let w=x},"./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js":(e,n,r)=>{r.d(n,{Z:()=>c});var t=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js");let s=(0,o.iv)`
  margin-top: 0;
  color: inherit;
`,a=(0,o.ZP)(i.Z)`
  ${s};
`;var l=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};let c=function(e){var{children:n,as:r}=e,o=l(e,["children","as"]);return(0,t.jsx)(a,Object.assign({forwardedAs:r},o,{children:n}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js":(e,n,r)=>{r.d(n,{Z:()=>a});var t=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js"),i=r("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),s=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};let a=function(e){var{children:n}=e,r=s(e,["children"]);return r.color&&(0,i.Z)("You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules"),(0,t.jsx)(o.Z,Object.assign({},r,{children:n}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,n,r)=>{r.d(n,{Z:()=>s});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={em:(0,t.iv)`
    font-style: italic;
  `},s=t.ZP.p`
  ${({as:e,forwardedAs:n})=>{let r=null!=e?e:n;return"string"==typeof r&&i[r]}}
  margin: 0;
  ${(0,o.HE)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:e})=>e&&(0,t.iv)`
      font-weight: 700;
      color: ${(0,o.EN)("tint","level7")};
    `}
  ${({color:e})=>e&&(0,t.iv)`
      color: ${(0,o.EN)(e)};
    `}
  ${({fontSize:e})=>e&&(0,t.iv)`
      font-size: ${e}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,n,r)=>{r.d(n,{k:()=>o});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js");let o=()=>(0,t.iv)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js":(e,n,r)=>{r.d(n,{Z:()=>t});let t=e=>{console.warn(e)}},"./src/common/src/DocumentViewer/DocumentViewer.stories.tsx":(e,n,r)=>{r.r(n),r.d(n,{Image:()=>ed,NoViewerAvailable:()=>ec,NotFound:()=>el,PDF:()=>eu,default:()=>em});var t,o,i,s,a,l,c,d,u,m,p,f,g,y,h=r("./node_modules/react/jsx-runtime.js"),v=r("./node_modules/react/index.js"),j=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),b=r("./node_modules/@amsterdam/asc-ui/es/components/Heading/Heading.js"),x=r("./node_modules/@amsterdam/asc-assets/es/icons/Close.js"),w=r("./node_modules/deepmerge/dist/cjs.js"),O=r.n(w),$=r("./node_modules/@amsterdam/asc-ui/es/theme/ThemeProvider.js"),_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};let E={typography:{h2:{fontSize:"20px",lineHeight:"24px",breakpoints:{laptop:{fontSize:"24px",lineHeight:"30px"}}},h3:{fontSize:"18px",lineHeight:"23px",breakpoints:void 0},h4:{fontSize:"14px",lineHeight:"17px",breakpoints:{laptop:{fontSize:"16px",lineHeight:"20px"}}},p:{fontSize:"16px",lineHeight:"20px",breakpoints:void 0},a:{fontSize:"16px",lineHeight:"20px",breakpoints:void 0}}},S=function(e){var{overrides:n,deep:r=!0,children:t}=e,o=_(e,["overrides","deep","children"]);let i=n?r?O()(E,n):Object.assign(Object.assign({},E),n):E;return(0,h.jsx)($.Z,Object.assign({},o,{overrides:i,deep:r},{children:t}))};var P=r("./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js"),N=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),R=r("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js");let Z={error:(0,j.EN)("error"),info:(0,j.EN)("primary"),neutral:(0,j.EN)("tint","level3"),warning:(0,j.EN)("support","focus")},D=N.ZP.div`
  float: right;
  margin-left: ${(0,j.QJ)(4)};
`,I=(0,N.ZP)(R.Z)`
  background-color: transparent;
  min-width: initial; /* non-blank buttons have a min-width. This is an exception and need to override this */
`,k=N.ZP.div`
  width: 100%;
  overflow-wrap: anywhere;
  overflow: hidden;

  & > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
`,T=(0,N.ZP)(b.Z)`
  margin: 0;
`,z=N.ZP.div`
  position: relative;
  width: 100%; /* IE11 fix */

  /* IE11 fix: display 'flex' only when dismissible */
  ${({dismissible:e})=>e&&(0,N.iv)`
      display: flex;
    `}

  ${({level:e,outline:n,theme:r})=>(0,N.iv)`
      padding: ${(0,j.QJ)(4)};

      /* Solid colors */
      ${!n&&(0,N.iv)`
        background-color: ${Z[e||"neutral"]({theme:r})};
      `}
      ${!n&&("error"===e||"info"===e)&&(0,N.iv)`
        ${(0,j.yh)((0,j.EN)("tint","level1"))}
        &, & * {
          color: ${(0,j.EN)("tint","level1")};
        }
      `}
      
      /* Outline color */
      ${n&&(0,N.iv)`
        box-shadow: ${Z[e||"neutral"]({theme:r})}
          0px 0px 0px 2px inset;
      `}
      ${n&&("error"===e||"info"===e)&&(0,N.iv)`
        ${(0,j.yh)((0,j.EN)("tint","level7"))}
      `}
    `}
`;var V=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};let A="Sluiten",C=function(e){var{children:n,content:r,dismissible:t,heading:o,level:i,onDismiss:s,outline:a}=e,l=V(e,["children","content","dismissible","heading","level","onDismiss","outline"]);let[c,d]=(0,v.useState)(!0),u="tertiary";return a?u="blank":"error"===i?u="secondary":"info"===i&&(u="primary"),c?(0,h.jsx)(z,Object.assign({},Object.assign({dismissible:t,level:i,outline:a},l),{tabIndex:0,role:"alert","aria-live":"polite"},{children:(0,h.jsx)(S,{children:(0,h.jsxs)(k,{children:[t&&(0,h.jsx)(D,{children:(0,h.jsx)(I,{title:A,"aria-label":A,size:30,variant:u,onClick:()=>{d(!1),s&&s()},iconSize:20,icon:(0,h.jsx)(x.Z,{})})}),o&&(0,h.jsx)(T,Object.assign({forwardedAs:"strong",styleAs:"h3"},{children:o})),r&&(0,h.jsx)(P.Z,{children:r}),n]})})})):null},F=function(e){return(0,h.jsx)("svg",Object.assign({viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,h.jsx)("path",{d:"M50 100C22.4 99.967.033 77.6 0 50h10c0 22.091 17.909 40 40 40s40-17.909 40-40-17.909-40-40-40V0c27.614 0 50 22.386 50 50s-22.386 50-50 50z"})}))};var L=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js");let B=N.ZP.div.withConfig({shouldForwardProp:(e,n)=>!["size","color"].includes(e)&&n(e)})`
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
`;var H=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};function Y(e){var{size:n,color:r}=e,t=H(e,["size","color"]);return(0,h.jsx)(B,Object.assign({size:n},t,{children:(0,h.jsx)(L.Z,Object.assign({size:n,color:r},{children:(0,h.jsx)(F,{})}))}))}function J(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function K(){var e=J(["\n	display: flex;\n	flex-direction: column;\n"]);return K=function(){return e},e}function Q(){var e=J(["\n	margin: 0 auto;\n"]);return Q=function(){return e},e}Y.defaultProps={size:20};var q=N.ZP.div(K()),U=(0,N.ZP)(Y)(Q()),M=function(e){var n=e.uri;return(0,h.jsx)("img",{src:n,alt:"Afbeelding"})};try{M.displayName="ImageRenderer",M.__docgenInfo={description:"",displayName:"ImageRenderer",props:{uri:{defaultValue:null,description:"",name:"uri",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentViewer/Renderer/ImageRenderer.tsx#ImageRenderer"]={docgenInfo:M.__docgenInfo,name:"ImageRenderer",path:"src/common/src/DocumentViewer/Renderer/ImageRenderer.tsx#ImageRenderer"})}catch(e){}var W=r("./node_modules/@amsterdam/asc-ui/es/components/Link/Link.js");function X(){var e=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n	height: calc(100vh - 80px);\n	width: 100%;\n"]);return X=function(){return e},e}var G=N.ZP.object(X()),ee=function(e){var n=e.uri;return(0,h.jsx)(G,{data:n,role:"document",children:(0,h.jsxs)(C,{level:"warning",outline:!0,children:[(0,h.jsx)(P.Z,{children:"Document kan niet weergegeven worden in de browser."}),(0,h.jsx)(W.Z,{href:n,icon:"download",children:"Download"})]})})};try{ee.displayName="PDFRenderer",ee.__docgenInfo={description:"",displayName:"PDFRenderer",props:{uri:{defaultValue:null,description:"",name:"uri",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentViewer/Renderer/PDFRenderer.tsx#PDFRenderer"]={docgenInfo:ee.__docgenInfo,name:"PDFRenderer",path:"src/common/src/DocumentViewer/Renderer/PDFRenderer.tsx#PDFRenderer"})}catch(e){}var en=function(e){var n=e.uri;return(0,h.jsxs)(C,{level:"warning",outline:!0,children:[(0,h.jsx)(P.Z,{children:"Document kan niet weergegeven worden in de browser."}),(0,h.jsx)(W.Z,{href:n,icon:"download",children:"Download"})]})};try{en.displayName="DownloadRenderer",en.__docgenInfo={description:"",displayName:"DownloadRenderer",props:{uri:{defaultValue:null,description:"",name:"uri",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentViewer/Renderer/DownloadRenderer.tsx#DownloadRenderer"]={docgenInfo:en.__docgenInfo,name:"DownloadRenderer",path:"src/common/src/DocumentViewer/Renderer/DownloadRenderer.tsx#DownloadRenderer"})}catch(e){}!function(e){e[e.jpg=0]="jpg",e[e.jpeg=1]="jpeg",e[e["image/jpg"]=2]="image/jpg",e[e["image/jpeg"]=3]="image/jpeg",e[e.png=4]="png",e[e["image/png"]=5]="image/png",e[e.bmp=6]="bmp",e[e["image/bmp"]=7]="image/bmp",e[e.tif=8]="tif",e[e.tiff=9]="tiff",e[e["image/tif"]=10]="image/tif",e[e["image/tiff"]=11]="image/tiff"}(t||(t={})),function(e){e[e["application/pdf"]=0]="application/pdf",e[e.pdf=1]="pdf"}(o||(o={}));var er=function(e){var n=e.uri,r=e.contentType;return r in t?(0,h.jsx)(M,{uri:n}):r in o?(0,h.jsx)(ee,{uri:n}):(0,h.jsx)(en,{uri:n})};try{er.displayName="DocumentRenderer",er.__docgenInfo={description:"",displayName:"DocumentRenderer",props:{uri:{defaultValue:null,description:"",name:"uri",required:!0,type:{name:"string"}},contentType:{defaultValue:null,description:"",name:"contentType",required:!0,type:{name:"string | ContentTypes"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentViewer/Renderer/DocumentRenderer.tsx#DocumentRenderer"]={docgenInfo:er.__docgenInfo,name:"DocumentRenderer",path:"src/common/src/DocumentViewer/Renderer/DocumentRenderer.tsx#DocumentRenderer"})}catch(e){}function et(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}function eo(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r,t,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],s=!0,a=!1;try{for(o=o.call(e);!(s=(r=o.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(e){a=!0,t=e}finally{try{s||null==o.return||o.return()}finally{if(a)throw t}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return et(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return et(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ei=function(e){var n=e.uri,r=e.onFailure,t=e.currentFilename,o=eo((0,v.useState)({loading:!0}),2),i=o[0],s=o[1],a=i.loading,l=i.filename,c=i.error,d=i.contentType,u=function(e){s(function(n){return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){!function(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}(e,n,r[n])})}return e}({},n,e)})};return((0,v.useEffect)(function(){u({loading:!0,error:void 0,contentType:void 0}),fetch(n,{method:"GET"}).then(function(e){if(!e.ok)throw Error(404===e.status?"Document niet gevonden.":"Fout bij het ophalen.");var n,r,t,o=eo((null===(n=e.headers.get("content-type"))||void 0===n?void 0:n.split(";"))||[],1)[0];if(!o)throw Error("Fout bij het ophalen.");u({loading:!1,contentType:o,filename:null===(t=((null===(r=e.headers.get("content-disposition"))||void 0===r?void 0:r.split("filename="))||[])[1])||void 0===t?void 0:t.replace(/^"(.+(?="$))"$/,"$1")})}).catch(function(e){u({loading:!1,error:e.message}),r&&r(e)})},[n]),a)?(0,h.jsx)(q,{"data-testid":"document-viewer",children:(0,h.jsx)(U,{"data-testid":"spinner",color:(0,j.EN)("secondary"),size:25})}):(0,h.jsxs)(q,{"data-testid":"document-viewer",children:[(0,h.jsx)(b.Z,{forwardedAs:"h3",children:null!=l?l:t}),c&&(0,h.jsx)(C,{level:"error",outline:!0,children:c}),d&&(0,h.jsx)(er,{uri:n,contentType:d})]})};try{ei.displayName="DocumentViewer",ei.__docgenInfo={description:"",displayName:"DocumentViewer",props:{uri:{defaultValue:null,description:"",name:"uri",required:!0,type:{name:"string"}},onFailure:{defaultValue:null,description:"",name:"onFailure",required:!1,type:{name:"((e: Error) => void)"}},currentFilename:{defaultValue:null,description:"",name:"currentFilename",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentViewer/DocumentViewer.tsx#DocumentViewer"]={docgenInfo:ei.__docgenInfo,name:"DocumentViewer",path:"src/common/src/DocumentViewer/DocumentViewer.tsx#DocumentViewer"})}catch(e){}function es(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){!function(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}(e,n,r[n])})}return e}function ea(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r})(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}),e}var el=function(){return(0,h.jsx)(ei,{currentFilename:"notfound.txt",uri:"assets/notfound.txt"})},ec=function(){return(0,h.jsx)(ei,{currentFilename:"example.xlsx",uri:"assets/example.xlsx"})},ed=function(){return(0,h.jsx)(ei,{currentFilename:"example.png",uri:"assets/example.png"})},eu=function(){return(0,h.jsx)(ei,{currentFilename:"example.pdf",uri:"assets/example.pdf"})};let em={title:"common/DocumentViewer",component:ei};el.parameters=ea(es({},el.parameters),{docs:ea(es({},null===(i=el.parameters)||void 0===i?void 0:i.docs),{source:es({originalSource:'() => {\n  return <DocumentViewer currentFilename="notfound.txt" uri="assets/notfound.txt" />;\n}'},null===(a=el.parameters)||void 0===a?void 0:null===(s=a.docs)||void 0===s?void 0:s.source)})}),ec.parameters=ea(es({},ec.parameters),{docs:ea(es({},null===(l=ec.parameters)||void 0===l?void 0:l.docs),{source:es({originalSource:'() => {\n  return <DocumentViewer currentFilename="example.xlsx" uri="assets/example.xlsx" />;\n}'},null===(d=ec.parameters)||void 0===d?void 0:null===(c=d.docs)||void 0===c?void 0:c.source)})}),ed.parameters=ea(es({},ed.parameters),{docs:ea(es({},null===(u=ed.parameters)||void 0===u?void 0:u.docs),{source:es({originalSource:'() => {\n  return <DocumentViewer currentFilename="example.png" uri="assets/example.png" />;\n}'},null===(p=ed.parameters)||void 0===p?void 0:null===(m=p.docs)||void 0===m?void 0:m.source)})}),eu.parameters=ea(es({},eu.parameters),{docs:ea(es({},null===(f=eu.parameters)||void 0===f?void 0:f.docs),{source:es({originalSource:'() => {\n  return <DocumentViewer currentFilename="example.pdf" uri="assets/example.pdf" />;\n}'},null===(y=eu.parameters)||void 0===y?void 0:null===(g=y.docs)||void 0===g?void 0:g.source)})})}}]);