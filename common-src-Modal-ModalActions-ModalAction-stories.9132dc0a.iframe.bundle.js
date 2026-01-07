"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[940],{"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,t,r)=>{r.d(t,{A:()=>y});var o=r("./node_modules/react/jsx-runtime.js"),n=r("./node_modules/react/index.js"),s=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),i=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=r("./node_modules/polished/dist/polished.esm.js"),d=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),c=r("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let m=e=>(0,l.B7)(11)({theme:e}),u=d.default.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,l.hm)("secondary")};
  border-right: 0;
  ${(0,a.bm)("border-color","0.1s ease-in-out")}
`,p=(0,d.default)(i.A)`
  margin-right: 10px;
`,h=(0,d.default)(i.A)`
  margin-left: 10px;
`,g=d.default.button`
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
  padding: ${({size:e,theme:t})=>e?"0":(0,l.B7)(3,4)({theme:t})};
  ${({size:e,square:t})=>(e||t)&&(0,d.css)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,a.Ej)(e||30)}// width and height
    `}
  ${(0,a.bm)(["color","background-color"],"0.1s ease-in-out")}
  ${({theme:e,variant:t,color:r})=>{switch(t){case"primary":return(0,d.css)`
          min-width: 90px;
          background-color: ${(0,l.hm)("primary")};
          color: ${(0,a.W0)((0,l.hm)("primary")({theme:e}))};
          ${(0,l.G2)((0,l.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,l.hm)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,d.css)`
          min-width: 90px;
          background-color: ${(0,l.hm)("secondary")};
          color: ${(0,l.hm)("tint","level1")};
          ${(0,l.G2)((0,l.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,l.hm)("secondary")({theme:e}))};
          }

          ${t=>t&&(0,d.css)`
              &:not(:disabled)&:focus
                ${u},
                &:not(:disabled)&:hover
                ${u} {
                border-left-color: ${(0,a.e$)(.1,(0,l.hm)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,d.css)`
          min-width: 90px;
          background-color: ${(0,l.hm)("tint","level4")};
          ${(0,l.G2)((0,l.hm)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,l.hm)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,d.css)`
          min-width: 90px;
          color: ${(0,l.hm)("primary")};
          border: 1px solid ${(0,l.hm)("primary")};
          background-color: ${(0,l.hm)("tint","level1")};
          ${(0,l.G2)((0,l.hm)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,l.hm)("primary")};
          }
        `;case"textButton":return(0,d.css)`
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

          ${p} {
            margin-right: ${(0,l.B7)(1)};
          }
          ${h} {
            margin-left: ${(0,l.B7)(1)};
          }
        `;case"blank":return(0,d.css)`
          background-color: ${(0,l.hm)("tint","level1")};
          ${(0,l.G2)((0,l.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,l.hm)("tint","level3")};
          }
        `;case"application":return(0,d.css)`
          border: 1px solid ${(0,l.hm)("tint","level7")};
          background-color: ${(0,l.hm)("tint","level1")};
          height: 32px;
          padding: ${(0,l.B7)(1,2)};
          ${(0,l.G2)((0,l.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,l.hm)("tint","level4")};
          }
        `;default:return(0,d.css)`
          color: ${r?(0,a.W0)((0,l.hm)(r)({theme:e})):(0,l.hm)("primary")({theme:e})};
          ${r&&(0,d.css)`
            background: ${(0,l.hm)(r)};
          `}

          ${!r&&(0,d.css)`
            border: 1px solid ${(0,l.hm)("primary")};
          `}

        &:hover {
            background: ${r?(0,l.hm)(r,"dark")({theme:e}):(0,l.hm)("tint","level3")({theme:e})};
            ${!r&&(0,d.css)`
              outline: 1px solid ${(0,l.hm)("primary")};
            `}
          }
        `}}}
  ${(0,c.h)()} // ie fix
  ${({taskflow:e})=>e&&(0,d.css)`
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
    color: ${(0,l.hm)("tint","level4")};
    background-color: ${(0,l.hm)("tint","level3")};
    ${(0,l.G2)((0,l.hm)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:e})=>e&&(0,d.css)`
        ${u} {
          border-left-color: ${(0,l.hm)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,d.css)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var f=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};let y=(0,n.forwardRef)((e,t)=>{var{children:r,iconLeft:n,iconRight:a,icon:d,iconSize:l,taskflow:c}=e,m=f(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let y={size:l||s.G.size};return(0,o.jsxs)(g,Object.assign({ref:t},m,{taskflow:c},{children:[n&&(0,o.jsx)(p,Object.assign({},y,{children:n})),d?(0,o.jsx)(i.A,Object.assign({},y,{children:d})):r,a&&(0,o.jsx)(h,Object.assign({},y,{children:a})),c&&(0,o.jsx)(u,{})]}))})},"./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js":(e,t,r)=>{r.d(t,{A:()=>i});var o=r("./node_modules/polished/dist/polished.esm.js"),n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i=n.default.hr`
  height: 1px;
  margin: 0;
  border: none;
  ${({gutter:e})=>e&&(0,n.css)`
      ${(0,o.Lc)(0,"15px")}
    `}
  background-color:
    ${({theme:e,transparent:t})=>t?"background-color: transparent;":(0,s.hm)("tint","level4")({theme:e})};
`},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,t,r)=>{r.d(t,{A:()=>o});let o=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js").A},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,t,r)=>{r.d(t,{A:()=>i,G:()=>s});var o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={size:20,padding:0,rotate:0},i=o.default.span.withConfig({shouldForwardProp:(e,t)=>!["size","rotate","padding","inline","color"].includes(e)&&t(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,o.css)`
      background-image: url(${e});
    `}
  ${({size:e=s.size,padding:t=s.padding})=>(0,o.css)`
    width: ${e-2*t}px;
    height: ${e-2*t}px;
  `}
  ${({padding:e})=>e&&(0,o.css)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=s.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=s.size,padding:t=s.padding})=>(0,o.css)`
      width: ${e-2*t}px;
      height: ${e-2*t}px;
    `}
  }

  ${({color:e})=>e&&(0,n.G2)(e)};
`},"./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js":(e,t,r)=>{r.d(t,{A:()=>l});var o=r("./node_modules/react/jsx-runtime.js"),n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=r("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js");let i=(0,n.css)`
  margin-top: 0;
  color: inherit;
`,a=(0,n.default)(s.A)`
  ${i};
`;var d=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};let l=function(e){var{children:t,as:r}=e,n=d(e,["children","as"]);return(0,o.jsx)(a,Object.assign({forwardedAs:r},n,{children:t}))}},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":(e,t,r)=>{r.d(t,{A:()=>i});var o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let s={em:(0,o.css)`
    font-style: italic;
  `},i=o.default.p`
  ${({as:e,forwardedAs:t})=>{let r=null!=e?e:t;return"string"==typeof r&&s[r]}}
  margin: 0;
  ${(0,n.Jx)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:e})=>e&&(0,o.css)`
      font-weight: 700;
      color: ${(0,n.hm)("tint","level7")};
    `}
  ${({color:e})=>e&&(0,o.css)`
      color: ${(0,n.hm)(e)};
    `}
  ${({fontSize:e})=>e&&(0,o.css)`
      font-size: ${e}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,t,r)=>{r.d(t,{h:()=>n});var o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js");let n=()=>(0,o.css)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./src/common/src/Modal/ModalActions/ModalAction.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{SingleStyle:()=>m,SplitStyle:()=>u,SplitStyleMulti:()=>p,__namedExportsOrder:()=>g,default:()=>h});var o=r("./node_modules/react/jsx-runtime.js"),n=r("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),s=r("./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js"),i=r("./src/common/src/Modal/ModalActions/ModalActions.tsx");function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){var o;o=r[t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o})}return e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r.push.apply(r,o)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var l=(0,r("./src/utils/storybook.ts").i)(["children"]),c={title:"common/Modal/ModalActions",component:i.A,argTypes:a({},l)},m=(function(e){return(0,o.jsx)(i.A,d(a({},e),{children:(0,o.jsxs)(i.A.Right,{children:[(0,o.jsx)(n.A,{variant:"primaryInverted",children:"Vorige"}),(0,o.jsx)(n.A,{variant:"secondary",taskflow:!0,children:"Volgende"})]})}))}).bind({}),u=(function(e){return(0,o.jsxs)(i.A,d(a({},e),{children:[(0,o.jsx)(i.A.Left,{children:(0,o.jsx)(n.A,{variant:"primaryInverted",children:"Annuleren"})}),(0,o.jsxs)(i.A.Right,{children:[(0,o.jsx)(n.A,{variant:"primaryInverted",children:"Vorige"}),(0,o.jsx)(n.A,{variant:"secondary",children:"Volgende"})]})]}))}).bind({}),p=(function(e){return(0,o.jsxs)(i.A,d(a({},e),{children:[(0,o.jsx)(i.A.Right,{children:(0,o.jsx)(s.A,{children:"Laboris dolor enim ex qui esse id nisi qui officia aliquip enim dolore est. Ex veniam proident incididunt magna dolor do ad. Cillum mollit deserunt laboris est."})}),(0,o.jsx)(i.A.Left,{children:(0,o.jsx)(n.A,{variant:"primaryInverted",children:"Annuleren"})}),(0,o.jsxs)(i.A.Right,{children:[(0,o.jsx)(n.A,{variant:"primaryInverted",children:"Vorige"}),(0,o.jsx)(n.A,{variant:"secondary",taskflow:!0,children:"Volgende"})]})]}))}).bind({});let h=c;m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  return <ModalActions {...args}>
            <ModalActions.Right>
                <Button variant="primaryInverted">Vorige</Button>
                <Button variant="secondary" taskflow>
                    Volgende
                </Button>
            </ModalActions.Right>
        </ModalActions>;
}`,...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  return <ModalActions {...args}>
            <ModalActions.Left>
                <Button variant="primaryInverted">Annuleren</Button>
            </ModalActions.Left>
            <ModalActions.Right>
                <Button variant="primaryInverted">Vorige</Button>
                <Button variant="secondary">Volgende</Button>
            </ModalActions.Right>
        </ModalActions>;
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  return <ModalActions {...args}>
            <ModalActions.Right>
                <Paragraph>
                    Laboris dolor enim ex qui esse id nisi qui officia aliquip enim dolore est. Ex veniam proident
                    incididunt magna dolor do ad. Cillum mollit deserunt laboris est.
                </Paragraph>
            </ModalActions.Right>
            <ModalActions.Left>
                <Button variant="primaryInverted">Annuleren</Button>
            </ModalActions.Left>
            <ModalActions.Right>
                <Button variant="primaryInverted">Vorige</Button>
                <Button variant="secondary" taskflow>
                    Volgende
                </Button>
            </ModalActions.Right>
        </ModalActions>;
}`,...p.parameters?.docs?.source}}};let g=["SingleStyle","SplitStyle","SplitStyleMulti"]},"./src/common/src/Modal/ModalActions/ModalActions.tsx":(e,t,r)=>{r.d(t,{A:()=>j});var o=r("./node_modules/react/jsx-runtime.js"),n=r("./node_modules/react/index.js"),s=r("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),i=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function l(){var e=d([`
	display: grid;
	grid-template-rows: `,` auto;
	padding: 0;
	text-align: right;

	`,` {
		grid-column: 1 / span 2;
		grid-row: 1;
		background-color: `,`;
	}
