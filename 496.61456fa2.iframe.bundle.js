"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[496],{"./node_modules/@amsterdam/asc-assets/es/icons/Document.js":(e,t,n)=>{n.d(t,{A:()=>o});var r=n("./node_modules/react/jsx-runtime.js");let o=function(e){return(0,r.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",role:"img",focusable:!1},e,{children:(0,r.jsx)("path",{d:"M21.83 2H6v32h24V10.17zM10 30V6h10v6h6v18z"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":(e,t,n)=>{n.d(t,{A:()=>b});var r=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/react/index.js"),i=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),a=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),c=n("./node_modules/polished/dist/polished.esm.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),u=n("./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js");let p={size:30},f=e=>(0,s.B7)(11)({theme:e}),d=l.Ay.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,s.hm)("secondary")};
  border-right: 0;
  ${(0,c.bm)("border-color","0.1s ease-in-out")}
`,m=(0,l.Ay)(a.A)`
  margin-right: 10px;
`,g=(0,l.Ay)(a.A)`
  margin-left: 10px;
`,v=l.Ay.button`
  height: ${({theme:e})=>f(e)};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  padding: ${({size:e,theme:t})=>e?"0":(0,s.B7)(3,4)({theme:t})};
  ${({size:e,square:t})=>(e||t)&&(0,l.AH)`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,c.Ej)(e||p.size)}// width and height
    `}
  ${(0,c.bm)(["color","background-color"],"0.1s ease-in-out")}
  ${(()=>({theme:e,variant:t,color:n})=>{switch(t){case"primary":return(0,l.AH)`
          min-width: 90px;
          background-color: ${(0,s.hm)("primary")};
          color: ${(0,c.W0)((0,s.hm)("primary")({theme:e}))};
          ${(0,s.G2)((0,s.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,c.e$)(.1,(0,s.hm)("primary")({theme:e}))};
          }
        `;case"secondary":return(0,l.AH)`
          min-width: 90px;
          background-color: ${(0,s.hm)("secondary")};
          color: ${(0,s.hm)("tint","level1")};
          ${(0,s.G2)((0,s.hm)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,c.e$)(.1,(0,s.hm)("secondary")({theme:e}))};
          }

          ${t=>t&&(0,l.AH)`
              &:not(:disabled)&:focus
                ${d},
                &:not(:disabled)&:hover
                ${d} {
                border-left-color: ${(0,c.e$)(.1,(0,s.hm)("secondary")({theme:e}))};
              }
            `}
        `;case"tertiary":return(0,l.AH)`
          min-width: 90px;
          background-color: ${(0,s.hm)("tint","level4")};
          ${(0,s.G2)((0,s.hm)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,c.e$)(.1,(0,s.hm)("tint","level4")({theme:e}))};
          }
        `;case"primaryInverted":return(0,l.AH)`
          min-width: 90px;
          color: ${(0,s.hm)("primary")};
          border: 1px solid ${(0,s.hm)("primary")};
          background-color: ${(0,s.hm)("tint","level1")};
          ${(0,s.G2)((0,s.hm)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,s.hm)("primary")};
          }
        `;case"textButton":return(0,l.AH)`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${(0,s.hm)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${(0,s.G2)((0,s.hm)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${(0,c.bm)("color","0s")}

          &:hover {
            color: ${(0,s.hm)("secondary")};
            ${(0,s.G2)((0,s.hm)("secondary","main"))};
          }

          ${m} {
            margin-right: ${(0,s.B7)(1)};
          }
          ${g} {
            margin-left: ${(0,s.B7)(1)};
          }
        `;case"blank":return(0,l.AH)`
          background-color: ${(0,s.hm)("tint","level1")};
          ${(0,s.G2)((0,s.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,s.hm)("tint","level3")};
          }
        `;case"application":return(0,l.AH)`
          border: 1px solid ${(0,s.hm)("tint","level7")};
          background-color: ${(0,s.hm)("tint","level1")};
          height: 32px;
          padding: ${(0,s.B7)(1,2)};
          ${(0,s.G2)((0,s.hm)("tint","level7"))};
          &:hover {
            background-color: ${(0,s.hm)("tint","level4")};
          }
        `;default:return(0,l.AH)`
          color: ${n?(0,c.W0)((0,s.hm)(n)({theme:e})):(0,s.hm)("primary")({theme:e})};
          ${n&&(0,l.AH)`
            background: ${(0,s.hm)(n)};
          `}

          ${!n&&(0,l.AH)`
            border: 1px solid ${(0,s.hm)("primary")};
          `}

        &:hover {
            background: ${n?(0,s.hm)(n,"dark")({theme:e}):(0,s.hm)("tint","level3")({theme:e})};
            ${!n&&(0,l.AH)`
              outline: 1px solid ${(0,s.hm)("primary")};
            `}
          }
        `}})()}
  ${(0,u.h)()} // ie fix
  ${({taskflow:e})=>e&&(0,l.AH)`
      position: relative;
      min-width: initial;
      padding-right: 0;
      padding-top: 0; // safari fix
      padding-bottom: 0; // safari fix
      line-height: ${({theme:e})=>f(e)}; // safari 10.1 fix
      z-index: 0;
      && {
        margin-right: 25px;
      }
      &:focus ${d}:after {
        opacity: 1;
      }
    `}
  ${a.A} {
    flex-shrink: 0;
  }
  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    color: ${(0,s.hm)("tint","level4")};
    background-color: ${(0,s.hm)("tint","level3")};
    ${(0,s.G2)((0,s.hm)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:e})=>e&&(0,l.AH)`
        ${d} {
          border-left-color: ${(0,s.hm)("tint","level3")};
        }
      `}
    ${({variant:e})=>e&&"textButton"===e&&(0,l.AH)`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`;var y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let h=(0,o.forwardRef)((e,t)=>{var{children:n,iconLeft:o,iconRight:c,icon:l,iconSize:s,taskflow:u}=e,p=y(e,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);let f={size:s||i.G.size};return(0,r.jsxs)(v,Object.assign({ref:t},p,{taskflow:u},{children:[o&&(0,r.jsx)(m,Object.assign({},f,{children:o})),l?(0,r.jsx)(a.A,Object.assign({},f,{children:l})):n,c&&(0,r.jsx)(g,Object.assign({},f,{children:c})),u&&(0,r.jsx)(d,{})]}))}),b=h},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":(e,t,n)=>{n.d(t,{A:()=>o});var r=n("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");let o=r.A},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":(e,t,n)=>{n.d(t,{A:()=>c,G:()=>i});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");let i={size:20,padding:0,rotate:0},a=r.Ay.span.withConfig({shouldForwardProp:(e,t)=>!["size","rotate","padding","inline","color"].includes(e)&&t(e)})`
  display: ${({inline:e})=>e?"inline-flex":"flex"};
  ${({iconUrl:e})=>e&&(0,r.AH)`
      background-image: url(${e});
    `}
  ${({size:e=i.size,padding:t=i.padding})=>(0,r.AH)`
    width: ${e-2*t}px;
    height: ${e-2*t}px;
  `}
  ${({padding:e})=>e&&(0,r.AH)`
      padding: ${e}px;
    `};
  box-sizing: content-box;
  ${({rotate:e=i.rotate})=>`transform: rotate(${e}deg)`};

  & > svg {
    ${({size:e=i.size,padding:t=i.padding})=>(0,r.AH)`
      width: ${e-2*t}px;
      height: ${e-2*t}px;
    `}
  }

  ${({color:e})=>e&&(0,o.G2)(e)};
`,c=a},"./node_modules/@amsterdam/asc-ui/es/components/shared/ie-fixes.js":(e,t,n)=>{n.d(t,{h:()=>o});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");let o=()=>(0,r.AH)`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`},"./node_modules/attr-accept/dist/es/index.js":(e,t)=>{t.A=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t})}return!0}},"./node_modules/react-dropzone/dist/es/index.js":(e,t,n)=>{n.d(t,{VB:()=>Q});var r=n("./node_modules/react/index.js"),o=n("./node_modules/prop-types/index.js"),i=n.n(o),a=n("./node_modules/tslib/tslib.es6.mjs"),c=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function l(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=c.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var s=[".DS_Store","Thumbs.db"];function u(e){return"object"==typeof e&&null!==e}function p(e){return e.filter(function(e){return -1===s.indexOf(e.name)})}function f(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function d(e){if("function"!=typeof e.webkitGetAsEntry)return m(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?v(t):m(e)}function m(e){var t=e.getAsFile();return t?Promise.resolve(l(t)):Promise.reject("".concat(e," is not a File"))}function g(e){return(0,a.sH)(this,void 0,void 0,function(){return(0,a.YH)(this,function(t){return[2,e.isDirectory?v(e):function(e){return(0,a.sH)(this,void 0,void 0,function(){return(0,a.YH)(this,function(t){return[2,new Promise(function(t,n){e.file(function(n){t(l(n,e.fullPath))},function(e){n(e)})})]})})}(e)]})})}function v(e){var t=e.createReader();return new Promise(function(e,n){var r=[];!function o(){var i=this;t.readEntries(function(t){return(0,a.sH)(i,void 0,void 0,function(){var i;return(0,a.YH)(this,function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return e(a.sent()),[3,4];case 3:return n(a.sent()),[3,4];case 4:return[3,6];case 5:i=Promise.all(t.map(g)),r.push(i),o(),a.label=6;case 6:return[2]}})})},function(e){n(e)})}()})}var y=n("./node_modules/attr-accept/dist/es/index.js");function h(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||O(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){w(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||O(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var D=function(e){var t=Array.isArray(e=Array.isArray(e)&&1===e.length?e[0]:e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},$=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},k=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},S={code:"too-many-files",message:"Too many files"};function E(e,t){var n="application/x-moz-file"===e.type||(0,y.A)(e,t);return[n,n?null:D(t)]}function P(e,t,n){if(F(e.size)){if(F(t)&&F(n)){if(e.size>n)return[!1,$(n)];if(e.size<t)return[!1,k(t)]}else if(F(t)&&e.size<t)return[!1,k(t)];else if(F(n)&&e.size>n)return[!1,$(n)]}return[!0,null]}function F(e){return null!=e}function z(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function _(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(e){return"Files"===e||"application/x-moz-file"===e}):!!e.target&&!!e.target.files}function C(e){e.preventDefault()}function H(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some(function(t){return!z(e)&&t&&t.apply(void 0,[e].concat(r)),z(e)})}}function I(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function R(e){return/^.*\.[\w]+$/.test(e)}var T=["children"],B=["open"],M=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],L=["refKey","onChange","onClick"];function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||K(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach(function(t){V(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var q=(0,r.forwardRef)(function(e,t){var n=e.children,o=Q(X(e,T)),i=o.open,a=X(o,B);return(0,r.useImperativeHandle)(t,function(){return{open:i}},[i]),r.createElement(r.Fragment,null,n(W(W({},a),{},{open:i})))});q.displayName="Dropzone";var N={disabled:!1,getFilesFromEvent:function(e){return(0,a.sH)(this,void 0,void 0,function(){return(0,a.YH)(this,function(t){return u(e)&&function(e){return u(e)}(e.dataTransfer)?[2,function(e,t){return(0,a.sH)(this,void 0,void 0,function(){var n;return(0,a.YH)(this,function(r){switch(r.label){case 0:if(!e.items)return[3,2];if(n=f(e.items).filter(function(e){return"file"===e.kind}),"drop"!==t)return[2,n];return[4,Promise.all(n.map(d))];case 1:return[2,p(function e(t){return t.reduce(function(t,n){return(0,a.fX)((0,a.fX)([],(0,a.zs)(t),!1),(0,a.zs)(Array.isArray(n)?e(n):[n]),!1)},[])}(r.sent()))];case 2:return[2,p(f(e.files).map(function(e){return l(e)}))]}})})}(e.dataTransfer,e.type)]:!function(e){return u(e)&&u(e.target)}(e)?Array.isArray(e)&&e.every(function(e){return"getFile"in e&&"function"==typeof e.getFile})?[2,function(e){return(0,a.sH)(this,void 0,void 0,function(){return(0,a.YH)(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return e.getFile()}))];case 1:return[2,t.sent().map(function(e){return l(e)})]}})})}(e)]:[2,[]]:[2,function(e){return f(e.target.files).map(function(e){return l(e)})}(e)]})})},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};q.defaultProps=N,q.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var J={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=W(W({},N),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,l=t.multiple,s=t.maxFiles,u=t.onDragEnter,p=t.onDragLeave,f=t.onDragOver,d=t.onDrop,m=t.onDropAccepted,g=t.onDropRejected,v=t.onFileDialogCancel,y=t.onFileDialogOpen,b=t.useFsAccessApi,O=t.autoFocus,A=t.preventDropOnDocument,D=t.noClick,$=t.noKeyboard,k=t.noDrag,T=t.noDragEventsBubbling,B=t.onError,U=t.validator,q=(0,r.useMemo)(function(){return function(e){if(F(e))return Object.entries(e).reduce(function(e,t){var n=j(t,2),r=n[0],o=n[1];return[].concat(h(e),[r],h(o))},[]).filter(function(e){return I(e)||R(e)}).join(",")}(n)},[n]),Q=(0,r.useMemo)(function(){return function(e){return F(e)?[{description:"Files",accept:Object.entries(e).filter(function(e){var t=j(e,2),n=t[0],r=t[1],o=!0;return I(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(R)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(e,t){var n=j(t,2),r=n[0],o=n[1];return x(x({},e),{},w({},r,o))},{})}]:e}(n)},[n]),et=(0,r.useMemo)(function(){return"function"==typeof y?y:ee},[y]),en=(0,r.useMemo)(function(){return"function"==typeof v?v:ee},[v]),er=(0,r.useRef)(null),eo=(0,r.useRef)(null),ei=G((0,r.useReducer)(Z,J),2),ea=ei[0],ec=ei[1],el=ea.isFocused,es=ea.isFileDialogActive,eu=(0,r.useRef)("undefined"!=typeof window&&window.isSecureContext&&b&&function(){return"showOpenFilePicker"in window}()),ep=function(){!eu.current&&es&&setTimeout(function(){eo.current&&!eo.current.files.length&&(ec({type:"closeDialog"}),en())},300)};(0,r.useEffect)(function(){return window.addEventListener("focus",ep,!1),function(){window.removeEventListener("focus",ep,!1)}},[eo,es,en,eu]);var ef=(0,r.useRef)([]),ed=function(e){er.current&&er.current.contains(e.target)||(e.preventDefault(),ef.current=[])};(0,r.useEffect)(function(){return A&&(document.addEventListener("dragover",C,!1),document.addEventListener("drop",ed,!1)),function(){A&&(document.removeEventListener("dragover",C),document.removeEventListener("drop",ed))}},[er,A]),(0,r.useEffect)(function(){return!o&&O&&er.current&&er.current.focus(),function(){}},[er,O,o]);var em=(0,r.useCallback)(function(e){B?B(e):console.error(e)},[B]),eg=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eS(e),ef.current=[].concat(function(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||K(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(ef.current),[e.target]),_(e)&&Promise.resolve(i(e)).then(function(t){if(!z(e)||T){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return(!!i||!(t.length>1))&&(!i||!(a>=1)||!(t.length>a))&&t.every(function(e){var t=j(E(e,n),1)[0],i=j(P(e,r,o),1)[0],a=c?c(e):null;return t&&i&&!a})}({files:t,accept:q,minSize:c,maxSize:a,multiple:l,maxFiles:s,validator:U});ec({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),u&&u(e)}}).catch(function(e){return em(e)})},[i,u,em,T,q,c,a,l,s,U]),ev=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eS(e);var t=_(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&f&&f(e),!1},[f,T]),ey=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eS(e);var t=ef.current.filter(function(e){return er.current&&er.current.contains(e)}),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ef.current=t,!(t.length>0)&&(ec({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),_(e)&&p&&p(e))},[er,p,T]),eh=(0,r.useCallback)(function(e,t){var n=[],r=[];e.forEach(function(e){var t=G(E(e,q),2),o=t[0],i=t[1],l=G(P(e,c,a),2),s=l[0],u=l[1],p=U?U(e):null;if(o&&s&&!p)n.push(e);else{var f=[i,u];p&&(f=f.concat(p)),r.push({file:e,errors:f.filter(function(e){return e})})}}),(!l&&n.length>1||l&&s>=1&&n.length>s)&&(n.forEach(function(e){r.push({file:e,errors:[S]})}),n.splice(0)),ec({acceptedFiles:n,fileRejections:r,type:"setFiles"}),d&&d(n,r,t),r.length>0&&g&&g(r,t),n.length>0&&m&&m(n,t)},[ec,l,q,c,a,s,d,m,g,U]),eb=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eS(e),ef.current=[],_(e)&&Promise.resolve(i(e)).then(function(t){(!z(e)||T)&&eh(t,e)}).catch(function(e){return em(e)}),ec({type:"reset"})},[i,eh,em,T]),ex=(0,r.useCallback)(function(){if(eu.current){ec({type:"openDialog"}),et(),window.showOpenFilePicker({multiple:l,types:Q}).then(function(e){return i(e)}).then(function(e){eh(e,null),ec({type:"closeDialog"})}).catch(function(e){(function(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)})(e)?(en(e),ec({type:"closeDialog"})):function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?(eu.current=!1,eo.current?(eo.current.value=null,eo.current.click()):em(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):em(e)});return}eo.current&&(ec({type:"openDialog"}),et(),eo.current.value=null,eo.current.click())},[ec,et,en,b,eh,em,Q,l]),ew=(0,r.useCallback)(function(e){er.current&&er.current.isEqualNode(e.target)&&(" "===e.key||"Enter"===e.key||32===e.keyCode||13===e.keyCode)&&(e.preventDefault(),ex())},[er,ex]),ej=(0,r.useCallback)(function(){ec({type:"focus"})},[]),eO=(0,r.useCallback)(function(){ec({type:"blur"})},[]),eA=(0,r.useCallback)(function(){D||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return -1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return -1!==e.indexOf("Edge/")}(e)}()?setTimeout(ex,0):ex())},[D,ex]),eD=function(e){return o?null:e},e$=function(e){return $?null:eD(e)},ek=function(e){return k?null:eD(e)},eS=function(e){T&&e.stopPropagation()},eE=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,l=e.onClick,s=e.onDragEnter,u=e.onDragOver,p=e.onDragLeave,f=e.onDrop,d=X(e,M);return W(W(V({onKeyDown:e$(H(i,ew)),onFocus:e$(H(a,ej)),onBlur:e$(H(c,eO)),onClick:eD(H(l,eA)),onDragEnter:ek(H(s,eg)),onDragOver:ek(H(u,ev)),onDragLeave:ek(H(p,ey)),onDrop:ek(H(f,eb)),role:"string"==typeof r&&""!==r?r:"presentation"},n,er),o||$?{}:{tabIndex:0}),d)}},[er,ew,ej,eO,eA,eg,ev,ey,eb,$,k,o]),eP=(0,r.useCallback)(function(e){e.stopPropagation()},[]),eF=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,o=e.onClick,i=X(e,L);return W(W({},V({accept:q,multiple:l,type:"file",style:{display:"none"},onChange:eD(H(r,eb)),onClick:eD(H(o,eP)),tabIndex:-1},n,eo)),i)}},[eo,n,l,eb,o]);return W(W({},ea),{},{isFocused:el&&!o,getRootProps:eE,getInputProps:eF,rootRef:er,inputRef:eo,open:eD(ex)})}function Z(e,t){switch(t.type){case"focus":return W(W({},e),{},{isFocused:!0});case"blur":return W(W({},e),{},{isFocused:!1});case"openDialog":return W(W({},J),{},{isFileDialogActive:!0});case"closeDialog":return W(W({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return W(W({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return W(W({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return W({},J);default:return e}}function ee(){}},"./node_modules/tslib/tslib.es6.mjs":(e,t,n)=>{n.d(t,{C6:()=>o,Cl:()=>i,Ju:()=>s,Tt:()=>a,YH:()=>l,fX:()=>p,sH:()=>c,zs:()=>u});var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function c(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):(function(e){return e instanceof n?e:new n(function(t){t(e)})})(e.value).then(a,c)}l((r=r.apply(e,t||[])).next())})}function l(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(l){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}function s(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function p(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);