"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[249],{"./src/common/src/ConfirmDialog/ConfirmDialog.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>D,DialogXs:()=>P,NoBackdrop:()=>T,WithCloseButton:()=>k,WithCustomSubject:()=>E,WithReactNodeAsMessage:()=>z,__namedExportsOrder:()=>V,default:()=>R});var r=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),a=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("./node_modules/@amsterdam/asc-ui/es/components/Heading/Heading.js"),s=n("./node_modules/react/index.js"),d=n("./src/common/src/Modal/Modal.tsx"),c=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),l=n("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),u=n("./src/common/src/Modal/ModalStyles.ts");function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(){var e=m([`
	/* Reduce default margin-top on modal content in case message consists of HTML elements (ReactNode) */
	margin-top: `,`;
`]);return p=function(){return e},e}function f(){var e=m([`
	justify-content: center;
`]);return f=function(){return e},e}var g=(0,a.default)(u.G)(p(),function(e){return"string"==typeof e.message?(0,c.B7)(3):(0,c.B7)(2)}),b=(0,a.default)(l.A)(f());try{g.displayName="MessageStyle",g.__docgenInfo={description:"",displayName:"MessageStyle",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/ConfirmDialog/ConfirmDialogStyles.tsx#MessageStyle"]={docgenInfo:g.__docgenInfo,name:"MessageStyle",path:"src/common/src/ConfirmDialog/ConfirmDialogStyles.tsx#MessageStyle"})}catch(e){}try{b.displayName="ButtonStyles",b.__docgenInfo={description:"",displayName:"ButtonStyles",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactNode"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"number"}},taskflow:{defaultValue:null,description:"Add narrow arrow on the right side of the secondary button",name:"taskflow",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/ConfirmDialog/ConfirmDialogStyles.tsx#ButtonStyles"]={docgenInfo:b.__docgenInfo,name:"ButtonStyles",path:"src/common/src/ConfirmDialog/ConfirmDialogStyles.tsx#ButtonStyles"})}catch(e){}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(s)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h={message:"",onConfirm:function(){}},v=new o.t(h),x=function(e){var t=e.title,n=e.message,r=e.textConfirmButton,o=e.textCancelButton,a=e.onConfirm,i=e.onCancel,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;s.next({title:void 0===t?"Waarschuwing":t,message:void 0===n?"Weet u zeker dat u dit item definitief wilt verwijderen?":n,textConfirmButton:void 0===r?"Ja":r,textCancelButton:void 0===o?"Nee":o,onCancel:i,onConfirm:void 0===a?function(){}:a})};let O=function(e){var t=e.size,n=e.hideCloseButton,o=e.backdropOpacity,a=e.zIndexOffset,c=e.disablePortal,l=e.open,u=e.store,m=void 0===u?v:u,p=(0,s.useRef)(!1),f=j((0,s.useState)(h),2),y=f[0],x=f[1],O=j((0,s.useState)(void 0!==l&&l),2),C=O[0],w=O[1];return(0,s.useEffect)(function(){return p.current=!0,m.subscribe(function(e){!1!==p.current&&(x(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,a;r=e,o=t,a=n[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a})}return e}({},e)),e.message&&w(!0))}),function(){p.current=!1,w(!1),m.next(h)}},[]),(0,r.jsxs)(d.A,{id:"confirm-dialog","data-testid":"confirm-dialog",open:C,size:void 0===t?"sm":t,backdropOpacity:void 0===o?.3:o,zIndexOffset:void 0===a?1:a,disablePortal:void 0!==c&&c,children:[(0,r.jsx)(d.A.TopBar,{onCloseButton:function(){w(!1),y.onCancel&&y.onCancel()},hideCloseButton:void 0===n||n,children:(0,r.jsx)(i.A,{forwardedAs:"h1",children:y.title})}),(0,r.jsx)(d.A.Content,{children:(0,r.jsx)(g,{message:y.message,children:y.message})}),(0,r.jsxs)(d.A.Actions,{children:[(0,r.jsxs)(d.A.Actions.Left,{children:[(0,r.jsx)(b,{"data-testid":"confirm-button",variant:"primary",style:{marginRight:"8px"},onClick:function(){w(!1),y.onConfirm()},children:y.textConfirmButton}),(0,r.jsx)(b,{"data-testid":"cancel-button",variant:"primaryInverted",onClick:function(){w(!1),y.onCancel&&y.onCancel()},children:y.textCancelButton})]}),(0,r.jsx)(d.A.Actions.Right,{children:" "})]})]})};function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function S(){var e,t,n=(e=[`
	font-size: 18px;
	line-height: 28px;

	p {
		margin-top: 0;
	}

	dl {
		background-color: rgb(0 70 153 / 20%);
		padding: 8px 32px 8px 8px;

		dt,
		dd {
			display: table-cell;
			vertical-align: middle;
			padding: 0 24px 0 0;
			color: #000;
		}
	}
`],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return S=function(){return n},n}var _={title:"Waarschuwing",message:"Weet u zeker dat u dit document definitief wilt verwijderen?",onCancel:function(){console.log("Nee")},onConfirm:function(){console.log("Ja")},onClose:function(){console.log("sluiten")}},B=new o.t(h),M=a.default.div(S()),A=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:function(){return x(_)},children:"Verwijder"}),(0,r.jsx)(O,C({},e))]})},D=A.bind({}),k=A.bind({});k.args={hideCloseButton:!1};var P=A.bind({});P.args={size:"xs"},P.storyName="Dialog XS";var T=A.bind({});T.args={backdropOpacity:1};var E=(function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:function(){return x(w(C({},_),{message:"This message comes from a BehaviorSubject with an isolated state"}),B)},children:"Verwijder"}),(0,r.jsx)(O,{store:B})]})}).bind({});E.storyName="With custom subject";var z=(function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:function(){return x(w(C({},_),{title:"Element verwijderen",message:(0,r.jsxs)(M,{children:[(0,r.jsx)("p",{children:"Weet u zeker dat u dit element wilt verwijderen?"}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:"111"}),(0,r.jsx)("dd",{children:"Bebording/bewegwijzering (statisch)"})]})]}),textConfirmButton:"Verwijder",textCancelButton:"Annuleer"}))},children:"Verwijder"}),(0,r.jsx)(O,C({},e))]})}).bind({});z.storyName="With React node as message";let R={title:"Confirm Dialog"};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(args: Props) => <>
        <button onClick={() => confirm(props)}>Verwijder</button>
        <ConfirmDialog {...args} />
    </>`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(args: Props) => <>
        <button onClick={() => confirm(props)}>Verwijder</button>
        <ConfirmDialog {...args} />
    </>`,...k.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args: Props) => <>
        <button onClick={() => confirm(props)}>Verwijder</button>
        <ConfirmDialog {...args} />
    </>`,...P.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(args: Props) => <>
        <button onClick={() => confirm(props)}>Verwijder</button>
        <ConfirmDialog {...args} />
    </>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => <>
        <button onClick={() => confirm({
    ...props,
    message: 'This message comes from a BehaviorSubject with an isolated state'
  }, customSubject)}>
            Verwijder
        </button>
        <ConfirmDialog store={customSubject} />
    </>`,...E.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(args: Props) => <>
        <button onClick={() => confirm({
    ...props,
    title: 'Element verwijderen',
    message: <ReactNodeExample>
                            <p>Weet u zeker dat u dit element wilt verwijderen?</p>
                            <dl>
                                <dt>111</dt>
                                <dd>Bebording/bewegwijzering (statisch)</dd>
                            </dl>
                        </ReactNodeExample>,
    textConfirmButton: 'Verwijder',
    textCancelButton: 'Annuleer'
  })}>
            Verwijder
        </button>
        <ConfirmDialog {...args} />
    </>`,...z.parameters?.docs?.source}}};let V=["Default","WithCloseButton","DialogXs","NoBackdrop","WithCustomSubject","WithReactNodeAsMessage"]},"./src/common/src/Modal/Modal.tsx":(e,t,n)=>{n.d(t,{A:()=>f});var r=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/react/index.js"),a=n("./node_modules/classnames/index.js"),i=n.n(a),s=n("./src/common/src/Modal/ModalStyles.ts"),d=n("./src/common/src/Modal/ModalTopBar/ModalTopBar.tsx");function c(){var e,t,n=(e=[`
	overflow: hidden auto;
	max-height: calc(90vh - 128px);

	> *:last-child:not(:only-child) {
		margin-bottom: 0;
	}
`],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return c=function(){return n},n}var l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div(c()),u=function(e){var t=e.children;return(0,r.jsx)(l,{children:t})};try{u.displayName="ModalContent",u.__docgenInfo={description:"",displayName:"ModalContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/Modal/ModalContent/ModalContent.tsx#ModalContent"]={docgenInfo:u.__docgenInfo,name:"ModalContent",path:"src/common/src/Modal/ModalContent/ModalContent.tsx#ModalContent"})}catch(e){}var m=n("./src/common/src/Modal/ModalActions/ModalActions.tsx"),p=function(e){var t,n,a=e.id,d=e.children,c=e.classnames,l=e.onClose,u=e.size,m=e.disablePortal,f=e.open,g=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["id","children","classnames","onClose","size","disablePortal","open"]),b=!1,y=null;d&&(y=o.Children.map(d,function(e){return e.type===(0,r.jsx)(p.TopBar,{}).type?(0,o.cloneElement)(e,{id:a,onClose:l}):(e.type===(0,r.jsx)(p.Actions,{}).type&&(b=!0),(0,o.cloneElement)(e,{id:a}))}));var j=i()("modal","modal-".concat(void 0===u?"md":u),c,{"has-actions":b});return(0,r.jsx)(s.f,(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,a;r=e,o=t,a=n[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a})}return e}({},g),n=n={id:a,"data-testid":"modal","aria-labelledby":"modal",className:j,onClose:function(){l&&l()},open:f,disablePortal:m,children:y},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))};p.TopBar=d.A,p.Content=u,p.Actions=m.A;let f=p},"./src/common/src/Modal/ModalActions/ModalActions.tsx":(e,t,n)=>{n.d(t,{A:()=>v});var r=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/react/index.js"),a=n("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function c(){var e=d([`
	display: grid;
	grid-template-rows: `,` auto;
	padding: 0;
	text-align: right;

	`,` {
		grid-column: 1 / span 2;
		grid-row: 1;
		background-color: `,`;
	}
`]);return c=function(){return e},e}function l(){var e=d([`
	`,`
	grid-template-columns: 1fr;
`]);return l=function(){return e},e}function u(){var e=d([`
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
`]);return p=function(){return e},e}var f=(0,i.css)(c(),(0,s.B7)(6),a.A,function(e){return e.hideDivider?"transparent":"#000"}),g=i.default.footer(l(),f),b=i.default.footer(u(),f),y=i.default.div(m(),(0,s.B7)(2)),j=i.default.div(p(),(0,s.B7)(2)),h=function(e){var t=e.children,n=e.hideDivider,i=void 0===n||n;return o.Children.count(t)>1?(0,r.jsxs)(b,{"data-testid":"modal-actions",hideDivider:i,children:[(0,r.jsx)(a.A,{}),t]}):(0,r.jsxs)(g,{"data-testid":"modal-actions",hideDivider:i,children:[(0,r.jsx)(a.A,{}),t]})};h.Left=function(e){var t=e.children;return(0,r.jsx)(y,{children:t})},h.Right=function(e){var t=e.children;return(0,r.jsx)(j,{children:t})};let v=h},"./src/common/src/Modal/ModalStyles.ts":(e,t,n)=>{n.d(t,{G:()=>u,f:()=>l});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/@amsterdam/asc-ui/es/components/Modal/Modal.js"),a=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),i=n("./src/common/src/Modal/ModalTopBar/ModalTopBarStyles.ts");function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=s([`
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
`]);return d=function(){return e},e}function c(){var e=s([`
	display: block;
	padding: 0;
	margin: `,` 0;

	@media screen and (`,`) {
		margin: `,` 0;
	}
`]);return c=function(){return e},e}var l=(0,r.default)(o.A)(d(),(0,a.B7)(8),i.Z),u=r.default.div(c(),(0,a.B7)(3),(0,a.C9)("min-width","tabletM"),(0,a.B7)(7))},"./src/common/src/Modal/ModalTopBar/ModalTopBar.tsx":(e,t,n)=>{n.d(t,{A:()=>l});var r=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),a=n("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),i=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),s=n("./node_modules/@amsterdam/asc-assets/es/icons/Close.js"),d=n("./src/common/src/Modal/ModalTopBar/ModalTopBarStyles.ts"),c=function(e){var t=e.hideCloseButton,n=e.hideDivider,c=e.onCloseButton,l=e.children;return(0,r.jsxs)(d.Z,{"data-testid":"modal-top-bar",hideDivider:void 0===n||n,children:[(0,r.jsx)(d.z,{children:l}),void 0!==t&&t?null:(0,r.jsx)(o.A,{type:"button","data-testid":"modal-close-button",size:26,onClick:function(e){void 0!==c&&c(e)},variant:"blank",children:(0,r.jsx)(i.A,{size:26,children:(0,r.jsx)(s.A,{})})}),(0,r.jsx)(a.A,{})]})};let l=c;try{c.displayName="ModalTopBar",c.__docgenInfo={description:"",displayName:"ModalTopBar",props:{hideDivider:{defaultValue:{value:"true"},description:"",name:"hideDivider",required:!1,type:{name:"boolean"}},hideCloseButton:{defaultValue:{value:"false"},description:"",name:"hideCloseButton",required:!1,type:{name:"boolean"}},onCloseButton:{defaultValue:null,description:"",name:"onCloseButton",required:!1,type:{name:"((evt: SyntheticEvent<Element, Event>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/Modal/ModalTopBar/ModalTopBar.tsx#ModalTopBar"]={docgenInfo:c.__docgenInfo,name:"ModalTopBar",path:"src/common/src/Modal/ModalTopBar/ModalTopBar.tsx#ModalTopBar"})}catch(e){}},"./src/common/src/Modal/ModalTopBar/ModalTopBarStyles.ts":(e,t,n)=>{n.d(t,{Z:()=>l,z:()=>u});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/@amsterdam/asc-ui/es/components/Divider/DividerStyle.js"),a=n("./node_modules/@amsterdam/asc-ui/es/components/TopBar/TopBar.js"),i=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=s([`
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
`]);return d=function(){return e},e}function c(){var e=s([`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	min-width: 0;
	font-size: 40px;
	font-weight: 800;
	letter-spacing: 0;
	font-style: normal;
	line-height: 110%;
`]);return c=function(){return e},e}var l=(0,r.default)(a.A)(d(),function(e){return e.hideDivider?0:(0,i.B7)(6)},function(e){return e.hideDivider?0:"12px"},(0,i.C9)("min-width","tabletS"),o.A,function(e){return e.hideDivider?"transparent":"#000"}),u=r.default.div(c())}}]);