`]);return l=function(){return e},e}function c(){var e=d([`
	`,`
	grid-template-columns: 1fr;
`]);return c=function(){return e},e}function m(){var e=d([`
	`,`
	grid-template-columns: 1fr 1fr;
`]);return m=function(){return e},e}function u(){var e=d([`
	display: flex;
	grid-column: 1;
	gap: `,`; /* > Safari 14.1 */
`]);return u=function(){return e},e}function p(){var e=d([`
	display: flex;
	grid-column: 2;
	justify-content: end;
	gap: `,`; /* > Safari 14.1 */
`]);return p=function(){return e},e}var h=(0,i.css)(l(),(0,a.B7)(6),s.A,function(e){return e.hideDivider?"transparent":"#000"}),g=i.default.footer(c(),h),f=i.default.footer(m(),h),y=i.default.div(u(),(0,a.B7)(2)),b=i.default.div(p(),(0,a.B7)(2)),v=function(e){var t=e.children,r=e.hideDivider,i=void 0===r||r;return n.Children.count(t)>1?(0,o.jsxs)(f,{"data-testid":"modal-actions",hideDivider:i,children:[(0,o.jsx)(s.A,{}),t]}):(0,o.jsxs)(g,{"data-testid":"modal-actions",hideDivider:i,children:[(0,o.jsx)(s.A,{}),t]})};v.Left=function(e){var t=e.children;return(0,o.jsx)(y,{children:t})},v.Right=function(e){var t=e.children;return(0,o.jsx)(b,{children:t})};let j=v},"./src/utils/storybook.ts":(e,t,r)=>{r.d(t,{B:()=>o,i:()=>n});var o={description:"Disabled control for this story",control:!1},n=function(e){return e.reduce(function(e,t){return e[t]=o,e},{})}}}]);