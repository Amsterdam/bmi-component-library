"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[523],{"./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js":(e,o,t)=>{t.d(o,{A:()=>r});var n=t("./node_modules/react/jsx-runtime.js");let r=function(e){return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,n.jsx)("path",{d:"m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-assets/es/icons/Close.js":(e,o,t)=>{t.d(o,{A:()=>r});var n=t("./node_modules/react/jsx-runtime.js");let r=function(e){return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,n.jsx)("path",{d:"M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Alert/Alert.js":(e,o,t)=>{t.d(o,{A:()=>O});var n=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/@amsterdam/asc-assets/es/icons/Close.js"),s=t("./node_modules/react/index.js"),i=t("./node_modules/deepmerge/dist/cjs.js"),a=t.n(i),l=t("./node_modules/@amsterdam/asc-ui/es/theme/ThemeProvider.js"),d=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>o.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>o.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};let c={typography:{h2:{fontSize:"20px",lineHeight:"24px",breakpoints:{laptop:{fontSize:"24px",lineHeight:"30px"}}},h3:{fontSize:"18px",lineHeight:"23px",breakpoints:void 0},h4:{fontSize:"14px",lineHeight:"17px",breakpoints:{laptop:{fontSize:"16px",lineHeight:"20px"}}},p:{fontSize:"16px",lineHeight:"20px",breakpoints:void 0},a:{fontSize:"16px",lineHeight:"20px",breakpoints:void 0}}},m=function(e){var{overrides:o,deep:t=!0,children:r}=e,s=d(e,["overrides","deep","children"]);let i=o?t?a()(c,o):Object.assign(Object.assign({},c),o):c;return(0,n.jsx)(l.A,Object.assign({},s,{overrides:i,deep:t},{children:r}))};var p=t("./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js"),u=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),h=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),y=t("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),g=t("./node_modules/@amsterdam/asc-ui/es/components/Heading/Heading.js");let f={error:(0,h.hm)("error"),info:(0,h.hm)("primary"),neutral:(0,h.hm)("tint","level3"),warning:(0,h.hm)("support","focus")},j=u.Ay.div`
  float: right;
  margin-left: ${(0,h.B7)(4)};
`,b=(0,u.Ay)(y.A)`
  background-color: transparent;
  min-width: initial; /* non-blank buttons have a min-width. This is an exception and need to override this */
`,x=u.Ay.div`
  width: 100%;
  overflow-wrap: anywhere;
  overflow: hidden;

  & > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
`,v=(0,u.Ay)(g.A)`
  margin: 0;
`,$=u.Ay.div`
  position: relative;
  width: 100%; /* IE11 fix */

  /* IE11 fix: display 'flex' only when dismissible */
  ${({dismissible:e})=>e&&(0,u.AH)`
      display: flex;
    `}

  ${({level:e,outline:o,theme:t})=>(0,u.AH)`
      padding: ${(0,h.B7)(4)};

      /* Solid colors */
      ${!o&&(0,u.AH)`
        background-color: ${f[e||"neutral"]({theme:t})};
      `}
      ${!o&&("error"===e||"info"===e)&&(0,u.AH)`
        ${(0,h.G2)((0,h.hm)("tint","level1"))}
        &, & * {
          color: ${(0,h.hm)("tint","level1")};
        }
      `}
      
      /* Outline color */
      ${o&&(0,u.AH)`
        box-shadow: ${f[e||"neutral"]({theme:t})}
          0px 0px 0px 2px inset;
      `}
      ${o&&("error"===e||"info"===e)&&(0,u.AH)`
        ${(0,h.G2)((0,h.hm)("tint","level7"))}
      `}
    `}
`;var w=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>o.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>o.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};let A="Sluiten",O=function(e){var{children:o,content:t,dismissible:i,heading:a,level:l,onDismiss:d,outline:c}=e,u=w(e,["children","content","dismissible","heading","level","onDismiss","outline"]);let[h,y]=(0,s.useState)(!0),g="tertiary";return c?g="blank":"error"===l?g="secondary":"info"===l&&(g="primary"),h?(0,n.jsx)($,Object.assign({},Object.assign({dismissible:i,level:l,outline:c},u),{tabIndex:0,role:"alert","aria-live":"polite"},{children:(0,n.jsx)(m,{children:(0,n.jsxs)(x,{children:[i&&(0,n.jsx)(j,{children:(0,n.jsx)(b,{title:A,"aria-label":A,size:30,variant:g,onClick:()=>{y(!1),d&&d()},iconSize:20,icon:(0,n.jsx)(r.A,{})})}),a&&(0,n.jsx)(v,Object.assign({forwardedAs:"strong",styleAs:"h3"},{children:a})),t&&(0,n.jsx)(p.A,{children:t}),o]})})})):null}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,o,t)=>{t.d(o,{A:()=>b});var n=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/react/index.js"),s=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),i=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=t("./node_modules/polished/dist/polished.esm.js"),l=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),d=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),c=t("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let m={size:30},p=e=>(0,d.B7)(11)({theme:e}),u=l.Ay.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,d.hm)("secondary")};
  border-right: 0;
  ${(0,a.bm)("border-color","0.1s ease-in-out")}
`,h=(0,l.Ay)(i.A)`
  margin-right: 10px;
`,y=(0,l.Ay)(i.A)`
  margin-left: 10px;
`,g=l.Ay.button`
  height: ${({theme:e})=>p(e)};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  padding: ${({size:e,theme:o})=>e?"0":(0,d.B7)(3,4)({theme:o})};
  ${({size:e,square:o})=>(e||o)&&(0,l.AH)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,a.Ej)(e||m.size)}// width and height
    `}
  ${(0,a.bm)(["color","background-color"],"0.1s ease-in-out")}
  ${(()=>({theme:e,variant:o,color:t})=>{switch(o){case"primary":return(0,l.AH)`
          min-width: 90px;
          background-color: ${(0,d.hm)("primary")};
          color: ${(0,a.W0)((0,d.hm)("primary")({theme:e}))};
          ${(0,d.G2)((0,d.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,d.hm)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,l.AH)`
          min-width: 90px;
          background-color: ${(0,d.hm)("secondary")};
          color: ${(0,d.hm)("tint","level1")};
          ${(0,d.G2)((0,d.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,d.hm)("secondary")({theme:e}))};
          }

          ${o=>o&&(0,l.AH)`
              &:not(:disabled)&:focus
                ${u},
                &:not(:disabled)&:hover
                ${u} {
                border-left-color: ${(0,a.e$)(.1,(0,d.hm)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,l.AH)`
          min-width: 90px;
          background-color: ${(0,d.hm)("tint","level4")};
          ${(0,d.G2)((0,d.hm)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,d.hm)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,l.AH)`
          min-width: 90px;
          color: ${(0,d.hm)("primary")};
          border: 1px solid ${(0,d.hm)("primary")};
          background-color: ${(0,d.hm)("tint","level1")};
          ${(0,d.G2)((0,d.hm)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,d.hm)("primary")};
          }
        `;case"textButton":return(0,l.AH)`
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

          ${h} {
            margin-right: ${(0,d.B7)(1)};
          }
          ${y} {
            margin-left: ${(0,d.B7)(1)};
          }
        `;case"blank":return(0,l.AH)`
          background-color: ${(0,d.hm)("tint","level1")};
          ${(0,d.G2)((0,d.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,d.hm)("tint","level3")};
          }
        `;case"application":return(0,l.AH)`
          border: 1px solid ${(0,d.hm)("tint","level7")};
          background-color: ${(0,d.hm)("tint","level1")};
          height: 32px;
          padding: ${(0,d.B7)(1,2)};
          ${(0,d.G2)((0,d.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,d.hm)("tint","level4")};
          }
        `;default:return(0,l.AH)`
          color: ${t?(0,a.W0)((0,d.hm)(t)({theme:e})):(0,d.hm)("primary")({theme:e})};
          ${t&&(0,l.AH)`
            background: ${(0,d.hm)(t)};
          `}

          ${!t&&(0,l.AH)`
            border: 1px solid ${(0,d.hm)("primary")};
          `}

        &:hover {
            background: ${t?(0,d.hm)(t,"dark")({theme:e}):(0,d.hm)("tint","level3")({theme:e})};
            ${!t&&(0,l.AH)`
              outline: 1px solid ${(0,d.hm)("primary")};
            `}
          }
        `}})()}
  ${(0,c.h)()} // ie fix
  ${({taskflow:e})=>e&&(0,l.AH)`
      position: relative;
      min-width: initial;
      padding-right: 0;
      padding-top: 0; // safari fix
      padding-bottom: 0; // safari fix
      line-height: ${({theme:e})=>p(e)}; // safari 10.1 fix
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
    ${({taskflow:e})=>e&&(0,l.AH)`
        ${u} {
          border-left-color: ${(0,d.hm)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,l.AH)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var f=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>o.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>o.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};let j=(0,r.forwardRef)((e,o)=>{var{children:t,iconLeft:r,iconRight:a,icon:l,iconSize:d,taskflow:c}=e,m=f(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let p={size:d||s.G.size};return(0,n.jsxs)(g,Object.assign({ref:o},m,{taskflow:c},{children:[r&&(0,n.jsx)(h,Object.assign({},p,{children:r})),l?(0,n.jsx)(i.A,Object.assign({},p,{children:l})):t,a&&(0,n.jsx)(y,Object.assign({},p,{children:a})),c&&(0,n.jsx)(u,{})]}))}),b=j},"./node_modules/@amsterdam/asc-ui/es/components/Heading/Heading.js":(e,o,t)=>{t.d(o,{A:()=>a});var n=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js"),s=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>o.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>o.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};function i(e){var{children:o,as:t}=e,i=s(e,["children","as"]);return(0,n.jsx)(r.A,Object.assign({forwardedAs:t},i,{children:o}))}i.defaultProps={as:"h1"};let a=i},"./node_modules/@amsterdam/asc-ui/es/components/Heading/HeadingStyle.js":(e,o,t)=>{t.d(o,{A:()=>i});var n=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let s=(0,n.AH)`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,i=(0,n.Ay)(r.A)`
  ${s}
`},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,o,t)=>{t.d(o,{A:()=>r});var n=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");let r=n.A},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,o,t)=>{t.d(o,{A:()=>a,G:()=>s});var n=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={size:20,padding:0,rotate:0},i=n.Ay.span.withConfig({shouldForwardProp:(e,o)=>!["size","rotate","padding","inline","color"].includes(e)&&o(e)})`
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
`,a=i},"./node_modules/@amsterdam/asc-ui/es/components/Link/Link.js":(e,o,t)=>{t.d(o,{A:()=>$});var n=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/@amsterdam/asc-assets/es/icons/ChevronRight.js");let s=function(e){return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,n.jsx)("path",{d:"M19.006 0H32.01v12.992h-4.002V6.826L14.434 20.417l-2.83-2.818L25.187 3.998h-6.182V0zm7.002 13.991L26.018 32H.01V6.016h17.975l-3.98 3.978.02.02H4.01v17.988h18.006l-.01-10.013 4-3.998z",fillRule:"evenodd"})}))},i=function(e){return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,n.jsx)("path",{d:"M0 27.996h32V32H0v-4.004zm22.36-13.983 2.83 2.823L16 26.044l-9.19-9.208 2.83-2.823L14 18.377V0h4v18.377l4.36-4.364z"})}))};var a=t("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),l=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),d=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),c=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),m=t("./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js");let p=(0,l.AH)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`,u=(0,l.AH)`
  color: ${(0,d.hm)("primary")};
  ${(0,d.G2)((0,d.hm)("primary"))};

  &:hover {
    color: ${(0,d.hm)("secondary")};
    ${(0,d.G2)((0,d.hm)("secondary"))};
  }
`,h=(0,l.AH)`
  text-decoration: none;
  font-weight: 700;
  padding-right: ${(0,d.B7)(1)};
  color: ${(0,d.hm)("tint","level7")};

  &:hover {
    text-decoration: underline;
    color: ${(0,d.hm)("secondary")};
    ${(0,d.G2)((0,d.hm)("secondary"))};
  }
`,y=(0,l.Ay)(c.A)`
  display: inline;
`,g=(0,l.Ay)(y)`
  margin-right: ${(0,d.B7)(1)};
`,f=(0,l.Ay)(y)`
  margin-left: ${(0,d.B7)(2)};
`,j=l.Ay.span`
  width: 100%; /* IE11 Fix */
`,b=(0,l.Ay)(m.A)`
  display: inline-flex;
  ${({variant:e})=>{switch(e){case"blank":return p;case"inline":return u;default:return h}}}
  ${({darkBackground:e,$darkBackground:o})=>(e||o)&&(0,l.AH)`
      &,
      &:hover {
        color: ${(0,d.hm)("tint","level1")};
        ${c.A} {
          ${(0,d.G2)((0,d.hm)("tint","level1"))}
        }
      }
    `};
`;var x=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>o.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>o.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};function v(e){var{children:o,variant:t,as:l,icon:d,inList:c}=e,m=x(e,["children","variant","as","icon","inList"]);return"with-chevron"===t&&(0,a.A)("Please note that the `with-chevron` variant will be deprecated soon, please use the `inList` prop"),d&&"string"!=typeof d&&(0,a.A)('Please note that passing a component to prop `icon` will be deprecated soon. If you need to use a custom Icon, just pass it as a child. If your link is a download or external link, you can pass `icon="download"` or `icon="external"`'),(0,n.jsxs)(b,Object.assign({},m,{variant:t,forwardedAs:l},{children:[(c||"with-chevron"===t)&&(0,n.jsx)(g,Object.assign({size:12},{children:(0,n.jsx)(r.A,{})})),c||"with-chevron"===t?(0,n.jsx)(j,{children:o}):o,("external"===d||"download"===d)&&(0,n.jsxs)(f,Object.assign({size:14},{children:["external"===d&&(0,n.jsx)(s,{}),"download"===d&&(0,n.jsx)(i,{})]})),d&&"string"!=typeof d&&d]}))}v.defaultProps={as:"a"};let $=v},"./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js":(e,o,t)=>{t.d(o,{A:()=>d});var n=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=t("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js");let i=(0,r.AH)`
  margin-top: 0;
  color: inherit;
`,a=(0,r.Ay)(s.A)`
  ${i};
`;var l=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>o.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>o.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};let d=function(e){var{children:o,as:t}=e,r=l(e,["children","as"]);return(0,n.jsx)(a,Object.assign({forwardedAs:t},r,{children:o}))}},"./node_modules/@amsterdam/asc-ui/es/components/Spinner/Spinner.js":(e,o,t)=>{t.d(o,{A:()=>c});var n=t("./node_modules/react/jsx-runtime.js");let r=function(e){return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},e,{children:(0,n.jsx)("path",{d:"M50 100C22.4 99.967.033 77.6 0 50h10c0 22.091 17.909 40 40 40s40-17.909 40-40-17.909-40-40-40V0c27.614 0 50 22.386 50 50s-22.386 50-50 50z"})}))};var s=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),i=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");let a=i.Ay.div.withConfig({shouldForwardProp:(e,o)=>!["size","color"].includes(e)&&o(e)})`
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
`;var l=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>o.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>o.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};function d(e){var{size:o,color:t}=e,i=l(e,["size","color"]);return(0,n.jsx)(a,Object.assign({size:o},i,{children:(0,n.jsx)(s.A,Object.assign({size:o,color:t},{children:(0,n.jsx)(r,{})}))}))}d.defaultProps={size:20};let c=d},"./node_modules/@amsterdam/asc-ui/es/components/Typography/Typography.js":(e,o,t)=>{t.d(o,{A:()=>a});var n=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js"),s=t("./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js"),i=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>o.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>o.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};let a=function(e){var{children:o}=e,t=i(e,["children"]);return t.color&&(0,s.A)("You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules"),(0,n.jsx)(r.A,Object.assign({},t,{children:o}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,o,t)=>{t.d(o,{A:()=>i});var n=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={em:(0,n.AH)`
    font-style: italic;
  `},i=n.Ay.p`
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
`},"./node_modules/@amsterdam/asc-ui/es/utils/deprecatedWarning.js":(e,o,t)=>{t.d(o,{A:()=>n});let n=e=>{console.warn(e)}}}]);