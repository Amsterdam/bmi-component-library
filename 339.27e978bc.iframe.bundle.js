"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[339],{"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,t,r)=>{r.d(t,{A:()=>g});var n=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/react/index.js"),i=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),l=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=r("./node_modules/polished/dist/polished.esm.js"),s=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),u=r("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let d=e=>(0,c.B7)(11)({theme:e}),f=s.default.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,c.hm)("secondary")};
  border-right: 0;
  ${(0,a.bm)("border-color","0.1s ease-in-out")}
`,m=(0,s.default)(l.A)`
  margin-right: 10px;
`,p=(0,s.default)(l.A)`
  margin-left: 10px;
`,h=s.default.button`
  height: ${({theme:e})=>d(e)};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  padding: ${({size:e,theme:t})=>e?"0":(0,c.B7)(3,4)({theme:t})};
  ${({size:e,square:t})=>(e||t)&&(0,s.css)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,a.Ej)(e||30)}// width and height
    `}
  ${(0,a.bm)(["color","background-color"],"0.1s ease-in-out")}
  ${({theme:e,variant:t,color:r})=>{switch(t){case"primary":return(0,s.css)`
          min-width: 90px;
          background-color: ${(0,c.hm)("primary")};
          color: ${(0,a.W0)((0,c.hm)("primary")({theme:e}))};
          ${(0,c.G2)((0,c.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,c.hm)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,s.css)`
          min-width: 90px;
          background-color: ${(0,c.hm)("secondary")};
          color: ${(0,c.hm)("tint","level1")};
          ${(0,c.G2)((0,c.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,c.hm)("secondary")({theme:e}))};
          }

          ${t=>t&&(0,s.css)`
              &:not(:disabled)&:focus
                ${f},
                &:not(:disabled)&:hover
                ${f} {
                border-left-color: ${(0,a.e$)(.1,(0,c.hm)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,s.css)`
          min-width: 90px;
          background-color: ${(0,c.hm)("tint","level4")};
          ${(0,c.G2)((0,c.hm)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,a.e$)(.1,(0,c.hm)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,s.css)`
          min-width: 90px;
          color: ${(0,c.hm)("primary")};
          border: 1px solid ${(0,c.hm)("primary")};
          background-color: ${(0,c.hm)("tint","level1")};
          ${(0,c.G2)((0,c.hm)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,c.hm)("primary")};
          }
        `;case"textButton":return(0,s.css)`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${(0,c.hm)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${(0,c.G2)((0,c.hm)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${(0,a.bm)("color","0s")}

          &:hover {
            color: ${(0,c.hm)("secondary")};
            ${(0,c.G2)((0,c.hm)("secondary","main"))};
          }

          ${m} {
            margin-right: ${(0,c.B7)(1)};
          }
          ${p} {
            margin-left: ${(0,c.B7)(1)};
          }
        `;case"blank":return(0,s.css)`
          background-color: ${(0,c.hm)("tint","level1")};
          ${(0,c.G2)((0,c.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,c.hm)("tint","level3")};
          }
        `;case"application":return(0,s.css)`
          border: 1px solid ${(0,c.hm)("tint","level7")};
          background-color: ${(0,c.hm)("tint","level1")};
          height: 32px;
          padding: ${(0,c.B7)(1,2)};
          ${(0,c.G2)((0,c.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,c.hm)("tint","level4")};
          }
        `;default:return(0,s.css)`
          color: ${r?(0,a.W0)((0,c.hm)(r)({theme:e})):(0,c.hm)("primary")({theme:e})};
          ${r&&(0,s.css)`
            background: ${(0,c.hm)(r)};
          `}

          ${!r&&(0,s.css)`
            border: 1px solid ${(0,c.hm)("primary")};
          `}

        &:hover {
            background: ${r?(0,c.hm)(r,"dark")({theme:e}):(0,c.hm)("tint","level3")({theme:e})};
            ${!r&&(0,s.css)`
              outline: 1px solid ${(0,c.hm)("primary")};
            `}
          }
        `}}}
  ${(0,u.h)()} // ie fix
  ${({taskflow:e})=>e&&(0,s.css)`
      position: relative;
      min-width: initial;
      padding-right: 0;
      padding-top: 0; // safari fix
      padding-bottom: 0; // safari fix
      line-height: ${({theme:e})=>d(e)}; // safari 10.1 fix
      z-index: 0;
      && {
        margin-right: 25px;
      }
      &:focus ${f}:after {
        opacity: 1;
      }
    `}
  ${l.A} {
    flex-shrink: 0;
  }
  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    color: ${(0,c.hm)("tint","level4")};
    background-color: ${(0,c.hm)("tint","level3")};
    ${(0,c.G2)((0,c.hm)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:e})=>e&&(0,s.css)`
        ${f} {
          border-left-color: ${(0,c.hm)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,s.css)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};let g=(0,o.forwardRef)((e,t)=>{var{children:r,iconLeft:o,iconRight:a,icon:s,iconSize:c,taskflow:u}=e,d=b(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let g={size:c||i.G.size};return(0,n.jsxs)(h,Object.assign({ref:t},d,{taskflow:u},{children:[o&&(0,n.jsx)(m,Object.assign({},g,{children:o})),s?(0,n.jsx)(l.A,Object.assign({},g,{children:s})):r,a&&(0,n.jsx)(p,Object.assign({},g,{children:a})),u&&(0,n.jsx)(f,{})]}))})},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,t,r)=>{r.d(t,{A:()=>n});let n=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js").A},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,t,r)=>{r.d(t,{A:()=>l,G:()=>i});var n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={size:20,padding:0,rotate:0},l=n.default.span.withConfig({shouldForwardProp:(e,t)=>!["size","rotate","padding","inline","color"].includes(e)&&t(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,n.css)`
      background-image: url(${e});
    `}
  ${({size:e=i.size,padding:t=i.padding})=>(0,n.css)`
    width: ${e-2*t}px;
    height: ${e-2*t}px;
  `}
  ${({padding:e})=>e&&(0,n.css)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=i.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=i.size,padding:t=i.padding})=>(0,n.css)`
      width: ${e-2*t}px;
      height: ${e-2*t}px;
    `}
  }

  ${({color:e})=>e&&(0,o.G2)(e)};
`},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,t,r)=>{r.d(t,{h:()=>o});var n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js");let o=()=>(0,n.css)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./src/form/FileUpload/FileList/FileList.tsx":(e,t,r)=>{r.d(t,{A:()=>g});var n=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/react/index.js");let i=function(e){return(0,n.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",role:"img",focusable:!1},e,{children:(0,n.jsx)("path",{d:"M21.83 2H6v32h24V10.17zM10 30V6h10v6h6v18z"})}))};var l=r("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=r("./src/form/FileUpload/FileList/FileListStyles.ts");function s(e,t,r,n,o,i,l){try{var a=e[i](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,o)}var c=function(e){var t;return(t=function(){var t;return function(e,t){var r,n,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},l=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return l.next=a(0),l.throw=a(1),l.return=a(2),"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function a(a){return function(s){var c=[a,s];if(r)throw TypeError("Generator is already executing.");for(;l&&(l=0,c[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,n=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}}(this,function(r){return(t=new Image).src=e,[2,new Promise(function(e){t.onload=function(){e(![t.height,t.width].includes(0))},t.onerror=function(){e(!1)}})]})},function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function l(e){s(i,n,o,l,a,"next",e)}function a(e){s(i,n,o,l,a,"throw",e)}l(void 0)})})()};function u(e,t,r,n,o,i,l){try{var a=e[i](l),s=a.value}catch(e){r(e);return}a.done?t(s):Promise.resolve(s).then(n,o)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var f=function(e,t){var r,n=(r=(0,o.useState)(e.preview),function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],l=!0,a=!1;try{for(o=o.call(e);!(l=(r=o.next()).done)&&(i.push(r.value),2!==i.length);l=!0);}catch(e){a=!0,n=e}finally{try{l||null==o.return||o.return()}finally{if(a)throw n}}return i}}(r,2)||function(e,t){if(e){if("string"==typeof e)return d(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,2)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=n[0],l=n[1];return(0,o.useEffect)(function(){if(i)return function(){};var r,n=null;return e&&!e.errors&&void 0===e.preview?(r=e,new Promise(function(t){var r=new FileReader,n=function(){r&&r.abort()};if(e&&e.type.startsWith("image")){r.onload=function(){var e;return(e=function(){var e;return function(e,t){var r,n,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},l=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return l.next=a(0),l.throw=a(1),l.return=a(2),"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function a(a){return function(s){var c=[a,s];if(r)throw TypeError("Generator is already executing.");for(;l&&(l=0,c[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,n=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}}(this,function(o){switch(o.label){case 0:return[4,c(e=r.result)];case 1:return t({result:o.sent()?e:"",readerCleanup:n}),[2]}})},function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function l(e){u(i,n,o,l,a,"next",e)}function a(e){u(i,n,o,l,a,"throw",e)}l(void 0)})})()},r.onerror=function(e){t({result:"",readerCleanup:n})};try{r.readAsDataURL(e)}catch(e){return t({result:"",readerCleanup:n})}}})).then(function(e){var r=e.result,o=e.readerCleanup;if(!t.current)return null;l(r),n=o}):l(""),function(){t.current=!1,n&&n()}},[]),i};function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var h=function(e){var t=e.files,r=e.cancelLabel,o=e.removeLabel,i=e.onFileNameClick,l=e.onFileRemove,s=e.onCancel,c=e.fileUploadErrorLabel,u=e.fileUploadInProgressLabel,d=e.title,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["files","cancelLabel","removeLabel","onFileNameClick","onFileRemove","onCancel","fileUploadErrorLabel","fileUploadInProgressLabel","title"]);return(null==t?void 0:t.length)===0?null:(0,n.jsxs)(a.Ww,p(m({"data-testid":"file-list"},f),{children:[d&&(0,n.jsx)(a.EX,{children:d}),t.map(function(e,t){return(0,n.jsx)(b,p(m({onCancel:function(){return s(e)},onFileRemove:function(){return l(e)}},i?{onFileNameClick:function(){return i&&i(e)}}:{}),{cancelLabel:r,removeLabel:o,file:e,fileUploadErrorLabel:c,fileUploadInProgressLabel:u}),e.tmpId||t)})]}))},b=function(e){var t,r,s,c=e.file,u=e.cancelLabel,d=e.removeLabel,h=e.onFileNameClick,b=e.onFileRemove,g=e.onCancel,y=e.fileUploadErrorLabel,v=e.fileUploadInProgressLabel,x=(0,o.useRef)(!0),w=!!(t=c)&&!!c.progress&&c.progress<100,j=!!(r=c)&&0===c.progress,$=f(c,x);return(0,n.jsxs)(a.ti,{"data-testid":"file-list-item",children:[(0,n.jsxs)(n.Fragment,{children:[!w&&!j&&(0,n.jsx)(a.aA,{"data-testid":"file-list-item-preview",children:$?(0,n.jsx)(a.AR,{src:$,alt:c.name}):(0,n.jsx)(l.A,{size:32,inline:!0,children:(0,n.jsx)(i,{})})}),(null==c?void 0:c.errors)||(null==c?void 0:c.uploadXhrError)?(0,n.jsxs)(a.bm,{"data-testid":"file-list-item-error",children:[(null==c||null==(s=c.file)?void 0:s.name)||c.name," ",y]}):(0,n.jsxs)(a.Bk,p(m({"data-testid":"file-list-item-name"},w?{}:{onClick:function(){return h&&h(c)}}),{hasClickListener:!!h,children:[c.name," ",w&&v]}))]}),w||j?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.bb,{onClick:function(){return g(c)},variant:"textButton","data-testid":"file-list-item-cancel",children:u}),(0,n.jsx)(a.q1,p(m({max:"100"},w?{value:c.progress}:{}),{"data-testid":"file-list-item-progress"}))]}):(0,n.jsx)(a.bb,{onClick:function(){return b(c)},variant:"textButton","data-testid":"file-list-item-remove",children:d})]})};let g=h;try{h.displayName="FileList",h.__docgenInfo={description:"",displayName:"FileList",props:{files:{defaultValue:null,description:"",name:"files",required:!0,type:{name:"Files"}},removeLabel:{defaultValue:null,description:"",name:"removeLabel",required:!0,type:{name:"string"}},cancelLabel:{defaultValue:null,description:"",name:"cancelLabel",required:!0,type:{name:"string"}},onFileRemove:{defaultValue:null,description:"",name:"onFileRemove",required:!0,type:{name:"(file: CustomFileOrRejection) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"(file: CustomFileOrRejection) => void"}},fileUploadErrorLabel:{defaultValue:null,description:"",name:"fileUploadErrorLabel",required:!0,type:{name:"string"}},fileUploadInProgressLabel:{defaultValue:null,description:"",name:"fileUploadInProgressLabel",required:!1,type:{name:"string"}},isUploading:{defaultValue:null,description:"",name:"isUploading",required:!1,type:{name:"boolean"}},progress:{defaultValue:null,description:"",name:"progress",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onFileNameClick:{defaultValue:null,description:"",name:"onFileNameClick",required:!1,type:{name:"((file: CustomFile) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form/FileUpload/FileList/FileList.tsx#FileList"]={docgenInfo:h.__docgenInfo,name:"FileList",path:"src/form/FileUpload/FileList/FileList.tsx#FileList"})}catch(e){}},"./src/form/FileUpload/FileList/FileListStyles.ts":(e,t,r)=>{r.d(t,{AR:()=>x,Bk:()=>w,EX:()=>b,Ww:()=>g,aA:()=>v,bb:()=>$,bm:()=>j,q1:()=>A,ti:()=>y});var n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),i=r("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function a(){var e=l([`
	align-self: baseline;
	font-weight: 800;
	font-size: 18px;
	line-height: 23px;
	color: `,`;
	margin: 0;
	padding: 0;
`]);return a=function(){return e},e}function s(){var e=l([`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 0;
	margin: 0;
`]);return s=function(){return e},e}function c(){var e=l([`
	display: flex;
	gap: `,`;
	position: relative;
	align-items: center;
	color: `,`;
	width: 100%;
	min-height: 48px;
	padding: 0;
	margin: 0;
`]);return c=function(){return e},e}function u(){var e=l([`
	flex-basis: 50px;
	max-width: 50px;
`]);return u=function(){return e},e}function d(){var e=l([`
	max-height: 32px;
	max-width: 50px;
	display: block;
`]);return d=function(){return e},e}function f(){var e=l([`
	font-weight: 400;
	font-size: 18px;
	line-height: 160%;
	`,`
`]);return f=function(){return e},e}function m(){var e=l([`
	font-weight: 700;
	color: `,`;
`]);return m=function(){return e},e}function p(){var e=l([`
	align-self: center;
	font-weight: 400;
	font-size: 18px;
	line-height: 29px;
	margin-left: auto;
`]);return p=function(){return e},e}function h(){var e=l([`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 10px;
	width: 100%;
	accent-color: `,`; /* https://caniuse.com/mdn-css_properties_accent-color */
`]);return h=function(){return e},e}var b=n.default.h6(a(),(0,i.hm)("tint","level7")),g=n.default.ul(s()),y=n.default.li(c(),(0,i.B7)(10),(0,i.hm)("tint","level7")),v=n.default.div(u()),x=n.default.img(d()),w=n.default.span(f(),function(e){return e.hasClickListener&&"cursor: pointer;"}),j=n.default.span(m(),(0,i.hm)("support","invalid")),$=(0,n.default)(o.A)(p()),A=n.default.progress(h(),(0,i.hm)("primary"))},"./src/form/FileUpload/FileList/__stubs__/files.ts":(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{aq:()=>i,pL:()=>l});var o,i=[{lastModified:0x179faa6d24c,name:"Stakeholderanalyse.pdf",size:119660,type:"application/pdf",webkitRelativePath:""},{lastModified:0x179faa6d1e8,name:"Migratierapport.pdf",size:129654,type:"application/pdf",webkitRelativePath:""},{lastModified:0x179faa6d184,name:"1px.png",size:119660,type:"image/png",webkitRelativePath:"",preview:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII="}],l=((function(e){if(Array.isArray(e))return n(e)})(o=i)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||function(e,t){if(e){if("string"==typeof e)return n(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,void 0)}}(i)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([{errors:[{message:"__ERROR__",code:"file-too-large"}],file:{lastModified:0x179faa6d24c,name:"Faalrapport.txt",size:119660,type:"plain.txt",webkitRelativePath:""}}])}}]);