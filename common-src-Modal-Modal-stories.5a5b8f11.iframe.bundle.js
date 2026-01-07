"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[65],{"./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js":(e,t,o)=>{o.d(t,{A:()=>l});var n=o("./node_modules/react/jsx-runtime.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=o("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js");let s=(0,r.css)`
  margin-top: 0;
  color: inherit;
`,i=(0,r.default)(a.A)`
  ${s};
`;var d=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let l=function(e){var{children:t,as:o}=e,r=d(e,["children","as"]);return(0,n.jsx)(i,Object.assign({forwardedAs:o},r,{children:t}))}},"./src/common/src/Modal/Modal.stories.tsx":(e,t,o)=>{o.r(t),o.d(t,{Default:()=>h,__namedExportsOrder:()=>j,default:()=>g});var n=o("./node_modules/react/jsx-runtime.js"),r=o("./node_modules/react/index.js"),a=o("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),s=o("./node_modules/@amsterdam/asc-ui/es/components/Heading/Heading.js"),i=o("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),d=o("./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js"),l=o("./src/common/src/Modal/Modal.tsx"),c=o("./src/common/src/Modal/ModalStyles.ts"),u=o("./src/utils/storybook.ts");function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){var n;n=o[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}var f=(0,u.i)(["children"]),y={title:"common/Modal",component:l.A,argTypes:p({backdropOpacity:{control:{type:"range",min:0,max:1,step:.1}}},f)},h=(function(e){var t,o,u,f=(t=(0,r.useState)(!0),function(e){if(Array.isArray(e))return e}(t)||function(e,t){var o,n,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(o=r.next()).done)&&(a.push(o.value),2!==a.length);s=!0);}catch(e){i=!0,n=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw n}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return m(e,2);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return m(e,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=f[0],h=f[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{onClick:function(){return h(!0)},children:"Open modal"}),(0,n.jsxs)(l.A,(o=p({},e),u=u={open:y,onClose:function(){e.closeOnBackdropClick&&h(!1)},id:"asset-view",children:[(0,n.jsx)(l.A.TopBar,{onCloseButton:function(){return h(!1)},children:"Afgerond - Assetnaam"}),(0,n.jsxs)(l.A.Content,{children:[(0,n.jsxs)(c.G,{children:[(0,n.jsx)(s.A,{forwardedAs:"h4",children:"Onjuiste of ontbrekende gegevens?"}),(0,n.jsx)(d.A,{children:"Geef aan welke gegevens onjuist zijn of ontbreken. Ook als je weet wat het wel moet zijn. We horen het graag."})]}),(0,n.jsx)(i.A,{gutter:!0}),(0,n.jsxs)(c.G,{children:[(0,n.jsx)(s.A,{forwardedAs:"h4",children:"Vraag of een klacht?"}),(0,n.jsx)(d.A,{children:"Als iets op deze pagina niet goed werkt, onduidelijk is of vragen oproept, geef het aan ons door."})]})]}),(0,n.jsxs)(l.A.Actions,{children:[(0,n.jsx)(l.A.Actions.Left,{children:(0,n.jsx)(a.A,{variant:"primaryInverted",onClick:function(){return h(!1)},children:"Annuleren"})}),(0,n.jsxs)(l.A.Actions.Right,{children:[(0,n.jsx)(a.A,{variant:"primaryInverted",children:"Vorige"}),(0,n.jsx)(a.A,{variant:"secondary",children:"Volgende"})]})]})]},Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o.push.apply(o,n)}return o})(Object(u)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(u,e))}),o))]})}).bind({});h.argTypes={open:u.B};let g=y;h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [isModalVisible, setModalVisibility] = useState<boolean>(true);
  return <>
            <Button onClick={() => setModalVisibility(true)}>Open modal</Button>
            <Modal {...args} open={isModalVisible} onClose={() => {
      if (args.closeOnBackdropClick) {
        setModalVisibility(false);
      }
    }} id="asset-view">
                <Modal.TopBar onCloseButton={() => setModalVisibility(false)}>Afgerond - Assetnaam</Modal.TopBar>
                <Modal.Content>
                    <ModalBlockStyle>
                        <Heading forwardedAs="h4">Onjuiste of ontbrekende gegevens?</Heading>
                        <Paragraph>
                            Geef aan welke gegevens onjuist zijn of ontbreken. Ook als je weet wat het wel moet zijn. We
                            horen het graag.
                        </Paragraph>
                    </ModalBlockStyle>
                    <Divider gutter />
                    <ModalBlockStyle>
                        <Heading forwardedAs="h4">Vraag of een klacht?</Heading>
                        <Paragraph>
                            Als iets op deze pagina niet goed werkt, onduidelijk is of vragen oproept, geef het aan ons
                            door.
                        </Paragraph>
                    </ModalBlockStyle>
                </Modal.Content>
                <Modal.Actions>
                    <Modal.Actions.Left>
                        <Button variant="primaryInverted" onClick={() => setModalVisibility(false)}>
                            Annuleren
                        </Button>
                    </Modal.Actions.Left>
                    <Modal.Actions.Right>
                        <Button variant="primaryInverted">Vorige</Button>
                        <Button variant="secondary">Volgende</Button>
                    </Modal.Actions.Right>
                </Modal.Actions>
            </Modal>
        </>;
}`,...h.parameters?.docs?.source}}};let j=["Default"]},"./src/common/src/Modal/Modal.tsx":(e,t,o)=>{o.d(t,{A:()=>f});var n=o("./node_modules/react/jsx-runtime.js"),r=o("./node_modules/react/index.js"),a=o("./node_modules/classnames/index.js"),s=o.n(a),i=o("./src/common/src/Modal/ModalStyles.ts"),d=o("./src/common/src/Modal/ModalTopBar/ModalTopBar.tsx");function l(){var e,t,o=(e=[`
	overflow: hidden auto;
	max-height: calc(90vh - 128px);

	> *:last-child:not(:only-child) {
		margin-bottom: 0;
	}
