"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[889],{"./node_modules/@amsterdam/asc-assets/es/icons/Document.js":(e,o,r)=>{r.d(o,{A:()=>n});var t=r("./node_modules/react/jsx-runtime.js");let n=function(e){return(0,t.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",role:"img",focusable:!1},e,{children:(0,t.jsx)("path",{d:"M21.83 2H6v32h24V10.17zM10 30V6h10v6h6v18z"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,o,r)=>{r.d(o,{A:()=>v});var t=r("./node_modules/react/jsx-runtime.js"),n=r("./node_modules/react/index.js"),i=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),s=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=r("./node_modules/polished/dist/polished.esm.js"),l=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),d=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),c=r("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let m={size:30},p=e=>(0,d.B7)(11)({theme:e}),u=l.Ay.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,d.hm)("secondary")};
  border-right: 0;
  ${(0,a.bm)("border-color","0.1s ease-in-out")}
`,h=(0,l.Ay)(s.A)`
  margin-right: 10px;
`,b=(0,l.Ay)(s.A)`
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
  ${(()=>({theme:e,variant:o,color:r})=>{switch(o){case"primary":return(0,l.AH)`
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
          ${b} {
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
          color: ${r?(0,a.W0)((0,d.hm)(r)({theme:e})):(0,d.hm)("primary")({theme:e})};
          ${r&&(0,l.AH)`
            background: ${(0,d.hm)(r)};
          `}

          ${!r&&(0,l.AH)`
            border: 1px solid ${(0,d.hm)("primary")};
          `}

        &:hover {
            background: ${r?(0,d.hm)(r,"dark")({theme:e}):(0,d.hm)("tint","level3")({theme:e})};
            ${!r&&(0,l.AH)`
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
  ${s.A} {
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
`;var f=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>o.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)0>o.indexOf(t[n])&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};let $=(0,n.forwardRef)((e,o)=>{var{children:r,iconLeft:n,iconRight:a,icon:l,iconSize:d,taskflow:c}=e,m=f(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let p={size:d||i.G.size};return(0,t.jsxs)(g,Object.assign({ref:o},m,{taskflow:c},{children:[n&&(0,t.jsx)(h,Object.assign({},p,{children:n})),l?(0,t.jsx)(s.A,Object.assign({},p,{children:l})):r,a&&(0,t.jsx)(b,Object.assign({},p,{children:a})),c&&(0,t.jsx)(u,{})]}))}),v=$},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,o,r)=>{r.d(o,{A:()=>n});var t=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");let n=t.A},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,o,r)=>{r.d(o,{A:()=>a,G:()=>i});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={size:20,padding:0,rotate:0},s=t.Ay.span.withConfig({shouldForwardProp:(e,o)=>!["size","rotate","padding","inline","color"].includes(e)&&o(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,t.AH)`
      background-image: url(${e});
    `}
  ${({size:e=i.size,padding:o=i.padding})=>(0,t.AH)`
    width: ${e-2*o}px;
    height: ${e-2*o}px;
  `}
  ${({padding:e})=>e&&(0,t.AH)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=i.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=i.size,padding:o=i.padding})=>(0,t.AH)`
      width: ${e-2*o}px;
      height: ${e-2*o}px;
    `}
  }

  ${({color:e})=>e&&(0,n.G2)(e)};
`,a=s},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,o,r)=>{r.d(o,{h:()=>n});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js");let n=()=>(0,t.AH)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./src/form/FileUpload/FileList/FileList.stories.tsx":(e,o,r)=>{r.r(o),r.d(o,{Default:()=>y,WithFilesInProgress:()=>x,WithRejectedFiles:()=>j,default:()=>w});var t,n,i,s,a,l,d,c,m,p=r("./node_modules/react/jsx-runtime.js"),u=r("./src/form/FileUpload/FileList/__stubs__/files.ts"),h=r("./src/form/FileUpload/FileList/FileList.tsx");function b(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(o){!function(e,o,r){o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r}(e,o,r[o])})}return e}function g(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r})(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}),e}var f=(0,r("./src/utils/storybook.ts").i)(["files"]),$={title:"common/FileList",component:h.A,args:{title:"Bestand",removeLabel:"Wissen",cancelLabel:"Annuleren",fileUploadErrorLabel:"dit bestand kan niet worden ge\xfcpload",fileUploadInProgressLabel:"",files:u.aq},argTypes:b({},f)},v=function(e){return(0,p.jsx)(h.A,b({},e))},y=v.bind({}),x=v.bind({});x.args={files:u.aq.map(function(e){return g(b({},e),{progress:Math.floor(70*Math.random())})})};var j=v.bind({});j.args={files:u.pL};let w=$;y.parameters=g(b({},y.parameters),{docs:g(b({},null===(t=y.parameters)||void 0===t?void 0:t.docs),{source:b({originalSource:"props => <FileList {...props} />"},null===(i=y.parameters)||void 0===i?void 0:null===(n=i.docs)||void 0===n?void 0:n.source)})}),x.parameters=g(b({},x.parameters),{docs:g(b({},null===(s=x.parameters)||void 0===s?void 0:s.docs),{source:b({originalSource:"props => <FileList {...props} />"},null===(l=x.parameters)||void 0===l?void 0:null===(a=l.docs)||void 0===a?void 0:a.source)})}),j.parameters=g(b({},j.parameters),{docs:g(b({},null===(d=j.parameters)||void 0===d?void 0:d.docs),{source:b({originalSource:"props => <FileList {...props} />"},null===(m=j.parameters)||void 0===m?void 0:null===(c=m.docs)||void 0===c?void 0:c.source)})})}}]);