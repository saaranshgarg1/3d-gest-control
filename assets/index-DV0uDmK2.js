(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ry(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ah={exports:{}},pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function sy(){if(bg)return pl;bg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var p=null;if(f!==void 0&&(p=""+f),l.key!==void 0&&(p=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:p,ref:l!==void 0?l:null,props:f}}return pl.Fragment=e,pl.jsx=i,pl.jsxs=i,pl}var Ag;function oy(){return Ag||(Ag=1,Ah.exports=sy()),Ah.exports}var Ln=oy(),Rh={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function ly(){if(Rg)return be;Rg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),E=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=E&&N[E]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,C={};function x(N,nt,gt){this.props=N,this.context=nt,this.refs=C,this.updater=gt||b}x.prototype.isReactComponent={},x.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=x.prototype;function H(N,nt,gt){this.props=N,this.context=nt,this.refs=C,this.updater=gt||b}var O=H.prototype=new _;O.constructor=H,R(O,x.prototype),O.isPureReactComponent=!0;var B=Array.isArray,Z={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function X(N,nt,gt,tt,at,Tt){return gt=Tt.ref,{$$typeof:o,type:N,key:nt,ref:gt!==void 0?gt:null,props:Tt}}function xt(N,nt){return X(N.type,nt,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function A(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(gt){return nt[gt]})}var k=/\/+/g;function ot(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?A(""+N.key):nt.toString(36)}function _t(){}function j(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(_t,_t):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function rt(N,nt,gt,tt,at){var Tt=typeof N;(Tt==="undefined"||Tt==="boolean")&&(N=null);var Ut=!1;if(N===null)Ut=!0;else switch(Tt){case"bigint":case"string":case"number":Ut=!0;break;case"object":switch(N.$$typeof){case o:case e:Ut=!0;break;case S:return Ut=N._init,rt(Ut(N._payload),nt,gt,tt,at)}}if(Ut)return at=at(N),Ut=tt===""?"."+ot(N,0):tt,B(at)?(gt="",Ut!=null&&(gt=Ut.replace(k,"$&/")+"/"),rt(at,nt,gt,"",function(Kt){return Kt})):at!=null&&(U(at)&&(at=xt(at,gt+(at.key==null||N&&N.key===at.key?"":(""+at.key).replace(k,"$&/")+"/")+Ut)),nt.push(at)),1;Ut=0;var Vt=tt===""?".":tt+":";if(B(N))for(var It=0;It<N.length;It++)tt=N[It],Tt=Vt+ot(tt,It),Ut+=rt(tt,nt,gt,Tt,at);else if(It=M(N),typeof It=="function")for(N=It.call(N),It=0;!(tt=N.next()).done;)tt=tt.value,Tt=Vt+ot(tt,It++),Ut+=rt(tt,nt,gt,Tt,at);else if(Tt==="object"){if(typeof N.then=="function")return rt(j(N),nt,gt,tt,at);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return Ut}function I(N,nt,gt){if(N==null)return N;var tt=[],at=0;return rt(N,tt,"","",function(Tt){return nt.call(gt,Tt,at++)}),tt}function J(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(gt){(N._status===0||N._status===-1)&&(N._status=1,N._result=gt)},function(gt){(N._status===0||N._status===-1)&&(N._status=2,N._result=gt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var $=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function ut(){}return be.Children={map:I,forEach:function(N,nt,gt){I(N,function(){nt.apply(this,arguments)},gt)},count:function(N){var nt=0;return I(N,function(){nt++}),nt},toArray:function(N){return I(N,function(nt){return nt})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},be.Component=x,be.Fragment=i,be.Profiler=l,be.PureComponent=H,be.StrictMode=r,be.Suspense=g,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,be.act=function(){throw Error("act(...) is not supported in production builds of React.")},be.cache=function(N){return function(){return N.apply(null,arguments)}},be.cloneElement=function(N,nt,gt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var tt=R({},N.props),at=N.key,Tt=void 0;if(nt!=null)for(Ut in nt.ref!==void 0&&(Tt=void 0),nt.key!==void 0&&(at=""+nt.key),nt)!q.call(nt,Ut)||Ut==="key"||Ut==="__self"||Ut==="__source"||Ut==="ref"&&nt.ref===void 0||(tt[Ut]=nt[Ut]);var Ut=arguments.length-2;if(Ut===1)tt.children=gt;else if(1<Ut){for(var Vt=Array(Ut),It=0;It<Ut;It++)Vt[It]=arguments[It+2];tt.children=Vt}return X(N.type,at,void 0,void 0,Tt,tt)},be.createContext=function(N){return N={$$typeof:p,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:f,_context:N},N},be.createElement=function(N,nt,gt){var tt,at={},Tt=null;if(nt!=null)for(tt in nt.key!==void 0&&(Tt=""+nt.key),nt)q.call(nt,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(at[tt]=nt[tt]);var Ut=arguments.length-2;if(Ut===1)at.children=gt;else if(1<Ut){for(var Vt=Array(Ut),It=0;It<Ut;It++)Vt[It]=arguments[It+2];at.children=Vt}if(N&&N.defaultProps)for(tt in Ut=N.defaultProps,Ut)at[tt]===void 0&&(at[tt]=Ut[tt]);return X(N,Tt,void 0,void 0,null,at)},be.createRef=function(){return{current:null}},be.forwardRef=function(N){return{$$typeof:d,render:N}},be.isValidElement=U,be.lazy=function(N){return{$$typeof:S,_payload:{_status:-1,_result:N},_init:J}},be.memo=function(N,nt){return{$$typeof:v,type:N,compare:nt===void 0?null:nt}},be.startTransition=function(N){var nt=Z.T,gt={};Z.T=gt;try{var tt=N(),at=Z.S;at!==null&&at(gt,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(ut,$)}catch(Tt){$(Tt)}finally{Z.T=nt}},be.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},be.use=function(N){return Z.H.use(N)},be.useActionState=function(N,nt,gt){return Z.H.useActionState(N,nt,gt)},be.useCallback=function(N,nt){return Z.H.useCallback(N,nt)},be.useContext=function(N){return Z.H.useContext(N)},be.useDebugValue=function(){},be.useDeferredValue=function(N,nt){return Z.H.useDeferredValue(N,nt)},be.useEffect=function(N,nt){return Z.H.useEffect(N,nt)},be.useId=function(){return Z.H.useId()},be.useImperativeHandle=function(N,nt,gt){return Z.H.useImperativeHandle(N,nt,gt)},be.useInsertionEffect=function(N,nt){return Z.H.useInsertionEffect(N,nt)},be.useLayoutEffect=function(N,nt){return Z.H.useLayoutEffect(N,nt)},be.useMemo=function(N,nt){return Z.H.useMemo(N,nt)},be.useOptimistic=function(N,nt){return Z.H.useOptimistic(N,nt)},be.useReducer=function(N,nt,gt){return Z.H.useReducer(N,nt,gt)},be.useRef=function(N){return Z.H.useRef(N)},be.useState=function(N){return Z.H.useState(N)},be.useSyncExternalStore=function(N,nt,gt){return Z.H.useSyncExternalStore(N,nt,gt)},be.useTransition=function(){return Z.H.useTransition()},be.version="19.0.0",be}var wg;function gc(){return wg||(wg=1,Rh.exports=ly()),Rh.exports}var Dn=gc(),wh={exports:{}},ml={},Ch={exports:{}},Uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function uy(){return Cg||(Cg=1,function(o){function e(I,J){var $=I.length;I.push(J);t:for(;0<$;){var ut=$-1>>>1,N=I[ut];if(0<l(N,J))I[ut]=J,I[$]=N,$=ut;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var J=I[0],$=I.pop();if($!==J){I[0]=$;t:for(var ut=0,N=I.length,nt=N>>>1;ut<nt;){var gt=2*(ut+1)-1,tt=I[gt],at=gt+1,Tt=I[at];if(0>l(tt,$))at<N&&0>l(Tt,tt)?(I[ut]=Tt,I[at]=$,ut=at):(I[ut]=tt,I[gt]=$,ut=gt);else if(at<N&&0>l(Tt,$))I[ut]=Tt,I[at]=$,ut=at;else break t}}return J}function l(I,J){var $=I.sortIndex-J.sortIndex;return $!==0?$:I.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var p=Date,d=p.now();o.unstable_now=function(){return p.now()-d}}var g=[],v=[],S=1,E=null,M=3,b=!1,R=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function O(I){for(var J=i(v);J!==null;){if(J.callback===null)r(v);else if(J.startTime<=I)r(v),J.sortIndex=J.expirationTime,e(g,J);else break;J=i(v)}}function B(I){if(C=!1,O(I),!R)if(i(g)!==null)R=!0,j();else{var J=i(v);J!==null&&rt(B,J.startTime-I)}}var Z=!1,q=-1,X=5,xt=-1;function U(){return!(o.unstable_now()-xt<X)}function A(){if(Z){var I=o.unstable_now();xt=I;var J=!0;try{t:{R=!1,C&&(C=!1,_(q),q=-1),b=!0;var $=M;try{e:{for(O(I),E=i(g);E!==null&&!(E.expirationTime>I&&U());){var ut=E.callback;if(typeof ut=="function"){E.callback=null,M=E.priorityLevel;var N=ut(E.expirationTime<=I);if(I=o.unstable_now(),typeof N=="function"){E.callback=N,O(I),J=!0;break e}E===i(g)&&r(g),O(I)}else r(g);E=i(g)}if(E!==null)J=!0;else{var nt=i(v);nt!==null&&rt(B,nt.startTime-I),J=!1}}break t}finally{E=null,M=$,b=!1}J=void 0}}finally{J?k():Z=!1}}}var k;if(typeof H=="function")k=function(){H(A)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,_t=ot.port2;ot.port1.onmessage=A,k=function(){_t.postMessage(null)}}else k=function(){x(A,0)};function j(){Z||(Z=!0,k())}function rt(I,J){q=x(function(){I(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_continueExecution=function(){R||b||(R=!0,j())},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_getFirstCallbackNode=function(){return i(g)},o.unstable_next=function(I){switch(M){case 1:case 2:case 3:var J=3;break;default:J=M}var $=M;M=J;try{return I()}finally{M=$}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(I,J){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=M;M=I;try{return J()}finally{M=$}},o.unstable_scheduleCallback=function(I,J,$){var ut=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ut+$:ut):$=ut,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=$+N,I={id:S++,callback:J,priorityLevel:I,startTime:$,expirationTime:N,sortIndex:-1},$>ut?(I.sortIndex=$,e(v,I),i(g)===null&&I===i(v)&&(C?(_(q),q=-1):C=!0,rt(B,$-ut))):(I.sortIndex=N,e(g,I),R||b||(R=!0,j())),I},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(I){var J=M;return function(){var $=M;M=J;try{return I.apply(this,arguments)}finally{M=$}}}}(Uh)),Uh}var Ug;function cy(){return Ug||(Ug=1,Ch.exports=uy()),Ch.exports}var Lh={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function fy(){if(Lg)return Kn;Lg=1;var o=gc();function e(g){var v="https://react.dev/errors/"+g;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)v+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+g+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function f(g,v,S){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:""+E,children:g,containerInfo:v,implementation:S}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(g,v){if(g==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Kn.createPortal=function(g,v){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(e(299));return f(g,v,null,S)},Kn.flushSync=function(g){var v=p.T,S=r.p;try{if(p.T=null,r.p=2,g)return g()}finally{p.T=v,r.p=S,r.d.f()}},Kn.preconnect=function(g,v){typeof g=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,r.d.C(g,v))},Kn.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},Kn.preinit=function(g,v){if(typeof g=="string"&&v&&typeof v.as=="string"){var S=v.as,E=d(S,v.crossOrigin),M=typeof v.integrity=="string"?v.integrity:void 0,b=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;S==="style"?r.d.S(g,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:E,integrity:M,fetchPriority:b}):S==="script"&&r.d.X(g,{crossOrigin:E,integrity:M,fetchPriority:b,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Kn.preinitModule=function(g,v){if(typeof g=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var S=d(v.as,v.crossOrigin);r.d.M(g,{crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&r.d.M(g)},Kn.preload=function(g,v){if(typeof g=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var S=v.as,E=d(S,v.crossOrigin);r.d.L(g,S,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Kn.preloadModule=function(g,v){if(typeof g=="string")if(v){var S=d(v.as,v.crossOrigin);r.d.m(g,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else r.d.m(g)},Kn.requestFormReset=function(g){r.d.r(g)},Kn.unstable_batchedUpdates=function(g,v){return g(v)},Kn.useFormState=function(g,v,S){return p.H.useFormState(g,v,S)},Kn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Kn.version="19.0.0",Kn}var Dg;function hy(){if(Dg)return Lh.exports;Dg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Lh.exports=fy(),Lh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function dy(){if(Ng)return ml;Ng=1;var o=cy(),e=gc(),i=hy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),p=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),b=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),B=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var X=Symbol.for("react.client.reference");function xt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===X?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case g:return"Fragment";case d:return"Portal";case S:return"Profiler";case v:return"StrictMode";case C:return"Suspense";case x:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b:return(t.displayName||"Context")+".Provider";case M:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:xt(t.type)||"Memo";case H:n=t._payload,t=t._init;try{return xt(t(n))}catch{}}return null}var U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,k,ot;function _t(t){if(k===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);k=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+t+ot}var j=!1;function rt(t,n){if(!t||j)return"";j=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(St){var dt=St}Reflect.construct(t,[],Rt)}else{try{Rt.call()}catch(St){dt=St}t.call(Rt.prototype)}}else{try{throw Error()}catch(St){dt=St}(Rt=t())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(St){if(St&&dt&&typeof St.stack=="string")return[St.stack,dt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),T=h[0],L=h[1];if(T&&L){var W=T.split(`
`),et=L.split(`
`);for(u=s=0;s<W.length&&!W[s].includes("DetermineComponentFrameRoot");)s++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(s===W.length||u===et.length)for(s=W.length-1,u=et.length-1;1<=s&&0<=u&&W[s]!==et[u];)u--;for(;1<=s&&0<=u;s--,u--)if(W[s]!==et[u]){if(s!==1||u!==1)do if(s--,u--,0>u||W[s]!==et[u]){var Mt=`
`+W[s].replace(" at new "," at ");return t.displayName&&Mt.includes("<anonymous>")&&(Mt=Mt.replace("<anonymous>",t.displayName)),Mt}while(1<=s&&0<=u);break}}}finally{j=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function I(t){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return _t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return t=rt(t.type,!1),t;case 11:return t=rt(t.type.render,!1),t;case 1:return t=rt(t.type,!0),t;default:return""}}function J(t){try{var n="";do n+=I(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function ut(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function N(t){if($(t)!==t)throw Error(r(188))}function nt(t){var n=t.alternate;if(!n){if(n=$(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return N(u),t;if(h===s)return N(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=h;else{for(var T=!1,L=u.child;L;){if(L===a){T=!0,a=u,s=h;break}if(L===s){T=!0,s=u,a=h;break}L=L.sibling}if(!T){for(L=h.child;L;){if(L===a){T=!0,a=h,s=u;break}if(L===s){T=!0,s=h,a=u;break}L=L.sibling}if(!T)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function gt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=gt(t),n!==null)return n;t=t.sibling}return null}var tt=Array.isArray,at=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Tt={pending:!1,data:null,method:null,action:null},Ut=[],Vt=-1;function It(t){return{current:t}}function Kt(t){0>Vt||(t.current=Ut[Vt],Ut[Vt]=null,Vt--)}function Ht(t,n){Vt++,Ut[Vt]=t.current,t.current=n}var ce=It(null),ft=It(null),Se=It(null),Wt=It(null);function fe(t,n){switch(Ht(Se,n),Ht(ft,t),Ht(ce,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?tg(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=tg(t),n=eg(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Kt(ce),Ht(ce,n)}function Zt(){Kt(ce),Kt(ft),Kt(Se)}function We(t){t.memoizedState!==null&&Ht(Wt,t);var n=ce.current,a=eg(n,t.type);n!==a&&(Ht(ft,t),Ht(ce,a))}function ge(t){ft.current===t&&(Kt(ce),Kt(ft)),Wt.current===t&&(Kt(Wt),ul._currentValue=Tt)}var z=Object.prototype.hasOwnProperty,D=o.unstable_scheduleCallback,mt=o.unstable_cancelCallback,Lt=o.unstable_shouldYield,Ct=o.unstable_requestPaint,bt=o.unstable_now,te=o.unstable_getCurrentPriorityLevel,Bt=o.unstable_ImmediatePriority,qt=o.unstable_UserBlockingPriority,re=o.unstable_NormalPriority,xe=o.unstable_LowPriority,wt=o.unstable_IdlePriority,ze=o.log,Ee=o.unstable_setDisableYieldValue,ae=null,Xt=null;function Yt(t){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(ae,t,void 0,(t.current.flags&128)===128)}catch{}}function le(t){if(typeof ze=="function"&&Ee(t),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(ae,t)}catch{}}var ve=Math.clz32?Math.clz32:Dt,je=Math.log,pe=Math.LN2;function Dt(t){return t>>>=0,t===0?32:31-(je(t)/pe|0)|0}var Y=128,zt=4194304;function Ot(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function se(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,u=t.suspendedLanes,h=t.pingedLanes,T=t.warmLanes;t=t.finishedLanes!==0;var L=a&134217727;return L!==0?(a=L&~u,a!==0?s=Ot(a):(h&=L,h!==0?s=Ot(h):t||(T=L&~T,T!==0&&(s=Ot(T))))):(L=a&~u,L!==0?s=Ot(L):h!==0?s=Ot(h):t||(T=a&~T,T!==0&&(s=Ot(T)))),s===0?0:n!==0&&n!==s&&(n&u)===0&&(u=s&-s,T=n&-n,u>=T||u===32&&(T&4194176)!==0)?n:s}function Jt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Be(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var t=Y;return Y<<=1,(Y&4194176)===0&&(Y=128),t}function $e(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function on(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Oe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ln(t,n,a,s,u,h){var T=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var L=t.entanglements,W=t.expirationTimes,et=t.hiddenUpdates;for(a=T&~a;0<a;){var Mt=31-ve(a),Rt=1<<Mt;L[Mt]=0,W[Mt]=-1;var dt=et[Mt];if(dt!==null)for(et[Mt]=null,Mt=0;Mt<dt.length;Mt++){var St=dt[Mt];St!==null&&(St.lane&=-536870913)}a&=~Rt}s!==0&&ti(t,s,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(T&~n))}function ti(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-ve(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function ei(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-ve(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Ti(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $i(){var t=at.p;return t!==0?t:(t=window.event,t===void 0?32:yg(t.type))}function tn(t,n){var a=at.p;try{return at.p=t,n()}finally{at.p=a}}var un=Math.random().toString(36).slice(2),fn="__reactFiber$"+un,An="__reactProps$"+un,pi="__reactContainer$"+un,ua="__reactEvents$"+un,Ia="__reactListeners$"+un,P="__reactHandles$"+un,st="__reactResources$"+un,ht="__reactMarker$"+un;function vt(t){delete t[fn],delete t[An],delete t[ua],delete t[Ia],delete t[P]}function ct(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[pi]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=ag(t);t!==null;){if(a=t[fn])return a;t=ag(t)}return n}t=a,a=t.parentNode}return null}function Nt(t){if(t=t[fn]||t[pi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function $t(t){var n=t[st];return n||(n=t[st]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function jt(t){t[ht]=!0}var _e=new Set,me={};function oe(t,n){Re(t,n),Re(t+"Capture",n)}function Re(t,n){for(me[t]=n,t=0;t<n.length;t++)_e.add(n[t])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hn={},Ge={};function Te(t){return z.call(Ge,t)?!0:z.call(hn,t)?!1:rn.test(t)?Ge[t]=!0:(hn[t]=!0,!1)}function Hi(t,n,a){if(Te(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ve(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Rn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Vn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gi(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ha(t){var n=Gi(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(T){s=""+T,h.call(this,T)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(T){s=""+T},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function cn(t){t._valueTracker||(t._valueTracker=Ha(t))}function mi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Gi(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function dn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var kn=/[\n"\\]/g;function wn(t){return t.replace(kn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ta(t,n,a,s,u,h,T,L){t.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.type=T:t.removeAttribute("type"),n!=null?T==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Vn(n)):t.value!==""+Vn(n)&&(t.value=""+Vn(n)):T!=="submit"&&T!=="reset"||t.removeAttribute("value"),n!=null?ls(t,T,Vn(n)):a!=null?ls(t,T,Vn(a)):s!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?t.name=""+Vn(L):t.removeAttribute("name")}function Ga(t,n,a,s,u,h,T,L){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+Vn(a):"",n=n!=null?""+Vn(n):a,L||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=L?t.checked:!!s,t.defaultChecked=!!s,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(t.name=T)}function ls(t,n,a){n==="number"&&dn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Va(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Vn(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Al(t,n,a){if(n!=null&&(n=""+Vn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Vn(a):""}function xo(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(tt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Vn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function ca(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var us=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mo(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||us.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Eo(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Mo(t,u,s)}else for(var h in n)n.hasOwnProperty(h)&&Mo(t,h,n[h])}function fa(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cs(t){return Mc.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var To=null;function Tr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bi=null,ka=null;function Rl(t){var n=Nt(t);if(n&&(t=n.stateNode)){var a=t[An]||null;t:switch(t=n.stateNode,n.type){case"input":if(ta(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[An]||null;if(!u)throw Error(r(90));ta(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&mi(s)}break t;case"textarea":Al(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Va(t,!!a.multiple,n,!1)}}}var bo=!1;function wl(t,n,a){if(bo)return t(n,a);bo=!0;try{var s=t(n);return s}finally{if(bo=!1,(bi!==null||ka!==null)&&(_u(),bi&&(n=bi,t=ka,ka=bi=null,Rl(n),t)))for(n=0;n<t.length;n++)Rl(t[n])}}function ha(t,n){var a=t.stateNode;if(a===null)return null;var s=a[An]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var fs=!1;if(en)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){fs=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{fs=!1}var li=null,ni=null,hs=null;function Cl(){if(hs)return hs;var t,n=ni,a=n.length,s,u="value"in li?li.value:li.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var T=a-t;for(s=1;s<=T&&n[a-s]===u[h-s];s++);return hs=u.slice(t,1<s?1-s:void 0)}function br(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ar(){return!0}function ds(){return!1}function zn(t){function n(a,s,u,h,T){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=h,this.target=T,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(a=t[L],this[L]=a?a(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ar:ds,this.isPropagationStopped=ds,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),n}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rr=zn(ui),da=A({},ui,{view:0,detail:0}),Ec=zn(da),ps,ea,Xa,wr=A({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xa&&(Xa&&t.type==="mousemove"?(ps=t.screenX-Xa.screenX,ea=t.screenY-Xa.screenY):ea=ps=0,Xa=t),ps)},movementY:function(t){return"movementY"in t?t.movementY:ea}}),Ul=zn(wr),Ll=A({},wr,{dataTransfer:0}),ms=zn(Ll),Dl=A({},da,{relatedTarget:0}),Ao=zn(Dl),Nl=A({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),Ol=zn(Nl),Pl=A({},ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zl=zn(Pl),Ro=A({},ui,{data:0}),wo=zn(Ro),Tc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ac={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rc(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ac[t])?!!n[t]:!1}function gs(){return Rc}var wc=A({},da,{key:function(t){if(t.key){var n=Tc[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=br(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bc[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(t){return t.type==="keypress"?br(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?br(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cc=zn(wc),Co=A({},wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bl=zn(Co),Uc=A({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),Lc=zn(Uc),vs=A({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dc=zn(vs),Nc=A({},wr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Oc=zn(Nc),Fl=A({},ui,{newState:0,oldState:0}),Il=zn(Fl),c=[9,13,27,32],m=en&&"CompositionEvent"in window,y=null;en&&"documentMode"in document&&(y=document.documentMode);var w=en&&"TextEvent"in window&&!y,F=en&&(!m||y&&8<y&&11>=y),V=" ",G=!1;function K(t,n){switch(t){case"keyup":return c.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pt(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var At=!1;function Pt(t,n){switch(t){case"compositionend":return pt(n);case"keypress":return n.which!==32?null:(G=!0,V);case"textInput":return t=n.data,t===V&&G?null:t;default:return null}}function he(t,n){if(At)return t==="compositionend"||!m&&K(t,n)?(t=Cl(),hs=ni=li=null,At=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return F&&n.locale!=="ko"?null:n.data;default:return null}}var ee={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gt(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ee[t.type]:n==="textarea"}function ue(t,n,a,s){bi?ka?ka.push(s):ka=[s]:bi=s,n=Eu(n,"onChange"),0<n.length&&(a=new Rr("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var ye=null,ke=null;function Ye(t){Zm(t,0)}function gn(t){var n=kt(t);if(mi(n))return t}function ii(t,n){if(t==="change")return n}var Wn=!1;if(en){var De;if(en){var Sn="oninput"in document;if(!Sn){var Vi=document.createElement("div");Vi.setAttribute("oninput","return;"),Sn=typeof Vi.oninput=="function"}De=Sn}else De=!1;Wn=De&&(!document.documentMode||9<document.documentMode)}function Hl(){ye&&(ye.detachEvent("onpropertychange",Gl),ke=ye=null)}function Gl(t){if(t.propertyName==="value"&&gn(ke)){var n=[];ue(n,ke,t,Tr(t)),wl(Ye,n)}}function Pc(t,n,a){t==="focusin"?(Hl(),ye=n,ke=a,ye.attachEvent("onpropertychange",Gl)):t==="focusout"&&Hl()}function zc(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gn(ke)}function Bc(t,n){if(t==="click")return gn(n)}function _s(t,n){if(t==="input"||t==="change")return gn(n)}function I_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var gi=typeof Object.is=="function"?Object.is:I_;function Uo(t,n){if(gi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!z.call(n,u)||!gi(t[u],n[u]))return!1}return!0}function Cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ud(t,n){var a=Cd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cd(a)}}function Ld(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ld(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Dd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=dn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=dn(t.document)}return n}function Fc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function H_(t,n){var a=Dd(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&Ld(n.ownerDocument.documentElement,n)){if(s!==null&&Fc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var u=n.textContent.length,h=Math.min(s.start,u);s=s.end===void 0?h:Math.min(s.end,u),!a.extend&&h>s&&(u=s,s=h,h=u),u=Ud(n,h);var T=Ud(n,s);u&&T&&(a.rangeCount!==1||a.anchorNode!==u.node||a.anchorOffset!==u.offset||a.focusNode!==T.node||a.focusOffset!==T.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),a.removeAllRanges(),h>s?(a.addRange(t),a.extend(T.node,T.offset)):(t.setEnd(T.node,T.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var G_=en&&"documentMode"in document&&11>=document.documentMode,ys=null,Ic=null,Lo=null,Hc=!1;function Nd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hc||ys==null||ys!==dn(s)||(s=ys,"selectionStart"in s&&Fc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Lo&&Uo(Lo,s)||(Lo=s,s=Eu(Ic,"onSelect"),0<s.length&&(n=new Rr("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ys)))}function Cr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ss={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionrun:Cr("Transition","TransitionRun"),transitionstart:Cr("Transition","TransitionStart"),transitioncancel:Cr("Transition","TransitionCancel"),transitionend:Cr("Transition","TransitionEnd")},Gc={},Od={};en&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Ur(t){if(Gc[t])return Gc[t];if(!Ss[t])return t;var n=Ss[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Od)return Gc[t]=n[a];return t}var Pd=Ur("animationend"),zd=Ur("animationiteration"),Bd=Ur("animationstart"),V_=Ur("transitionrun"),k_=Ur("transitionstart"),W_=Ur("transitioncancel"),Fd=Ur("transitionend"),Id=new Map,Hd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ki(t,n){Id.set(t,n),oe(n,[t])}var Ai=[],xs=0,Vc=0;function Vl(){for(var t=xs,n=Vc=xs=0;n<t;){var a=Ai[n];Ai[n++]=null;var s=Ai[n];Ai[n++]=null;var u=Ai[n];Ai[n++]=null;var h=Ai[n];if(Ai[n++]=null,s!==null&&u!==null){var T=s.pending;T===null?u.next=u:(u.next=T.next,T.next=u),s.pending=u}h!==0&&Gd(a,u,h)}}function kl(t,n,a,s){Ai[xs++]=t,Ai[xs++]=n,Ai[xs++]=a,Ai[xs++]=s,Vc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function kc(t,n,a,s){return kl(t,n,a,s),Wl(t)}function qa(t,n){return kl(t,null,null,n),Wl(t)}function Gd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;u&&n!==null&&t.tag===3&&(h=t.stateNode,u=31-ve(a),h=h.hiddenUpdates,t=h[u],t===null?h[u]=[n]:t.push(n),n.lane=a|536870912)}function Wl(t){if(50<nl)throw nl=0,Kf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ms={},Vd=new WeakMap;function Ri(t,n){if(typeof t=="object"&&t!==null){var a=Vd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:J(n)},Vd.set(t,n),n)}return{value:t,source:n,stack:J(n)}}var Es=[],Ts=0,Xl=null,ql=0,wi=[],Ci=0,Lr=null,pa=1,ma="";function Dr(t,n){Es[Ts++]=ql,Es[Ts++]=Xl,Xl=t,ql=n}function kd(t,n,a){wi[Ci++]=pa,wi[Ci++]=ma,wi[Ci++]=Lr,Lr=t;var s=pa;t=ma;var u=32-ve(s)-1;s&=~(1<<u),a+=1;var h=32-ve(n)+u;if(30<h){var T=u-u%5;h=(s&(1<<T)-1).toString(32),s>>=T,u-=T,pa=1<<32-ve(n)+u|a<<u|s,ma=h+t}else pa=1<<h|a<<u|s,ma=t}function Wc(t){t.return!==null&&(Dr(t,1),kd(t,1,0))}function Xc(t){for(;t===Xl;)Xl=Es[--Ts],Es[Ts]=null,ql=Es[--Ts],Es[Ts]=null;for(;t===Lr;)Lr=wi[--Ci],wi[Ci]=null,ma=wi[--Ci],wi[Ci]=null,pa=wi[--Ci],wi[Ci]=null}var ai=null,Xn=null,Ie=!1,Wi=null,na=!1,qc=Error(r(519));function Nr(t){var n=Error(r(418,""));throw Oo(Ri(n,t)),qc}function Wd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[fn]=t,n[An]=s,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<al.length;a++)Ne(al[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),Ga(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),cn(n);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),xo(n,s.value,s.defaultValue,s.children),cn(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||$m(n.textContent,a)?(s.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),s.onScroll!=null&&Ne("scroll",n),s.onScrollEnd!=null&&Ne("scrollend",n),s.onClick!=null&&(n.onclick=Tu),n=!0):n=!1,n||Nr(t)}function Xd(t){for(ai=t.return;ai;)switch(ai.tag){case 3:case 27:na=!0;return;case 5:case 13:na=!1;return;default:ai=ai.return}}function Do(t){if(t!==ai)return!1;if(!Ie)return Xd(t),Ie=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||dh(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&Xn&&Nr(t),Xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Xn=qi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Xn=null}}else Xn=ai?qi(t.stateNode.nextSibling):null;return!0}function No(){Xn=ai=null,Ie=!1}function Oo(t){Wi===null?Wi=[t]:Wi.push(t)}var Po=Error(r(460)),qd=Error(r(474)),jc={then:function(){}};function jd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jl(){}function Yd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(jl,jl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Po?Error(r(483)):t;default:if(typeof n.status=="string")n.then(jl,jl);else{if(t=nn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Po?Error(r(483)):t}throw zo=n,Po}}var zo=null;function Zd(){if(zo===null)throw Error(r(459));var t=zo;return zo=null,t}var bs=null,Bo=0;function Yl(t){var n=Bo;return Bo+=1,bs===null&&(bs=[]),Yd(bs,t,n)}function Fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Zl(t,n){throw n.$$typeof===f?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Kd(t){var n=t._init;return n(t._payload)}function Qd(t){function n(it,Q){if(t){var lt=it.deletions;lt===null?(it.deletions=[Q],it.flags|=16):lt.push(Q)}}function a(it,Q){if(!t)return null;for(;Q!==null;)n(it,Q),Q=Q.sibling;return null}function s(it){for(var Q=new Map;it!==null;)it.key!==null?Q.set(it.key,it):Q.set(it.index,it),it=it.sibling;return Q}function u(it,Q){return it=ar(it,Q),it.index=0,it.sibling=null,it}function h(it,Q,lt){return it.index=lt,t?(lt=it.alternate,lt!==null?(lt=lt.index,lt<Q?(it.flags|=33554434,Q):lt):(it.flags|=33554434,Q)):(it.flags|=1048576,Q)}function T(it){return t&&it.alternate===null&&(it.flags|=33554434),it}function L(it,Q,lt,Et){return Q===null||Q.tag!==6?(Q=Vf(lt,it.mode,Et),Q.return=it,Q):(Q=u(Q,lt),Q.return=it,Q)}function W(it,Q,lt,Et){var Qt=lt.type;return Qt===g?Mt(it,Q,lt.props.children,Et,lt.key):Q!==null&&(Q.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===H&&Kd(Qt)===Q.type)?(Q=u(Q,lt.props),Fo(Q,lt),Q.return=it,Q):(Q=du(lt.type,lt.key,lt.props,null,it.mode,Et),Fo(Q,lt),Q.return=it,Q)}function et(it,Q,lt,Et){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==lt.containerInfo||Q.stateNode.implementation!==lt.implementation?(Q=kf(lt,it.mode,Et),Q.return=it,Q):(Q=u(Q,lt.children||[]),Q.return=it,Q)}function Mt(it,Q,lt,Et,Qt){return Q===null||Q.tag!==7?(Q=kr(lt,it.mode,Et,Qt),Q.return=it,Q):(Q=u(Q,lt),Q.return=it,Q)}function Rt(it,Q,lt){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Vf(""+Q,it.mode,lt),Q.return=it,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case p:return lt=du(Q.type,Q.key,Q.props,null,it.mode,lt),Fo(lt,Q),lt.return=it,lt;case d:return Q=kf(Q,it.mode,lt),Q.return=it,Q;case H:var Et=Q._init;return Q=Et(Q._payload),Rt(it,Q,lt)}if(tt(Q)||q(Q))return Q=kr(Q,it.mode,lt,null),Q.return=it,Q;if(typeof Q.then=="function")return Rt(it,Yl(Q),lt);if(Q.$$typeof===b)return Rt(it,cu(it,Q),lt);Zl(it,Q)}return null}function dt(it,Q,lt,Et){var Qt=Q!==null?Q.key:null;if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return Qt!==null?null:L(it,Q,""+lt,Et);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case p:return lt.key===Qt?W(it,Q,lt,Et):null;case d:return lt.key===Qt?et(it,Q,lt,Et):null;case H:return Qt=lt._init,lt=Qt(lt._payload),dt(it,Q,lt,Et)}if(tt(lt)||q(lt))return Qt!==null?null:Mt(it,Q,lt,Et,null);if(typeof lt.then=="function")return dt(it,Q,Yl(lt),Et);if(lt.$$typeof===b)return dt(it,Q,cu(it,lt),Et);Zl(it,lt)}return null}function St(it,Q,lt,Et,Qt){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return it=it.get(lt)||null,L(Q,it,""+Et,Qt);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case p:return it=it.get(Et.key===null?lt:Et.key)||null,W(Q,it,Et,Qt);case d:return it=it.get(Et.key===null?lt:Et.key)||null,et(Q,it,Et,Qt);case H:var Ce=Et._init;return Et=Ce(Et._payload),St(it,Q,lt,Et,Qt)}if(tt(Et)||q(Et))return it=it.get(lt)||null,Mt(Q,it,Et,Qt,null);if(typeof Et.then=="function")return St(it,Q,lt,Yl(Et),Qt);if(Et.$$typeof===b)return St(it,Q,lt,cu(Q,Et),Qt);Zl(Q,Et)}return null}function ne(it,Q,lt,Et){for(var Qt=null,Ce=null,ie=Q,de=Q=0,In=null;ie!==null&&de<lt.length;de++){ie.index>de?(In=ie,ie=null):In=ie.sibling;var He=dt(it,ie,lt[de],Et);if(He===null){ie===null&&(ie=In);break}t&&ie&&He.alternate===null&&n(it,ie),Q=h(He,Q,de),Ce===null?Qt=He:Ce.sibling=He,Ce=He,ie=In}if(de===lt.length)return a(it,ie),Ie&&Dr(it,de),Qt;if(ie===null){for(;de<lt.length;de++)ie=Rt(it,lt[de],Et),ie!==null&&(Q=h(ie,Q,de),Ce===null?Qt=ie:Ce.sibling=ie,Ce=ie);return Ie&&Dr(it,de),Qt}for(ie=s(ie);de<lt.length;de++)In=St(ie,it,de,lt[de],Et),In!==null&&(t&&In.alternate!==null&&ie.delete(In.key===null?de:In.key),Q=h(In,Q,de),Ce===null?Qt=In:Ce.sibling=In,Ce=In);return t&&ie.forEach(function(fr){return n(it,fr)}),Ie&&Dr(it,de),Qt}function Me(it,Q,lt,Et){if(lt==null)throw Error(r(151));for(var Qt=null,Ce=null,ie=Q,de=Q=0,In=null,He=lt.next();ie!==null&&!He.done;de++,He=lt.next()){ie.index>de?(In=ie,ie=null):In=ie.sibling;var fr=dt(it,ie,He.value,Et);if(fr===null){ie===null&&(ie=In);break}t&&ie&&fr.alternate===null&&n(it,ie),Q=h(fr,Q,de),Ce===null?Qt=fr:Ce.sibling=fr,Ce=fr,ie=In}if(He.done)return a(it,ie),Ie&&Dr(it,de),Qt;if(ie===null){for(;!He.done;de++,He=lt.next())He=Rt(it,He.value,Et),He!==null&&(Q=h(He,Q,de),Ce===null?Qt=He:Ce.sibling=He,Ce=He);return Ie&&Dr(it,de),Qt}for(ie=s(ie);!He.done;de++,He=lt.next())He=St(ie,it,de,He.value,Et),He!==null&&(t&&He.alternate!==null&&ie.delete(He.key===null?de:He.key),Q=h(He,Q,de),Ce===null?Qt=He:Ce.sibling=He,Ce=He);return t&&ie.forEach(function(ay){return n(it,ay)}),Ie&&Dr(it,de),Qt}function yn(it,Q,lt,Et){if(typeof lt=="object"&&lt!==null&&lt.type===g&&lt.key===null&&(lt=lt.props.children),typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case p:t:{for(var Qt=lt.key;Q!==null;){if(Q.key===Qt){if(Qt=lt.type,Qt===g){if(Q.tag===7){a(it,Q.sibling),Et=u(Q,lt.props.children),Et.return=it,it=Et;break t}}else if(Q.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===H&&Kd(Qt)===Q.type){a(it,Q.sibling),Et=u(Q,lt.props),Fo(Et,lt),Et.return=it,it=Et;break t}a(it,Q);break}else n(it,Q);Q=Q.sibling}lt.type===g?(Et=kr(lt.props.children,it.mode,Et,lt.key),Et.return=it,it=Et):(Et=du(lt.type,lt.key,lt.props,null,it.mode,Et),Fo(Et,lt),Et.return=it,it=Et)}return T(it);case d:t:{for(Qt=lt.key;Q!==null;){if(Q.key===Qt)if(Q.tag===4&&Q.stateNode.containerInfo===lt.containerInfo&&Q.stateNode.implementation===lt.implementation){a(it,Q.sibling),Et=u(Q,lt.children||[]),Et.return=it,it=Et;break t}else{a(it,Q);break}else n(it,Q);Q=Q.sibling}Et=kf(lt,it.mode,Et),Et.return=it,it=Et}return T(it);case H:return Qt=lt._init,lt=Qt(lt._payload),yn(it,Q,lt,Et)}if(tt(lt))return ne(it,Q,lt,Et);if(q(lt)){if(Qt=q(lt),typeof Qt!="function")throw Error(r(150));return lt=Qt.call(lt),Me(it,Q,lt,Et)}if(typeof lt.then=="function")return yn(it,Q,Yl(lt),Et);if(lt.$$typeof===b)return yn(it,Q,cu(it,lt),Et);Zl(it,lt)}return typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint"?(lt=""+lt,Q!==null&&Q.tag===6?(a(it,Q.sibling),Et=u(Q,lt),Et.return=it,it=Et):(a(it,Q),Et=Vf(lt,it.mode,Et),Et.return=it,it=Et),T(it)):a(it,Q)}return function(it,Q,lt,Et){try{Bo=0;var Qt=yn(it,Q,lt,Et);return bs=null,Qt}catch(ie){if(ie===Po)throw ie;var Ce=Ni(29,ie,null,it.mode);return Ce.lanes=Et,Ce.return=it,Ce}finally{}}}var Or=Qd(!0),Jd=Qd(!1),As=It(null),Kl=It(0);function $d(t,n){t=Aa,Ht(Kl,t),Ht(As,n),Aa=t|n.baseLanes}function Yc(){Ht(Kl,Aa),Ht(As,As.current)}function Zc(){Aa=Kl.current,Kt(As),Kt(Kl)}var Ui=It(null),ia=null;function ja(t){var n=t.alternate;Ht(Cn,Cn.current&1),Ht(Ui,t),ia===null&&(n===null||As.current!==null||n.memoizedState!==null)&&(ia=t)}function tp(t){if(t.tag===22){if(Ht(Cn,Cn.current),Ht(Ui,t),ia===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(ia=t)}}else Ya()}function Ya(){Ht(Cn,Cn.current),Ht(Ui,Ui.current)}function ga(t){Kt(Ui),ia===t&&(ia=null),Kt(Cn)}var Cn=It(0);function Ql(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var X_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},q_=o.unstable_scheduleCallback,j_=o.unstable_NormalPriority,Un={$$typeof:b,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kc(){return{controller:new X_,data:new Map,refCount:0}}function Io(t){t.refCount--,t.refCount===0&&q_(j_,function(){t.controller.abort()})}var Ho=null,Qc=0,Rs=0,ws=null;function Y_(t,n){if(Ho===null){var a=Ho=[];Qc=0,Rs=ah(),ws={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Qc++,n.then(ep,ep),n}function ep(){if(--Qc===0&&Ho!==null){ws!==null&&(ws.status="fulfilled");var t=Ho;Ho=null,Rs=0,ws=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Z_(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var np=U.S;U.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Y_(t,n),np!==null&&np(t,n)};var Pr=It(null);function Jc(){var t=Pr.current;return t!==null?t:nn.pooledCache}function Jl(t,n){n===null?Ht(Pr,Pr.current):Ht(Pr,n.pool)}function ip(){var t=Jc();return t===null?null:{parent:Un._currentValue,pool:t}}var Za=0,we=null,Ze=null,Mn=null,$l=!1,Cs=!1,zr=!1,tu=0,Go=0,Us=null,K_=0;function xn(){throw Error(r(321))}function $c(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!gi(t[a],n[a]))return!1;return!0}function tf(t,n,a,s,u,h){return Za=h,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?Br:Ka,zr=!1,h=a(s,u),zr=!1,Cs&&(h=rp(n,a,s,u)),ap(t),h}function ap(t){U.H=aa;var n=Ze!==null&&Ze.next!==null;if(Za=0,Mn=Ze=we=null,$l=!1,Go=0,Us=null,n)throw Error(r(300));t===null||Bn||(t=t.dependencies,t!==null&&uu(t)&&(Bn=!0))}function rp(t,n,a,s){we=t;var u=0;do{if(Cs&&(Us=null),Go=0,Cs=!1,25<=u)throw Error(r(301));if(u+=1,Mn=Ze=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}U.H=Fr,h=n(a,s)}while(Cs);return h}function Q_(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?Vo(n):n,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(we.flags|=1024),n}function ef(){var t=tu!==0;return tu=0,t}function nf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function af(t){if($l){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}$l=!1}Za=0,Mn=Ze=we=null,Cs=!1,Go=tu=0,Us=null}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?we.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function En(){if(Ze===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=Mn===null?we.memoizedState:Mn.next;if(n!==null)Mn=n,Ze=t;else{if(t===null)throw we.alternate===null?Error(r(467)):Error(r(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},Mn===null?we.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}var eu;eu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Vo(t){var n=Go;return Go+=1,Us===null&&(Us=[]),t=Yd(Us,t,n),n=we,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Br:Ka),t}function nu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vo(t);if(t.$$typeof===b)return Zn(t)}throw Error(r(438,String(t)))}function rf(t){var n=null,a=we.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=we.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=eu(),we.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=B;return n.index++,a}function va(t,n){return typeof n=="function"?n(t):n}function iu(t){var n=En();return sf(n,Ze,t)}function sf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,h=s.pending;if(h!==null){if(u!==null){var T=u.next;u.next=h.next,h.next=T}n.baseQueue=u=h,s.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var L=T=null,W=null,et=n,Mt=!1;do{var Rt=et.lane&-536870913;if(Rt!==et.lane?(Pe&Rt)===Rt:(Za&Rt)===Rt){var dt=et.revertLane;if(dt===0)W!==null&&(W=W.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),Rt===Rs&&(Mt=!0);else if((Za&dt)===dt){et=et.next,dt===Rs&&(Mt=!0);continue}else Rt={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},W===null?(L=W=Rt,T=h):W=W.next=Rt,we.lanes|=dt,rr|=dt;Rt=et.action,zr&&a(h,Rt),h=et.hasEagerState?et.eagerState:a(h,Rt)}else dt={lane:Rt,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},W===null?(L=W=dt,T=h):W=W.next=dt,we.lanes|=Rt,rr|=Rt;et=et.next}while(et!==null&&et!==n);if(W===null?T=h:W.next=L,!gi(h,t.memoizedState)&&(Bn=!0,Mt&&(a=ws,a!==null)))throw a;t.memoizedState=h,t.baseState=T,t.baseQueue=W,s.lastRenderedState=h}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function of(t){var n=En(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var T=u=u.next;do h=t(h,T.action),T=T.next;while(T!==u);gi(h,n.memoizedState)||(Bn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,s]}function sp(t,n,a){var s=we,u=En(),h=Ie;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var T=!gi((Ze||u).memoizedState,a);if(T&&(u.memoizedState=a,Bn=!0),u=u.queue,cf(up.bind(null,s,u,t),[t]),u.getSnapshot!==n||T||Mn!==null&&Mn.memoizedState.tag&1){if(s.flags|=2048,Ls(9,lp.bind(null,s,u,a,n),{destroy:void 0},null),nn===null)throw Error(r(349));h||(Za&60)!==0||op(s,n,a)}return a}function op(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=we.updateQueue,n===null?(n=eu(),we.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function lp(t,n,a,s){n.value=a,n.getSnapshot=s,cp(n)&&fp(t)}function up(t,n,a){return a(function(){cp(n)&&fp(t)})}function cp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!gi(t,a)}catch{return!0}}function fp(t){var n=qa(t,2);n!==null&&ri(n,t,2)}function lf(t){var n=ci();if(typeof t=="function"){var a=t;if(t=a(),zr){le(!0);try{a()}finally{le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},n}function hp(t,n,a,s){return t.baseState=a,sf(t,Ze,typeof s=="function"?s:va)}function J_(t,n,a,s,u){if(su(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){h.listeners.push(T)}};U.T!==null?a(!0):h.isTransition=!1,s(h),a=n.pending,a===null?(h.next=n.pending=h,dp(n,h)):(h.next=a.next,n.pending=a.next=h)}}function dp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var h=U.T,T={};U.T=T;try{var L=a(u,s),W=U.S;W!==null&&W(T,L),pp(t,n,L)}catch(et){uf(t,n,et)}finally{U.T=h}}else try{h=a(u,s),pp(t,n,h)}catch(et){uf(t,n,et)}}function pp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){mp(t,n,s)},function(s){return uf(t,n,s)}):mp(t,n,a)}function mp(t,n,a){n.status="fulfilled",n.value=a,gp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,dp(t,a)))}function uf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,gp(n),n=n.next;while(n!==s)}t.action=null}function gp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function vp(t,n){return n}function _p(t,n){if(Ie){var a=nn.formState;if(a!==null){t:{var s=we;if(Ie){if(Xn){e:{for(var u=Xn,h=na;u.nodeType!==8;){if(!h){u=null;break e}if(u=qi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Xn=qi(u.nextSibling),s=u.data==="F!";break t}}Nr(s)}s=!1}s&&(n=a[0])}}return a=ci(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vp,lastRenderedState:n},a.queue=s,a=zp.bind(null,we,s),s.dispatch=a,s=lf(!1),h=mf.bind(null,we,!1,s.queue),s=ci(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=J_.bind(null,we,u,h,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function yp(t){var n=En();return Sp(n,Ze,t)}function Sp(t,n,a){n=sf(t,n,vp)[0],t=iu(va)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Vo(n):n;var s=En(),u=s.queue,h=u.dispatch;return a!==s.memoizedState&&(we.flags|=2048,Ls(9,$_.bind(null,u,a),{destroy:void 0},null)),[n,h,t]}function $_(t,n){t.action=n}function xp(t){var n=En(),a=Ze;if(a!==null)return Sp(n,a,t);En(),n=n.memoizedState,a=En();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Ls(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=we.updateQueue,n===null&&(n=eu(),we.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Mp(){return En().memoizedState}function au(t,n,a,s){var u=ci();we.flags|=t,u.memoizedState=Ls(1|n,a,{destroy:void 0},s===void 0?null:s)}function ru(t,n,a,s){var u=En();s=s===void 0?null:s;var h=u.memoizedState.inst;Ze!==null&&s!==null&&$c(s,Ze.memoizedState.deps)?u.memoizedState=Ls(n,a,h,s):(we.flags|=t,u.memoizedState=Ls(1|n,a,h,s))}function Ep(t,n){au(8390656,8,t,n)}function cf(t,n){ru(2048,8,t,n)}function Tp(t,n){return ru(4,2,t,n)}function bp(t,n){return ru(4,4,t,n)}function Ap(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Rp(t,n,a){a=a!=null?a.concat([t]):null,ru(4,4,Ap.bind(null,n,t),a)}function ff(){}function wp(t,n){var a=En();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&$c(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Cp(t,n){var a=En();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&$c(n,s[1]))return s[0];if(s=t(),zr){le(!0);try{t()}finally{le(!1)}}return a.memoizedState=[s,n],s}function hf(t,n,a){return a===void 0||(Za&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Lm(),we.lanes|=t,rr|=t,a)}function Up(t,n,a,s){return gi(a,n)?a:As.current!==null?(t=hf(t,a,s),gi(t,n)||(Bn=!0),t):(Za&42)===0?(Bn=!0,t.memoizedState=a):(t=Lm(),we.lanes|=t,rr|=t,n)}function Lp(t,n,a,s,u){var h=at.p;at.p=h!==0&&8>h?h:8;var T=U.T,L={};U.T=L,mf(t,!1,n,a);try{var W=u(),et=U.S;if(et!==null&&et(L,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var Mt=Z_(W,s);ko(t,n,Mt,Si(t))}else ko(t,n,s,Si(t))}catch(Rt){ko(t,n,{then:function(){},status:"rejected",reason:Rt},Si())}finally{at.p=h,U.T=T}}function t0(){}function df(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Dp(t).queue;Lp(t,u,n,Tt,a===null?t0:function(){return Np(t),a(s)})}function Dp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Tt,baseState:Tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:Tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Np(t){var n=Dp(t).next.queue;ko(t,n,{},Si())}function pf(){return Zn(ul)}function Op(){return En().memoizedState}function Pp(){return En().memoizedState}function e0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Si();t=$a(a);var s=tr(n,t,a);s!==null&&(ri(s,n,a),qo(s,n,a)),n={cache:Kc()},t.payload=n;return}n=n.return}}function n0(t,n,a){var s=Si();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},su(t)?Bp(n,a):(a=kc(t,n,a,s),a!==null&&(ri(a,t,s),Fp(a,n,s)))}function zp(t,n,a){var s=Si();ko(t,n,a,s)}function ko(t,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(su(t))Bp(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var T=n.lastRenderedState,L=h(T,a);if(u.hasEagerState=!0,u.eagerState=L,gi(L,T))return kl(t,n,u,0),nn===null&&Vl(),!1}catch{}finally{}if(a=kc(t,n,u,s),a!==null)return ri(a,t,s),Fp(a,n,s),!0}return!1}function mf(t,n,a,s){if(s={lane:2,revertLane:ah(),action:s,hasEagerState:!1,eagerState:null,next:null},su(t)){if(n)throw Error(r(479))}else n=kc(t,a,s,2),n!==null&&ri(n,t,2)}function su(t){var n=t.alternate;return t===we||n!==null&&n===we}function Bp(t,n){Cs=$l=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Fp(t,n,a){if((a&4194176)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ei(t,a)}}var aa={readContext:Zn,use:nu,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn};aa.useCacheRefresh=xn,aa.useMemoCache=xn,aa.useHostTransitionStatus=xn,aa.useFormState=xn,aa.useActionState=xn,aa.useOptimistic=xn;var Br={readContext:Zn,use:nu,useCallback:function(t,n){return ci().memoizedState=[t,n===void 0?null:n],t},useContext:Zn,useEffect:Ep,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,au(4194308,4,Ap.bind(null,n,t),a)},useLayoutEffect:function(t,n){return au(4194308,4,t,n)},useInsertionEffect:function(t,n){au(4,2,t,n)},useMemo:function(t,n){var a=ci();n=n===void 0?null:n;var s=t();if(zr){le(!0);try{t()}finally{le(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=ci();if(a!==void 0){var u=a(n);if(zr){le(!0);try{a(n)}finally{le(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=n0.bind(null,we,t),[s.memoizedState,t]},useRef:function(t){var n=ci();return t={current:t},n.memoizedState=t},useState:function(t){t=lf(t);var n=t.queue,a=zp.bind(null,we,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ff,useDeferredValue:function(t,n){var a=ci();return hf(a,t,n)},useTransition:function(){var t=lf(!1);return t=Lp.bind(null,we,t.queue,!0,!1),ci().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=we,u=ci();if(Ie){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),nn===null)throw Error(r(349));(Pe&60)!==0||op(s,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Ep(up.bind(null,s,h,t),[t]),s.flags|=2048,Ls(9,lp.bind(null,s,h,a,n),{destroy:void 0},null),a},useId:function(){var t=ci(),n=nn.identifierPrefix;if(Ie){var a=ma,s=pa;a=(s&~(1<<32-ve(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=tu++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=K_++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return ci().memoizedState=e0.bind(null,we)}};Br.useMemoCache=rf,Br.useHostTransitionStatus=pf,Br.useFormState=_p,Br.useActionState=_p,Br.useOptimistic=function(t){var n=ci();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=mf.bind(null,we,!0,a),a.dispatch=n,[t,n]};var Ka={readContext:Zn,use:nu,useCallback:wp,useContext:Zn,useEffect:cf,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:bp,useMemo:Cp,useReducer:iu,useRef:Mp,useState:function(){return iu(va)},useDebugValue:ff,useDeferredValue:function(t,n){var a=En();return Up(a,Ze.memoizedState,t,n)},useTransition:function(){var t=iu(va)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:sp,useId:Op};Ka.useCacheRefresh=Pp,Ka.useMemoCache=rf,Ka.useHostTransitionStatus=pf,Ka.useFormState=yp,Ka.useActionState=yp,Ka.useOptimistic=function(t,n){var a=En();return hp(a,Ze,t,n)};var Fr={readContext:Zn,use:nu,useCallback:wp,useContext:Zn,useEffect:cf,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:bp,useMemo:Cp,useReducer:of,useRef:Mp,useState:function(){return of(va)},useDebugValue:ff,useDeferredValue:function(t,n){var a=En();return Ze===null?hf(a,t,n):Up(a,Ze.memoizedState,t,n)},useTransition:function(){var t=of(va)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:sp,useId:Op};Fr.useCacheRefresh=Pp,Fr.useMemoCache=rf,Fr.useHostTransitionStatus=pf,Fr.useFormState=xp,Fr.useActionState=xp,Fr.useOptimistic=function(t,n){var a=En();return Ze!==null?hp(a,Ze,t,n):(a.baseState=t,[t,a.queue.dispatch])};function gf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:A({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vf={isMounted:function(t){return(t=t._reactInternals)?$(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Si(),u=$a(s);u.payload=n,a!=null&&(u.callback=a),n=tr(t,u,s),n!==null&&(ri(n,t,s),qo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Si(),u=$a(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=tr(t,u,s),n!==null&&(ri(n,t,s),qo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Si(),s=$a(a);s.tag=2,n!=null&&(s.callback=n),n=tr(t,s,a),n!==null&&(ri(n,t,a),qo(n,t,a))}};function Ip(t,n,a,s,u,h,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,T):n.prototype&&n.prototype.isPureReactComponent?!Uo(a,s)||!Uo(u,h):!0}function Hp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&vf.enqueueReplaceState(n,n.state,null)}function Ir(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=A({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var ou=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Gp(t){ou(t)}function Vp(t){console.error(t)}function kp(t){ou(t)}function lu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Wp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(t,n,a){return a=$a(a),a.tag=3,a.payload={element:null},a.callback=function(){lu(t,n)},a}function Xp(t){return t=$a(t),t.tag=3,t}function qp(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;t.payload=function(){return u(h)},t.callback=function(){Wp(n,a,s)}}var T=a.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(t.callback=function(){Wp(n,a,s),typeof u!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var L=s.stack;this.componentDidCatch(s.value,{componentStack:L!==null?L:""})})}function i0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Xo(n,a,u,!0),a=Ui.current,a!==null){switch(a.tag){case 13:return ia===null?$f():a.alternate===null&&_n===0&&(_n=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),eh(t,s,u)),!1;case 22:return a.flags|=65536,s===jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),eh(t,s,u)),!1}throw Error(r(435,a.tag))}return eh(t,s,u),$f(),!1}if(Ie)return n=Ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==qc&&(t=Error(r(422),{cause:s}),Oo(Ri(t,a)))):(s!==qc&&(n=Error(r(423),{cause:s}),Oo(Ri(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Ri(s,a),u=_f(t.stateNode,s,u),Nf(t,u),_n!==4&&(_n=2)),!1;var h=Error(r(520),{cause:s});if(h=Ri(h,a),tl===null?tl=[h]:tl.push(h),_n!==4&&(_n=2),n===null)return!0;s=Ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=_f(a.stateNode,s,t),Nf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(sr===null||!sr.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Xp(u),qp(u,t,a,s),Nf(a,u),!1}a=a.return}while(a!==null);return!1}var jp=Error(r(461)),Bn=!1;function qn(t,n,a,s){n.child=t===null?Jd(n,null,a,s):Or(n,t.child,a,s)}function Yp(t,n,a,s,u){a=a.render;var h=n.ref;if("ref"in s){var T={};for(var L in s)L!=="ref"&&(T[L]=s[L])}else T=s;return Gr(n),s=tf(t,n,a,T,h,u),L=ef(),t!==null&&!Bn?(nf(t,n,u),_a(t,n,u)):(Ie&&L&&Wc(n),n.flags|=1,qn(t,n,s,u),n.child)}function Zp(t,n,a,s,u){if(t===null){var h=a.type;return typeof h=="function"&&!Gf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Kp(t,n,h,s,u)):(t=du(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Rf(t,u)){var T=h.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(T,s)&&t.ref===n.ref)return _a(t,n,u)}return n.flags|=1,t=ar(h,s),t.ref=n.ref,t.return=n,n.child=t}function Kp(t,n,a,s,u){if(t!==null){var h=t.memoizedProps;if(Uo(h,s)&&t.ref===n.ref)if(Bn=!1,n.pendingProps=s=h,Rf(t,u))(t.flags&131072)!==0&&(Bn=!0);else return n.lanes=t.lanes,_a(t,n,u)}return yf(t,n,a,s,u)}function Qp(t,n,a){var s=n.pendingProps,u=s.children,h=(n.stateNode._pendingVisibility&2)!==0,T=t!==null?t.memoizedState:null;if(Wo(t,n),s.mode==="hidden"||h){if((n.flags&128)!==0){if(s=T!==null?T.baseLanes|a:a,t!==null){for(u=n.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~s}else n.childLanes=0,n.child=null;return Jp(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jl(n,T!==null?T.cachePool:null),T!==null?$d(n,T):Yc(),tp(n);else return n.lanes=n.childLanes=536870912,Jp(t,n,T!==null?T.baseLanes|a:a,a)}else T!==null?(Jl(n,T.cachePool),$d(n,T),Ya(),n.memoizedState=null):(t!==null&&Jl(n,null),Yc(),Ya());return qn(t,n,u,a),n.child}function Jp(t,n,a,s){var u=Jc();return u=u===null?null:{parent:Un._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Jl(n,null),Yc(),tp(n),t!==null&&Xo(t,n,s,!0),null}function Wo(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function yf(t,n,a,s,u){return Gr(n),a=tf(t,n,a,s,void 0,u),s=ef(),t!==null&&!Bn?(nf(t,n,u),_a(t,n,u)):(Ie&&s&&Wc(n),n.flags|=1,qn(t,n,a,u),n.child)}function $p(t,n,a,s,u,h){return Gr(n),n.updateQueue=null,a=rp(n,s,a,u),ap(t),s=ef(),t!==null&&!Bn?(nf(t,n,h),_a(t,n,h)):(Ie&&s&&Wc(n),n.flags|=1,qn(t,n,a,h),n.child)}function tm(t,n,a,s,u){if(Gr(n),n.stateNode===null){var h=Ms,T=a.contextType;typeof T=="object"&&T!==null&&(h=Zn(T)),h=new a(s,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=vf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=s,h.state=n.memoizedState,h.refs={},Lf(n),T=a.contextType,h.context=typeof T=="object"&&T!==null?Zn(T):Ms,h.state=n.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(gf(n,a,T,s),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(T=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),T!==h.state&&vf.enqueueReplaceState(h,h.state,null),Yo(n,s,h,u),jo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){h=n.stateNode;var L=n.memoizedProps,W=Ir(a,L);h.props=W;var et=h.context,Mt=a.contextType;T=Ms,typeof Mt=="object"&&Mt!==null&&(T=Zn(Mt));var Rt=a.getDerivedStateFromProps;Mt=typeof Rt=="function"||typeof h.getSnapshotBeforeUpdate=="function",L=n.pendingProps!==L,Mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(L||et!==T)&&Hp(n,h,s,T),Ja=!1;var dt=n.memoizedState;h.state=dt,Yo(n,s,h,u),jo(),et=n.memoizedState,L||dt!==et||Ja?(typeof Rt=="function"&&(gf(n,a,Rt,s),et=n.memoizedState),(W=Ja||Ip(n,a,W,s,dt,et,T))?(Mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),h.props=s,h.state=et,h.context=T,s=W):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{h=n.stateNode,Df(t,n),T=n.memoizedProps,Mt=Ir(a,T),h.props=Mt,Rt=n.pendingProps,dt=h.context,et=a.contextType,W=Ms,typeof et=="object"&&et!==null&&(W=Zn(et)),L=a.getDerivedStateFromProps,(et=typeof L=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T!==Rt||dt!==W)&&Hp(n,h,s,W),Ja=!1,dt=n.memoizedState,h.state=dt,Yo(n,s,h,u),jo();var St=n.memoizedState;T!==Rt||dt!==St||Ja||t!==null&&t.dependencies!==null&&uu(t.dependencies)?(typeof L=="function"&&(gf(n,a,L,s),St=n.memoizedState),(Mt=Ja||Ip(n,a,Mt,s,dt,St,W)||t!==null&&t.dependencies!==null&&uu(t.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,St,W),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,St,W)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||T===t.memoizedProps&&dt===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||T===t.memoizedProps&&dt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=St),h.props=s,h.state=St,h.context=W,s=Mt):(typeof h.componentDidUpdate!="function"||T===t.memoizedProps&&dt===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||T===t.memoizedProps&&dt===t.memoizedState||(n.flags|=1024),s=!1)}return h=s,Wo(t,n),s=(n.flags&128)!==0,h||s?(h=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&s?(n.child=Or(n,t.child,null,u),n.child=Or(n,null,a,u)):qn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=_a(t,n,u),t}function em(t,n,a,s){return No(),n.flags|=256,qn(t,n,a,s),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:ip()}}function Mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Oi),t}function nm(t,n,a){var s=n.pendingProps,u=!1,h=(n.flags&128)!==0,T;if((T=h)||(T=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),T&&(u=!0,n.flags&=-129),T=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ie){if(u?ja(n):Ya(),Ie){var L=Xn,W;if(W=L){t:{for(W=L,L=na;W.nodeType!==8;){if(!L){L=null;break t}if(W=qi(W.nextSibling),W===null){L=null;break t}}L=W}L!==null?(n.memoizedState={dehydrated:L,treeContext:Lr!==null?{id:pa,overflow:ma}:null,retryLane:536870912},W=Ni(18,null,null,0),W.stateNode=L,W.return=n,n.child=W,ai=n,Xn=null,W=!0):W=!1}W||Nr(n)}if(L=n.memoizedState,L!==null&&(L=L.dehydrated,L!==null))return L.data==="$!"?n.lanes=16:n.lanes=536870912,null;ga(n)}return L=s.children,s=s.fallback,u?(Ya(),u=n.mode,L=Tf({mode:"hidden",children:L},u),s=kr(s,u,a,null),L.return=n,s.return=n,L.sibling=s,n.child=L,u=n.child,u.memoizedState=xf(a),u.childLanes=Mf(t,T,a),n.memoizedState=Sf,s):(ja(n),Ef(n,L))}if(W=t.memoizedState,W!==null&&(L=W.dehydrated,L!==null)){if(h)n.flags&256?(ja(n),n.flags&=-257,n=bf(t,n,a)):n.memoizedState!==null?(Ya(),n.child=t.child,n.flags|=128,n=null):(Ya(),u=s.fallback,L=n.mode,s=Tf({mode:"visible",children:s.children},L),u=kr(u,L,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Or(n,t.child,null,a),s=n.child,s.memoizedState=xf(a),s.childLanes=Mf(t,T,a),n.memoizedState=Sf,n=u);else if(ja(n),L.data==="$!"){if(T=L.nextSibling&&L.nextSibling.dataset,T)var et=T.dgst;T=et,s=Error(r(419)),s.stack="",s.digest=T,Oo({value:s,source:null,stack:null}),n=bf(t,n,a)}else if(Bn||Xo(t,n,a,!1),T=(a&t.childLanes)!==0,Bn||T){if(T=nn,T!==null){if(s=a&-a,(s&42)!==0)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=(s&(T.suspendedLanes|a))!==0?0:s,s!==0&&s!==W.retryLane)throw W.retryLane=s,qa(t,s),ri(T,t,s),jp}L.data==="$?"||$f(),n=bf(t,n,a)}else L.data==="$?"?(n.flags|=128,n.child=t.child,n=_0.bind(null,t),L._reactRetry=n,n=null):(t=W.treeContext,Xn=qi(L.nextSibling),ai=n,Ie=!0,Wi=null,na=!1,t!==null&&(wi[Ci++]=pa,wi[Ci++]=ma,wi[Ci++]=Lr,pa=t.id,ma=t.overflow,Lr=n),n=Ef(n,s.children),n.flags|=4096);return n}return u?(Ya(),u=s.fallback,L=n.mode,W=t.child,et=W.sibling,s=ar(W,{mode:"hidden",children:s.children}),s.subtreeFlags=W.subtreeFlags&31457280,et!==null?u=ar(et,u):(u=kr(u,L,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,L=t.child.memoizedState,L===null?L=xf(a):(W=L.cachePool,W!==null?(et=Un._currentValue,W=W.parent!==et?{parent:et,pool:et}:W):W=ip(),L={baseLanes:L.baseLanes|a,cachePool:W}),u.memoizedState=L,u.childLanes=Mf(t,T,a),n.memoizedState=Sf,s):(ja(n),a=t.child,t=a.sibling,a=ar(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(T=n.deletions,T===null?(n.deletions=[t],n.flags|=16):T.push(t)),n.child=a,n.memoizedState=null,a)}function Ef(t,n){return n=Tf({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tf(t,n){return wm(t,n,0,null)}function bf(t,n,a){return Or(n,t.child,null,a),t=Ef(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function im(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Cf(t.return,n,a)}function Af(t,n,a,s,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=a,h.tailMode=u)}function am(t,n,a){var s=n.pendingProps,u=s.revealOrder,h=s.tail;if(qn(t,n,s.children,a),s=Cn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&im(t,a,n);else if(t.tag===19)im(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Ht(Cn,s),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ql(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ql(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Af(n,!0,a,null,h);break;case"together":Af(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _a(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),rr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Xo(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ar(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ar(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&uu(t)))}function a0(t,n,a){switch(n.tag){case 3:fe(n,n.stateNode.containerInfo),Qa(n,Un,t.memoizedState.cache),No();break;case 27:case 5:We(n);break;case 4:fe(n,n.stateNode.containerInfo);break;case 10:Qa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?nm(t,n,a):(ja(n),t=_a(t,n,a),t!==null?t.sibling:null);ja(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Xo(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return am(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ht(Cn,Cn.current),s)break;return null;case 22:case 23:return n.lanes=0,Qp(t,n,a);case 24:Qa(n,Un,t.memoizedState.cache)}return _a(t,n,a)}function rm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Bn=!0;else{if(!Rf(t,a)&&(n.flags&128)===0)return Bn=!1,a0(t,n,a);Bn=(t.flags&131072)!==0}else Bn=!1,Ie&&(n.flags&1048576)!==0&&kd(n,ql,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Gf(s)?(t=Ir(s,t),n.tag=1,n=tm(null,n,s,t,a)):(n.tag=0,n=yf(null,n,s,t,a));else{if(s!=null){if(u=s.$$typeof,u===R){n.tag=11,n=Yp(null,n,s,t,a);break t}else if(u===_){n.tag=14,n=Zp(null,n,s,t,a);break t}}throw n=xt(s)||s,Error(r(306,n,""))}}return n;case 0:return yf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Ir(s,n.pendingProps),tm(t,n,s,u,a);case 3:t:{if(fe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var h=n.pendingProps;u=n.memoizedState,s=u.element,Df(t,n),Yo(n,h,null,a);var T=n.memoizedState;if(h=T.cache,Qa(n,Un,h),h!==u.cache&&Uf(n,[Un],a,!0),jo(),h=T.element,u.isDehydrated)if(u={element:h,isDehydrated:!1,cache:T.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=em(t,n,h,a);break t}else if(h!==s){s=Ri(Error(r(424)),n),Oo(s),n=em(t,n,h,a);break t}else for(Xn=qi(n.stateNode.containerInfo.firstChild),ai=n,Ie=!0,Wi=null,na=!0,a=Jd(n,null,h,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(No(),h===s){n=_a(t,n,a);break t}qn(t,n,h,a)}n=n.child}return n;case 26:return Wo(t,n),t===null?(a=lg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ie||(a=n.type,t=n.pendingProps,s=bu(Se.current).createElement(a),s[fn]=n,s[An]=t,jn(s,a,t),jt(s),n.stateNode=s):n.memoizedState=lg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return We(n),t===null&&Ie&&(s=n.stateNode=rg(n.type,n.pendingProps,Se.current),ai=n,na=!0,Xn=qi(s.firstChild)),s=n.pendingProps.children,t!==null||Ie?qn(t,n,s,a):n.child=Or(n,null,s,a),Wo(t,n),n.child;case 5:return t===null&&Ie&&((u=s=Xn)&&(s=O0(s,n.type,n.pendingProps,na),s!==null?(n.stateNode=s,ai=n,Xn=qi(s.firstChild),na=!1,u=!0):u=!1),u||Nr(n)),We(n),u=n.type,h=n.pendingProps,T=t!==null?t.memoizedProps:null,s=h.children,dh(u,h)?s=null:T!==null&&dh(u,T)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(t,n,Q_,null,null,a),ul._currentValue=u),Wo(t,n),qn(t,n,s,a),n.child;case 6:return t===null&&Ie&&((t=a=Xn)&&(a=P0(a,n.pendingProps,na),a!==null?(n.stateNode=a,ai=n,Xn=null,t=!0):t=!1),t||Nr(n)),null;case 13:return nm(t,n,a);case 4:return fe(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Or(n,null,s,a):qn(t,n,s,a),n.child;case 11:return Yp(t,n,n.type,n.pendingProps,a);case 7:return qn(t,n,n.pendingProps,a),n.child;case 8:return qn(t,n,n.pendingProps.children,a),n.child;case 12:return qn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Qa(n,n.type,s.value),qn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Gr(n),u=Zn(u),s=s(u),n.flags|=1,qn(t,n,s,a),n.child;case 14:return Zp(t,n,n.type,n.pendingProps,a);case 15:return Kp(t,n,n.type,n.pendingProps,a);case 19:return am(t,n,a);case 22:return Qp(t,n,a);case 24:return Gr(n),s=Zn(Un),t===null?(u=Jc(),u===null&&(u=nn,h=Kc(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:s,cache:u},Lf(n),Qa(n,Un,u)):((t.lanes&a)!==0&&(Df(t,n),Yo(n,null,null,a),jo()),u=t.memoizedState,h=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Qa(n,Un,s)):(s=h.cache,Qa(n,Un,s),s!==u.cache&&Uf(n,[Un],a,!0))),qn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var wf=It(null),Hr=null,ya=null;function Qa(t,n,a){Ht(wf,n._currentValue),n._currentValue=a}function Sa(t){t._currentValue=wf.current,Kt(wf)}function Cf(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Uf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var T=u.child;h=h.firstContext;t:for(;h!==null;){var L=h;h=u;for(var W=0;W<n.length;W++)if(L.context===n[W]){h.lanes|=a,L=h.alternate,L!==null&&(L.lanes|=a),Cf(h.return,a,t),s||(T=null);break t}h=L.next}}else if(u.tag===18){if(T=u.return,T===null)throw Error(r(341));T.lanes|=a,h=T.alternate,h!==null&&(h.lanes|=a),Cf(T,a,t),T=null}else T=u.child;if(T!==null)T.return=u;else for(T=u;T!==null;){if(T===t){T=null;break}if(u=T.sibling,u!==null){u.return=T.return,T=u;break}T=T.return}u=T}}function Xo(t,n,a,s){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var T=u.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var L=u.type;gi(u.pendingProps.value,T.value)||(t!==null?t.push(L):t=[L])}}else if(u===Wt.current){if(T=u.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}u=u.return}t!==null&&Uf(n,t,a,s),n.flags|=262144}function uu(t){for(t=t.firstContext;t!==null;){if(!gi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Gr(t){Hr=t,ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zn(t){return sm(Hr,t)}function cu(t,n){return Hr===null&&Gr(t),sm(t,n)}function sm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(t===null)throw Error(r(308));ya=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ya=ya.next=n;return a}var Ja=!1;function Lf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function $a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function tr(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(mn&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Wl(t),Gd(t,null,a),n}return kl(t,s,n,a),Wl(t)}function qo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ei(t,a)}}function Nf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var T={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=T:h=h.next=T,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Of=!1;function jo(){if(Of){var t=ws;if(t!==null)throw t}}function Yo(t,n,a,s){Of=!1;var u=t.updateQueue;Ja=!1;var h=u.firstBaseUpdate,T=u.lastBaseUpdate,L=u.shared.pending;if(L!==null){u.shared.pending=null;var W=L,et=W.next;W.next=null,T===null?h=et:T.next=et,T=W;var Mt=t.alternate;Mt!==null&&(Mt=Mt.updateQueue,L=Mt.lastBaseUpdate,L!==T&&(L===null?Mt.firstBaseUpdate=et:L.next=et,Mt.lastBaseUpdate=W))}if(h!==null){var Rt=u.baseState;T=0,Mt=et=W=null,L=h;do{var dt=L.lane&-536870913,St=dt!==L.lane;if(St?(Pe&dt)===dt:(s&dt)===dt){dt!==0&&dt===Rs&&(Of=!0),Mt!==null&&(Mt=Mt.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});t:{var ne=t,Me=L;dt=n;var yn=a;switch(Me.tag){case 1:if(ne=Me.payload,typeof ne=="function"){Rt=ne.call(yn,Rt,dt);break t}Rt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Me.payload,dt=typeof ne=="function"?ne.call(yn,Rt,dt):ne,dt==null)break t;Rt=A({},Rt,dt);break t;case 2:Ja=!0}}dt=L.callback,dt!==null&&(t.flags|=64,St&&(t.flags|=8192),St=u.callbacks,St===null?u.callbacks=[dt]:St.push(dt))}else St={lane:dt,tag:L.tag,payload:L.payload,callback:L.callback,next:null},Mt===null?(et=Mt=St,W=Rt):Mt=Mt.next=St,T|=dt;if(L=L.next,L===null){if(L=u.shared.pending,L===null)break;St=L,L=St.next,St.next=null,u.lastBaseUpdate=St,u.shared.pending=null}}while(!0);Mt===null&&(W=Rt),u.baseState=W,u.firstBaseUpdate=et,u.lastBaseUpdate=Mt,h===null&&(u.shared.lanes=0),rr|=T,t.lanes=T,t.memoizedState=Rt}}function om(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function lm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)om(a[t],n)}function Zo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var h=a.create,T=a.inst;s=h(),T.destroy=s}a=a.next}while(a!==u)}}catch(L){Je(n,n.return,L)}}function er(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&t)===t){var T=s.inst,L=T.destroy;if(L!==void 0){T.destroy=void 0,u=n;var W=a;try{L()}catch(et){Je(u,W,et)}}}s=s.next}while(s!==h)}}catch(et){Je(n,n.return,et)}}function um(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{lm(n,a)}catch(s){Je(t,t.return,s)}}}function cm(t,n,a){a.props=Ir(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Je(t,n,s)}}function Vr(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var u=s;break;default:u=s}typeof a=="function"?t.refCleanup=a(u):a.current=u}}catch(h){Je(t,n,h)}}function vi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Je(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Je(t,n,u)}else a.current=null}function fm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Je(t,t.return,u)}}function hm(t,n,a){try{var s=t.stateNode;C0(s,t.type,a,n),s[An]=n}catch(u){Je(t,t.return,u)}}function dm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Pf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||dm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Tu));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(zf(t,n,a),t=t.sibling;t!==null;)zf(t,n,a),t=t.sibling}function fu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(fu(t,n,a),t=t.sibling;t!==null;)fu(t,n,a),t=t.sibling}var xa=!1,vn=!1,Bf=!1,pm=typeof WeakSet=="function"?WeakSet:Set,Fn=null,mm=!1;function r0(t,n){if(t=t.containerInfo,fh=Lu,t=Dd(t),Fc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var T=0,L=-1,W=-1,et=0,Mt=0,Rt=t,dt=null;e:for(;;){for(var St;Rt!==a||u!==0&&Rt.nodeType!==3||(L=T+u),Rt!==h||s!==0&&Rt.nodeType!==3||(W=T+s),Rt.nodeType===3&&(T+=Rt.nodeValue.length),(St=Rt.firstChild)!==null;)dt=Rt,Rt=St;for(;;){if(Rt===t)break e;if(dt===a&&++et===u&&(L=T),dt===h&&++Mt===s&&(W=T),(St=Rt.nextSibling)!==null)break;Rt=dt,dt=Rt.parentNode}Rt=St}a=L===-1||W===-1?null:{start:L,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(hh={focusedElem:t,selectionRange:a},Lu=!1,Fn=n;Fn!==null;)if(n=Fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Fn=t;else for(;Fn!==null;){switch(n=Fn,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var ne=Ir(a.type,u,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ne,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(Me){Je(a,a.return,Me)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)gh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Fn=t;break}Fn=n.return}return ne=mm,mm=!1,ne}function gm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(t,a),s&4&&Zo(5,a);break;case 1:if(Ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(L){Je(a,a.return,L)}else{var u=Ir(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(L){Je(a,a.return,L)}}s&64&&um(a),s&512&&Vr(a,a.return);break;case 3:if(Ea(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{lm(s,t)}catch(L){Je(a,a.return,L)}}break;case 26:Ea(t,a),s&512&&Vr(a,a.return);break;case 27:case 5:Ea(t,a),n===null&&s&4&&fm(a),s&512&&Vr(a,a.return);break;case 12:Ea(t,a);break;case 13:Ea(t,a),s&4&&ym(t,a);break;case 22:if(u=a.memoizedState!==null||xa,!u){n=n!==null&&n.memoizedState!==null||vn;var h=xa,T=vn;xa=u,(vn=n)&&!T?nr(t,a,(a.subtreeFlags&8772)!==0):Ea(t,a),xa=h,vn=T}s&512&&(a.memoizedProps.mode==="manual"?Vr(a,a.return):vi(a,a.return));break;default:Ea(t,a)}}function vm(t){var n=t.alternate;n!==null&&(t.alternate=null,vm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&vt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Tn=null,_i=!1;function Ma(t,n,a){for(a=a.child;a!==null;)_m(t,n,a),a=a.sibling}function _m(t,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 26:vn||vi(a,n),Ma(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||vi(a,n);var s=Tn,u=_i;for(Tn=a.stateNode,Ma(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);vt(a),Tn=s,_i=u;break;case 5:vn||vi(a,n);case 6:u=Tn;var h=_i;if(Tn=null,Ma(t,n,a),Tn=u,_i=h,Tn!==null)if(_i)try{t=Tn,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(T){Je(a,n,T)}else try{Tn.removeChild(a.stateNode)}catch(T){Je(a,n,T)}break;case 18:Tn!==null&&(_i?(n=Tn,a=a.stateNode,n.nodeType===8?mh(n.parentNode,a):n.nodeType===1&&mh(n,a),dl(n)):mh(Tn,a.stateNode));break;case 4:s=Tn,u=_i,Tn=a.stateNode.containerInfo,_i=!0,Ma(t,n,a),Tn=s,_i=u;break;case 0:case 11:case 14:case 15:vn||er(2,a,n),vn||er(4,a,n),Ma(t,n,a);break;case 1:vn||(vi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&cm(a,n,s)),Ma(t,n,a);break;case 21:Ma(t,n,a);break;case 22:vn||vi(a,n),vn=(s=vn)||a.memoizedState!==null,Ma(t,n,a),vn=s;break;default:Ma(t,n,a)}}function ym(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{dl(t)}catch(a){Je(n,n.return,a)}}function s0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new pm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new pm),n;default:throw Error(r(435,t.tag))}}function Ff(t,n){var a=s0(t);n.forEach(function(s){var u=y0.bind(null,t,s);a.has(s)||(a.add(s),s.then(u,u))})}function Li(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],h=t,T=n,L=T;t:for(;L!==null;){switch(L.tag){case 27:case 5:Tn=L.stateNode,_i=!1;break t;case 3:Tn=L.stateNode.containerInfo,_i=!0;break t;case 4:Tn=L.stateNode.containerInfo,_i=!0;break t}L=L.return}if(Tn===null)throw Error(r(160));_m(h,T,u),Tn=null,_i=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Sm(n,t),n=n.sibling}var Xi=null;function Sm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Li(n,t),Di(t),s&4&&(er(3,t,t.return),Zo(3,t),er(5,t,t.return));break;case 1:Li(n,t),Di(t),s&512&&(vn||a===null||vi(a,a.return)),s&64&&xa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Xi;if(Li(n,t),Di(t),s&512&&(vn||a===null||vi(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ht]||h[fn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(s),u.head.insertBefore(h,u.querySelector("head > title"))),jn(h,s,a),h[fn]=t,jt(h),s=h;break t;case"link":var T=fg("link","href",u).get(s+(a.href||""));if(T){for(var L=0;L<T.length;L++)if(h=T[L],h.getAttribute("href")===(a.href==null?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){T.splice(L,1);break e}}h=u.createElement(s),jn(h,s,a),u.head.appendChild(h);break;case"meta":if(T=fg("meta","content",u).get(s+(a.content||""))){for(L=0;L<T.length;L++)if(h=T[L],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){T.splice(L,1);break e}}h=u.createElement(s),jn(h,s,a),u.head.appendChild(h);break;default:throw Error(r(468,s))}h[fn]=t,jt(h),s=h}t.stateNode=s}else hg(u,t.type,t.stateNode);else t.stateNode=cg(u,s,t.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?hg(u,t.type,t.stateNode):cg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&hm(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){u=t.stateNode,h=t.memoizedProps;try{for(var W=u.firstChild;W;){var et=W.nextSibling,Mt=W.nodeName;W[ht]||Mt==="HEAD"||Mt==="BODY"||Mt==="SCRIPT"||Mt==="STYLE"||Mt==="LINK"&&W.rel.toLowerCase()==="stylesheet"||u.removeChild(W),W=et}for(var Rt=t.type,dt=u.attributes;dt.length;)u.removeAttributeNode(dt[0]);jn(u,Rt,h),u[fn]=t,u[An]=h}catch(ne){Je(t,t.return,ne)}}case 5:if(Li(n,t),Di(t),s&512&&(vn||a===null||vi(a,a.return)),t.flags&32){u=t.stateNode;try{ca(u,"")}catch(ne){Je(t,t.return,ne)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,hm(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Bf=!0);break;case 6:if(Li(n,t),Di(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ne){Je(t,t.return,ne)}}break;case 3:if(wu=null,u=Xi,Xi=Au(n.containerInfo),Li(n,t),Xi=u,Di(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{dl(n.containerInfo)}catch(ne){Je(t,t.return,ne)}Bf&&(Bf=!1,xm(t));break;case 4:s=Xi,Xi=Au(t.stateNode.containerInfo),Li(n,t),Di(t),Xi=s;break;case 12:Li(n,t),Di(t);break;case 13:Li(n,t),Di(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jf=bt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ff(t,s)));break;case 22:if(s&512&&(vn||a===null||vi(a,a.return)),W=t.memoizedState!==null,et=a!==null&&a.memoizedState!==null,Mt=xa,Rt=vn,xa=Mt||W,vn=Rt||et,Li(n,t),vn=Rt,xa=Mt,Di(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=W?n._visibility&-2:n._visibility|1,W&&(n=xa||vn,a===null||et||n||Ds(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){et=a=n;try{if(u=et.stateNode,W)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{T=et.stateNode,L=et.memoizedProps.style;var St=L!=null&&L.hasOwnProperty("display")?L.display:null;T.style.display=St==null||typeof St=="boolean"?"":(""+St).trim()}}catch(ne){Je(et,et.return,ne)}}}else if(n.tag===6){if(a===null){et=n;try{et.stateNode.nodeValue=W?"":et.memoizedProps}catch(ne){Je(et,et.return,ne)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ff(t,a))));break;case 19:Li(n,t),Di(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ff(t,s)));break;case 21:break;default:Li(n,t),Di(t)}}function Di(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(dm(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var u=s.stateNode,h=Pf(t);fu(t,h,u);break;case 5:var T=s.stateNode;s.flags&32&&(ca(T,""),s.flags&=-33);var L=Pf(t);fu(t,L,T);break;case 3:case 4:var W=s.stateNode.containerInfo,et=Pf(t);zf(t,et,W);break;default:throw Error(r(161))}}}catch(Mt){Je(t,t.return,Mt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function xm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;xm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gm(t,n.alternate,n),n=n.sibling}function Ds(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:er(4,n,n.return),Ds(n);break;case 1:vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&cm(n,n.return,a),Ds(n);break;case 26:case 27:case 5:vi(n,n.return),Ds(n);break;case 22:vi(n,n.return),n.memoizedState===null&&Ds(n);break;default:Ds(n)}t=t.sibling}}function nr(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,h=n,T=h.flags;switch(h.tag){case 0:case 11:case 15:nr(u,h,a),Zo(4,h);break;case 1:if(nr(u,h,a),s=h,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Je(s,s.return,et)}if(s=h,u=s.updateQueue,u!==null){var L=s.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)om(W[u],L)}catch(et){Je(s,s.return,et)}}a&&T&64&&um(h),Vr(h,h.return);break;case 26:case 27:case 5:nr(u,h,a),a&&s===null&&T&4&&fm(h),Vr(h,h.return);break;case 12:nr(u,h,a);break;case 13:nr(u,h,a),a&&T&4&&ym(u,h);break;case 22:h.memoizedState===null&&nr(u,h,a),Vr(h,h.return);break;default:nr(u,h,a)}n=n.sibling}}function If(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Io(a))}function Hf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Io(t))}function ir(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mm(t,n,a,s),n=n.sibling}function Mm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ir(t,n,a,s),u&2048&&Zo(9,n);break;case 3:ir(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Io(t)));break;case 12:if(u&2048){ir(t,n,a,s),t=n.stateNode;try{var h=n.memoizedProps,T=h.id,L=h.onPostCommit;typeof L=="function"&&L(T,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(W){Je(n,n.return,W)}}else ir(t,n,a,s);break;case 23:break;case 22:h=n.stateNode,n.memoizedState!==null?h._visibility&4?ir(t,n,a,s):Ko(t,n):h._visibility&4?ir(t,n,a,s):(h._visibility|=4,Ns(t,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&If(n.alternate,n);break;case 24:ir(t,n,a,s),u&2048&&Hf(n.alternate,n);break;default:ir(t,n,a,s)}}function Ns(t,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,T=n,L=a,W=s,et=T.flags;switch(T.tag){case 0:case 11:case 15:Ns(h,T,L,W,u),Zo(8,T);break;case 23:break;case 22:var Mt=T.stateNode;T.memoizedState!==null?Mt._visibility&4?Ns(h,T,L,W,u):Ko(h,T):(Mt._visibility|=4,Ns(h,T,L,W,u)),u&&et&2048&&If(T.alternate,T);break;case 24:Ns(h,T,L,W,u),u&&et&2048&&Hf(T.alternate,T);break;default:Ns(h,T,L,W,u)}n=n.sibling}}function Ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Ko(a,s),u&2048&&If(s.alternate,s);break;case 24:Ko(a,s),u&2048&&Hf(s.alternate,s);break;default:Ko(a,s)}n=n.sibling}}var Qo=8192;function Os(t){if(t.subtreeFlags&Qo)for(t=t.child;t!==null;)Em(t),t=t.sibling}function Em(t){switch(t.tag){case 26:Os(t),t.flags&Qo&&t.memoizedState!==null&&Y0(Xi,t.memoizedState,t.memoizedProps);break;case 5:Os(t);break;case 3:case 4:var n=Xi;Xi=Au(t.stateNode.containerInfo),Os(t),Xi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Qo,Qo=16777216,Os(t),Qo=n):Os(t));break;default:Os(t)}}function Tm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Jo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Fn=s,Am(s,t)}Tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bm(t),t=t.sibling}function bm(t){switch(t.tag){case 0:case 11:case 15:Jo(t),t.flags&2048&&er(9,t,t.return);break;case 3:Jo(t);break;case 12:Jo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,hu(t)):Jo(t);break;default:Jo(t)}}function hu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Fn=s,Am(s,t)}Tm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:er(8,n,n.return),hu(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,hu(n));break;default:hu(n)}t=t.sibling}}function Am(t,n){for(;Fn!==null;){var a=Fn;switch(a.tag){case 0:case 11:case 15:er(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Io(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Fn=s;else t:for(a=t;Fn!==null;){s=Fn;var u=s.sibling,h=s.return;if(vm(s),s===a){Fn=null;break t}if(u!==null){u.return=h,Fn=u;break t}Fn=h}}}function o0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(t,n,a,s){return new o0(t,n,a,s)}function Gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ar(t,n){var a=t.alternate;return a===null?(a=Ni(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Rm(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function du(t,n,a,s,u,h){var T=0;if(s=t,typeof t=="function")Gf(t)&&(T=1);else if(typeof t=="string")T=q0(t,a,ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case g:return kr(a.children,u,h,n);case v:T=8,u|=24;break;case S:return t=Ni(12,a,n,u|2),t.elementType=S,t.lanes=h,t;case C:return t=Ni(13,a,n,u),t.elementType=C,t.lanes=h,t;case x:return t=Ni(19,a,n,u),t.elementType=x,t.lanes=h,t;case O:return wm(a,u,h,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:case b:T=10;break t;case M:T=9;break t;case R:T=11;break t;case _:T=14;break t;case H:T=16,s=null;break t}T=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Ni(T,a,n,u),n.elementType=t,n.type=s,n.lanes=h,n}function kr(t,n,a,s){return t=Ni(7,t,s,n),t.lanes=a,t}function wm(t,n,a,s){t=Ni(22,t,s,n),t.elementType=O,t.lanes=a;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var h=u._current;if(h===null)throw Error(r(456));if((u._pendingVisibility&2)===0){var T=qa(h,2);T!==null&&(u._pendingVisibility|=2,ri(T,h,2))}},attach:function(){var h=u._current;if(h===null)throw Error(r(456));if((u._pendingVisibility&2)!==0){var T=qa(h,2);T!==null&&(u._pendingVisibility&=-3,ri(T,h,2))}}};return t.stateNode=u,t}function Vf(t,n,a){return t=Ni(6,t,null,n),t.lanes=a,t}function kf(t,n,a){return n=Ni(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Ta(t){t.flags|=4}function Cm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!dg(n)){if(n=Ui.current,n!==null&&((Pe&4194176)===Pe?ia!==null:(Pe&62914560)!==Pe&&(Pe&536870912)===0||n!==ia))throw zo=jc,qd;t.flags|=8192}}function pu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?$e():536870912,t.lanes|=n,zs|=n)}function $o(t,n){if(!Ie)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function pn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&31457280,s|=u.flags&31457280,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function l0(t,n,a){var s=n.pendingProps;switch(Xc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(n),null;case 1:return pn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Sa(Un),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Do(n)?Ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wi!==null&&(Qf(Wi),Wi=null))),pn(n),null;case 26:return a=n.memoizedState,t===null?(Ta(n),a!==null?(pn(n),Cm(n,a)):(pn(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Ta(n),pn(n),Cm(n,a)):(pn(n),n.flags&=-16777217):(t.memoizedProps!==s&&Ta(n),pn(n),n.flags&=-16777217),null;case 27:ge(n),a=Se.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return pn(n),null}t=ce.current,Do(n)?Wd(n):(t=rg(u,s,a),n.stateNode=t,Ta(n))}return pn(n),null;case 5:if(ge(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return pn(n),null}if(t=ce.current,Do(n))Wd(n);else{switch(u=bu(Se.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}t[fn]=n,t[An]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;t:switch(jn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ta(n)}}return pn(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ta(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Se.current,Do(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=ai,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||$m(t.nodeValue,a)),t||Nr(n)}else t=bu(t).createTextNode(s),t[fn]=n,n.stateNode=t}return pn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Do(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[fn]=n}else No(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pn(n),u=!1}else Wi!==null&&(Qf(Wi),Wi=null),u=!0;if(!u)return n.flags&256?(ga(n),n):(ga(n),null)}if(ga(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var h=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==u&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),pu(n,n.updateQueue),pn(n),null;case 4:return Zt(),t===null&&lh(n.stateNode.containerInfo),pn(n),null;case 10:return Sa(n.type),pn(n),null;case 19:if(Kt(Cn),u=n.memoizedState,u===null)return pn(n),null;if(s=(n.flags&128)!==0,h=u.rendering,h===null)if(s)$o(u,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Ql(t),h!==null){for(n.flags|=128,$o(u,!1),t=h.updateQueue,n.updateQueue=t,pu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Rm(a,t),a=a.sibling;return Ht(Cn,Cn.current&1|2),n.child}t=t.sibling}u.tail!==null&&bt()>mu&&(n.flags|=128,s=!0,$o(u,!1),n.lanes=4194304)}else{if(!s)if(t=Ql(h),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,pu(n,t),$o(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Ie)return pn(n),null}else 2*bt()-u.renderingStartTime>mu&&a!==536870912&&(n.flags|=128,s=!0,$o(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(t=u.last,t!==null?t.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=bt(),n.sibling=null,t=Cn.current,Ht(Cn,s?t&1|2:t&1),n):(pn(n),null);case 22:case 23:return ga(n),Zc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(pn(n),n.subtreeFlags&6&&(n.flags|=8192)):pn(n),a=n.updateQueue,a!==null&&pu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Kt(Pr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Sa(Un),pn(n),null;case 25:return null}throw Error(r(156,n.tag))}function u0(t,n){switch(Xc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Sa(Un),Zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ge(n),null;case 13:if(ga(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));No()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Kt(Cn),null;case 4:return Zt(),null;case 10:return Sa(n.type),null;case 22:case 23:return ga(n),Zc(),t!==null&&Kt(Pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Sa(Un),null;case 25:return null;default:return null}}function Um(t,n){switch(Xc(n),n.tag){case 3:Sa(Un),Zt();break;case 26:case 27:case 5:ge(n);break;case 4:Zt();break;case 13:ga(n);break;case 19:Kt(Cn);break;case 10:Sa(n.type);break;case 22:case 23:ga(n),Zc(),t!==null&&Kt(Pr);break;case 24:Sa(Un)}}var c0={getCacheForType:function(t){var n=Zn(Un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},f0=typeof WeakMap=="function"?WeakMap:Map,mn=0,nn=null,Le=null,Pe=0,an=0,yi=null,ba=!1,Ps=!1,Wf=!1,Aa=0,_n=0,rr=0,Wr=0,Xf=0,Oi=0,zs=0,tl=null,ra=null,qf=!1,jf=0,mu=1/0,gu=null,sr=null,vu=!1,Xr=null,el=0,Yf=0,Zf=null,nl=0,Kf=null;function Si(){if((mn&2)!==0&&Pe!==0)return Pe&-Pe;if(U.T!==null){var t=Rs;return t!==0?t:ah()}return $i()}function Lm(){Oi===0&&(Oi=(Pe&536870912)===0||Ie?Fe():536870912);var t=Ui.current;return t!==null&&(t.flags|=32),Oi}function ri(t,n,a){(t===nn&&an===2||t.cancelPendingCommit!==null)&&(Bs(t,0),Ra(t,Pe,Oi,!1)),Oe(t,a),((mn&2)===0||t!==nn)&&(t===nn&&((mn&2)===0&&(Wr|=a),_n===4&&Ra(t,Pe,Oi,!1)),sa(t))}function Dm(t,n,a){if((mn&6)!==0)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||Jt(t,n),u=s?p0(t,n):th(t,n,!0),h=s;do{if(u===0){Ps&&!s&&Ra(t,n,0,!1);break}else if(u===6)Ra(t,n,0,!ba);else{if(a=t.current.alternate,h&&!h0(a)){u=th(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var T=0;else T=t.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){n=T;t:{var L=t;u=tl;var W=L.current.memoizedState.isDehydrated;if(W&&(Bs(L,T).flags|=256),T=th(L,T,!1),T!==2){if(Wf&&!W){L.errorRecoveryDisabledLanes|=h,Wr|=h,u=4;break t}h=ra,ra=u,h!==null&&Qf(h)}u=T}if(h=!1,u!==2)continue}}if(u===1){Bs(t,0),Ra(t,n,0,!0);break}t:{switch(s=t,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Ra(s,n,Oi,!ba);break t}break;case 2:ra=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(h=jf+300-bt(),10<h)){if(Ra(s,n,Oi,!ba),se(s,0)!==0)break t;s.timeoutHandle=ng(Nm.bind(null,s,a,ra,gu,qf,n,Oi,Wr,zs,ba,2,-0,0),h);break t}Nm(s,a,ra,gu,qf,n,Oi,Wr,zs,ba,0,-0,0)}}break}while(!0);sa(t)}function Qf(t){ra===null?ra=t:ra.push.apply(ra,t)}function Nm(t,n,a,s,u,h,T,L,W,et,Mt,Rt,dt){var St=n.subtreeFlags;if((St&8192||(St&16785408)===16785408)&&(ll={stylesheets:null,count:0,unsuspend:j0},Em(n),n=Z0(),n!==null)){t.cancelPendingCommit=n(Hm.bind(null,t,a,s,u,T,L,W,1,Rt,dt)),Ra(t,h,T,!et);return}Hm(t,a,s,u,T,L,W,Mt,Rt,dt)}function h0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],h=u.getSnapshot;u=u.value;try{if(!gi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(t,n,a,s){n&=~Xf,n&=~Wr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var h=31-ve(u),T=1<<h;s[h]=-1,u&=~T}a!==0&&ti(t,a,n)}function _u(){return(mn&6)===0?(il(0),!1):!0}function Jf(){if(Le!==null){if(an===0)var t=Le.return;else t=Le,ya=Hr=null,af(t),bs=null,Bo=0,t=Le;for(;t!==null;)Um(t.alternate,t),t=t.return;Le=null}}function Bs(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,L0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Jf(),nn=t,Le=a=ar(t.current,null),Pe=n,an=0,yi=null,ba=!1,Ps=Jt(t,n),Wf=!1,zs=Oi=Xf=Wr=rr=_n=0,ra=tl=null,qf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-ve(s),h=1<<u;n|=t[u],s&=~h}return Aa=n,Vl(),a}function Om(t,n){we=null,U.H=aa,n===Po?(n=Zd(),an=3):n===qd?(n=Zd(),an=4):an=n===jp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yi=n,Le===null&&(_n=1,lu(t,Ri(n,t.current)))}function Pm(){var t=U.H;return U.H=aa,t===null?aa:t}function zm(){var t=U.A;return U.A=c0,t}function $f(){_n=4,ba||(Pe&4194176)!==Pe&&Ui.current!==null||(Ps=!0),(rr&134217727)===0&&(Wr&134217727)===0||nn===null||Ra(nn,Pe,Oi,!1)}function th(t,n,a){var s=mn;mn|=2;var u=Pm(),h=zm();(nn!==t||Pe!==n)&&(gu=null,Bs(t,n)),n=!1;var T=_n;t:do try{if(an!==0&&Le!==null){var L=Le,W=yi;switch(an){case 8:Jf(),T=6;break t;case 3:case 2:case 6:Ui.current===null&&(n=!0);var et=an;if(an=0,yi=null,Fs(t,L,W,et),a&&Ps){T=0;break t}break;default:et=an,an=0,yi=null,Fs(t,L,W,et)}}d0(),T=_n;break}catch(Mt){Om(t,Mt)}while(!0);return n&&t.shellSuspendCounter++,ya=Hr=null,mn=s,U.H=u,U.A=h,Le===null&&(nn=null,Pe=0,Vl()),T}function d0(){for(;Le!==null;)Bm(Le)}function p0(t,n){var a=mn;mn|=2;var s=Pm(),u=zm();nn!==t||Pe!==n?(gu=null,mu=bt()+500,Bs(t,n)):Ps=Jt(t,n);t:do try{if(an!==0&&Le!==null){n=Le;var h=yi;e:switch(an){case 1:an=0,yi=null,Fs(t,n,h,1);break;case 2:if(jd(h)){an=0,yi=null,Fm(n);break}n=function(){an===2&&nn===t&&(an=7),sa(t)},h.then(n,n);break t;case 3:an=7;break t;case 4:an=5;break t;case 7:jd(h)?(an=0,yi=null,Fm(n)):(an=0,yi=null,Fs(t,n,h,7));break;case 5:var T=null;switch(Le.tag){case 26:T=Le.memoizedState;case 5:case 27:var L=Le;if(!T||dg(T)){an=0,yi=null;var W=L.sibling;if(W!==null)Le=W;else{var et=L.return;et!==null?(Le=et,yu(et)):Le=null}break e}}an=0,yi=null,Fs(t,n,h,5);break;case 6:an=0,yi=null,Fs(t,n,h,6);break;case 8:Jf(),_n=6;break t;default:throw Error(r(462))}}m0();break}catch(Mt){Om(t,Mt)}while(!0);return ya=Hr=null,U.H=s,U.A=u,mn=a,Le!==null?0:(nn=null,Pe=0,Vl(),_n)}function m0(){for(;Le!==null&&!Lt();)Bm(Le)}function Bm(t){var n=rm(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,n===null?yu(t):Le=n}function Fm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=$p(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=$p(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:af(n);default:Um(a,n),n=Le=Rm(n,Aa),n=rm(a,n,Aa)}t.memoizedProps=t.pendingProps,n===null?yu(t):Le=n}function Fs(t,n,a,s){ya=Hr=null,af(n),bs=null,Bo=0;var u=n.return;try{if(i0(t,u,n,a,Pe)){_n=1,lu(t,Ri(a,t.current)),Le=null;return}}catch(h){if(u!==null)throw Le=u,h;_n=1,lu(t,Ri(a,t.current)),Le=null;return}n.flags&32768?(Ie||s===1?t=!0:Ps||(Pe&536870912)!==0?t=!1:(ba=t=!0,(s===2||s===3||s===6)&&(s=Ui.current,s!==null&&s.tag===13&&(s.flags|=16384))),Im(n,t)):yu(n)}function yu(t){var n=t;do{if((n.flags&32768)!==0){Im(n,ba);return}t=n.return;var a=l0(n.alternate,n,Aa);if(a!==null){Le=a;return}if(n=n.sibling,n!==null){Le=n;return}Le=n=t}while(n!==null);_n===0&&(_n=5)}function Im(t,n){do{var a=u0(t.alternate,t);if(a!==null){a.flags&=32767,Le=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Le=t;return}Le=t=a}while(t!==null);_n=6,Le=null}function Hm(t,n,a,s,u,h,T,L,W,et){var Mt=U.T,Rt=at.p;try{at.p=2,U.T=null,g0(t,n,a,s,Rt,u,h,T,L,W,et)}finally{U.T=Mt,at.p=Rt}}function g0(t,n,a,s,u,h,T,L){do Is();while(Xr!==null);if((mn&6)!==0)throw Error(r(327));var W=t.finishedWork;if(s=t.finishedLanes,W===null)return null;if(t.finishedWork=null,t.finishedLanes=0,W===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var et=W.lanes|W.childLanes;if(et|=Vc,ln(t,s,et,h,T,L),t===nn&&(Le=nn=null,Pe=0),(W.subtreeFlags&10256)===0&&(W.flags&10256)===0||vu||(vu=!0,Yf=et,Zf=a,S0(re,function(){return Is(),null})),a=(W.flags&15990)!==0,(W.subtreeFlags&15990)!==0||a?(a=U.T,U.T=null,h=at.p,at.p=2,T=mn,mn|=4,r0(t,W),Sm(W,t),H_(hh,t.containerInfo),Lu=!!fh,hh=fh=null,t.current=W,gm(t,W.alternate,W),Ct(),mn=T,at.p=h,U.T=a):t.current=W,vu?(vu=!1,Xr=t,el=s):Gm(t,et),et=t.pendingLanes,et===0&&(sr=null),Yt(W.stateNode),sa(t),n!==null)for(u=t.onRecoverableError,W=0;W<n.length;W++)et=n[W],u(et.value,{componentStack:et.stack});return(el&3)!==0&&Is(),et=t.pendingLanes,(s&4194218)!==0&&(et&42)!==0?t===Kf?nl++:(nl=0,Kf=t):nl=0,il(0),null}function Gm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Io(n)))}function Is(){if(Xr!==null){var t=Xr,n=Yf;Yf=0;var a=Ti(el),s=U.T,u=at.p;try{if(at.p=32>a?32:a,U.T=null,Xr===null)var h=!1;else{a=Zf,Zf=null;var T=Xr,L=el;if(Xr=null,el=0,(mn&6)!==0)throw Error(r(331));var W=mn;if(mn|=4,bm(T.current),Mm(T,T.current,L,a),mn=W,il(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(ae,T)}catch{}h=!0}return h}finally{at.p=u,U.T=s,Gm(t,n)}}return!1}function Vm(t,n,a){n=Ri(a,n),n=_f(t.stateNode,n,2),t=tr(t,n,2),t!==null&&(Oe(t,2),sa(t))}function Je(t,n,a){if(t.tag===3)Vm(t,t,a);else for(;n!==null;){if(n.tag===3){Vm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(sr===null||!sr.has(s))){t=Ri(a,t),a=Xp(2),s=tr(n,a,2),s!==null&&(qp(a,s,n,t),Oe(s,2),sa(s));break}}n=n.return}}function eh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new f0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Wf=!0,u.add(a),t=v0.bind(null,t,n,a),n.then(t,t))}function v0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,nn===t&&(Pe&a)===a&&(_n===4||_n===3&&(Pe&62914560)===Pe&&300>bt()-jf?(mn&2)===0&&Bs(t,0):Xf|=a,zs===Pe&&(zs=0)),sa(t)}function km(t,n){n===0&&(n=$e()),t=qa(t,n),t!==null&&(Oe(t,n),sa(t))}function _0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),km(t,a)}function y0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),km(t,a)}function S0(t,n){return D(t,n)}var Su=null,Hs=null,nh=!1,xu=!1,ih=!1,qr=0;function sa(t){t!==Hs&&t.next===null&&(Hs===null?Su=Hs=t:Hs=Hs.next=t),xu=!0,nh||(nh=!0,M0(x0))}function il(t,n){if(!ih&&xu){ih=!0;do for(var a=!1,s=Su;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var h=0;else{var T=s.suspendedLanes,L=s.pingedLanes;h=(1<<31-ve(42|t)+1)-1,h&=u&~(T&~L),h=h&201326677?h&201326677|1:h?h|2:0}h!==0&&(a=!0,qm(s,h))}else h=Pe,h=se(s,s===nn?h:0),(h&3)===0||Jt(s,h)||(a=!0,qm(s,h));s=s.next}while(a);ih=!1}}function x0(){xu=nh=!1;var t=0;qr!==0&&(U0()&&(t=qr),qr=0);for(var n=bt(),a=null,s=Su;s!==null;){var u=s.next,h=Wm(s,n);h===0?(s.next=null,a===null?Su=u:a.next=u,u===null&&(Hs=a)):(a=s,(t!==0||(h&3)!==0)&&(xu=!0)),s=u}il(t)}function Wm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var T=31-ve(h),L=1<<T,W=u[T];W===-1?((L&a)===0||(L&s)!==0)&&(u[T]=Be(L,n)):W<=n&&(t.expiredLanes|=L),h&=~L}if(n=nn,a=Pe,a=se(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&an===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&mt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Jt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&mt(s),Ti(a)){case 2:case 8:a=qt;break;case 32:a=re;break;case 268435456:a=wt;break;default:a=re}return s=Xm.bind(null,t),a=D(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&mt(s),t.callbackPriority=2,t.callbackNode=null,2}function Xm(t,n){var a=t.callbackNode;if(Is()&&t.callbackNode!==a)return null;var s=Pe;return s=se(t,t===nn?s:0),s===0?null:(Dm(t,s,n),Wm(t,bt()),t.callbackNode!=null&&t.callbackNode===a?Xm.bind(null,t):null)}function qm(t,n){if(Is())return null;Dm(t,n,!0)}function M0(t){D0(function(){(mn&6)!==0?D(Bt,t):t()})}function ah(){return qr===0&&(qr=Fe()),qr}function jm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cs(""+t)}function Ym(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function E0(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var h=jm((u[An]||null).action),T=s.submitter;T&&(n=(n=T[An]||null)?jm(n.formAction):T.getAttribute("formAction"),n!==null&&(h=n,T=null));var L=new Rr("action","action",null,s,u);t.push({event:L,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(qr!==0){var W=T?Ym(u,T):new FormData(u);df(a,{pending:!0,data:W,method:u.method,action:h},null,W)}}else typeof h=="function"&&(L.preventDefault(),W=T?Ym(u,T):new FormData(u),df(a,{pending:!0,data:W,method:u.method,action:h},h,W))},currentTarget:u}]})}}for(var rh=0;rh<Hd.length;rh++){var sh=Hd[rh],T0=sh.toLowerCase(),b0=sh[0].toUpperCase()+sh.slice(1);ki(T0,"on"+b0)}ki(Pd,"onAnimationEnd"),ki(zd,"onAnimationIteration"),ki(Bd,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(V_,"onTransitionRun"),ki(k_,"onTransitionStart"),ki(W_,"onTransitionCancel"),ki(Fd,"onTransitionEnd"),Re("onMouseEnter",["mouseout","mouseover"]),Re("onMouseLeave",["mouseout","mouseover"]),Re("onPointerEnter",["pointerout","pointerover"]),Re("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function Zm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var h=void 0;if(n)for(var T=s.length-1;0<=T;T--){var L=s[T],W=L.instance,et=L.currentTarget;if(L=L.listener,W!==h&&u.isPropagationStopped())break t;h=L,u.currentTarget=et;try{h(u)}catch(Mt){ou(Mt)}u.currentTarget=null,h=W}else for(T=0;T<s.length;T++){if(L=s[T],W=L.instance,et=L.currentTarget,L=L.listener,W!==h&&u.isPropagationStopped())break t;h=L,u.currentTarget=et;try{h(u)}catch(Mt){ou(Mt)}u.currentTarget=null,h=W}}}}function Ne(t,n){var a=n[ua];a===void 0&&(a=n[ua]=new Set);var s=t+"__bubble";a.has(s)||(Km(n,t,2,!1),a.add(s))}function oh(t,n,a){var s=0;n&&(s|=4),Km(a,t,s,n)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function lh(t){if(!t[Mu]){t[Mu]=!0,_e.forEach(function(a){a!=="selectionchange"&&(A0.has(a)||oh(a,!1,t),oh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Mu]||(n[Mu]=!0,oh("selectionchange",!1,n))}}function Km(t,n,a,s){switch(yg(n)){case 2:var u=J0;break;case 8:u=$0;break;default:u=xh}a=u.bind(null,n,a,t),u=void 0,!fs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function uh(t,n,a,s,u){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var T=s.tag;if(T===3||T===4){var L=s.stateNode.containerInfo;if(L===u||L.nodeType===8&&L.parentNode===u)break;if(T===4)for(T=s.return;T!==null;){var W=T.tag;if((W===3||W===4)&&(W=T.stateNode.containerInfo,W===u||W.nodeType===8&&W.parentNode===u))return;T=T.return}for(;L!==null;){if(T=ct(L),T===null)return;if(W=T.tag,W===5||W===6||W===26||W===27){s=h=T;continue t}L=L.parentNode}}s=s.return}wl(function(){var et=h,Mt=Tr(a),Rt=[];t:{var dt=Id.get(t);if(dt!==void 0){var St=Rr,ne=t;switch(t){case"keypress":if(br(a)===0)break t;case"keydown":case"keyup":St=Cc;break;case"focusin":ne="focus",St=Ao;break;case"focusout":ne="blur",St=Ao;break;case"beforeblur":case"afterblur":St=Ao;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":St=Ul;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":St=ms;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":St=Lc;break;case Pd:case zd:case Bd:St=Ol;break;case Fd:St=Dc;break;case"scroll":case"scrollend":St=Ec;break;case"wheel":St=Oc;break;case"copy":case"cut":case"paste":St=zl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":St=Bl;break;case"toggle":case"beforetoggle":St=Il}var Me=(n&4)!==0,yn=!Me&&(t==="scroll"||t==="scrollend"),it=Me?dt!==null?dt+"Capture":null:dt;Me=[];for(var Q=et,lt;Q!==null;){var Et=Q;if(lt=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||lt===null||it===null||(Et=ha(Q,it),Et!=null&&Me.push(rl(Q,Et,lt))),yn)break;Q=Q.return}0<Me.length&&(dt=new St(dt,ne,null,a,Mt),Rt.push({event:dt,listeners:Me}))}}if((n&7)===0){t:{if(dt=t==="mouseover"||t==="pointerover",St=t==="mouseout"||t==="pointerout",dt&&a!==To&&(ne=a.relatedTarget||a.fromElement)&&(ct(ne)||ne[pi]))break t;if((St||dt)&&(dt=Mt.window===Mt?Mt:(dt=Mt.ownerDocument)?dt.defaultView||dt.parentWindow:window,St?(ne=a.relatedTarget||a.toElement,St=et,ne=ne?ct(ne):null,ne!==null&&(yn=$(ne),Me=ne.tag,ne!==yn||Me!==5&&Me!==27&&Me!==6)&&(ne=null)):(St=null,ne=et),St!==ne)){if(Me=Ul,Et="onMouseLeave",it="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&(Me=Bl,Et="onPointerLeave",it="onPointerEnter",Q="pointer"),yn=St==null?dt:kt(St),lt=ne==null?dt:kt(ne),dt=new Me(Et,Q+"leave",St,a,Mt),dt.target=yn,dt.relatedTarget=lt,Et=null,ct(Mt)===et&&(Me=new Me(it,Q+"enter",ne,a,Mt),Me.target=lt,Me.relatedTarget=yn,Et=Me),yn=Et,St&&ne)e:{for(Me=St,it=ne,Q=0,lt=Me;lt;lt=Gs(lt))Q++;for(lt=0,Et=it;Et;Et=Gs(Et))lt++;for(;0<Q-lt;)Me=Gs(Me),Q--;for(;0<lt-Q;)it=Gs(it),lt--;for(;Q--;){if(Me===it||it!==null&&Me===it.alternate)break e;Me=Gs(Me),it=Gs(it)}Me=null}else Me=null;St!==null&&Qm(Rt,dt,St,Me,!1),ne!==null&&yn!==null&&Qm(Rt,yn,ne,Me,!0)}}t:{if(dt=et?kt(et):window,St=dt.nodeName&&dt.nodeName.toLowerCase(),St==="select"||St==="input"&&dt.type==="file")var Qt=ii;else if(Gt(dt))if(Wn)Qt=_s;else{Qt=zc;var Ce=Pc}else St=dt.nodeName,!St||St.toLowerCase()!=="input"||dt.type!=="checkbox"&&dt.type!=="radio"?et&&fa(et.elementType)&&(Qt=ii):Qt=Bc;if(Qt&&(Qt=Qt(t,et))){ue(Rt,Qt,a,Mt);break t}Ce&&Ce(t,dt,et),t==="focusout"&&et&&dt.type==="number"&&et.memoizedProps.value!=null&&ls(dt,"number",dt.value)}switch(Ce=et?kt(et):window,t){case"focusin":(Gt(Ce)||Ce.contentEditable==="true")&&(ys=Ce,Ic=et,Lo=null);break;case"focusout":Lo=Ic=ys=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Nd(Rt,a,Mt);break;case"selectionchange":if(G_)break;case"keydown":case"keyup":Nd(Rt,a,Mt)}var ie;if(m)t:{switch(t){case"compositionstart":var de="onCompositionStart";break t;case"compositionend":de="onCompositionEnd";break t;case"compositionupdate":de="onCompositionUpdate";break t}de=void 0}else At?K(t,a)&&(de="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(F&&a.locale!=="ko"&&(At||de!=="onCompositionStart"?de==="onCompositionEnd"&&At&&(ie=Cl()):(li=Mt,ni="value"in li?li.value:li.textContent,At=!0)),Ce=Eu(et,de),0<Ce.length&&(de=new wo(de,t,null,a,Mt),Rt.push({event:de,listeners:Ce}),ie?de.data=ie:(ie=pt(a),ie!==null&&(de.data=ie)))),(ie=w?Pt(t,a):he(t,a))&&(de=Eu(et,"onBeforeInput"),0<de.length&&(Ce=new wo("onBeforeInput","beforeinput",null,a,Mt),Rt.push({event:Ce,listeners:de}),Ce.data=ie)),E0(Rt,t,et,a,Mt)}Zm(Rt,n)})}function rl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Eu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,h=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=ha(t,a),u!=null&&s.unshift(rl(t,u,h)),u=ha(t,n),u!=null&&s.push(rl(t,u,h))),t=t.return}return s}function Gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Qm(t,n,a,s,u){for(var h=n._reactName,T=[];a!==null&&a!==s;){var L=a,W=L.alternate,et=L.stateNode;if(L=L.tag,W!==null&&W===s)break;L!==5&&L!==26&&L!==27||et===null||(W=et,u?(et=ha(a,h),et!=null&&T.unshift(rl(a,et,W))):u||(et=ha(a,h),et!=null&&T.push(rl(a,et,W)))),a=a.return}T.length!==0&&t.push({event:n,listeners:T})}var R0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Jm(t){return(typeof t=="string"?t:""+t).replace(R0,`
`).replace(w0,"")}function $m(t,n){return n=Jm(n),Jm(t)===n}function Tu(){}function Ke(t,n,a,s,u,h){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||ca(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&ca(t,""+s);break;case"className":Ve(t,"class",s);break;case"tabIndex":Ve(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ve(t,a,s);break;case"style":Eo(t,s,h);break;case"data":if(n!=="object"){Ve(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=cs(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ke(t,n,"name",u.name,u,null),Ke(t,n,"formEncType",u.formEncType,u,null),Ke(t,n,"formMethod",u.formMethod,u,null),Ke(t,n,"formTarget",u.formTarget,u,null)):(Ke(t,n,"encType",u.encType,u,null),Ke(t,n,"method",u.method,u,null),Ke(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=cs(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Tu);break;case"onScroll":s!=null&&Ne("scroll",t);break;case"onScrollEnd":s!=null&&Ne("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=cs(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ne("beforetoggle",t),Ne("toggle",t),Hi(t,"popover",s);break;case"xlinkActuate":Rn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Rn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Rn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Rn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Rn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Rn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Rn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Rn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Rn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Hi(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xc.get(a)||a,Hi(t,a,s))}}function ch(t,n,a,s,u,h){switch(a){case"style":Eo(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?ca(t,s):(typeof s=="number"||typeof s=="bigint")&&ca(t,""+s);break;case"onScroll":s!=null&&Ne("scroll",t);break;case"onScrollEnd":s!=null&&Ne("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Tu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!me.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[An]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof s=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Hi(t,a,s)}}}function jn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",t),Ne("load",t);var s=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var T=a[h];if(T!=null)switch(h){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ke(t,n,h,T,a,null)}}u&&Ke(t,n,"srcSet",a.srcSet,a,null),s&&Ke(t,n,"src",a.src,a,null);return;case"input":Ne("invalid",t);var L=h=T=u=null,W=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var Mt=a[s];if(Mt!=null)switch(s){case"name":u=Mt;break;case"type":T=Mt;break;case"checked":W=Mt;break;case"defaultChecked":et=Mt;break;case"value":h=Mt;break;case"defaultValue":L=Mt;break;case"children":case"dangerouslySetInnerHTML":if(Mt!=null)throw Error(r(137,n));break;default:Ke(t,n,s,Mt,a,null)}}Ga(t,h,L,W,et,T,u,!1),cn(t);return;case"select":Ne("invalid",t),s=T=h=null;for(u in a)if(a.hasOwnProperty(u)&&(L=a[u],L!=null))switch(u){case"value":h=L;break;case"defaultValue":T=L;break;case"multiple":s=L;default:Ke(t,n,u,L,a,null)}n=h,a=T,t.multiple=!!s,n!=null?Va(t,!!s,n,!1):a!=null&&Va(t,!!s,a,!0);return;case"textarea":Ne("invalid",t),h=u=s=null;for(T in a)if(a.hasOwnProperty(T)&&(L=a[T],L!=null))switch(T){case"value":s=L;break;case"defaultValue":u=L;break;case"children":h=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(r(91));break;default:Ke(t,n,T,L,a,null)}xo(t,s,u,h),cn(t);return;case"option":for(W in a)if(a.hasOwnProperty(W)&&(s=a[W],s!=null))switch(W){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ke(t,n,W,s,a,null)}return;case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":Ne("load",t);break;case"video":case"audio":for(s=0;s<al.length;s++)Ne(al[s],t);break;case"image":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"embed":case"source":case"link":Ne("error",t),Ne("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ke(t,n,et,s,a,null)}return;default:if(fa(n)){for(Mt in a)a.hasOwnProperty(Mt)&&(s=a[Mt],s!==void 0&&ch(t,n,Mt,s,a,void 0));return}}for(L in a)a.hasOwnProperty(L)&&(s=a[L],s!=null&&Ke(t,n,L,s,a,null))}function C0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,T=null,L=null,W=null,et=null,Mt=null;for(St in a){var Rt=a[St];if(a.hasOwnProperty(St)&&Rt!=null)switch(St){case"checked":break;case"value":break;case"defaultValue":W=Rt;default:s.hasOwnProperty(St)||Ke(t,n,St,null,s,Rt)}}for(var dt in s){var St=s[dt];if(Rt=a[dt],s.hasOwnProperty(dt)&&(St!=null||Rt!=null))switch(dt){case"type":h=St;break;case"name":u=St;break;case"checked":et=St;break;case"defaultChecked":Mt=St;break;case"value":T=St;break;case"defaultValue":L=St;break;case"children":case"dangerouslySetInnerHTML":if(St!=null)throw Error(r(137,n));break;default:St!==Rt&&Ke(t,n,dt,St,s,Rt)}}ta(t,T,L,W,et,Mt,h,u);return;case"select":St=T=L=dt=null;for(h in a)if(W=a[h],a.hasOwnProperty(h)&&W!=null)switch(h){case"value":break;case"multiple":St=W;default:s.hasOwnProperty(h)||Ke(t,n,h,null,s,W)}for(u in s)if(h=s[u],W=a[u],s.hasOwnProperty(u)&&(h!=null||W!=null))switch(u){case"value":dt=h;break;case"defaultValue":L=h;break;case"multiple":T=h;default:h!==W&&Ke(t,n,u,h,s,W)}n=L,a=T,s=St,dt!=null?Va(t,!!a,dt,!1):!!s!=!!a&&(n!=null?Va(t,!!a,n,!0):Va(t,!!a,a?[]:"",!1));return;case"textarea":St=dt=null;for(L in a)if(u=a[L],a.hasOwnProperty(L)&&u!=null&&!s.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:Ke(t,n,L,null,s,u)}for(T in s)if(u=s[T],h=a[T],s.hasOwnProperty(T)&&(u!=null||h!=null))switch(T){case"value":dt=u;break;case"defaultValue":St=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Ke(t,n,T,u,s,h)}Al(t,dt,St);return;case"option":for(var ne in a)if(dt=a[ne],a.hasOwnProperty(ne)&&dt!=null&&!s.hasOwnProperty(ne))switch(ne){case"selected":t.selected=!1;break;default:Ke(t,n,ne,null,s,dt)}for(W in s)if(dt=s[W],St=a[W],s.hasOwnProperty(W)&&dt!==St&&(dt!=null||St!=null))switch(W){case"selected":t.selected=dt&&typeof dt!="function"&&typeof dt!="symbol";break;default:Ke(t,n,W,dt,s,St)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in a)dt=a[Me],a.hasOwnProperty(Me)&&dt!=null&&!s.hasOwnProperty(Me)&&Ke(t,n,Me,null,s,dt);for(et in s)if(dt=s[et],St=a[et],s.hasOwnProperty(et)&&dt!==St&&(dt!=null||St!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ke(t,n,et,dt,s,St)}return;default:if(fa(n)){for(var yn in a)dt=a[yn],a.hasOwnProperty(yn)&&dt!==void 0&&!s.hasOwnProperty(yn)&&ch(t,n,yn,void 0,s,dt);for(Mt in s)dt=s[Mt],St=a[Mt],!s.hasOwnProperty(Mt)||dt===St||dt===void 0&&St===void 0||ch(t,n,Mt,dt,s,St);return}}for(var it in a)dt=a[it],a.hasOwnProperty(it)&&dt!=null&&!s.hasOwnProperty(it)&&Ke(t,n,it,null,s,dt);for(Rt in s)dt=s[Rt],St=a[Rt],!s.hasOwnProperty(Rt)||dt===St||dt==null&&St==null||Ke(t,n,Rt,dt,s,St)}var fh=null,hh=null;function bu(t){return t.nodeType===9?t:t.ownerDocument}function tg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function eg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function dh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ph=null;function U0(){var t=window.event;return t&&t.type==="popstate"?t===ph?!1:(ph=t,!0):(ph=null,!1)}var ng=typeof setTimeout=="function"?setTimeout:void 0,L0=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,D0=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(t){return ig.resolve(null).then(t).catch(N0)}:ng;function N0(t){setTimeout(function(){throw t})}function mh(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(s===0){t.removeChild(u),dl(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=u}while(a);dl(n)}function gh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gh(a),vt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function O0(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ht])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=qi(t.nextSibling),t===null)break}return null}function P0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=qi(t.nextSibling),t===null))return null;return t}function qi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function ag(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function rg(t,n,a){switch(n=bu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var Pi=new Map,sg=new Set;function Au(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var wa=at.d;at.d={f:z0,r:B0,D:F0,C:I0,L:H0,m:G0,X:k0,S:V0,M:W0};function z0(){var t=wa.f(),n=_u();return t||n}function B0(t){var n=Nt(t);n!==null&&n.tag===5&&n.type==="form"?Np(n):wa.r(t)}var Vs=typeof document>"u"?null:document;function og(t,n,a){var s=Vs;if(s&&typeof n=="string"&&n){var u=wn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),sg.has(u)||(sg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),jn(n,"link",t),jt(n),s.head.appendChild(n)))}}function F0(t){wa.D(t),og("dns-prefetch",t,null)}function I0(t,n){wa.C(t,n),og("preconnect",t,n)}function H0(t,n,a){wa.L(t,n,a);var s=Vs;if(s&&t&&n){var u='link[rel="preload"][as="'+wn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+wn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+wn(a.imageSizes)+'"]')):u+='[href="'+wn(t)+'"]';var h=u;switch(n){case"style":h=ks(t);break;case"script":h=Ws(t)}Pi.has(h)||(t=A({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Pi.set(h,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(sl(h))||n==="script"&&s.querySelector(ol(h))||(n=s.createElement("link"),jn(n,"link",t),jt(n),s.head.appendChild(n)))}}function G0(t,n){wa.m(t,n);var a=Vs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+wn(s)+'"][href="'+wn(t)+'"]',h=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ws(t)}if(!Pi.has(h)&&(t=A({rel:"modulepreload",href:t},n),Pi.set(h,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ol(h)))return}s=a.createElement("link"),jn(s,"link",t),jt(s),a.head.appendChild(s)}}}function V0(t,n,a){wa.S(t,n,a);var s=Vs;if(s&&t){var u=$t(s).hoistableStyles,h=ks(t);n=n||"default";var T=u.get(h);if(!T){var L={loading:0,preload:null};if(T=s.querySelector(sl(h)))L.loading=5;else{t=A({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Pi.get(h))&&vh(t,a);var W=T=s.createElement("link");jt(W),jn(W,"link",t),W._p=new Promise(function(et,Mt){W.onload=et,W.onerror=Mt}),W.addEventListener("load",function(){L.loading|=1}),W.addEventListener("error",function(){L.loading|=2}),L.loading|=4,Ru(T,n,s)}T={type:"stylesheet",instance:T,count:1,state:L},u.set(h,T)}}}function k0(t,n){wa.X(t,n);var a=Vs;if(a&&t){var s=$t(a).hoistableScripts,u=Ws(t),h=s.get(u);h||(h=a.querySelector(ol(u)),h||(t=A({src:t,async:!0},n),(n=Pi.get(u))&&_h(t,n),h=a.createElement("script"),jt(h),jn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function W0(t,n){wa.M(t,n);var a=Vs;if(a&&t){var s=$t(a).hoistableScripts,u=Ws(t),h=s.get(u);h||(h=a.querySelector(ol(u)),h||(t=A({src:t,async:!0,type:"module"},n),(n=Pi.get(u))&&_h(t,n),h=a.createElement("script"),jt(h),jn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function lg(t,n,a,s){var u=(u=Se.current)?Au(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ks(a.href),a=$t(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ks(a.href);var h=$t(u).hoistableStyles,T=h.get(t);if(T||(u=u.ownerDocument||u,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,T),(h=u.querySelector(sl(t)))&&!h._p&&(T.instance=h,T.state.loading=5),Pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Pi.set(t,a),h||X0(u,t,a,T.state))),n&&s===null)throw Error(r(528,""));return T}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ws(a),a=$t(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ks(t){return'href="'+wn(t)+'"'}function sl(t){return'link[rel="stylesheet"]['+t+"]"}function ug(t){return A({},t,{"data-precedence":t.precedence,precedence:null})}function X0(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),jn(n,"link",a),jt(n),t.head.appendChild(n))}function Ws(t){return'[src="'+wn(t)+'"]'}function ol(t){return"script[async]"+t}function cg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+wn(a.href)+'"]');if(s)return n.instance=s,jt(s),s;var u=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),jt(s),jn(s,"style",u),Ru(s,a.precedence,t),n.instance=s;case"stylesheet":u=ks(a.href);var h=t.querySelector(sl(u));if(h)return n.state.loading|=4,n.instance=h,jt(h),h;s=ug(a),(u=Pi.get(u))&&vh(s,u),h=(t.ownerDocument||t).createElement("link"),jt(h);var T=h;return T._p=new Promise(function(L,W){T.onload=L,T.onerror=W}),jn(h,"link",s),n.state.loading|=4,Ru(h,a.precedence,t),n.instance=h;case"script":return h=Ws(a.src),(u=t.querySelector(ol(h)))?(n.instance=u,jt(u),u):(s=a,(u=Pi.get(h))&&(s=A({},a),_h(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),jt(u),jn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ru(s,a.precedence,t));return n.instance}function Ru(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,h=u,T=0;T<s.length;T++){var L=s[T];if(L.dataset.precedence===n)h=L;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function vh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var wu=null;function fg(t,n,a){if(wu===null){var s=new Map,u=wu=new Map;u.set(a,s)}else u=wu,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[ht]||h[fn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var T=h.getAttribute(n)||"";T=t+T;var L=s.get(T);L?L.push(h):s.set(T,[h])}}return s}function hg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function q0(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function dg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ll=null;function j0(){}function Y0(t,n,a){if(ll===null)throw Error(r(475));var s=ll;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ks(a.href),h=t.querySelector(sl(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Cu.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=h,jt(h);return}h=t.ownerDocument||t,a=ug(a),(u=Pi.get(u))&&vh(a,u),h=h.createElement("link"),jt(h);var T=h;T._p=new Promise(function(L,W){T.onload=L,T.onerror=W}),jn(h,"link",a),n.instance=h}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Cu.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Z0(){if(ll===null)throw Error(r(475));var t=ll;return t.stylesheets&&t.count===0&&yh(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&yh(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Cu(){if(this.count--,this.count===0){if(this.stylesheets)yh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uu=null;function yh(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uu=new Map,n.forEach(K0,t),Uu=null,Cu.call(t))}function K0(t,n){if(!(n.state.loading&4)){var a=Uu.get(t);if(a)var s=a.get(null);else{a=new Map,Uu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var T=u[h];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(a.set(T.dataset.precedence,T),s=T)}s&&a.set(null,s)}u=n.instance,T=u.getAttribute("data-precedence"),h=a.get(T)||s,h===s&&a.set(null,u),a.set(T,u),this.count++,s=Cu.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ul={$$typeof:b,Provider:null,Consumer:null,_currentValue:Tt,_currentValue2:Tt,_threadCount:0};function Q0(t,n,a,s,u,h,T,L){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=on(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=on(0),this.hiddenUpdates=on(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.incompleteTransitions=new Map}function pg(t,n,a,s,u,h,T,L,W,et,Mt,Rt){return t=new Q0(t,n,a,T,L,W,et,Rt),n=1,h===!0&&(n|=24),h=Ni(3,null,null,n),t.current=h,h.stateNode=t,n=Kc(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:n},Lf(h),t}function mg(t){return t?(t=Ms,t):Ms}function gg(t,n,a,s,u,h){u=mg(u),s.context===null?s.context=u:s.pendingContext=u,s=$a(n),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=tr(t,s,n),a!==null&&(ri(a,t,n),qo(a,t,n))}function vg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Sh(t,n){vg(t,n),(t=t.alternate)&&vg(t,n)}function _g(t){if(t.tag===13){var n=qa(t,67108864);n!==null&&ri(n,t,67108864),Sh(t,67108864)}}var Lu=!0;function J0(t,n,a,s){var u=U.T;U.T=null;var h=at.p;try{at.p=2,xh(t,n,a,s)}finally{at.p=h,U.T=u}}function $0(t,n,a,s){var u=U.T;U.T=null;var h=at.p;try{at.p=8,xh(t,n,a,s)}finally{at.p=h,U.T=u}}function xh(t,n,a,s){if(Lu){var u=Mh(s);if(u===null)uh(t,n,s,Du,a),Sg(t,s);else if(ey(u,t,n,a,s))s.stopPropagation();else if(Sg(t,s),n&4&&-1<ty.indexOf(t)){for(;u!==null;){var h=Nt(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var T=Ot(h.pendingLanes);if(T!==0){var L=h;for(L.pendingLanes|=2,L.entangledLanes|=2;T;){var W=1<<31-ve(T);L.entanglements[1]|=W,T&=~W}sa(h),(mn&6)===0&&(mu=bt()+500,il(0))}}break;case 13:L=qa(h,2),L!==null&&ri(L,h,2),_u(),Sh(h,2)}if(h=Mh(s),h===null&&uh(t,n,s,Du,a),h===u)break;u=h}u!==null&&s.stopPropagation()}else uh(t,n,s,null,a)}}function Mh(t){return t=Tr(t),Eh(t)}var Du=null;function Eh(t){if(Du=null,t=ct(t),t!==null){var n=$(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=ut(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Du=t,null}function yg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(te()){case Bt:return 2;case qt:return 8;case re:case xe:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Th=!1,or=null,lr=null,ur=null,cl=new Map,fl=new Map,cr=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sg(t,n){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(n.pointerId)}}function hl(t,n,a,s,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Nt(n),n!==null&&_g(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ey(t,n,a,s,u){switch(n){case"focusin":return or=hl(or,t,n,a,s,u),!0;case"dragenter":return lr=hl(lr,t,n,a,s,u),!0;case"mouseover":return ur=hl(ur,t,n,a,s,u),!0;case"pointerover":var h=u.pointerId;return cl.set(h,hl(cl.get(h)||null,t,n,a,s,u)),!0;case"gotpointercapture":return h=u.pointerId,fl.set(h,hl(fl.get(h)||null,t,n,a,s,u)),!0}return!1}function xg(t){var n=ct(t.target);if(n!==null){var a=$(n);if(a!==null){if(n=a.tag,n===13){if(n=ut(a),n!==null){t.blockedOn=n,tn(t.priority,function(){if(a.tag===13){var s=Si(),u=qa(a,s);u!==null&&ri(u,a,s),Sh(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Mh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);To=s,a.target.dispatchEvent(s),To=null}else return n=Nt(a),n!==null&&_g(n),t.blockedOn=a,!1;n.shift()}return!0}function Mg(t,n,a){Nu(t)&&a.delete(n)}function ny(){Th=!1,or!==null&&Nu(or)&&(or=null),lr!==null&&Nu(lr)&&(lr=null),ur!==null&&Nu(ur)&&(ur=null),cl.forEach(Mg),fl.forEach(Mg)}function Ou(t,n){t.blockedOn===n&&(t.blockedOn=null,Th||(Th=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ny)))}var Pu=null;function Eg(t){Pu!==t&&(Pu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Pu===t&&(Pu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Eh(s||a)===null)continue;break}var h=Nt(a);h!==null&&(t.splice(n,3),n-=3,df(h,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function dl(t){function n(W){return Ou(W,t)}or!==null&&Ou(or,t),lr!==null&&Ou(lr,t),ur!==null&&Ou(ur,t),cl.forEach(n),fl.forEach(n);for(var a=0;a<cr.length;a++){var s=cr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)xg(a),a.blockedOn===null&&cr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],h=a[s+1],T=u[An]||null;if(typeof h=="function")T||Eg(a);else if(T){var L=null;if(h&&h.hasAttribute("formAction")){if(u=h,T=h[An]||null)L=T.formAction;else if(Eh(u)!==null)continue}else L=T.action;typeof L=="function"?a[s+1]=L:(a.splice(s,3),s-=3),Eg(a)}}}function bh(t){this._internalRoot=t}zu.prototype.render=bh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Si();gg(a,s,t,n,null,null)},zu.prototype.unmount=bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Is(),gg(t.current,2,null,t,null,null),_u(),n[pi]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var n=$i();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cr.length&&n!==0&&n<cr[a].priority;a++);cr.splice(a,0,t),a===0&&xg(t)}};var Tg=e.version;if(Tg!=="19.0.0")throw Error(r(527,Tg,"19.0.0"));at.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=nt(n),t=t!==null?gt(t):null,t=t===null?null:t.stateNode,t};var iy={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:U,findFiberByHostInstance:ct,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{ae=Bu.inject(iy),Xt=Bu}catch{}}return ml.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Gp,h=Vp,T=kp,L=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(L=n.unstable_transitionCallbacks)),n=pg(t,1,!1,null,null,a,s,u,h,T,L,null),t[pi]=n.current,lh(t.nodeType===8?t.parentNode:t),new bh(n)},ml.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",h=Gp,T=Vp,L=kp,W=null,et=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(T=a.onCaughtError),a.onRecoverableError!==void 0&&(L=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(W=a.unstable_transitionCallbacks),a.formState!==void 0&&(et=a.formState)),n=pg(t,1,!0,n,a??null,s,u,h,T,L,W,et),n.context=mg(null),a=n.current,s=Si(),u=$a(s),u.callback=null,tr(a,u,s),n.current.lanes=s,Oe(n,s),sa(n),t[pi]=n.current,lh(t),new zu(n)},ml.version="19.0.0",ml}var Og;function py(){if(Og)return wh.exports;Og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),wh.exports=dy(),wh.exports}var my=py(),Dh={},Pg;function gy(){return Pg||(Pg=1,(function(){var o;function e(c){var m=0;return function(){return m<c.length?{done:!1,value:c[m++]}:{done:!0}}}var i=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function r(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof uc=="object"&&uc];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var l=r(this);function f(c,m){if(m)t:{var y=l;c=c.split(".");for(var w=0;w<c.length-1;w++){var F=c[w];if(!(F in y))break t;y=y[F]}c=c[c.length-1],w=y[c],m=m(w),m!=w&&m!=null&&i(y,c,{configurable:!0,writable:!0,value:m})}}f("Symbol",function(c){function m(V){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new y(w+(V||"")+"_"+F++,V)}function y(V,G){this.h=V,i(this,"description",{configurable:!0,writable:!0,value:G})}if(c)return c;y.prototype.toString=function(){return this.h};var w="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",F=0;return m}),f("Symbol.iterator",function(c){if(c)return c;c=Symbol("Symbol.iterator");for(var m="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),y=0;y<m.length;y++){var w=l[m[y]];typeof w=="function"&&typeof w.prototype[c]!="function"&&i(w.prototype,c,{configurable:!0,writable:!0,value:function(){return p(e(this))}})}return c});function p(c){return c={next:c},c[Symbol.iterator]=function(){return this},c}function d(c){var m=typeof Symbol<"u"&&Symbol.iterator&&c[Symbol.iterator];return m?m.call(c):{next:e(c)}}function g(c){if(!(c instanceof Array)){c=d(c);for(var m,y=[];!(m=c.next()).done;)y.push(m.value);c=y}return c}var v=typeof Object.assign=="function"?Object.assign:function(c,m){for(var y=1;y<arguments.length;y++){var w=arguments[y];if(w)for(var F in w)Object.prototype.hasOwnProperty.call(w,F)&&(c[F]=w[F])}return c};f("Object.assign",function(c){return c||v});var S=typeof Object.create=="function"?Object.create:function(c){function m(){}return m.prototype=c,new m},E;if(typeof Object.setPrototypeOf=="function")E=Object.setPrototypeOf;else{var M;t:{var b={a:!0},R={};try{R.__proto__=b,M=R.a;break t}catch{}M=!1}E=M?function(c,m){if(c.__proto__=m,c.__proto__!==m)throw new TypeError(c+" is not extensible");return c}:null}var C=E;function x(c,m){if(c.prototype=S(m.prototype),c.prototype.constructor=c,C)C(c,m);else for(var y in m)if(y!="prototype")if(Object.defineProperties){var w=Object.getOwnPropertyDescriptor(m,y);w&&Object.defineProperty(c,y,w)}else c[y]=m[y];c.ya=m.prototype}function _(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function H(c){if(c.m)throw new TypeError("Generator is already running");c.m=!0}_.prototype.u=function(c){this.i=c};function O(c,m){c.l={ma:m,na:!0},c.h=c.s||c.v}_.prototype.return=function(c){this.l={return:c},this.h=this.v};function B(c,m,y){return c.h=y,{value:m}}function Z(c){this.h=new _,this.i=c}function q(c,m){H(c.h);var y=c.h.j;return y?X(c,"return"in y?y.return:function(w){return{value:w,done:!0}},m,c.h.return):(c.h.return(m),xt(c))}function X(c,m,y,w){try{var F=m.call(c.h.j,y);if(!(F instanceof Object))throw new TypeError("Iterator result "+F+" is not an object");if(!F.done)return c.h.m=!1,F;var V=F.value}catch(G){return c.h.j=null,O(c.h,G),xt(c)}return c.h.j=null,w.call(c.h,V),xt(c)}function xt(c){for(;c.h.h;)try{var m=c.i(c.h);if(m)return c.h.m=!1,{value:m.value,done:!1}}catch(y){c.h.i=void 0,O(c.h,y)}if(c.h.m=!1,c.h.l){if(m=c.h.l,c.h.l=null,m.na)throw m.ma;return{value:m.return,done:!0}}return{value:void 0,done:!0}}function U(c){this.next=function(m){return H(c.h),c.h.j?m=X(c,c.h.j.next,m,c.h.u):(c.h.u(m),m=xt(c)),m},this.throw=function(m){return H(c.h),c.h.j?m=X(c,c.h.j.throw,m,c.h.u):(O(c.h,m),m=xt(c)),m},this.return=function(m){return q(c,m)},this[Symbol.iterator]=function(){return this}}function A(c){function m(w){return c.next(w)}function y(w){return c.throw(w)}return new Promise(function(w,F){function V(G){G.done?w(G.value):Promise.resolve(G.value).then(m,y).then(V,F)}V(c.next())})}function k(c){return A(new U(new Z(c)))}f("Promise",function(c){function m(G){this.i=0,this.j=void 0,this.h=[],this.u=!1;var K=this.l();try{G(K.resolve,K.reject)}catch(pt){K.reject(pt)}}function y(){this.h=null}function w(G){return G instanceof m?G:new m(function(K){K(G)})}if(c)return c;y.prototype.i=function(G){if(this.h==null){this.h=[];var K=this;this.j(function(){K.m()})}this.h.push(G)};var F=l.setTimeout;y.prototype.j=function(G){F(G,0)},y.prototype.m=function(){for(;this.h&&this.h.length;){var G=this.h;this.h=[];for(var K=0;K<G.length;++K){var pt=G[K];G[K]=null;try{pt()}catch(At){this.l(At)}}}this.h=null},y.prototype.l=function(G){this.j(function(){throw G})},m.prototype.l=function(){function G(At){return function(Pt){pt||(pt=!0,At.call(K,Pt))}}var K=this,pt=!1;return{resolve:G(this.I),reject:G(this.m)}},m.prototype.I=function(G){if(G===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(G instanceof m)this.L(G);else{t:switch(typeof G){case"object":var K=G!=null;break t;case"function":K=!0;break t;default:K=!1}K?this.F(G):this.s(G)}},m.prototype.F=function(G){var K=void 0;try{K=G.then}catch(pt){this.m(pt);return}typeof K=="function"?this.M(K,G):this.s(G)},m.prototype.m=function(G){this.v(2,G)},m.prototype.s=function(G){this.v(1,G)},m.prototype.v=function(G,K){if(this.i!=0)throw Error("Cannot settle("+G+", "+K+"): Promise already settled in state"+this.i);this.i=G,this.j=K,this.i===2&&this.K(),this.H()},m.prototype.K=function(){var G=this;F(function(){if(G.D()){var K=l.console;typeof K<"u"&&K.error(G.j)}},1)},m.prototype.D=function(){if(this.u)return!1;var G=l.CustomEvent,K=l.Event,pt=l.dispatchEvent;return typeof pt>"u"?!0:(typeof G=="function"?G=new G("unhandledrejection",{cancelable:!0}):typeof K=="function"?G=new K("unhandledrejection",{cancelable:!0}):(G=l.document.createEvent("CustomEvent"),G.initCustomEvent("unhandledrejection",!1,!0,G)),G.promise=this,G.reason=this.j,pt(G))},m.prototype.H=function(){if(this.h!=null){for(var G=0;G<this.h.length;++G)V.i(this.h[G]);this.h=null}};var V=new y;return m.prototype.L=function(G){var K=this.l();G.T(K.resolve,K.reject)},m.prototype.M=function(G,K){var pt=this.l();try{G.call(K,pt.resolve,pt.reject)}catch(At){pt.reject(At)}},m.prototype.then=function(G,K){function pt(ee,Gt){return typeof ee=="function"?function(ue){try{At(ee(ue))}catch(ye){Pt(ye)}}:Gt}var At,Pt,he=new m(function(ee,Gt){At=ee,Pt=Gt});return this.T(pt(G,At),pt(K,Pt)),he},m.prototype.catch=function(G){return this.then(void 0,G)},m.prototype.T=function(G,K){function pt(){switch(At.i){case 1:G(At.j);break;case 2:K(At.j);break;default:throw Error("Unexpected state: "+At.i)}}var At=this;this.h==null?V.i(pt):this.h.push(pt),this.u=!0},m.resolve=w,m.reject=function(G){return new m(function(K,pt){pt(G)})},m.race=function(G){return new m(function(K,pt){for(var At=d(G),Pt=At.next();!Pt.done;Pt=At.next())w(Pt.value).T(K,pt)})},m.all=function(G){var K=d(G),pt=K.next();return pt.done?w([]):new m(function(At,Pt){function he(ue){return function(ye){ee[ue]=ye,Gt--,Gt==0&&At(ee)}}var ee=[],Gt=0;do ee.push(void 0),Gt++,w(pt.value).T(he(ee.length-1),Pt),pt=K.next();while(!pt.done)})},m});function ot(c,m){c instanceof String&&(c+="");var y=0,w=!1,F={next:function(){if(!w&&y<c.length){var V=y++;return{value:m(V,c[V]),done:!1}}return w=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}f("Array.prototype.keys",function(c){return c||function(){return ot(this,function(m){return m})}}),f("Array.prototype.fill",function(c){return c||function(m,y,w){var F=this.length||0;for(0>y&&(y=Math.max(0,F+y)),(w==null||w>F)&&(w=F),w=Number(w),0>w&&(w=Math.max(0,F+w)),y=Number(y||0);y<w;y++)this[y]=m;return this}});function _t(c){return c||Array.prototype.fill}f("Int8Array.prototype.fill",_t),f("Uint8Array.prototype.fill",_t),f("Uint8ClampedArray.prototype.fill",_t),f("Int16Array.prototype.fill",_t),f("Uint16Array.prototype.fill",_t),f("Int32Array.prototype.fill",_t),f("Uint32Array.prototype.fill",_t),f("Float32Array.prototype.fill",_t),f("Float64Array.prototype.fill",_t),f("Object.is",function(c){return c||function(m,y){return m===y?m!==0||1/m===1/y:m!==m&&y!==y}}),f("Array.prototype.includes",function(c){return c||function(m,y){var w=this;w instanceof String&&(w=String(w));var F=w.length;for(y=y||0,0>y&&(y=Math.max(y+F,0));y<F;y++){var V=w[y];if(V===m||Object.is(V,m))return!0}return!1}}),f("String.prototype.includes",function(c){return c||function(m,y){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(m instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(m,y||0)!==-1}});var j=this||self;function rt(c,m){c=c.split(".");var y=j;c[0]in y||typeof y.execScript>"u"||y.execScript("var "+c[0]);for(var w;c.length&&(w=c.shift());)c.length||m===void 0?y[w]&&y[w]!==Object.prototype[w]?y=y[w]:y=y[w]={}:y[w]=m}function I(c){var m;t:{if((m=j.navigator)&&(m=m.userAgent))break t;m=""}return m.indexOf(c)!=-1}var J=Array.prototype.map?function(c,m){return Array.prototype.map.call(c,m,void 0)}:function(c,m){for(var y=c.length,w=Array(y),F=typeof c=="string"?c.split(""):c,V=0;V<y;V++)V in F&&(w[V]=m.call(void 0,F[V],V,c));return w},$={},ut=null;function N(c){var m=c.length,y=3*m/4;y%3?y=Math.floor(y):"=.".indexOf(c[m-1])!=-1&&(y="=.".indexOf(c[m-2])!=-1?y-2:y-1);var w=new Uint8Array(y),F=0;return nt(c,function(V){w[F++]=V}),F!==y?w.subarray(0,F):w}function nt(c,m){function y(pt){for(;w<c.length;){var At=c.charAt(w++),Pt=ut[At];if(Pt!=null)return Pt;if(!/^[\s\xa0]*$/.test(At))throw Error("Unknown base64 encoding at char: "+At)}return pt}gt();for(var w=0;;){var F=y(-1),V=y(0),G=y(64),K=y(64);if(K===64&&F===-1)break;m(F<<2|V>>4),G!=64&&(m(V<<4&240|G>>2),K!=64&&m(G<<6&192|K))}}function gt(){if(!ut){ut={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=["+/=","+/","-_=","-_.","-_"],y=0;5>y;y++){var w=c.concat(m[y].split(""));$[y]=w;for(var F=0;F<w.length;F++){var V=w[F];ut[V]===void 0&&(ut[V]=F)}}}}var tt=typeof Uint8Array<"u",at=!(I("Trident")||I("MSIE"))&&typeof j.btoa=="function";function Tt(c){if(!at){var m;m===void 0&&(m=0),gt(),m=$[m];for(var y=Array(Math.floor(c.length/3)),w=m[64]||"",F=0,V=0;F<c.length-2;F+=3){var G=c[F],K=c[F+1],pt=c[F+2],At=m[G>>2];G=m[(G&3)<<4|K>>4],K=m[(K&15)<<2|pt>>6],pt=m[pt&63],y[V++]=At+G+K+pt}switch(At=0,pt=w,c.length-F){case 2:At=c[F+1],pt=m[(At&15)<<2]||w;case 1:c=c[F],y[V]=m[c>>2]+m[(c&3)<<4|At>>4]+pt+w}return y.join("")}for(m="";10240<c.length;)m+=String.fromCharCode.apply(null,c.subarray(0,10240)),c=c.subarray(10240);return m+=String.fromCharCode.apply(null,c),btoa(m)}var Ut=RegExp("[-_.]","g");function Vt(c){switch(c){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function It(c){if(!at)return N(c);Ut.test(c)&&(c=c.replace(Ut,Vt)),c=atob(c);for(var m=new Uint8Array(c.length),y=0;y<c.length;y++)m[y]=c.charCodeAt(y);return m}var Kt;function Ht(){return Kt||(Kt=new Uint8Array(0))}var ce={},ft=typeof Uint8Array.prototype.slice=="function",Se=0,Wt=0;function fe(c){var m=0>c;c=Math.abs(c);var y=c>>>0;c=Math.floor((c-y)/4294967296),m&&(y=d(We(y,c)),m=y.next().value,c=y.next().value,y=m),Se=y>>>0,Wt=c>>>0}var Zt=typeof BigInt=="function";function We(c,m){return m=~m,c?c=~c+1:m+=1,[c,m]}function ge(c,m){this.i=c>>>0,this.h=m>>>0}function z(c){if(!c)return D||(D=new ge(0,0));if(!/^-?\d+$/.test(c))return null;if(16>c.length)fe(Number(c));else if(Zt)c=BigInt(c),Se=Number(c&BigInt(4294967295))>>>0,Wt=Number(c>>BigInt(32)&BigInt(4294967295));else{var m=+(c[0]==="-");Wt=Se=0;for(var y=c.length,w=m,F=(y-m)%6+m;F<=y;w=F,F+=6)w=Number(c.slice(w,F)),Wt*=1e6,Se=1e6*Se+w,4294967296<=Se&&(Wt+=Se/4294967296|0,Se%=4294967296);m&&(m=d(We(Se,Wt)),c=m.next().value,m=m.next().value,Se=c,Wt=m)}return new ge(Se,Wt)}var D;function mt(c,m){return Error("Invalid wire type: "+c+" (at position "+m+")")}function Lt(){return Error("Failed to read varint, encoding is invalid.")}function Ct(c,m){return Error("Tried to read past the end of the data "+m+" > "+c)}function bt(){throw Error("Invalid UTF8")}function te(c,m){return m=String.fromCharCode.apply(null,m),c==null?m:c+m}var Bt=void 0,qt,re=typeof TextDecoder<"u",xe,wt=typeof TextEncoder<"u",ze;function Ee(c){if(c!==ce)throw Error("illegal external caller")}function ae(c,m){if(Ee(m),this.V=c,c!=null&&c.length===0)throw Error("ByteString should be constructed with non-empty values")}function Xt(){return ze||(ze=new ae(null,ce))}function Yt(c){Ee(ce);var m=c.V;return m=m==null||tt&&m!=null&&m instanceof Uint8Array?m:typeof m=="string"?It(m):null,m==null?m:c.V=m}function le(c){if(typeof c=="string")return{buffer:It(c),C:!1};if(Array.isArray(c))return{buffer:new Uint8Array(c),C:!1};if(c.constructor===Uint8Array)return{buffer:c,C:!1};if(c.constructor===ArrayBuffer)return{buffer:new Uint8Array(c),C:!1};if(c.constructor===ae)return{buffer:Yt(c)||Ht(),C:!0};if(c instanceof Uint8Array)return{buffer:new Uint8Array(c.buffer,c.byteOffset,c.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function ve(c,m){this.i=null,this.m=!1,this.h=this.j=this.l=0,je(this,c,m)}function je(c,m,y){y=y===void 0?{}:y,c.S=y.S===void 0?!1:y.S,m&&(m=le(m),c.i=m.buffer,c.m=m.C,c.l=0,c.j=c.i.length,c.h=c.l)}ve.prototype.reset=function(){this.h=this.l};function pe(c,m){if(c.h=m,m>c.j)throw Ct(c.j,m)}function Dt(c){var m=c.i,y=c.h,w=m[y++],F=w&127;if(w&128&&(w=m[y++],F|=(w&127)<<7,w&128&&(w=m[y++],F|=(w&127)<<14,w&128&&(w=m[y++],F|=(w&127)<<21,w&128&&(w=m[y++],F|=w<<28,w&128&&m[y++]&128&&m[y++]&128&&m[y++]&128&&m[y++]&128&&m[y++]&128)))))throw Lt();return pe(c,y),F}function Y(c,m){if(0>m)throw Error("Tried to read a negative byte length: "+m);var y=c.h,w=y+m;if(w>c.j)throw Ct(m,c.j-y);return c.h=w,y}var zt=[];function Ot(){this.h=[]}Ot.prototype.length=function(){return this.h.length},Ot.prototype.end=function(){var c=this.h;return this.h=[],c};function se(c,m,y){for(;0<y||127<m;)c.h.push(m&127|128),m=(m>>>7|y<<25)>>>0,y>>>=7;c.h.push(m)}function Jt(c,m){for(;127<m;)c.h.push(m&127|128),m>>>=7;c.h.push(m)}function Be(c,m){if(zt.length){var y=zt.pop();je(y,c,m),c=y}else c=new ve(c,m);this.h=c,this.j=this.h.h,this.i=this.l=-1,this.setOptions(m)}Be.prototype.setOptions=function(c){c=c===void 0?{}:c,this.ca=c.ca===void 0?!1:c.ca},Be.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function Fe(c){var m=c.h;if(m.h==m.j)return!1;c.j=c.h.h;var y=Dt(c.h)>>>0;if(m=y>>>3,y&=7,!(0<=y&&5>=y))throw mt(y,c.j);if(1>m)throw Error("Invalid field number: "+m+" (at position "+c.j+")");return c.l=m,c.i=y,!0}function $e(c){switch(c.i){case 0:if(c.i!=0)$e(c);else t:{c=c.h;for(var m=c.h,y=m+10,w=c.i;m<y;)if((w[m++]&128)===0){pe(c,m);break t}throw Lt()}break;case 1:c=c.h,pe(c,c.h+8);break;case 2:c.i!=2?$e(c):(m=Dt(c.h)>>>0,c=c.h,pe(c,c.h+m));break;case 5:c=c.h,pe(c,c.h+4);break;case 3:m=c.l;do{if(!Fe(c))throw Error("Unmatched start-group tag: stream EOF");if(c.i==4){if(c.l!=m)throw Error("Unmatched end-group tag");break}$e(c)}while(!0);break;default:throw mt(c.i,c.j)}}var on=[];function Oe(){this.j=[],this.i=0,this.h=new Ot}function ln(c,m){m.length!==0&&(c.j.push(m),c.i+=m.length)}function ti(c,m){if(m=m.R){ln(c,c.h.end());for(var y=0;y<m.length;y++)ln(c,Yt(m[y])||Ht())}}var ei=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Ti(c,m){return ei?c[ei]|=m:c.A!==void 0?c.A|=m:(Object.defineProperties(c,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}}),m)}function $i(c,m){ei?c[ei]&&(c[ei]&=~m):c.A!==void 0&&(c.A&=~m)}function tn(c){var m;return ei?m=c[ei]:m=c.A,m??0}function un(c,m){ei?c[ei]=m:c.A!==void 0?c.A=m:Object.defineProperties(c,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}})}function fn(c){return Ti(c,1),c}function An(c,m){un(m,(c|0)&-51)}function pi(c,m){un(m,(c|18)&-41)}var ua={};function Ia(c){return c!==null&&typeof c=="object"&&!Array.isArray(c)&&c.constructor===Object}var P,st=[];un(st,23),P=Object.freeze(st);function ht(c){if(tn(c.o)&2)throw Error("Cannot mutate an immutable Message")}function vt(c){var m=c.length;(m=m?c[m-1]:void 0)&&Ia(m)?m.g=1:(m={},c.push((m.g=1,m)))}function ct(c){var m=c.i+c.G;return c.B||(c.B=c.o[m]={})}function Nt(c,m){return m===-1?null:m>=c.i?c.B?c.B[m]:void 0:c.o[m+c.G]}function kt(c,m,y,w){ht(c),$t(c,m,y,w)}function $t(c,m,y,w){c.j&&(c.j=void 0),m>=c.i||w?ct(c)[m]=y:(c.o[m+c.G]=y,(c=c.B)&&m in c&&delete c[m])}function jt(c,m,y,w){var F=Nt(c,m);Array.isArray(F)||(F=P);var V=tn(F);if(V&1||fn(F),w)V&2||Ti(F,2),y&1||Object.freeze(F);else{w=!(y&2);var G=V&2;y&1||!G?w&&V&16&&!G&&$i(F,16):(F=fn(Array.prototype.slice.call(F)),$t(c,m,F))}return F}function _e(c,m){var y=Nt(c,m),w=y==null?y:typeof y=="number"||y==="NaN"||y==="Infinity"||y==="-Infinity"?Number(y):void 0;return w!=null&&w!==y&&$t(c,m,w),w}function me(c,m,y,w,F){c.h||(c.h={});var V=c.h[y],G=jt(c,y,3,F);if(!V){var K=G;V=[];var pt=!!(tn(c.o)&16);G=!!(tn(K)&2);var At=K;!F&&G&&(K=Array.prototype.slice.call(K));for(var Pt=G,he=0;he<K.length;he++){var ee=K[he],Gt=m,ue=!1;if(ue=ue===void 0?!1:ue,ee=Array.isArray(ee)?new Gt(ee):ue?new Gt:void 0,ee!==void 0){Gt=ee.o;var ye=ue=tn(Gt);G&&(ye|=2),pt&&(ye|=16),ye!=ue&&un(Gt,ye),Gt=ye,Pt=Pt||!!(2&Gt),V.push(ee)}}return c.h[y]=V,pt=tn(K),m=pt|33,m=Pt?m&-9:m|8,pt!=m&&(Pt=K,Object.isFrozen(Pt)&&(Pt=Array.prototype.slice.call(Pt)),un(Pt,m),K=Pt),At!==K&&$t(c,y,K),(F||w&&G)&&Ti(V,2),w&&Object.freeze(V),V}return F||(F=Object.isFrozen(V),w&&!F?Object.freeze(V):!w&&F&&(V=Array.prototype.slice.call(V),c.h[y]=V)),V}function oe(c,m,y){var w=!!(tn(c.o)&2);if(m=me(c,m,y,w,w),c=jt(c,y,3,w),!(w||tn(c)&8)){for(w=0;w<m.length;w++){if(y=m[w],tn(y.o)&2){var F=mi(y,!1);F.j=y}else F=y;y!==F&&(m[w]=F,c[w]=F.o)}Ti(c,8)}return m}function Re(c,m,y){if(y!=null&&typeof y!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof y+": "+y);kt(c,m,y)}function en(c,m,y,w,F){ht(c);var V=me(c,y,m,!1,!1);return y=w??new y,c=jt(c,m,2,!1),F!=null?(V.splice(F,0,y),c.splice(F,0,y.o)):(V.push(y),c.push(y.o)),y.C()&&$i(c,8),y}function rn(c,m){return c??m}function hn(c,m,y){return y=y===void 0?0:y,rn(_e(c,m),y)}var Ge;function Te(c){switch(typeof c){case"number":return isFinite(c)?c:String(c);case"object":if(c)if(Array.isArray(c)){if((tn(c)&128)!==0)return c=Array.prototype.slice.call(c),vt(c),c}else{if(tt&&c!=null&&c instanceof Uint8Array)return Tt(c);if(c instanceof ae){var m=c.V;return m==null?"":typeof m=="string"?m:c.V=Tt(m)}}}return c}function Hi(c,m,y,w){if(c!=null){if(Array.isArray(c))c=Ve(c,m,y,w!==void 0);else if(Ia(c)){var F={},V;for(V in c)F[V]=Hi(c[V],m,y,w);c=F}else c=m(c,w);return c}}function Ve(c,m,y,w){var F=tn(c);w=w?!!(F&16):void 0,c=Array.prototype.slice.call(c);for(var V=0;V<c.length;V++)c[V]=Hi(c[V],m,y,w);return y(F,c),c}function Rn(c){return c.ja===ua?c.toJSON():Te(c)}function Vn(c,m){c&128&&vt(m)}function Gi(c,m,y){if(y=y===void 0?pi:y,c!=null){if(tt&&c instanceof Uint8Array)return c.length?new ae(new Uint8Array(c),ce):Xt();if(Array.isArray(c)){var w=tn(c);return w&2?c:m&&!(w&32)&&(w&16||w===0)?(un(c,w|2),c):(c=Ve(c,Gi,w&4?pi:y,!0),m=tn(c),m&4&&m&2&&Object.freeze(c),c)}return c.ja===ua?cn(c):c}}function Ha(c,m,y,w,F,V,G){if(c=c.h&&c.h[y]){if(w=tn(c),w&2?w=c:(V=J(c,cn),pi(w,V),Object.freeze(V),w=V),ht(m),G=w==null?P:fn([]),w!=null){for(V=!!w.length,c=0;c<w.length;c++){var K=w[c];V=V&&!(tn(K.o)&2),G[c]=K.o}V=(V?8:0)|1,c=tn(G),(c&V)!==V&&(Object.isFrozen(G)&&(G=Array.prototype.slice.call(G)),un(G,c|V)),m.h||(m.h={}),m.h[y]=w}else m.h&&(m.h[y]=void 0);$t(m,y,G,F)}else kt(m,y,Gi(w,V,G),F)}function cn(c){return tn(c.o)&2||(c=mi(c,!0),Ti(c.o,2)),c}function mi(c,m){var y=c.o,w=[];Ti(w,16);var F=c.constructor.h;if(F&&w.push(F),F=c.B,F){w.length=y.length,w.fill(void 0,w.length,y.length);var V={};w[w.length-1]=V}(tn(y)&128)!==0&&vt(w),m=m||c.C()?pi:An,V=c.constructor,Ge=w,w=new V(w),Ge=void 0,c.R&&(w.R=c.R.slice()),V=!!(tn(y)&16);for(var G=F?y.length-1:y.length,K=0;K<G;K++)Ha(c,w,K-c.G,y[K],!1,V,m);if(F)for(var pt in F)Ha(c,w,+pt,F[pt],!0,V,m);return w}function dn(c,m,y){c==null&&(c=Ge),Ge=void 0;var w=this.constructor.i||0,F=0<w,V=this.constructor.h,G=!1;if(c==null){c=V?[V]:[];var K=48,pt=!0;F&&(w=0,K|=128),un(c,K)}else{if(!Array.isArray(c)||V&&V!==c[0])throw Error();var At=K=Ti(c,0);if((pt=(16&At)!==0)&&((G=(32&At)!==0)||(At|=32)),F){if(128&At)w=0;else if(0<c.length){var Pt=c[c.length-1];if(Ia(Pt)&&"g"in Pt){w=0,At|=128,delete Pt.g;var he=!0,ee;for(ee in Pt){he=!1;break}he&&c.pop()}}}else if(128&At)throw Error();K!==At&&un(c,At)}this.G=(V?0:-1)-w,this.h=void 0,this.o=c;t:{if(V=this.o.length,w=V-1,V&&(V=this.o[w],Ia(V))){this.B=V,this.i=w-this.G;break t}m!==void 0&&-1<m?(this.i=Math.max(m,w+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!F&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(y){m=pt&&!G&&!0,F=this.i;var Gt;for(pt=0;pt<y.length;pt++)G=y[pt],G<F?(G+=this.G,(w=c[G])?kn(w,m):c[G]=P):(Gt||(Gt=ct(this)),(w=Gt[G])?kn(w,m):Gt[G]=P)}}dn.prototype.toJSON=function(){return Ve(this.o,Rn,Vn)},dn.prototype.C=function(){return!!(tn(this.o)&2)};function kn(c,m){if(Array.isArray(c)){var y=tn(c),w=1;!m||y&2||(w|=16),(y&w)!==w&&un(c,y|w)}}dn.prototype.ja=ua,dn.prototype.toString=function(){return this.o.toString()};function wn(c,m,y){if(y){var w={},F;for(F in y){var V=y[F],G=V.qa;G||(w.J=V.wa||V.oa.W,V.ia?(w.aa=Mo(V.ia),G=function(K){return function(pt,At,Pt){return K.J(pt,At,Pt,K.aa)}}(w)):V.ka?(w.Z=Eo(V.da.P,V.ka),G=function(K){return function(pt,At,Pt){return K.J(pt,At,Pt,K.Z)}}(w)):G=w.J,V.qa=G),G(m,c,V.da),w={J:w.J,aa:w.aa,Z:w.Z}}}ti(m,c)}var ta=Symbol();function Ga(c,m,y){return c[ta]||(c[ta]=function(w,F){return m(w,F,y)})}function ls(c){var m=c[ta];if(!m){var y=ha(c);m=function(w,F){return fs(w,F,y)},c[ta]=m}return m}function Va(c){var m=c.ia;if(m)return ls(m);if(m=c.va)return Ga(c.da.P,m,c.ka)}function Al(c){var m=Va(c),y=c.da,w=c.oa.U;return m?function(F,V){return w(F,V,y,m)}:function(F,V){return w(F,V,y)}}function xo(c,m){var y=c[m];return typeof y=="function"&&y.length===0&&(y=y(),c[m]=y),Array.isArray(y)&&(bi in y||fa in y||0<y.length&&typeof y[0]=="function")?y:void 0}function ca(c,m,y,w,F,V){m.P=c[0];var G=1;if(c.length>G&&typeof c[G]!="number"){var K=c[G++];y(m,K)}for(;G<c.length;){y=c[G++];for(var pt=G+1;pt<c.length&&typeof c[pt]!="number";)pt++;switch(K=c[G++],pt-=G,pt){case 0:w(m,y,K);break;case 1:(pt=xo(c,G))?(G++,F(m,y,K,pt)):w(m,y,K,c[G++]);break;case 2:pt=G++,pt=xo(c,pt),F(m,y,K,pt,c[G++]);break;case 3:V(m,y,K,c[G++],c[G++],c[G++]);break;case 4:V(m,y,K,c[G++],c[G++],c[G++],c[G++]);break;default:throw Error("unexpected number of binary field arguments: "+pt)}}return m}var us=Symbol();function Mo(c){var m=c[us];if(!m){var y=Tr(c);m=function(w,F){return Wa(w,F,y)},c[us]=m}return m}function Eo(c,m){var y=c[us];return y||(y=function(w,F){return wn(w,F,m)},c[us]=y),y}var fa=Symbol();function xc(c,m){c.push(m)}function Mc(c,m,y){c.push(m,y.W)}function cs(c,m,y,w){var F=Mo(w),V=Tr(w).P,G=y.W;c.push(m,function(K,pt,At){return G(K,pt,At,V,F)})}function To(c,m,y,w,F,V){var G=Eo(w,V),K=y.W;c.push(m,function(pt,At,Pt){return K(pt,At,Pt,w,G)})}function Tr(c){var m=c[fa];return m||(m=ca(c,c[fa]=[],xc,Mc,cs,To),bi in c&&fa in c&&(c.length=0),m)}var bi=Symbol();function ka(c,m){c[0]=m}function Rl(c,m,y,w){var F=y.U;c[m]=w?function(V,G,K){return F(V,G,K,w)}:F}function bo(c,m,y,w,F){var V=y.U,G=ls(w),K=ha(w).P;c[m]=function(pt,At,Pt){return V(pt,At,Pt,K,G,F)}}function wl(c,m,y,w,F,V,G){var K=y.U,pt=Ga(w,F,V);c[m]=function(At,Pt,he){return K(At,Pt,he,w,pt,G)}}function ha(c){var m=c[bi];return m||(m=ca(c,c[bi]={},ka,Rl,bo,wl),bi in c&&fa in c&&(c.length=0),m)}function fs(c,m,y){for(;Fe(m)&&m.i!=4;){var w=m.l,F=y[w];if(!F){var V=y[0];V&&(V=V[w])&&(F=y[w]=Al(V))}if(!F||!F(m,c,w)){F=m,w=c,V=F.j,$e(F);var G=F;if(!G.ca){if(F=G.h.h-V,G.h.h=V,G=G.h,F==0)F=Xt();else{if(V=Y(G,F),G.S&&G.m)F=G.i.subarray(V,V+F);else{G=G.i;var K=V;F=V+F,F=K===F?Ht():ft?G.slice(K,F):new Uint8Array(G.subarray(K,F))}F=F.length==0?Xt():new ae(F,ce)}(V=w.R)?V.push(F):w.R=[F]}}}return c}function Wa(c,m,y){for(var w=y.length,F=w%2==1,V=F?1:0;V<w;V+=2)(0,y[V+1])(m,c,y[V]);wn(c,m,F?y[0]:void 0)}function li(c,m){return{U:c,W:m}}var ni=li(function(c,m,y){if(c.i!==5)return!1;c=c.h;var w=c.i,F=c.h,V=w[F],G=w[F+1],K=w[F+2];return w=w[F+3],pe(c,c.h+4),G=(V<<0|G<<8|K<<16|w<<24)>>>0,c=2*(G>>31)+1,V=G>>>23&255,G&=8388607,kt(m,y,V==255?G?NaN:1/0*c:V==0?c*Math.pow(2,-149)*G:c*Math.pow(2,V-150)*(G+Math.pow(2,23))),!0},function(c,m,y){if(m=_e(m,y),m!=null){Jt(c.h,8*y+5),c=c.h;var w=+m;w===0?0<1/w?Se=Wt=0:(Wt=0,Se=2147483648):isNaN(w)?(Wt=0,Se=2147483647):(w=(y=0>w?-2147483648:0)?-w:w,34028234663852886e22<w?(Wt=0,Se=(y|2139095040)>>>0):11754943508222875e-54>w?(w=Math.round(w/Math.pow(2,-149)),Wt=0,Se=(y|w)>>>0):(m=Math.floor(Math.log(w)/Math.LN2),w*=Math.pow(2,-m),w=Math.round(8388608*w),16777216<=w&&++m,Wt=0,Se=(y|m+127<<23|w&8388607)>>>0)),y=Se,c.h.push(y>>>0&255),c.h.push(y>>>8&255),c.h.push(y>>>16&255),c.h.push(y>>>24&255)}}),hs=li(function(c,m,y){if(c.i!==0)return!1;var w=c.h,F=0,V=c=0,G=w.i,K=w.h;do{var pt=G[K++];F|=(pt&127)<<V,V+=7}while(32>V&&pt&128);for(32<V&&(c|=(pt&127)>>4),V=3;32>V&&pt&128;V+=7)pt=G[K++],c|=(pt&127)<<V;if(pe(w,K),128>pt)w=F>>>0,pt=c>>>0,(c=pt&2147483648)&&(w=~w+1>>>0,pt=~pt>>>0,w==0&&(pt=pt+1>>>0)),w=4294967296*pt+(w>>>0);else throw Lt();return kt(m,y,c?-w:w),!0},function(c,m,y){m=Nt(m,y),m!=null&&(typeof m=="string"&&z(m),m!=null&&(Jt(c.h,8*y),typeof m=="number"?(c=c.h,fe(m),se(c,Se,Wt)):(y=z(m),se(c.h,y.i,y.h))))}),Cl=li(function(c,m,y){return c.i!==0?!1:(kt(m,y,Dt(c.h)),!0)},function(c,m,y){if(m=Nt(m,y),m!=null&&m!=null)if(Jt(c.h,8*y),c=c.h,y=m,0<=y)Jt(c,y);else{for(m=0;9>m;m++)c.h.push(y&127|128),y>>=7;c.h.push(1)}}),br=li(function(c,m,y){if(c.i!==2)return!1;var w=Dt(c.h)>>>0;c=c.h;var F=Y(c,w);if(c=c.i,re){var V=c,G;(G=qt)||(G=qt=new TextDecoder("utf-8",{fatal:!0})),c=F+w,V=F===0&&c===V.length?V:V.subarray(F,c);try{var K=G.decode(V)}catch(he){if(Bt===void 0){try{G.decode(new Uint8Array([128]))}catch{}try{G.decode(new Uint8Array([97])),Bt=!0}catch{Bt=!1}}throw!Bt&&(qt=void 0),he}}else{K=F,w=K+w,F=[];for(var pt=null,At,Pt;K<w;)At=c[K++],128>At?F.push(At):224>At?K>=w?bt():(Pt=c[K++],194>At||(Pt&192)!==128?(K--,bt()):F.push((At&31)<<6|Pt&63)):240>At?K>=w-1?bt():(Pt=c[K++],(Pt&192)!==128||At===224&&160>Pt||At===237&&160<=Pt||((V=c[K++])&192)!==128?(K--,bt()):F.push((At&15)<<12|(Pt&63)<<6|V&63)):244>=At?K>=w-2?bt():(Pt=c[K++],(Pt&192)!==128||(At<<28)+(Pt-144)>>30!==0||((V=c[K++])&192)!==128||((G=c[K++])&192)!==128?(K--,bt()):(At=(At&7)<<18|(Pt&63)<<12|(V&63)<<6|G&63,At-=65536,F.push((At>>10&1023)+55296,(At&1023)+56320))):bt(),8192<=F.length&&(pt=te(pt,F),F.length=0);K=te(pt,F)}return kt(m,y,K),!0},function(c,m,y){if(m=Nt(m,y),m!=null){var w=!1;if(w=w===void 0?!1:w,wt){if(w&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(m))throw Error("Found an unpaired surrogate");m=(xe||(xe=new TextEncoder)).encode(m)}else{for(var F=0,V=new Uint8Array(3*m.length),G=0;G<m.length;G++){var K=m.charCodeAt(G);if(128>K)V[F++]=K;else{if(2048>K)V[F++]=K>>6|192;else{if(55296<=K&&57343>=K){if(56319>=K&&G<m.length){var pt=m.charCodeAt(++G);if(56320<=pt&&57343>=pt){K=1024*(K-55296)+pt-56320+65536,V[F++]=K>>18|240,V[F++]=K>>12&63|128,V[F++]=K>>6&63|128,V[F++]=K&63|128;continue}else G--}if(w)throw Error("Found an unpaired surrogate");K=65533}V[F++]=K>>12|224,V[F++]=K>>6&63|128}V[F++]=K&63|128}}m=F===V.length?V:V.subarray(0,F)}Jt(c.h,8*y+2),Jt(c.h,m.length),ln(c,c.h.end()),ln(c,m)}}),Ar=li(function(c,m,y,w,F){if(c.i!==2)return!1;m=en(m,y,w),y=c.h.j,w=Dt(c.h)>>>0;var V=c.h.h+w,G=V-y;if(0>=G&&(c.h.j=V,F(m,c,void 0,void 0,void 0),G=V-c.h.h),G)throw Error("Message parsing ended unexpectedly. Expected to read "+(w+" bytes, instead read "+(w-G)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return c.h.h=V,c.h.j=y,!0},function(c,m,y,w,F){if(m=oe(m,w,y),m!=null)for(w=0;w<m.length;w++){var V=c;Jt(V.h,8*y+2);var G=V.h.end();ln(V,G),G.push(V.i),V=G,F(m[w],c),G=c;var K=V.pop();for(K=G.i+G.h.length()-K;127<K;)V.push(K&127|128),K>>>=7,G.i++;V.push(K),G.i++}});function ds(c){return function(m,y){t:{if(on.length){var w=on.pop();w.setOptions(y),je(w.h,m,y),m=w}else m=new Be(m,y);try{var F=ha(c),V=fs(new F.P,m,F);break t}finally{F=m.h,F.i=null,F.m=!1,F.l=0,F.j=0,F.h=0,F.S=!1,m.l=-1,m.i=-1,100>on.length&&on.push(m)}V=void 0}return V}}function zn(c){return function(){var m=new Oe;Wa(this,m,Tr(c)),ln(m,m.h.end());for(var y=new Uint8Array(m.i),w=m.j,F=w.length,V=0,G=0;G<F;G++){var K=w[G];y.set(K,V),V+=K.length}return m.j=[y],y}}function ui(c){dn.call(this,c)}x(ui,dn);var Rr=[ui,1,Cl,2,ni,3,br,4,br];ui.prototype.l=zn(Rr);function da(c){dn.call(this,c,-1,Ec)}x(da,dn),da.prototype.addClassification=function(c,m){return en(this,1,ui,c,m),this};var Ec=[1],ps=ds([da,1,Ar,Rr]);function ea(c){dn.call(this,c)}x(ea,dn);var Xa=[ea,1,ni,2,ni,3,ni,4,ni,5,ni];ea.prototype.l=zn(Xa);function wr(c){dn.call(this,c,-1,Ul)}x(wr,dn);var Ul=[1],Ll=ds([wr,1,Ar,Xa]);function ms(c){dn.call(this,c)}x(ms,dn);var Dl=[ms,1,ni,2,ni,3,ni,4,ni,5,ni,6,hs],Ao=ds(Dl);ms.prototype.l=zn(Dl);function Nl(c,m,y){if(y=c.createShader(y===0?c.VERTEX_SHADER:c.FRAGMENT_SHADER),c.shaderSource(y,m),c.compileShader(y),!c.getShaderParameter(y,c.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+c.getShaderInfoLog(y));return y}function Ol(c){return oe(c,ui,1).map(function(m){var y=Nt(m,1);return{index:y??0,score:hn(m,2),label:Nt(m,3)!=null?rn(Nt(m,3),""):void 0,displayName:Nt(m,4)!=null?rn(Nt(m,4),""):void 0}})}function Pl(c){return{x:hn(c,1),y:hn(c,2),z:hn(c,3),visibility:_e(c,4)!=null?hn(c,4):void 0}}function zl(c){return c.map(function(m){return oe(Ll(m),ea,1).map(Pl)})}function Ro(c,m){this.i=c,this.h=m,this.m=0}function wo(c,m,y){return Tc(c,m),typeof c.h.canvas.transferToImageBitmap=="function"?Promise.resolve(c.h.canvas.transferToImageBitmap()):y?Promise.resolve(c.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(c.h.canvas):(c.j===void 0&&(c.j=document.createElement("canvas")),new Promise(function(w){c.j.height=c.h.canvas.height,c.j.width=c.h.canvas.width,c.j.getContext("2d",{}).drawImage(c.h.canvas,0,0,c.h.canvas.width,c.h.canvas.height),w(c.j)}))}function Tc(c,m){var y=c.h;if(c.s===void 0){var w=Nl(y,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),F=Nl(y,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),V=y.createProgram();if(y.attachShader(V,w),y.attachShader(V,F),y.linkProgram(V),!y.getProgramParameter(V,y.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+y.getProgramInfoLog(V));w=c.s=V,y.useProgram(w),F=y.getUniformLocation(w,"sampler0"),c.l={O:y.getAttribLocation(w,"aVertex"),N:y.getAttribLocation(w,"aTex"),xa:F},c.v=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,c.v),y.enableVertexAttribArray(c.l.O),y.vertexAttribPointer(c.l.O,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),c.u=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,c.u),y.enableVertexAttribArray(c.l.N),y.vertexAttribPointer(c.l.N,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),y.uniform1i(F,0)}w=c.l,y.useProgram(c.s),y.canvas.width=m.width,y.canvas.height=m.height,y.viewport(0,0,m.width,m.height),y.activeTexture(y.TEXTURE0),c.i.bindTexture2d(m.glName),y.enableVertexAttribArray(w.O),y.bindBuffer(y.ARRAY_BUFFER,c.v),y.vertexAttribPointer(w.O,2,y.FLOAT,!1,0,0),y.enableVertexAttribArray(w.N),y.bindBuffer(y.ARRAY_BUFFER,c.u),y.vertexAttribPointer(w.N,2,y.FLOAT,!1,0,0),y.bindFramebuffer(y.DRAW_FRAMEBUFFER?y.DRAW_FRAMEBUFFER:y.FRAMEBUFFER,null),y.clearColor(0,0,0,0),y.clear(y.COLOR_BUFFER_BIT),y.colorMask(!0,!0,!0,!0),y.drawArrays(y.TRIANGLE_FAN,0,4),y.disableVertexAttribArray(w.O),y.disableVertexAttribArray(w.N),y.bindBuffer(y.ARRAY_BUFFER,null),c.i.bindTexture2d(0)}function bc(c){this.h=c}var Ac=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Rc(c,m){return m+c}function gs(c,m){window[c]=m}function wc(c){var m=document.createElement("script");return m.setAttribute("src",c),m.setAttribute("crossorigin","anonymous"),new Promise(function(y){m.addEventListener("load",function(){y()},!1),m.addEventListener("error",function(){y()},!1),document.body.appendChild(m)})}function Cc(){return k(function(c){switch(c.h){case 1:return c.s=2,B(c,WebAssembly.instantiate(Ac),4);case 4:c.h=3,c.s=0;break;case 2:return c.s=0,c.l=null,c.return(!1);case 3:return c.return(!0)}})}function Co(c){if(this.h=c,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=c&&c.locateFile||Rc,typeof window=="object")var m=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")m=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=m,c.options){m=d(Object.keys(c.options));for(var y=m.next();!y.done;y=m.next()){y=y.value;var w=c.options[y].default;w!==void 0&&(this.l[y]=typeof w=="function"?w():w)}}}o=Co.prototype,o.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Bl(c){var m,y,w,F,V,G,K,pt,At,Pt,he;return k(function(ee){switch(ee.h){case 1:return c.ga?(m=c.h.files===void 0?[]:typeof c.h.files=="function"?c.h.files(c.l):c.h.files,B(ee,Cc(),2)):ee.return();case 2:if(y=ee.i,typeof window=="object")return gs("createMediapipeSolutionsWasm",{locateFile:c.locateFile}),gs("createMediapipeSolutionsPackedAssets",{locateFile:c.locateFile}),G=m.filter(function(Gt){return Gt.data!==void 0}),K=m.filter(function(Gt){return Gt.data===void 0}),pt=Promise.all(G.map(function(Gt){var ue=vs(c,Gt.url);if(Gt.path!==void 0){var ye=Gt.path;ue=ue.then(function(ke){return c.overrideFile(ye,ke),Promise.resolve(ke)})}return ue})),At=Promise.all(K.map(function(Gt){return Gt.simd===void 0||Gt.simd&&y||!Gt.simd&&!y?wc(c.locateFile(Gt.url,c.ha)):Promise.resolve()})).then(function(){var Gt,ue,ye;return k(function(ke){if(ke.h==1)return Gt=window.createMediapipeSolutionsWasm,ue=window.createMediapipeSolutionsPackedAssets,ye=c,B(ke,Gt(ue),2);ye.i=ke.i,ke.h=0})}),Pt=function(){return k(function(Gt){return c.h.graph&&c.h.graph.url?Gt=B(Gt,vs(c,c.h.graph.url),0):(Gt.h=0,Gt=void 0),Gt})}(),B(ee,Promise.all([At,pt,Pt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return w=m.filter(function(Gt){return Gt.simd===void 0||Gt.simd&&y||!Gt.simd&&!y}).map(function(Gt){return c.locateFile(Gt.url,c.ha)}),importScripts.apply(null,g(w)),F=c,B(ee,createMediapipeSolutionsWasm(Module),6);case 6:F.i=ee.i,c.m=new OffscreenCanvas(1,1),c.i.canvas=c.m,V=c.i.GL.createContext(c.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),c.i.GL.makeContextCurrent(V),ee.h=4;break;case 7:if(c.m=document.createElement("canvas"),he=c.m.getContext("webgl2",{}),!he&&(he=c.m.getContext("webgl",{}),!he))return alert("Failed to create WebGL canvas context when passing video frame."),ee.return();c.K=he,c.i.canvas=c.m,c.i.createContext(c.m,!0,!0,{});case 4:c.j=new c.i.SolutionWasm,c.ga=!1,ee.h=0}})}function Uc(c){var m,y,w,F,V,G,K,pt;return k(function(At){if(At.h==1){if(c.h.graph&&c.h.graph.url&&c.fa===c.h.graph.url)return At.return();if(c.u=!0,!c.h.graph||!c.h.graph.url){At.h=2;return}return c.fa=c.h.graph.url,B(At,vs(c,c.h.graph.url),3)}for(At.h!=2&&(m=At.i,c.j.loadGraph(m)),y=d(Object.keys(c.D)),w=y.next();!w.done;w=y.next())F=w.value,c.j.overrideFile(F,c.D[F]);if(c.D={},c.h.listeners)for(V=d(c.h.listeners),G=V.next();!G.done;G=V.next())K=G.value,Oc(c,K);pt=c.l,c.l={},c.setOptions(pt),At.h=0})}o.reset=function(){var c=this;return k(function(m){c.j&&(c.j.reset(),c.s={},c.v={}),m.h=0})},o.setOptions=function(c,m){var y=this;if(m=m||this.h.options){for(var w=[],F=[],V={},G=d(Object.keys(c)),K=G.next();!K.done;V={X:V.X,Y:V.Y},K=G.next())if(K=K.value,!(K in this.l&&this.l[K]===c[K])){this.l[K]=c[K];var pt=m[K];pt!==void 0&&(pt.onChange&&(V.X=pt.onChange,V.Y=c[K],w.push(function(At){return function(){var Pt;return k(function(he){if(he.h==1)return B(he,At.X(At.Y),2);Pt=he.i,Pt===!0&&(y.u=!0),he.h=0})}}(V))),pt.graphOptionXref&&(K=Object.assign({},{calculatorName:"",calculatorIndex:0},pt.graphOptionXref,{valueNumber:pt.type===1?c[K]:0,valueBoolean:pt.type===0?c[K]:!1,valueString:pt.type===2?c[K]:""}),F.push(K)))}(w.length!==0||F.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(F),this.F=(this.F===void 0?[]:this.F).concat(w))}};function Lc(c){var m,y,w,F,V,G,K;return k(function(pt){switch(pt.h){case 1:if(!c.u)return pt.return();if(!c.F){pt.h=2;break}m=d(c.F),y=m.next();case 3:if(y.done){pt.h=5;break}return w=y.value,B(pt,w(),4);case 4:y=m.next(),pt.h=3;break;case 5:c.F=void 0;case 2:if(c.H){for(F=new c.i.GraphOptionChangeRequestList,V=d(c.H),G=V.next();!G.done;G=V.next())K=G.value,F.push_back(K);c.j.changeOptions(F),F.delete(),c.H=void 0}c.u=!1,pt.h=0}})}o.initialize=function(){var c=this;return k(function(m){return m.h==1?B(m,Bl(c),2):m.h!=3?B(m,Uc(c),3):B(m,Lc(c),0)})};function vs(c,m){var y,w;return k(function(F){return m in c.L?F.return(c.L[m]):(y=c.locateFile(m,""),w=fetch(y).then(function(V){return V.arrayBuffer()}),c.L[m]=w,F.return(w))})}o.overrideFile=function(c,m){this.j?this.j.overrideFile(c,m):this.D[c]=m},o.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},o.send=function(c,m){var y=this,w,F,V,G,K,pt,At,Pt,he;return k(function(ee){switch(ee.h){case 1:return y.h.inputs?(w=1e3*(m??performance.now()),B(ee,y.I,2)):ee.return();case 2:return B(ee,y.initialize(),3);case 3:for(F=new y.i.PacketDataList,V=d(Object.keys(c)),G=V.next();!G.done;G=V.next())if(K=G.value,pt=y.h.inputs[K]){t:{var Gt=c[K];switch(pt.type){case"video":var ue=y.s[pt.stream];if(ue||(ue=new Ro(y.i,y.K),y.s[pt.stream]=ue),ue.m===0&&(ue.m=ue.i.createTexture()),typeof HTMLVideoElement<"u"&&Gt instanceof HTMLVideoElement)var ye=Gt.videoWidth,ke=Gt.videoHeight;else typeof HTMLImageElement<"u"&&Gt instanceof HTMLImageElement?(ye=Gt.naturalWidth,ke=Gt.naturalHeight):(ye=Gt.width,ke=Gt.height);ke={glName:ue.m,width:ye,height:ke},ye=ue.h,ye.canvas.width=ke.width,ye.canvas.height=ke.height,ye.activeTexture(ye.TEXTURE0),ue.i.bindTexture2d(ue.m),ye.texImage2D(ye.TEXTURE_2D,0,ye.RGBA,ye.RGBA,ye.UNSIGNED_BYTE,Gt),ue.i.bindTexture2d(0),ue=ke;break t;case"detections":for(ue=y.s[pt.stream],ue||(ue=new bc(y.i),y.s[pt.stream]=ue),ue.data||(ue.data=new ue.h.DetectionListData),ue.data.reset(Gt.length),ke=0;ke<Gt.length;++ke){ye=Gt[ke];var Ye=ue.data,gn=Ye.setBoundingBox,ii=ke,Wn=ye.la,De=new ms;if(Re(De,1,Wn.ra),Re(De,2,Wn.sa),Re(De,3,Wn.height),Re(De,4,Wn.width),Re(De,5,Wn.rotation),kt(De,6,Wn.pa),Wn=De.l(),gn.call(Ye,ii,Wn),ye.ea)for(Ye=0;Ye<ye.ea.length;++Ye){De=ye.ea[Ye],gn=ue.data,ii=gn.addNormalizedLandmark,Wn=ke,De=Object.assign({},De,{visibility:De.visibility?De.visibility:0});var Sn=new ea;Re(Sn,1,De.x),Re(Sn,2,De.y),Re(Sn,3,De.z),De.visibility&&Re(Sn,4,De.visibility),De=Sn.l(),ii.call(gn,Wn,De)}if(ye.ba)for(Ye=0;Ye<ye.ba.length;++Ye)gn=ue.data,ii=gn.addClassification,Wn=ke,De=ye.ba[Ye],Sn=new ui,Re(Sn,2,De.score),De.index&&kt(Sn,1,De.index),De.label&&kt(Sn,3,De.label),De.displayName&&kt(Sn,4,De.displayName),De=Sn.l(),ii.call(gn,Wn,De)}ue=ue.data;break t;default:ue={}}}switch(At=ue,Pt=pt.stream,pt.type){case"video":F.pushTexture2d(Object.assign({},At,{stream:Pt,timestamp:w}));break;case"detections":he=At,he.stream=Pt,he.timestamp=w,F.pushDetectionList(he);break;default:throw Error("Unknown input config type: '"+pt.type+"'")}}return y.j.send(F),B(ee,y.I,4);case 4:F.delete(),ee.h=0}})};function Dc(c,m,y){var w,F,V,G,K,pt,At,Pt,he,ee,Gt,ue,ye,ke;return k(function(Ye){switch(Ye.h){case 1:if(!y)return Ye.return(m);for(w={},F=0,V=d(Object.keys(y)),G=V.next();!G.done;G=V.next())K=G.value,pt=y[K],typeof pt!="string"&&pt.type==="texture"&&m[pt.stream]!==void 0&&++F;1<F&&(c.M=!1),At=d(Object.keys(y)),G=At.next();case 2:if(G.done){Ye.h=4;break}if(Pt=G.value,he=y[Pt],typeof he=="string")return ye=w,ke=Pt,B(Ye,Nc(c,Pt,m[he]),14);if(ee=m[he.stream],he.type==="detection_list"){if(ee){for(var gn=ee.getRectList(),ii=ee.getLandmarksList(),Wn=ee.getClassificationsList(),De=[],Sn=0;Sn<gn.size();++Sn){var Vi=Ao(gn.get(Sn)),Hl=hn(Vi,1),Gl=hn(Vi,2),Pc=hn(Vi,3),zc=hn(Vi,4),Bc=hn(Vi,5,0),_s=void 0;_s=_s===void 0?0:_s,Vi={la:{ra:Hl,sa:Gl,height:Pc,width:zc,rotation:Bc,pa:rn(Nt(Vi,6),_s)},ea:oe(Ll(ii.get(Sn)),ea,1).map(Pl),ba:Ol(ps(Wn.get(Sn)))},De.push(Vi)}gn=De}else gn=[];w[Pt]=gn,Ye.h=7;break}if(he.type==="proto_list"){if(ee){for(gn=Array(ee.size()),ii=0;ii<ee.size();ii++)gn[ii]=ee.get(ii);ee.delete()}else gn=[];w[Pt]=gn,Ye.h=7;break}if(ee===void 0){Ye.h=3;break}if(he.type==="float_list"){w[Pt]=ee,Ye.h=7;break}if(he.type==="proto"){w[Pt]=ee,Ye.h=7;break}if(he.type!=="texture")throw Error("Unknown output config type: '"+he.type+"'");return Gt=c.v[Pt],Gt||(Gt=new Ro(c.i,c.K),c.v[Pt]=Gt),B(Ye,wo(Gt,ee,c.M),13);case 13:ue=Ye.i,w[Pt]=ue;case 7:he.transform&&w[Pt]&&(w[Pt]=he.transform(w[Pt])),Ye.h=3;break;case 14:ye[ke]=Ye.i;case 3:G=At.next(),Ye.h=2;break;case 4:return Ye.return(w)}})}function Nc(c,m,y){var w;return k(function(F){return typeof y=="number"||y instanceof Uint8Array||y instanceof c.i.Uint8BlobList?F.return(y):y instanceof c.i.Texture2dDataOut?(w=c.v[m],w||(w=new Ro(c.i,c.K),c.v[m]=w),F.return(wo(w,y,c.M))):F.return(void 0)})}function Oc(c,m){for(var y=m.name||"$",w=[].concat(g(m.wants)),F=new c.i.StringList,V=d(m.wants),G=V.next();!G.done;G=V.next())F.push_back(G.value);V=c.i.PacketListener.implement({onResults:function(K){for(var pt={},At=0;At<m.wants.length;++At)pt[w[At]]=K.get(At);var Pt=c.listeners[y];Pt&&(c.I=Dc(c,pt,m.outs).then(function(he){he=Pt(he);for(var ee=0;ee<m.wants.length;++ee){var Gt=pt[w[ee]];typeof Gt=="object"&&Gt.hasOwnProperty&&Gt.hasOwnProperty("delete")&&Gt.delete()}he&&(c.I=he)}))}}),c.j.attachMultiListener(F,V),F.delete()}o.onResults=function(c,m){this.listeners[m||"$"]=c},rt("Solution",Co),rt("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Fl(c){return c===void 0&&(c=0),c===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Il(c){var m=this;c=c||{},this.h=new Co({locateFile:c.locateFile,files:function(y){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Fl(y.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:zl},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:zl},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(y){return y.map(function(w){return Ol(ps(w))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(y){var w,F,V;return k(function(G){return G.h==1?(w=Fl(y),F="third_party/mediapipe/modules/hand_landmark/"+w,B(G,vs(m.h,w),2)):(V=G.i,m.h.overrideFile(F,V),G.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}o=Il.prototype,o.close=function(){return this.h.close(),Promise.resolve()},o.onResults=function(c){this.h.onResults(c)},o.initialize=function(){var c=this;return k(function(m){return B(m,c.h.initialize(),0)})},o.reset=function(){this.h.reset()},o.send=function(c){var m=this;return k(function(y){return B(y,m.h.send(c),0)})},o.setOptions=function(c){this.h.setOptions(c)},rt("Hands",Il),rt("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),rt("VERSION","0.4.1675469240")}).call(Dh)),Dh}var vy=gy(),Nh={},zg;function _y(){return zg||(zg=1,(function(){function o(A){var k=0;return function(){return k<A.length?{done:!1,value:A[k++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(A,k,ot){return A==Array.prototype||A==Object.prototype||(A[k]=ot.value),A};function i(A){A=[typeof globalThis=="object"&&globalThis,A,typeof window=="object"&&window,typeof self=="object"&&self,typeof uc=="object"&&uc];for(var k=0;k<A.length;++k){var ot=A[k];if(ot&&ot.Math==Math)return ot}throw Error("Cannot find global object")}var r=i(this);function l(A,k){if(k)t:{var ot=r;A=A.split(".");for(var _t=0;_t<A.length-1;_t++){var j=A[_t];if(!(j in ot))break t;ot=ot[j]}A=A[A.length-1],_t=ot[A],k=k(_t),k!=_t&&k!=null&&e(ot,A,{configurable:!0,writable:!0,value:k})}}l("Symbol",function(A){function k(rt){if(this instanceof k)throw new TypeError("Symbol is not a constructor");return new ot(_t+(rt||"")+"_"+j++,rt)}function ot(rt,I){this.g=rt,e(this,"description",{configurable:!0,writable:!0,value:I})}if(A)return A;ot.prototype.toString=function(){return this.g};var _t="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",j=0;return k}),l("Symbol.iterator",function(A){if(A)return A;A=Symbol("Symbol.iterator");for(var k="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),ot=0;ot<k.length;ot++){var _t=r[k[ot]];typeof _t=="function"&&typeof _t.prototype[A]!="function"&&e(_t.prototype,A,{configurable:!0,writable:!0,value:function(){return f(o(this))}})}return A});function f(A){return A={next:A},A[Symbol.iterator]=function(){return this},A}function p(A){var k=typeof Symbol<"u"&&Symbol.iterator&&A[Symbol.iterator];return k?k.call(A):{next:o(A)}}function d(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function g(A){if(A.i)throw new TypeError("Generator is already running");A.i=!0}d.prototype.l=function(A){this.o=A};function v(A,k){A.h={F:k,G:!0},A.j=A.m}d.prototype.return=function(A){this.h={return:A},this.j=this.m};function S(A){this.g=new d,this.h=A}function E(A,k){g(A.g);var ot=A.g.g;return ot?M(A,"return"in ot?ot.return:function(_t){return{value:_t,done:!0}},k,A.g.return):(A.g.return(k),b(A))}function M(A,k,ot,_t){try{var j=k.call(A.g.g,ot);if(!(j instanceof Object))throw new TypeError("Iterator result "+j+" is not an object");if(!j.done)return A.g.i=!1,j;var rt=j.value}catch(I){return A.g.g=null,v(A.g,I),b(A)}return A.g.g=null,_t.call(A.g,rt),b(A)}function b(A){for(;A.g.j;)try{var k=A.h(A.g);if(k)return A.g.i=!1,{value:k.value,done:!1}}catch(ot){A.g.o=void 0,v(A.g,ot)}if(A.g.i=!1,A.g.h){if(k=A.g.h,A.g.h=null,k.G)throw k.F;return{value:k.return,done:!0}}return{value:void 0,done:!0}}function R(A){this.next=function(k){return g(A.g),A.g.g?k=M(A,A.g.g.next,k,A.g.l):(A.g.l(k),k=b(A)),k},this.throw=function(k){return g(A.g),A.g.g?k=M(A,A.g.g.throw,k,A.g.l):(v(A.g,k),k=b(A)),k},this.return=function(k){return E(A,k)},this[Symbol.iterator]=function(){return this}}function C(A){function k(_t){return A.next(_t)}function ot(_t){return A.throw(_t)}return new Promise(function(_t,j){function rt(I){I.done?_t(I.value):Promise.resolve(I.value).then(k,ot).then(rt,j)}rt(A.next())})}l("Promise",function(A){function k(I){this.h=0,this.i=void 0,this.g=[],this.o=!1;var J=this.j();try{I(J.resolve,J.reject)}catch($){J.reject($)}}function ot(){this.g=null}function _t(I){return I instanceof k?I:new k(function(J){J(I)})}if(A)return A;ot.prototype.h=function(I){if(this.g==null){this.g=[];var J=this;this.i(function(){J.l()})}this.g.push(I)};var j=r.setTimeout;ot.prototype.i=function(I){j(I,0)},ot.prototype.l=function(){for(;this.g&&this.g.length;){var I=this.g;this.g=[];for(var J=0;J<I.length;++J){var $=I[J];I[J]=null;try{$()}catch(ut){this.j(ut)}}}this.g=null},ot.prototype.j=function(I){this.i(function(){throw I})},k.prototype.j=function(){function I(ut){return function(N){$||($=!0,ut.call(J,N))}}var J=this,$=!1;return{resolve:I(this.A),reject:I(this.l)}},k.prototype.A=function(I){if(I===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(I instanceof k)this.C(I);else{t:switch(typeof I){case"object":var J=I!=null;break t;case"function":J=!0;break t;default:J=!1}J?this.v(I):this.m(I)}},k.prototype.v=function(I){var J=void 0;try{J=I.then}catch($){this.l($);return}typeof J=="function"?this.D(J,I):this.m(I)},k.prototype.l=function(I){this.u(2,I)},k.prototype.m=function(I){this.u(1,I)},k.prototype.u=function(I,J){if(this.h!=0)throw Error("Cannot settle("+I+", "+J+"): Promise already settled in state"+this.h);this.h=I,this.i=J,this.h===2&&this.B(),this.H()},k.prototype.B=function(){var I=this;j(function(){if(I.I()){var J=r.console;typeof J<"u"&&J.error(I.i)}},1)},k.prototype.I=function(){if(this.o)return!1;var I=r.CustomEvent,J=r.Event,$=r.dispatchEvent;return typeof $>"u"?!0:(typeof I=="function"?I=new I("unhandledrejection",{cancelable:!0}):typeof J=="function"?I=new J("unhandledrejection",{cancelable:!0}):(I=r.document.createEvent("CustomEvent"),I.initCustomEvent("unhandledrejection",!1,!0,I)),I.promise=this,I.reason=this.i,$(I))},k.prototype.H=function(){if(this.g!=null){for(var I=0;I<this.g.length;++I)rt.h(this.g[I]);this.g=null}};var rt=new ot;return k.prototype.C=function(I){var J=this.j();I.s(J.resolve,J.reject)},k.prototype.D=function(I,J){var $=this.j();try{I.call(J,$.resolve,$.reject)}catch(ut){$.reject(ut)}},k.prototype.then=function(I,J){function $(gt,tt){return typeof gt=="function"?function(at){try{ut(gt(at))}catch(Tt){N(Tt)}}:tt}var ut,N,nt=new k(function(gt,tt){ut=gt,N=tt});return this.s($(I,ut),$(J,N)),nt},k.prototype.catch=function(I){return this.then(void 0,I)},k.prototype.s=function(I,J){function $(){switch(ut.h){case 1:I(ut.i);break;case 2:J(ut.i);break;default:throw Error("Unexpected state: "+ut.h)}}var ut=this;this.g==null?rt.h($):this.g.push($),this.o=!0},k.resolve=_t,k.reject=function(I){return new k(function(J,$){$(I)})},k.race=function(I){return new k(function(J,$){for(var ut=p(I),N=ut.next();!N.done;N=ut.next())_t(N.value).s(J,$)})},k.all=function(I){var J=p(I),$=J.next();return $.done?_t([]):new k(function(ut,N){function nt(at){return function(Tt){gt[at]=Tt,tt--,tt==0&&ut(gt)}}var gt=[],tt=0;do gt.push(void 0),tt++,_t($.value).s(nt(gt.length-1),N),$=J.next();while(!$.done)})},k});var x=typeof Object.assign=="function"?Object.assign:function(A,k){for(var ot=1;ot<arguments.length;ot++){var _t=arguments[ot];if(_t)for(var j in _t)Object.prototype.hasOwnProperty.call(_t,j)&&(A[j]=_t[j])}return A};l("Object.assign",function(A){return A||x});var _=this||self,H={facingMode:"user",width:640,height:480};function O(A,k){this.video=A,this.i=0,this.h=Object.assign(Object.assign({},H),k)}O.prototype.stop=function(){var A=this,k,ot,_t,j;return C(new R(new S(function(rt){if(A.g){for(k=A.g.getTracks(),ot=p(k),_t=ot.next();!_t.done;_t=ot.next())j=_t.value,j.stop();A.g=void 0}rt.j=0})))},O.prototype.start=function(){var A=this,k;return C(new R(new S(function(ot){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),k=A.h,ot.return(navigator.mediaDevices.getUserMedia({video:{facingMode:k.facingMode,width:k.width,height:k.height}}).then(function(_t){Z(A,_t)}).catch(function(_t){var j="Failed to acquire camera feed: "+_t;throw console.error(j),alert(j),_t}))})))};function B(A){window.requestAnimationFrame(function(){q(A)})}function Z(A,k){A.g=k,A.video.srcObject=k,A.video.onloadedmetadata=function(){A.video.play(),B(A)}}function q(A){var k=null;A.video.paused||A.video.currentTime===A.i||(A.i=A.video.currentTime,k=A.h.onFrame()),k?k.then(function(){B(A)}):B(A)}var X=["Camera"],xt=_;X[0]in xt||typeof xt.execScript>"u"||xt.execScript("var "+X[0]);for(var U;X.length&&(U=X.shift());)X.length||O===void 0?xt[U]&&xt[U]!==Object.prototype[U]?xt=xt[U]:xt=xt[U]={}:xt[U]=O}).call(Nh)),Nh}var yy=_y();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Md="160",Sy=0,Bg=1,xy=2,s_=1,My=2,Oa=3,Er=0,di=1,Pa=2,Sr=0,uo=1,Fg=2,Ig=3,Hg=4,Ey=5,$r=100,Ty=101,by=102,Gg=103,Vg=104,Ay=200,Ry=201,wy=202,Cy=203,hd=204,dd=205,Uy=206,Ly=207,Dy=208,Ny=209,Oy=210,Py=211,zy=212,By=213,Fy=214,Iy=0,Hy=1,Gy=2,cc=3,Vy=4,ky=5,Wy=6,Xy=7,o_=0,qy=1,jy=2,xr=0,Yy=1,Zy=2,Ky=3,Qy=4,Jy=5,$y=6,l_=300,fo=301,ho=302,pd=303,md=304,vc=306,gd=1e3,Qi=1001,vd=1002,oi=1003,kg=1004,Oh=1005,Bi=1006,tS=1007,Ml=1008,Mr=1009,eS=1010,nS=1011,Ed=1012,u_=1013,_r=1014,yr=1015,El=1016,c_=1017,f_=1018,es=1020,iS=1021,Ji=1023,aS=1024,rS=1025,ns=1026,po=1027,sS=1028,h_=1029,oS=1030,d_=1031,p_=1033,Ph=33776,zh=33777,Bh=33778,Fh=33779,Wg=35840,Xg=35841,qg=35842,jg=35843,m_=36196,Yg=37492,Zg=37496,Kg=37808,Qg=37809,Jg=37810,$g=37811,tv=37812,ev=37813,nv=37814,iv=37815,av=37816,rv=37817,sv=37818,ov=37819,lv=37820,uv=37821,Ih=36492,cv=36494,fv=36495,lS=36283,hv=36284,dv=36285,pv=36286,g_=3e3,is=3001,uS=3200,cS=3201,fS=0,hS=1,Ii="",Yn="srgb",Fa="srgb-linear",Td="display-p3",_c="display-p3-linear",fc="linear",sn="srgb",hc="rec709",dc="p3",Xs=7680,mv=519,dS=512,pS=513,mS=514,v_=515,gS=516,vS=517,_S=518,yS=519,gv=35044,vv="300 es",_d=1035,za=2e3,pc=2001;class vo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,p=l.length;f<p;f++)l[f].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hh=Math.PI/180,yd=180/Math.PI;function Tl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qn[o&255]+Qn[o>>8&255]+Qn[o>>16&255]+Qn[o>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[i&63|128]+Qn[i>>8&255]+"-"+Qn[i>>16&255]+Qn[i>>24&255]+Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]).toLowerCase()}function hi(o,e,i){return Math.max(e,Math.min(i,o))}function SS(o,e){return(o%e+e)%e}function Gh(o,e,i){return(1-i)*o+i*e}function _v(o){return(o&o-1)===0&&o!==0}function Sd(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function gl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function fi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,i=0){qe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(hi(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,p=this.y-e.y;return this.x=f*r-p*l+e.x,this.y=f*l+p*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,i,r,l,f,p,d,g,v){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,p,d,g,v)}set(e,i,r,l,f,p,d,g,v){const S=this.elements;return S[0]=e,S[1]=l,S[2]=d,S[3]=i,S[4]=f,S[5]=g,S[6]=r,S[7]=p,S[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,p=r[0],d=r[3],g=r[6],v=r[1],S=r[4],E=r[7],M=r[2],b=r[5],R=r[8],C=l[0],x=l[3],_=l[6],H=l[1],O=l[4],B=l[7],Z=l[2],q=l[5],X=l[8];return f[0]=p*C+d*H+g*Z,f[3]=p*x+d*O+g*q,f[6]=p*_+d*B+g*X,f[1]=v*C+S*H+E*Z,f[4]=v*x+S*O+E*q,f[7]=v*_+S*B+E*X,f[2]=M*C+b*H+R*Z,f[5]=M*x+b*O+R*q,f[8]=M*_+b*B+R*X,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],d=e[5],g=e[6],v=e[7],S=e[8];return i*p*S-i*d*v-r*f*S+r*d*g+l*f*v-l*p*g}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],d=e[5],g=e[6],v=e[7],S=e[8],E=S*p-d*v,M=d*g-S*f,b=v*f-p*g,R=i*E+r*M+l*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=E*C,e[1]=(l*v-S*r)*C,e[2]=(d*r-l*p)*C,e[3]=M*C,e[4]=(S*i-l*g)*C,e[5]=(l*f-d*i)*C,e[6]=b*C,e[7]=(r*g-v*i)*C,e[8]=(p*i-r*f)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,p,d){const g=Math.cos(f),v=Math.sin(f);return this.set(r*g,r*v,-r*(g*p+v*d)+p+e,-l*v,l*g,-l*(-v*p+g*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Vh.makeScale(e,i)),this}rotate(e){return this.premultiply(Vh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Vh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vh=new Ue;function __(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function mc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xS(){const o=mc("canvas");return o.style.display="block",o}const yv={};function xl(o){o in yv||(yv[o]=!0,console.warn(o))}const Sv=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xv=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fu={[Fa]:{transfer:fc,primaries:hc,toReference:o=>o,fromReference:o=>o},[Yn]:{transfer:sn,primaries:hc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[_c]:{transfer:fc,primaries:dc,toReference:o=>o.applyMatrix3(xv),fromReference:o=>o.applyMatrix3(Sv)},[Td]:{transfer:sn,primaries:dc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(xv),fromReference:o=>o.applyMatrix3(Sv).convertLinearToSRGB()}},MS=new Set([Fa,_c]),Qe={enabled:!0,_workingColorSpace:Fa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!MS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Fu[e].toReference,l=Fu[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Fu[o].primaries},getTransfer:function(o){return o===Ii?fc:Fu[o].transfer}};function co(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function kh(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let qs;class y_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qs===void 0&&(qs=mc("canvas")),qs.width=e.width,qs.height=e.height;const r=qs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=mc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let p=0;p<f.length;p++)f[p]=co(f[p]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(co(i[r]/255)*255):i[r]=co(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ES=0;class S_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Tl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let p=0,d=l.length;p<d;p++)l[p].isDataTexture?f.push(Wh(l[p].image)):f.push(Wh(l[p]))}else f=Wh(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function Wh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?y_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TS=0;class Ei extends vo{constructor(e=Ei.DEFAULT_IMAGE,i=Ei.DEFAULT_MAPPING,r=Qi,l=Qi,f=Bi,p=Ml,d=Ji,g=Mr,v=Ei.DEFAULT_ANISOTROPY,S=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Tl(),this.name="",this.source=new S_(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=p,this.anisotropy=v,this.format=d,this.internalFormat=null,this.type=g,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof S=="string"?this.colorSpace=S:(xl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=S===is?Yn:Ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Yn?is:g_}set encoding(e){xl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===is?Yn:Ii}}Ei.DEFAULT_IMAGE=null;Ei.DEFAULT_MAPPING=l_;Ei.DEFAULT_ANISOTROPY=1;class Gn{constructor(e=0,i=0,r=0,l=1){Gn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,p=e.elements;return this.x=p[0]*i+p[4]*r+p[8]*l+p[12]*f,this.y=p[1]*i+p[5]*r+p[9]*l+p[13]*f,this.z=p[2]*i+p[6]*r+p[10]*l+p[14]*f,this.w=p[3]*i+p[7]*r+p[11]*l+p[15]*f,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const g=e.elements,v=g[0],S=g[4],E=g[8],M=g[1],b=g[5],R=g[9],C=g[2],x=g[6],_=g[10];if(Math.abs(S-M)<.01&&Math.abs(E-C)<.01&&Math.abs(R-x)<.01){if(Math.abs(S+M)<.1&&Math.abs(E+C)<.1&&Math.abs(R+x)<.1&&Math.abs(v+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(v+1)/2,B=(b+1)/2,Z=(_+1)/2,q=(S+M)/4,X=(E+C)/4,xt=(R+x)/4;return O>B&&O>Z?O<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(O),l=q/r,f=X/r):B>Z?B<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(B),r=q/l,f=xt/l):Z<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(Z),r=X/f,l=xt/f),this.set(r,l,f,i),this}let H=Math.sqrt((x-R)*(x-R)+(E-C)*(E-C)+(M-S)*(M-S));return Math.abs(H)<.001&&(H=1),this.x=(x-R)/H,this.y=(E-C)/H,this.z=(M-S)/H,this.w=Math.acos((v+b+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bS extends vo{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Gn(0,0,e,i),this.scissorTest=!1,this.viewport=new Gn(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(xl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===is?Yn:Ii),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Ei(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new S_(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends bS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class x_ extends Ei{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class AS extends Ei{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,p,d){let g=r[l+0],v=r[l+1],S=r[l+2],E=r[l+3];const M=f[p+0],b=f[p+1],R=f[p+2],C=f[p+3];if(d===0){e[i+0]=g,e[i+1]=v,e[i+2]=S,e[i+3]=E;return}if(d===1){e[i+0]=M,e[i+1]=b,e[i+2]=R,e[i+3]=C;return}if(E!==C||g!==M||v!==b||S!==R){let x=1-d;const _=g*M+v*b+S*R+E*C,H=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const Z=Math.sqrt(O),q=Math.atan2(Z,_*H);x=Math.sin(x*q)/Z,d=Math.sin(d*q)/Z}const B=d*H;if(g=g*x+M*B,v=v*x+b*B,S=S*x+R*B,E=E*x+C*B,x===1-d){const Z=1/Math.sqrt(g*g+v*v+S*S+E*E);g*=Z,v*=Z,S*=Z,E*=Z}}e[i]=g,e[i+1]=v,e[i+2]=S,e[i+3]=E}static multiplyQuaternionsFlat(e,i,r,l,f,p){const d=r[l],g=r[l+1],v=r[l+2],S=r[l+3],E=f[p],M=f[p+1],b=f[p+2],R=f[p+3];return e[i]=d*R+S*E+g*b-v*M,e[i+1]=g*R+S*M+v*E-d*b,e[i+2]=v*R+S*b+d*M-g*E,e[i+3]=S*R-d*E-g*M-v*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,p=e._order,d=Math.cos,g=Math.sin,v=d(r/2),S=d(l/2),E=d(f/2),M=g(r/2),b=g(l/2),R=g(f/2);switch(p){case"XYZ":this._x=M*S*E+v*b*R,this._y=v*b*E-M*S*R,this._z=v*S*R+M*b*E,this._w=v*S*E-M*b*R;break;case"YXZ":this._x=M*S*E+v*b*R,this._y=v*b*E-M*S*R,this._z=v*S*R-M*b*E,this._w=v*S*E+M*b*R;break;case"ZXY":this._x=M*S*E-v*b*R,this._y=v*b*E+M*S*R,this._z=v*S*R+M*b*E,this._w=v*S*E-M*b*R;break;case"ZYX":this._x=M*S*E-v*b*R,this._y=v*b*E+M*S*R,this._z=v*S*R-M*b*E,this._w=v*S*E+M*b*R;break;case"YZX":this._x=M*S*E+v*b*R,this._y=v*b*E+M*S*R,this._z=v*S*R-M*b*E,this._w=v*S*E-M*b*R;break;case"XZY":this._x=M*S*E-v*b*R,this._y=v*b*E-M*S*R,this._z=v*S*R+M*b*E,this._w=v*S*E+M*b*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+p)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],p=i[1],d=i[5],g=i[9],v=i[2],S=i[6],E=i[10],M=r+d+E;if(M>0){const b=.5/Math.sqrt(M+1);this._w=.25/b,this._x=(S-g)*b,this._y=(f-v)*b,this._z=(p-l)*b}else if(r>d&&r>E){const b=2*Math.sqrt(1+r-d-E);this._w=(S-g)/b,this._x=.25*b,this._y=(l+p)/b,this._z=(f+v)/b}else if(d>E){const b=2*Math.sqrt(1+d-r-E);this._w=(f-v)/b,this._x=(l+p)/b,this._y=.25*b,this._z=(g+S)/b}else{const b=2*Math.sqrt(1+E-r-d);this._w=(p-l)/b,this._x=(f+v)/b,this._y=(g+S)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hi(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,p=e._w,d=i._x,g=i._y,v=i._z,S=i._w;return this._x=r*S+p*d+l*v-f*g,this._y=l*S+p*g+f*d-r*v,this._z=f*S+p*v+r*g-l*d,this._w=p*S-r*d-l*g-f*v,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,p=this._w;let d=p*e._w+r*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=p,this._x=r,this._y=l,this._z=f,this;const g=1-d*d;if(g<=Number.EPSILON){const b=1-i;return this._w=b*p+i*this._w,this._x=b*r+i*this._x,this._y=b*l+i*this._y,this._z=b*f+i*this._z,this.normalize(),this}const v=Math.sqrt(g),S=Math.atan2(v,d),E=Math.sin((1-i)*S)/v,M=Math.sin(i*S)/v;return this._w=p*E+this._w*M,this._x=r*E+this._x*M,this._y=l*E+this._y*M,this._z=f*E+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),f=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(f),r*Math.cos(f),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class yt{constructor(e=0,i=0,r=0){yt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Mv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,p=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*p,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*p,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*p,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,p=e.y,d=e.z,g=e.w,v=2*(p*l-d*r),S=2*(d*i-f*l),E=2*(f*r-p*i);return this.x=i+g*v+p*E-d*S,this.y=r+g*S+d*v-f*E,this.z=l+g*E+f*S-p*v,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,p=i.x,d=i.y,g=i.z;return this.x=l*g-f*d,this.y=f*p-r*g,this.z=r*d-l*p,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xh.copy(this).projectOnVector(e),this.sub(Xh)}reflect(e){return this.sub(Xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(hi(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xh=new yt,Mv=new _o;class bl{constructor(e=new yt(1/0,1/0,1/0),i=new yt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ji.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ji.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ji.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let p=0,d=f.count;p<d;p++)e.isMesh===!0?e.getVertexPosition(p,ji):ji.fromBufferAttribute(f,p),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Iu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Iu.copy(r.boundingBox)),Iu.applyMatrix4(e.matrixWorld),this.union(Iu)}const l=e.children;for(let f=0,p=l.length;f<p;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vl),Hu.subVectors(this.max,vl),js.subVectors(e.a,vl),Ys.subVectors(e.b,vl),Zs.subVectors(e.c,vl),hr.subVectors(Ys,js),dr.subVectors(Zs,Ys),jr.subVectors(js,Zs);let i=[0,-hr.z,hr.y,0,-dr.z,dr.y,0,-jr.z,jr.y,hr.z,0,-hr.x,dr.z,0,-dr.x,jr.z,0,-jr.x,-hr.y,hr.x,0,-dr.y,dr.x,0,-jr.y,jr.x,0];return!qh(i,js,Ys,Zs,Hu)||(i=[1,0,0,0,1,0,0,0,1],!qh(i,js,Ys,Zs,Hu))?!1:(Gu.crossVectors(hr,dr),i=[Gu.x,Gu.y,Gu.z],qh(i,js,Ys,Zs,Hu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ca=[new yt,new yt,new yt,new yt,new yt,new yt,new yt,new yt],ji=new yt,Iu=new bl,js=new yt,Ys=new yt,Zs=new yt,hr=new yt,dr=new yt,jr=new yt,vl=new yt,Hu=new yt,Gu=new yt,Yr=new yt;function qh(o,e,i,r,l){for(let f=0,p=o.length-3;f<=p;f+=3){Yr.fromArray(o,f);const d=l.x*Math.abs(Yr.x)+l.y*Math.abs(Yr.y)+l.z*Math.abs(Yr.z),g=e.dot(Yr),v=i.dot(Yr),S=r.dot(Yr);if(Math.max(-Math.max(g,v,S),Math.min(g,v,S))>d)return!1}return!0}const RS=new bl,_l=new yt,jh=new yt;class bd{constructor(e=new yt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):RS.setFromPoints(e).getCenter(r);let l=0;for(let f=0,p=e.length;f<p;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_l.subVectors(e,this.center);const i=_l.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(_l,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_l.copy(e.center).add(jh)),this.expandByPoint(_l.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ua=new yt,Yh=new yt,Vu=new yt,pr=new yt,Zh=new yt,ku=new yt,Kh=new yt;class wS{constructor(e=new yt,i=new yt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Yh.copy(e).add(i).multiplyScalar(.5),Vu.copy(i).sub(e).normalize(),pr.copy(this.origin).sub(Yh);const f=e.distanceTo(i)*.5,p=-this.direction.dot(Vu),d=pr.dot(this.direction),g=-pr.dot(Vu),v=pr.lengthSq(),S=Math.abs(1-p*p);let E,M,b,R;if(S>0)if(E=p*g-d,M=p*d-g,R=f*S,E>=0)if(M>=-R)if(M<=R){const C=1/S;E*=C,M*=C,b=E*(E+p*M+2*d)+M*(p*E+M+2*g)+v}else M=f,E=Math.max(0,-(p*M+d)),b=-E*E+M*(M+2*g)+v;else M=-f,E=Math.max(0,-(p*M+d)),b=-E*E+M*(M+2*g)+v;else M<=-R?(E=Math.max(0,-(-p*f+d)),M=E>0?-f:Math.min(Math.max(-f,-g),f),b=-E*E+M*(M+2*g)+v):M<=R?(E=0,M=Math.min(Math.max(-f,-g),f),b=M*(M+2*g)+v):(E=Math.max(0,-(p*f+d)),M=E>0?f:Math.min(Math.max(-f,-g),f),b=-E*E+M*(M+2*g)+v);else M=p>0?-f:f,E=Math.max(0,-(p*M+d)),b=-E*E+M*(M+2*g)+v;return r&&r.copy(this.origin).addScaledVector(this.direction,E),l&&l.copy(Yh).addScaledVector(Vu,M),b}intersectSphere(e,i){Ua.subVectors(e.center,this.origin);const r=Ua.dot(this.direction),l=Ua.dot(Ua)-r*r,f=e.radius*e.radius;if(l>f)return null;const p=Math.sqrt(f-l),d=r-p,g=r+p;return g<0?null:d<0?this.at(g,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,p,d,g;const v=1/this.direction.x,S=1/this.direction.y,E=1/this.direction.z,M=this.origin;return v>=0?(r=(e.min.x-M.x)*v,l=(e.max.x-M.x)*v):(r=(e.max.x-M.x)*v,l=(e.min.x-M.x)*v),S>=0?(f=(e.min.y-M.y)*S,p=(e.max.y-M.y)*S):(f=(e.max.y-M.y)*S,p=(e.min.y-M.y)*S),r>p||f>l||((f>r||isNaN(r))&&(r=f),(p<l||isNaN(l))&&(l=p),E>=0?(d=(e.min.z-M.z)*E,g=(e.max.z-M.z)*E):(d=(e.max.z-M.z)*E,g=(e.min.z-M.z)*E),r>g||d>l)||((d>r||r!==r)&&(r=d),(g<l||l!==l)&&(l=g),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ua)!==null}intersectTriangle(e,i,r,l,f){Zh.subVectors(i,e),ku.subVectors(r,e),Kh.crossVectors(Zh,ku);let p=this.direction.dot(Kh),d;if(p>0){if(l)return null;d=1}else if(p<0)d=-1,p=-p;else return null;pr.subVectors(this.origin,e);const g=d*this.direction.dot(ku.crossVectors(pr,ku));if(g<0)return null;const v=d*this.direction.dot(Zh.cross(pr));if(v<0||g+v>p)return null;const S=-d*pr.dot(Kh);return S<0?null:this.at(S/p,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nn{constructor(e,i,r,l,f,p,d,g,v,S,E,M,b,R,C,x){Nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,p,d,g,v,S,E,M,b,R,C,x)}set(e,i,r,l,f,p,d,g,v,S,E,M,b,R,C,x){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=f,_[5]=p,_[9]=d,_[13]=g,_[2]=v,_[6]=S,_[10]=E,_[14]=M,_[3]=b,_[7]=R,_[11]=C,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Ks.setFromMatrixColumn(e,0).length(),f=1/Ks.setFromMatrixColumn(e,1).length(),p=1/Ks.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*p,i[9]=r[9]*p,i[10]=r[10]*p,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,p=Math.cos(r),d=Math.sin(r),g=Math.cos(l),v=Math.sin(l),S=Math.cos(f),E=Math.sin(f);if(e.order==="XYZ"){const M=p*S,b=p*E,R=d*S,C=d*E;i[0]=g*S,i[4]=-g*E,i[8]=v,i[1]=b+R*v,i[5]=M-C*v,i[9]=-d*g,i[2]=C-M*v,i[6]=R+b*v,i[10]=p*g}else if(e.order==="YXZ"){const M=g*S,b=g*E,R=v*S,C=v*E;i[0]=M+C*d,i[4]=R*d-b,i[8]=p*v,i[1]=p*E,i[5]=p*S,i[9]=-d,i[2]=b*d-R,i[6]=C+M*d,i[10]=p*g}else if(e.order==="ZXY"){const M=g*S,b=g*E,R=v*S,C=v*E;i[0]=M-C*d,i[4]=-p*E,i[8]=R+b*d,i[1]=b+R*d,i[5]=p*S,i[9]=C-M*d,i[2]=-p*v,i[6]=d,i[10]=p*g}else if(e.order==="ZYX"){const M=p*S,b=p*E,R=d*S,C=d*E;i[0]=g*S,i[4]=R*v-b,i[8]=M*v+C,i[1]=g*E,i[5]=C*v+M,i[9]=b*v-R,i[2]=-v,i[6]=d*g,i[10]=p*g}else if(e.order==="YZX"){const M=p*g,b=p*v,R=d*g,C=d*v;i[0]=g*S,i[4]=C-M*E,i[8]=R*E+b,i[1]=E,i[5]=p*S,i[9]=-d*S,i[2]=-v*S,i[6]=b*E+R,i[10]=M-C*E}else if(e.order==="XZY"){const M=p*g,b=p*v,R=d*g,C=d*v;i[0]=g*S,i[4]=-E,i[8]=v*S,i[1]=M*E+C,i[5]=p*S,i[9]=b*E-R,i[2]=R*E-b,i[6]=d*S,i[10]=C*E+M}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CS,e,US)}lookAt(e,i,r){const l=this.elements;return xi.subVectors(e,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),mr.crossVectors(r,xi),mr.lengthSq()===0&&(Math.abs(r.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),mr.crossVectors(r,xi)),mr.normalize(),Wu.crossVectors(xi,mr),l[0]=mr.x,l[4]=Wu.x,l[8]=xi.x,l[1]=mr.y,l[5]=Wu.y,l[9]=xi.y,l[2]=mr.z,l[6]=Wu.z,l[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,p=r[0],d=r[4],g=r[8],v=r[12],S=r[1],E=r[5],M=r[9],b=r[13],R=r[2],C=r[6],x=r[10],_=r[14],H=r[3],O=r[7],B=r[11],Z=r[15],q=l[0],X=l[4],xt=l[8],U=l[12],A=l[1],k=l[5],ot=l[9],_t=l[13],j=l[2],rt=l[6],I=l[10],J=l[14],$=l[3],ut=l[7],N=l[11],nt=l[15];return f[0]=p*q+d*A+g*j+v*$,f[4]=p*X+d*k+g*rt+v*ut,f[8]=p*xt+d*ot+g*I+v*N,f[12]=p*U+d*_t+g*J+v*nt,f[1]=S*q+E*A+M*j+b*$,f[5]=S*X+E*k+M*rt+b*ut,f[9]=S*xt+E*ot+M*I+b*N,f[13]=S*U+E*_t+M*J+b*nt,f[2]=R*q+C*A+x*j+_*$,f[6]=R*X+C*k+x*rt+_*ut,f[10]=R*xt+C*ot+x*I+_*N,f[14]=R*U+C*_t+x*J+_*nt,f[3]=H*q+O*A+B*j+Z*$,f[7]=H*X+O*k+B*rt+Z*ut,f[11]=H*xt+O*ot+B*I+Z*N,f[15]=H*U+O*_t+B*J+Z*nt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],p=e[1],d=e[5],g=e[9],v=e[13],S=e[2],E=e[6],M=e[10],b=e[14],R=e[3],C=e[7],x=e[11],_=e[15];return R*(+f*g*E-l*v*E-f*d*M+r*v*M+l*d*b-r*g*b)+C*(+i*g*b-i*v*M+f*p*M-l*p*b+l*v*S-f*g*S)+x*(+i*v*E-i*d*b-f*p*E+r*p*b+f*d*S-r*v*S)+_*(-l*d*S-i*g*E+i*d*M+l*p*E-r*p*M+r*g*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],p=e[4],d=e[5],g=e[6],v=e[7],S=e[8],E=e[9],M=e[10],b=e[11],R=e[12],C=e[13],x=e[14],_=e[15],H=E*x*v-C*M*v+C*g*b-d*x*b-E*g*_+d*M*_,O=R*M*v-S*x*v-R*g*b+p*x*b+S*g*_-p*M*_,B=S*C*v-R*E*v+R*d*b-p*C*b-S*d*_+p*E*_,Z=R*E*g-S*C*g-R*d*M+p*C*M+S*d*x-p*E*x,q=i*H+r*O+l*B+f*Z;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/q;return e[0]=H*X,e[1]=(C*M*f-E*x*f-C*l*b+r*x*b+E*l*_-r*M*_)*X,e[2]=(d*x*f-C*g*f+C*l*v-r*x*v-d*l*_+r*g*_)*X,e[3]=(E*g*f-d*M*f-E*l*v+r*M*v+d*l*b-r*g*b)*X,e[4]=O*X,e[5]=(S*x*f-R*M*f+R*l*b-i*x*b-S*l*_+i*M*_)*X,e[6]=(R*g*f-p*x*f-R*l*v+i*x*v+p*l*_-i*g*_)*X,e[7]=(p*M*f-S*g*f+S*l*v-i*M*v-p*l*b+i*g*b)*X,e[8]=B*X,e[9]=(R*E*f-S*C*f-R*r*b+i*C*b+S*r*_-i*E*_)*X,e[10]=(p*C*f-R*d*f+R*r*v-i*C*v-p*r*_+i*d*_)*X,e[11]=(S*d*f-p*E*f-S*r*v+i*E*v+p*r*b-i*d*b)*X,e[12]=Z*X,e[13]=(S*C*l-R*E*l+R*r*M-i*C*M-S*r*x+i*E*x)*X,e[14]=(R*d*l-p*C*l-R*r*g+i*C*g+p*r*x-i*d*x)*X,e[15]=(p*E*l-S*d*l+S*r*g-i*E*g-p*r*M+i*d*M)*X,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,p=e.x,d=e.y,g=e.z,v=f*p,S=f*d;return this.set(v*p+r,v*d-l*g,v*g+l*d,0,v*d+l*g,S*d+r,S*g-l*p,0,v*g-l*d,S*g+l*p,f*g*g+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,p){return this.set(1,r,f,0,e,1,p,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,p=i._y,d=i._z,g=i._w,v=f+f,S=p+p,E=d+d,M=f*v,b=f*S,R=f*E,C=p*S,x=p*E,_=d*E,H=g*v,O=g*S,B=g*E,Z=r.x,q=r.y,X=r.z;return l[0]=(1-(C+_))*Z,l[1]=(b+B)*Z,l[2]=(R-O)*Z,l[3]=0,l[4]=(b-B)*q,l[5]=(1-(M+_))*q,l[6]=(x+H)*q,l[7]=0,l[8]=(R+O)*X,l[9]=(x-H)*X,l[10]=(1-(M+C))*X,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=Ks.set(l[0],l[1],l[2]).length();const p=Ks.set(l[4],l[5],l[6]).length(),d=Ks.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Yi.copy(this);const v=1/f,S=1/p,E=1/d;return Yi.elements[0]*=v,Yi.elements[1]*=v,Yi.elements[2]*=v,Yi.elements[4]*=S,Yi.elements[5]*=S,Yi.elements[6]*=S,Yi.elements[8]*=E,Yi.elements[9]*=E,Yi.elements[10]*=E,i.setFromRotationMatrix(Yi),r.x=f,r.y=p,r.z=d,this}makePerspective(e,i,r,l,f,p,d=za){const g=this.elements,v=2*f/(i-e),S=2*f/(r-l),E=(i+e)/(i-e),M=(r+l)/(r-l);let b,R;if(d===za)b=-(p+f)/(p-f),R=-2*p*f/(p-f);else if(d===pc)b=-p/(p-f),R=-p*f/(p-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=E,g[12]=0,g[1]=0,g[5]=S,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=b,g[14]=R,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,r,l,f,p,d=za){const g=this.elements,v=1/(i-e),S=1/(r-l),E=1/(p-f),M=(i+e)*v,b=(r+l)*S;let R,C;if(d===za)R=(p+f)*E,C=-2*E;else if(d===pc)R=f*E,C=-1*E;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=2*v,g[4]=0,g[8]=0,g[12]=-M,g[1]=0,g[5]=2*S,g[9]=0,g[13]=-b,g[2]=0,g[6]=0,g[10]=C,g[14]=-R,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ks=new yt,Yi=new Nn,CS=new yt(0,0,0),US=new yt(1,1,1),mr=new yt,Wu=new yt,xi=new yt,Ev=new Nn,Tv=new _o;class mo{constructor(e=0,i=0,r=0,l=mo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],p=l[4],d=l[8],g=l[1],v=l[5],S=l[9],E=l[2],M=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(hi(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,b),this._z=Math.atan2(-p,f)):(this._x=Math.atan2(M,v),this._z=0);break;case"YXZ":this._x=Math.asin(-hi(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(g,v)):(this._y=Math.atan2(-E,f),this._z=0);break;case"ZXY":this._x=Math.asin(hi(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-E,b),this._z=Math.atan2(-p,v)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-hi(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(M,b),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-p,v));break;case"YZX":this._z=Math.asin(hi(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,v),this._y=Math.atan2(-E,f)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-hi(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(M,v),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-S,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ev,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Tv.setFromEuler(this),this.setFromQuaternion(Tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mo.DEFAULT_ORDER="XYZ";class M_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LS=0;const bv=new yt,Qs=new _o,La=new Nn,Xu=new yt,yl=new yt,DS=new yt,NS=new _o,Av=new yt(1,0,0),Rv=new yt(0,1,0),wv=new yt(0,0,1),OS={type:"added"},PS={type:"removed"};class $n extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new yt,i=new mo,r=new _o,l=new yt(1,1,1);function f(){r.setFromEuler(i,!1)}function p(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Nn},normalMatrix:{value:new Ue}}),this.matrix=new Nn,this.matrixWorld=new Nn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Qs.setFromAxisAngle(e,i),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,i){return Qs.setFromAxisAngle(e,i),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(Av,e)}rotateY(e){return this.rotateOnAxis(Rv,e)}rotateZ(e){return this.rotateOnAxis(wv,e)}translateOnAxis(e,i){return bv.copy(e).applyQuaternion(this.quaternion),this.position.add(bv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Av,e)}translateY(e){return this.translateOnAxis(Rv,e)}translateZ(e){return this.translateOnAxis(wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Xu.copy(e):Xu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(yl,Xu,this.up):La.lookAt(Xu,yl,this.up),this.quaternion.setFromRotationMatrix(La),l&&(La.extractRotation(l.matrixWorld),Qs.setFromRotationMatrix(La),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(OS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(PS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),La.multiply(e.parent.matrixWorld)),e.applyMatrix4(La),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const p=this.children[r].getObjectByProperty(e,i);if(p!==void 0)return p}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,p=l.length;f<p;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,e,DS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,NS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const f=i[r];(f.matrixWorldAutoUpdate===!0||e===!0)&&f.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let f=0,p=l.length;f<p;f++){const d=l[f];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function f(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let v=0,S=g.length;v<S;v++){const E=g[v];f(e.shapes,E)}else f(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,v=this.material.length;g<v;g++)d.push(f(e.materials,this.material[g]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];l.animations.push(f(e.animations,g))}}if(i){const d=p(e.geometries),g=p(e.materials),v=p(e.textures),S=p(e.images),E=p(e.shapes),M=p(e.skeletons),b=p(e.animations),R=p(e.nodes);d.length>0&&(r.geometries=d),g.length>0&&(r.materials=g),v.length>0&&(r.textures=v),S.length>0&&(r.images=S),E.length>0&&(r.shapes=E),M.length>0&&(r.skeletons=M),b.length>0&&(r.animations=b),R.length>0&&(r.nodes=R)}return r.object=l,r;function p(d){const g=[];for(const v in d){const S=d[v];delete S.metadata,g.push(S)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}$n.DEFAULT_UP=new yt(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zi=new yt,Da=new yt,Qh=new yt,Na=new yt,Js=new yt,$s=new yt,Cv=new yt,Jh=new yt,$h=new yt,td=new yt;let qu=!1;class Ki{constructor(e=new yt,i=new yt,r=new yt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Zi.subVectors(e,i),l.cross(Zi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Zi.subVectors(l,i),Da.subVectors(r,i),Qh.subVectors(e,i);const p=Zi.dot(Zi),d=Zi.dot(Da),g=Zi.dot(Qh),v=Da.dot(Da),S=Da.dot(Qh),E=p*v-d*d;if(E===0)return f.set(0,0,0),null;const M=1/E,b=(v*g-d*S)*M,R=(p*S-d*g)*M;return f.set(1-b-R,R,b)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getUV(e,i,r,l,f,p,d,g){return qu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qu=!0),this.getInterpolation(e,i,r,l,f,p,d,g)}static getInterpolation(e,i,r,l,f,p,d,g){return this.getBarycoord(e,i,r,l,Na)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,Na.x),g.addScaledVector(p,Na.y),g.addScaledVector(d,Na.z),g)}static isFrontFacing(e,i,r,l){return Zi.subVectors(r,i),Da.subVectors(e,i),Zi.cross(Da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),Zi.cross(Da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ki.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,r,l,f){return qu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qu=!0),Ki.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}getInterpolation(e,i,r,l,f){return Ki.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let p,d;Js.subVectors(l,r),$s.subVectors(f,r),Jh.subVectors(e,r);const g=Js.dot(Jh),v=$s.dot(Jh);if(g<=0&&v<=0)return i.copy(r);$h.subVectors(e,l);const S=Js.dot($h),E=$s.dot($h);if(S>=0&&E<=S)return i.copy(l);const M=g*E-S*v;if(M<=0&&g>=0&&S<=0)return p=g/(g-S),i.copy(r).addScaledVector(Js,p);td.subVectors(e,f);const b=Js.dot(td),R=$s.dot(td);if(R>=0&&b<=R)return i.copy(f);const C=b*v-g*R;if(C<=0&&v>=0&&R<=0)return d=v/(v-R),i.copy(r).addScaledVector($s,d);const x=S*R-b*E;if(x<=0&&E-S>=0&&b-R>=0)return Cv.subVectors(f,l),d=(E-S)/(E-S+(b-R)),i.copy(l).addScaledVector(Cv,d);const _=1/(x+C+M);return p=C*_,d=M*_,i.copy(r).addScaledVector(Js,p).addScaledVector($s,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},ju={h:0,s:0,l:0};function ed(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Xe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Qe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Qe.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Qe.workingColorSpace){if(e=SS(e,1),i=hi(i,0,1),r=hi(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,p=2*r-f;this.r=ed(p,f,e+1/3),this.g=ed(p,f,e),this.b=ed(p,f,e-1/3)}return Qe.toWorkingColorSpace(this,l),this}setStyle(e,i=Yn){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const p=l[1],d=l[2];switch(p){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],p=f.length;if(p===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(p===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Yn){const r=E_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}copyLinearToSRGB(e){return this.r=kh(e.r),this.g=kh(e.g),this.b=kh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Qe.fromWorkingColorSpace(Jn.copy(this),e),Math.round(hi(Jn.r*255,0,255))*65536+Math.round(hi(Jn.g*255,0,255))*256+Math.round(hi(Jn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Jn.copy(this),i);const r=Jn.r,l=Jn.g,f=Jn.b,p=Math.max(r,l,f),d=Math.min(r,l,f);let g,v;const S=(d+p)/2;if(d===p)g=0,v=0;else{const E=p-d;switch(v=S<=.5?E/(p+d):E/(2-p-d),p){case r:g=(l-f)/E+(l<f?6:0);break;case l:g=(f-r)/E+2;break;case f:g=(r-l)/E+4;break}g/=6}return e.h=g,e.s=v,e.l=S,e}getRGB(e,i=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Jn.copy(this),i),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=Yn){Qe.fromWorkingColorSpace(Jn.copy(this),e);const i=Jn.r,r=Jn.g,l=Jn.b;return e!==Yn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+i,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(gr),e.getHSL(ju);const r=Gh(gr.h,ju.h,i),l=Gh(gr.s,ju.s,i),f=Gh(gr.l,ju.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Xe;Xe.NAMES=E_;let zS=0;class yc extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=uo,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=dd,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hd&&(r.blendSrc=this.blendSrc),this.blendDst!==dd&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==cc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const p=[];for(const d in f){const g=f[d];delete g.metadata,p.push(g)}return p}if(i){const f=l(e.textures),p=l(e.images);f.length>0&&(r.textures=f),p.length>0&&(r.images=p)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vr extends yc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=o_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bn=new yt,Yu=new qe;class la{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=gv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Yu.fromBufferAttribute(this,i),Yu.applyMatrix3(e),this.setXY(i,Yu.x,Yu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix3(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix4(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyNormalMatrix(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.transformDirection(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=gl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=fi(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=gl(i,this.array)),i}setX(e,i){return this.normalized&&(i=fi(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=gl(i,this.array)),i}setY(e,i){return this.normalized&&(i=fi(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=gl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=fi(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=gl(i,this.array)),i}setW(e,i){return this.normalized&&(i=fi(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=fi(i,this.array),r=fi(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=fi(i,this.array),r=fi(r,this.array),l=fi(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=fi(i,this.array),r=fi(r,this.array),l=fi(l,this.array),f=fi(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gv&&(e.usage=this.usage),e}}class T_ extends la{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class b_ extends la{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class as extends la{constructor(e,i,r){super(new Float32Array(e),i,r)}}let BS=0;const zi=new Nn,nd=new $n,to=new yt,Mi=new bl,Sl=new bl,Hn=new yt;class os extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(__(e)?b_:T_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new Ue().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,i,r){return zi.makeTranslation(e,i,r),this.applyMatrix4(zi),this}scale(e,i,r){return zi.makeScale(e,i,r),this.applyMatrix4(zi),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const f=e[r];i.push(f.x,f.y,f.z||0)}return this.setAttribute("position",new as(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new yt(-1/0,-1/0,-1/0),new yt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];Mi.setFromBufferAttribute(f),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new yt,1/0);return}if(e){const r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),i)for(let f=0,p=i.length;f<p;f++){const d=i[f];Sl.setFromBufferAttribute(d),this.morphTargetsRelative?(Hn.addVectors(Mi.min,Sl.min),Mi.expandByPoint(Hn),Hn.addVectors(Mi.max,Sl.max),Mi.expandByPoint(Hn)):(Mi.expandByPoint(Sl.min),Mi.expandByPoint(Sl.max))}Mi.getCenter(r);let l=0;for(let f=0,p=e.count;f<p;f++)Hn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Hn));if(i)for(let f=0,p=i.length;f<p;f++){const d=i[f],g=this.morphTargetsRelative;for(let v=0,S=d.count;v<S;v++)Hn.fromBufferAttribute(d,v),g&&(to.fromBufferAttribute(e,v),Hn.add(to)),l=Math.max(l,r.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,f=i.normal.array,p=i.uv.array,d=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new la(new Float32Array(4*d),4));const g=this.getAttribute("tangent").array,v=[],S=[];for(let A=0;A<d;A++)v[A]=new yt,S[A]=new yt;const E=new yt,M=new yt,b=new yt,R=new qe,C=new qe,x=new qe,_=new yt,H=new yt;function O(A,k,ot){E.fromArray(l,A*3),M.fromArray(l,k*3),b.fromArray(l,ot*3),R.fromArray(p,A*2),C.fromArray(p,k*2),x.fromArray(p,ot*2),M.sub(E),b.sub(E),C.sub(R),x.sub(R);const _t=1/(C.x*x.y-x.x*C.y);isFinite(_t)&&(_.copy(M).multiplyScalar(x.y).addScaledVector(b,-C.y).multiplyScalar(_t),H.copy(b).multiplyScalar(C.x).addScaledVector(M,-x.x).multiplyScalar(_t),v[A].add(_),v[k].add(_),v[ot].add(_),S[A].add(H),S[k].add(H),S[ot].add(H))}let B=this.groups;B.length===0&&(B=[{start:0,count:r.length}]);for(let A=0,k=B.length;A<k;++A){const ot=B[A],_t=ot.start,j=ot.count;for(let rt=_t,I=_t+j;rt<I;rt+=3)O(r[rt+0],r[rt+1],r[rt+2])}const Z=new yt,q=new yt,X=new yt,xt=new yt;function U(A){X.fromArray(f,A*3),xt.copy(X);const k=v[A];Z.copy(k),Z.sub(X.multiplyScalar(X.dot(k))).normalize(),q.crossVectors(xt,k);const _t=q.dot(S[A])<0?-1:1;g[A*4]=Z.x,g[A*4+1]=Z.y,g[A*4+2]=Z.z,g[A*4+3]=_t}for(let A=0,k=B.length;A<k;++A){const ot=B[A],_t=ot.start,j=ot.count;for(let rt=_t,I=_t+j;rt<I;rt+=3)U(r[rt+0]),U(r[rt+1]),U(r[rt+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new la(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let M=0,b=r.count;M<b;M++)r.setXYZ(M,0,0,0);const l=new yt,f=new yt,p=new yt,d=new yt,g=new yt,v=new yt,S=new yt,E=new yt;if(e)for(let M=0,b=e.count;M<b;M+=3){const R=e.getX(M+0),C=e.getX(M+1),x=e.getX(M+2);l.fromBufferAttribute(i,R),f.fromBufferAttribute(i,C),p.fromBufferAttribute(i,x),S.subVectors(p,f),E.subVectors(l,f),S.cross(E),d.fromBufferAttribute(r,R),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,x),d.add(S),g.add(S),v.add(S),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(C,g.x,g.y,g.z),r.setXYZ(x,v.x,v.y,v.z)}else for(let M=0,b=i.count;M<b;M+=3)l.fromBufferAttribute(i,M+0),f.fromBufferAttribute(i,M+1),p.fromBufferAttribute(i,M+2),S.subVectors(p,f),E.subVectors(l,f),S.cross(E),r.setXYZ(M+0,S.x,S.y,S.z),r.setXYZ(M+1,S.x,S.y,S.z),r.setXYZ(M+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Hn.fromBufferAttribute(e,i),Hn.normalize(),e.setXYZ(i,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function e(d,g){const v=d.array,S=d.itemSize,E=d.normalized,M=new v.constructor(g.length*S);let b=0,R=0;for(let C=0,x=g.length;C<x;C++){d.isInterleavedBufferAttribute?b=g[C]*d.data.stride+d.offset:b=g[C]*S;for(let _=0;_<S;_++)M[R++]=v[b++]}return new la(M,S,E)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new os,r=this.index.array,l=this.attributes;for(const d in l){const g=l[d],v=e(g,r);i.setAttribute(d,v)}const f=this.morphAttributes;for(const d in f){const g=[],v=f[d];for(let S=0,E=v.length;S<E;S++){const M=v[S],b=e(M,r);g.push(b)}i.morphAttributes[d]=g}i.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let d=0,g=p.length;d<g;d++){const v=p[d];i.addGroup(v.start,v.count,v.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const v in g)g[v]!==void 0&&(e[v]=g[v]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const g in r){const v=r[g];e.data.attributes[g]=v.toJSON(e.data)}const l={};let f=!1;for(const g in this.morphAttributes){const v=this.morphAttributes[g],S=[];for(let E=0,M=v.length;E<M;E++){const b=v[E];S.push(b.toJSON(e.data))}S.length>0&&(l[g]=S,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(e.data.groups=JSON.parse(JSON.stringify(p)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const v in l){const S=l[v];this.setAttribute(v,S.clone(i))}const f=e.morphAttributes;for(const v in f){const S=[],E=f[v];for(let M=0,b=E.length;M<b;M++)S.push(E[M].clone(i));this.morphAttributes[v]=S}this.morphTargetsRelative=e.morphTargetsRelative;const p=e.groups;for(let v=0,S=p.length;v<S;v++){const E=p[v];this.addGroup(E.start,E.count,E.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uv=new Nn,Zr=new wS,Zu=new bd,Lv=new yt,eo=new yt,no=new yt,io=new yt,id=new yt,Ku=new yt,Qu=new qe,Ju=new qe,$u=new qe,Dv=new yt,Nv=new yt,Ov=new yt,tc=new yt,ec=new yt;class Ba extends $n{constructor(e=new os,i=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=l.length;f<p;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,p=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){Ku.set(0,0,0);for(let g=0,v=f.length;g<v;g++){const S=d[g],E=f[g];S!==0&&(id.fromBufferAttribute(E,e),p?Ku.addScaledVector(id,S):Ku.addScaledVector(id.sub(i),S))}i.add(Ku)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Zu.copy(r.boundingSphere),Zu.applyMatrix4(f),Zr.copy(e.ray).recast(e.near),!(Zu.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Zu,Lv)===null||Zr.origin.distanceToSquared(Lv)>(e.far-e.near)**2))&&(Uv.copy(f).invert(),Zr.copy(e.ray).applyMatrix4(Uv),!(r.boundingBox!==null&&Zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Zr)))}_computeIntersections(e,i,r){let l;const f=this.geometry,p=this.material,d=f.index,g=f.attributes.position,v=f.attributes.uv,S=f.attributes.uv1,E=f.attributes.normal,M=f.groups,b=f.drawRange;if(d!==null)if(Array.isArray(p))for(let R=0,C=M.length;R<C;R++){const x=M[R],_=p[x.materialIndex],H=Math.max(x.start,b.start),O=Math.min(d.count,Math.min(x.start+x.count,b.start+b.count));for(let B=H,Z=O;B<Z;B+=3){const q=d.getX(B),X=d.getX(B+1),xt=d.getX(B+2);l=nc(this,_,e,r,v,S,E,q,X,xt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),C=Math.min(d.count,b.start+b.count);for(let x=R,_=C;x<_;x+=3){const H=d.getX(x),O=d.getX(x+1),B=d.getX(x+2);l=nc(this,p,e,r,v,S,E,H,O,B),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(p))for(let R=0,C=M.length;R<C;R++){const x=M[R],_=p[x.materialIndex],H=Math.max(x.start,b.start),O=Math.min(g.count,Math.min(x.start+x.count,b.start+b.count));for(let B=H,Z=O;B<Z;B+=3){const q=B,X=B+1,xt=B+2;l=nc(this,_,e,r,v,S,E,q,X,xt),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),C=Math.min(g.count,b.start+b.count);for(let x=R,_=C;x<_;x+=3){const H=x,O=x+1,B=x+2;l=nc(this,p,e,r,v,S,E,H,O,B),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function FS(o,e,i,r,l,f,p,d){let g;if(e.side===di?g=r.intersectTriangle(p,f,l,!0,d):g=r.intersectTriangle(l,f,p,e.side===Er,d),g===null)return null;ec.copy(d),ec.applyMatrix4(o.matrixWorld);const v=i.ray.origin.distanceTo(ec);return v<i.near||v>i.far?null:{distance:v,point:ec.clone(),object:o}}function nc(o,e,i,r,l,f,p,d,g,v){o.getVertexPosition(d,eo),o.getVertexPosition(g,no),o.getVertexPosition(v,io);const S=FS(o,e,i,r,eo,no,io,tc);if(S){l&&(Qu.fromBufferAttribute(l,d),Ju.fromBufferAttribute(l,g),$u.fromBufferAttribute(l,v),S.uv=Ki.getInterpolation(tc,eo,no,io,Qu,Ju,$u,new qe)),f&&(Qu.fromBufferAttribute(f,d),Ju.fromBufferAttribute(f,g),$u.fromBufferAttribute(f,v),S.uv1=Ki.getInterpolation(tc,eo,no,io,Qu,Ju,$u,new qe),S.uv2=S.uv1),p&&(Dv.fromBufferAttribute(p,d),Nv.fromBufferAttribute(p,g),Ov.fromBufferAttribute(p,v),S.normal=Ki.getInterpolation(tc,eo,no,io,Dv,Nv,Ov,new yt),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const E={a:d,b:g,c:v,normal:new yt,materialIndex:0};Ki.getNormal(eo,no,io,E.normal),S.face=E}return S}class yo extends os{constructor(e=1,i=1,r=1,l=1,f=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:p};const d=this;l=Math.floor(l),f=Math.floor(f),p=Math.floor(p);const g=[],v=[],S=[],E=[];let M=0,b=0;R("z","y","x",-1,-1,r,i,e,p,f,0),R("z","y","x",1,-1,r,i,-e,p,f,1),R("x","z","y",1,1,e,r,i,l,p,2),R("x","z","y",1,-1,e,r,-i,l,p,3),R("x","y","z",1,-1,e,i,r,l,f,4),R("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(g),this.setAttribute("position",new as(v,3)),this.setAttribute("normal",new as(S,3)),this.setAttribute("uv",new as(E,2));function R(C,x,_,H,O,B,Z,q,X,xt,U){const A=B/X,k=Z/xt,ot=B/2,_t=Z/2,j=q/2,rt=X+1,I=xt+1;let J=0,$=0;const ut=new yt;for(let N=0;N<I;N++){const nt=N*k-_t;for(let gt=0;gt<rt;gt++){const tt=gt*A-ot;ut[C]=tt*H,ut[x]=nt*O,ut[_]=j,v.push(ut.x,ut.y,ut.z),ut[C]=0,ut[x]=0,ut[_]=q>0?1:-1,S.push(ut.x,ut.y,ut.z),E.push(gt/X),E.push(1-N/xt),J+=1}}for(let N=0;N<xt;N++)for(let nt=0;nt<X;nt++){const gt=M+nt+rt*N,tt=M+nt+rt*(N+1),at=M+(nt+1)+rt*(N+1),Tt=M+(nt+1)+rt*N;g.push(gt,tt,Tt),g.push(tt,at,Tt),$+=6}d.addGroup(b,$,U),b+=$,M+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function si(o){const e={};for(let i=0;i<o.length;i++){const r=go(o[i]);for(const l in r)e[l]=r[l]}return e}function IS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function A_(o){return o.getRenderTarget()===null?o.outputColorSpace:Qe.workingColorSpace}const HS={clone:go,merge:si};var GS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ss extends yc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GS,this.fragmentShader=VS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=IS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const p=this.uniforms[l].value;p&&p.isTexture?i.uniforms[l]={type:"t",value:p.toJSON(e).uuid}:p&&p.isColor?i.uniforms[l]={type:"c",value:p.getHex()}:p&&p.isVector2?i.uniforms[l]={type:"v2",value:p.toArray()}:p&&p.isVector3?i.uniforms[l]={type:"v3",value:p.toArray()}:p&&p.isVector4?i.uniforms[l]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?i.uniforms[l]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?i.uniforms[l]={type:"m4",value:p.toArray()}:i.uniforms[l]={value:p}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class R_ extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nn,this.projectionMatrix=new Nn,this.projectionMatrixInverse=new Nn,this.coordinateSystem=za}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fi extends R_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=yd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yd*2*Math.atan(Math.tan(Hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,r,l,f,p){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Hh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const p=this.view;if(this.view!==null&&this.view.enabled){const g=p.fullWidth,v=p.fullHeight;f+=p.offsetX*l/g,i-=p.offsetY*r/v,l*=p.width/g,r*=p.height/v}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ao=-90,ro=1;class kS extends $n{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Fi(ao,ro,e,i);l.layers=this.layers,this.add(l);const f=new Fi(ao,ro,e,i);f.layers=this.layers,this.add(f);const p=new Fi(ao,ro,e,i);p.layers=this.layers,this.add(p);const d=new Fi(ao,ro,e,i);d.layers=this.layers,this.add(d);const g=new Fi(ao,ro,e,i);g.layers=this.layers,this.add(g);const v=new Fi(ao,ro,e,i);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,p,d,g]=i;for(const v of i)this.remove(v);if(e===za)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===pc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const v of i)this.add(v),v.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,p,d,g,v,S]=this.children,E=e.getRenderTarget(),M=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,p),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,g),e.setRenderTarget(r,4,l),e.render(i,v),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,S),e.setRenderTarget(E,M,b),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class w_ extends Ei{constructor(e,i,r,l,f,p,d,g,v,S){e=e!==void 0?e:[],i=i!==void 0?i:fo,super(e,i,r,l,f,p,d,g,v,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WS extends rs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(xl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===is?Yn:Ii),this.texture=new w_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new yo(5,5,5),f=new ss({name:"CubemapFromEquirect",uniforms:go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:di,blending:Sr});f.uniforms.tEquirect.value=i;const p=new Ba(l,f),d=i.minFilter;return i.minFilter===Ml&&(i.minFilter=Bi),new kS(1,10,this).update(e,p),i.minFilter=d,p.geometry.dispose(),p.material.dispose(),this}clear(e,i,r,l){const f=e.getRenderTarget();for(let p=0;p<6;p++)e.setRenderTarget(this,p),e.clear(i,r,l);e.setRenderTarget(f)}}const ad=new yt,XS=new yt,qS=new Ue;class Qr{constructor(e=new yt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ad.subVectors(r,i).cross(XS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(ad),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||qS.getNormalMatrix(e),l=this.coplanarPoint(ad).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new bd,ic=new yt;class Ad{constructor(e=new Qr,i=new Qr,r=new Qr,l=new Qr,f=new Qr,p=new Qr){this.planes=[e,i,r,l,f,p]}set(e,i,r,l,f,p){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(f),d[5].copy(p),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=za){const r=this.planes,l=e.elements,f=l[0],p=l[1],d=l[2],g=l[3],v=l[4],S=l[5],E=l[6],M=l[7],b=l[8],R=l[9],C=l[10],x=l[11],_=l[12],H=l[13],O=l[14],B=l[15];if(r[0].setComponents(g-f,M-v,x-b,B-_).normalize(),r[1].setComponents(g+f,M+v,x+b,B+_).normalize(),r[2].setComponents(g+p,M+S,x+R,B+H).normalize(),r[3].setComponents(g-p,M-S,x-R,B-H).normalize(),r[4].setComponents(g-d,M-E,x-C,B-O).normalize(),i===za)r[5].setComponents(g+d,M+E,x+C,B+O).normalize();else if(i===pc)r[5].setComponents(d,E,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ic.x=l.normal.x>0?e.max.x:e.min.x,ic.y=l.normal.y>0?e.max.y:e.min.y,ic.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C_(){let o=null,e=!1,i=null,r=null;function l(f,p){i(f,p),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function jS(o,e){const i=e.isWebGL2,r=new WeakMap;function l(v,S){const E=v.array,M=v.usage,b=E.byteLength,R=o.createBuffer();o.bindBuffer(S,R),o.bufferData(S,E,M),v.onUploadCallback();let C;if(E instanceof Float32Array)C=o.FLOAT;else if(E instanceof Uint16Array)if(v.isFloat16BufferAttribute)if(i)C=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else C=o.UNSIGNED_SHORT;else if(E instanceof Int16Array)C=o.SHORT;else if(E instanceof Uint32Array)C=o.UNSIGNED_INT;else if(E instanceof Int32Array)C=o.INT;else if(E instanceof Int8Array)C=o.BYTE;else if(E instanceof Uint8Array)C=o.UNSIGNED_BYTE;else if(E instanceof Uint8ClampedArray)C=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+E);return{buffer:R,type:C,bytesPerElement:E.BYTES_PER_ELEMENT,version:v.version,size:b}}function f(v,S,E){const M=S.array,b=S._updateRange,R=S.updateRanges;if(o.bindBuffer(E,v),b.count===-1&&R.length===0&&o.bufferSubData(E,0,M),R.length!==0){for(let C=0,x=R.length;C<x;C++){const _=R[C];i?o.bufferSubData(E,_.start*M.BYTES_PER_ELEMENT,M,_.start,_.count):o.bufferSubData(E,_.start*M.BYTES_PER_ELEMENT,M.subarray(_.start,_.start+_.count))}S.clearUpdateRanges()}b.count!==-1&&(i?o.bufferSubData(E,b.offset*M.BYTES_PER_ELEMENT,M,b.offset,b.count):o.bufferSubData(E,b.offset*M.BYTES_PER_ELEMENT,M.subarray(b.offset,b.offset+b.count)),b.count=-1),S.onUploadCallback()}function p(v){return v.isInterleavedBufferAttribute&&(v=v.data),r.get(v)}function d(v){v.isInterleavedBufferAttribute&&(v=v.data);const S=r.get(v);S&&(o.deleteBuffer(S.buffer),r.delete(v))}function g(v,S){if(v.isGLBufferAttribute){const M=r.get(v);(!M||M.version<v.version)&&r.set(v,{buffer:v.buffer,type:v.type,bytesPerElement:v.elementSize,version:v.version});return}v.isInterleavedBufferAttribute&&(v=v.data);const E=r.get(v);if(E===void 0)r.set(v,l(v,S));else if(E.version<v.version){if(E.size!==v.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");f(E.buffer,v,S),E.version=v.version}}return{get:p,remove:d,update:g}}class Rd extends os{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,p=i/2,d=Math.floor(r),g=Math.floor(l),v=d+1,S=g+1,E=e/d,M=i/g,b=[],R=[],C=[],x=[];for(let _=0;_<S;_++){const H=_*M-p;for(let O=0;O<v;O++){const B=O*E-f;R.push(B,-H,0),C.push(0,0,1),x.push(O/d),x.push(1-_/g)}}for(let _=0;_<g;_++)for(let H=0;H<d;H++){const O=H+v*_,B=H+v*(_+1),Z=H+1+v*(_+1),q=H+1+v*_;b.push(O,B,q),b.push(B,Z,q)}this.setIndex(b),this.setAttribute("position",new as(R,3)),this.setAttribute("normal",new as(C,3)),this.setAttribute("uv",new as(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rd(e.width,e.height,e.widthSegments,e.heightSegments)}}var YS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ox=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",bx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_E=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ae={alphahash_fragment:YS,alphahash_pars_fragment:ZS,alphamap_fragment:KS,alphamap_pars_fragment:QS,alphatest_fragment:JS,alphatest_pars_fragment:$S,aomap_fragment:tx,aomap_pars_fragment:ex,batching_pars_vertex:nx,batching_vertex:ix,begin_vertex:ax,beginnormal_vertex:rx,bsdfs:sx,iridescence_fragment:ox,bumpmap_pars_fragment:lx,clipping_planes_fragment:ux,clipping_planes_pars_fragment:cx,clipping_planes_pars_vertex:fx,clipping_planes_vertex:hx,color_fragment:dx,color_pars_fragment:px,color_pars_vertex:mx,color_vertex:gx,common:vx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:yx,displacementmap_pars_vertex:Sx,displacementmap_vertex:xx,emissivemap_fragment:Mx,emissivemap_pars_fragment:Ex,colorspace_fragment:Tx,colorspace_pars_fragment:bx,envmap_fragment:Ax,envmap_common_pars_fragment:Rx,envmap_pars_fragment:wx,envmap_pars_vertex:Cx,envmap_physical_pars_fragment:Gx,envmap_vertex:Ux,fog_vertex:Lx,fog_pars_vertex:Dx,fog_fragment:Nx,fog_pars_fragment:Ox,gradientmap_pars_fragment:Px,lightmap_fragment:zx,lightmap_pars_fragment:Bx,lights_lambert_fragment:Fx,lights_lambert_pars_fragment:Ix,lights_pars_begin:Hx,lights_toon_fragment:Vx,lights_toon_pars_fragment:kx,lights_phong_fragment:Wx,lights_phong_pars_fragment:Xx,lights_physical_fragment:qx,lights_physical_pars_fragment:jx,lights_fragment_begin:Yx,lights_fragment_maps:Zx,lights_fragment_end:Kx,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:Jx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:tM,map_fragment:eM,map_pars_fragment:nM,map_particle_fragment:iM,map_particle_pars_fragment:aM,metalnessmap_fragment:rM,metalnessmap_pars_fragment:sM,morphcolor_vertex:oM,morphnormal_vertex:lM,morphtarget_pars_vertex:uM,morphtarget_vertex:cM,normal_fragment_begin:fM,normal_fragment_maps:hM,normal_pars_fragment:dM,normal_pars_vertex:pM,normal_vertex:mM,normalmap_pars_fragment:gM,clearcoat_normal_fragment_begin:vM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:yM,iridescence_pars_fragment:SM,opaque_fragment:xM,packing:MM,premultiplied_alpha_fragment:EM,project_vertex:TM,dithering_fragment:bM,dithering_pars_fragment:AM,roughnessmap_fragment:RM,roughnessmap_pars_fragment:wM,shadowmap_pars_fragment:CM,shadowmap_pars_vertex:UM,shadowmap_vertex:LM,shadowmask_pars_fragment:DM,skinbase_vertex:NM,skinning_pars_vertex:OM,skinning_vertex:PM,skinnormal_vertex:zM,specularmap_fragment:BM,specularmap_pars_fragment:FM,tonemapping_fragment:IM,tonemapping_pars_fragment:HM,transmission_fragment:GM,transmission_pars_fragment:VM,uv_pars_fragment:kM,uv_pars_vertex:WM,uv_vertex:XM,worldpos_vertex:qM,background_vert:jM,background_frag:YM,backgroundCube_vert:ZM,backgroundCube_frag:KM,cube_vert:QM,cube_frag:JM,depth_vert:$M,depth_frag:tE,distanceRGBA_vert:eE,distanceRGBA_frag:nE,equirect_vert:iE,equirect_frag:aE,linedashed_vert:rE,linedashed_frag:sE,meshbasic_vert:oE,meshbasic_frag:lE,meshlambert_vert:uE,meshlambert_frag:cE,meshmatcap_vert:fE,meshmatcap_frag:hE,meshnormal_vert:dE,meshnormal_frag:pE,meshphong_vert:mE,meshphong_frag:gE,meshphysical_vert:vE,meshphysical_frag:_E,meshtoon_vert:yE,meshtoon_frag:SE,points_vert:xE,points_frag:ME,shadow_vert:EE,shadow_frag:TE,sprite_vert:bE,sprite_frag:AE},Ft={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},oa={basic:{uniforms:si([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:si([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:si([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:si([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:si([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:si([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:si([Ft.points,Ft.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:si([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:si([Ft.common,Ft.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:si([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:si([Ft.sprite,Ft.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:si([Ft.common,Ft.displacementmap,{referencePosition:{value:new yt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:si([Ft.lights,Ft.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};oa.physical={uniforms:si([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const ac={r:0,b:0,g:0};function RE(o,e,i,r,l,f,p){const d=new Xe(0);let g=f===!0?0:1,v,S,E=null,M=0,b=null;function R(x,_){let H=!1,O=_.isScene===!0?_.background:null;O&&O.isTexture&&(O=(_.backgroundBlurriness>0?i:e).get(O)),O===null?C(d,g):O&&O.isColor&&(C(O,1),H=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,p):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,p),(o.autoClear||H)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),O&&(O.isCubeTexture||O.mapping===vc)?(S===void 0&&(S=new Ba(new yo(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:go(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(Z,q,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),S.material.uniforms.envMap.value=O,S.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,S.material.toneMapped=Qe.getTransfer(O.colorSpace)!==sn,(E!==O||M!==O.version||b!==o.toneMapping)&&(S.material.needsUpdate=!0,E=O,M=O.version,b=o.toneMapping),S.layers.enableAll(),x.unshift(S,S.geometry,S.material,0,0,null)):O&&O.isTexture&&(v===void 0&&(v=new Ba(new Rd(2,2),new ss({name:"BackgroundMaterial",uniforms:go(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(v)),v.material.uniforms.t2D.value=O,v.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,v.material.toneMapped=Qe.getTransfer(O.colorSpace)!==sn,O.matrixAutoUpdate===!0&&O.updateMatrix(),v.material.uniforms.uvTransform.value.copy(O.matrix),(E!==O||M!==O.version||b!==o.toneMapping)&&(v.material.needsUpdate=!0,E=O,M=O.version,b=o.toneMapping),v.layers.enableAll(),x.unshift(v,v.geometry,v.material,0,0,null))}function C(x,_){x.getRGB(ac,A_(o)),r.buffers.color.setClear(ac.r,ac.g,ac.b,_,p)}return{getClearColor:function(){return d},setClearColor:function(x,_=1){d.set(x),g=_,C(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(x){g=x,C(d,g)},render:R}}function wE(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),f=r.isWebGL2?null:e.get("OES_vertex_array_object"),p=r.isWebGL2||f!==null,d={},g=x(null);let v=g,S=!1;function E(j,rt,I,J,$){let ut=!1;if(p){const N=C(J,I,rt);v!==N&&(v=N,b(v.object)),ut=_(j,J,I,$),ut&&H(j,J,I,$)}else{const N=rt.wireframe===!0;(v.geometry!==J.id||v.program!==I.id||v.wireframe!==N)&&(v.geometry=J.id,v.program=I.id,v.wireframe=N,ut=!0)}$!==null&&i.update($,o.ELEMENT_ARRAY_BUFFER),(ut||S)&&(S=!1,xt(j,rt,I,J),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get($).buffer))}function M(){return r.isWebGL2?o.createVertexArray():f.createVertexArrayOES()}function b(j){return r.isWebGL2?o.bindVertexArray(j):f.bindVertexArrayOES(j)}function R(j){return r.isWebGL2?o.deleteVertexArray(j):f.deleteVertexArrayOES(j)}function C(j,rt,I){const J=I.wireframe===!0;let $=d[j.id];$===void 0&&($={},d[j.id]=$);let ut=$[rt.id];ut===void 0&&(ut={},$[rt.id]=ut);let N=ut[J];return N===void 0&&(N=x(M()),ut[J]=N),N}function x(j){const rt=[],I=[],J=[];for(let $=0;$<l;$++)rt[$]=0,I[$]=0,J[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:I,attributeDivisors:J,object:j,attributes:{},index:null}}function _(j,rt,I,J){const $=v.attributes,ut=rt.attributes;let N=0;const nt=I.getAttributes();for(const gt in nt)if(nt[gt].location>=0){const at=$[gt];let Tt=ut[gt];if(Tt===void 0&&(gt==="instanceMatrix"&&j.instanceMatrix&&(Tt=j.instanceMatrix),gt==="instanceColor"&&j.instanceColor&&(Tt=j.instanceColor)),at===void 0||at.attribute!==Tt||Tt&&at.data!==Tt.data)return!0;N++}return v.attributesNum!==N||v.index!==J}function H(j,rt,I,J){const $={},ut=rt.attributes;let N=0;const nt=I.getAttributes();for(const gt in nt)if(nt[gt].location>=0){let at=ut[gt];at===void 0&&(gt==="instanceMatrix"&&j.instanceMatrix&&(at=j.instanceMatrix),gt==="instanceColor"&&j.instanceColor&&(at=j.instanceColor));const Tt={};Tt.attribute=at,at&&at.data&&(Tt.data=at.data),$[gt]=Tt,N++}v.attributes=$,v.attributesNum=N,v.index=J}function O(){const j=v.newAttributes;for(let rt=0,I=j.length;rt<I;rt++)j[rt]=0}function B(j){Z(j,0)}function Z(j,rt){const I=v.newAttributes,J=v.enabledAttributes,$=v.attributeDivisors;I[j]=1,J[j]===0&&(o.enableVertexAttribArray(j),J[j]=1),$[j]!==rt&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,rt),$[j]=rt)}function q(){const j=v.newAttributes,rt=v.enabledAttributes;for(let I=0,J=rt.length;I<J;I++)rt[I]!==j[I]&&(o.disableVertexAttribArray(I),rt[I]=0)}function X(j,rt,I,J,$,ut,N){N===!0?o.vertexAttribIPointer(j,rt,I,$,ut):o.vertexAttribPointer(j,rt,I,J,$,ut)}function xt(j,rt,I,J){if(r.isWebGL2===!1&&(j.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;O();const $=J.attributes,ut=I.getAttributes(),N=rt.defaultAttributeValues;for(const nt in ut){const gt=ut[nt];if(gt.location>=0){let tt=$[nt];if(tt===void 0&&(nt==="instanceMatrix"&&j.instanceMatrix&&(tt=j.instanceMatrix),nt==="instanceColor"&&j.instanceColor&&(tt=j.instanceColor)),tt!==void 0){const at=tt.normalized,Tt=tt.itemSize,Ut=i.get(tt);if(Ut===void 0)continue;const Vt=Ut.buffer,It=Ut.type,Kt=Ut.bytesPerElement,Ht=r.isWebGL2===!0&&(It===o.INT||It===o.UNSIGNED_INT||tt.gpuType===u_);if(tt.isInterleavedBufferAttribute){const ce=tt.data,ft=ce.stride,Se=tt.offset;if(ce.isInstancedInterleavedBuffer){for(let Wt=0;Wt<gt.locationSize;Wt++)Z(gt.location+Wt,ce.meshPerAttribute);j.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Wt=0;Wt<gt.locationSize;Wt++)B(gt.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,Vt);for(let Wt=0;Wt<gt.locationSize;Wt++)X(gt.location+Wt,Tt/gt.locationSize,It,at,ft*Kt,(Se+Tt/gt.locationSize*Wt)*Kt,Ht)}else{if(tt.isInstancedBufferAttribute){for(let ce=0;ce<gt.locationSize;ce++)Z(gt.location+ce,tt.meshPerAttribute);j.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ce=0;ce<gt.locationSize;ce++)B(gt.location+ce);o.bindBuffer(o.ARRAY_BUFFER,Vt);for(let ce=0;ce<gt.locationSize;ce++)X(gt.location+ce,Tt/gt.locationSize,It,at,Tt*Kt,Tt/gt.locationSize*ce*Kt,Ht)}}else if(N!==void 0){const at=N[nt];if(at!==void 0)switch(at.length){case 2:o.vertexAttrib2fv(gt.location,at);break;case 3:o.vertexAttrib3fv(gt.location,at);break;case 4:o.vertexAttrib4fv(gt.location,at);break;default:o.vertexAttrib1fv(gt.location,at)}}}}q()}function U(){ot();for(const j in d){const rt=d[j];for(const I in rt){const J=rt[I];for(const $ in J)R(J[$].object),delete J[$];delete rt[I]}delete d[j]}}function A(j){if(d[j.id]===void 0)return;const rt=d[j.id];for(const I in rt){const J=rt[I];for(const $ in J)R(J[$].object),delete J[$];delete rt[I]}delete d[j.id]}function k(j){for(const rt in d){const I=d[rt];if(I[j.id]===void 0)continue;const J=I[j.id];for(const $ in J)R(J[$].object),delete J[$];delete I[j.id]}}function ot(){_t(),S=!0,v!==g&&(v=g,b(v.object))}function _t(){g.geometry=null,g.program=null,g.wireframe=!1}return{setup:E,reset:ot,resetDefaultState:_t,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:k,initAttributes:O,enableAttribute:B,disableUnusedAttributes:q}}function CE(o,e,i,r){const l=r.isWebGL2;let f;function p(S){f=S}function d(S,E){o.drawArrays(f,S,E),i.update(E,f,1)}function g(S,E,M){if(M===0)return;let b,R;if(l)b=o,R="drawArraysInstanced";else if(b=e.get("ANGLE_instanced_arrays"),R="drawArraysInstancedANGLE",b===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[R](f,S,E,M),i.update(E,f,M)}function v(S,E,M){if(M===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let R=0;R<M;R++)this.render(S[R],E[R]);else{b.multiDrawArraysWEBGL(f,S,0,E,0,M);let R=0;for(let C=0;C<M;C++)R+=E[C];i.update(R,f,1)}}this.setMode=p,this.render=d,this.renderInstances=g,this.renderMultiDraw=v}function UE(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(X.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function f(X){if(X==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";X="mediump"}return X==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const p=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let d=i.precision!==void 0?i.precision:"highp";const g=f(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=p||e.has("WEBGL_draw_buffers"),S=i.logarithmicDepthBuffer===!0,E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),R=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),C=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),H=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=M>0,B=p||e.has("OES_texture_float"),Z=O&&B,q=p?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:p,drawBuffers:v,getMaxAnisotropy:l,getMaxPrecision:f,precision:d,logarithmicDepthBuffer:S,maxTextures:E,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:R,maxAttributes:C,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:H,vertexTextures:O,floatFragmentTextures:B,floatVertexTextures:Z,maxSamples:q}}function LE(o){const e=this;let i=null,r=0,l=!1,f=!1;const p=new Qr,d=new Ue,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(E,M){const b=E.length!==0||M||r!==0||l;return l=M,r=E.length,b},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(E,M){i=S(E,M,0)},this.setState=function(E,M,b){const R=E.clippingPlanes,C=E.clipIntersection,x=E.clipShadows,_=o.get(E);if(!l||R===null||R.length===0||f&&!x)f?S(null):v();else{const H=f?0:r,O=H*4;let B=_.clippingState||null;g.value=B,B=S(R,M,O,b);for(let Z=0;Z!==O;++Z)B[Z]=i[Z];_.clippingState=B,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=H}};function v(){g.value!==i&&(g.value=i,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(E,M,b,R){const C=E!==null?E.length:0;let x=null;if(C!==0){if(x=g.value,R!==!0||x===null){const _=b+C*4,H=M.matrixWorldInverse;d.getNormalMatrix(H),(x===null||x.length<_)&&(x=new Float32Array(_));for(let O=0,B=b;O!==C;++O,B+=4)p.copy(E[O]).applyMatrix4(H,d),p.normal.toArray(x,B),x[B+3]=p.constant}g.value=x,g.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}function DE(o){let e=new WeakMap;function i(p,d){return d===pd?p.mapping=fo:d===md&&(p.mapping=ho),p}function r(p){if(p&&p.isTexture){const d=p.mapping;if(d===pd||d===md)if(e.has(p)){const g=e.get(p).texture;return i(g,p.mapping)}else{const g=p.image;if(g&&g.height>0){const v=new WS(g.height/2);return v.fromEquirectangularTexture(o,p),e.set(p,v),p.addEventListener("dispose",l),i(v.texture,p.mapping)}else return null}}return p}function l(p){const d=p.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}class U_ extends R_{constructor(e=-1,i=1,r=1,l=-1,f=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=p,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,p=r+e,d=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=v*this.view.offsetX,p=f+v*this.view.width,d-=S*this.view.offsetY,g=d-S*this.view.height}this.projectionMatrix.makeOrthographic(f,p,d,g,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const oo=4,Pv=[.125,.215,.35,.446,.526,.582],ts=20,rd=new U_,zv=new Xe;let sd=null,od=0,ld=0;const Jr=(1+Math.sqrt(5))/2,so=1/Jr,Bv=[new yt(1,1,1),new yt(-1,1,1),new yt(1,1,-1),new yt(-1,1,-1),new yt(0,Jr,so),new yt(0,Jr,-so),new yt(so,0,Jr),new yt(-so,0,Jr),new yt(Jr,so,0),new yt(-Jr,so,0)];class Fv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,l,f),i>0&&this._blur(f,0,0,i),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,od,ld),e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===fo||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:El,format:Ji,colorSpace:Fa,depthBuffer:!1},l=Iv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NE(f)),this._blurMaterial=OE(f,e,i)}return l}_compileMaterial(e){const i=new Ba(this._lodPlanes[0],e);this._renderer.compile(i,rd)}_sceneToCubeUV(e,i,r,l){const d=new Fi(90,1,i,r),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,E=S.autoClear,M=S.toneMapping;S.getClearColor(zv),S.toneMapping=xr,S.autoClear=!1;const b=new vr({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1}),R=new Ba(new yo,b);let C=!1;const x=e.background;x?x.isColor&&(b.color.copy(x),e.background=null,C=!0):(b.color.copy(zv),C=!0);for(let _=0;_<6;_++){const H=_%3;H===0?(d.up.set(0,g[_],0),d.lookAt(v[_],0,0)):H===1?(d.up.set(0,0,g[_]),d.lookAt(0,v[_],0)):(d.up.set(0,g[_],0),d.lookAt(0,0,v[_]));const O=this._cubeSize;rc(l,H*O,_>2?O:0,O,O),S.setRenderTarget(l),C&&S.render(R,d),S.render(e,d)}R.geometry.dispose(),R.material.dispose(),S.toneMapping=M,S.autoClear=E,e.background=x}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===fo||e.mapping===ho;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hv());const f=l?this._cubemapMaterial:this._equirectMaterial,p=new Ba(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const g=this._cubeSize;rc(i,0,0,3*g,2*g),r.setRenderTarget(i),r.render(p,rd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const f=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),p=Bv[(l-1)%Bv.length];this._blur(e,l-1,l,f,p)}i.autoClear=r}_blur(e,i,r,l,f){const p=this._pingPongRenderTarget;this._halfBlur(e,p,i,r,l,"latitudinal",f),this._halfBlur(p,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,p,d){const g=this._renderer,v=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,E=new Ba(this._lodPlanes[l],v),M=v.uniforms,b=this._sizeLods[r]-1,R=isFinite(f)?Math.PI/(2*b):2*Math.PI/(2*ts-1),C=f/R,x=isFinite(f)?1+Math.floor(S*C):ts;x>ts&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ts}`);const _=[];let H=0;for(let X=0;X<ts;++X){const xt=X/C,U=Math.exp(-xt*xt/2);_.push(U),X===0?H+=U:X<x&&(H+=2*U)}for(let X=0;X<_.length;X++)_[X]=_[X]/H;M.envMap.value=e.texture,M.samples.value=x,M.weights.value=_,M.latitudinal.value=p==="latitudinal",d&&(M.poleAxis.value=d);const{_lodMax:O}=this;M.dTheta.value=R,M.mipInt.value=O-r;const B=this._sizeLods[l],Z=3*B*(l>O-oo?l-O+oo:0),q=4*(this._cubeSize-B);rc(i,Z,q,3*B,2*B),g.setRenderTarget(i),g.render(E,rd)}}function NE(o){const e=[],i=[],r=[];let l=o;const f=o-oo+1+Pv.length;for(let p=0;p<f;p++){const d=Math.pow(2,l);i.push(d);let g=1/d;p>o-oo?g=Pv[p-o+oo-1]:p===0&&(g=0),r.push(g);const v=1/(d-2),S=-v,E=1+v,M=[S,S,E,S,E,E,S,S,E,E,S,E],b=6,R=6,C=3,x=2,_=1,H=new Float32Array(C*R*b),O=new Float32Array(x*R*b),B=new Float32Array(_*R*b);for(let q=0;q<b;q++){const X=q%3*2/3-1,xt=q>2?0:-1,U=[X,xt,0,X+2/3,xt,0,X+2/3,xt+1,0,X,xt,0,X+2/3,xt+1,0,X,xt+1,0];H.set(U,C*R*q),O.set(M,x*R*q);const A=[q,q,q,q,q,q];B.set(A,_*R*q)}const Z=new os;Z.setAttribute("position",new la(H,C)),Z.setAttribute("uv",new la(O,x)),Z.setAttribute("faceIndex",new la(B,_)),e.push(Z),l>oo&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Iv(o,e,i){const r=new rs(o,e,i);return r.texture.mapping=vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function rc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function OE(o,e,i){const r=new Float32Array(ts),l=new yt(0,1,0);return new ss({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Hv(){return new ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Gv(){return new ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function wd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PE(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const g=d.mapping,v=g===pd||g===md,S=g===fo||g===ho;if(v||S)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let E=e.get(d);return i===null&&(i=new Fv(o)),E=v?i.fromEquirectangular(d,E):i.fromCubemap(d,E),e.set(d,E),E.texture}else{if(e.has(d))return e.get(d).texture;{const E=d.image;if(v&&E&&E.height>0||S&&E&&l(E)){i===null&&(i=new Fv(o));const M=v?i.fromEquirectangular(d):i.fromCubemap(d);return e.set(d,M),d.addEventListener("dispose",f),M.texture}else return null}}}return d}function l(d){let g=0;const v=6;for(let S=0;S<v;S++)d[S]!==void 0&&g++;return g===v}function f(d){const g=d.target;g.removeEventListener("dispose",f);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function p(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function zE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function BE(o,e,i,r){const l={},f=new WeakMap;function p(E){const M=E.target;M.index!==null&&e.remove(M.index);for(const R in M.attributes)e.remove(M.attributes[R]);for(const R in M.morphAttributes){const C=M.morphAttributes[R];for(let x=0,_=C.length;x<_;x++)e.remove(C[x])}M.removeEventListener("dispose",p),delete l[M.id];const b=f.get(M);b&&(e.remove(b),f.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,i.memory.geometries--}function d(E,M){return l[M.id]===!0||(M.addEventListener("dispose",p),l[M.id]=!0,i.memory.geometries++),M}function g(E){const M=E.attributes;for(const R in M)e.update(M[R],o.ARRAY_BUFFER);const b=E.morphAttributes;for(const R in b){const C=b[R];for(let x=0,_=C.length;x<_;x++)e.update(C[x],o.ARRAY_BUFFER)}}function v(E){const M=[],b=E.index,R=E.attributes.position;let C=0;if(b!==null){const H=b.array;C=b.version;for(let O=0,B=H.length;O<B;O+=3){const Z=H[O+0],q=H[O+1],X=H[O+2];M.push(Z,q,q,X,X,Z)}}else if(R!==void 0){const H=R.array;C=R.version;for(let O=0,B=H.length/3-1;O<B;O+=3){const Z=O+0,q=O+1,X=O+2;M.push(Z,q,q,X,X,Z)}}else return;const x=new(__(M)?b_:T_)(M,1);x.version=C;const _=f.get(E);_&&e.remove(_),f.set(E,x)}function S(E){const M=f.get(E);if(M){const b=E.index;b!==null&&M.version<b.version&&v(E)}else v(E);return f.get(E)}return{get:d,update:g,getWireframeAttribute:S}}function FE(o,e,i,r){const l=r.isWebGL2;let f;function p(b){f=b}let d,g;function v(b){d=b.type,g=b.bytesPerElement}function S(b,R){o.drawElements(f,R,d,b*g),i.update(R,f,1)}function E(b,R,C){if(C===0)return;let x,_;if(l)x=o,_="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](f,R,d,b*g,C),i.update(R,f,C)}function M(b,R,C){if(C===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<C;_++)this.render(b[_]/g,R[_]);else{x.multiDrawElementsWEBGL(f,R,0,d,b,0,C);let _=0;for(let H=0;H<C;H++)_+=R[H];i.update(_,f,1)}}this.setMode=p,this.setIndex=v,this.render=S,this.renderInstances=E,this.renderMultiDraw=M}function IE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,p,d){switch(i.calls++,p){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",p);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function HE(o,e){return o[0]-e[0]}function GE(o,e){return Math.abs(e[1])-Math.abs(o[1])}function VE(o,e,i){const r={},l=new Float32Array(8),f=new WeakMap,p=new Gn,d=[];for(let v=0;v<8;v++)d[v]=[v,0];function g(v,S,E){const M=v.morphTargetInfluences;if(e.isWebGL2===!0){const R=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,C=R!==void 0?R.length:0;let x=f.get(S);if(x===void 0||x.count!==C){let rt=function(){_t.dispose(),f.delete(S),S.removeEventListener("dispose",rt)};var b=rt;x!==void 0&&x.texture.dispose();const O=S.morphAttributes.position!==void 0,B=S.morphAttributes.normal!==void 0,Z=S.morphAttributes.color!==void 0,q=S.morphAttributes.position||[],X=S.morphAttributes.normal||[],xt=S.morphAttributes.color||[];let U=0;O===!0&&(U=1),B===!0&&(U=2),Z===!0&&(U=3);let A=S.attributes.position.count*U,k=1;A>e.maxTextureSize&&(k=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const ot=new Float32Array(A*k*4*C),_t=new x_(ot,A,k,C);_t.type=yr,_t.needsUpdate=!0;const j=U*4;for(let I=0;I<C;I++){const J=q[I],$=X[I],ut=xt[I],N=A*k*4*I;for(let nt=0;nt<J.count;nt++){const gt=nt*j;O===!0&&(p.fromBufferAttribute(J,nt),ot[N+gt+0]=p.x,ot[N+gt+1]=p.y,ot[N+gt+2]=p.z,ot[N+gt+3]=0),B===!0&&(p.fromBufferAttribute($,nt),ot[N+gt+4]=p.x,ot[N+gt+5]=p.y,ot[N+gt+6]=p.z,ot[N+gt+7]=0),Z===!0&&(p.fromBufferAttribute(ut,nt),ot[N+gt+8]=p.x,ot[N+gt+9]=p.y,ot[N+gt+10]=p.z,ot[N+gt+11]=ut.itemSize===4?p.w:1)}}x={count:C,texture:_t,size:new qe(A,k)},f.set(S,x),S.addEventListener("dispose",rt)}let _=0;for(let O=0;O<M.length;O++)_+=M[O];const H=S.morphTargetsRelative?1:1-_;E.getUniforms().setValue(o,"morphTargetBaseInfluence",H),E.getUniforms().setValue(o,"morphTargetInfluences",M),E.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),E.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const R=M===void 0?0:M.length;let C=r[S.id];if(C===void 0||C.length!==R){C=[];for(let B=0;B<R;B++)C[B]=[B,0];r[S.id]=C}for(let B=0;B<R;B++){const Z=C[B];Z[0]=B,Z[1]=M[B]}C.sort(GE);for(let B=0;B<8;B++)B<R&&C[B][1]?(d[B][0]=C[B][0],d[B][1]=C[B][1]):(d[B][0]=Number.MAX_SAFE_INTEGER,d[B][1]=0);d.sort(HE);const x=S.morphAttributes.position,_=S.morphAttributes.normal;let H=0;for(let B=0;B<8;B++){const Z=d[B],q=Z[0],X=Z[1];q!==Number.MAX_SAFE_INTEGER&&X?(x&&S.getAttribute("morphTarget"+B)!==x[q]&&S.setAttribute("morphTarget"+B,x[q]),_&&S.getAttribute("morphNormal"+B)!==_[q]&&S.setAttribute("morphNormal"+B,_[q]),l[B]=X,H+=X):(x&&S.hasAttribute("morphTarget"+B)===!0&&S.deleteAttribute("morphTarget"+B),_&&S.hasAttribute("morphNormal"+B)===!0&&S.deleteAttribute("morphNormal"+B),l[B]=0)}const O=S.morphTargetsRelative?1:1-H;E.getUniforms().setValue(o,"morphTargetBaseInfluence",O),E.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:g}}function kE(o,e,i,r){let l=new WeakMap;function f(g){const v=r.render.frame,S=g.geometry,E=e.get(g,S);if(l.get(E)!==v&&(e.update(E),l.set(E,v)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),l.get(g)!==v&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),l.set(g,v))),g.isSkinnedMesh){const M=g.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return E}function p(){l=new WeakMap}function d(g){const v=g.target;v.removeEventListener("dispose",d),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:p}}class L_ extends Ei{constructor(e,i,r,l,f,p,d,g,v,S){if(S=S!==void 0?S:ns,S!==ns&&S!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&S===ns&&(r=_r),r===void 0&&S===po&&(r=es),super(null,l,f,p,d,g,S,r,v),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:oi,this.minFilter=g!==void 0?g:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const D_=new Ei,N_=new L_(1,1);N_.compareFunction=v_;const O_=new x_,P_=new AS,z_=new w_,Vv=[],kv=[],Wv=new Float32Array(16),Xv=new Float32Array(9),qv=new Float32Array(4);function So(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=Vv[l];if(f===void 0&&(f=new Float32Array(l),Vv[l]=f),e!==0){r.toArray(f,0);for(let p=1,d=0;p!==e;++p)d+=i,o[p].toArray(f,d)}return f}function On(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Pn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Sc(o,e){let i=kv[e];i===void 0&&(i=new Int32Array(e),kv[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function WE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function XE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;o.uniform2fv(this.addr,e),Pn(i,e)}}function qE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(On(i,e))return;o.uniform3fv(this.addr,e),Pn(i,e)}}function jE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;o.uniform4fv(this.addr,e),Pn(i,e)}}function YE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;qv.set(r),o.uniformMatrix2fv(this.addr,!1,qv),Pn(i,r)}}function ZE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;Xv.set(r),o.uniformMatrix3fv(this.addr,!1,Xv),Pn(i,r)}}function KE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;Wv.set(r),o.uniformMatrix4fv(this.addr,!1,Wv),Pn(i,r)}}function QE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function JE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;o.uniform2iv(this.addr,e),Pn(i,e)}}function $E(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;o.uniform3iv(this.addr,e),Pn(i,e)}}function tT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;o.uniform4iv(this.addr,e),Pn(i,e)}}function eT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function nT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;o.uniform2uiv(this.addr,e),Pn(i,e)}}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;o.uniform3uiv(this.addr,e),Pn(i,e)}}function aT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;o.uniform4uiv(this.addr,e),Pn(i,e)}}function rT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const f=this.type===o.SAMPLER_2D_SHADOW?N_:D_;i.setTexture2D(e||f,l)}function sT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||P_,l)}function oT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||z_,l)}function lT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||O_,l)}function uT(o){switch(o){case 5126:return WE;case 35664:return XE;case 35665:return qE;case 35666:return jE;case 35674:return YE;case 35675:return ZE;case 35676:return KE;case 5124:case 35670:return QE;case 35667:case 35671:return JE;case 35668:case 35672:return $E;case 35669:case 35673:return tT;case 5125:return eT;case 36294:return nT;case 36295:return iT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return lT}}function cT(o,e){o.uniform1fv(this.addr,e)}function fT(o,e){const i=So(e,this.size,2);o.uniform2fv(this.addr,i)}function hT(o,e){const i=So(e,this.size,3);o.uniform3fv(this.addr,i)}function dT(o,e){const i=So(e,this.size,4);o.uniform4fv(this.addr,i)}function pT(o,e){const i=So(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function mT(o,e){const i=So(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function gT(o,e){const i=So(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function vT(o,e){o.uniform1iv(this.addr,e)}function _T(o,e){o.uniform2iv(this.addr,e)}function yT(o,e){o.uniform3iv(this.addr,e)}function ST(o,e){o.uniform4iv(this.addr,e)}function xT(o,e){o.uniform1uiv(this.addr,e)}function MT(o,e){o.uniform2uiv(this.addr,e)}function ET(o,e){o.uniform3uiv(this.addr,e)}function TT(o,e){o.uniform4uiv(this.addr,e)}function bT(o,e,i){const r=this.cache,l=e.length,f=Sc(i,l);On(r,f)||(o.uniform1iv(this.addr,f),Pn(r,f));for(let p=0;p!==l;++p)i.setTexture2D(e[p]||D_,f[p])}function AT(o,e,i){const r=this.cache,l=e.length,f=Sc(i,l);On(r,f)||(o.uniform1iv(this.addr,f),Pn(r,f));for(let p=0;p!==l;++p)i.setTexture3D(e[p]||P_,f[p])}function RT(o,e,i){const r=this.cache,l=e.length,f=Sc(i,l);On(r,f)||(o.uniform1iv(this.addr,f),Pn(r,f));for(let p=0;p!==l;++p)i.setTextureCube(e[p]||z_,f[p])}function wT(o,e,i){const r=this.cache,l=e.length,f=Sc(i,l);On(r,f)||(o.uniform1iv(this.addr,f),Pn(r,f));for(let p=0;p!==l;++p)i.setTexture2DArray(e[p]||O_,f[p])}function CT(o){switch(o){case 5126:return cT;case 35664:return fT;case 35665:return hT;case 35666:return dT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return vT;case 35667:case 35671:return _T;case 35668:case 35672:return yT;case 35669:case 35673:return ST;case 5125:return xT;case 36294:return MT;case 36295:return ET;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return wT}}class UT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=uT(i.type)}}class LT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=CT(i.type)}}class DT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,p=l.length;f!==p;++f){const d=l[f];d.setValue(e,i[d.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function jv(o,e){o.seq.push(e),o.map[e.id]=e}function NT(o,e,i){const r=o.name,l=r.length;for(ud.lastIndex=0;;){const f=ud.exec(r),p=ud.lastIndex;let d=f[1];const g=f[2]==="]",v=f[3];if(g&&(d=d|0),v===void 0||v==="["&&p+2===l){jv(i,v===void 0?new UT(d,o,e):new LT(d,o,e));break}else{let E=i.map[d];E===void 0&&(E=new DT(d),jv(i,E)),i=E}}}class oc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),p=e.getUniformLocation(i,f.name);NT(f,p,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,p=i.length;f!==p;++f){const d=i[f],g=r[d.id];g.needsUpdate!==!1&&d.setValue(e,g.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const p=e[l];p.id in i&&r.push(p)}return r}}function Yv(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const OT=37297;let PT=0;function zT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let p=l;p<f;p++){const d=p+1;r.push(`${d===e?">":" "} ${d}: ${i[p]}`)}return r.join(`
`)}function BT(o){const e=Qe.getPrimaries(Qe.workingColorSpace),i=Qe.getPrimaries(o);let r;switch(e===i?r="":e===dc&&i===hc?r="LinearDisplayP3ToLinearSRGB":e===hc&&i===dc&&(r="LinearSRGBToLinearDisplayP3"),o){case Fa:case _c:return[r,"LinearTransferOETF"];case Yn:case Td:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function Zv(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const f=/ERROR: 0:(\d+)/.exec(l);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+l+`

`+zT(o.getShaderSource(e),p)}else return l}function FT(o,e){const i=BT(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function IT(o,e){let i;switch(e){case Yy:i="Linear";break;case Zy:i="Reinhard";break;case Ky:i="OptimizedCineon";break;case Qy:i="ACESFilmic";break;case $y:i="AgX";break;case Jy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function HT(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lo).join(`
`)}function GT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(lo).join(`
`)}function VT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function kT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),p=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[p]={type:f.type,location:o.getAttribLocation(e,p),locationSize:d}}return i}function lo(o){return o!==""}function Kv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WT=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(o){return o.replace(WT,qT)}const XT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qT(o,e){let i=Ae[e];if(i===void 0){const r=XT.get(e);if(r!==void 0)i=Ae[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return xd(i)}const jT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jv(o){return o.replace(jT,YT)}function YT(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function $v(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===s_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===My?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Oa&&(e="SHADOWMAP_TYPE_VSM"),e}function KT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case fo:case ho:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ho:e="ENVMAP_MODE_REFRACTION";break}return e}function JT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case o_:e="ENVMAP_BLENDING_MULTIPLY";break;case qy:e="ENVMAP_BLENDING_MIX";break;case jy:e="ENVMAP_BLENDING_ADD";break}return e}function $T(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function tb(o,e,i,r){const l=o.getContext(),f=i.defines;let p=i.vertexShader,d=i.fragmentShader;const g=ZT(i),v=KT(i),S=QT(i),E=JT(i),M=$T(i),b=i.isWebGL2?"":HT(i),R=GT(i),C=VT(f),x=l.createProgram();let _,H,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(lo).join(`
`),_.length>0&&(_+=`
`),H=[b,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(lo).join(`
`),H.length>0&&(H+=`
`)):(_=[$v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),H=[b,$v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",i.envMap?"#define "+E:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==xr?"#define TONE_MAPPING":"",i.toneMapping!==xr?Ae.tonemapping_pars_fragment:"",i.toneMapping!==xr?IT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,FT("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(lo).join(`
`)),p=xd(p),p=Kv(p,i),p=Qv(p,i),d=xd(d),d=Kv(d,i),d=Qv(d,i),p=Jv(p),d=Jv(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,_=[R,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,H=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+H);const B=O+_+p,Z=O+H+d,q=Yv(l,l.VERTEX_SHADER,B),X=Yv(l,l.FRAGMENT_SHADER,Z);l.attachShader(x,q),l.attachShader(x,X),i.index0AttributeName!==void 0?l.bindAttribLocation(x,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(x,0,"position"),l.linkProgram(x);function xt(ot){if(o.debug.checkShaderErrors){const _t=l.getProgramInfoLog(x).trim(),j=l.getShaderInfoLog(q).trim(),rt=l.getShaderInfoLog(X).trim();let I=!0,J=!0;if(l.getProgramParameter(x,l.LINK_STATUS)===!1)if(I=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,x,q,X);else{const $=Zv(l,q,"vertex"),ut=Zv(l,X,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(x,l.VALIDATE_STATUS)+`

Program Info Log: `+_t+`
`+$+`
`+ut)}else _t!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_t):(j===""||rt==="")&&(J=!1);J&&(ot.diagnostics={runnable:I,programLog:_t,vertexShader:{log:j,prefix:_},fragmentShader:{log:rt,prefix:H}})}l.deleteShader(q),l.deleteShader(X),U=new oc(l,x),A=kT(l,x)}let U;this.getUniforms=function(){return U===void 0&&xt(this),U};let A;this.getAttributes=function(){return A===void 0&&xt(this),A};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(x,OT)),k},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=PT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=q,this.fragmentShader=X,this}let eb=0;class nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),p=this._getShaderCacheForMaterial(e);return p.has(l)===!1&&(p.add(l),l.usedTimes++),p.has(f)===!1&&(p.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new ib(e),i.set(e,r)),r}}class ib{constructor(e){this.id=eb++,this.code=e,this.usedTimes=0}}function ab(o,e,i,r,l,f,p){const d=new M_,g=new nb,v=[],S=l.isWebGL2,E=l.logarithmicDepthBuffer,M=l.vertexTextures;let b=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(U){return U===0?"uv":`uv${U}`}function x(U,A,k,ot,_t){const j=ot.fog,rt=_t.geometry,I=U.isMeshStandardMaterial?ot.environment:null,J=(U.isMeshStandardMaterial?i:e).get(U.envMap||I),$=J&&J.mapping===vc?J.image.height:null,ut=R[U.type];U.precision!==null&&(b=l.getMaxPrecision(U.precision),b!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",b,"instead."));const N=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,nt=N!==void 0?N.length:0;let gt=0;rt.morphAttributes.position!==void 0&&(gt=1),rt.morphAttributes.normal!==void 0&&(gt=2),rt.morphAttributes.color!==void 0&&(gt=3);let tt,at,Tt,Ut;if(ut){const on=oa[ut];tt=on.vertexShader,at=on.fragmentShader}else tt=U.vertexShader,at=U.fragmentShader,g.update(U),Tt=g.getVertexShaderID(U),Ut=g.getFragmentShaderID(U);const Vt=o.getRenderTarget(),It=_t.isInstancedMesh===!0,Kt=_t.isBatchedMesh===!0,Ht=!!U.map,ce=!!U.matcap,ft=!!J,Se=!!U.aoMap,Wt=!!U.lightMap,fe=!!U.bumpMap,Zt=!!U.normalMap,We=!!U.displacementMap,ge=!!U.emissiveMap,z=!!U.metalnessMap,D=!!U.roughnessMap,mt=U.anisotropy>0,Lt=U.clearcoat>0,Ct=U.iridescence>0,bt=U.sheen>0,te=U.transmission>0,Bt=mt&&!!U.anisotropyMap,qt=Lt&&!!U.clearcoatMap,re=Lt&&!!U.clearcoatNormalMap,xe=Lt&&!!U.clearcoatRoughnessMap,wt=Ct&&!!U.iridescenceMap,ze=Ct&&!!U.iridescenceThicknessMap,Ee=bt&&!!U.sheenColorMap,ae=bt&&!!U.sheenRoughnessMap,Xt=!!U.specularMap,Yt=!!U.specularColorMap,le=!!U.specularIntensityMap,ve=te&&!!U.transmissionMap,je=te&&!!U.thicknessMap,pe=!!U.gradientMap,Dt=!!U.alphaMap,Y=U.alphaTest>0,zt=!!U.alphaHash,Ot=!!U.extensions,se=!!rt.attributes.uv1,Jt=!!rt.attributes.uv2,Be=!!rt.attributes.uv3;let Fe=xr;return U.toneMapped&&(Vt===null||Vt.isXRRenderTarget===!0)&&(Fe=o.toneMapping),{isWebGL2:S,shaderID:ut,shaderType:U.type,shaderName:U.name,vertexShader:tt,fragmentShader:at,defines:U.defines,customVertexShaderID:Tt,customFragmentShaderID:Ut,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:b,batching:Kt,instancing:It,instancingColor:It&&_t.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Vt===null?o.outputColorSpace:Vt.isXRRenderTarget===!0?Vt.texture.colorSpace:Fa,map:Ht,matcap:ce,envMap:ft,envMapMode:ft&&J.mapping,envMapCubeUVHeight:$,aoMap:Se,lightMap:Wt,bumpMap:fe,normalMap:Zt,displacementMap:M&&We,emissiveMap:ge,normalMapObjectSpace:Zt&&U.normalMapType===hS,normalMapTangentSpace:Zt&&U.normalMapType===fS,metalnessMap:z,roughnessMap:D,anisotropy:mt,anisotropyMap:Bt,clearcoat:Lt,clearcoatMap:qt,clearcoatNormalMap:re,clearcoatRoughnessMap:xe,iridescence:Ct,iridescenceMap:wt,iridescenceThicknessMap:ze,sheen:bt,sheenColorMap:Ee,sheenRoughnessMap:ae,specularMap:Xt,specularColorMap:Yt,specularIntensityMap:le,transmission:te,transmissionMap:ve,thicknessMap:je,gradientMap:pe,opaque:U.transparent===!1&&U.blending===uo,alphaMap:Dt,alphaTest:Y,alphaHash:zt,combine:U.combine,mapUv:Ht&&C(U.map.channel),aoMapUv:Se&&C(U.aoMap.channel),lightMapUv:Wt&&C(U.lightMap.channel),bumpMapUv:fe&&C(U.bumpMap.channel),normalMapUv:Zt&&C(U.normalMap.channel),displacementMapUv:We&&C(U.displacementMap.channel),emissiveMapUv:ge&&C(U.emissiveMap.channel),metalnessMapUv:z&&C(U.metalnessMap.channel),roughnessMapUv:D&&C(U.roughnessMap.channel),anisotropyMapUv:Bt&&C(U.anisotropyMap.channel),clearcoatMapUv:qt&&C(U.clearcoatMap.channel),clearcoatNormalMapUv:re&&C(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&C(U.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&C(U.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&C(U.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&C(U.sheenColorMap.channel),sheenRoughnessMapUv:ae&&C(U.sheenRoughnessMap.channel),specularMapUv:Xt&&C(U.specularMap.channel),specularColorMapUv:Yt&&C(U.specularColorMap.channel),specularIntensityMapUv:le&&C(U.specularIntensityMap.channel),transmissionMapUv:ve&&C(U.transmissionMap.channel),thicknessMapUv:je&&C(U.thicknessMap.channel),alphaMapUv:Dt&&C(U.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Zt||mt),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:Jt,vertexUv3s:Be,pointsUvs:_t.isPoints===!0&&!!rt.attributes.uv&&(Ht||Dt),fog:!!j,useFog:U.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:E,skinning:_t.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:gt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:Fe,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Ht&&U.map.isVideoTexture===!0&&Qe.getTransfer(U.map.colorSpace)===sn,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Pa,flipSided:U.side===di,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionDerivatives:Ot&&U.extensions.derivatives===!0,extensionFragDepth:Ot&&U.extensions.fragDepth===!0,extensionDrawBuffers:Ot&&U.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ot&&U.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ot&&U.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:S||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:S||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:S||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()}}function _(U){const A=[];if(U.shaderID?A.push(U.shaderID):(A.push(U.customVertexShaderID),A.push(U.customFragmentShaderID)),U.defines!==void 0)for(const k in U.defines)A.push(k),A.push(U.defines[k]);return U.isRawShaderMaterial===!1&&(H(A,U),O(A,U),A.push(o.outputColorSpace)),A.push(U.customProgramCacheKey),A.join()}function H(U,A){U.push(A.precision),U.push(A.outputColorSpace),U.push(A.envMapMode),U.push(A.envMapCubeUVHeight),U.push(A.mapUv),U.push(A.alphaMapUv),U.push(A.lightMapUv),U.push(A.aoMapUv),U.push(A.bumpMapUv),U.push(A.normalMapUv),U.push(A.displacementMapUv),U.push(A.emissiveMapUv),U.push(A.metalnessMapUv),U.push(A.roughnessMapUv),U.push(A.anisotropyMapUv),U.push(A.clearcoatMapUv),U.push(A.clearcoatNormalMapUv),U.push(A.clearcoatRoughnessMapUv),U.push(A.iridescenceMapUv),U.push(A.iridescenceThicknessMapUv),U.push(A.sheenColorMapUv),U.push(A.sheenRoughnessMapUv),U.push(A.specularMapUv),U.push(A.specularColorMapUv),U.push(A.specularIntensityMapUv),U.push(A.transmissionMapUv),U.push(A.thicknessMapUv),U.push(A.combine),U.push(A.fogExp2),U.push(A.sizeAttenuation),U.push(A.morphTargetsCount),U.push(A.morphAttributeCount),U.push(A.numDirLights),U.push(A.numPointLights),U.push(A.numSpotLights),U.push(A.numSpotLightMaps),U.push(A.numHemiLights),U.push(A.numRectAreaLights),U.push(A.numDirLightShadows),U.push(A.numPointLightShadows),U.push(A.numSpotLightShadows),U.push(A.numSpotLightShadowsWithMaps),U.push(A.numLightProbes),U.push(A.shadowMapType),U.push(A.toneMapping),U.push(A.numClippingPlanes),U.push(A.numClipIntersection),U.push(A.depthPacking)}function O(U,A){d.disableAll(),A.isWebGL2&&d.enable(0),A.supportsVertexTextures&&d.enable(1),A.instancing&&d.enable(2),A.instancingColor&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),U.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.skinning&&d.enable(4),A.morphTargets&&d.enable(5),A.morphNormals&&d.enable(6),A.morphColors&&d.enable(7),A.premultipliedAlpha&&d.enable(8),A.shadowMapEnabled&&d.enable(9),A.useLegacyLights&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),U.push(d.mask)}function B(U){const A=R[U.type];let k;if(A){const ot=oa[A];k=HS.clone(ot.uniforms)}else k=U.uniforms;return k}function Z(U,A){let k;for(let ot=0,_t=v.length;ot<_t;ot++){const j=v[ot];if(j.cacheKey===A){k=j,++k.usedTimes;break}}return k===void 0&&(k=new tb(o,A,U,f),v.push(k)),k}function q(U){if(--U.usedTimes===0){const A=v.indexOf(U);v[A]=v[v.length-1],v.pop(),U.destroy()}}function X(U){g.remove(U)}function xt(){g.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:B,acquireProgram:Z,releaseProgram:q,releaseShaderCache:X,programs:v,dispose:xt}}function rb(){let o=new WeakMap;function e(f){let p=o.get(f);return p===void 0&&(p={},o.set(f,p)),p}function i(f){o.delete(f)}function r(f,p,d){o.get(f)[p]=d}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function sb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function t_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function e_(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function p(E,M,b,R,C,x){let _=o[e];return _===void 0?(_={id:E.id,object:E,geometry:M,material:b,groupOrder:R,renderOrder:E.renderOrder,z:C,group:x},o[e]=_):(_.id=E.id,_.object=E,_.geometry=M,_.material=b,_.groupOrder=R,_.renderOrder=E.renderOrder,_.z=C,_.group=x),e++,_}function d(E,M,b,R,C,x){const _=p(E,M,b,R,C,x);b.transmission>0?r.push(_):b.transparent===!0?l.push(_):i.push(_)}function g(E,M,b,R,C,x){const _=p(E,M,b,R,C,x);b.transmission>0?r.unshift(_):b.transparent===!0?l.unshift(_):i.unshift(_)}function v(E,M){i.length>1&&i.sort(E||sb),r.length>1&&r.sort(M||t_),l.length>1&&l.sort(M||t_)}function S(){for(let E=e,M=o.length;E<M;E++){const b=o[E];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:d,unshift:g,finish:S,sort:v}}function ob(){let o=new WeakMap;function e(r,l){const f=o.get(r);let p;return f===void 0?(p=new e_,o.set(r,[p])):l>=f.length?(p=new e_,f.push(p)):p=f[l],p}function i(){o=new WeakMap}return{get:e,dispose:i}}function lb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new yt,color:new Xe};break;case"SpotLight":i={position:new yt,direction:new yt,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new yt,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new yt,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":i={color:new Xe,position:new yt,halfWidth:new yt,halfHeight:new yt};break}return o[e.id]=i,i}}}function ub(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let cb=0;function fb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function hb(o,e){const i=new lb,r=ub(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let S=0;S<9;S++)l.probe.push(new yt);const f=new yt,p=new Nn,d=new Nn;function g(S,E){let M=0,b=0,R=0;for(let ot=0;ot<9;ot++)l.probe[ot].set(0,0,0);let C=0,x=0,_=0,H=0,O=0,B=0,Z=0,q=0,X=0,xt=0,U=0;S.sort(fb);const A=E===!0?Math.PI:1;for(let ot=0,_t=S.length;ot<_t;ot++){const j=S[ot],rt=j.color,I=j.intensity,J=j.distance,$=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)M+=rt.r*I*A,b+=rt.g*I*A,R+=rt.b*I*A;else if(j.isLightProbe){for(let ut=0;ut<9;ut++)l.probe[ut].addScaledVector(j.sh.coefficients[ut],I);U++}else if(j.isDirectionalLight){const ut=i.get(j);if(ut.color.copy(j.color).multiplyScalar(j.intensity*A),j.castShadow){const N=j.shadow,nt=r.get(j);nt.shadowBias=N.bias,nt.shadowNormalBias=N.normalBias,nt.shadowRadius=N.radius,nt.shadowMapSize=N.mapSize,l.directionalShadow[C]=nt,l.directionalShadowMap[C]=$,l.directionalShadowMatrix[C]=j.shadow.matrix,B++}l.directional[C]=ut,C++}else if(j.isSpotLight){const ut=i.get(j);ut.position.setFromMatrixPosition(j.matrixWorld),ut.color.copy(rt).multiplyScalar(I*A),ut.distance=J,ut.coneCos=Math.cos(j.angle),ut.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ut.decay=j.decay,l.spot[_]=ut;const N=j.shadow;if(j.map&&(l.spotLightMap[X]=j.map,X++,N.updateMatrices(j),j.castShadow&&xt++),l.spotLightMatrix[_]=N.matrix,j.castShadow){const nt=r.get(j);nt.shadowBias=N.bias,nt.shadowNormalBias=N.normalBias,nt.shadowRadius=N.radius,nt.shadowMapSize=N.mapSize,l.spotShadow[_]=nt,l.spotShadowMap[_]=$,q++}_++}else if(j.isRectAreaLight){const ut=i.get(j);ut.color.copy(rt).multiplyScalar(I),ut.halfWidth.set(j.width*.5,0,0),ut.halfHeight.set(0,j.height*.5,0),l.rectArea[H]=ut,H++}else if(j.isPointLight){const ut=i.get(j);if(ut.color.copy(j.color).multiplyScalar(j.intensity*A),ut.distance=j.distance,ut.decay=j.decay,j.castShadow){const N=j.shadow,nt=r.get(j);nt.shadowBias=N.bias,nt.shadowNormalBias=N.normalBias,nt.shadowRadius=N.radius,nt.shadowMapSize=N.mapSize,nt.shadowCameraNear=N.camera.near,nt.shadowCameraFar=N.camera.far,l.pointShadow[x]=nt,l.pointShadowMap[x]=$,l.pointShadowMatrix[x]=j.shadow.matrix,Z++}l.point[x]=ut,x++}else if(j.isHemisphereLight){const ut=i.get(j);ut.skyColor.copy(j.color).multiplyScalar(I*A),ut.groundColor.copy(j.groundColor).multiplyScalar(I*A),l.hemi[O]=ut,O++}}H>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ft.LTC_FLOAT_1,l.rectAreaLTC2=Ft.LTC_FLOAT_2):(l.rectAreaLTC1=Ft.LTC_HALF_1,l.rectAreaLTC2=Ft.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ft.LTC_FLOAT_1,l.rectAreaLTC2=Ft.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Ft.LTC_HALF_1,l.rectAreaLTC2=Ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=M,l.ambient[1]=b,l.ambient[2]=R;const k=l.hash;(k.directionalLength!==C||k.pointLength!==x||k.spotLength!==_||k.rectAreaLength!==H||k.hemiLength!==O||k.numDirectionalShadows!==B||k.numPointShadows!==Z||k.numSpotShadows!==q||k.numSpotMaps!==X||k.numLightProbes!==U)&&(l.directional.length=C,l.spot.length=_,l.rectArea.length=H,l.point.length=x,l.hemi.length=O,l.directionalShadow.length=B,l.directionalShadowMap.length=B,l.pointShadow.length=Z,l.pointShadowMap.length=Z,l.spotShadow.length=q,l.spotShadowMap.length=q,l.directionalShadowMatrix.length=B,l.pointShadowMatrix.length=Z,l.spotLightMatrix.length=q+X-xt,l.spotLightMap.length=X,l.numSpotLightShadowsWithMaps=xt,l.numLightProbes=U,k.directionalLength=C,k.pointLength=x,k.spotLength=_,k.rectAreaLength=H,k.hemiLength=O,k.numDirectionalShadows=B,k.numPointShadows=Z,k.numSpotShadows=q,k.numSpotMaps=X,k.numLightProbes=U,l.version=cb++)}function v(S,E){let M=0,b=0,R=0,C=0,x=0;const _=E.matrixWorldInverse;for(let H=0,O=S.length;H<O;H++){const B=S[H];if(B.isDirectionalLight){const Z=l.directional[M];Z.direction.setFromMatrixPosition(B.matrixWorld),f.setFromMatrixPosition(B.target.matrixWorld),Z.direction.sub(f),Z.direction.transformDirection(_),M++}else if(B.isSpotLight){const Z=l.spot[R];Z.position.setFromMatrixPosition(B.matrixWorld),Z.position.applyMatrix4(_),Z.direction.setFromMatrixPosition(B.matrixWorld),f.setFromMatrixPosition(B.target.matrixWorld),Z.direction.sub(f),Z.direction.transformDirection(_),R++}else if(B.isRectAreaLight){const Z=l.rectArea[C];Z.position.setFromMatrixPosition(B.matrixWorld),Z.position.applyMatrix4(_),d.identity(),p.copy(B.matrixWorld),p.premultiply(_),d.extractRotation(p),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),Z.halfWidth.applyMatrix4(d),Z.halfHeight.applyMatrix4(d),C++}else if(B.isPointLight){const Z=l.point[b];Z.position.setFromMatrixPosition(B.matrixWorld),Z.position.applyMatrix4(_),b++}else if(B.isHemisphereLight){const Z=l.hemi[x];Z.direction.setFromMatrixPosition(B.matrixWorld),Z.direction.transformDirection(_),x++}}}return{setup:g,setupView:v,state:l}}function n_(o,e){const i=new hb(o,e),r=[],l=[];function f(){r.length=0,l.length=0}function p(E){r.push(E)}function d(E){l.push(E)}function g(E){i.setup(r,E)}function v(E){i.setupView(r,E)}return{init:f,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:g,setupLightsView:v,pushLight:p,pushShadow:d}}function db(o,e){let i=new WeakMap;function r(f,p=0){const d=i.get(f);let g;return d===void 0?(g=new n_(o,e),i.set(f,[g])):p>=d.length?(g=new n_(o,e),d.push(g)):g=d[p],g}function l(){i=new WeakMap}return{get:r,dispose:l}}class pb extends yc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mb extends yc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _b(o,e,i){let r=new Ad;const l=new qe,f=new qe,p=new Gn,d=new pb({depthPacking:cS}),g=new mb,v={},S=i.maxTextureSize,E={[Er]:di,[di]:Er,[Pa]:Pa},M=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:gb,fragmentShader:vb}),b=M.clone();b.defines.HORIZONTAL_PASS=1;const R=new os;R.setAttribute("position",new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ba(R,M),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s_;let _=this.type;this.render=function(q,X,xt){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||q.length===0)return;const U=o.getRenderTarget(),A=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(Sr),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const _t=_!==Oa&&this.type===Oa,j=_===Oa&&this.type!==Oa;for(let rt=0,I=q.length;rt<I;rt++){const J=q[rt],$=J.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;l.copy($.mapSize);const ut=$.getFrameExtents();if(l.multiply(ut),f.copy($.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(f.x=Math.floor(S/ut.x),l.x=f.x*ut.x,$.mapSize.x=f.x),l.y>S&&(f.y=Math.floor(S/ut.y),l.y=f.y*ut.y,$.mapSize.y=f.y)),$.map===null||_t===!0||j===!0){const nt=this.type!==Oa?{minFilter:oi,magFilter:oi}:{};$.map!==null&&$.map.dispose(),$.map=new rs(l.x,l.y,nt),$.map.texture.name=J.name+".shadowMap",$.camera.updateProjectionMatrix()}o.setRenderTarget($.map),o.clear();const N=$.getViewportCount();for(let nt=0;nt<N;nt++){const gt=$.getViewport(nt);p.set(f.x*gt.x,f.y*gt.y,f.x*gt.z,f.y*gt.w),ot.viewport(p),$.updateMatrices(J,nt),r=$.getFrustum(),B(X,xt,$.camera,J,this.type)}$.isPointLightShadow!==!0&&this.type===Oa&&H($,xt),$.needsUpdate=!1}_=this.type,x.needsUpdate=!1,o.setRenderTarget(U,A,k)};function H(q,X){const xt=e.update(C);M.defines.VSM_SAMPLES!==q.blurSamples&&(M.defines.VSM_SAMPLES=q.blurSamples,b.defines.VSM_SAMPLES=q.blurSamples,M.needsUpdate=!0,b.needsUpdate=!0),q.mapPass===null&&(q.mapPass=new rs(l.x,l.y)),M.uniforms.shadow_pass.value=q.map.texture,M.uniforms.resolution.value=q.mapSize,M.uniforms.radius.value=q.radius,o.setRenderTarget(q.mapPass),o.clear(),o.renderBufferDirect(X,null,xt,M,C,null),b.uniforms.shadow_pass.value=q.mapPass.texture,b.uniforms.resolution.value=q.mapSize,b.uniforms.radius.value=q.radius,o.setRenderTarget(q.map),o.clear(),o.renderBufferDirect(X,null,xt,b,C,null)}function O(q,X,xt,U){let A=null;const k=xt.isPointLight===!0?q.customDistanceMaterial:q.customDepthMaterial;if(k!==void 0)A=k;else if(A=xt.isPointLight===!0?g:d,o.localClippingEnabled&&X.clipShadows===!0&&Array.isArray(X.clippingPlanes)&&X.clippingPlanes.length!==0||X.displacementMap&&X.displacementScale!==0||X.alphaMap&&X.alphaTest>0||X.map&&X.alphaTest>0){const ot=A.uuid,_t=X.uuid;let j=v[ot];j===void 0&&(j={},v[ot]=j);let rt=j[_t];rt===void 0&&(rt=A.clone(),j[_t]=rt,X.addEventListener("dispose",Z)),A=rt}if(A.visible=X.visible,A.wireframe=X.wireframe,U===Oa?A.side=X.shadowSide!==null?X.shadowSide:X.side:A.side=X.shadowSide!==null?X.shadowSide:E[X.side],A.alphaMap=X.alphaMap,A.alphaTest=X.alphaTest,A.map=X.map,A.clipShadows=X.clipShadows,A.clippingPlanes=X.clippingPlanes,A.clipIntersection=X.clipIntersection,A.displacementMap=X.displacementMap,A.displacementScale=X.displacementScale,A.displacementBias=X.displacementBias,A.wireframeLinewidth=X.wireframeLinewidth,A.linewidth=X.linewidth,xt.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ot=o.properties.get(A);ot.light=xt}return A}function B(q,X,xt,U,A){if(q.visible===!1)return;if(q.layers.test(X.layers)&&(q.isMesh||q.isLine||q.isPoints)&&(q.castShadow||q.receiveShadow&&A===Oa)&&(!q.frustumCulled||r.intersectsObject(q))){q.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,q.matrixWorld);const _t=e.update(q),j=q.material;if(Array.isArray(j)){const rt=_t.groups;for(let I=0,J=rt.length;I<J;I++){const $=rt[I],ut=j[$.materialIndex];if(ut&&ut.visible){const N=O(q,ut,U,A);q.onBeforeShadow(o,q,X,xt,_t,N,$),o.renderBufferDirect(xt,null,_t,N,q,$),q.onAfterShadow(o,q,X,xt,_t,N,$)}}}else if(j.visible){const rt=O(q,j,U,A);q.onBeforeShadow(o,q,X,xt,_t,rt,null),o.renderBufferDirect(xt,null,_t,rt,q,null),q.onAfterShadow(o,q,X,xt,_t,rt,null)}}const ot=q.children;for(let _t=0,j=ot.length;_t<j;_t++)B(ot[_t],X,xt,U,A)}function Z(q){q.target.removeEventListener("dispose",Z);for(const xt in v){const U=v[xt],A=q.target.uuid;A in U&&(U[A].dispose(),delete U[A])}}}function yb(o,e,i){const r=i.isWebGL2;function l(){let Y=!1;const zt=new Gn;let Ot=null;const se=new Gn(0,0,0,0);return{setMask:function(Jt){Ot!==Jt&&!Y&&(o.colorMask(Jt,Jt,Jt,Jt),Ot=Jt)},setLocked:function(Jt){Y=Jt},setClear:function(Jt,Be,Fe,$e,on){on===!0&&(Jt*=$e,Be*=$e,Fe*=$e),zt.set(Jt,Be,Fe,$e),se.equals(zt)===!1&&(o.clearColor(Jt,Be,Fe,$e),se.copy(zt))},reset:function(){Y=!1,Ot=null,se.set(-1,0,0,0)}}}function f(){let Y=!1,zt=null,Ot=null,se=null;return{setTest:function(Jt){Jt?Kt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(Jt){zt!==Jt&&!Y&&(o.depthMask(Jt),zt=Jt)},setFunc:function(Jt){if(Ot!==Jt){switch(Jt){case Iy:o.depthFunc(o.NEVER);break;case Hy:o.depthFunc(o.ALWAYS);break;case Gy:o.depthFunc(o.LESS);break;case cc:o.depthFunc(o.LEQUAL);break;case Vy:o.depthFunc(o.EQUAL);break;case ky:o.depthFunc(o.GEQUAL);break;case Wy:o.depthFunc(o.GREATER);break;case Xy:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ot=Jt}},setLocked:function(Jt){Y=Jt},setClear:function(Jt){se!==Jt&&(o.clearDepth(Jt),se=Jt)},reset:function(){Y=!1,zt=null,Ot=null,se=null}}}function p(){let Y=!1,zt=null,Ot=null,se=null,Jt=null,Be=null,Fe=null,$e=null,on=null;return{setTest:function(Oe){Y||(Oe?Kt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Oe){zt!==Oe&&!Y&&(o.stencilMask(Oe),zt=Oe)},setFunc:function(Oe,ln,ti){(Ot!==Oe||se!==ln||Jt!==ti)&&(o.stencilFunc(Oe,ln,ti),Ot=Oe,se=ln,Jt=ti)},setOp:function(Oe,ln,ti){(Be!==Oe||Fe!==ln||$e!==ti)&&(o.stencilOp(Oe,ln,ti),Be=Oe,Fe=ln,$e=ti)},setLocked:function(Oe){Y=Oe},setClear:function(Oe){on!==Oe&&(o.clearStencil(Oe),on=Oe)},reset:function(){Y=!1,zt=null,Ot=null,se=null,Jt=null,Be=null,Fe=null,$e=null,on=null}}}const d=new l,g=new f,v=new p,S=new WeakMap,E=new WeakMap;let M={},b={},R=new WeakMap,C=[],x=null,_=!1,H=null,O=null,B=null,Z=null,q=null,X=null,xt=null,U=new Xe(0,0,0),A=0,k=!1,ot=null,_t=null,j=null,rt=null,I=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ut=0;const N=o.getParameter(o.VERSION);N.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(N)[1]),$=ut>=1):N.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),$=ut>=2);let nt=null,gt={};const tt=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),Tt=new Gn().fromArray(tt),Ut=new Gn().fromArray(at);function Vt(Y,zt,Ot,se){const Jt=new Uint8Array(4),Be=o.createTexture();o.bindTexture(Y,Be),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Fe=0;Fe<Ot;Fe++)r&&(Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY)?o.texImage3D(zt,0,o.RGBA,1,1,se,0,o.RGBA,o.UNSIGNED_BYTE,Jt):o.texImage2D(zt+Fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Jt);return Be}const It={};It[o.TEXTURE_2D]=Vt(o.TEXTURE_2D,o.TEXTURE_2D,1),It[o.TEXTURE_CUBE_MAP]=Vt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(It[o.TEXTURE_2D_ARRAY]=Vt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),It[o.TEXTURE_3D]=Vt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),g.setClear(1),v.setClear(0),Kt(o.DEPTH_TEST),g.setFunc(cc),ge(!1),z(Bg),Kt(o.CULL_FACE),Zt(Sr);function Kt(Y){M[Y]!==!0&&(o.enable(Y),M[Y]=!0)}function Ht(Y){M[Y]!==!1&&(o.disable(Y),M[Y]=!1)}function ce(Y,zt){return b[Y]!==zt?(o.bindFramebuffer(Y,zt),b[Y]=zt,r&&(Y===o.DRAW_FRAMEBUFFER&&(b[o.FRAMEBUFFER]=zt),Y===o.FRAMEBUFFER&&(b[o.DRAW_FRAMEBUFFER]=zt)),!0):!1}function ft(Y,zt){let Ot=C,se=!1;if(Y)if(Ot=R.get(zt),Ot===void 0&&(Ot=[],R.set(zt,Ot)),Y.isWebGLMultipleRenderTargets){const Jt=Y.texture;if(Ot.length!==Jt.length||Ot[0]!==o.COLOR_ATTACHMENT0){for(let Be=0,Fe=Jt.length;Be<Fe;Be++)Ot[Be]=o.COLOR_ATTACHMENT0+Be;Ot.length=Jt.length,se=!0}}else Ot[0]!==o.COLOR_ATTACHMENT0&&(Ot[0]=o.COLOR_ATTACHMENT0,se=!0);else Ot[0]!==o.BACK&&(Ot[0]=o.BACK,se=!0);se&&(i.isWebGL2?o.drawBuffers(Ot):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ot))}function Se(Y){return x!==Y?(o.useProgram(Y),x=Y,!0):!1}const Wt={[$r]:o.FUNC_ADD,[Ty]:o.FUNC_SUBTRACT,[by]:o.FUNC_REVERSE_SUBTRACT};if(r)Wt[Gg]=o.MIN,Wt[Vg]=o.MAX;else{const Y=e.get("EXT_blend_minmax");Y!==null&&(Wt[Gg]=Y.MIN_EXT,Wt[Vg]=Y.MAX_EXT)}const fe={[Ay]:o.ZERO,[Ry]:o.ONE,[wy]:o.SRC_COLOR,[hd]:o.SRC_ALPHA,[Oy]:o.SRC_ALPHA_SATURATE,[Dy]:o.DST_COLOR,[Uy]:o.DST_ALPHA,[Cy]:o.ONE_MINUS_SRC_COLOR,[dd]:o.ONE_MINUS_SRC_ALPHA,[Ny]:o.ONE_MINUS_DST_COLOR,[Ly]:o.ONE_MINUS_DST_ALPHA,[Py]:o.CONSTANT_COLOR,[zy]:o.ONE_MINUS_CONSTANT_COLOR,[By]:o.CONSTANT_ALPHA,[Fy]:o.ONE_MINUS_CONSTANT_ALPHA};function Zt(Y,zt,Ot,se,Jt,Be,Fe,$e,on,Oe){if(Y===Sr){_===!0&&(Ht(o.BLEND),_=!1);return}if(_===!1&&(Kt(o.BLEND),_=!0),Y!==Ey){if(Y!==H||Oe!==k){if((O!==$r||q!==$r)&&(o.blendEquation(o.FUNC_ADD),O=$r,q=$r),Oe)switch(Y){case uo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fg:o.blendFunc(o.ONE,o.ONE);break;case Ig:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case uo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ig:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}B=null,Z=null,X=null,xt=null,U.set(0,0,0),A=0,H=Y,k=Oe}return}Jt=Jt||zt,Be=Be||Ot,Fe=Fe||se,(zt!==O||Jt!==q)&&(o.blendEquationSeparate(Wt[zt],Wt[Jt]),O=zt,q=Jt),(Ot!==B||se!==Z||Be!==X||Fe!==xt)&&(o.blendFuncSeparate(fe[Ot],fe[se],fe[Be],fe[Fe]),B=Ot,Z=se,X=Be,xt=Fe),($e.equals(U)===!1||on!==A)&&(o.blendColor($e.r,$e.g,$e.b,on),U.copy($e),A=on),H=Y,k=!1}function We(Y,zt){Y.side===Pa?Ht(o.CULL_FACE):Kt(o.CULL_FACE);let Ot=Y.side===di;zt&&(Ot=!Ot),ge(Ot),Y.blending===uo&&Y.transparent===!1?Zt(Sr):Zt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),g.setFunc(Y.depthFunc),g.setTest(Y.depthTest),g.setMask(Y.depthWrite),d.setMask(Y.colorWrite);const se=Y.stencilWrite;v.setTest(se),se&&(v.setMask(Y.stencilWriteMask),v.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),v.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),mt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Kt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function ge(Y){ot!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),ot=Y)}function z(Y){Y!==Sy?(Kt(o.CULL_FACE),Y!==_t&&(Y===Bg?o.cullFace(o.BACK):Y===xy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),_t=Y}function D(Y){Y!==j&&($&&o.lineWidth(Y),j=Y)}function mt(Y,zt,Ot){Y?(Kt(o.POLYGON_OFFSET_FILL),(rt!==zt||I!==Ot)&&(o.polygonOffset(zt,Ot),rt=zt,I=Ot)):Ht(o.POLYGON_OFFSET_FILL)}function Lt(Y){Y?Kt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function Ct(Y){Y===void 0&&(Y=o.TEXTURE0+J-1),nt!==Y&&(o.activeTexture(Y),nt=Y)}function bt(Y,zt,Ot){Ot===void 0&&(nt===null?Ot=o.TEXTURE0+J-1:Ot=nt);let se=gt[Ot];se===void 0&&(se={type:void 0,texture:void 0},gt[Ot]=se),(se.type!==Y||se.texture!==zt)&&(nt!==Ot&&(o.activeTexture(Ot),nt=Ot),o.bindTexture(Y,zt||It[Y]),se.type=Y,se.texture=zt)}function te(){const Y=gt[nt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Bt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function qt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function re(){try{o.texSubImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xe(){try{o.texSubImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ze(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ee(){try{o.texStorage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ae(){try{o.texStorage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xt(){try{o.texImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(){try{o.texImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function le(Y){Tt.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),Tt.copy(Y))}function ve(Y){Ut.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),Ut.copy(Y))}function je(Y,zt){let Ot=E.get(zt);Ot===void 0&&(Ot=new WeakMap,E.set(zt,Ot));let se=Ot.get(Y);se===void 0&&(se=o.getUniformBlockIndex(zt,Y.name),Ot.set(Y,se))}function pe(Y,zt){const se=E.get(zt).get(Y);S.get(zt)!==se&&(o.uniformBlockBinding(zt,se,Y.__bindingPointIndex),S.set(zt,se))}function Dt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),M={},nt=null,gt={},b={},R=new WeakMap,C=[],x=null,_=!1,H=null,O=null,B=null,Z=null,q=null,X=null,xt=null,U=new Xe(0,0,0),A=0,k=!1,ot=null,_t=null,j=null,rt=null,I=null,Tt.set(0,0,o.canvas.width,o.canvas.height),Ut.set(0,0,o.canvas.width,o.canvas.height),d.reset(),g.reset(),v.reset()}return{buffers:{color:d,depth:g,stencil:v},enable:Kt,disable:Ht,bindFramebuffer:ce,drawBuffers:ft,useProgram:Se,setBlending:Zt,setMaterial:We,setFlipSided:ge,setCullFace:z,setLineWidth:D,setPolygonOffset:mt,setScissorTest:Lt,activeTexture:Ct,bindTexture:bt,unbindTexture:te,compressedTexImage2D:Bt,compressedTexImage3D:qt,texImage2D:Xt,texImage3D:Yt,updateUBOMapping:je,uniformBlockBinding:pe,texStorage2D:Ee,texStorage3D:ae,texSubImage2D:re,texSubImage3D:xe,compressedTexSubImage2D:wt,compressedTexSubImage3D:ze,scissor:le,viewport:ve,reset:Dt}}function Sb(o,e,i,r,l,f,p){const d=l.isWebGL2,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new WeakMap;let E;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(z,D){return b?new OffscreenCanvas(z,D):mc("canvas")}function C(z,D,mt,Lt){let Ct=1;if((z.width>Lt||z.height>Lt)&&(Ct=Lt/Math.max(z.width,z.height)),Ct<1||D===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){const bt=D?Sd:Math.floor,te=bt(Ct*z.width),Bt=bt(Ct*z.height);E===void 0&&(E=R(te,Bt));const qt=mt?R(te,Bt):E;return qt.width=te,qt.height=Bt,qt.getContext("2d").drawImage(z,0,0,te,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+te+"x"+Bt+")."),qt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function x(z){return _v(z.width)&&_v(z.height)}function _(z){return d?!1:z.wrapS!==Qi||z.wrapT!==Qi||z.minFilter!==oi&&z.minFilter!==Bi}function H(z,D){return z.generateMipmaps&&D&&z.minFilter!==oi&&z.minFilter!==Bi}function O(z){o.generateMipmap(z)}function B(z,D,mt,Lt,Ct=!1){if(d===!1)return D;if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let bt=D;if(D===o.RED&&(mt===o.FLOAT&&(bt=o.R32F),mt===o.HALF_FLOAT&&(bt=o.R16F),mt===o.UNSIGNED_BYTE&&(bt=o.R8)),D===o.RED_INTEGER&&(mt===o.UNSIGNED_BYTE&&(bt=o.R8UI),mt===o.UNSIGNED_SHORT&&(bt=o.R16UI),mt===o.UNSIGNED_INT&&(bt=o.R32UI),mt===o.BYTE&&(bt=o.R8I),mt===o.SHORT&&(bt=o.R16I),mt===o.INT&&(bt=o.R32I)),D===o.RG&&(mt===o.FLOAT&&(bt=o.RG32F),mt===o.HALF_FLOAT&&(bt=o.RG16F),mt===o.UNSIGNED_BYTE&&(bt=o.RG8)),D===o.RGBA){const te=Ct?fc:Qe.getTransfer(Lt);mt===o.FLOAT&&(bt=o.RGBA32F),mt===o.HALF_FLOAT&&(bt=o.RGBA16F),mt===o.UNSIGNED_BYTE&&(bt=te===sn?o.SRGB8_ALPHA8:o.RGBA8),mt===o.UNSIGNED_SHORT_4_4_4_4&&(bt=o.RGBA4),mt===o.UNSIGNED_SHORT_5_5_5_1&&(bt=o.RGB5_A1)}return(bt===o.R16F||bt===o.R32F||bt===o.RG16F||bt===o.RG32F||bt===o.RGBA16F||bt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),bt}function Z(z,D,mt){return H(z,mt)===!0||z.isFramebufferTexture&&z.minFilter!==oi&&z.minFilter!==Bi?Math.log2(Math.max(D.width,D.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?D.mipmaps.length:1}function q(z){return z===oi||z===kg||z===Oh?o.NEAREST:o.LINEAR}function X(z){const D=z.target;D.removeEventListener("dispose",X),U(D),D.isVideoTexture&&S.delete(D)}function xt(z){const D=z.target;D.removeEventListener("dispose",xt),k(D)}function U(z){const D=r.get(z);if(D.__webglInit===void 0)return;const mt=z.source,Lt=M.get(mt);if(Lt){const Ct=Lt[D.__cacheKey];Ct.usedTimes--,Ct.usedTimes===0&&A(z),Object.keys(Lt).length===0&&M.delete(mt)}r.remove(z)}function A(z){const D=r.get(z);o.deleteTexture(D.__webglTexture);const mt=z.source,Lt=M.get(mt);delete Lt[D.__cacheKey],p.memory.textures--}function k(z){const D=z.texture,mt=r.get(z),Lt=r.get(D);if(Lt.__webglTexture!==void 0&&(o.deleteTexture(Lt.__webglTexture),p.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let Ct=0;Ct<6;Ct++){if(Array.isArray(mt.__webglFramebuffer[Ct]))for(let bt=0;bt<mt.__webglFramebuffer[Ct].length;bt++)o.deleteFramebuffer(mt.__webglFramebuffer[Ct][bt]);else o.deleteFramebuffer(mt.__webglFramebuffer[Ct]);mt.__webglDepthbuffer&&o.deleteRenderbuffer(mt.__webglDepthbuffer[Ct])}else{if(Array.isArray(mt.__webglFramebuffer))for(let Ct=0;Ct<mt.__webglFramebuffer.length;Ct++)o.deleteFramebuffer(mt.__webglFramebuffer[Ct]);else o.deleteFramebuffer(mt.__webglFramebuffer);if(mt.__webglDepthbuffer&&o.deleteRenderbuffer(mt.__webglDepthbuffer),mt.__webglMultisampledFramebuffer&&o.deleteFramebuffer(mt.__webglMultisampledFramebuffer),mt.__webglColorRenderbuffer)for(let Ct=0;Ct<mt.__webglColorRenderbuffer.length;Ct++)mt.__webglColorRenderbuffer[Ct]&&o.deleteRenderbuffer(mt.__webglColorRenderbuffer[Ct]);mt.__webglDepthRenderbuffer&&o.deleteRenderbuffer(mt.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let Ct=0,bt=D.length;Ct<bt;Ct++){const te=r.get(D[Ct]);te.__webglTexture&&(o.deleteTexture(te.__webglTexture),p.memory.textures--),r.remove(D[Ct])}r.remove(D),r.remove(z)}let ot=0;function _t(){ot=0}function j(){const z=ot;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),ot+=1,z}function rt(z){const D=[];return D.push(z.wrapS),D.push(z.wrapT),D.push(z.wrapR||0),D.push(z.magFilter),D.push(z.minFilter),D.push(z.anisotropy),D.push(z.internalFormat),D.push(z.format),D.push(z.type),D.push(z.generateMipmaps),D.push(z.premultiplyAlpha),D.push(z.flipY),D.push(z.unpackAlignment),D.push(z.colorSpace),D.join()}function I(z,D){const mt=r.get(z);if(z.isVideoTexture&&We(z),z.isRenderTargetTexture===!1&&z.version>0&&mt.__version!==z.version){const Lt=z.image;if(Lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(mt,z,D);return}}i.bindTexture(o.TEXTURE_2D,mt.__webglTexture,o.TEXTURE0+D)}function J(z,D){const mt=r.get(z);if(z.version>0&&mt.__version!==z.version){Tt(mt,z,D);return}i.bindTexture(o.TEXTURE_2D_ARRAY,mt.__webglTexture,o.TEXTURE0+D)}function $(z,D){const mt=r.get(z);if(z.version>0&&mt.__version!==z.version){Tt(mt,z,D);return}i.bindTexture(o.TEXTURE_3D,mt.__webglTexture,o.TEXTURE0+D)}function ut(z,D){const mt=r.get(z);if(z.version>0&&mt.__version!==z.version){Ut(mt,z,D);return}i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture,o.TEXTURE0+D)}const N={[gd]:o.REPEAT,[Qi]:o.CLAMP_TO_EDGE,[vd]:o.MIRRORED_REPEAT},nt={[oi]:o.NEAREST,[kg]:o.NEAREST_MIPMAP_NEAREST,[Oh]:o.NEAREST_MIPMAP_LINEAR,[Bi]:o.LINEAR,[tS]:o.LINEAR_MIPMAP_NEAREST,[Ml]:o.LINEAR_MIPMAP_LINEAR},gt={[dS]:o.NEVER,[yS]:o.ALWAYS,[pS]:o.LESS,[v_]:o.LEQUAL,[mS]:o.EQUAL,[_S]:o.GEQUAL,[gS]:o.GREATER,[vS]:o.NOTEQUAL};function tt(z,D,mt){if(mt?(o.texParameteri(z,o.TEXTURE_WRAP_S,N[D.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,N[D.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,N[D.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,nt[D.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,nt[D.minFilter])):(o.texParameteri(z,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(z,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(D.wrapS!==Qi||D.wrapT!==Qi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(z,o.TEXTURE_MAG_FILTER,q(D.magFilter)),o.texParameteri(z,o.TEXTURE_MIN_FILTER,q(D.minFilter)),D.minFilter!==oi&&D.minFilter!==Bi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),D.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,gt[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Lt=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===oi||D.minFilter!==Oh&&D.minFilter!==Ml||D.type===yr&&e.has("OES_texture_float_linear")===!1||d===!1&&D.type===El&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||r.get(D).__currentAnisotropy)&&(o.texParameterf(z,Lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,l.getMaxAnisotropy())),r.get(D).__currentAnisotropy=D.anisotropy)}}function at(z,D){let mt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,D.addEventListener("dispose",X));const Lt=D.source;let Ct=M.get(Lt);Ct===void 0&&(Ct={},M.set(Lt,Ct));const bt=rt(D);if(bt!==z.__cacheKey){Ct[bt]===void 0&&(Ct[bt]={texture:o.createTexture(),usedTimes:0},p.memory.textures++,mt=!0),Ct[bt].usedTimes++;const te=Ct[z.__cacheKey];te!==void 0&&(Ct[z.__cacheKey].usedTimes--,te.usedTimes===0&&A(D)),z.__cacheKey=bt,z.__webglTexture=Ct[bt].texture}return mt}function Tt(z,D,mt){let Lt=o.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(Lt=o.TEXTURE_2D_ARRAY),D.isData3DTexture&&(Lt=o.TEXTURE_3D);const Ct=at(z,D),bt=D.source;i.bindTexture(Lt,z.__webglTexture,o.TEXTURE0+mt);const te=r.get(bt);if(bt.version!==te.__version||Ct===!0){i.activeTexture(o.TEXTURE0+mt);const Bt=Qe.getPrimaries(Qe.workingColorSpace),qt=D.colorSpace===Ii?null:Qe.getPrimaries(D.colorSpace),re=D.colorSpace===Ii||Bt===qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const xe=_(D)&&x(D.image)===!1;let wt=C(D.image,xe,!1,l.maxTextureSize);wt=ge(D,wt);const ze=x(wt)||d,Ee=f.convert(D.format,D.colorSpace);let ae=f.convert(D.type),Xt=B(D.internalFormat,Ee,ae,D.colorSpace,D.isVideoTexture);tt(Lt,D,ze);let Yt;const le=D.mipmaps,ve=d&&D.isVideoTexture!==!0&&Xt!==m_,je=te.__version===void 0||Ct===!0,pe=Z(D,wt,ze);if(D.isDepthTexture)Xt=o.DEPTH_COMPONENT,d?D.type===yr?Xt=o.DEPTH_COMPONENT32F:D.type===_r?Xt=o.DEPTH_COMPONENT24:D.type===es?Xt=o.DEPTH24_STENCIL8:Xt=o.DEPTH_COMPONENT16:D.type===yr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===ns&&Xt===o.DEPTH_COMPONENT&&D.type!==Ed&&D.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=_r,ae=f.convert(D.type)),D.format===po&&Xt===o.DEPTH_COMPONENT&&(Xt=o.DEPTH_STENCIL,D.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=es,ae=f.convert(D.type))),je&&(ve?i.texStorage2D(o.TEXTURE_2D,1,Xt,wt.width,wt.height):i.texImage2D(o.TEXTURE_2D,0,Xt,wt.width,wt.height,0,Ee,ae,null));else if(D.isDataTexture)if(le.length>0&&ze){ve&&je&&i.texStorage2D(o.TEXTURE_2D,pe,Xt,le[0].width,le[0].height);for(let Dt=0,Y=le.length;Dt<Y;Dt++)Yt=le[Dt],ve?i.texSubImage2D(o.TEXTURE_2D,Dt,0,0,Yt.width,Yt.height,Ee,ae,Yt.data):i.texImage2D(o.TEXTURE_2D,Dt,Xt,Yt.width,Yt.height,0,Ee,ae,Yt.data);D.generateMipmaps=!1}else ve?(je&&i.texStorage2D(o.TEXTURE_2D,pe,Xt,wt.width,wt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt.width,wt.height,Ee,ae,wt.data)):i.texImage2D(o.TEXTURE_2D,0,Xt,wt.width,wt.height,0,Ee,ae,wt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){ve&&je&&i.texStorage3D(o.TEXTURE_2D_ARRAY,pe,Xt,le[0].width,le[0].height,wt.depth);for(let Dt=0,Y=le.length;Dt<Y;Dt++)Yt=le[Dt],D.format!==Ji?Ee!==null?ve?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Dt,0,0,0,Yt.width,Yt.height,wt.depth,Ee,Yt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Dt,Xt,Yt.width,Yt.height,wt.depth,0,Yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?i.texSubImage3D(o.TEXTURE_2D_ARRAY,Dt,0,0,0,Yt.width,Yt.height,wt.depth,Ee,ae,Yt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Dt,Xt,Yt.width,Yt.height,wt.depth,0,Ee,ae,Yt.data)}else{ve&&je&&i.texStorage2D(o.TEXTURE_2D,pe,Xt,le[0].width,le[0].height);for(let Dt=0,Y=le.length;Dt<Y;Dt++)Yt=le[Dt],D.format!==Ji?Ee!==null?ve?i.compressedTexSubImage2D(o.TEXTURE_2D,Dt,0,0,Yt.width,Yt.height,Ee,Yt.data):i.compressedTexImage2D(o.TEXTURE_2D,Dt,Xt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?i.texSubImage2D(o.TEXTURE_2D,Dt,0,0,Yt.width,Yt.height,Ee,ae,Yt.data):i.texImage2D(o.TEXTURE_2D,Dt,Xt,Yt.width,Yt.height,0,Ee,ae,Yt.data)}else if(D.isDataArrayTexture)ve?(je&&i.texStorage3D(o.TEXTURE_2D_ARRAY,pe,Xt,wt.width,wt.height,wt.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Ee,ae,wt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,wt.width,wt.height,wt.depth,0,Ee,ae,wt.data);else if(D.isData3DTexture)ve?(je&&i.texStorage3D(o.TEXTURE_3D,pe,Xt,wt.width,wt.height,wt.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Ee,ae,wt.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,wt.width,wt.height,wt.depth,0,Ee,ae,wt.data);else if(D.isFramebufferTexture){if(je)if(ve)i.texStorage2D(o.TEXTURE_2D,pe,Xt,wt.width,wt.height);else{let Dt=wt.width,Y=wt.height;for(let zt=0;zt<pe;zt++)i.texImage2D(o.TEXTURE_2D,zt,Xt,Dt,Y,0,Ee,ae,null),Dt>>=1,Y>>=1}}else if(le.length>0&&ze){ve&&je&&i.texStorage2D(o.TEXTURE_2D,pe,Xt,le[0].width,le[0].height);for(let Dt=0,Y=le.length;Dt<Y;Dt++)Yt=le[Dt],ve?i.texSubImage2D(o.TEXTURE_2D,Dt,0,0,Ee,ae,Yt):i.texImage2D(o.TEXTURE_2D,Dt,Xt,Ee,ae,Yt);D.generateMipmaps=!1}else ve?(je&&i.texStorage2D(o.TEXTURE_2D,pe,Xt,wt.width,wt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,ae,wt)):i.texImage2D(o.TEXTURE_2D,0,Xt,Ee,ae,wt);H(D,ze)&&O(Lt),te.__version=bt.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function Ut(z,D,mt){if(D.image.length!==6)return;const Lt=at(z,D),Ct=D.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+mt);const bt=r.get(Ct);if(Ct.version!==bt.__version||Lt===!0){i.activeTexture(o.TEXTURE0+mt);const te=Qe.getPrimaries(Qe.workingColorSpace),Bt=D.colorSpace===Ii?null:Qe.getPrimaries(D.colorSpace),qt=D.colorSpace===Ii||te===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const re=D.isCompressedTexture||D.image[0].isCompressedTexture,xe=D.image[0]&&D.image[0].isDataTexture,wt=[];for(let Dt=0;Dt<6;Dt++)!re&&!xe?wt[Dt]=C(D.image[Dt],!1,!0,l.maxCubemapSize):wt[Dt]=xe?D.image[Dt].image:D.image[Dt],wt[Dt]=ge(D,wt[Dt]);const ze=wt[0],Ee=x(ze)||d,ae=f.convert(D.format,D.colorSpace),Xt=f.convert(D.type),Yt=B(D.internalFormat,ae,Xt,D.colorSpace),le=d&&D.isVideoTexture!==!0,ve=bt.__version===void 0||Lt===!0;let je=Z(D,ze,Ee);tt(o.TEXTURE_CUBE_MAP,D,Ee);let pe;if(re){le&&ve&&i.texStorage2D(o.TEXTURE_CUBE_MAP,je,Yt,ze.width,ze.height);for(let Dt=0;Dt<6;Dt++){pe=wt[Dt].mipmaps;for(let Y=0;Y<pe.length;Y++){const zt=pe[Y];D.format!==Ji?ae!==null?le?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Y,0,0,zt.width,zt.height,ae,zt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Y,Yt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Y,0,0,zt.width,zt.height,ae,Xt,zt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Y,Yt,zt.width,zt.height,0,ae,Xt,zt.data)}}}else{pe=D.mipmaps,le&&ve&&(pe.length>0&&je++,i.texStorage2D(o.TEXTURE_CUBE_MAP,je,Yt,wt[0].width,wt[0].height));for(let Dt=0;Dt<6;Dt++)if(xe){le?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,wt[Dt].width,wt[Dt].height,ae,Xt,wt[Dt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Yt,wt[Dt].width,wt[Dt].height,0,ae,Xt,wt[Dt].data);for(let Y=0;Y<pe.length;Y++){const Ot=pe[Y].image[Dt].image;le?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Y+1,0,0,Ot.width,Ot.height,ae,Xt,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Y+1,Yt,Ot.width,Ot.height,0,ae,Xt,Ot.data)}}else{le?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,ae,Xt,wt[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Yt,ae,Xt,wt[Dt]);for(let Y=0;Y<pe.length;Y++){const zt=pe[Y];le?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Y+1,0,0,ae,Xt,zt.image[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Y+1,Yt,ae,Xt,zt.image[Dt])}}}H(D,Ee)&&O(o.TEXTURE_CUBE_MAP),bt.__version=Ct.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function Vt(z,D,mt,Lt,Ct,bt){const te=f.convert(mt.format,mt.colorSpace),Bt=f.convert(mt.type),qt=B(mt.internalFormat,te,Bt,mt.colorSpace);if(!r.get(D).__hasExternalTextures){const xe=Math.max(1,D.width>>bt),wt=Math.max(1,D.height>>bt);Ct===o.TEXTURE_3D||Ct===o.TEXTURE_2D_ARRAY?i.texImage3D(Ct,bt,qt,xe,wt,D.depth,0,te,Bt,null):i.texImage2D(Ct,bt,qt,xe,wt,0,te,Bt,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),Zt(D)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Lt,Ct,r.get(mt).__webglTexture,0,fe(D)):(Ct===o.TEXTURE_2D||Ct>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ct<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Lt,Ct,r.get(mt).__webglTexture,bt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(z,D,mt){if(o.bindRenderbuffer(o.RENDERBUFFER,z),D.depthBuffer&&!D.stencilBuffer){let Lt=d===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(mt||Zt(D)){const Ct=D.depthTexture;Ct&&Ct.isDepthTexture&&(Ct.type===yr?Lt=o.DEPTH_COMPONENT32F:Ct.type===_r&&(Lt=o.DEPTH_COMPONENT24));const bt=fe(D);Zt(D)?g.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,bt,Lt,D.width,D.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,bt,Lt,D.width,D.height)}else o.renderbufferStorage(o.RENDERBUFFER,Lt,D.width,D.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,z)}else if(D.depthBuffer&&D.stencilBuffer){const Lt=fe(D);mt&&Zt(D)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,o.DEPTH24_STENCIL8,D.width,D.height):Zt(D)?g.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Lt,o.DEPTH24_STENCIL8,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,z)}else{const Lt=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let Ct=0;Ct<Lt.length;Ct++){const bt=Lt[Ct],te=f.convert(bt.format,bt.colorSpace),Bt=f.convert(bt.type),qt=B(bt.internalFormat,te,Bt,bt.colorSpace),re=fe(D);mt&&Zt(D)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,re,qt,D.width,D.height):Zt(D)?g.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,re,qt,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,qt,D.width,D.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(z,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),I(D.depthTexture,0);const Lt=r.get(D.depthTexture).__webglTexture,Ct=fe(D);if(D.depthTexture.format===ns)Zt(D)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Lt,0,Ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Lt,0);else if(D.depthTexture.format===po)Zt(D)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Lt,0,Ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Lt,0);else throw new Error("Unknown depthTexture format")}function Ht(z){const D=r.get(z),mt=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!D.__autoAllocateDepthBuffer){if(mt)throw new Error("target.depthTexture not supported in Cube render targets");Kt(D.__webglFramebuffer,z)}else if(mt){D.__webglDepthbuffer=[];for(let Lt=0;Lt<6;Lt++)i.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[Lt]),D.__webglDepthbuffer[Lt]=o.createRenderbuffer(),It(D.__webglDepthbuffer[Lt],z,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=o.createRenderbuffer(),It(D.__webglDepthbuffer,z,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function ce(z,D,mt){const Lt=r.get(z);D!==void 0&&Vt(Lt.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),mt!==void 0&&Ht(z)}function ft(z){const D=z.texture,mt=r.get(z),Lt=r.get(D);z.addEventListener("dispose",xt),z.isWebGLMultipleRenderTargets!==!0&&(Lt.__webglTexture===void 0&&(Lt.__webglTexture=o.createTexture()),Lt.__version=D.version,p.memory.textures++);const Ct=z.isWebGLCubeRenderTarget===!0,bt=z.isWebGLMultipleRenderTargets===!0,te=x(z)||d;if(Ct){mt.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(d&&D.mipmaps&&D.mipmaps.length>0){mt.__webglFramebuffer[Bt]=[];for(let qt=0;qt<D.mipmaps.length;qt++)mt.__webglFramebuffer[Bt][qt]=o.createFramebuffer()}else mt.__webglFramebuffer[Bt]=o.createFramebuffer()}else{if(d&&D.mipmaps&&D.mipmaps.length>0){mt.__webglFramebuffer=[];for(let Bt=0;Bt<D.mipmaps.length;Bt++)mt.__webglFramebuffer[Bt]=o.createFramebuffer()}else mt.__webglFramebuffer=o.createFramebuffer();if(bt)if(l.drawBuffers){const Bt=z.texture;for(let qt=0,re=Bt.length;qt<re;qt++){const xe=r.get(Bt[qt]);xe.__webglTexture===void 0&&(xe.__webglTexture=o.createTexture(),p.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&z.samples>0&&Zt(z)===!1){const Bt=bt?D:[D];mt.__webglMultisampledFramebuffer=o.createFramebuffer(),mt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,mt.__webglMultisampledFramebuffer);for(let qt=0;qt<Bt.length;qt++){const re=Bt[qt];mt.__webglColorRenderbuffer[qt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,mt.__webglColorRenderbuffer[qt]);const xe=f.convert(re.format,re.colorSpace),wt=f.convert(re.type),ze=B(re.internalFormat,xe,wt,re.colorSpace,z.isXRRenderTarget===!0),Ee=fe(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ee,ze,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,mt.__webglColorRenderbuffer[qt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(mt.__webglDepthRenderbuffer=o.createRenderbuffer(),It(mt.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ct){i.bindTexture(o.TEXTURE_CUBE_MAP,Lt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,D,te);for(let Bt=0;Bt<6;Bt++)if(d&&D.mipmaps&&D.mipmaps.length>0)for(let qt=0;qt<D.mipmaps.length;qt++)Vt(mt.__webglFramebuffer[Bt][qt],z,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,qt);else Vt(mt.__webglFramebuffer[Bt],z,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);H(D,te)&&O(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(bt){const Bt=z.texture;for(let qt=0,re=Bt.length;qt<re;qt++){const xe=Bt[qt],wt=r.get(xe);i.bindTexture(o.TEXTURE_2D,wt.__webglTexture),tt(o.TEXTURE_2D,xe,te),Vt(mt.__webglFramebuffer,z,xe,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,0),H(xe,te)&&O(o.TEXTURE_2D)}i.unbindTexture()}else{let Bt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(d?Bt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Bt,Lt.__webglTexture),tt(Bt,D,te),d&&D.mipmaps&&D.mipmaps.length>0)for(let qt=0;qt<D.mipmaps.length;qt++)Vt(mt.__webglFramebuffer[qt],z,D,o.COLOR_ATTACHMENT0,Bt,qt);else Vt(mt.__webglFramebuffer,z,D,o.COLOR_ATTACHMENT0,Bt,0);H(D,te)&&O(Bt),i.unbindTexture()}z.depthBuffer&&Ht(z)}function Se(z){const D=x(z)||d,mt=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let Lt=0,Ct=mt.length;Lt<Ct;Lt++){const bt=mt[Lt];if(H(bt,D)){const te=z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Bt=r.get(bt).__webglTexture;i.bindTexture(te,Bt),O(te),i.unbindTexture()}}}function Wt(z){if(d&&z.samples>0&&Zt(z)===!1){const D=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],mt=z.width,Lt=z.height;let Ct=o.COLOR_BUFFER_BIT;const bt=[],te=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Bt=r.get(z),qt=z.isWebGLMultipleRenderTargets===!0;if(qt)for(let re=0;re<D.length;re++)i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let re=0;re<D.length;re++){bt.push(o.COLOR_ATTACHMENT0+re),z.depthBuffer&&bt.push(te);const xe=Bt.__ignoreDepthValues!==void 0?Bt.__ignoreDepthValues:!1;if(xe===!1&&(z.depthBuffer&&(Ct|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&(Ct|=o.STENCIL_BUFFER_BIT)),qt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Bt.__webglColorRenderbuffer[re]),xe===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[te]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[te])),qt){const wt=r.get(D[re]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,wt,0)}o.blitFramebuffer(0,0,mt,Lt,0,0,mt,Lt,Ct,o.NEAREST),v&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,bt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),qt)for(let re=0;re<D.length;re++){i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.RENDERBUFFER,Bt.__webglColorRenderbuffer[re]);const xe=r.get(D[re]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+re,o.TEXTURE_2D,xe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}}function fe(z){return Math.min(l.maxSamples,z.samples)}function Zt(z){const D=r.get(z);return d&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function We(z){const D=p.render.frame;S.get(z)!==D&&(S.set(z,D),z.update())}function ge(z,D){const mt=z.colorSpace,Lt=z.format,Ct=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===_d||mt!==Fa&&mt!==Ii&&(Qe.getTransfer(mt)===sn?d===!1?e.has("EXT_sRGB")===!0&&Lt===Ji?(z.format=_d,z.minFilter=Bi,z.generateMipmaps=!1):D=y_.sRGBToLinear(D):(Lt!==Ji||Ct!==Mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",mt)),D}this.allocateTextureUnit=j,this.resetTextureUnits=_t,this.setTexture2D=I,this.setTexture2DArray=J,this.setTexture3D=$,this.setTextureCube=ut,this.rebindTextures=ce,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=Zt}function xb(o,e,i){const r=i.isWebGL2;function l(f,p=Ii){let d;const g=Qe.getTransfer(p);if(f===Mr)return o.UNSIGNED_BYTE;if(f===c_)return o.UNSIGNED_SHORT_4_4_4_4;if(f===f_)return o.UNSIGNED_SHORT_5_5_5_1;if(f===eS)return o.BYTE;if(f===nS)return o.SHORT;if(f===Ed)return o.UNSIGNED_SHORT;if(f===u_)return o.INT;if(f===_r)return o.UNSIGNED_INT;if(f===yr)return o.FLOAT;if(f===El)return r?o.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(f===iS)return o.ALPHA;if(f===Ji)return o.RGBA;if(f===aS)return o.LUMINANCE;if(f===rS)return o.LUMINANCE_ALPHA;if(f===ns)return o.DEPTH_COMPONENT;if(f===po)return o.DEPTH_STENCIL;if(f===_d)return d=e.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(f===sS)return o.RED;if(f===h_)return o.RED_INTEGER;if(f===oS)return o.RG;if(f===d_)return o.RG_INTEGER;if(f===p_)return o.RGBA_INTEGER;if(f===Ph||f===zh||f===Bh||f===Fh)if(g===sn)if(d=e.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(f===Ph)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(f===zh)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(f===Bh)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(f===Fh)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(f===Ph)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(f===zh)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(f===Bh)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(f===Fh)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(f===Wg||f===Xg||f===qg||f===jg)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(f===Wg)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(f===Xg)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(f===qg)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(f===jg)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(f===m_)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(f===Yg||f===Zg)if(d=e.get("WEBGL_compressed_texture_etc"),d!==null){if(f===Yg)return g===sn?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(f===Zg)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(f===Kg||f===Qg||f===Jg||f===$g||f===tv||f===ev||f===nv||f===iv||f===av||f===rv||f===sv||f===ov||f===lv||f===uv)if(d=e.get("WEBGL_compressed_texture_astc"),d!==null){if(f===Kg)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(f===Qg)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(f===Jg)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(f===$g)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(f===tv)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(f===ev)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(f===nv)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(f===iv)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(f===av)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(f===rv)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(f===sv)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(f===ov)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(f===lv)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(f===uv)return g===sn?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(f===Ih||f===cv||f===fv)if(d=e.get("EXT_texture_compression_bptc"),d!==null){if(f===Ih)return g===sn?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(f===cv)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(f===fv)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(f===lS||f===hv||f===dv||f===pv)if(d=e.get("EXT_texture_compression_rgtc"),d!==null){if(f===Ih)return d.COMPRESSED_RED_RGTC1_EXT;if(f===hv)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(f===dv)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(f===pv)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return f===es?r?o.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):o[f]!==void 0?o[f]:null}return{convert:l}}class Mb extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sc extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eb={type:"move"};class cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new yt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new yt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new yt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new yt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,p=null;const d=this._targetRay,g=this._grip,v=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(v&&e.hand){p=!0;for(const C of e.hand.values()){const x=i.getJointPose(C,r),_=this._getHandJoint(v,C);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const S=v.joints["index-finger-tip"],E=v.joints["thumb-tip"],M=S.position.distanceTo(E.position),b=.02,R=.005;v.inputState.pinching&&M>b+R?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!v.inputState.pinching&&M<=b-R&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return d!==null&&(d.visible=l!==null),g!==null&&(g.visible=f!==null),v!==null&&(v.visible=p!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new sc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Tb extends vo{constructor(e,i){super();const r=this;let l=null,f=1,p=null,d="local-floor",g=1,v=null,S=null,E=null,M=null,b=null,R=null;const C=i.getContextAttributes();let x=null,_=null;const H=[],O=[],B=new qe;let Z=null;const q=new Fi;q.layers.enable(1),q.viewport=new Gn;const X=new Fi;X.layers.enable(2),X.viewport=new Gn;const xt=[q,X],U=new Mb;U.layers.enable(1),U.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let at=H[tt];return at===void 0&&(at=new cd,H[tt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(tt){let at=H[tt];return at===void 0&&(at=new cd,H[tt]=at),at.getGripSpace()},this.getHand=function(tt){let at=H[tt];return at===void 0&&(at=new cd,H[tt]=at),at.getHandSpace()};function ot(tt){const at=O.indexOf(tt.inputSource);if(at===-1)return;const Tt=H[at];Tt!==void 0&&(Tt.update(tt.inputSource,tt.frame,v||p),Tt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function _t(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",j);for(let tt=0;tt<H.length;tt++){const at=O[tt];at!==null&&(O[tt]=null,H[tt].disconnect(at))}A=null,k=null,e.setRenderTarget(x),b=null,M=null,E=null,l=null,_=null,gt.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){f=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||p},this.setReferenceSpace=function(tt){v=tt},this.getBaseLayer=function(){return M!==null?M:b},this.getBinding=function(){return E},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",j),C.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(B),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const at={antialias:l.renderState.layers===void 0?C.antialias:!0,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:f};b=new XRWebGLLayer(l,i,at),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),_=new rs(b.framebufferWidth,b.framebufferHeight,{format:Ji,type:Mr,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil})}else{let at=null,Tt=null,Ut=null;C.depth&&(Ut=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,at=C.stencil?po:ns,Tt=C.stencil?es:_r);const Vt={colorFormat:i.RGBA8,depthFormat:Ut,scaleFactor:f};E=new XRWebGLBinding(l,i),M=E.createProjectionLayer(Vt),l.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),_=new rs(M.textureWidth,M.textureHeight,{format:Ji,type:Mr,depthTexture:new L_(M.textureWidth,M.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0});const It=e.properties.get(_);It.__ignoreDepthValues=M.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(g),v=null,p=await l.requestReferenceSpace(d),gt.setContext(l),gt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function j(tt){for(let at=0;at<tt.removed.length;at++){const Tt=tt.removed[at],Ut=O.indexOf(Tt);Ut>=0&&(O[Ut]=null,H[Ut].disconnect(Tt))}for(let at=0;at<tt.added.length;at++){const Tt=tt.added[at];let Ut=O.indexOf(Tt);if(Ut===-1){for(let It=0;It<H.length;It++)if(It>=O.length){O.push(Tt),Ut=It;break}else if(O[It]===null){O[It]=Tt,Ut=It;break}if(Ut===-1)break}const Vt=H[Ut];Vt&&Vt.connect(Tt)}}const rt=new yt,I=new yt;function J(tt,at,Tt){rt.setFromMatrixPosition(at.matrixWorld),I.setFromMatrixPosition(Tt.matrixWorld);const Ut=rt.distanceTo(I),Vt=at.projectionMatrix.elements,It=Tt.projectionMatrix.elements,Kt=Vt[14]/(Vt[10]-1),Ht=Vt[14]/(Vt[10]+1),ce=(Vt[9]+1)/Vt[5],ft=(Vt[9]-1)/Vt[5],Se=(Vt[8]-1)/Vt[0],Wt=(It[8]+1)/It[0],fe=Kt*Se,Zt=Kt*Wt,We=Ut/(-Se+Wt),ge=We*-Se;at.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ge),tt.translateZ(We),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert();const z=Kt+We,D=Ht+We,mt=fe-ge,Lt=Zt+(Ut-ge),Ct=ce*Ht/D*z,bt=ft*Ht/D*z;tt.projectionMatrix.makePerspective(mt,Lt,Ct,bt,z,D),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}function $(tt,at){at===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(at.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;U.near=X.near=q.near=tt.near,U.far=X.far=q.far=tt.far,(A!==U.near||k!==U.far)&&(l.updateRenderState({depthNear:U.near,depthFar:U.far}),A=U.near,k=U.far);const at=tt.parent,Tt=U.cameras;$(U,at);for(let Ut=0;Ut<Tt.length;Ut++)$(Tt[Ut],at);Tt.length===2?J(U,q,X):U.projectionMatrix.copy(q.projectionMatrix),ut(tt,U,at)};function ut(tt,at,Tt){Tt===null?tt.matrix.copy(at.matrixWorld):(tt.matrix.copy(Tt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(at.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=yd*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(M===null&&b===null))return g},this.setFoveation=function(tt){g=tt,M!==null&&(M.fixedFoveation=tt),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=tt)};let N=null;function nt(tt,at){if(S=at.getViewerPose(v||p),R=at,S!==null){const Tt=S.views;b!==null&&(e.setRenderTargetFramebuffer(_,b.framebuffer),e.setRenderTarget(_));let Ut=!1;Tt.length!==U.cameras.length&&(U.cameras.length=0,Ut=!0);for(let Vt=0;Vt<Tt.length;Vt++){const It=Tt[Vt];let Kt=null;if(b!==null)Kt=b.getViewport(It);else{const ce=E.getViewSubImage(M,It);Kt=ce.viewport,Vt===0&&(e.setRenderTargetTextures(_,ce.colorTexture,M.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(_))}let Ht=xt[Vt];Ht===void 0&&(Ht=new Fi,Ht.layers.enable(Vt),Ht.viewport=new Gn,xt[Vt]=Ht),Ht.matrix.fromArray(It.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(It.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Vt===0&&(U.matrix.copy(Ht.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ut===!0&&U.cameras.push(Ht)}}for(let Tt=0;Tt<H.length;Tt++){const Ut=O[Tt],Vt=H[Tt];Ut!==null&&Vt!==void 0&&Vt.update(Ut,at,v||p)}N&&N(tt,at),at.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:at}),R=null}const gt=new C_;gt.setAnimationLoop(nt),this.setAnimationLoop=function(tt){N=tt},this.dispose=function(){}}}function bb(o,e){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,A_(o)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,H,O,B){_.isMeshBasicMaterial||_.isMeshLambertMaterial?f(x,_):_.isMeshToonMaterial?(f(x,_),E(x,_)):_.isMeshPhongMaterial?(f(x,_),S(x,_)):_.isMeshStandardMaterial?(f(x,_),M(x,_),_.isMeshPhysicalMaterial&&b(x,_,B)):_.isMeshMatcapMaterial?(f(x,_),R(x,_)):_.isMeshDepthMaterial?f(x,_):_.isMeshDistanceMaterial?(f(x,_),C(x,_)):_.isMeshNormalMaterial?f(x,_):_.isLineBasicMaterial?(p(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?g(x,_,H,O):_.isSpriteMaterial?v(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function f(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===di&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===di&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const H=e.get(_).envMap;if(H&&(x.envMap.value=H,x.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const O=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*O,i(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function g(x,_,H,O){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*H,x.scale.value=O*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function v(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function S(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function E(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function M(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),e.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function b(x,_,H){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===di&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=H.texture,x.transmissionSamplerSize.value.set(H.width,H.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function R(x,_){_.matcap&&(x.matcap.value=_.matcap)}function C(x,_){const H=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(H.matrixWorld),x.nearDistance.value=H.shadow.camera.near,x.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Ab(o,e,i,r){let l={},f={},p=[];const d=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function g(H,O){const B=O.program;r.uniformBlockBinding(H,B)}function v(H,O){let B=l[H.id];B===void 0&&(R(H),B=S(H),l[H.id]=B,H.addEventListener("dispose",x));const Z=O.program;r.updateUBOMapping(H,Z);const q=e.render.frame;f[H.id]!==q&&(M(H),f[H.id]=q)}function S(H){const O=E();H.__bindingPointIndex=O;const B=o.createBuffer(),Z=H.__size,q=H.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,Z,q),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,B),B}function E(){for(let H=0;H<d;H++)if(p.indexOf(H)===-1)return p.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(H){const O=l[H.id],B=H.uniforms,Z=H.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let q=0,X=B.length;q<X;q++){const xt=Array.isArray(B[q])?B[q]:[B[q]];for(let U=0,A=xt.length;U<A;U++){const k=xt[U];if(b(k,q,U,Z)===!0){const ot=k.__offset,_t=Array.isArray(k.value)?k.value:[k.value];let j=0;for(let rt=0;rt<_t.length;rt++){const I=_t[rt],J=C(I);typeof I=="number"||typeof I=="boolean"?(k.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,ot+j,k.__data)):I.isMatrix3?(k.__data[0]=I.elements[0],k.__data[1]=I.elements[1],k.__data[2]=I.elements[2],k.__data[3]=0,k.__data[4]=I.elements[3],k.__data[5]=I.elements[4],k.__data[6]=I.elements[5],k.__data[7]=0,k.__data[8]=I.elements[6],k.__data[9]=I.elements[7],k.__data[10]=I.elements[8],k.__data[11]=0):(I.toArray(k.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(H,O,B,Z){const q=H.value,X=O+"_"+B;if(Z[X]===void 0)return typeof q=="number"||typeof q=="boolean"?Z[X]=q:Z[X]=q.clone(),!0;{const xt=Z[X];if(typeof q=="number"||typeof q=="boolean"){if(xt!==q)return Z[X]=q,!0}else if(xt.equals(q)===!1)return xt.copy(q),!0}return!1}function R(H){const O=H.uniforms;let B=0;const Z=16;for(let X=0,xt=O.length;X<xt;X++){const U=Array.isArray(O[X])?O[X]:[O[X]];for(let A=0,k=U.length;A<k;A++){const ot=U[A],_t=Array.isArray(ot.value)?ot.value:[ot.value];for(let j=0,rt=_t.length;j<rt;j++){const I=_t[j],J=C(I),$=B%Z;$!==0&&Z-$<J.boundary&&(B+=Z-$),ot.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=B,B+=J.storage}}}const q=B%Z;return q>0&&(B+=Z-q),H.__size=B,H.__cache={},this}function C(H){const O={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(O.boundary=4,O.storage=4):H.isVector2?(O.boundary=8,O.storage=8):H.isVector3||H.isColor?(O.boundary=16,O.storage=12):H.isVector4?(O.boundary=16,O.storage=16):H.isMatrix3?(O.boundary=48,O.storage=48):H.isMatrix4?(O.boundary=64,O.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),O}function x(H){const O=H.target;O.removeEventListener("dispose",x);const B=p.indexOf(O.__bindingPointIndex);p.splice(B,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete f[O.id]}function _(){for(const H in l)o.deleteBuffer(l[H]);p=[],l={},f={}}return{bind:g,update:v,dispose:_}}class B_{constructor(e={}){const{canvas:i=xS(),context:r=null,depth:l=!0,stencil:f=!0,alpha:p=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:v=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:E=!1}=e;this.isWebGLRenderer=!0;let M;r!==null?M=r.getContextAttributes().alpha:M=p;const b=new Uint32Array(4),R=new Int32Array(4);let C=null,x=null;const _=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this._useLegacyLights=!1,this.toneMapping=xr,this.toneMappingExposure=1;const O=this;let B=!1,Z=0,q=0,X=null,xt=-1,U=null;const A=new Gn,k=new Gn;let ot=null;const _t=new Xe(0);let j=0,rt=i.width,I=i.height,J=1,$=null,ut=null;const N=new Gn(0,0,rt,I),nt=new Gn(0,0,rt,I);let gt=!1;const tt=new Ad;let at=!1,Tt=!1,Ut=null;const Vt=new Nn,It=new qe,Kt=new yt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return X===null?J:1}let ft=r;function Se(P,st){for(let ht=0;ht<P.length;ht++){const vt=P[ht],ct=i.getContext(vt,st);if(ct!==null)return ct}return null}try{const P={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:v,powerPreference:S,failIfMajorPerformanceCaveat:E};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Md}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Y,!1),i.addEventListener("webglcontextcreationerror",zt,!1),ft===null){const st=["webgl2","webgl","experimental-webgl"];if(O.isWebGL1Renderer===!0&&st.shift(),ft=Se(st,P),ft===null)throw Se(st)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ft instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ft.getShaderPrecisionFormat===void 0&&(ft.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Wt,fe,Zt,We,ge,z,D,mt,Lt,Ct,bt,te,Bt,qt,re,xe,wt,ze,Ee,ae,Xt,Yt,le,ve;function je(){Wt=new zE(ft),fe=new UE(ft,Wt,e),Wt.init(fe),Yt=new xb(ft,Wt,fe),Zt=new yb(ft,Wt,fe),We=new IE(ft),ge=new rb,z=new Sb(ft,Wt,Zt,ge,fe,Yt,We),D=new DE(O),mt=new PE(O),Lt=new jS(ft,fe),le=new wE(ft,Wt,Lt,fe),Ct=new BE(ft,Lt,We,le),bt=new kE(ft,Ct,Lt,We),Ee=new VE(ft,fe,z),xe=new LE(ge),te=new ab(O,D,mt,Wt,fe,le,xe),Bt=new bb(O,ge),qt=new ob,re=new db(Wt,fe),ze=new RE(O,D,mt,Zt,bt,M,g),wt=new _b(O,bt,fe),ve=new Ab(ft,We,fe,Zt),ae=new CE(ft,Wt,We,fe),Xt=new FE(ft,Wt,We,fe),We.programs=te.programs,O.capabilities=fe,O.extensions=Wt,O.properties=ge,O.renderLists=qt,O.shadowMap=wt,O.state=Zt,O.info=We}je();const pe=new Tb(O,ft);this.xr=pe,this.getContext=function(){return ft},this.getContextAttributes=function(){return ft.getContextAttributes()},this.forceContextLoss=function(){const P=Wt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Wt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(P){P!==void 0&&(J=P,this.setSize(rt,I,!1))},this.getSize=function(P){return P.set(rt,I)},this.setSize=function(P,st,ht=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=P,I=st,i.width=Math.floor(P*J),i.height=Math.floor(st*J),ht===!0&&(i.style.width=P+"px",i.style.height=st+"px"),this.setViewport(0,0,P,st)},this.getDrawingBufferSize=function(P){return P.set(rt*J,I*J).floor()},this.setDrawingBufferSize=function(P,st,ht){rt=P,I=st,J=ht,i.width=Math.floor(P*ht),i.height=Math.floor(st*ht),this.setViewport(0,0,P,st)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(N)},this.setViewport=function(P,st,ht,vt){P.isVector4?N.set(P.x,P.y,P.z,P.w):N.set(P,st,ht,vt),Zt.viewport(A.copy(N).multiplyScalar(J).floor())},this.getScissor=function(P){return P.copy(nt)},this.setScissor=function(P,st,ht,vt){P.isVector4?nt.set(P.x,P.y,P.z,P.w):nt.set(P,st,ht,vt),Zt.scissor(k.copy(nt).multiplyScalar(J).floor())},this.getScissorTest=function(){return gt},this.setScissorTest=function(P){Zt.setScissorTest(gt=P)},this.setOpaqueSort=function(P){$=P},this.setTransparentSort=function(P){ut=P},this.getClearColor=function(P){return P.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(P=!0,st=!0,ht=!0){let vt=0;if(P){let ct=!1;if(X!==null){const Nt=X.texture.format;ct=Nt===p_||Nt===d_||Nt===h_}if(ct){const Nt=X.texture.type,kt=Nt===Mr||Nt===_r||Nt===Ed||Nt===es||Nt===c_||Nt===f_,$t=ze.getClearColor(),jt=ze.getClearAlpha(),_e=$t.r,me=$t.g,oe=$t.b;kt?(b[0]=_e,b[1]=me,b[2]=oe,b[3]=jt,ft.clearBufferuiv(ft.COLOR,0,b)):(R[0]=_e,R[1]=me,R[2]=oe,R[3]=jt,ft.clearBufferiv(ft.COLOR,0,R))}else vt|=ft.COLOR_BUFFER_BIT}st&&(vt|=ft.DEPTH_BUFFER_BIT),ht&&(vt|=ft.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ft.clear(vt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Y,!1),i.removeEventListener("webglcontextcreationerror",zt,!1),qt.dispose(),re.dispose(),ge.dispose(),D.dispose(),mt.dispose(),bt.dispose(),le.dispose(),ve.dispose(),te.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",on),pe.removeEventListener("sessionend",Oe),Ut&&(Ut.dispose(),Ut=null),ln.stop()};function Dt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const P=We.autoReset,st=wt.enabled,ht=wt.autoUpdate,vt=wt.needsUpdate,ct=wt.type;je(),We.autoReset=P,wt.enabled=st,wt.autoUpdate=ht,wt.needsUpdate=vt,wt.type=ct}function zt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ot(P){const st=P.target;st.removeEventListener("dispose",Ot),se(st)}function se(P){Jt(P),ge.remove(P)}function Jt(P){const st=ge.get(P).programs;st!==void 0&&(st.forEach(function(ht){te.releaseProgram(ht)}),P.isShaderMaterial&&te.releaseShaderCache(P))}this.renderBufferDirect=function(P,st,ht,vt,ct,Nt){st===null&&(st=Ht);const kt=ct.isMesh&&ct.matrixWorld.determinant()<0,$t=pi(P,st,ht,vt,ct);Zt.setMaterial(vt,kt);let jt=ht.index,_e=1;if(vt.wireframe===!0){if(jt=Ct.getWireframeAttribute(ht),jt===void 0)return;_e=2}const me=ht.drawRange,oe=ht.attributes.position;let Re=me.start*_e,en=(me.start+me.count)*_e;Nt!==null&&(Re=Math.max(Re,Nt.start*_e),en=Math.min(en,(Nt.start+Nt.count)*_e)),jt!==null?(Re=Math.max(Re,0),en=Math.min(en,jt.count)):oe!=null&&(Re=Math.max(Re,0),en=Math.min(en,oe.count));const rn=en-Re;if(rn<0||rn===1/0)return;le.setup(ct,vt,$t,ht,jt);let hn,Ge=ae;if(jt!==null&&(hn=Lt.get(jt),Ge=Xt,Ge.setIndex(hn)),ct.isMesh)vt.wireframe===!0?(Zt.setLineWidth(vt.wireframeLinewidth*ce()),Ge.setMode(ft.LINES)):Ge.setMode(ft.TRIANGLES);else if(ct.isLine){let Te=vt.linewidth;Te===void 0&&(Te=1),Zt.setLineWidth(Te*ce()),ct.isLineSegments?Ge.setMode(ft.LINES):ct.isLineLoop?Ge.setMode(ft.LINE_LOOP):Ge.setMode(ft.LINE_STRIP)}else ct.isPoints?Ge.setMode(ft.POINTS):ct.isSprite&&Ge.setMode(ft.TRIANGLES);if(ct.isBatchedMesh)Ge.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else if(ct.isInstancedMesh)Ge.renderInstances(Re,rn,ct.count);else if(ht.isInstancedBufferGeometry){const Te=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Hi=Math.min(ht.instanceCount,Te);Ge.renderInstances(Re,rn,Hi)}else Ge.render(Re,rn)};function Be(P,st,ht){P.transparent===!0&&P.side===Pa&&P.forceSinglePass===!1?(P.side=di,P.needsUpdate=!0,un(P,st,ht),P.side=Er,P.needsUpdate=!0,un(P,st,ht),P.side=Pa):un(P,st,ht)}this.compile=function(P,st,ht=null){ht===null&&(ht=P),x=re.get(ht),x.init(),H.push(x),ht.traverseVisible(function(ct){ct.isLight&&ct.layers.test(st.layers)&&(x.pushLight(ct),ct.castShadow&&x.pushShadow(ct))}),P!==ht&&P.traverseVisible(function(ct){ct.isLight&&ct.layers.test(st.layers)&&(x.pushLight(ct),ct.castShadow&&x.pushShadow(ct))}),x.setupLights(O._useLegacyLights);const vt=new Set;return P.traverse(function(ct){const Nt=ct.material;if(Nt)if(Array.isArray(Nt))for(let kt=0;kt<Nt.length;kt++){const $t=Nt[kt];Be($t,ht,ct),vt.add($t)}else Be(Nt,ht,ct),vt.add(Nt)}),H.pop(),x=null,vt},this.compileAsync=function(P,st,ht=null){const vt=this.compile(P,st,ht);return new Promise(ct=>{function Nt(){if(vt.forEach(function(kt){ge.get(kt).currentProgram.isReady()&&vt.delete(kt)}),vt.size===0){ct(P);return}setTimeout(Nt,10)}Wt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Fe=null;function $e(P){Fe&&Fe(P)}function on(){ln.stop()}function Oe(){ln.start()}const ln=new C_;ln.setAnimationLoop($e),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(P){Fe=P,pe.setAnimationLoop(P),P===null?ln.stop():ln.start()},pe.addEventListener("sessionstart",on),pe.addEventListener("sessionend",Oe),this.render=function(P,st){if(st!==void 0&&st.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(st),st=pe.getCamera()),P.isScene===!0&&P.onBeforeRender(O,P,st,X),x=re.get(P,H.length),x.init(),H.push(x),Vt.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),tt.setFromProjectionMatrix(Vt),Tt=this.localClippingEnabled,at=xe.init(this.clippingPlanes,Tt),C=qt.get(P,_.length),C.init(),_.push(C),ti(P,st,0,O.sortObjects),C.finish(),O.sortObjects===!0&&C.sort($,ut),this.info.render.frame++,at===!0&&xe.beginShadows();const ht=x.state.shadowsArray;if(wt.render(ht,P,st),at===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ze.render(C,P),x.setupLights(O._useLegacyLights),st.isArrayCamera){const vt=st.cameras;for(let ct=0,Nt=vt.length;ct<Nt;ct++){const kt=vt[ct];ei(C,P,kt,kt.viewport)}}else ei(C,P,st);X!==null&&(z.updateMultisampleRenderTarget(X),z.updateRenderTargetMipmap(X)),P.isScene===!0&&P.onAfterRender(O,P,st),le.resetDefaultState(),xt=-1,U=null,H.pop(),H.length>0?x=H[H.length-1]:x=null,_.pop(),_.length>0?C=_[_.length-1]:C=null};function ti(P,st,ht,vt){if(P.visible===!1)return;if(P.layers.test(st.layers)){if(P.isGroup)ht=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(st);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||tt.intersectsSprite(P)){vt&&Kt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Vt);const kt=bt.update(P),$t=P.material;$t.visible&&C.push(P,kt,$t,ht,Kt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||tt.intersectsObject(P))){const kt=bt.update(P),$t=P.material;if(vt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Kt.copy(P.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Kt.copy(kt.boundingSphere.center)),Kt.applyMatrix4(P.matrixWorld).applyMatrix4(Vt)),Array.isArray($t)){const jt=kt.groups;for(let _e=0,me=jt.length;_e<me;_e++){const oe=jt[_e],Re=$t[oe.materialIndex];Re&&Re.visible&&C.push(P,kt,Re,ht,Kt.z,oe)}}else $t.visible&&C.push(P,kt,$t,ht,Kt.z,null)}}const Nt=P.children;for(let kt=0,$t=Nt.length;kt<$t;kt++)ti(Nt[kt],st,ht,vt)}function ei(P,st,ht,vt){const ct=P.opaque,Nt=P.transmissive,kt=P.transparent;x.setupLightsView(ht),at===!0&&xe.setGlobalState(O.clippingPlanes,ht),Nt.length>0&&Ti(ct,Nt,st,ht),vt&&Zt.viewport(A.copy(vt)),ct.length>0&&$i(ct,st,ht),Nt.length>0&&$i(Nt,st,ht),kt.length>0&&$i(kt,st,ht),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function Ti(P,st,ht,vt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;const Nt=fe.isWebGL2;Ut===null&&(Ut=new rs(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")?El:Mr,minFilter:Ml,samples:Nt?4:0})),O.getDrawingBufferSize(It),Nt?Ut.setSize(It.x,It.y):Ut.setSize(Sd(It.x),Sd(It.y));const kt=O.getRenderTarget();O.setRenderTarget(Ut),O.getClearColor(_t),j=O.getClearAlpha(),j<1&&O.setClearColor(16777215,.5),O.clear();const $t=O.toneMapping;O.toneMapping=xr,$i(P,ht,vt),z.updateMultisampleRenderTarget(Ut),z.updateRenderTargetMipmap(Ut);let jt=!1;for(let _e=0,me=st.length;_e<me;_e++){const oe=st[_e],Re=oe.object,en=oe.geometry,rn=oe.material,hn=oe.group;if(rn.side===Pa&&Re.layers.test(vt.layers)){const Ge=rn.side;rn.side=di,rn.needsUpdate=!0,tn(Re,ht,vt,en,rn,hn),rn.side=Ge,rn.needsUpdate=!0,jt=!0}}jt===!0&&(z.updateMultisampleRenderTarget(Ut),z.updateRenderTargetMipmap(Ut)),O.setRenderTarget(kt),O.setClearColor(_t,j),O.toneMapping=$t}function $i(P,st,ht){const vt=st.isScene===!0?st.overrideMaterial:null;for(let ct=0,Nt=P.length;ct<Nt;ct++){const kt=P[ct],$t=kt.object,jt=kt.geometry,_e=vt===null?kt.material:vt,me=kt.group;$t.layers.test(ht.layers)&&tn($t,st,ht,jt,_e,me)}}function tn(P,st,ht,vt,ct,Nt){P.onBeforeRender(O,st,ht,vt,ct,Nt),P.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ct.onBeforeRender(O,st,ht,vt,P,Nt),ct.transparent===!0&&ct.side===Pa&&ct.forceSinglePass===!1?(ct.side=di,ct.needsUpdate=!0,O.renderBufferDirect(ht,st,vt,ct,P,Nt),ct.side=Er,ct.needsUpdate=!0,O.renderBufferDirect(ht,st,vt,ct,P,Nt),ct.side=Pa):O.renderBufferDirect(ht,st,vt,ct,P,Nt),P.onAfterRender(O,st,ht,vt,ct,Nt)}function un(P,st,ht){st.isScene!==!0&&(st=Ht);const vt=ge.get(P),ct=x.state.lights,Nt=x.state.shadowsArray,kt=ct.state.version,$t=te.getParameters(P,ct.state,Nt,st,ht),jt=te.getProgramCacheKey($t);let _e=vt.programs;vt.environment=P.isMeshStandardMaterial?st.environment:null,vt.fog=st.fog,vt.envMap=(P.isMeshStandardMaterial?mt:D).get(P.envMap||vt.environment),_e===void 0&&(P.addEventListener("dispose",Ot),_e=new Map,vt.programs=_e);let me=_e.get(jt);if(me!==void 0){if(vt.currentProgram===me&&vt.lightsStateVersion===kt)return An(P,$t),me}else $t.uniforms=te.getUniforms(P),P.onBuild(ht,$t,O),P.onBeforeCompile($t,O),me=te.acquireProgram($t,jt),_e.set(jt,me),vt.uniforms=$t.uniforms;const oe=vt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(oe.clippingPlanes=xe.uniform),An(P,$t),vt.needsLights=Ia(P),vt.lightsStateVersion=kt,vt.needsLights&&(oe.ambientLightColor.value=ct.state.ambient,oe.lightProbe.value=ct.state.probe,oe.directionalLights.value=ct.state.directional,oe.directionalLightShadows.value=ct.state.directionalShadow,oe.spotLights.value=ct.state.spot,oe.spotLightShadows.value=ct.state.spotShadow,oe.rectAreaLights.value=ct.state.rectArea,oe.ltc_1.value=ct.state.rectAreaLTC1,oe.ltc_2.value=ct.state.rectAreaLTC2,oe.pointLights.value=ct.state.point,oe.pointLightShadows.value=ct.state.pointShadow,oe.hemisphereLights.value=ct.state.hemi,oe.directionalShadowMap.value=ct.state.directionalShadowMap,oe.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,oe.spotShadowMap.value=ct.state.spotShadowMap,oe.spotLightMatrix.value=ct.state.spotLightMatrix,oe.spotLightMap.value=ct.state.spotLightMap,oe.pointShadowMap.value=ct.state.pointShadowMap,oe.pointShadowMatrix.value=ct.state.pointShadowMatrix),vt.currentProgram=me,vt.uniformsList=null,me}function fn(P){if(P.uniformsList===null){const st=P.currentProgram.getUniforms();P.uniformsList=oc.seqWithValue(st.seq,P.uniforms)}return P.uniformsList}function An(P,st){const ht=ge.get(P);ht.outputColorSpace=st.outputColorSpace,ht.batching=st.batching,ht.instancing=st.instancing,ht.instancingColor=st.instancingColor,ht.skinning=st.skinning,ht.morphTargets=st.morphTargets,ht.morphNormals=st.morphNormals,ht.morphColors=st.morphColors,ht.morphTargetsCount=st.morphTargetsCount,ht.numClippingPlanes=st.numClippingPlanes,ht.numIntersection=st.numClipIntersection,ht.vertexAlphas=st.vertexAlphas,ht.vertexTangents=st.vertexTangents,ht.toneMapping=st.toneMapping}function pi(P,st,ht,vt,ct){st.isScene!==!0&&(st=Ht),z.resetTextureUnits();const Nt=st.fog,kt=vt.isMeshStandardMaterial?st.environment:null,$t=X===null?O.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Fa,jt=(vt.isMeshStandardMaterial?mt:D).get(vt.envMap||kt),_e=vt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,me=!!ht.attributes.tangent&&(!!vt.normalMap||vt.anisotropy>0),oe=!!ht.morphAttributes.position,Re=!!ht.morphAttributes.normal,en=!!ht.morphAttributes.color;let rn=xr;vt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(rn=O.toneMapping);const hn=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Ge=hn!==void 0?hn.length:0,Te=ge.get(vt),Hi=x.state.lights;if(at===!0&&(Tt===!0||P!==U)){const kn=P===U&&vt.id===xt;xe.setState(vt,P,kn)}let Ve=!1;vt.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Hi.state.version||Te.outputColorSpace!==$t||ct.isBatchedMesh&&Te.batching===!1||!ct.isBatchedMesh&&Te.batching===!0||ct.isInstancedMesh&&Te.instancing===!1||!ct.isInstancedMesh&&Te.instancing===!0||ct.isSkinnedMesh&&Te.skinning===!1||!ct.isSkinnedMesh&&Te.skinning===!0||ct.isInstancedMesh&&Te.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&Te.instancingColor===!1&&ct.instanceColor!==null||Te.envMap!==jt||vt.fog===!0&&Te.fog!==Nt||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==xe.numPlanes||Te.numIntersection!==xe.numIntersection)||Te.vertexAlphas!==_e||Te.vertexTangents!==me||Te.morphTargets!==oe||Te.morphNormals!==Re||Te.morphColors!==en||Te.toneMapping!==rn||fe.isWebGL2===!0&&Te.morphTargetsCount!==Ge)&&(Ve=!0):(Ve=!0,Te.__version=vt.version);let Rn=Te.currentProgram;Ve===!0&&(Rn=un(vt,st,ct));let Vn=!1,Gi=!1,Ha=!1;const cn=Rn.getUniforms(),mi=Te.uniforms;if(Zt.useProgram(Rn.program)&&(Vn=!0,Gi=!0,Ha=!0),vt.id!==xt&&(xt=vt.id,Gi=!0),Vn||U!==P){cn.setValue(ft,"projectionMatrix",P.projectionMatrix),cn.setValue(ft,"viewMatrix",P.matrixWorldInverse);const kn=cn.map.cameraPosition;kn!==void 0&&kn.setValue(ft,Kt.setFromMatrixPosition(P.matrixWorld)),fe.logarithmicDepthBuffer&&cn.setValue(ft,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(vt.isMeshPhongMaterial||vt.isMeshToonMaterial||vt.isMeshLambertMaterial||vt.isMeshBasicMaterial||vt.isMeshStandardMaterial||vt.isShaderMaterial)&&cn.setValue(ft,"isOrthographic",P.isOrthographicCamera===!0),U!==P&&(U=P,Gi=!0,Ha=!0)}if(ct.isSkinnedMesh){cn.setOptional(ft,ct,"bindMatrix"),cn.setOptional(ft,ct,"bindMatrixInverse");const kn=ct.skeleton;kn&&(fe.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),cn.setValue(ft,"boneTexture",kn.boneTexture,z)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ct.isBatchedMesh&&(cn.setOptional(ft,ct,"batchingTexture"),cn.setValue(ft,"batchingTexture",ct._matricesTexture,z));const dn=ht.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0&&fe.isWebGL2===!0)&&Ee.update(ct,ht,Rn),(Gi||Te.receiveShadow!==ct.receiveShadow)&&(Te.receiveShadow=ct.receiveShadow,cn.setValue(ft,"receiveShadow",ct.receiveShadow)),vt.isMeshGouraudMaterial&&vt.envMap!==null&&(mi.envMap.value=jt,mi.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),Gi&&(cn.setValue(ft,"toneMappingExposure",O.toneMappingExposure),Te.needsLights&&ua(mi,Ha),Nt&&vt.fog===!0&&Bt.refreshFogUniforms(mi,Nt),Bt.refreshMaterialUniforms(mi,vt,J,I,Ut),oc.upload(ft,fn(Te),mi,z)),vt.isShaderMaterial&&vt.uniformsNeedUpdate===!0&&(oc.upload(ft,fn(Te),mi,z),vt.uniformsNeedUpdate=!1),vt.isSpriteMaterial&&cn.setValue(ft,"center",ct.center),cn.setValue(ft,"modelViewMatrix",ct.modelViewMatrix),cn.setValue(ft,"normalMatrix",ct.normalMatrix),cn.setValue(ft,"modelMatrix",ct.matrixWorld),vt.isShaderMaterial||vt.isRawShaderMaterial){const kn=vt.uniformsGroups;for(let wn=0,ta=kn.length;wn<ta;wn++)if(fe.isWebGL2){const Ga=kn[wn];ve.update(Ga,Rn),ve.bind(Ga,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function ua(P,st){P.ambientLightColor.needsUpdate=st,P.lightProbe.needsUpdate=st,P.directionalLights.needsUpdate=st,P.directionalLightShadows.needsUpdate=st,P.pointLights.needsUpdate=st,P.pointLightShadows.needsUpdate=st,P.spotLights.needsUpdate=st,P.spotLightShadows.needsUpdate=st,P.rectAreaLights.needsUpdate=st,P.hemisphereLights.needsUpdate=st}function Ia(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(P,st,ht){ge.get(P.texture).__webglTexture=st,ge.get(P.depthTexture).__webglTexture=ht;const vt=ge.get(P);vt.__hasExternalTextures=!0,vt.__hasExternalTextures&&(vt.__autoAllocateDepthBuffer=ht===void 0,vt.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),vt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,st){const ht=ge.get(P);ht.__webglFramebuffer=st,ht.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(P,st=0,ht=0){X=P,Z=st,q=ht;let vt=!0,ct=null,Nt=!1,kt=!1;if(P){const jt=ge.get(P);jt.__useDefaultFramebuffer!==void 0?(Zt.bindFramebuffer(ft.FRAMEBUFFER,null),vt=!1):jt.__webglFramebuffer===void 0?z.setupRenderTarget(P):jt.__hasExternalTextures&&z.rebindTextures(P,ge.get(P.texture).__webglTexture,ge.get(P.depthTexture).__webglTexture);const _e=P.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(kt=!0);const me=ge.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(me[st])?ct=me[st][ht]:ct=me[st],Nt=!0):fe.isWebGL2&&P.samples>0&&z.useMultisampledRTT(P)===!1?ct=ge.get(P).__webglMultisampledFramebuffer:Array.isArray(me)?ct=me[ht]:ct=me,A.copy(P.viewport),k.copy(P.scissor),ot=P.scissorTest}else A.copy(N).multiplyScalar(J).floor(),k.copy(nt).multiplyScalar(J).floor(),ot=gt;if(Zt.bindFramebuffer(ft.FRAMEBUFFER,ct)&&fe.drawBuffers&&vt&&Zt.drawBuffers(P,ct),Zt.viewport(A),Zt.scissor(k),Zt.setScissorTest(ot),Nt){const jt=ge.get(P.texture);ft.framebufferTexture2D(ft.FRAMEBUFFER,ft.COLOR_ATTACHMENT0,ft.TEXTURE_CUBE_MAP_POSITIVE_X+st,jt.__webglTexture,ht)}else if(kt){const jt=ge.get(P.texture),_e=st||0;ft.framebufferTextureLayer(ft.FRAMEBUFFER,ft.COLOR_ATTACHMENT0,jt.__webglTexture,ht||0,_e)}xt=-1},this.readRenderTargetPixels=function(P,st,ht,vt,ct,Nt,kt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=ge.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&kt!==void 0&&($t=$t[kt]),$t){Zt.bindFramebuffer(ft.FRAMEBUFFER,$t);try{const jt=P.texture,_e=jt.format,me=jt.type;if(_e!==Ji&&Yt.convert(_e)!==ft.getParameter(ft.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const oe=me===El&&(Wt.has("EXT_color_buffer_half_float")||fe.isWebGL2&&Wt.has("EXT_color_buffer_float"));if(me!==Mr&&Yt.convert(me)!==ft.getParameter(ft.IMPLEMENTATION_COLOR_READ_TYPE)&&!(me===yr&&(fe.isWebGL2||Wt.has("OES_texture_float")||Wt.has("WEBGL_color_buffer_float")))&&!oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=P.width-vt&&ht>=0&&ht<=P.height-ct&&ft.readPixels(st,ht,vt,ct,Yt.convert(_e),Yt.convert(me),Nt)}finally{const jt=X!==null?ge.get(X).__webglFramebuffer:null;Zt.bindFramebuffer(ft.FRAMEBUFFER,jt)}}},this.copyFramebufferToTexture=function(P,st,ht=0){const vt=Math.pow(2,-ht),ct=Math.floor(st.image.width*vt),Nt=Math.floor(st.image.height*vt);z.setTexture2D(st,0),ft.copyTexSubImage2D(ft.TEXTURE_2D,ht,0,0,P.x,P.y,ct,Nt),Zt.unbindTexture()},this.copyTextureToTexture=function(P,st,ht,vt=0){const ct=st.image.width,Nt=st.image.height,kt=Yt.convert(ht.format),$t=Yt.convert(ht.type);z.setTexture2D(ht,0),ft.pixelStorei(ft.UNPACK_FLIP_Y_WEBGL,ht.flipY),ft.pixelStorei(ft.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),ft.pixelStorei(ft.UNPACK_ALIGNMENT,ht.unpackAlignment),st.isDataTexture?ft.texSubImage2D(ft.TEXTURE_2D,vt,P.x,P.y,ct,Nt,kt,$t,st.image.data):st.isCompressedTexture?ft.compressedTexSubImage2D(ft.TEXTURE_2D,vt,P.x,P.y,st.mipmaps[0].width,st.mipmaps[0].height,kt,st.mipmaps[0].data):ft.texSubImage2D(ft.TEXTURE_2D,vt,P.x,P.y,kt,$t,st.image),vt===0&&ht.generateMipmaps&&ft.generateMipmap(ft.TEXTURE_2D),Zt.unbindTexture()},this.copyTextureToTexture3D=function(P,st,ht,vt,ct=0){if(O.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Nt=P.max.x-P.min.x+1,kt=P.max.y-P.min.y+1,$t=P.max.z-P.min.z+1,jt=Yt.convert(vt.format),_e=Yt.convert(vt.type);let me;if(vt.isData3DTexture)z.setTexture3D(vt,0),me=ft.TEXTURE_3D;else if(vt.isDataArrayTexture||vt.isCompressedArrayTexture)z.setTexture2DArray(vt,0),me=ft.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ft.pixelStorei(ft.UNPACK_FLIP_Y_WEBGL,vt.flipY),ft.pixelStorei(ft.UNPACK_PREMULTIPLY_ALPHA_WEBGL,vt.premultiplyAlpha),ft.pixelStorei(ft.UNPACK_ALIGNMENT,vt.unpackAlignment);const oe=ft.getParameter(ft.UNPACK_ROW_LENGTH),Re=ft.getParameter(ft.UNPACK_IMAGE_HEIGHT),en=ft.getParameter(ft.UNPACK_SKIP_PIXELS),rn=ft.getParameter(ft.UNPACK_SKIP_ROWS),hn=ft.getParameter(ft.UNPACK_SKIP_IMAGES),Ge=ht.isCompressedTexture?ht.mipmaps[ct]:ht.image;ft.pixelStorei(ft.UNPACK_ROW_LENGTH,Ge.width),ft.pixelStorei(ft.UNPACK_IMAGE_HEIGHT,Ge.height),ft.pixelStorei(ft.UNPACK_SKIP_PIXELS,P.min.x),ft.pixelStorei(ft.UNPACK_SKIP_ROWS,P.min.y),ft.pixelStorei(ft.UNPACK_SKIP_IMAGES,P.min.z),ht.isDataTexture||ht.isData3DTexture?ft.texSubImage3D(me,ct,st.x,st.y,st.z,Nt,kt,$t,jt,_e,Ge.data):ht.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ft.compressedTexSubImage3D(me,ct,st.x,st.y,st.z,Nt,kt,$t,jt,Ge.data)):ft.texSubImage3D(me,ct,st.x,st.y,st.z,Nt,kt,$t,jt,_e,Ge),ft.pixelStorei(ft.UNPACK_ROW_LENGTH,oe),ft.pixelStorei(ft.UNPACK_IMAGE_HEIGHT,Re),ft.pixelStorei(ft.UNPACK_SKIP_PIXELS,en),ft.pixelStorei(ft.UNPACK_SKIP_ROWS,rn),ft.pixelStorei(ft.UNPACK_SKIP_IMAGES,hn),ct===0&&vt.generateMipmaps&&ft.generateMipmap(me),Zt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?z.setTextureCube(P,0):P.isData3DTexture?z.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?z.setTexture2DArray(P,0):z.setTexture2D(P,0),Zt.unbindTexture()},this.resetState=function(){Z=0,q=0,X=null,Zt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return za}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Td?"display-p3":"srgb",i.unpackColorSpace=Qe.workingColorSpace===_c?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Yn?is:g_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===is?Yn:Fa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Rb extends B_{}Rb.prototype.isWebGL1Renderer=!0;class wb extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class F_ extends $n{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const fd=new Nn,i_=new yt,a_=new yt;class Cb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ad,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;i_.setFromMatrixPosition(e.matrixWorld),i.position.copy(i_),a_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(a_),i.updateMatrixWorld(),fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ub extends Cb{constructor(){super(new U_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lb extends F_{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.target=new $n,this.shadow=new Ub}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Db extends F_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);function Nb({gestureData:o}){const e=Dn.useRef(null),[i,r]=Dn.useState(null),[l,f]=Dn.useState(null),[p,d]=Dn.useState(null),[g,v]=Dn.useState(null);return Dn.useEffect(()=>{if(!e.current)return;const S=new wb;S.background=new Xe(1710618);const E=new Fi(75,e.current.clientWidth/e.current.clientHeight,.1,1e3);E.position.z=5;const M=new B_({antialias:!0});M.setSize(e.current.clientWidth,e.current.clientHeight),e.current.innerHTML="",e.current.appendChild(M.domElement);const b=new yo(2,2,2),R=[new vr({color:16711680}),new vr({color:65280}),new vr({color:255}),new vr({color:16776960}),new vr({color:16711935}),new vr({color:65535})],C=new Ba(b,R);S.add(C);const x=new Db(16777215,.5);S.add(x);const _=new Lb(16777215,.8);_.position.set(1,1,1),S.add(_),r(S),f(E),d(M),v(C);const H=()=>{if(!e.current)return;const O=e.current.clientWidth,B=e.current.clientHeight;E.aspect=O/B,E.updateProjectionMatrix(),M.setSize(O,B)};return window.addEventListener("resize",H),M.render(S,E),()=>{var O;window.removeEventListener("resize",H),(O=e.current)==null||O.removeChild(M.domElement),b.dispose(),R.forEach(B=>B.dispose())}},[]),Dn.useEffect(()=>{if(!g||!i||!l||!p)return;let S;const E=new _o;let M=g.scale.x,b=!o;const R=.005,C=()=>{if(S=requestAnimationFrame(C),o){if(o.isPinching)M=Math.max(.5,Math.min(2.5,o.pinchScale*M));else{const O=o.rotation.x/30,B=o.rotation.y/30,Z=0;E.setFromEuler(new mo(O,B,Z)),g.quaternion.multiplyQuaternions(E,g.quaternion)}b=!1}else b?(E.setFromEuler(new mo(R,R,0)),g.quaternion.multiplyQuaternions(E,g.quaternion)):b=!0;const x=g.scale.x,_=o!=null&&o.isPinching?.2:.05,H=x+(M-x)*_;g.scale.set(H,H,H),p.render(i,l)};return C(),()=>{cancelAnimationFrame(S)}},[o,g,i,l,p]),Ln.jsx("div",{ref:e,style:{width:"100%",height:"100%"}})}var lc={exports:{}},Ob=lc.exports,r_;function Pb(){return r_||(r_=1,function(o,e){(function(r,l){o.exports=l(gc())})(Ob,function(i){return function(r){var l={};function f(p){if(l[p])return l[p].exports;var d=l[p]={i:p,l:!1,exports:{}};return r[p].call(d.exports,d,d.exports,f),d.l=!0,d.exports}return f.m=r,f.c=l,f.d=function(p,d,g){f.o(p,d)||Object.defineProperty(p,d,{enumerable:!0,get:g})},f.r=function(p){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})},f.t=function(p,d){if(d&1&&(p=f(p)),d&8||d&4&&typeof p=="object"&&p&&p.__esModule)return p;var g=Object.create(null);if(f.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:p}),d&2&&typeof p!="string")for(var v in p)f.d(g,v,(function(S){return p[S]}).bind(null,v));return g},f.n=function(p){var d=p&&p.__esModule?function(){return p.default}:function(){return p};return f.d(d,"a",d),d},f.o=function(p,d){return Object.prototype.hasOwnProperty.call(p,d)},f.p="",f(f.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(r,l,f){f.r(l);var p=f("react"),d=function(){var M=function(b,R){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(C,x){C.__proto__=x}||function(C,x){for(var _ in x)x.hasOwnProperty(_)&&(C[_]=x[_])},M(b,R)};return function(b,R){M(b,R);function C(){this.constructor=b}b.prototype=R===null?Object.create(R):(C.prototype=R.prototype,new C)}}(),g=function(){return g=Object.assign||function(M){for(var b,R=1,C=arguments.length;R<C;R++){b=arguments[R];for(var x in b)Object.prototype.hasOwnProperty.call(b,x)&&(M[x]=b[x])}return M},g.apply(this,arguments)},v=function(M,b){var R={};for(var C in M)Object.prototype.hasOwnProperty.call(M,C)&&b.indexOf(C)<0&&(R[C]=M[C]);if(M!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,C=Object.getOwnPropertySymbols(M);x<C.length;x++)b.indexOf(C[x])<0&&Object.prototype.propertyIsEnumerable.call(M,C[x])&&(R[C[x]]=M[C[x]]);return R};(function(){typeof window>"u"||(navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(b){var R=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return R?new Promise(function(C,x){R.call(navigator,b,C,x)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))})();function S(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}var E=function(M){d(b,M);function b(R){var C=M.call(this,R)||this;return C.canvas=null,C.ctx=null,C.requestUserMediaId=0,C.unmounted=!1,C.state={hasUserMedia:!1},C}return b.prototype.componentDidMount=function(){var R=this,C=R.state,x=R.props;if(this.unmounted=!1,!S()){x.onUserMediaError("getUserMedia not supported");return}C.hasUserMedia||this.requestUserMedia(),x.children&&typeof x.children!="function"&&console.warn("children must be a function")},b.prototype.componentDidUpdate=function(R){var C=this.props;if(!S()){C.onUserMediaError("getUserMedia not supported");return}var x=JSON.stringify(R.audioConstraints)!==JSON.stringify(C.audioConstraints),_=JSON.stringify(R.videoConstraints)!==JSON.stringify(C.videoConstraints),H=R.minScreenshotWidth!==C.minScreenshotWidth,O=R.minScreenshotHeight!==C.minScreenshotHeight;(_||H||O)&&(this.canvas=null,this.ctx=null),(x||_)&&(this.stopAndCleanup(),this.requestUserMedia())},b.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},b.stopMediaStream=function(R){R&&(R.getVideoTracks&&R.getAudioTracks?(R.getVideoTracks().map(function(C){R.removeTrack(C),C.stop()}),R.getAudioTracks().map(function(C){R.removeTrack(C),C.stop()})):R.stop())},b.prototype.stopAndCleanup=function(){var R=this.state;R.hasUserMedia&&(b.stopMediaStream(this.stream),R.src&&window.URL.revokeObjectURL(R.src))},b.prototype.getScreenshot=function(R){var C=this,x=C.state,_=C.props;if(!x.hasUserMedia)return null;var H=this.getCanvas(R);return H&&H.toDataURL(_.screenshotFormat,_.screenshotQuality)},b.prototype.getCanvas=function(R){var C=this,x=C.state,_=C.props;if(!this.video||!x.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var H=this.video.videoWidth,O=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var B=H/O;H=_.minScreenshotWidth||this.video.clientWidth,O=H/B,_.minScreenshotHeight&&O<_.minScreenshotHeight&&(O=_.minScreenshotHeight,H=O*B)}this.canvas=document.createElement("canvas"),this.canvas.width=(R==null?void 0:R.width)||H,this.canvas.height=(R==null?void 0:R.height)||O,this.ctx=this.canvas.getContext("2d")}var Z=this,q=Z.ctx,X=Z.canvas;return q&&X&&(X.width=(R==null?void 0:R.width)||X.width,X.height=(R==null?void 0:R.height)||X.height,_.mirrored&&(q.translate(X.width,0),q.scale(-1,1)),q.imageSmoothingEnabled=_.imageSmoothing,q.drawImage(this.video,0,0,(R==null?void 0:R.width)||X.width,(R==null?void 0:R.height)||X.height),_.mirrored&&(q.scale(-1,1),q.translate(-X.width,0))),X},b.prototype.requestUserMedia=function(){var R=this,C=this.props,x=function(O,B){var Z={video:typeof B<"u"?B:!0};C.audio&&(Z.audio=typeof O<"u"?O:!0),R.requestUserMediaId++;var q=R.requestUserMediaId;navigator.mediaDevices.getUserMedia(Z).then(function(X){R.unmounted||q!==R.requestUserMediaId?b.stopMediaStream(X):R.handleUserMedia(null,X)}).catch(function(X){R.handleUserMedia(X)})};if("mediaDevices"in navigator)x(C.audioConstraints,C.videoConstraints);else{var _=function(O){return{optional:[{sourceId:O}]}},H=function(O){var B=O.deviceId;return typeof B=="string"?B:Array.isArray(B)&&B.length>0?B[0]:typeof B=="object"&&B.ideal?B.ideal:null};MediaStreamTrack.getSources(function(O){var B=null,Z=null;O.forEach(function(xt){xt.kind==="audio"?B=xt.id:xt.kind==="video"&&(Z=xt.id)});var q=H(C.audioConstraints);q&&(B=q);var X=H(C.videoConstraints);X&&(Z=X),x(_(B),_(Z))})}},b.prototype.handleUserMedia=function(R,C){var x=this.props;if(R||!C){this.setState({hasUserMedia:!1}),x.onUserMediaError(R);return}this.stream=C;try{this.video&&(this.video.srcObject=C),this.setState({hasUserMedia:!0})}catch{this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(C)})}x.onUserMedia(C)},b.prototype.render=function(){var R=this,C=this,x=C.state,_=C.props,H=_.audio;_.forceScreenshotSourceSize;var O=_.disablePictureInPicture;_.onUserMedia,_.onUserMediaError,_.screenshotFormat,_.screenshotQuality,_.minScreenshotWidth,_.minScreenshotHeight,_.audioConstraints,_.videoConstraints,_.imageSmoothing;var B=_.mirrored,Z=_.style,q=Z===void 0?{}:Z,X=_.children,xt=v(_,["audio","forceScreenshotSourceSize","disablePictureInPicture","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),U=B?g(g({},q),{transform:(q.transform||"")+" scaleX(-1)"}):q,A={getScreenshot:this.getScreenshot.bind(this)};return p.createElement(p.Fragment,null,p.createElement("video",g({autoPlay:!0,disablePictureInPicture:O,src:x.src,muted:!H,playsInline:!0,ref:function(k){R.video=k},style:U},xt)),X&&X(A))},b.defaultProps={audio:!1,disablePictureInPicture:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},b}(p.Component);l.default=E},react:function(r,l){r.exports=i}}).default})}(lc)),lc.exports}var zb=Pb();const Bb=ry(zb);function Fb(o,e,i){const r=o[4],l=o[8];if(!e||!i)return{isPinching:!0,pinchScale:1,rotation:{x:0,y:0},currentThumbTip:r,currentIndexFingerTip:l};let f=1;const p=Math.sqrt((e.x-i.x)**2+(e.y-i.y)**2+(e.z-i.z)**2);f=Math.sqrt((r.x-l.x)**2+(r.y-l.y)**2+(r.z-l.z)**2)/p;var g=!1;f>.5&&f<1.5&&(f=0),g=!1;const v={x:0,y:0};let S=(l.x-i.x)*27.6666667,E=(l.y-i.y)*20;return v.y=Math.abs(S)>.2?S:0,v.x=Math.abs(E)>.2?E:0,console.log(v),{isPinching:g,pinchScale:f,rotation:v,currentThumbTip:r,currentIndexFingerTip:l}}function Ib({onGestureStatusChange:o,webcamRef:e,down:i}){const[r,l]=Dn.useState({isPinching:!1,pinchScale:1,rotation:{x:0,y:0}}),[f,p]=Dn.useState(null),[d,g]=Dn.useState(!0),v=Dn.useRef(null),S=Dn.useRef(null),E=Dn.useRef(null),M=Dn.useRef(null);Dn.useEffect(()=>{if(!e.current)return;let R=!0;const C=async()=>{try{const _=new vy.Hands({locateFile:H=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/${H}`});if(_.setOptions({selfieMode:!0,maxNumHands:1,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),_.onResults(H=>{R&&b(H)}),await _.initialize(),R&&(E.current=_,g(!1),e.current&&e.current.video)){const H=new yy.Camera(e.current.video,{onFrame:async()=>{var O;if(!(!E.current||!((O=e.current)!=null&&O.video)))try{await E.current.send({image:e.current.video})}catch(B){console.error("Error sending frame to MediaPipe:",B)}},width:640,height:480});M.current=H,H.start()}}catch(_){console.error("Error initializing MediaPipe:",_),R&&(p("Failed to initialize hand detection. Please refresh the page."),g(!1))}},x=setInterval(()=>{e.current&&e.current.video&&e.current.video.readyState===4&&(clearInterval(x),i&&C())},100);return()=>{R=!1,clearInterval(x),M.current&&M.current.stop(),E.current&&E.current.close()}},[e]);const b=R=>{if(R.multiHandLandmarks&&R.multiHandLandmarks.length>0){const C=R.multiHandLandmarks[0],x=Fb(C,v.current,S.current);l({isPinching:x.isPinching,pinchScale:x.pinchScale,rotation:x.rotation}),v.current=x.currentThumbTip,S.current=x.currentIndexFingerTip,o(x.isPinching?"Pinching - Zoom":"Hand detected - Rotate",!1)}else o("No hands detected",!1),v.current=null,S.current=null};return Ln.jsxs("div",{className:"gesture-container",children:[Ln.jsx("div",{className:"canvas-container",children:Ln.jsx(Nb,{gestureData:r})}),Ln.jsxs("div",{className:"video-container",children:[Ln.jsx(Bb,{ref:e,className:"camera-feed",playsInline:!0,style:{transform:"scaleX(-1)",width:"100%",height:"100%",objectFit:"cover"}}),d&&Ln.jsx("div",{className:"loading-overlay",children:Ln.jsx("p",{children:"Loading hand tracking system..."})}),f&&Ln.jsxs("div",{className:"camera-error",children:["Error: ",f,Ln.jsx("p",{children:"Please ensure camera permissions are granted and try again."})]})]})]})}function Hb(){const[o,e]=Dn.useState("No hands detected"),[i,r]=Dn.useState(!0),l=Dn.useRef(null),f=(p,d)=>{e(p),d&&r(!1)};return Ln.jsxs("div",{className:"app-container",children:[Ln.jsx("h1",{children:"3D Gesture Control"}),Ln.jsxs("p",{className:"instructions",children:["Use hand gestures to control the cube:",Ln.jsx("br",{}),"• Move your hand to rotate the cube",Ln.jsx("br",{}),"• Pinch (thumb and index finger) and move to zoom in/out"]}),Ln.jsxs("div",{className:"status-bar",children:["Status: ",o]}),Ln.jsx(Ib,{onGestureStatusChange:f,webcamRef:l,down:i})]})}my.createRoot(document.getElementById("root")).render(Ln.jsx(Dn.StrictMode,{children:Ln.jsx(Hb,{})}));
