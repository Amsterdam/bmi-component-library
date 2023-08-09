"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[966],{"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,n,r)=>{r.d(n,{Z:()=>b});var t=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/react/index.js"),i=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),s=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=r("./node_modules/polished/dist/polished.esm.js"),d=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),c=r("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let u={size:30},m=e=>(0,l.QJ)(11)({theme:e}),p=d.ZP.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,l.EN)("secondary")};
  border-right: 0;
  ${(0,a.pB)("border-color","0.1s ease-in-out")}
`,v=(0,d.ZP)(s.Z)`
  margin-right: 10px;
`,g=(0,d.ZP)(s.Z)`
  margin-left: 10px;
`,h=d.ZP.button`
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
  padding: ${({size:e,theme:n})=>e?"0":(0,l.QJ)(3,4)({theme:n})};
  ${({size:e,square:n})=>(e||n)&&(0,d.iv)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,a.dp)(e||u.size)}// width and height
    `}
  ${(0,a.pB)(["color","background-color"],"0.1s ease-in-out")}
  ${(()=>({theme:e,variant:n,color:r})=>{switch(n){case"primary":return(0,d.iv)`
          min-width: 90px;
          background-color: ${(0,l.EN)("primary")};
          color: ${(0,a.XV)((0,l.EN)("primary")({theme:e}))};
          ${(0,l.yh)((0,l.EN)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a._j)(.1,(0,l.EN)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,d.iv)`
          min-width: 90px;
          background-color: ${(0,l.EN)("secondary")};
          color: ${(0,l.EN)("tint","level1")};
          ${(0,l.yh)((0,l.EN)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a._j)(.1,(0,l.EN)("secondary")({theme:e}))};
          }

          ${n=>n&&(0,d.iv)`
              &:not(:disabled)&:focus
                ${p},
                &:not(:disabled)&:hover
                ${p} {
                border-left-color: ${(0,a._j)(.1,(0,l.EN)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,d.iv)`
          min-width: 90px;
          background-color: ${(0,l.EN)("tint","level4")};
          ${(0,l.yh)((0,l.EN)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,a._j)(.1,(0,l.EN)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,d.iv)`
          min-width: 90px;
          color: ${(0,l.EN)("primary")};
          border: 1px solid ${(0,l.EN)("primary")};
          background-color: ${(0,l.EN)("tint","level1")};
          ${(0,l.yh)((0,l.EN)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,l.EN)("primary")};
          }
        `;case"textButton":return(0,d.iv)`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${(0,l.EN)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${(0,l.yh)((0,l.EN)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${(0,a.pB)("color","0s")}

          &:hover {
            color: ${(0,l.EN)("secondary")};
            ${(0,l.yh)((0,l.EN)("secondary","main"))};
          }

          ${v} {
            margin-right: ${(0,l.QJ)(1)};
          }
          ${g} {
            margin-left: ${(0,l.QJ)(1)};
          }
        `;case"blank":return(0,d.iv)`
          background-color: ${(0,l.EN)("tint","level1")};
          ${(0,l.yh)((0,l.EN)("tint","level7"))};
          &:hover {
            background-color: ${(0,l.EN)("tint","level3")};
          }
        `;case"application":return(0,d.iv)`
          border: 1px solid ${(0,l.EN)("tint","level7")};
          background-color: ${(0,l.EN)("tint","level1")};
          height: 32px;
          padding: ${(0,l.QJ)(1,2)};
          ${(0,l.yh)((0,l.EN)("tint","level7"))};
          &:hover {
            background-color: ${(0,l.EN)("tint","level4")};
          }
        `;default:return(0,d.iv)`
          color: ${r?(0,a.XV)((0,l.EN)(r)({theme:e})):(0,l.EN)("primary")({theme:e})};
          ${r&&(0,d.iv)`
            background: ${(0,l.EN)(r)};
          `}

          ${!r&&(0,d.iv)`
            border: 1px solid ${(0,l.EN)("primary")};
          `}

        &:hover {
            background: ${r?(0,l.EN)(r,"dark")({theme:e}):(0,l.EN)("tint","level3")({theme:e})};
            ${!r&&(0,d.iv)`
              outline: 1px solid ${(0,l.EN)("primary")};
            `}
          }
        `}})()}
  ${(0,c.k)()} // ie fix
  ${({taskflow:e})=>e&&(0,d.iv)`
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
    color: ${(0,l.EN)("tint","level4")};
    background-color: ${(0,l.EN)("tint","level3")};
    ${(0,l.yh)((0,l.EN)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:e})=>e&&(0,d.iv)`
        ${p} {
          border-left-color: ${(0,l.EN)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,d.iv)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var f=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};let y=(0,o.forwardRef)((e,n)=>{var{children:r,iconLeft:o,iconRight:a,icon:d,iconSize:l,taskflow:c}=e,u=f(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let m={size:l||i.l.size};return(0,t.jsxs)(h,Object.assign({ref:n},u,{taskflow:c},{children:[o&&(0,t.jsx)(v,Object.assign({},m,{children:o})),d?(0,t.jsx)(s.Z,Object.assign({},m,{children:d})):r,a&&(0,t.jsx)(g,Object.assign({},m,{children:a})),c&&(0,t.jsx)(p,{})]}))}),b=y},"./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js":(e,n,r)=>{r.d(n,{Z:()=>a});var t=r("./node_modules/polished/dist/polished.esm.js"),o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s=o.ZP.hr`
  height: 1px;
  margin: 0;
  border: none;
  ${({gutter:e})=>e&&(0,o.iv)`
      ${(0,t.e6)(0,"15px")}
    `}
  background-color:
    ${({theme:e,transparent:n})=>n?"background-color: transparent;":(0,i.EN)("tint","level4")({theme:e})};
`,a=s},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,n,r)=>{r.d(n,{Z:()=>o});var t=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");let o=t.Z},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,n,r)=>{r.d(n,{Z:()=>a,l:()=>i});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={size:20,padding:0,rotate:0},s=t.ZP.span.withConfig({shouldForwardProp:(e,n)=>!["size","rotate","padding","inline","color"].includes(e)&&n(e)})`
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
`,a=s},"./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js":(e,n,r)=>{r.d(n,{Z:()=>l});var t=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js");let s=(0,o.iv)`
  margin-top: 0;
  color: inherit;
`,a=(0,o.ZP)(i.Z)`
  ${s};
`;var d=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};let l=function(e){var{children:n,as:r}=e,o=d(e,["children","as"]);return(0,t.jsx)(a,Object.assign({forwardedAs:r},o,{children:n}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,n,r)=>{r.d(n,{Z:()=>s});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={em:(0,t.iv)`
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
`},"./src/common/src/Modal/ModalActions/ModalAction.stories.tsx":(e,n,r)=>{r.r(n),r.d(n,{SingleStyle:()=>j,SplitStyle:()=>x,SplitStyleMulti:()=>$,default:()=>w});var t,o,i,s,a,d,l,c,u,m=r("./node_modules/react/jsx-runtime.js"),p=r("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),v=r("./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js"),g=r("./src/common/src/Modal/ModalActions/ModalActions.tsx");function h(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){!function(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}(e,n,r[n])})}return e}function f(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r})(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}),e}var y=(0,r("./src/utils/storybook.ts").W)(["children"]),b={title:"common/Modal/ModalActions",component:g.Z,argTypes:h({},y)},j=(function(e){return(0,m.jsx)(g.Z,f(h({},e),{children:(0,m.jsxs)(g.Z.Right,{children:[(0,m.jsx)(p.Z,{variant:"primaryInverted",children:"Vorige"}),(0,m.jsx)(p.Z,{variant:"secondary",taskflow:!0,children:"Volgende"})]})}))}).bind({}),x=(function(e){return(0,m.jsxs)(g.Z,f(h({},e),{children:[(0,m.jsx)(g.Z.Left,{children:(0,m.jsx)(p.Z,{variant:"primaryInverted",children:"Annuleren"})}),(0,m.jsxs)(g.Z.Right,{children:[(0,m.jsx)(p.Z,{variant:"primaryInverted",children:"Vorige"}),(0,m.jsx)(p.Z,{variant:"secondary",children:"Volgende"})]})]}))}).bind({}),$=(function(e){return(0,m.jsxs)(g.Z,f(h({},e),{children:[(0,m.jsx)(g.Z.Right,{children:(0,m.jsx)(v.Z,{children:"Laboris dolor enim ex qui esse id nisi qui officia aliquip enim dolore est. Ex veniam proident incididunt magna dolor do ad. Cillum mollit deserunt laboris est."})}),(0,m.jsx)(g.Z.Left,{children:(0,m.jsx)(p.Z,{variant:"primaryInverted",children:"Annuleren"})}),(0,m.jsxs)(g.Z.Right,{children:[(0,m.jsx)(p.Z,{variant:"primaryInverted",children:"Vorige"}),(0,m.jsx)(p.Z,{variant:"secondary",taskflow:!0,children:"Volgende"})]})]}))}).bind({});let w=b;j.parameters=f(h({},j.parameters),{docs:f(h({},null===(t=j.parameters)||void 0===t?void 0:t.docs),{source:h({originalSource:'args => {\n  return <ModalActions {...args}>\n            <ModalActions.Right>\n                <Button variant="primaryInverted">Vorige</Button>\n                <Button variant="secondary" taskflow>\n                    Volgende\n                </Button>\n            </ModalActions.Right>\n        </ModalActions>;\n}'},null===(i=j.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})}),x.parameters=f(h({},x.parameters),{docs:f(h({},null===(s=x.parameters)||void 0===s?void 0:s.docs),{source:h({originalSource:'args => {\n  return <ModalActions {...args}>\n            <ModalActions.Left>\n                <Button variant="primaryInverted">Annuleren</Button>\n            </ModalActions.Left>\n            <ModalActions.Right>\n                <Button variant="primaryInverted">Vorige</Button>\n                <Button variant="secondary">Volgende</Button>\n            </ModalActions.Right>\n        </ModalActions>;\n}'},null===(d=x.parameters)||void 0===d?void 0:null===(a=d.docs)||void 0===a?void 0:a.source)})}),$.parameters=f(h({},$.parameters),{docs:f(h({},null===(l=$.parameters)||void 0===l?void 0:l.docs),{source:h({originalSource:'args => {\n  return <ModalActions {...args}>\n            <ModalActions.Right>\n                <Paragraph>\n                    Laboris dolor enim ex qui esse id nisi qui officia aliquip enim dolore est. Ex veniam proident\n                    incididunt magna dolor do ad. Cillum mollit deserunt laboris est.\n                </Paragraph>\n            </ModalActions.Right>\n            <ModalActions.Left>\n                <Button variant="primaryInverted">Annuleren</Button>\n            </ModalActions.Left>\n            <ModalActions.Right>\n                <Button variant="primaryInverted">Vorige</Button>\n                <Button variant="secondary" taskflow>\n                    Volgende\n                </Button>\n            </ModalActions.Right>\n        </ModalActions>;\n}'},null===(u=$.parameters)||void 0===u?void 0:null===(c=u.docs)||void 0===c?void 0:c.source)})})},"./src/common/src/Modal/ModalActions/ModalActions.tsx":(e,n,r)=>{r.d(n,{Z:()=>j});var t=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/react/index.js"),i=r("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),s=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function l(){var e=d(["\n	display: grid;\n	grid-template-rows: "," auto;\n	padding: 0;\n	text-align: right;\n\n	"," {\n		grid-column: 1 / span 2;\n		grid-row: 1;\n		background-color: ",";\n	}\n"]);return l=function(){return e},e}function c(){var e=d(["\n	","\n	grid-template-columns: 1fr;\n"]);return c=function(){return e},e}function u(){var e=d(["\n	","\n	grid-template-columns: 1fr 1fr;\n"]);return u=function(){return e},e}function m(){var e=d(["\n	display: flex;\n	grid-column: 1;\n	gap: ","; /* > Safari 14.1 */\n"]);return m=function(){return e},e}function p(){var e=d(["\n	display: flex;\n	grid-column: 2;\n	justify-content: end;\n	gap: ","; /* > Safari 14.1 */\n"]);return p=function(){return e},e}var v=(0,s.iv)(l(),(0,a.QJ)(6),i.Z,function(e){return e.hideDivider?"transparent":"#000"}),g=s.ZP.footer(c(),v),h=s.ZP.footer(u(),v),f=s.ZP.div(m(),(0,a.QJ)(2)),y=s.ZP.div(p(),(0,a.QJ)(2)),b=function(e){var n=e.children,r=e.hideDivider,s=void 0===r||r;return o.Children.count(n)>1?(0,t.jsxs)(h,{"data-testid":"modal-actions",hideDivider:s,children:[(0,t.jsx)(i.Z,{}),n]}):(0,t.jsxs)(g,{"data-testid":"modal-actions",hideDivider:s,children:[(0,t.jsx)(i.Z,{}),n]})};b.Left=function(e){var n=e.children;return(0,t.jsx)(f,{children:n})},b.Right=function(e){var n=e.children;return(0,t.jsx)(y,{children:n})};let j=b},"./src/utils/storybook.ts":(e,n,r)=>{r.d(n,{W:()=>o,v:()=>t});var t={description:"Disabled control for this story",control:!1};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce(function(e,n){return e[n]=t,e},{})}}}]);