`],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return o},o}var c=o("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div(l()),u=function(e){var t=e.children;return(0,n.jsx)(c,{children:t})};try{u.displayName="ModalContent",u.__docgenInfo={description:"",displayName:"ModalContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/Modal/ModalContent/ModalContent.tsx#ModalContent"]={docgenInfo:u.__docgenInfo,name:"ModalContent",path:"src/common/src/Modal/ModalContent/ModalContent.tsx#ModalContent"})}catch(e){}var m=o("./src/common/src/Modal/ModalActions/ModalActions.tsx"),p=function(e){var t,o,a=e.id,d=e.children,l=e.classnames,c=e.onClose,u=e.size,m=e.disablePortal,f=e.open,y=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["id","children","classnames","onClose","size","disablePortal","open"]),h=!1,g=null;d&&(g=r.Children.map(d,function(e){return e.type===(0,n.jsx)(p.TopBar,{}).type?(0,r.cloneElement)(e,{id:a,onClose:c}):(e.type===(0,n.jsx)(p.Actions,{}).type&&(h=!0),(0,r.cloneElement)(e,{id:a}))}));var j=s()("modal","modal-".concat(void 0===u?"md":u),l,{"has-actions":h});return(0,n.jsx)(i.f,(t=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){var n,r,a;n=e,r=t,a=o[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a})}return e}({},y),o=o={id:a,"data-testid":"modal","aria-labelledby":"modal",className:j,onClose:function(){c&&c()},open:f,disablePortal:m,children:g},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o.push.apply(o,n)}return o})(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}),t))};p.TopBar=d.A,p.Content=u,p.Actions=m.A;let f=p},"./src/common/src/Modal/ModalActions/ModalActions.tsx":(e,t,o)=>{o.d(t,{A:()=>v});var n=o("./node_modules/react/jsx-runtime.js"),r=o("./node_modules/react/index.js"),a=o("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function l(){var e=d([`
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
`]);return c=function(){return e},e}function u(){var e=d([`
	`,`
	grid-template-columns: 1fr 1fr;
`]);return u=function(){return e},e}function m(){var e=d([`
	display: flex;
	grid-column: 1;
	gap: `,`; /* > Safari 14.1 */
`]);return m=function(){return e},e}function p(){var e=d([`
	display: flex;
	grid-column: 2;
	justify-content: end;
	gap: `,`; /* > Safari 14.1 */
`]);return p=function(){return e},e}var f=(0,s.css)(l(),(0,i.B7)(6),a.A,function(e){return e.hideDivider?"transparent":"#000"}),y=s.default.footer(c(),f),h=s.default.footer(u(),f),g=s.default.div(m(),(0,i.B7)(2)),j=s.default.div(p(),(0,i.B7)(2)),b=function(e){var t=e.children,o=e.hideDivider,s=void 0===o||o;return r.Children.count(t)>1?(0,n.jsxs)(h,{"data-testid":"modal-actions",hideDivider:s,children:[(0,n.jsx)(a.A,{}),t]}):(0,n.jsxs)(y,{"data-testid":"modal-actions",hideDivider:s,children:[(0,n.jsx)(a.A,{}),t]})};b.Left=function(e){var t=e.children;return(0,n.jsx)(g,{children:t})},b.Right=function(e){var t=e.children;return(0,n.jsx)(j,{children:t})};let v=b},"./src/common/src/Modal/ModalStyles.ts":(e,t,o)=>{o.d(t,{G:()=>u,f:()=>c});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./node_modules/@amsterdam/asc-ui/es/components/Modal/Modal.js"),a=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),s=o("./src/common/src/Modal/ModalTopBar/ModalTopBarStyles.ts");function i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=i([`
	max-width: 90%;
	max-height: fit-content;
	overflow: visible;
	padding: `,`;

	&.modal-xs {
		max-width: 320px; /* breakpoint phone */
	}

	&.modal-sm {
		max-width: 540px; /* breakpoint tabletS */
	}

	&.modal-md {
		max-width: 768px; /* breakpoint tabletM */
	}

	&.modal-lg {
		max-width: 1024px; /* breakpoint laptop */
	}

	&.modal-xl {
		max-width: 1920px; /* breakpoint desktop */
	}

	`,` {
		min-height: 44px;
	}
