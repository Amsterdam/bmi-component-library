"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[725],{"./src/common/src/DocumentTable/DocumentTable.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>L,Loading:()=>Y,NoFilter:()=>V,__namedExportsOrder:()=>z,default:()=>q});var r=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/react/index.js"),a=n("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),i=n("./node_modules/@amsterdam/asc-assets/es/icons/Close.js"),l=n("./node_modules/react-loading-skeleton/dist/index.js"),c=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),u=n("./node_modules/@mui/x-data-grid/esm/DataGrid/DataGrid.js"),d=n("./node_modules/@amsterdam/asc-ui/es/components/Pagination/Pagination.js"),s=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){var e=m([`
	&& {
		padding-top: `,`;
	}
`]);return f=function(){return e},e}function p(){var e=m([`
	.MuiDataGrid-root {
		border: none;
		margin-bottom: `,`;

		.MuiDataGrid-columnHeader {
			padding: 10px 15px;
			line-height: 22px !important;
		}

		.MuiDataGrid-columnHeaderTitleContainer {
			padding: 0;
		}

		.MuiDataGrid-columnHeaderTitle {
			font-weight: 700;
		}

		.MuiDataGrid-columnSeparator {
			display: none;
		}

		.MuiDataGrid-row,
		.MuiDataGrid-cell,
		.MuiDataGrid-renderingZone,
		.MuiDataGrid-viewport {
			max-height: none !important;
		}

		.MuiDataGrid-window {
			position: relative !important;
		}

		.MuiDataGrid-cell {
			border-bottom: none;
			white-space: normal;
			vertical-align: top;

			a {
				color: `,`;

				&:visited {
					color: `,`;
				}

				&:hover {
					color: `,`;
				}
			}

			> span[aria-live] {
				width: 100%;
			}
		}

		.MuiDataGrid-cell,
		.MuiDataGrid-cell--withRenderer {
			align-items: flex-start;
			line-height: 22px !important;
			padding: 10px 15px;
		}

		.MuiDataGrid-columnHeader:focus-within,
		.MuiDataGrid-cell:focus-within,
		.MuiDataGrid-columnHeader:focus,
		.MuiDataGrid-cell:focus {
			outline: none;
		}

		/* stylelint-disable no-descending-specificity */
		.MuiDataGrid-row {
			&:nth-child(odd),
			&:nth-child(odd):hover {
				background-color: `,`;
			}

			&:nth-child(even),
			&:nth-child(even):hover {
				background-color: `,`;
			}
		}
		/* stylelint-enable no-descending-specificity */

		.MuiDataGrid-cell.remove button {
			line-height: 22px;
		}

		.sr-only {
			`,`
		}
	}
`]);return p=function(){return e},e}var _=(0,c.default)(d.A)(f(),(0,s.B7)(1)),b=c.default.div(p(),(0,s.B7)(12),(0,s.hm)("primary","main"),(0,s.hm)("supplement","purple"),(0,s.hm)("secondary","main"),(0,s.hm)("tint","level1"),(0,s.hm)("tint","level2"),s.Du),y=function(e){return(0,r.jsx)(b,{children:(0,r.jsx)(u.z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,a;r=e,o=t,a=n[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a})}return e}({},e))})};try{_.displayName="StyledPagination",_.__docgenInfo={description:"",displayName:"StyledPagination",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentTable/DocumentTableStyle.tsx#StyledPagination"]={docgenInfo:_.__docgenInfo,name:"StyledPagination",path:"src/common/src/DocumentTable/DocumentTableStyle.tsx#StyledPagination"})}catch(e){}try{y.displayName="StyledDataGrid",y.__docgenInfo={description:"",displayName:"StyledDataGrid",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},pagination:{defaultValue:null,description:"",name:"pagination",required:!1,type:{name:"true"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentTable/DocumentTableStyle.tsx#StyledDataGrid"]={docgenInfo:y.__docgenInfo,name:"StyledDataGrid",path:"src/common/src/DocumentTable/DocumentTableStyle.tsx#StyledDataGrid"})}catch(e){}var g=n("./node_modules/@amsterdam/asc-ui/es/components/Input/Input.js"),O=n("./node_modules/@mui/icons-material/esm/Cancel.js");function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function D(){var e=h([`
	&& {
		position: absolute;
		right: 4px;
		top: 6px;
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
`]);return D=function(){return e},e}function v(){var e=h([`
	&& {
		border: 1px solid `,`;
		height: 32px;
		padding: 0 26px 0 4px;
	}
`]);return v=function(){return e},e}function T(){var e=h([`
	position: relative;
`]);return T=function(){return e},e}var E=(0,c.default)(O.A)(D()),S=(0,c.default)(g.A)(v(),(0,s.hm)("tint","level5"));let C=c.default.div(T());function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var w=function(e){var t,n,a,i,l=e.params,c=e.onFilter,u=e.onClear,d=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["params","onFilter","onClear"]),s=l.field,m=(t=(0,o.useState)(null!=(i=null==d?void 0:d.value)?i:""),function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(a.push(n.value),2!==a.length);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw r}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return j(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=m[0],p=m[1];return(0,o.useEffect)(function(){return c(f)},[f]),(0,r.jsxs)(C,{children:[(0,r.jsx)(S,(n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,a;r=e,o=t,a=n[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a})}return e}({name:s,value:f,onKeyUp:function(e){p(e.target.value)},onChange:function(e){return p(e.target.value)}},d),a=a={"data-testid":"column-filter-".concat(s)},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}),n)),f&&(0,r.jsx)(E,{onClick:function(){p(""),u()},"data-testid":"column-filter-cancel-".concat(s)})]})};try{w.displayName="ColumnFilter",w.__docgenInfo={description:"",displayName:"ColumnFilter",props:{params:{defaultValue:null,description:"",name:"params",required:!0,type:{name:'Pick<GridCellParams<any, unknown, unknown, GridTreeNode>, "field">'}},onFilter:{defaultValue:null,description:"",name:"onFilter",required:!0,type:{name:"(value: string) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentTable/ColumnFilter.tsx#ColumnFilter"]={docgenInfo:w.__docgenInfo,name:"ColumnFilter",path:"src/common/src/DocumentTable/ColumnFilter.tsx#ColumnFilter"})}catch(e){}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){n(e);return}l.done?t(c):Promise.resolve(c).then(r,o)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){M(e,t,n[t])})}return e}function I(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw r}}return a}}(e,t)||F(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||F(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}}n("./node_modules/react-loading-skeleton/dist/skeleton.css");var k=function(e){var t=e.columns,n=e.rows,c=e.disableFilterRow,u=void 0!==c&&c,d=e.disableRemoval,s=void 0!==d&&d,m=e.page,f=e.pageSize,p=void 0===f?10:f,b=e.onRemove,g=e.onDownload,O=e.loading,h=void 0!==O&&O,D=(0,o.useMemo)(function(){var e=null!=t?t:[{field:"filename",headerName:"Bestandsnaam",renderCell:function(e){return h?(0,r.jsx)(l.A,{}):g?(0,r.jsxs)("a",{href:"#",onClick:function(t){t.stopPropagation(),t.preventDefault(),g(e.row)},onDragStart:function(e){return e.preventDefault()},"data-testid":"document-table-download-".concat(e.id),children:[(0,r.jsx)("span",{className:"sr-only",children:"Download"}),e.value]}):(0,r.jsx)(r.Fragment,{children:e.value})},flex:1.5,sortable:!1,resizable:!1},{field:"documentDescription",headerName:"Documentomschrijving",flex:1.5,sortable:!1,resizable:!1},{field:"documentType",headerName:"Documenttype",flex:1.5,sortable:!1,resizable:!1},{field:"year",headerName:"Jaar",flex:.5,sortable:!1,resizable:!1}];return e=u?e.map(function(e){return I(x({},e),{renderCell:function(t){return h?(0,r.jsx)(l.A,{}):void 0!==e.renderCell?e.renderCell(t):(0,r.jsx)(r.Fragment,{children:t.formattedValue})}})}):e.map(function(e){return I(x({},e),{renderCell:function(t){return h?(0,r.jsx)(l.A,{}):0===t.id&&"id"===t.field?(0,r.jsx)(r.Fragment,{}):0===t.id?(0,r.jsx)(w,{params:t,onFilter:function(e){z(t.field,e)},onClear:function(){return B(t.field)}}):void 0!==e.renderCell?e.renderCell(t):(0,r.jsx)(r.Fragment,{children:t.formattedValue})}})}),s||e.push({field:"id",headerName:" ",sortable:!1,cellClassName:"remove",renderCell:function(e){return h?(0,r.jsx)(l.A,{}):0===e.id&&"id"===e.field?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(a.A,{variant:"textButton",iconSize:14,iconLeft:(0,r.jsx)(i.A,{}),onClick:function(){return H(e.value)},"data-testid":"document-table-remove-".concat(e.id),children:"Wissen"})}}),e},[t,u,s,h]),v=A((0,o.useState)(n),2),T=v[0],E=v[1],S=A((0,o.useState)(n),2),C=S[0],j=S[1],P=A((0,o.useState)(void 0===m?1:m),2),F=P[0],k=P[1],G=A((0,o.useState)({}),2),U=G[0],L=G[1],V=A((0,o.useState)([]),2),Y=V[0],q=V[1],z=(0,o.useCallback)(function(e,t){L(function(n){return I(x({},n),M({},e,t))})},[]),B=(0,o.useCallback)(function(e){delete U[e],L(x({},U))},[]),H=(0,o.useCallback)(function(e){var t;return(t=function(){return function(e,t){var n,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=l(0),i.throw=l(1),i.return=l(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){var u=[l,c];if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}}(this,function(t){switch(t.label){case 0:if(!b)return[3,2];return[4,b(e)];case 1:!1!==t.sent()&&q(R(Y).concat([e])),t.label=2;case 2:return[2]}})},function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(e){N(a,r,o,i,l,"next",e)}function l(e){N(a,r,o,i,l,"throw",e)}i(void 0)})})()},[]),K=(0,o.useMemo)(function(){var e=D.reduce(function(e,t,n){return e[t.field]="",e},{});return R(Array(p+ +!u)).map(function(t,n){return I(x({},e),{id:n+2})})},[D]);return(0,o.useEffect)(function(){var e,t,r,o,a,i=(u?n:(e=n,0===Object.keys(t=U).length?n:n.filter(function(e){var t=!0;return Object.keys(U).some(function(n){return!(null==U||!U[n].length||String(e[n]).toLowerCase().includes(String(U[n]).toLowerCase()))&&(t=!1,!0)}),t}))).filter(function(e){return!Y.includes(e.id)});E(i),j(R(u?[]:[{id:0}]).concat(R((r=i,o=p,a=F,i.slice((F-1)*p,F*p)))))},[F,U,n,Y]),(0,o.useEffect)(function(){return k(1)},[U]),(0,o.useEffect)(function(){return q([])},[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{columns:D,rows:h?K:C,disableColumnFilter:!0,disableColumnMenu:!0,autoHeight:!0,hideFooter:!0,hideFooterPagination:!0,disableRowSelectionOnClick:!0,rowHeight:42,columnHeaderHeight:42,getRowHeight:function(){return"auto"}}),!h&&(0,r.jsx)(_,{collectionSize:T.length,pageSize:p,page:F,onPageChange:k})]})};try{k.displayName="DocumentTable",k.__docgenInfo={description:"",displayName:"DocumentTable",props:{columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"GridColDef[]"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"GridValidRowModel[]"}},page:{defaultValue:{value:"1"},description:"",name:"page",required:!1,type:{name:"number"}},pageSize:{defaultValue:{value:"10"},description:"",name:"pageSize",required:!1,type:{name:"number"}},disableFilterRow:{defaultValue:{value:"false"},description:"",name:"disableFilterRow",required:!1,type:{name:"boolean"}},disableRemoval:{defaultValue:{value:"false"},description:"",name:"disableRemoval",required:!1,type:{name:"boolean"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((id: string) => Promise<boolean | void>)"}},onDownload:{defaultValue:null,description:"",name:"onDownload",required:!1,type:{name:"((row: GridValidRowModel) => void)"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/src/DocumentTable/DocumentTable.tsx#DocumentTable"]={docgenInfo:k.__docgenInfo,name:"DocumentTable",path:"src/common/src/DocumentTable/DocumentTable.tsx#DocumentTable"})}catch(e){}var G=[{id:"593a3fce-dd0e-4b80-ae52-1127b04083df",filename:"__FILENAME__  #1",documentDescription:"__DOCUMENT_DESCRIPTION__ #1",documentType:"__DOCUMENT_TYPE__ #1",year:1900},{id:"2404b589-ba65-4908-8907-7108f7f1462c",filename:"__FILENAME__  #2",documentDescription:"__DOCUMENT_DESCRIPTION__ #2",documentType:"__DOCUMENT_TYPE__ #2",year:1901},{id:"7ff9e462-6cc4-4d7f-82d2-504a215967d3",filename:"__FILENAME__  #3",documentDescription:"__DOCUMENT_DESCRIPTION__ #3",documentType:"__DOCUMENT_TYPE__ #3",year:1902},{id:"66601eda-d025-419a-8193-68aca9f9f273",filename:"__FILENAME__  #4",documentDescription:"__DOCUMENT_DESCRIPTION__ #4",documentType:"__DOCUMENT_TYPE__ #4",year:1903},{id:"cc6c8c9a-a88e-4e14-88f7-282178d46df6",filename:"__FILENAME__  #5",documentDescription:"__DOCUMENT_DESCRIPTION__ #5",documentType:"__DOCUMENT_TYPE__ #5",year:1904},{id:"a78b7ad1-4f55-4bc1-8a5d-bd089325f352",filename:"__FILENAME__  #6",documentDescription:"__DOCUMENT_DESCRIPTION__ #6",documentType:"__DOCUMENT_TYPE__ #6",year:1905},{id:"b9ba0656-30c3-45d8-85f6-e287bafd1db9",filename:"__FILENAME__  #7",documentDescription:"__DOCUMENT_DESCRIPTION__ #7",documentType:"__DOCUMENT_TYPE__ #7",year:1906},{id:"1187460d-c125-49aa-8645-9227a599f186",filename:"__FILENAME__  #8",documentDescription:"__DOCUMENT_DESCRIPTION__ #8",documentType:"__DOCUMENT_TYPE__ #8",year:1907},{id:"bb43d91f-aab2-4f38-b65d-45052f8fcb36",filename:"__FILENAME__  #9",documentDescription:"__DOCUMENT_DESCRIPTION__ #9",documentType:"__DOCUMENT_TYPE__ #9",year:1908},{id:"436719dd-5524-4e3c-b0a5-7e2e423f2eb0",filename:"__FILENAME__  #10",documentDescription:"__DOCUMENT_DESCRIPTION__ #10",documentType:"__DOCUMENT_TYPE__ #10",year:1909},{id:"8c129857-192e-4bfc-8ef8-4798a7c9d3ff",filename:"__FILENAME__  #11",documentDescription:"__DOCUMENT_DESCRIPTION__ #11",documentType:"__DOCUMENT_TYPE__ #11",year:1910},{id:"40a0d589-07be-443f-bba3-66cdbb093ae3",filename:"__FILENAME__  #12",documentDescription:"__DOCUMENT_DESCRIPTION__ #12",documentType:"__DOCUMENT_TYPE__ #12",year:1911},{id:"72be15a9-81f4-4f07-8905-f50a4a0e432d",filename:"__FILENAME__  #13",documentDescription:"__DOCUMENT_DESCRIPTION__ #13",documentType:"__DOCUMENT_TYPE__ #13",year:1912},{id:"612ce8f0-c247-4cb5-ac6f-59b1fcb267a6",filename:"__FILENAME__  #14",documentDescription:"__DOCUMENT_DESCRIPTION__ #14",documentType:"__DOCUMENT_TYPE__ #14",year:1913}],U=function(e){return(0,r.jsx)(k,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,a;r=e,o=t,a=n[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a})}return e}({},e))},L=U.bind({});L.args={rows:G,disableFilterRow:!1,disableRemoval:!1,pageSize:3};var V=U.bind({});V.args={rows:G,disableFilterRow:!0,disableRemoval:!1,pageSize:4};var Y=U.bind({});Y.args={rows:[],disableFilterRow:!1,disableRemoval:!1,loading:!0,pageSize:3};let q={title:"common/DocumentTable",component:k};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
  return <DocumentTable {...args} />;
}`,...L.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  return <DocumentTable {...args} />;
}`,...V.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  return <DocumentTable {...args} />;
}`,...Y.parameters?.docs?.source}}};let z=["Default","NoFilter","Loading"]}}]);