"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[940],{"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,n,r)=>{r.d(n,{A:()=>b});var t=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/react/index.js"),i=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),s=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=r("./node_modules/polished/dist/polished.esm.js"),d=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),c=r("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let m={size:30},u=e=>(0,l.B7)(11)({theme:e}),p=d.Ay.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,l.hm)("secondary")};
  border-right: 0;
  ${(0,a.bm)("border-color","0.1s ease-in-out")}
`,h=(0,d.Ay)(s.A)`
  margin-right: 10px;
`,g=(0,d.Ay)(s.A)`
  margin-left: 10px;
`,y=d.Ay.button`
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
  padding: ${({size:e,theme:n})=>e?"0":(0,l.B7)(3,4)({theme:n})};
  ${({size:e,square:n})=>(e||n)&&(0,d.AH)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,a.Ej)(e||m.size)}// width and height
    `}
  ${(0,a.bm)(["color","background-color"],"0.1s ease-in-out")}
  ${(()=>({theme:e,variant:n,color:r})=>{switch(n){case"primary":return(0,d.AH)`
          min-width: 90px;
          background-color: ${(0,l.hm)("primary")};
          color: ${(0,a.W0)((0,l.hm)("primary")({theme:e}))};
          ${(0,l.G2)((0,l.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,l.hm)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,d.AH)`
          min-width: 90px;
          background-color: ${(0,l.hm)("secondary")};
          color: ${(0,l.hm)("tint","level1")};
          ${(0,l.G2)((0,l.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,l.hm)("secondary")({theme:e}))};
          }

          ${n=>n&&(0,d.AH)`
              &:not(:disabled)&:focus
                ${p},
                &:not(:disabled)&:hover
                ${p} {
                border-left-color: ${(0,a.e$)(.1,(0,l.hm)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,d.AH)`
          min-width: 90px;
          background-color: ${(0,l.hm)("tint","level4")};
          ${(0,l.G2)((0,l.hm)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,l.hm)("tint","level4")({theme:e}))};
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
          ${(0,a.bm)("color","0s")}

          &:hover {
            color: ${(0,l.hm)("secondary")};
            ${(0,l.G2)((0,l.hm)("secondary","main"))};
          }

          ${h} {
            margin-right: ${(0,l.B7)(1)};
          }
          ${g} {
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
          color: ${r?(0,a.W0)((0,l.hm)(r)({theme:e})):(0,l.hm)("primary")({theme:e})};
          ${r&&(0,d.AH)`
            background: ${(0,l.hm)(r)};
          `}

          ${!r&&(0,d.AH)`
            border: 1px solid ${(0,l.hm)("primary")};
          `}

        &:hover {
            background: ${r?(0,l.hm)(r,"dark")({theme:e}):(0,l.hm)("tint","level3")({theme:e})};
            ${!r&&(0,d.AH)`
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
  ${s.A} {
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
`;var f=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};let v=(0,o.forwardRef)((e,n)=>{var{children:r,iconLeft:o,iconRight:a,icon:d,iconSize:l,taskflow:c}=e,m=f(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let u={size:l||i.G.size};return(0,t.jsxs)(y,Object.assign({ref:n},m,{taskflow:c},{children:[o&&(0,t.jsx)(h,Object.assign({},u,{children:o})),d?(0,t.jsx)(s.A,Object.assign({},u,{children:d})):r,a&&(0,t.jsx)(g,Object.assign({},u,{children:a})),c&&(0,t.jsx)(p,{})]}))}),b=v},"./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js":(e,n,r)=>{r.d(n,{A:()=>a});var t=r("./node_modules/polished/dist/polished.esm.js"),o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s=o.Ay.hr`
  height: 1px;
  margin: 0;
  border: none;
  ${({gutter:e})=>e&&(0,o.AH)`
      ${(0,t.Lc)(0,"15px")}
    `}
  background-color:
    ${({theme:e,transparent:n})=>n?"background-color: transparent;":(0,i.hm)("tint","level4")({theme:e})};
`,a=s},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,n,r)=>{r.d(n,{A:()=>o});var t=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");let o=t.A},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,n,r)=>{r.d(n,{A:()=>a,G:()=>i});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={size:20,padding:0,rotate:0},s=t.Ay.span.withConfig({shouldForwardProp:(e,n)=>!["size","rotate","padding","inline","color"].includes(e)&&n(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,t.AH)`
      background-image: url(${e});
    `}
  ${({size:e=i.size,padding:n=i.padding})=>(0,t.AH)`
    width: ${e-2*n}px;
    height: ${e-2*n}px;
  `}
  ${({padding:e})=>e&&(0,t.AH)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=i.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=i.size,padding:n=i.padding})=>(0,t.AH)`
      width: ${e-2*n}px;
      height: ${e-2*n}px;
    `}
  }

  ${({color:e})=>e&&(0,o.G2)(e)};
`,a=s},"./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js":(e,n,r)=>{r.d(n,{A:()=>l});var t=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js");let s=(0,o.AH)`
  margin-top: 0;
  color: inherit;
`,a=(0,o.Ay)(i.A)`
  ${s};
`;var d=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};let l=function(e){var{children:n,as:r}=e,o=d(e,["children","as"]);return(0,t.jsx)(a,Object.assign({forwardedAs:r},o,{children:n}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,n,r)=>{r.d(n,{A:()=>s});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={em:(0,t.AH)`
    font-style: italic;
  `},s=t.Ay.p`
  ${({as:e,forwardedAs:n})=>{let r=null!=e?e:n;return"string"==typeof r&&i[r]}}
  margin: 0;
  ${(0,o.Jx)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:e})=>e&&(0,t.AH)`
      font-weight: 700;
      color: ${(0,o.hm)("tint","level7")};
    `}
  ${({color:e})=>e&&(0,t.AH)`
      color: ${(0,o.hm)(e)};
    `}
  ${({fontSize:e})=>e&&(0,t.AH)`
      font-size: ${e}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,n,r)=>{r.d(n,{h:()=>o});var t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js");let o=()=>(0,t.AH)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./src/common/src/Modal/ModalActions/ModalAction.stories.tsx":(e,n,r)=>{r.r(n),r.d(n,{SingleStyle:()=>A,SplitStyle:()=>j,SplitStyleMulti:()=>x,default:()=>$});var t,o,i,s,a,d,l,c,m,u=r("./node_modules/react/jsx-runtime.js"),p=r("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),h=r("./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js"),g=r("./src/common/src/Modal/ModalActions/ModalActions.tsx");function y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){!function(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}(e,n,r[n])})}return e}function f(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r})(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}),e}var v=(0,r("./src/utils/storybook.ts").i)(["children"]),b={title:"common/Modal/ModalActions",component:g.A,argTypes:y({},v)},A=(function(e){return(0,u.jsx)(g.A,f(y({},e),{children:(0,u.jsxs)(g.A.Right,{children:[(0,u.jsx)(p.A,{variant:"primaryInverted",children:"Vorige"}),(0,u.jsx)(p.A,{variant:"secondary",taskflow:!0,children:"Volgende"})]})}))}).bind({}),j=(function(e){return(0,u.jsxs)(g.A,f(y({},e),{children:[(0,u.jsx)(g.A.Left,{children:(0,u.jsx)(p.A,{variant:"primaryInverted",children:"Annuleren"})}),(0,u.jsxs)(g.A.Right,{children:[(0,u.jsx)(p.A,{variant:"primaryInverted",children:"Vorige"}),(0,u.jsx)(p.A,{variant:"secondary",children:"Volgende"})]})]}))}).bind({}),x=(function(e){return(0,u.jsxs)(g.A,f(y({},e),{children:[(0,u.jsx)(g.A.Right,{children:(0,u.jsx)(h.A,{children:"Laboris dolor enim ex qui esse id nisi qui officia aliquip enim dolore est. Ex veniam proident incididunt magna dolor do ad. Cillum mollit deserunt laboris est."})}),(0,u.jsx)(g.A.Left,{children:(0,u.jsx)(p.A,{variant:"primaryInverted",children:"Annuleren"})}),(0,u.jsxs)(g.A.Right,{children:[(0,u.jsx)(p.A,{variant:"primaryInverted",children:"Vorige"}),(0,u.jsx)(p.A,{variant:"secondary",taskflow:!0,children:"Volgende"})]})]}))}).bind({});let $=b;A.parameters=f(y({},A.parameters),{docs:f(y({},null===(t=A.parameters)||void 0===t?void 0:t.docs),{source:y({originalSource:'args => {\n  return <ModalActions {...args}>\n            <ModalActions.Right>\n                <Button variant="primaryInverted">Vorige</Button>\n                <Button variant="secondary" taskflow>\n                    Volgende\n                </Button>\n            </ModalActions.Right>\n        </ModalActions>;\n}'},null===(i=A.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})}),j.parameters=f(y({},j.parameters),{docs:f(y({},null===(s=j.parameters)||void 0===s?void 0:s.docs),{source:y({originalSource:'args => {\n  return <ModalActions {...args}>\n            <ModalActions.Left>\n                <Button variant="primaryInverted">Annuleren</Button>\n            </ModalActions.Left>\n            <ModalActions.Right>\n                <Button variant="primaryInverted">Vorige</Button>\n                <Button variant="secondary">Volgende</Button>\n            </ModalActions.Right>\n        </ModalActions>;\n}'},null===(d=j.parameters)||void 0===d?void 0:null===(a=d.docs)||void 0===a?void 0:a.source)})}),x.parameters=f(y({},x.parameters),{docs:f(y({},null===(l=x.parameters)||void 0===l?void 0:l.docs),{source:y({originalSource:'args => {\n  return <ModalActions {...args}>\n            <ModalActions.Right>\n                <Paragraph>\n                    Laboris dolor enim ex qui esse id nisi qui officia aliquip enim dolore est. Ex veniam proident\n                    incididunt magna dolor do ad. Cillum mollit deserunt laboris est.\n                </Paragraph>\n            </ModalActions.Right>\n            <ModalActions.Left>\n                <Button variant="primaryInverted">Annuleren</Button>\n            </ModalActions.Left>\n            <ModalActions.Right>\n                <Button variant="primaryInverted">Vorige</Button>\n                <Button variant="secondary" taskflow>\n                    Volgende\n                </Button>\n            </ModalActions.Right>\n        </ModalActions>;\n}'},null===(m=x.parameters)||void 0===m?void 0:null===(c=m.docs)||void 0===c?void 0:c.source)})})},"./src/common/src/Modal/ModalActions/ModalActions.tsx":(e,n,r)=>{r.d(n,{A:()=>A});var t=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/react/index.js"),i=r("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),s=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function l(){var e=d(["\n	display: grid;\n	grid-template-rows: "," auto;\n	padding: 0;\n	text-align: right;\n\n	"," {\n		grid-column: 1 / span 2;\n		grid-row: 1;\n		background-color: ",";\n	}\n"]);return l=function(){return e},e}function c(){var e=d(["\n	","\n	grid-template-columns: 1fr;\n"]);return c=function(){return e},e}function m(){var e=d(["\n	","\n	grid-template-columns: 1fr 1fr;\n"]);return m=function(){return e},e}function u(){var e=d(["\n	display: flex;\n	grid-column: 1;\n	gap: ","; /* > Safari 14.1 */\n"]);return u=function(){return e},e}function p(){var e=d(["\n	display: flex;\n	grid-column: 2;\n	justify-content: end;\n	gap: ","; /* > Safari 14.1 */\n"]);return p=function(){return e},e}var h=(0,s.AH)(l(),(0,a.B7)(6),i.A,function(e){return e.hideDivider?"transparent":"#000"}),g=s.Ay.footer(c(),h),y=s.Ay.footer(m(),h),f=s.Ay.div(u(),(0,a.B7)(2)),v=s.Ay.div(p(),(0,a.B7)(2)),b=function(e){var n=e.children,r=e.hideDivider,s=void 0===r||r;return o.Children.count(n)>1?(0,t.jsxs)(y,{"data-testid":"modal-actions",hideDivider:s,children:[(0,t.jsx)(i.A,{}),n]}):(0,t.jsxs)(g,{"data-testid":"modal-actions",hideDivider:s,children:[(0,t.jsx)(i.A,{}),n]})};b.Left=function(e){var n=e.children;return(0,t.jsx)(f,{children:n})},b.Right=function(e){var n=e.children;return(0,t.jsx)(v,{children:n})};let A=b},"./src/utils/storybook.ts":(e,n,r)=>{r.d(n,{B:()=>t,i:()=>o});var t={description:"Disabled control for this story",control:!1};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce(function(e,n){return e[n]=t,e},{})}}}]);