`]);return d=function(){return e},e}function l(){var e=i([`
	display: block;
	padding: 0;
	margin: `,` 0;

	@media screen and (`,`) {
		margin: `,` 0;
	}
`]);return l=function(){return e},e}var c=(0,n.default)(r.A)(d(),(0,a.B7)(8),s.Z),u=n.default.div(l(),(0,a.B7)(3),(0,a.C9)("min-width","tabletM"),(0,a.B7)(7))},"./src/common/src/Modal/ModalTopBar/ModalTopBar.tsx":(e,t,o)=>{o.d(t,{A:()=>c});var n=o("./node_modules/react/jsx-runtime.js"),r=o("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),a=o("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),s=o("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),i=o("./node_modules/@amsterdam/asc-assets/es/icons/Close.js"),d=o("./src/common/src/Modal/ModalTopBar/ModalTopBarStyles.ts"),l=function(e){var t=e.hideCloseButton,o=e.hideDivider,l=e.onCloseButton,c=e.children;return(0,n.jsxs)(d.Z,{"data-testid":"modal-top-bar",hideDivider:void 0===o||o,children:[(0,n.jsx)(d.z,{children:c}),void 0!==t&&t?null:(0,n.jsx)(r.A,{type:"button","data-testid":"modal-close-button",size:26,onClick:function(e){void 0!==l&&l(e)},variant:"blank",children:(0,n.jsx)(s.A,{size:26,children:(0,n.jsx)(i.A,{})})}),(0,n.jsx)(a.A,{})]})};let c=l;try{l.displayName="ModalTopBar",l.__docgenInfo={description:"",displayName:"ModalTopBar",props:{hideDivider:{defaultValue:{value:"true"},description:"",name:"hideDivider",required:!1,type:{name:"boolean"}},hideCloseButton:{defaultValue:{value:"false"},description:"",name:"hideCloseButton",required:!1,type:{name:"boolean"}},onCloseButton:{defaultValue:null,description:"",name:"onCloseButton",required:!1,type:{name:"((evt: SyntheticEvent<Element, Event>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/Modal/ModalTopBar/ModalTopBar.tsx#ModalTopBar"]={docgenInfo:l.__docgenInfo,name:"ModalTopBar",path:"src/common/src/Modal/ModalTopBar/ModalTopBar.tsx#ModalTopBar"})}catch(e){}},"./src/common/src/Modal/ModalTopBar/ModalTopBarStyles.ts":(e,t,o)=>{o.d(t,{Z:()=>c,z:()=>u});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),a=o("./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBar.js"),s=o("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");function i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=i([`
	display: grid;
	grid-template-columns: 1fr auto;
	grid-template-rows: 44px `,`;
	padding: 0;
	margin-bottom: `,`;

	@media screen and (`,`) {
		padding: 0;
	}

	&::after {
		content: unset;
	}

	`,` {
		grid-column: 1 / span 2;
		align-self: flex-end;
		background-color: `,`;
	}
`]);return d=function(){return e},e}function l(){var e=i([`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	min-width: 0;
	font-size: 40px;
	font-weight: 800;
	letter-spacing: 0;
	font-style: normal;
	line-height: 110%;
`]);return l=function(){return e},e}var c=(0,n.default)(a.A)(d(),function(e){return e.hideDivider?0:(0,s.B7)(6)},function(e){return e.hideDivider?0:"12px"},(0,s.C9)("min-width","tabletS"),r.A,function(e){return e.hideDivider?"transparent":"#000"}),u=n.default.div(l())},"./src/utils/storybook.ts":(e,t,o)=>{o.d(t,{B:()=>n,i:()=>r});var n={description:"Disabled control for this story",control:!1},r=function(e){return e.reduce(function(e,t){return e[t]=n,e},{})}}}]);