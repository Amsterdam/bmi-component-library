"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[87],{"./node_modules/@amsterdam/asc-assets/es/icons/Document.js":(e,o,r)=>{r.d(o,{Z:()=>i});var t=r("./node_modules/react/jsx-runtime.js");let i=function(e){return(0,t.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",role:"img",focusable:!1},e,{children:(0,t.jsx)("path",{d:"M21.83 2H6v32h24V10.17zM10 30V6h10v6h6v18z"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,o,r)=>{r.d(o,{Z:()=>y});var t=r("./node_modules/react/jsx-runtime.js"),i=r("./node_modules/react/index.js"),n=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),s=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),l=r("./node_modules/polished/dist/polished.esm.js"),a=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),d=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),c=r("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let p={size:30},u=e=>(0,d.QJ)(11)({theme:e}),m=a.ZP.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,d.EN)("secondary")};
  border-right: 0;
  ${(0,l.pB)("border-color","0.1s ease-in-out")}
`,b=(0,a.ZP)(s.Z)`
  margin-right: 10px;
`,g=(0,a.ZP)(s.Z)`
  margin-left: 10px;
`,v=a.ZP.button`
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
  padding: ${({size:e,theme:o})=>e?"0":(0,d.QJ)(3,4)({theme:o})};
  ${({size:e,square:o})=>(e||o)&&(0,a.iv)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,l.dp)(e||p.size)}// width and height
    `}
  ${(0,l.pB)(["color","background-color"],"0.1s ease-in-out")}
  ${(()=>({theme:e,variant:o,color:r})=>{switch(o){case"primary":return(0,a.iv)`
          min-width: 90px;
          background-color: ${(0,d.EN)("primary")};
          color: ${(0,l.XV)((0,d.EN)("primary")({theme:e}))};
          ${(0,d.yh)((0,d.EN)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,l._j)(.1,(0,d.EN)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,a.iv)`
          min-width: 90px;
          background-color: ${(0,d.EN)("secondary")};
          color: ${(0,d.EN)("tint","level1")};
          ${(0,d.yh)((0,d.EN)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,l._j)(.1,(0,d.EN)("secondary")({theme:e}))};
          }

          ${o=>o&&(0,a.iv)`
              &:not(:disabled)&:focus
                ${m},
                &:not(:disabled)&:hover
                ${m} {
                border-left-color: ${(0,l._j)(.1,(0,d.EN)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,a.iv)`
          min-width: 90px;
          background-color: ${(0,d.EN)("tint","level4")};
          ${(0,d.yh)((0,d.EN)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,l._j)(.1,(0,d.EN)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,a.iv)`
          min-width: 90px;
          color: ${(0,d.EN)("primary")};
          border: 1px solid ${(0,d.EN)("primary")};
          background-color: ${(0,d.EN)("tint","level1")};
          ${(0,d.yh)((0,d.EN)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,d.EN)("primary")};
          }
        `;case"textButton":return(0,a.iv)`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${(0,d.EN)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${(0,d.yh)((0,d.EN)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${(0,l.pB)("color","0s")}

          &:hover {
            color: ${(0,d.EN)("secondary")};
            ${(0,d.yh)((0,d.EN)("secondary","main"))};
          }

          ${b} {
            margin-right: ${(0,d.QJ)(1)};
          }
          ${g} {
            margin-left: ${(0,d.QJ)(1)};
          }
        `;case"blank":return(0,a.iv)`
          background-color: ${(0,d.EN)("tint","level1")};
          ${(0,d.yh)((0,d.EN)("tint","level7"))};
          &:hover {
            background-color: ${(0,d.EN)("tint","level3")};
          }
        `;case"application":return(0,a.iv)`
          border: 1px solid ${(0,d.EN)("tint","level7")};
          background-color: ${(0,d.EN)("tint","level1")};
          height: 32px;
          padding: ${(0,d.QJ)(1,2)};
          ${(0,d.yh)((0,d.EN)("tint","level7"))};
          &:hover {
            background-color: ${(0,d.EN)("tint","level4")};
          }
        `;default:return(0,a.iv)`
          color: ${r?(0,l.XV)((0,d.EN)(r)({theme:e})):(0,d.EN)("primary")({theme:e})};
          ${r&&(0,a.iv)`
            background: ${(0,d.EN)(r)};
          `}

          ${!r&&(0,a.iv)`
            border: 1px solid ${(0,d.EN)("primary")};
          `}

        &:hover {
            background: ${r?(0,d.EN)(r,"dark")({theme:e}):(0,d.EN)("tint","level3")({theme:e})};
            ${!r&&(0,a.iv)`
              outline: 1px solid ${(0,d.EN)("primary")};
            `}
          }
        `}})()}
  ${(0,c.k)()} // ie fix
  ${({taskflow:e})=>e&&(0,a.iv)`
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
      &:focus ${m}:after {
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
    color: ${(0,d.EN)("tint","level4")};
    background-color: ${(0,d.EN)("tint","level3")};
    ${(0,d.yh)((0,d.EN)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:e})=>e&&(0,a.iv)`
        ${m} {
          border-left-color: ${(0,d.EN)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,a.iv)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var h=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>o.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)0>o.indexOf(t[i])&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r};let f=(0,i.forwardRef)((e,o)=>{var{children:r,iconLeft:i,iconRight:l,icon:a,iconSize:d,taskflow:c}=e,p=h(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let u={size:d||n.l.size};return(0,t.jsxs)(v,Object.assign({ref:o},p,{taskflow:c},{children:[i&&(0,t.jsx)(b,Object.assign({},u,{children:i})),a?(0,t.jsx)(s.Z,Object.assign({},u,{children:a})):r,l&&(0,t.jsx)(g,Object.assign({},u,{children:l})),c&&(0,t.jsx)(m,{})]}))}),y=f},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,o,r)=>{r.d(o,{Z:()=>i});var t=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");let i=t.Z},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,o,r)=>{r.d(o,{Z:()=>l,l:()=>n});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let n={size:20,padding:0,rotate:0},s=t.ZP.span.withConfig({shouldForwardProp:(e,o)=>!["size","rotate","padding","inline","color"].includes(e)&&o(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,t.iv)`
      background-image: url(${e});
    `}
  ${({size:e=n.size,padding:o=n.padding})=>(0,t.iv)`
    width: ${e-2*o}px;
    height: ${e-2*o}px;
  `}
  ${({padding:e})=>e&&(0,t.iv)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=n.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=n.size,padding:o=n.padding})=>(0,t.iv)`
      width: ${e-2*o}px;
      height: ${e-2*o}px;
    `}
  }

  ${({color:e})=>e&&(0,i.yh)(e)};
`,l=s},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,o,r)=>{r.d(o,{k:()=>i});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js");let i=()=>(0,t.iv)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./src/form/FileUpload/FileList/FileList.stories.tsx":(e,o,r)=>{r.r(o),r.d(o,{Default:()=>$,WithFilesInProgress:()=>x,WithRejectedFiles:()=>j,default:()=>w});var t,i,n,s,l,a,d,c,p,u=r("./node_modules/react/jsx-runtime.js"),m=r("./src/form/FileUpload/FileList/__stubs__/files.ts"),b=r("./src/form/FileUpload/FileList/FileList.tsx");function g(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(o){!function(e,o,r){o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r}(e,o,r[o])})}return e}function v(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r})(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}),e}var h=(0,r("./src/utils/storybook.ts").W)(["files"]),f={title:"common/FileList",component:b.Z,args:{title:"Bestand",removeLabel:"Wissen",cancelLabel:"Annuleren",fileUploadErrorLabel:"dit bestand kan niet worden ge\xfcpload",fileUploadInProgressLabel:"",files:m.QZ},argTypes:g({},h)},y=function(e){return(0,u.jsx)(b.Z,g({},e))},$=y.bind({}),x=y.bind({});x.args={files:m.QZ.map(function(e){return v(g({},e),{progress:Math.floor(70*Math.random())})})};var j=y.bind({});j.args={files:m.eg};let w=f;$.parameters=v(g({},$.parameters),{docs:v(g({},null===(t=$.parameters)||void 0===t?void 0:t.docs),{source:g({originalSource:"props => <FileList {...props} />"},null===(n=$.parameters)||void 0===n?void 0:null===(i=n.docs)||void 0===i?void 0:i.source)})}),x.parameters=v(g({},x.parameters),{docs:v(g({},null===(s=x.parameters)||void 0===s?void 0:s.docs),{source:g({originalSource:"props => <FileList {...props} />"},null===(a=x.parameters)||void 0===a?void 0:null===(l=a.docs)||void 0===l?void 0:l.source)})}),j.parameters=v(g({},j.parameters),{docs:v(g({},null===(d=j.parameters)||void 0===d?void 0:d.docs),{source:g({originalSource:"props => <FileList {...props} />"},null===(p=j.parameters)||void 0===p?void 0:null===(c=p.docs)||void 0===c?void 0:c.source)})})}}]);