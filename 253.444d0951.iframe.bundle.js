"use strict";(self.webpackChunk_amsterdam_bmi_component_library=self.webpackChunk_amsterdam_bmi_component_library||[]).push([[253],{"./node_modules/@storybook/components/dist/OverlayScrollbars-OL4C4TVX.mjs":(t,e,r)=>{r.r(e),r.d(e,{OverlayScrollbars:()=>rT,default:()=>rB});var l=r("./node_modules/react/index.js");function n(t,e){if($(t))for(let r=0;r<t.length&&!1!==e(t[r],r,t);r++);else t&&n(Object.keys(t),r=>e(t[r],r,t));return t}function i(t,e){let r=w(e);if(m(e)||r){let l=r?"":{};if(t){let n=window.getComputedStyle(t,null);l=r?t_(t,n,e):e.reduce((e,r)=>(e[r]=t_(t,n,r),e),l)}return l}t&&n(M(e),r=>tR(t,r,e[r]))}var o,a,s=(t,e)=>{let{o:r,u:l,_:n}=t,i=r,o,a=(t,e)=>{let r=i,a=e||(l?!l(r,t):r!==t);return(a||n)&&(i=t,o=r),[i,a,o]};return[e?t=>a(e(i,o),t):a,t=>[i,!!t,o]]},d=()=>"u">typeof window,u=d()&&Node.ELEMENT_NODE,{toString:c,hasOwnProperty:f}=Object.prototype,p=t=>void 0===t,h=t=>null===t,b=t=>p(t)||h(t)?`${t}`:c.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),v=t=>"number"==typeof t,w=t=>"string"==typeof t,g=t=>"boolean"==typeof t,y=t=>"function"==typeof t,m=t=>Array.isArray(t),x=t=>"object"==typeof t&&!m(t)&&!h(t),$=t=>{let e=!!t&&t.length,r=v(e)&&e>-1&&e%1==0;return(!!m(t)||!y(t)&&!!r)&&(!(e>0&&x(t))||e-1 in t)},S=t=>{if(!t||!x(t)||"object"!==b(t))return!1;let e,r="constructor",l=t[r],n=l&&l.prototype,i=f.call(t,r),o=n&&f.call(n,"isPrototypeOf");if(l&&!i&&!o)return!1;for(e in t);return p(e)||f.call(t,e)},O=t=>{let e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===u)},C=t=>{let e=Element;return!!t&&(e?t instanceof e:t.nodeType===u)},E=(t,e,r)=>t.indexOf(e,r),L=(t,e,r)=>(!r&&!w(e)&&$(e)?Array.prototype.push.apply(t,e):t.push(e),t),k=t=>{let e=Array.from,r=[];return e&&t?e(t):(t instanceof Set?t.forEach(t=>{L(r,t)}):n(t,t=>{L(r,t)}),r)},z=t=>!!t&&0===t.length,A=(t,e,r)=>{n(t,t=>t&&t.apply(void 0,e||[])),r||(t.length=0)},I=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),M=t=>t?Object.keys(t):[],_=(t,e,r,l,i,o,a)=>{let s=[e,r,l,i,o,a];return("object"!=typeof t||h(t))&&!y(t)&&(t={}),n(s,e=>{n(M(e),r=>{let l=e[r];if(t===l)return!0;let n=m(l);if(l&&(S(l)||n)){let e=t[r],i=e;n&&!m(e)?i=[]:n||S(e)||(i={}),t[r]=_(i,l)}else t[r]=l})}),t},R=t=>{for(let e in t)return!1;return!0},P=(t,e,r,l)=>{if(p(l))return r?r[t]:e;r&&(w(l)||v(l))&&(r[t]=l)},T=(t,e,r)=>{if(p(r))return t?t.getAttribute(e):null;t&&t.setAttribute(e,r)},B=(t,e)=>{t&&t.removeAttribute(e)},H=(t,e,r,l)=>{if(r){let n=T(t,e)||"",i=new Set(n.split(" "));i[l?"add":"delete"](r),T(t,e,k(i).join(" ").trim())}},N=(t,e,r)=>{let l=T(t,e)||"";return new Set(l.split(" ")).has(r)},X=(t,e)=>P("scrollLeft",0,t,e),V=(t,e)=>P("scrollTop",0,t,e),D=d()&&Element.prototype,F=(t,e)=>{let r=[],l=e?C(e)?e:null:document;return l?L(r,l.querySelectorAll(t)):r},j=(t,e)=>{let r=e?C(e)?e:null:document;return r?r.querySelector(t):null},q=(t,e)=>!!C(t)&&(D.matches||D.msMatchesSelector).call(t,e),W=t=>t?k(t.childNodes):[],J=t=>t?t.parentElement:null,K=(t,e)=>{if(C(t)){let r=D.closest;if(r)return r.call(t,e);do{if(q(t,e))return t;t=J(t)}while(t)}return null},Y=(t,e,r)=>{let l=t&&K(t,e),n=t&&j(r,l),i=K(n,e)===l;return!!l&&!!n&&(l===t||n===t||i&&K(K(t,r),e)!==l)},Z=(t,e,r)=>{if(r&&t){let l=e,i;$(r)?(i=document.createDocumentFragment(),n(r,t=>{t===l&&(l=t.previousSibling),i.appendChild(t)})):i=r,e&&(l?l!==e&&(l=l.nextSibling):l=t.firstChild),t.insertBefore(i,l||null)}},G=(t,e)=>{Z(t,null,e)},U=(t,e)=>{Z(J(t),t,e)},Q=(t,e)=>{Z(J(t),t&&t.nextSibling,e)},tt=t=>{if($(t))n(k(t),t=>tt(t));else if(t){let e=J(t);e&&e.removeChild(t)}},te=t=>{let e=document.createElement("div");return t&&T(e,"class",t),e},tr=t=>{let e=te();return e.innerHTML=t.trim(),n(W(e),t=>tt(t))},tl=t=>t.charAt(0).toUpperCase()+t.slice(1),tn=()=>te().style,ti=["-webkit-","-moz-","-o-","-ms-"],to=["WebKit","Moz","O","MS","webkit","moz","o","ms"],ta={},ts={},td=t=>{let e=ts[t];if(I(ts,t))return e;let r=tl(t),l=tn();return n(ti,n=>{let i=n.replace(/-/g,"");return!(e=[t,n+t,i+r,tl(i)+r].find(t=>void 0!==l[t]))}),ts[t]=e||""},tu=t=>{if(d()){let e=ta[t]||window[t];return I(ta,t)||(n(to,r=>!(e=e||window[r+tl(t)])),ta[t]=e),e}},tc=tu("MutationObserver"),tf=tu("IntersectionObserver"),tp=tu("ResizeObserver"),th=tu("cancelAnimationFrame"),tb=tu("requestAnimationFrame"),tv=d()&&window.setTimeout,tw=d()&&window.clearTimeout,tg=/[^\x20\t\r\n\f]+/g,ty=(t,e,r)=>{let l=t&&t.classList,n,i=0,o=!1;if(l&&e&&w(e)){let t=e.match(tg)||[];for(o=t.length>0;n=t[i++];)o=!!r(l,n)&&o}return o},tm=(t,e)=>{ty(t,e,(t,e)=>t.remove(e))},tx=(t,e)=>(ty(t,e,(t,e)=>t.add(e)),tm.bind(0,t,e)),t$=(t,e,r,l)=>{if(t&&e){let i=!0;return n(r,r=>{(l?l(t[r]):t[r])!==(l?l(e[r]):e[r])&&(i=!1)}),i}return!1},tS=(t,e)=>t$(t,e,["w","h"]),tO=(t,e)=>t$(t,e,["x","y"]),tC=(t,e)=>t$(t,e,["t","r","b","l"]),tE=(t,e,r)=>t$(t,e,["width","height"],r&&(t=>Math.round(t))),tL=()=>{},tk=t=>{let e,r=t?tv:tb,l=t?tw:th;return[n=>{l(e),e=r(n,y(t)?t():t)},()=>l(e)]},tz=(t,e)=>{let r,l,n,i=tL,{v:o,g:a,p:s}=e||{},d=function(e){i(),tw(r),r=l=void 0,i=tL,t.apply(this,e)},u=t=>s&&l?s(l,t):t,c=()=>{i!==tL&&d(u(n)||n)},f=function(){let t=k(arguments),e=y(o)?o():o;if(v(e)&&e>=0){let o=y(a)?a():a,s=v(o)&&o>=0,f=e>0?tv:tb,p=e>0?tw:th,h=u(t)||t,b=d.bind(0,h);i();let w=f(b,e);i=()=>p(w),s&&!r&&(r=tv(c,o)),l=n=h}else d(t)};return f.m=c,f},tA={opacity:1,zindex:1},tI=(t,e)=>{let r=e?parseFloat(t):parseInt(t,10);return r==r?r:0},tM=(t,e)=>!tA[t.toLowerCase()]&&v(e)?`${e}px`:e,t_=(t,e,r)=>null!=e?e[r]||e.getPropertyValue(r):t.style[r],tR=(t,e,r)=>{try{let{style:l}=t;p(l[e])?l.setProperty(e,r):l[e]=tM(e,r)}catch{}},tP=t=>"rtl"===i(t,"direction"),tT=(t,e,r)=>{let l=e?`${e}-`:"",n=r?`-${r}`:"",o=`${l}top${n}`,a=`${l}right${n}`,s=`${l}bottom${n}`,d=`${l}left${n}`,u=i(t,[o,a,s,d]);return{t:tI(u[o],!0),r:tI(u[a],!0),b:tI(u[s],!0),l:tI(u[d],!0)}},{round:tB}=Math,tH={w:0,h:0},tN=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:tH,tX=t=>t?{w:t.clientWidth,h:t.clientHeight}:tH,tV=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:tH,tD=t=>{let e=parseFloat(i(t,"height"))||0,r=parseFloat(i(t,"width"))||0;return{w:r-tB(r),h:e-tB(e)}},tF=t=>t.getBoundingClientRect(),tj=()=>{if(p(o)){o=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){o=!0}}))}catch{}}return o},tq=t=>t.split(" "),tW=(t,e,r,l)=>{n(tq(e),e=>{t.removeEventListener(e,r,l)})},tJ=(t,e,r,l)=>{var i;let o=tj(),a=null!=(i=o&&l&&l.S)?i:o,s=l&&l.$||!1,d=l&&l.C||!1,u=[],c=o?{passive:a,capture:s}:s;return n(tq(e),e=>{let l=d?n=>{t.removeEventListener(e,l,s),r&&r(n)}:r;L(u,tW.bind(null,t,e,l,s)),t.addEventListener(e,l,c)}),A.bind(0,u)},tK=t=>t.stopPropagation(),tY=t=>t.preventDefault(),tZ={x:0,y:0},tG=t=>{let e=t?tF(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:tZ},tU=(t,e)=>{n(m(e)?e:[e],t)},tQ=t=>{let e=new Map,r=(t,r)=>{if(t){let l=e.get(t);tU(t=>{l&&l[t?"delete":"clear"](t)},r)}else e.forEach(t=>{t.clear()}),e.clear()},l=(t,i)=>{if(w(t)){let l=e.get(t)||new Set;return e.set(t,l),tU(t=>{y(t)&&l.add(t)},i),r.bind(0,t,i)}g(i)&&i&&r();let o=M(t),a=[];return n(o,e=>{let r=t[e];r&&L(a,l(e,r))}),A.bind(0,a)};return l(t||{}),[l,r,(t,r)=>{n(k(e.get(t)),t=>{r&&!z(r)?t.apply(0,r):t()})}]},t0=t=>JSON.stringify(t,(t,e)=>{if(y(e))throw Error();return e}),t1={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},t3=(t,e)=>{let r={};return n(M(e).concat(M(t)),l=>{let n=t[l],i=e[l];if(x(n)&&x(i))_(r[l]={},t3(n,i)),R(r[l])&&delete r[l];else if(I(e,l)&&i!==n){let t=!0;if(m(n)||m(i))try{t0(n)===t0(i)&&(t=!1)}catch{}t&&(r[l]=i)}}),r},t9="os-environment",t2=`${t9}-flexbox-glue`,t4=`${t2}-max`,t5="os-scrollbar-hidden",t6="data-overlayscrollbars-initialize",t7="data-overlayscrollbars",t8=`${t7}-overflow-x`,et=`${t7}-overflow-y`,ee="overflowVisible",er="scrollbarPressed",el="updating",en="data-overlayscrollbars-viewport",ei="arrange",eo="scrollbarHidden",ea="data-overlayscrollbars-padding",es="data-overlayscrollbars-content",ed="os-size-observer",eu=`${ed}-appear`,ec=`${ed}-listener`,ef="os-scrollbar",ep=`${ef}-rtl`,eh=`${ef}-horizontal`,eb=`${ef}-vertical`,ev=`${ef}-track`,ew=`${ef}-handle`,eg=`${ef}-visible`,ey=`${ef}-cornerless`,em=`${ef}-transitionless`,ex=`${ef}-interaction`,e$=`${ef}-unusable`,eS=`${ef}-auto-hidden`,eO=`${ef}-wheel`,eC=`${ev}-interactive`,eE=`${ew}-interactive`,eL={},ek=()=>eL,ez=t=>{let e=[];return n(m(t)?t:[t],t=>{n(M(t),r=>{L(e,eL[r]=t[r])})}),e},eA="__osScrollbarsHidingPlugin",eI=(t,e,r,l)=>{G(t,e);let n=tX(e),i=tN(e),o=tD(r);return l&&tt(e),{x:i.h-n.h+o.h,y:i.w-n.w+o.w}},eM=t=>{let e=!1,r=tx(t,t5);try{e="none"===i(t,td("scrollbar-width"))||"none"===window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")}catch{}return r(),e},e_=(t,e)=>{let r="hidden";i(t,{overflowX:r,overflowY:r,direction:"rtl"}),X(t,0);let l=tG(t),n=tG(e);X(t,-999);let o=tG(e);return{i:l.x===n.x,n:n.x!==o.x}},eR=(t,e)=>{let r=tx(t,t2),l=tF(t),n=tE(tF(e),l,!0),i=tx(t,t4),o=tF(t),a=tE(tF(e),o,!0);return r(),i(),n&&a},eP=()=>{let{body:t}=document,e=tr(`<div class="${t9}"><div></div></div>`)[0],r=e.firstChild,[l,,n]=tQ(),[o,a]=s({o:eI(t,e,r),u:tO},eI.bind(0,t,e,r,!0)),[d]=a(),u=eM(e),c={x:0===d.x,y:0===d.y},f={elements:{host:null,padding:!u,viewport:t=>u&&t===t.ownerDocument.body&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=_({},t1),h=_.bind(0,{},p),b=_.bind(0,{},f),v={k:d,A:c,I:u,L:"-1"===i(e,"zIndex"),B:e_(e,r),V:eR(e,r),Y:l.bind(0,"z"),j:l.bind(0,"r"),N:b,q:t=>_(f,t)&&b(),F:h,G:t=>_(p,t)&&h(),X:_({},f),U:_({},p)},w=window.addEventListener,g=tz(t=>n(t?"z":"r"),{v:33,g:99});if(B(e,"style"),tt(e),w("resize",g.bind(0,!1)),!u&&(!c.x||!c.y)){let t;w("resize",()=>{let e=ek()[eA];(t=t||e&&e.R())&&t(v,o,g.bind(0,!0))})}return v},eT=()=>(a||(a=eP()),a),eB=(t,e)=>y(e)?e.apply(0,t):e,eH=(t,e,r,l)=>eB(t,p(l)?r:l)||e.apply(0,t),eN=(t,e,r,l)=>{let n=eB(t,p(l)?r:l);return!!n&&(O(n)?n:e.apply(0,t))},eX=(t,e,r)=>{let{nativeScrollbarsOverlaid:l,body:n}=r||{},{A:i,I:o}=eT(),{nativeScrollbarsOverlaid:a,body:s}=e,d=p(n)?s:n,u=(i.x||i.y)&&(l??a),c=t&&(h(d)?!o:d);return!!u||!!c},eV=new WeakMap,eD=(t,e)=>{eV.set(t,e)},eF=t=>{eV.delete(t)},ej=t=>eV.get(t),eq=(t,e)=>t?e.split(".").reduce((t,e)=>t&&I(t,e)?t[e]:void 0,t):void 0,eW=(t,e,r)=>l=>[eq(t,l),r||void 0!==eq(e,l)],eJ=t=>{let e=t;return[()=>e,t=>{e=_({},e,t)}]},eK="tabindex",eY=te.bind(0,""),eZ=t=>{G(J(t),W(t)),tt(t)},eG=t=>{let e=eT(),{N:r,I:l}=e,n=ek()[eA],i=n&&n.T,{elements:o}=r(),{host:a,padding:s,viewport:d,content:u}=o,c=O(t),f=c?{}:t,{elements:p}=f,{host:h,padding:b,viewport:v,content:w}=p||{},g=c?t:f.target,y=q(g,"textarea"),m=g.ownerDocument,x=m.documentElement,$=g===m.body,S=m.defaultView,C=eH.bind(0,[g]),k=eN.bind(0,[g]),z=eB.bind(0,[g]),I=C.bind(0,eY,d),_=k.bind(0,eY,u),R=I(v),P=R===g,X=P&&$,V=!P&&_(w),D=!P&&O(R)&&R===V,F=D&&!!z(u),j=F?I():R,K=F?V:_(),Y=X?x:D?j:R,Z=y?C(eY,a,h):g,te=X?Y:Z,tr=m.activeElement,tl=!P&&S.top===S&&tr===g,tn={W:g,Z:te,J:Y,K:!P&&k(eY,s,b),tt:D?K:V,nt:!P&&!l&&i&&i(e),ot:X?x:Y,st:X?m:Y,et:S,ct:m,rt:y,it:$,lt:c,ut:P,dt:D,ft:(t,e)=>N(Y,P?t7:en,P?e:t),_t:(t,e,r)=>H(Y,P?t7:en,P?e:t,r)},ti=M(tn).reduce((t,e)=>{let r=tn[e];return L(t,!!r&&!J(r)&&r)},[]),to=t=>t?E(ti,t)>-1:null,{W:ta,Z:ts,K:td,J:tu,tt:tc,nt:tf}=tn,tp=[()=>{B(ts,t7),B(ts,t6),B(ta,t6),$&&(B(x,t7),B(x,t6))}],th=y&&to(ts),tb=y?ta:W([tc,tu,td,ts,ta].find(t=>!1===to(t))),tv=X?ta:tc||tu;return[tn,()=>{T(ts,t7,P?"viewport":"host"),T(td,ea,""),T(tc,es,""),P||T(tu,en,"");let t=$&&!P?tx(J(g),t5):tL;if(th&&(Q(ta,ts),L(tp,()=>{Q(ts,ta),tt(ts)})),G(tv,tb),G(ts,td),G(td||ts,!P&&tu),G(tu,tc),L(tp,()=>{t(),B(td,ea),B(tc,es),B(tu,t8),B(tu,et),B(tu,en),to(tc)&&eZ(tc),to(tu)&&eZ(tu),to(td)&&eZ(td)}),l&&!P&&(H(tu,en,eo,!0),L(tp,B.bind(0,tu,en))),tf&&(U(tu,tf),L(tp,tt.bind(0,tf))),tl){let t=T(tu,eK);T(tu,eK,"-1"),tu.focus();let e=()=>t?T(tu,eK,t):B(tu,eK),r=tJ(m,"pointerdown keydown",()=>{e(),r()});L(tp,[e,r])}else tr&&tr.focus&&tr.focus();tb=0},A.bind(0,tp)]},eU=(t,e)=>{let{tt:r}=t,[l]=e;return t=>{let{V:e}=eT(),{ht:n}=l(),{vt:o}=t,a=(r||!e)&&o;return a&&i(r,{height:n?"":"100%"}),{gt:a,wt:a}}},eQ=(t,e)=>{let[r,l]=e,{Z:n,K:o,J:a,ut:d}=t,[u,c]=s({u:tC,o:tT()},tT.bind(0,n,"padding",""));return(t,e,n)=>{let[s,f]=c(n),{I:p,V:h}=eT(),{bt:b}=r(),{gt:v,wt:w,yt:g}=t,[y,m]=e("paddingAbsolute");(v||f||!h&&w)&&([s,f]=u(n));let x=!d&&(m||g||f);if(x){let t=!y||!o&&!p,e=s.r+s.l,r=s.t+s.b,n={marginRight:t&&!b?-e:0,marginBottom:t?-r:0,marginLeft:t&&b?-e:0,top:t?-s.t:0,right:t?b?-s.r:"auto":0,left:t?b?"auto":-s.l:0,width:t?`calc(100% + ${e}px)`:""},d={paddingTop:t?s.t:0,paddingRight:t?s.r:0,paddingBottom:t?s.b:0,paddingLeft:t?s.l:0};i(o||a,n),i(a,d),l({K:s,St:!t,P:o?d:_({},n,d)})}return{xt:x}}},{max:e0}=Math,e1=e0.bind(0,0),e3="visible",e9="hidden",e2={u:tS,o:{w:0,h:0}},e4={u:tO,o:{x:e9,y:e9}},e5=(t,e)=>{let r=window.devicePixelRatio%1!=0?1:0,l={w:e1(t.w-e.w),h:e1(t.h-e.h)};return{w:l.w>r?l.w:0,h:l.h>r?l.h:0}},e6=t=>0===t.indexOf(e3),e7=(t,e)=>{let[r,l]=e,{Z:n,K:o,J:a,nt:d,ut:u,_t:c,it:f,et:p}=t,{k:h,V:b,I:v,A:w}=eT(),g=ek()[eA],y=!u&&!v&&(w.x||w.y),m=f&&u,[x,$]=s(e2,tD.bind(0,a)),[S,O]=s(e2,tV.bind(0,a)),[C,E]=s(e2),[L,k]=s(e2),[z]=s(e4),A=(t,e)=>{if(i(a,{height:""}),e){let{St:e,K:l}=r(),{$t:o,D:s}=t,d=tD(n),u=tX(n),c="content-box"===i(a,"boxSizing"),f=e||c?l.b+l.t:0,p=!(w.x&&c);i(a,{height:u.h+d.h+(o.x&&p?s.x:0)-f})}},I=(t,e)=>{let r=v||t?0:42,l=(t,l,n)=>{let o=i(a,t),s=(e?e[t]:o)==="scroll";return[o,s,s&&!v?l?r:n:0,l&&!!r]},[n,o,s,d]=l("overflowX",w.x,h.x),[u,c,f,p]=l("overflowY",w.y,h.y);return{Ct:{x:n,y:u},$t:{x:o,y:c},D:{x:s,y:f},M:{x:d,y:p}}},M=(t,e,r,l)=>{let n=(t,e)=>{let r=e6(t),l=e&&r&&t.replace(`${e3}-`,"")||"";return[e&&!r?t:"",e6(l)?"hidden":l]},[i,o]=n(r.x,e.x),[a,s]=n(r.y,e.y);return l.overflowX=o&&a?o:i,l.overflowY=s&&i?s:a,I(t,l)},_=(t,e,l,n)=>{let{D:i,M:o}=t,{x:a,y:s}=o,{x:d,y:u}=i,{P:c}=r(),f=e?"marginLeft":"marginRight",p=e?"paddingLeft":"paddingRight",h=c[f],b=c.marginBottom,v=c[p],w=c.paddingBottom;n.width=`calc(100% + ${u+-1*h}px)`,n[f]=-u+h,n.marginBottom=-d+b,l&&(n[p]=v+(s?u:0),n.paddingBottom=w+(a?d:0))},[R,P]=g?g.H(y,b,a,d,r,I,_):[()=>y,()=>[tL]];return(t,e,s)=>{let{gt:d,Ot:f,wt:h,xt:g,vt:y,yt:B}=t,{ht:N,bt:X}=r(),[V,D]=e("showNativeOverlaidScrollbars"),[F,j]=e("overflow"),q=V&&w.x&&w.y,W=!u&&!b&&(d||h||f||D||y),J=e6(F.x),K=e6(F.y),Y=J||K,Z=$(s),G=O(s),U=E(s),Q=k(s),tt;if(D&&v&&c(eo,"scrollbarHidden",!q),W&&A(tt=I(q),N),d||g||h||B||D){Y&&c(ee,ee,!1);let[t,e]=P(q,X,tt),[r,l]=Z=x(s),[n,i]=G=S(s),o=tX(a),d=n,u=o;t(),(i||l||D)&&e&&!q&&R(e,n,r,X)&&(u=tX(a),d=tV(a));let f={w:e1(e0(n.w,d.w)+r.w),h:e1(e0(n.h,d.h)+r.h)},h={w:e1((m?p.innerWidth:u.w+e1(o.w-n.w))+r.w),h:e1((m?p.innerHeight+r.h:u.h+e1(o.h-n.h))+r.h)};Q=L(h),U=C(e5(f,h),s)}let[te,tr]=Q,[tl,tn]=U,[ti,to]=G,[ta,ts]=Z,td={x:tl.w>0,y:tl.h>0},tu=J&&K&&(td.x||td.y)||J&&td.x&&!td.y||K&&td.y&&!td.x;if(g||B||ts||to||tr||tn||j||D||W){let t={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},e=M(q,td,F,t),r=R(e,ti,ta,X);u||_(e,X,r,t),W&&A(e,N),u?(T(n,t8,t.overflowX),T(n,et,t.overflowY)):i(a,t)}H(n,t7,ee,tu),H(o,ea,ee,tu),u||H(a,en,ee,Y);let[tc,tf]=z(I(q).Ct);return l({Ct:tc,zt:{x:te.w,y:te.h},Tt:{x:tl.w,y:tl.h},Et:td}),{It:tf,At:tr,Lt:tn}}},e8=(t,e,r)=>{let l={},i=e||{};return n(M(t).concat(M(i)),e=>{let n=t[e],o=i[e];l[e]=!!(r||n||o)}),l},rt=(t,e)=>{let{W:r,J:l,_t:i,ut:o}=t,{I:a,A:s,V:d}=eT(),u=!a&&(s.x||s.y),c=[eU(t,e),eQ(t,e),e7(t,e)];return(t,e,a)=>{let s=e8(_({gt:!1,xt:!1,yt:!1,vt:!1,At:!1,Lt:!1,It:!1,Ot:!1,wt:!1},e),{},a),f=u||!d,p=f&&X(l),h=f&&V(l);i("",el,!0);let b=s;return n(c,e=>{b=e8(b,e(b,t,!!a)||{},a)}),X(l,p),V(l,h),i("",el),o||(X(r,0),V(r,0)),b}},re=(t,e,r)=>{let l,i=!1,o=o=>{r&&n(r.reduce((e,r)=>{if(r){let[l,n]=r,i=n&&l&&(o?o(l):F(l,t));i&&i.length&&n&&w(n)&&L(e,[i,n.trim()],!0)}return e},[]),r=>n(r[0],n=>{let o=r[1],a=l.get(n)||[];if(t.contains(n)){let t=tJ(n,o,r=>{i?(t(),l.delete(n)):e(r)});l.set(n,L(a,t))}else A(a),l.delete(n)}))};return r&&(l=new WeakMap,o()),[()=>{i=!0},o]},rr=(t,e,r,l)=>{let i=!1,{Ht:o,Pt:a,Dt:s,Mt:d,Rt:u,kt:c}=l||{},f=tz(()=>{i&&r(!0)},{v:33,g:99}),[p,h]=re(t,f,s),b=a||[],v=(o||[]).concat(b),g=(i,o)=>{let a=u||tL,s=c||tL,f=new Set,p=new Set,v=!1,g=!1;if(n(i,r=>{let{attributeName:i,target:o,type:u,oldValue:c,addedNodes:h,removedNodes:y}=r,m="attributes"===u,x=t===o,$=m&&w(i)?T(o,i):0,S=0!==$&&c!==$,O=E(b,i)>-1&&S;if(e&&("childList"===u||!x)){let e=!m,u=m&&S,p=u&&d&&q(o,d),b=(p?!a(o,i,c,$):e||u)&&!s(r,!!p,t,l);n(h,t=>f.add(t)),n(y,t=>f.add(t)),g=g||b}!e&&x&&S&&!a(o,i,c,$)&&(p.add(i),v=v||O)}),f.size>0&&h(t=>k(f).reduce((e,r)=>(L(e,F(t,r)),q(r,t)?L(e,r):e),[])),e)return!o&&g&&r(!1),[!1];if(p.size>0||v){let t=[k(p),v];return o||r.apply(0,t),t}},y=new tc(t=>g(t));return y.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:v,subtree:e,childList:e,characterData:e}),i=!0,[()=>{i&&(p(),y.disconnect(),i=!1)},()=>{if(i){f.m();let t=y.takeRecords();return!z(t)&&g(t,!0)}}]},rl=t=>t&&(t.height||t.width),rn=(t,e,r)=>{let{Bt:l=!1,Vt:n=!1}=r||{},i=ek().__osSizeObserverPlugin,{B:o}=eT(),a=tr(`<div class="${ed}"><div class="${ec}"></div></div>`)[0],d=a.firstChild,u=tP.bind(0,t),[c]=s({o:void 0,_:!0,u:(t,e)=>!(!t||!rl(t)&&rl(e))}),f=t=>{let r=m(t)&&t.length>0&&x(t[0]),n=!r&&g(t[0]),i=!1,s=!1,d=!0;if(r){let[e,,r]=c(t.pop().contentRect),l=rl(e),n=rl(r);i=!r||!l,s=!n&&l,d=!i}else n?[,d]=t:s=!0===t;if(l&&d){let e=n?t[0]:tP(a);X(a,e?o.n?-3333333:o.i?0:3333333:3333333),V(a,3333333)}i||e({gt:!n,Yt:n?t:void 0,Vt:!!s})},p=[],h=!!n&&f;return[()=>{A(p),tt(a)},()=>{if(tp){let t=new tp(f);t.observe(d),L(p,()=>{t.disconnect()})}else if(i){let[t,e]=i.O(d,f,n);h=t,L(p,e)}if(l){let[t]=s({o:void 0},u);L(p,tJ(a,"scroll",e=>{let[r,l,n]=t();l&&(tm(d,"ltr rtl"),r?tx(d,"rtl"):tx(d,"ltr"),f([!!r,l,n])),tK(e)}))}h&&(tx(a,eu),L(p,tJ(a,"animationstart",h,{C:!!tp}))),(tp||i)&&G(t,a)}]},ri=t=>0===t.h||t.isIntersecting||t.intersectionRatio>0,ro=(t,e)=>{let r,l=te("os-trinsic-observer"),n=[],[i]=s({o:!1}),o=(t,r)=>{if(t){let l=i(ri(t)),[,n]=l;if(n)return r||e(l),[l]}},a=(t,e)=>{if(t&&t.length>0)return o(t.pop(),e)};return[()=>{A(n),tt(l)},()=>{if(tf)(r=new tf(t=>a(t),{root:t})).observe(l),L(n,()=>{r.disconnect()});else{let t=()=>{o(tN(l))},[e,r]=rn(l,t);L(n,e),r(),t()}G(t,l)},()=>{if(r)return a(r.takeRecords(),!0)}]},ra=`[${t7}]`,rs=`[${en}]`,rd=["tabindex"],ru=["wrap","cols","rows"],rc=["id","class","style","open"],rf=(t,e,r)=>{let l,i,o,{Z:a,J:d,tt:u,rt:c,ut:f,ft:p,_t:h}=t,{V:b}=eT(),[g]=s({u:tS,o:{w:0,h:0}},()=>{let t=p(ee,ee),e=p(ei,""),r=e&&X(d),l=e&&V(d);h(ee,ee),h(ei,""),h("",el,!0);let n=tV(u),i=tV(d),o=tD(d);return h(ee,ee,t),h(ei,"",e),h("",el),X(d,r),V(d,l),{w:i.w+n.w+o.w,h:i.h+n.h+o.h}}),x=c?ru:rc.concat(ru),$=tz(r,{v:()=>l,g:()=>i,p(t,e){let[r]=t,[l]=e;return[M(r).concat(M(l)).reduce((t,e)=>(t[e]=r[e]||l[e],t),{})]}}),S=t=>{n(t||rd,t=>{if(E(rd,t)>-1){let e=T(a,t);w(e)?T(d,t,e):B(d,t)}})},O=(t,l)=>{let[n,i]=t,o={vt:i};return e({ht:n}),l||r(o),o},C=({gt:t,Yt:l,Vt:n})=>{let i=!t||n?r:$,o=!1;if(l){let[t,r]=l;o=r,e({bt:t})}i({gt:t,yt:o})},k=(t,e)=>{let[,l]=g(),n={wt:l};return l&&!e&&(t?r:$)(n),n},z=(t,e,r)=>{let l={Ot:e};return e?r||$(l):f||S(t),l},[A,I,R]=u||!b?ro(a,O):[tL,tL,tL],[P,H]=f?[tL,tL]:rn(a,C,{Vt:!0,Bt:!0}),[N,D]=rr(a,!1,z,{Pt:rc,Ht:rc.concat(rd)}),F=f&&tp&&new tp(C.bind(0,{gt:!0}));return F&&F.observe(a),S(),[()=>{A(),P(),o&&o[0](),F&&F.disconnect(),N()},()=>{H(),I()},()=>{let t={},e=D(),r=R(),l=o&&o[1]();return e&&_(t,z.apply(0,L(e,!0))),r&&_(t,O.apply(0,L(r,!0))),l&&_(t,k.apply(0,L(l,!0))),t},t=>{let[e]=t("update.ignoreMutation"),[r,n]=t("update.attributes"),[a,s]=t("update.elementEvents"),[c,p]=t("update.debounce"),h=t=>y(e)&&e(t);if((s||n)&&(o&&(o[1](),o[0]()),o=rr(u||d,!0,k,{Ht:x.concat(r||[]),Dt:a,Mt:ra,kt:(t,e)=>{let{target:r,attributeName:l}=t;return!e&&!!l&&!f&&Y(r,ra,rs)||!!K(r,`.${ef}`)||!!h(t)}})),p){if($.m(),m(c)){let t=c[0],e=c[1];l=v(t)&&t,i=v(e)&&e}else l=!!v(c)&&c,i=!1}}]},rp={x:0,y:0},rh=t=>({K:{t:0,r:0,b:0,l:0},St:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:rp,Tt:rp,Ct:{x:"hidden",y:"hidden"},Et:{x:!1,y:!1},ht:!1,bt:tP(t.Z)}),rb=(t,e)=>{let r=eW(e,{}),[l,n,i]=tQ(),[o,a,s]=eG(t),d=eJ(rh(o)),[u,c]=d,f=rt(o,d),p=(t,e,r)=>{let l=M(t).some(e=>t[e])||!R(e)||r;return l&&i("u",[t,e,r]),l},[h,b,v,w]=rf(o,c,t=>p(f(r,t),{},!1)),g=u.bind(0);return g.jt=t=>l("u",t),g.Nt=()=>{let{W:t,J:e}=o,r=X(t),l=V(t);b(),a(),X(e,r),V(e,l)},g.qt=o,[(t,r)=>{let l=eW(e,t,r);return w(l),p(f(l,v(),r),t,!!r)},g,()=>{n(),h(),s()}]},{round:rv}=Math,rw=t=>{let{width:e,height:r}=tF(t),{w:l,h:n}=tN(t);return{x:rv(e)/l||1,y:rv(r)/n||1}},rg=(t,e,r)=>{let l=e.scrollbars,{button:n,isPrimary:i,pointerType:o}=t,{pointers:a}=l;return 0===n&&i&&l[r?"dragScroll":"clickScroll"]&&(a||[]).includes(o)},ry=(t,e)=>tJ(t,"mousedown",tJ.bind(0,e,"click",tK,{C:!0,$:!0}),{$:!0}),rm="pointerup pointerleave pointercancel lostpointercapture",rx=(t,e,r,l,n,i,o)=>{let{B:a}=eT(),{Ft:s,Gt:d,Xt:u}=l,c=`scroll${o?"Left":"Top"}`,f=`client${o?"X":"Y"}`,p=o?"width":"height",h=o?"left":"top",b=o?"w":"h",v=o?"x":"y",w=(t,e)=>r=>{let{Tt:l}=i(),f=e*r/(tN(d)[b]-tN(s)[b])*l[v],p=tP(u)&&o?a.n||a.i?1:-1:1;n[c]=t+f*p};return tJ(d,"pointerdown",l=>{let i=K(l.target,`.${ew}`)===s,o=i?s:d;if(H(e,t7,er,!0),rg(l,t,i)){let t=!i&&l.shiftKey,a=()=>tF(s),u=()=>tF(d),b=(t,e)=>(t||a())[h]-(e||u())[h],g=w(n[c]||0,1/rw(n)[v]),y=l[f],m=a(),x=u(),$=m[p],S=b(m,x)+$/2,O=y-x[h],C=i?0:O-S,E=t=>{A(k),o.releasePointerCapture(t.pointerId)},k=[H.bind(0,e,t7,er),tJ(r,rm,E),tJ(r,"selectstart",t=>tY(t),{S:!1}),tJ(d,rm,E),tJ(d,"pointermove",e=>{let r=e[f]-y;(i||t)&&g(C+r)})];if(t)g(C);else if(!i){let t=ek().__osClickScrollPlugin;t&&L(k,t.O(g,b,C,$,O))}o.setPointerCapture(l.pointerId)}})},r$=(t,e)=>(r,l,n,i,o,a)=>{let{Xt:s}=r,[d,u]=tk(333),c=!!o.scrollBy,f=!0;return A.bind(0,[tJ(s,"pointerenter",()=>{l(ex,!0)}),tJ(s,"pointerleave pointercancel",()=>{l(ex)}),tJ(s,"wheel",t=>{let{deltaX:e,deltaY:r,deltaMode:n}=t;c&&f&&0===n&&J(s)===i&&o.scrollBy({left:e,top:r,behavior:"smooth"}),f=!1,l(eO,!0),d(()=>{f=!0,l(eO)}),tY(t)},{S:!1,$:!0}),ry(s,n),rx(t,i,n,r,o,e,a),u])},{min:rS,max:rO,abs:rC,round:rE}=Math,rL=(t,e,r,l)=>{if(l){let t=r?"x":"y",{Tt:e,zt:n}=l,i=n[t];return rO(0,rS(1,i/(i+e[t])))}let n=r?"width":"height";return rO(0,rS(1,tF(t)[n]/tF(e)[n]))},rk=(t,e,r,l,n,i)=>{let{B:o}=eT(),a=i?"x":"y",s=i?"Left":"Top",{Tt:d}=l,u=rE(d[a]),c=rC(r[`scroll${s}`]),f=i&&n,p=o.i?c:u-c,h=rS(1,(f?p:c)/u),b=rL(t,e,i);return 1/b*(1-b)*h},rz=(t,e,r)=>{let{N:l,L:o}=eT(),{scrollbars:a}=l(),{slot:s}=a,{ct:d,W:u,Z:c,J:f,lt:p,ot:h,it:b,ut:v}=e,{scrollbars:w}=p?{}:t,{slot:y}=w||{},m=eN([u,c,f],()=>v&&b?u:c,s,y),x=(t,e,r)=>{let l=r?tx:tm;n(t,t=>{l(t.Xt,e)})},$=(t,e)=>{n(t,t=>{let[r,l]=e(t);i(r,l)})},S=(t,e,r)=>{$(t,t=>{let{Ft:l,Gt:n}=t;return[l,{[r?"width":"height"]:`${(100*rL(l,n,r,e)).toFixed(3)}%`}]})},O=(t,e,r)=>{let l=r?"X":"Y";$(t,t=>{let{Ft:n,Gt:i,Xt:o}=t,a=rk(n,i,h,e,tP(o),r);return[n,{transform:a==a?`translate${l}(${(100*a).toFixed(3)}%)`:""}]})},C=[],E=[],k=[],I=(t,e,r)=>{let l=g(r),n=!l||r,i=!l||!r;n&&x(E,t,e),i&&x(k,t,e)},M=t=>{let e=t?eh:eb,l=t?E:k,n=te(`${ef} ${e} ${z(l)?em:""}`),i=te(ev),a=te(ew),s={Xt:n,Gt:i,Ft:a};return o||tx(n,"os-no-css-vars"),G(n,i),G(i,a),L(l,s),L(C,[tt.bind(0,n),r(s,I,d,c,h,t)]),s},_=M.bind(0,!0),R=M.bind(0,!1);return _(),R(),[{Ut:t=>{S(E,t,!0),S(k,t)},Wt:t=>{O(E,t,!0),O(k,t)},Zt:I,Jt:{Kt:E,Qt:_,tn:$.bind(0,E)},nn:{Kt:k,Qt:R,tn:$.bind(0,k)}},()=>{G(m,E[0].Xt),G(m,k[0].Xt),tv(()=>{I(em)},300)},A.bind(0,C)]},rA=(t,e,r,l)=>{let n,i,o,a,s,d=0,[u]=eJ({}),[c,f]=tk(),[p,h]=tk(),[b,v]=tk(100),[w,g]=tk(100),[y,m]=tk(()=>d),[x,$,S]=rz(t,r.qt,r$(e,r)),{Z:O,J:C,ot:E,st:L,ut:k,it:z}=r.qt,{Jt:I,nn:M,Zt:_,Ut:R,Wt:P}=x,{tn:T}=I,{tn:B}=M,H=t=>{let{Xt:e}=t,r=k&&!z&&J(e)===C&&e;return[r,{transform:r?`translate(${X(E)}px, ${V(E)}px)`:""}]},N=(t,e)=>{if(m(),t)_(eS);else{let t=()=>_(eS,!0);d>0&&!e?y(t):t()}},D=()=>{(a=i)&&N(!0)},F=[v,m,g,h,f,S,tJ(O,"pointerover",D,{C:!0}),tJ(O,"pointerenter",D),tJ(O,"pointerleave",()=>{a=!1,i&&N(!1)}),tJ(O,"pointermove",()=>{n&&c(()=>{v(),N(!0),w(()=>{n&&N(!1)})})}),tJ(L,"scroll",t=>{p(()=>{P(r()),o&&N(!0),b(()=>{o&&!a&&N(!1)})}),l(t),k&&T(H),k&&B(H)})],j=u.bind(0);return j.qt=x,j.Nt=$,[(t,l,a)=>{let{At:u,Lt:c,It:f,yt:p}=a,{A:h}=eT(),b=eW(e,t,l),v=r(),{Tt:w,Ct:g,bt:y}=v,[m,x]=b("showNativeOverlaidScrollbars"),[$,S]=b("scrollbars.theme"),[O,C]=b("scrollbars.visibility"),[E,L]=b("scrollbars.autoHide"),[k]=b("scrollbars.autoHideDelay"),[A,I]=b("scrollbars.dragScroll"),[M,T]=b("scrollbars.clickScroll"),B=m&&h.x&&h.y,H=(t,e)=>{let r="visible"===O||"auto"===O&&"scroll"===t;return _(eg,r,e),r};if(d=k,x&&_("os-theme-none",B),S&&(_(s),_($,!0),s=$),L&&(n="move"===E,i="leave"===E,N(!(o="never"!==E),!0)),I&&_(eE,A),T&&_(eC,M),f||C){let t=H(g.x,!0),e=H(g.y,!1);_(ey,!(t&&e))}(u||c||p)&&(R(v),P(v),_(e$,!w.x,!0),_(e$,!w.y,!1),_(ep,y&&!z))},j,A.bind(0,F)]},rI=(t,e,r)=>{y(t)&&t(e||void 0,r||void 0)},rM=(t,e,r)=>{let{F:l,N:i,Y:o,j:a}=eT(),s=ek(),d=O(t),u=d?t:t.target,c=ej(u);if(e&&!c){let c=!1,f=t=>{let e=ek().__osOptionsValidationPlugin,r=e&&e.O;return r?r(t,!0):t},p=_({},l(),f(e)),[h,b,v]=tQ(r),[w,g,y]=rb(t,p),[m,x,$]=rA(t,p,g,t=>v("scroll",[k,t])),S=(t,e)=>w(t,!!e),O=S.bind(0,{},!0),C=o(O),E=a(O),L=t=>{eF(u),C(),E(),$(),y(),c=!0,v("destroyed",[k,!!t]),b()},k={options(t,e){if(t){let r=t3(p,_(e?l():{},f(t)));R(r)||(_(p,r),S(r))}return _({},p)},on:h,off:(t,e)=>{t&&e&&b(t,e)},state(){let{zt:t,Tt:e,Ct:r,Et:l,K:n,St:i,bt:o}=g();return _({},{overflowEdge:t,overflowAmount:e,overflowStyle:r,hasOverflow:l,padding:n,paddingAbsolute:i,directionRTL:o,destroyed:c})},elements(){let{W:t,Z:e,K:r,J:l,tt:n,ot:i,st:o}=g.qt,{Jt:a,nn:s}=x.qt,d=t=>{let{Ft:e,Gt:r,Xt:l}=t;return{scrollbar:l,track:r,handle:e}},u=t=>{let{Kt:e,Qt:r}=t;return _({},d(e[0]),{clone:()=>{let t=d(r());return m({},!0,{}),t}})};return _({},{target:t,host:e,padding:r||l,viewport:l,content:n||l,scrollOffsetElement:i,scrollEventElement:o,scrollbarHorizontal:u(a),scrollbarVertical:u(s)})},update:t=>S({},t),destroy:L.bind(0)};return g.jt((t,e,r)=>{m(e,r,t)}),eD(u,k),n(M(s),t=>rI(s[t],0,k)),eX(g.qt.it,i().cancel,!d&&t.cancel)?L(!0):(g.Nt(),x.Nt(),v("initialized",[k]),g.jt((t,e,r)=>{let{gt:l,yt:n,vt:i,At:o,Lt:a,It:s,wt:d,Ot:u}=t;v("updated",[k,{updateHints:{sizeChanged:l,directionChanged:n,heightIntrinsicChanged:i,overflowEdgeChanged:o,overflowAmountChanged:a,overflowStyleChanged:s,contentMutation:d,hostMutation:u},changedOptions:e,force:r}])}),k.update(!0)),k}return c};rM.plugin=t=>{n(ez(t),t=>rI(t,rM))},rM.valid=t=>{let e=t&&t.elements,r=y(e)&&e();return S(r)&&!!ej(r.target)},rM.env=()=>{let{k:t,A:e,I:r,B:l,V:n,L:i,X:o,U:a,N:s,q:d,F:u,G:c}=eT();return _({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:r,rtlScrollBehavior:l,flexboxGlue:n,cssCustomProperties:i,staticDefaultInitialization:o,staticDefaultOptions:a,getDefaultInitialization:s,setDefaultInitialization:d,getDefaultOptions:u,setDefaultOptions:c})};var r_=()=>{if(typeof window>"u"){let t=()=>{};return[t,t]}let t,e,r=window,l="function"==typeof r.requestIdleCallback,n=r.requestAnimationFrame,i=r.cancelAnimationFrame,o=l?r.requestIdleCallback:n,a=l?r.cancelIdleCallback:i,s=()=>{a(t),i(e)};return[(r,i)=>{s(),t=o(l?()=>{s(),e=n(r)}:r,"object"==typeof i?i:{timeout:2233})},s]},rR=t=>{let{options:e,events:r,defer:n}=t||{},[i,o]=(0,l.useMemo)(r_,[]),a=(0,l.useRef)(null),s=(0,l.useRef)(n),d=(0,l.useRef)(e),u=(0,l.useRef)(r);return(0,l.useEffect)(()=>{s.current=n},[n]),(0,l.useEffect)(()=>{let{current:t}=a;d.current=e,rM.valid(t)&&t.options(e||{},!0)},[e]),(0,l.useEffect)(()=>{let{current:t}=a;u.current=r,rM.valid(t)&&t.on(r||{},!0)},[r]),(0,l.useEffect)(()=>()=>{var t;o(),null==(t=a.current)||t.destroy()},[]),(0,l.useMemo)(()=>[t=>{let e=a.current;if(rM.valid(e))return;let r=s.current,l=d.current||{},n=u.current||{},o=()=>a.current=rM(t,l,n);r?i(o,r):o()},()=>a.current],[])},rP=(0,l.forwardRef)((t,e)=>{let{element:r="div",options:n,events:i,defer:o,children:a,...s}=t,d=(0,l.useRef)(null),u=(0,l.useRef)(null),[c,f]=rR({options:n,events:i,defer:o});return(0,l.useEffect)(()=>{let{current:t}=d,{current:e}=u;return t&&e&&c({target:t,elements:{viewport:e,content:e}}),()=>{var t;return null==(t=f())?void 0:t.destroy()}},[c,r]),(0,l.useImperativeHandle)(e,()=>({osInstance:f,getElement:()=>d.current}),[]),l.createElement(r,{"data-overlayscrollbars-initialize":"",ref:d,...s},l.createElement("div",{ref:u},a))}),rT=rP,rB=rP}}]);