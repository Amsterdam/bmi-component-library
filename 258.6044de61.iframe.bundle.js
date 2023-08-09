"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[258],{"./src/form/FileUpload/FileList/FileList.tsx":(e,n,t)=>{t.d(n,{Z:()=>h});var r=t("./node_modules/react/jsx-runtime.js"),i=t("./node_modules/react/index.js"),o=t("./node_modules/@amsterdam/asc-assets/es/icons/Document.js"),l=t("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),a=t("./src/form/FileUpload/FileList/FileListStyles.ts");function u(e,n,t,r,i,o,l){try{var a=e[o](l),u=a.value}catch(e){t(e);return}a.done?n(u):Promise.resolve(u).then(r,i)}var s=function(){var e=function(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function l(e){u(o,r,i,l,a,"next",e)}function a(e){u(o,r,i,l,a,"throw",e)}l(void 0)})}}(function(e){var n;return function(e,n){var t,r,i,o,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(t)throw TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(i=(i=l.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){l.label=o[1];break}if(6===o[0]&&l.label<i[1]){l.label=i[1],i=o;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(o);break}i[2]&&l.ops.pop(),l.trys.pop();continue}o=n.call(e,l)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,function(t){return(n=new Image).src=e,[2,new Promise(function(e){n.onload=function(){e(![n.height,n.width].includes(0))},n.onerror=function(){e(!1)}})]})});return function(n){return e.apply(this,arguments)}}();function c(e,n,t,r,i,o,l){try{var a=e[o](l),u=a.value}catch(e){t(e);return}a.done?n(u):Promise.resolve(u).then(r,i)}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}t("./src/utils/storybook.ts");var d=function(e,n){var t=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],l=!0,a=!1;try{for(i=i.call(e);!(l=(t=i.next()).done)&&(o.push(t.value),!n||o.length!==n);l=!0);}catch(e){a=!0,r=e}finally{try{l||null==i.return||i.return()}finally{if(a)throw r}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,i.useState)(e.preview),2),r=t[0],o=t[1];return(0,i.useEffect)(function(){if(r)return function(){};var t=null;return e&&!e.errors&&void 0===e.preview?(function(e){return new Promise(function(n){var t=new FileReader,r=function(){t&&t.abort()};if(e&&e.type.startsWith("image")){t.onload=function(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function l(e){c(o,r,i,l,a,"next",e)}function a(e){c(o,r,i,l,a,"throw",e)}l(void 0)})}}(function(){var e;return function(e,n){var t,r,i,o,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(t)throw TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(i=(i=l.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){l.label=o[1];break}if(6===o[0]&&l.label<i[1]){l.label=i[1],i=o;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(o);break}i[2]&&l.ops.pop(),l.trys.pop();continue}o=n.call(e,l)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,function(i){switch(i.label){case 0:return[4,s(e=t.result)];case 1:return n({result:i.sent()?e:"",readerCleanup:r}),[2]}})}),t.onerror=function(e){n({result:"",readerCleanup:r})};try{t.readAsDataURL(e)}catch(e){return n({result:"",readerCleanup:r})}}})})(e).then(function(e){var r=e.result,i=e.readerCleanup;if(!n.current)return null;o(r),t=i}):o(""),function(){n.current=!1,t&&t()}},[]),r};function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function m(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var b=function(e){var n=e.files,t=e.cancelLabel,i=e.removeLabel,o=e.onFileNameClick,l=e.onFileRemove,u=e.onCancel,s=e.fileUploadErrorLabel,c=e.fileUploadInProgressLabel,f=e.title,d=function(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,["files","cancelLabel","removeLabel","onFileNameClick","onFileRemove","onCancel","fileUploadErrorLabel","fileUploadInProgressLabel","title"]);return(null==n?void 0:n.length)===0?null:(0,r.jsxs)(a.DY,m(p({"data-testid":"file-list"},d),{children:[f&&(0,r.jsx)(a.v_,{children:f}),n.map(function(e,n){return(0,r.jsx)(y,m(p({onCancel:function(){return u(e)},onFileRemove:function(){return l(e)}},o?{onFileNameClick:function(){return o&&o(e)}}:{}),{cancelLabel:t,removeLabel:i,file:e,fileUploadErrorLabel:s,fileUploadInProgressLabel:c}),e.tmpId||n)})]}))},y=function(e){var n,t=e.file,u=e.cancelLabel,s=e.removeLabel,c=e.onFileNameClick,f=e.onFileRemove,b=e.onCancel,y=e.fileUploadErrorLabel,h=e.fileUploadInProgressLabel,v=(0,i.useRef)(!0),g=function(e){return!!e&&!!e.progress&&e.progress<100}(t),A=function(e){return!!e&&0===e.progress}(t),w=d(t,v);return(0,r.jsxs)(a.wm,{"data-testid":"file-list-item",children:[(0,r.jsxs)(r.Fragment,{children:[!g&&!A&&(0,r.jsx)(a.Gc,{"data-testid":"file-list-item-preview",children:w?(0,r.jsx)(a.Hk,{src:w,alt:t.name}):(0,r.jsx)(l.Z,{size:32,inline:!0,children:(0,r.jsx)(o.Z,{})})}),(null==t?void 0:t.errors)||(null==t?void 0:t.uploadXhrError)?(0,r.jsxs)(a.yM,{"data-testid":"file-list-item-error",children:[(null==t?void 0:null===(n=t.file)||void 0===n?void 0:n.name)||t.name," ",y]}):(0,r.jsxs)(a.cX,m(p({"data-testid":"file-list-item-name"},g?{}:{onClick:function(){return c&&c(t)}}),{hasClickListener:!!c,children:[t.name," ",g&&h]}))]}),g||A?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.TD,{onClick:function(){return b(t)},variant:"textButton","data-testid":"file-list-item-cancel",children:u}),(0,r.jsx)(a.sh,m(p({max:"100"},g?{value:t.progress}:{}),{"data-testid":"file-list-item-progress"}))]}):(0,r.jsx)(a.TD,{onClick:function(){return f(t)},variant:"textButton","data-testid":"file-list-item-remove",children:s})]})};let h=b;try{b.displayName="FileList",b.__docgenInfo={description:"",displayName:"FileList",props:{files:{defaultValue:null,description:"",name:"files",required:!0,type:{name:"Files"}},removeLabel:{defaultValue:null,description:"",name:"removeLabel",required:!0,type:{name:"string"}},cancelLabel:{defaultValue:null,description:"",name:"cancelLabel",required:!0,type:{name:"string"}},onFileRemove:{defaultValue:null,description:"",name:"onFileRemove",required:!0,type:{name:"(file: CustomFileOrRejection) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"(file: CustomFileOrRejection) => void"}},fileUploadErrorLabel:{defaultValue:null,description:"",name:"fileUploadErrorLabel",required:!0,type:{name:"string"}},fileUploadInProgressLabel:{defaultValue:null,description:"",name:"fileUploadInProgressLabel",required:!1,type:{name:"string"}},isUploading:{defaultValue:null,description:"",name:"isUploading",required:!1,type:{name:"boolean"}},progress:{defaultValue:null,description:"",name:"progress",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onFileNameClick:{defaultValue:null,description:"",name:"onFileNameClick",required:!1,type:{name:"((file: CustomFile) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form/FileUpload/FileList/FileList.tsx#FileList"]={docgenInfo:b.__docgenInfo,name:"FileList",path:"src/form/FileUpload/FileList/FileList.tsx#FileList"})}catch(e){}},"./src/form/FileUpload/FileList/FileListStyles.ts":(e,n,t)=>{t.d(n,{DY:()=>h,Gc:()=>g,Hk:()=>A,TD:()=>j,cX:()=>w,sh:()=>O,v_:()=>y,wm:()=>v,yM:()=>x});var r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=t("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),o=t("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js");function l(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function a(){var e=l(["\n	align-self: baseline;\n	font-weight: 800;\n	font-size: 18px;\n	line-height: 23px;\n	color: ",";\n	margin: 0;\n	padding: 0;\n"]);return a=function(){return e},e}function u(){var e=l(["\n	display: flex;\n	flex-direction: column;\n	align-items: center;\n	width: 100%;\n	padding: 0;\n	margin: 0;\n"]);return u=function(){return e},e}function s(){var e=l(["\n	display: flex;\n	gap: ",";\n	position: relative;\n	align-items: center;\n	color: ",";\n	width: 100%;\n	min-height: 48px;\n	padding: 0;\n	margin: 0;\n"]);return s=function(){return e},e}function c(){var e=l(["\n	flex-basis: 50px;\n	max-width: 50px;\n"]);return c=function(){return e},e}function f(){var e=l(["\n	max-height: 32px;\n	max-width: 50px;\n	display: block;\n"]);return f=function(){return e},e}function d(){var e=l(["\n	font-weight: 400;\n	font-size: 18px;\n	line-height: 160%;\n	","\n"]);return d=function(){return e},e}function p(){var e=l(["\n	font-weight: 700;\n	color: ",";\n"]);return p=function(){return e},e}function m(){var e=l(["\n	align-self: center;\n	font-weight: 400;\n	font-size: 18px;\n	line-height: 29px;\n	margin-left: auto;\n"]);return m=function(){return e},e}function b(){var e=l(["\n	position: absolute;\n	bottom: 0;\n	left: 0;\n	height: 10px;\n	width: 100%;\n	accent-color: ","; /* https://caniuse.com/mdn-css_properties_accent-color */\n"]);return b=function(){return e},e}var y=r.ZP.h6(a(),(0,i.EN)("tint","level7")),h=r.ZP.ul(u()),v=r.ZP.li(s(),(0,i.QJ)(10),(0,i.EN)("tint","level7")),g=r.ZP.div(c()),A=r.ZP.img(f()),w=r.ZP.span(d(),function(e){return e.hasClickListener&&"cursor: pointer;"}),x=r.ZP.span(p(),(0,i.EN)("support","invalid")),j=(0,r.ZP)(o.Z)(m()),O=r.ZP.progress(b(),(0,i.EN)("primary"))},"./src/form/FileUpload/FileList/__stubs__/files.ts":(e,n,t)=>{function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{QZ:()=>i,eg:()=>o});var i=[{lastModified:1623407907404,name:"Stakeholderanalyse.pdf",size:119660,type:"application/pdf",webkitRelativePath:""},{lastModified:1623407907304,name:"Migratierapport.pdf",size:129654,type:"application/pdf",webkitRelativePath:""},{lastModified:1623407907204,name:"1px.png",size:119660,type:"image/png",webkitRelativePath:"",preview:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII="}],o=(function(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(i).concat([{errors:[{message:"__ERROR__",code:"file-too-large"}],file:{lastModified:1623407907404,name:"Faalrapport.txt",size:119660,type:"plain.txt",webkitRelativePath:""}}])},"./src/utils/storybook.ts":(e,n,t)=>{t.d(n,{W:()=>i,v:()=>r});var r={description:"Disabled control for this story",control:!1};function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce(function(e,n){return e[n]=r,e},{})}}}]);