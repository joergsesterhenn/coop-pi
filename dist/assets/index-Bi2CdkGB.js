(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}const t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>x(e)===`[object RegExp]`,g=e=>typeof e==`function`,_=e=>typeof e==`string`,v=e=>typeof e==`symbol`,y=e=>typeof e==`object`&&!!e,b=e=>(y(e)||g(e))&&g(e.then)&&g(e.catch),ee=Object.prototype.toString,x=e=>ee.call(e),S=e=>x(e).slice(8,-1),te=e=>x(e)===`[object Object]`,ne=e=>_(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,re=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ie=e=>{let t=Object.create(null);return n=>{let r=t[n];return r||(t[n]=e(n))}},ae=/-(\w)/g,oe=ie(e=>e.replace(ae,(e,t)=>t?t.toUpperCase():``)),se=/\B([A-Z])/g,ce=ie(e=>e.replace(se,`-$1`).toLowerCase()),le=ie(e=>e.charAt(0).toUpperCase()+e.slice(1)),ue=ie(e=>{let t=e?`on${le(e)}`:``;return t}),de=(e,t)=>!Object.is(e,t),fe=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},pe=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},me=e=>{let t=parseFloat(e);return isNaN(t)?e:t},he=()=>typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function C(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=_(r)?ye(r):C(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(_(e)||y(e))return e}const ge=/;(?![^(]*\))/g,_e=/:([^]+)/,ve=/\/\*[^]*?\*\//g;function ye(e){let t={};return e.replace(ve,``).split(ge).forEach(e=>{if(e){let n=e.split(_e);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function be(e){let t=``;if(_(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=be(e[n]);r&&(t+=r+` `)}else if(y(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}const xe=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Se=e(xe);xe+``;function Ce(e){return!!e||e===``}function we(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Te(e[r],t[r]);return n}function Te(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=v(e),r=v(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?we(e,t):!1;if(n=y(e),r=y(t),n||r){if(!n||!r)return!1;let i=Object.keys(e).length,a=Object.keys(t).length;if(i!==a)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Te(e[n],t[n]))return!1}}return String(e)===String(t)}const Ee=e=>!!(e&&e.__v_isRef===!0),De=e=>_(e)?e:e==null?``:d(e)||y(e)&&(e.toString===ee||!g(e.toString))?Ee(e)?De(e.value):JSON.stringify(e,Oe,2):String(e),Oe=(e,t)=>Ee(t)?Oe(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[ke(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ke(e))}:v(t)?ke(t):y(t)&&!d(t)&&!te(t)?String(t):t,ke=(e,t=``)=>{var n;return v(e)?`Symbol(${(n=e.description)??t})`:e};let Ae;var je=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=Ae;try{return Ae=this,e()}finally{Ae=t}}}on(){++this._on===1&&(this.prevScope=Ae,Ae=this)}off(){this._on>0&&--this._on===0&&(Ae=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Me(e){return new je(e)}function Ne(){return Ae}let w;const Pe=new WeakSet;var Fe=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&Ae.active&&Ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pe.has(this)&&(Pe.delete(this),this.trigger()))}notify(){!(this.flags&2&&!(this.flags&32))&&!(this.flags&8)&&Re(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ze(this),Ve(this);let e=w,t=qe;w=this,qe=!0;try{return this.fn()}finally{He(this),w=e,qe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ge(e);this.deps=this.depsTail=void 0,Ze(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pe.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ue(this)&&this.run()}get dirty(){return Ue(this)}};let Ie=0,Le,T;function Re(e,t=!1){if(e.flags|=8,t){e.next=T,T=e;return}e.next=Le,Le=e}function ze(){Ie++}function Be(){if(--Ie>0)return;if(T){let e=T;for(T=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Le;){let t=Le;for(Le=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ve(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function He(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ge(r),Ke(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ue(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(We(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function We(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Qe)||(e.globalVersion=Qe,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ue(e))))return;e.flags|=2;let t=e.dep,n=w,r=qe;w=e,qe=!0;try{Ve(e);let n=e.fn(e._value);(t.version===0||de(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{w=n,qe=r,He(e),e.flags&=-3}}function Ge(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ge(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ke(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let qe=!0;const Je=[];function Ye(){Je.push(qe),qe=!1}function Xe(){let e=Je.pop();qe=e===void 0?!0:e}function Ze(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=w;w=void 0;try{t()}finally{w=e}}}let Qe=0;var $e=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},et=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!w||!qe||w===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==w)t=this.activeLink=new $e(w,this),w.deps?(t.prevDep=w.depsTail,w.depsTail.nextDep=t,w.depsTail=t):w.deps=w.depsTail=t,tt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=w.depsTail,t.nextDep=void 0,w.depsTail.nextDep=t,w.depsTail=t,w.deps===t&&(w.deps=e)}return t}trigger(e){this.version++,Qe++,this.notify(e)}notify(e){ze();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Be()}}};function tt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)tt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const nt=new WeakMap,rt=Symbol(``),it=Symbol(``),at=Symbol(``);function ot(e,t,n){if(qe&&w){let t=nt.get(e);t||nt.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new et),r.map=t,r.key=n),r.track()}}function E(e,t,n,r,i,a){let o=nt.get(e);if(!o){Qe++;return}let s=e=>{e&&e.trigger()};if(ze(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&ne(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===at||!v(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(at)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(rt)),f(e)&&s(o.get(it)));break;case`delete`:i||(s(o.get(rt)),f(e)&&s(o.get(it)));break;case`set`:f(e)&&s(o.get(rt));break}}Be()}function st(e){let t=D(e);return t===e?t:(ot(t,`iterate`,at),Kt(e)?t:t.map(Yt))}function ct(e){return ot(e=D(e),`iterate`,at),e}const lt={__proto__:null,[Symbol.iterator](){return ut(this,Symbol.iterator,Yt)},concat(...e){return st(this).concat(...e.map(e=>d(e)?st(e):e))},entries(){return ut(this,`entries`,e=>(e[1]=Yt(e[1]),e))},every(e,t){return ft(this,`every`,e,t,void 0,arguments)},filter(e,t){return ft(this,`filter`,e,t,e=>e.map(Yt),arguments)},find(e,t){return ft(this,`find`,e,t,Yt,arguments)},findIndex(e,t){return ft(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return ft(this,`findLast`,e,t,Yt,arguments)},findLastIndex(e,t){return ft(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return ft(this,`forEach`,e,t,void 0,arguments)},includes(...e){return mt(this,`includes`,e)},indexOf(...e){return mt(this,`indexOf`,e)},join(e){return st(this).join(e)},lastIndexOf(...e){return mt(this,`lastIndexOf`,e)},map(e,t){return ft(this,`map`,e,t,void 0,arguments)},pop(){return ht(this,`pop`)},push(...e){return ht(this,`push`,e)},reduce(e,...t){return pt(this,`reduce`,e,t)},reduceRight(e,...t){return pt(this,`reduceRight`,e,t)},shift(){return ht(this,`shift`)},some(e,t){return ft(this,`some`,e,t,void 0,arguments)},splice(...e){return ht(this,`splice`,e)},toReversed(){return st(this).toReversed()},toSorted(e){return st(this).toSorted(e)},toSpliced(...e){return st(this).toSpliced(...e)},unshift(...e){return ht(this,`unshift`,e)},values(){return ut(this,`values`,Yt)}};function ut(e,t,n){let r=ct(e),i=r[t]();return r!==e&&!Kt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.value&&=n(e.value),e}),i}const dt=Array.prototype;function ft(e,t,n,r,i,a){let o=ct(e),s=o!==e&&!Kt(e),c=o[t];if(c!==dt[t]){let t=c.apply(e,a);return s?Yt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Yt(t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function pt(e,t,n,r){let i=ct(e),a=n;return i!==e&&(Kt(e)?n.length>3&&(a=function(t,r,i){return n.call(this,t,r,i,e)}):a=function(t,r,i){return n.call(this,t,Yt(r),i,e)}),i[t](a,...r)}function mt(e,t,n){let r=D(e);ot(r,`iterate`,at);let i=r[t](...n);return(i===-1||i===!1)&&qt(n[0])?(n[0]=D(n[0]),r[t](...n)):i}function ht(e,t,n=[]){Ye(),ze();let r=D(e)[t].apply(e,n);return Be(),Xe(),r}const gt=e(`__proto__,__v_isRef,__isVue`),_t=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(v));function vt(e){v(e)||(e=String(e));let t=D(this);return ot(t,`has`,e),t.hasOwnProperty(e)}var yt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Lt:It:i?Ft:Pt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=lt[t]))return e;if(t===`hasOwnProperty`)return vt}let o=Reflect.get(e,t,k(e)?e:n);return(v(t)?_t.has(t):gt(t))?o:(r||ot(e,`get`,t),i?o:k(o)?a&&ne(t)?o:o.value:y(o)?r?Ht(o):Bt(o):o)}},bt=class extends yt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t];if(!this._isShallow){let t=Gt(i);if(!Kt(n)&&!Gt(n)&&(i=D(i),n=D(n)),!d(e)&&k(i)&&!k(n))return t?!1:(i.value=n,!0)}let a=d(e)&&ne(t)?Number(t)<e.length:u(e,t),o=Reflect.set(e,t,n,k(e)?e:r);return e===D(r)&&(a?de(n,i)&&E(e,`set`,t,n,i):E(e,`add`,t,n)),o}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&E(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!v(t)||!_t.has(t))&&ot(e,`has`,t),n}ownKeys(e){return ot(e,`iterate`,d(e)?`length`:rt),Reflect.ownKeys(e)}},xt=class extends yt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}};const St=new bt,Ct=new xt,wt=new bt(!0),Tt=e=>e,Et=e=>Reflect.getPrototypeOf(e);function Dt(e,t,n){return function(...r){let i=this.__v_raw,a=D(i),o=f(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?Tt:t?O:Yt;return!t&&ot(a,`iterate`,c?it:rt),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Ot(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function kt(e,t){let n={get(n){let r=this.__v_raw,i=D(r),a=D(n);e||(de(n,a)&&ot(i,`get`,n),ot(i,`get`,a));let{has:o}=Et(i),s=t?Tt:e?O:Yt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&ot(D(t),`iterate`,rt),Reflect.get(t,`size`,t)},has(t){let n=this.__v_raw,r=D(n),i=D(t);return e||(de(t,i)&&ot(r,`has`,t),ot(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=D(a),s=t?Tt:e?O:Yt;return!e&&ot(o,`iterate`,rt),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};s(n,e?{add:Ot(`add`),set:Ot(`set`),delete:Ot(`delete`),clear:Ot(`clear`)}:{add(e){!t&&!Kt(e)&&!Gt(e)&&(e=D(e));let n=D(this),r=Et(n),i=r.has.call(n,e);return i||(n.add(e),E(n,`add`,e,e)),this},set(e,n){!t&&!Kt(n)&&!Gt(n)&&(n=D(n));let r=D(this),{has:i,get:a}=Et(r),o=i.call(r,e);o||(e=D(e),o=i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?de(n,s)&&E(r,`set`,e,n,s):E(r,`add`,e,n),this},delete(e){let t=D(this),{has:n,get:r}=Et(t),i=n.call(t,e);i||(e=D(e),i=n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&E(t,`delete`,e,void 0,a),o},clear(){let e=D(this),t=e.size!==0,n=e.clear();return t&&E(e,`clear`,void 0,void 0,void 0),n}});let r=[`keys`,`values`,`entries`,Symbol.iterator];return r.forEach(r=>{n[r]=Dt(r,e,t)}),n}function At(e,t){let n=kt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}const jt={get:At(!1,!1)},Mt={get:At(!1,!0)},Nt={get:At(!0,!1)},Pt=new WeakMap,Ft=new WeakMap,It=new WeakMap,Lt=new WeakMap;function Rt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function zt(e){return e.__v_skip||!Object.isExtensible(e)?0:Rt(S(e))}function Bt(e){return Gt(e)?e:Ut(e,!1,St,jt,Pt)}function Vt(e){return Ut(e,!1,wt,Mt,Ft)}function Ht(e){return Ut(e,!0,Ct,Nt,It)}function Ut(e,t,n,r,i){if(!y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=zt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Wt(e){return Gt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Gt(e){return!!(e&&e.__v_isReadonly)}function Kt(e){return!!(e&&e.__v_isShallow)}function qt(e){return e?!!e.__v_raw:!1}function D(e){let t=e&&e.__v_raw;return t?D(t):e}function Jt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&pe(e,`__v_skip`,!0),e}const Yt=e=>y(e)?Bt(e):e,O=e=>y(e)?Ht(e):e;function k(e){return e?e.__v_isRef===!0:!1}function Xt(e){return Zt(e,!1)}function Zt(e,t){return k(e)?e:new Qt(e,t)}var Qt=class{constructor(e,t){this.dep=new et,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:D(e),this._value=t?e:Yt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Kt(e)||Gt(e);e=n?e:D(e),de(e,t)&&(this._rawValue=e,this._value=n?e:Yt(e),this.dep.trigger())}};function $t(e){return k(e)?e.value:e}const en={get:(e,t,n)=>t===`__v_raw`?e:$t(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return k(i)&&!k(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function tn(e){return Wt(e)?e:new Proxy(e,en)}var nn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new et(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qe-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&w!==this)return Re(this,!0),!0}get value(){let e=this.dep.track();return We(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function rn(e,t,n=!1){let r,i;g(e)?r=e:(r=e.get,i=e.set);let a=new nn(r,i,n);return a}const an={},on=new WeakMap;let sn;function cn(e,t=!1,n=sn){if(n){let t=on.get(n);t||on.set(n,t=[]),t.push(e)}}function ln(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Kt(e)||o===!1||o===0?un(e,1):un(e),m,h,_,v,y=!1,b=!1;if(k(e)?(h=()=>e.value,y=Kt(e)):Wt(e)?(h=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Wt(e)||Kt(e)),h=()=>e.map(e=>{if(k(e))return e.value;if(Wt(e))return p(e);if(g(e))return f?f(e,2):e()})):h=g(e)?n?f?()=>f(e,2):e:()=>{if(_){Ye();try{_()}finally{Xe()}}let t=sn;sn=m;try{return f?f(e,3,[v]):e(v)}finally{sn=t}}:r,n&&o){let e=h,t=o===!0?1/0:o;h=()=>un(e(),t)}let ee=Ne(),x=()=>{m.stop(),ee&&ee.active&&c(ee.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),x()}}let S=b?Array(e.length).fill(an):an,te=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>de(e,S[t])):de(e,S))){_&&_();let t=sn;sn=m;try{let t=[e,S===an?void 0:b&&S[0]===an?[]:S,v];S=e,f?f(n,3,t):n(...t)}finally{sn=t}}}else m.run()};return u&&u(te),m=new Fe(h),m.scheduler=l?()=>l(te,!1):te,v=e=>cn(e,!1,m),_=m.onStop=()=>{let e=on.get(m);if(e){if(f)f(e,4);else for(let t of e)t();on.delete(m)}},n?a?te(!0):S=m.run():l?l(te.bind(null,!0),!0):m.run(),x.pause=m.pause.bind(m),x.resume=m.resume.bind(m),x.stop=x,x}function un(e,t=1/0,n){if(t<=0||!y(e)||e.__v_skip||(n||=new Set,n.has(e)))return e;if(n.add(e),t--,k(e))un(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)un(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{un(e,t,n)});else if(te(e)){for(let r in e)un(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&un(e[r],t,n)}return e}function dn(e,t,n,r){try{return r?e(...r):e()}catch(e){pn(e,t,n)}}function fn(e,t,n,r){if(g(e)){let i=dn(e,t,n,r);return i&&b(i)&&i.catch(e=>{pn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(fn(e[a],t,n,r));return i}}function pn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ye(),dn(o,null,10,[e,i,a]),Xe();return}}mn(e,r,a,i,s)}function mn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const hn=[];let gn=-1;const _n=[];let vn=null,yn=0;const bn=Promise.resolve();let xn=null;function Sn(e){let t=xn||bn;return e?t.then(this?e.bind(this):e):t}function Cn(e){let t=gn+1,n=hn.length;for(;t<n;){let r=t+n>>>1,i=hn[r],a=On(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function A(e){if(!(e.flags&1)){let t=On(e),n=hn[hn.length-1];!n||!(e.flags&2)&&t>=On(n)?hn.push(e):hn.splice(Cn(t),0,e),e.flags|=1,wn()}}function wn(){xn||=bn.then(kn)}function Tn(e){d(e)?_n.push(...e):vn&&e.id===-1?vn.splice(yn+1,0,e):e.flags&1||(_n.push(e),e.flags|=1),wn()}function En(e,t,n=gn+1){for(;n<hn.length;n++){let t=hn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;hn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),!(t.flags&4)&&(t.flags&=-2)}}}function Dn(e){if(_n.length){let e=[...new Set(_n)].sort((e,t)=>On(e)-On(t));if(_n.length=0,vn){vn.push(...e);return}for(vn=e,yn=0;yn<vn.length;yn++){let e=vn[yn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}vn=null,yn=0}}const On=e=>e.id==null?e.flags&2?-1:1/0:e.id;function kn(e){try{for(gn=0;gn<hn.length;gn++){let e=hn[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),dn(e,e.i,e.i?15:14),!(e.flags&4)&&(e.flags&=-2))}}finally{for(;gn<hn.length;gn++){let e=hn[gn];e&&(e.flags&=-2)}gn=-1,hn.length=0,Dn(e),xn=null,(hn.length||_n.length)&&kn(e)}}let An,jn=[];function Mn(e,t){var n,r;if(An=e,An)An.enabled=!0,jn.forEach(({event:e,args:t})=>An.emit(e,...t)),jn=[];else if(typeof window<`u`&&window.HTMLElement&&!(r=(n=window.navigator)?.userAgent)?.includes(`jsdom`)){let e=t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[];e.push(e=>{Mn(e,t)}),setTimeout(()=>{An||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,jn=[])},3e3)}else jn=[]}let Nn=null,Pn=null;function Fn(e){let t=Nn;return Nn=e,Pn=e&&e.type.__scopeId||null,t}function In(e,t=Nn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&ta(-1);let i=Fn(t),a;try{a=e(...n)}finally{Fn(i),r._d&&ta(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ln(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ye(),fn(c,n,8,[e.el,s,e,t]),Xe())}}const Rn=Symbol(`_vte`),zn=e=>e.__isTeleport,Bn=e=>e&&(e.disabled||e.disabled===``),Vn=e=>e&&(e.defer||e.defer===``),Hn=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Un=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,Wn=(e,t)=>{let n=e&&e.to;if(_(n)){if(!t)return null;{let e=t(n);return e}}else return n},Gn={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g}}=l,_=Bn(t.props),{shapeFlag:v,children:y,dynamicChildren:b}=t;if(e==null){let e=t.el=h(``),l=t.anchor=h(``);p(e,n,r),p(l,n,r);let d=(e,t)=>{v&16&&(i&&i.isCE&&(i.ce._teleportTarget=e),u(y,e,t,i,a,o,s,c))},f=()=>{let e=t.target=Wn(t.props,m),n=Yn(e,t,h,p);e&&(o!==`svg`&&Hn(e)?o=`svg`:o!==`mathml`&&Un(e)&&(o=`mathml`),_||(d(e,n),Jn(t,!1)))};_&&(d(n,l),Jn(t,!0)),Vn(t.props)?(t.el.__isMounted=!1,vi(()=>{f(),delete t.el.__isMounted},a)):f()}else{if(Vn(t.props)&&e.el.__isMounted===!1){vi(()=>{Gn.process(e,t,n,r,i,a,o,s,c,l)},a);return}t.el=e.el,t.targetStart=e.targetStart;let u=t.anchor=e.anchor,p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Bn(e.props),v=g?n:p,y=g?u:h;if(o===`svg`||Hn(p)?o=`svg`:(o===`mathml`||Un(p))&&(o=`mathml`),b?(f(e.dynamicChildren,b,v,i,a,o,s),wi(e,t,!0)):c||d(e,t,v,y,i,a,o,s,!1),_)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Kn(t,n,u,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=t.target=Wn(t.props,m);e&&Kn(t,e,null,l,0)}else g&&Kn(t,p,h,l,1);Jn(t,_)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e;if(d&&(i(l),i(u)),a&&i(c),o&16){let e=a||!Bn(f);for(let i=0;i<s.length;i++){let a=s[i];r(a,t,n,e,!!a.dynamicChildren)}}},move:Kn,hydrate:qn};function Kn(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),(!d||Bn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function qn(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){let f=t.target=Wn(t.props,c);if(f){let c=Bn(t.props),p=f._lpa||f.firstChild;if(t.shapeFlag&16)if(c)t.anchor=d(o(e),t,s(e),n,r,i,a),t.targetStart=p,t.targetAnchor=p&&o(p);else{t.anchor=o(e);let s=p;for(;s;){if(s&&s.nodeType===8){if(s.data===`teleport start anchor`)t.targetStart=s;else if(s.data===`teleport anchor`){t.targetAnchor=s,f._lpa=t.targetAnchor&&o(t.targetAnchor);break}}s=o(s)}t.targetAnchor||Yn(f,t,u,l),d(p&&o(p),t,f,n,r,i,a)}Jn(t,c)}return t.anchor&&o(t.anchor)}function Jn(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function Yn(e,t,n,r){let i=t.targetStart=n(``),a=t.targetAnchor=n(``);return i[Rn]=a,e&&(r(i,e),r(a,e)),a}const Xn=Symbol(`_leaveCb`),Zn=Symbol(`_enterCb`);Function,Array,String,Boolean,Boolean;const Qn=e=>{let t=e.subTree;return t.component?Qn(t.component):t};function $n(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function er(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,ee=String(e.key),x=$n(n,e),S=(e,t)=>{e&&fn(e,r,9,t)},te=(e,t)=>{let n=t[1];S(e,t),d(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},ne={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted)if(a)r=_||c;else return;t[Xn]&&t[Xn](!0);let i=x[ee];i&&oa(e,i)&&i.el[Xn]&&i.el[Xn](),S(r,[t])},enter(e){let t=l,r=u,i=f;if(!n.isMounted)if(a)t=v||l,r=y||u,i=b||f;else return;let o=!1,s=e[Zn]=t=>{o||(o=!0,S(t?i:r,[e]),ne.delayedLeave&&ne.delayedLeave(),e[Zn]=void 0)};t?te(t,[e,s]):s()},leave(t,r){let i=String(e.key);if(t[Zn]&&t[Zn](!0),n.isUnmounting)return r();S(p,[t]);let a=!1,o=t[Xn]=n=>{a||(a=!0,r(),S(n?g:h,[t]),t[Xn]=void 0,x[i]===e&&delete x[i])};x[i]=e,m?te(m,[t,o]):o()},clone(e){let a=er(e,t,n,r,i);return i&&i(a),a}};return ne}function tr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,tr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function nr(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===Ki?(o.patchFlag&128&&i++,r=r.concat(nr(o.children,t,s))):(t||o.type!==Ji)&&r.push(s==null?o:da(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */
function rr(e,t){return g(e)?(()=>s({name:e.name},t,{setup:e}))():e}function ir(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function ar(e,n,r,i,a=!1){if(d(e)){e.forEach((e,t)=>ar(e,n&&(d(n)?n[t]:n),r,i,a));return}if(or(i)&&!a){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ar(e,n,r,i.component.subTree);return}let o=i.shapeFlag&4?Pa(i.component):i.el,s=a?null:o,{i:l,r:f}=e,p=n&&n.r,m=l.refs===t?l.refs={}:l.refs,h=l.setupState,v=D(h),y=h===t?()=>!1:e=>u(v,e);if(p!=null&&p!==f&&(_(p)?(m[p]=null,y(p)&&(h[p]=null)):k(p)&&(p.value=null)),g(f))dn(f,l,12,[s,m]);else{let t=_(f),n=k(f);if(t||n){let i=()=>{if(e.f){let n=t?y(f)?h[f]:m[f]:f.value;a?d(n)&&c(n,o):d(n)?n.includes(o)||n.push(o):t?(m[f]=[o],y(f)&&(h[f]=m[f])):(f.value=[o],e.k&&(m[e.k]=f.value))}else t?(m[f]=s,y(f)&&(h[f]=s)):n&&(f.value=s,e.k&&(m[e.k]=s))};s?(i.id=-1,vi(i,r)):i()}}}he().requestIdleCallback,he().cancelIdleCallback;const or=e=>!!e.type.__asyncLoader,sr=e=>e.type.__isKeepAlive;String,RegExp,Array,String,RegExp,Array,String,Number;function cr(e,t){return d(e)?e.some(e=>cr(e,t)):_(e)?e.split(`,`).includes(t):h(e)?(e.lastIndex=0,e.test(t)):!1}function lr(e,t){dr(e,`a`,t)}function ur(e,t){dr(e,`da`,t)}function dr(e,t,n=ba){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(pr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)sr(e.parent.vnode)&&fr(r,t,n,e),e=e.parent}}function fr(e,t,n,r){let i=pr(t,e,r,!0);br(()=>{c(r[t],i)},n)}function pr(e,t,n=ba,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ye();let i=wa(n),a=fn(t,n,e,r);return i(),Xe(),a};return r?i.unshift(a):i.push(a),a}}const mr=e=>(t,n=ba)=>{(!Da||e===`sp`)&&pr(e,(...e)=>t(...e),n)},hr=mr(`bm`),gr=mr(`m`),_r=mr(`bu`),vr=mr(`u`),yr=mr(`bum`),br=mr(`um`),xr=mr(`sp`),Sr=mr(`rtg`),Cr=mr(`rtc`);function wr(e,t=ba){pr(`ec`,e,t)}const Tr=Symbol.for(`v-ndc`);function Er(e,t,n={},r,i){if(Nn.ce||Nn.parent&&or(Nn.parent)&&Nn.parent.ce)return t!==`default`&&(n.name=t),Qi(),ia(Ki,null,[M(`slot`,n,r&&r())],64);let a=e[t];a&&a._c&&(a._d=!1),Qi();let o=a&&Dr(a(n)),s=n.key||o&&o.key,c=ia(Ki,{key:(s&&!v(s)?s:`_${t}`)+(!o&&r?`_fb`:``)},o||(r?r():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),a&&a._c&&(a._d=!0),c}function Dr(e){return e.some(e=>aa(e)?!(e.type===Ji||e.type===Ki&&!Dr(e.children)):!0)?e:null}const Or=e=>e?Ea(e)?Pa(e):Or(e.parent):null,kr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Rr(e),$forceUpdate:e=>e.f||=()=>{A(e.update)},$nextTick:e=>e.n||=Sn.bind(e.proxy),$watch:e=>Mi.bind(e)}),Ar=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),jr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e,d;if(n[0]!==`$`){let c=s[n];if(c!==void 0)switch(c){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Ar(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if((d=e.propsOptions[0])&&u(d,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Nr&&(s[n]=0)}let f=kr[n],p,m;if(f)return n===`$attrs`&&ot(e.attrs,`get`,``),f(e);if((p=c.__cssModules)&&(p=p[n]))return p;if(r!==t&&u(r,n))return s[n]=4,r[n];if(m=l.config.globalProperties,u(m,n))return m[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Ar(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,propsOptions:o}},s){let c;return!!r[s]||e!==t&&u(e,s)||Ar(n,s)||(c=o[0])&&u(c,s)||u(i,s)||u(kr,s)||u(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Mr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}let Nr=!0;function Pr(e){let t=Rr(e),n=e.proxy,i=e.ctx;Nr=!1,t.beforeCreate&&Ir(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:h,updated:_,activated:v,deactivated:b,beforeDestroy:ee,beforeUnmount:x,destroyed:S,unmounted:te,render:ne,renderTracked:re,renderTriggered:ie,errorCaptured:ae,serverPrefetch:oe,expose:se,inheritAttrs:ce,components:le,directives:ue,filters:de}=t;if(u&&Fr(u,i,null),s)for(let e in s){let t=s[e];g(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);y(t)&&(e.data=Bt(t))}if(Nr=!0,o)for(let e in o){let t=o[e],a=g(t)?t.bind(n,n):g(t.get)?t.get.bind(n,n):r,s=!g(t)&&g(t.set)?t.set.bind(n):r,c=Ia({get:a,set:s});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(c)for(let e in c)Lr(c[e],i,n,e);if(l){let e=g(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Qr(t,e[t])})}f&&Ir(f,e,`c`);function fe(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(fe(hr,p),fe(gr,m),fe(_r,h),fe(vr,_),fe(lr,v),fe(ur,b),fe(wr,ae),fe(Cr,re),fe(Sr,ie),fe(yr,x),fe(br,te),fe(xr,oe),d(se))if(se.length){let t=e.exposed||={};se.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};ne&&e.render===r&&(e.render=ne),ce!=null&&(e.inheritAttrs=ce),le&&(e.components=le),ue&&(e.directives=ue),oe&&ir(e)}function Fr(e,t,n=r){for(let n in d(e)&&(e=Ur(e)),e){let r=e[n],i;i=y(r)?`default`in r?$r(r.from||n,r.default,!0):$r(r.from||n):$r(r),k(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Ir(e,t,n){fn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Lr(e,t,n,r){let i=r.includes(`.`)?Ni(n,r):()=>n[r];if(_(e)){let n=t[e];g(n)&&Ai(i,n)}else if(g(e))Ai(i,e.bind(n));else if(y(e))if(d(e))e.forEach(e=>Lr(e,t,n,r));else{let r=g(e.handler)?e.handler.bind(n):t[e.handler];g(r)&&Ai(i,r,e)}}function Rr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>zr(c,e,o,!0)),zr(c,t,o)),y(t)&&a.set(t,c),c}function zr(e,t,n,r=!1){let{mixins:i,extends:a}=t;for(let o in a&&zr(e,a,n,!0),i&&i.forEach(t=>zr(e,t,n,!0)),t)if(!(r&&o===`expose`)){let r=Br[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Br={data:Vr,props:Kr,emits:Kr,methods:Gr,computed:Gr,beforeCreate:Wr,created:Wr,beforeMount:Wr,mounted:Wr,beforeUpdate:Wr,updated:Wr,beforeDestroy:Wr,beforeUnmount:Wr,destroyed:Wr,unmounted:Wr,activated:Wr,deactivated:Wr,errorCaptured:Wr,serverPrefetch:Wr,components:Gr,directives:Gr,watch:qr,provide:Vr,inject:Hr};function Vr(e,t){return t?e?function(){return s(g(e)?e.call(this,this):e,g(t)?t.call(this,this):t)}:t:e}function Hr(e,t){return Gr(Ur(e),Ur(t))}function Ur(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Wr(e,t){return e?[...new Set([].concat(e,t))]:t}function Gr(e,t){return e?s(Object.create(null),e,t):t}function Kr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Mr(e),Mr(t??{})):t}function qr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=Wr(e[r],t[r]);return n}function Jr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yr=0;function Xr(e,t){return function(n,r=null){g(n)||(n=s({},n)),r!=null&&!y(r)&&(r=null);let i=Jr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Yr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:La,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&g(e.install)?(a.add(e),e.install(l,...t)):g(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||M(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,Pa(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(fn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Zr;Zr=l;try{return e()}finally{Zr=t}}};return l}}let Zr=null;function Qr(e,t){if(ba){let n=ba.provides,r=ba.parent&&ba.parent.provides;r===n&&(n=ba.provides=Object.create(r)),n[e]=t}}function $r(e,t,n=!1){let r=xa();if(r||Zr){let i=Zr?Zr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&g(t)?t.call(r&&r.proxy):t}}const ei={},ti=()=>Object.create(ei),ni=e=>Object.getPrototypeOf(e)===ei;function ri(e,t,n,r=!1){let i={},a=ti();for(let n in e.propsDefaults=Object.create(null),ai(e,t,i,a),e.propsOptions[0])n in i||(i[n]=void 0);n?e.props=r?i:Vt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ii(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=D(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Li(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=oe(o);i[t]=oi(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ai(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=ce(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=oi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&E(e.attrs,`set`,``)}function ai(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(re(t))continue;let l=n[t],d;a&&u(a,d=oe(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Li(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=D(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=oi(a,n,s,i[s],e,!u(i,s))}}return s}function oi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&g(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=wa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===ce(n))&&(r=!0))}return r}const si=new WeakMap;function ci(e,r,i=!1){let a=i?si:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!g(e)){let t=e=>{p=!0;let[t,n]=ci(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return y(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=oe(c[e]);li(n)&&(l[n]=t)}else if(c)for(let e in c){let t=oe(e);if(li(t)){let n=c[e],r=l[t]=d(n)||g(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=g(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=g(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return y(e)&&a.set(e,m),m}function li(e){return e[0]!==`$`&&!re(e)}const ui=e=>e===`_`||e===`__`||e===`_ctx`||e===`$stable`,di=e=>d(e)?e.map(fa):[fa(e)],fi=(e,t,n)=>{if(t._n)return t;let r=In((...e)=>di(t(...e)),n);return r._c=!1,r},pi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ui(n))continue;let i=e[n];if(g(i))t[n]=fi(n,i,r);else if(i!=null){let e=di(i);t[n]=()=>e}}},mi=(e,t)=>{let n=di(t);e.slots.default=()=>n},hi=(e,t,n)=>{for(let r in t)(n||!ui(r))&&(e[r]=t[r])},gi=(e,t,n)=>{let r=e.slots=ti();if(e.vnode.shapeFlag&32){let e=t.__;e&&pe(r,`__`,e,!0);let i=t._;i?(hi(r,t,n),n&&pe(r,`_`,i,!0)):pi(t,r)}else t&&mi(e,t)},_i=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:hi(a,n,r):(o=!n.$stable,pi(n,a)),s=n}else n&&(mi(e,n),s={default:1});if(o)for(let e in a)!ui(e)&&s[e]==null&&delete a[e]},vi=Gi;function yi(e){return bi(e)}function bi(e,i){let a=he();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:f,setText:p,setElementText:m,parentNode:h,nextSibling:g,setScopeId:_=r,insertStaticContent:v}=e,y=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!oa(e,t)&&(r=Ee(e),xe(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case qi:b(e,t,n,r);break;case Ji:ee(e,t,n,r);break;case Yi:e??x(t,n,r,o);break;case Ki:ue(e,t,n,r,i,a,o,s,c);break;default:d&1?ne(e,t,n,r,i,a,o,s,c):d&6?de(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,ke)}u!=null&&i?ar(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&ar(e.ref,null,a,e,!0)},b=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&p(n,t.children)}},ee=(e,t,n,r)=>{e==null?o(t.el=f(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=g(e),o(e,n,r),e=i;o(t,n,r)},te=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=g(e),s(e),e=n;s(t)},ne=(e,t,n,r,i,a,o,s,c)=>{t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null?ie(t,n,r,i,a,o,s,c):se(e,t,i,a,o,s,c)},ie=(e,t,n,r,i,a,s,u)=>{let d,f,{props:p,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,p&&p.is,p),h&8?m(d,e.children):h&16&&oe(e.children,d,null,r,i,xi(e,a),s,u),_&&Ln(e,null,r,`created`),ae(d,e,e.scopeId,s,r),p){for(let e in p)e!==`value`&&!re(e)&&c(d,e,null,p[e],a,r);`value`in p&&c(d,`value`,null,p.value,a),(f=p.onVnodeBeforeMount)&&ga(f,r,e)}_&&Ln(e,null,r,`beforeMount`);let v=Ci(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=p&&p.onVnodeMounted)||v||_)&&vi(()=>{f&&ga(f,r,e),v&&g.enter(d),_&&Ln(e,null,r,`mounted`)},i)},ae=(e,t,n,r,i)=>{if(n&&_(e,n),r)for(let t=0;t<r.length;t++)_(e,r[t]);if(i){let n=i.subTree;if(t===n||Wi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ae(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},oe=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?pa(e[l]):fa(e[l]);y(null,c,t,n,r,i,a,o,s)}},se=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let p=e.props||t,h=n.props||t,g;if(r&&Si(r,!1),(g=h.onVnodeBeforeUpdate)&&ga(g,r,n,e),f&&Ln(n,e,r,`beforeUpdate`),r&&Si(r,!0),(p.innerHTML&&h.innerHTML==null||p.textContent&&h.textContent==null)&&m(l,``),d?ce(e.dynamicChildren,d,l,r,i,xi(n,a),o):s||_e(e,n,l,null,r,i,xi(n,a),o,!1),u>0){if(u&16)le(l,p,h,r,a);else if(u&2&&p.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,p.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=p[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&m(l,n.children)}else !s&&d==null&&le(l,p,h,r,a);((g=h.onVnodeUpdated)||f)&&vi(()=>{g&&ga(g,r,n,e),f&&Ln(n,e,r,`updated`)},i)},ce=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===Ki||!oa(c,l)||c.shapeFlag&198)?h(c.el):n;y(c,l,u,null,r,i,a,o,!0)}},le=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!re(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(re(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ue=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),oe(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren?(ce(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&wi(e,t,!0)):_e(e,t,n,f,i,a,s,c,l)},de=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):pe(t,n,r,i,a,o,c):me(e,t,c)},pe=(e,t,n,r,i,a,o)=>{let s=e.component=ya(e,r,i);if(sr(e)&&(s.ctx.renderer=ke),Oa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,C,o),!e.el){let r=s.subTree=M(Ji);ee(null,r,t,n),e.placeholder=r.el}}else C(s,e,t,n,i,a,o)},me=(e,t,n)=>{let r=t.component=e.component;if(Vi(e,t,n))if(r.asyncDep&&!r.asyncResolved){ge(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},C=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:c,vnode:l}=e;{let n=Ei(e);if(n){t&&(t.el=l.el,ge(e,t,o)),n.asyncDep.then(()=>{e.isUnmounted||s()});return}}let u=t,d;Si(e,!1),t?(t.el=l.el,ge(e,t,o)):t=l,n&&fe(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ga(d,c,t,l),Si(e,!0);let f=Ri(e),p=e.subTree;e.subTree=f,y(p,f,h(p.el),Ee(p),e,i,a),t.el=f.el,u===null&&Ui(e,f.el),r&&vi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&vi(()=>ga(d,c,t,l),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=or(t);if(Si(e,!1),l&&fe(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ga(o,d,t),Si(e,!0),s&&je){let t=()=>{e.subTree=Ri(e),je(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._def.shadowRoot!==!1&&f.ce._injectChildStyle(p);let o=e.subTree=Ri(e);y(null,o,n,r,e,i,a),t.el=o.el}if(u&&vi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;vi(()=>ga(o,d,e),i)}(t.shapeFlag&256||d&&or(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&vi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Fe(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>A(u),Si(e,!0),l()},ge=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ii(e,t.props,r,n),_i(e,t.children,n),Ye(),En(e),Xe()},_e=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(f&128){ye(l,d,n,r,i,a,o,s,c);return}else if(f&256){ve(l,d,n,r,i,a,o,s,c);return}}p&8?(u&16&&Te(l,i,a),d!==l&&m(n,d)):u&16?p&16?ye(l,d,n,r,i,a,o,s,c):Te(l,i,a,!0):(u&8&&m(n,``),p&16&&oe(d,n,r,i,a,o,s,c))},ve=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?pa(t[p]):fa(t[p]);y(e[p],n,r,null,a,o,s,c,l)}u>d?Te(e,a,o,!0,!1,f):oe(t,r,i,a,o,s,c,l,f)},ye=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?pa(t[u]):fa(t[u]);if(oa(n,i))y(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?pa(t[p]):fa(t[p]);if(oa(n,i))y(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)y(null,t[u]=l?pa(t[u]):fa(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)xe(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?pa(t[u]):fa(t[u]);e.key!=null&&g.set(e.key,u)}let _,v=0,b=p-h+1,ee=!1,x=0,S=Array(b);for(u=0;u<b;u++)S[u]=0;for(u=m;u<=f;u++){let n=e[u];if(v>=b){xe(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(S[_-h]===0&&oa(n,t[_])){i=_;break}i===void 0?xe(n,a,o,!0):(S[i-h]=u+1,i>=x?x=i:ee=!0,y(n,t[i],r,null,a,o,s,c,l),v++)}let te=ee?Ti(S):n;for(_=te.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||f.placeholder:i;S[u]===0?y(null,n,r,p,a,o,s,c,l):ee&&(_<0||u!==te[_]?be(n,r,p,2):_--)}}},be=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){be(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,ke);return}if(c===Ki){o(a,t,n);for(let e=0;e<u.length;e++)be(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Yi){S(e,t,n);return}let f=r!==2&&d&1&&l;if(f)if(r===0)l.beforeEnter(a),o(a,t,n),vi(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},xe=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p}=e;if(d===-2&&(i=!1),s!=null&&(Ye(),ar(s,null,n,e,!0),Xe()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let m=u&1&&f,h=!or(e),g;if(h&&(g=o&&o.onVnodeBeforeUnmount)&&ga(g,t,e),u&6)we(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}m&&Ln(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,ke,r):l&&!l.hasOnce&&(a!==Ki||d>0&&d&64)?Te(l,t,n,!1,!0):(a===Ki&&d&384||!i&&u&16)&&Te(c,t,n),r&&Se(e)}(h&&(g=o&&o.onVnodeUnmounted)||m)&&vi(()=>{g&&ga(g,t,e),m&&Ln(e,null,t,`unmounted`)},n)},Se=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===Ki){Ce(n,r);return}if(t===Yi){te(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},Ce=(e,t)=>{let n;for(;e!==t;)n=g(e),s(e),e=n;s(t)},we=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l,parent:u,slots:{__:f}}=e;Di(c),Di(l),r&&fe(r),u&&d(f)&&f.forEach(e=>{u.renderCache[e]=void 0}),i.stop(),a&&(a.flags|=8,xe(o,e,t,n)),s&&vi(s,t),vi(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,t.deps===0&&t.resolve())},Te=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)xe(e[o],t,n,r,i)},Ee=e=>{if(e.shapeFlag&6)return Ee(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=g(e.anchor||e.el),n=t&&t[Rn];return n?g(n):t},De=!1,Oe=(e,t,n)=>{e==null?t._vnode&&xe(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),t._vnode=e,!De&&(De=!0,En(),Dn(),De=!1)},ke={p:y,um:xe,m:be,r:Se,mt:pe,mc:oe,pc:_e,pbc:ce,n:Ee,o:e},Ae,je;return i&&([Ae,je]=i(ke)),{render:Oe,hydrate:Ae,createApp:Xr(Oe,Ae)}}function xi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Si({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ci(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function wi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=pa(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&wi(t,a)),a.type===qi&&(a.el=t.el),a.type===Ji&&!a.el&&(a.el=t.el)}}function Ti(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Ei(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ei(t)}function Di(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Oi=Symbol.for(`v-scx`),ki=()=>{{let e=$r(Oi);return e}};function Ai(e,t,n){return ji(e,t,n)}function ji(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(Da){if(c===`sync`){let e=ki();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=ba;u.call=(e,t,n)=>fn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{vi(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():A(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=ln(e,n,u);return Da&&(f?f.push(h):d&&h()),h}function Mi(e,t,n){let r=this.proxy,i=_(e)?e.includes(`.`)?Ni(r,e):()=>r[e]:e.bind(r,r),a;g(t)?a=t:(a=t.handler,n=t);let o=wa(this),s=ji(i,a.bind(r),n);return o(),s}function Ni(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const Pi=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${oe(t)}Modifiers`]||e[`${ce(t)}Modifiers`];function Fi(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Pi(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>_(e)?e.trim():e)),s.number&&(a=r.map(me)));let c,l=i[c=ue(n)]||i[c=ue(oe(n))];!l&&o&&(l=i[c=ue(ce(n))]),l&&fn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,fn(u,e,6,a)}}function Ii(e,t,n=!1){let r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!g(e)){let r=e=>{let n=Ii(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(y(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),y(e)&&r.set(e,o),o)}function Li(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,ce(t))||u(e,t))}function Ri(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Fn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=fa(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=fa(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:zi(c)}}catch(t){Xi.length=0,pn(t,e,1),v=M(Ji)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Bi(y,a)),b=da(b,y,!1,!0))}return n.dirs&&(b=da(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&tr(b,n.transition),v=b,Fn(_),v}const zi=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Bi=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Vi(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Hi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(o[n]!==r[n]&&!Li(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Hi(r,o,l):!0:!!o;return!1}function Hi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(t[a]!==e[a]&&!Li(n,a))return!0}return!1}function Ui({vnode:e,parent:t},n){for(;t;){let r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Wi=e=>e.__isSuspense;function Gi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):Tn(e)}const Ki=Symbol.for(`v-fgt`),qi=Symbol.for(`v-txt`),Ji=Symbol.for(`v-cmt`),Yi=Symbol.for(`v-stc`),Xi=[];let Zi=null;function Qi(e=!1){Xi.push(Zi=e?null:[])}function $i(){Xi.pop(),Zi=Xi[Xi.length-1]||null}let ea=1;function ta(e,t=!1){ea+=e,e<0&&Zi&&t&&(Zi.hasOnce=!0)}function na(e){return e.dynamicChildren=ea>0?Zi||n:null,$i(),ea>0&&Zi&&Zi.push(e),e}function ra(e,t,n,r,i,a){return na(j(e,t,n,r,i,a,!0))}function ia(e,t,n,r,i){return na(M(e,t,n,r,i,!0))}function aa(e){return e?e.__v_isVNode===!0:!1}function oa(e,t){return e.type===t.type&&e.key===t.key}const sa=({key:e})=>e??null,ca=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:_(e)||k(e)||g(e)?{i:Nn,r:e,k:t,f:!!n}:e);function j(e,t=null,n=null,r=0,i=null,a=e===Ki?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sa(t),ref:t&&ca(t),scopeId:Pn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Nn};return s?(ma(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=_(n)?8:16),ea>0&&!o&&Zi&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Zi.push(c),c}const M=la;function la(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Tr)&&(e=Ji),aa(e)){let r=da(e,t,!0);return n&&ma(r,n),ea>0&&!a&&Zi&&(r.shapeFlag&6?Zi[Zi.indexOf(e)]=r:Zi.push(r)),r.patchFlag=-2,r}if(Fa(e)&&(e=e.__vccOpts),t){t=ua(t);let{class:e,style:n}=t;e&&!_(e)&&(t.class=be(e)),y(n)&&(qt(n)&&!d(n)&&(n=s({},n)),t.style=C(n))}let o=_(e)?1:Wi(e)?128:zn(e)?64:y(e)?4:g(e)?2:0;return j(e,t,n,r,i,o,a,!0)}function ua(e){return e?qt(e)||ni(e)?s({},e):e:null}function da(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ha(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&sa(l),ref:t&&t.ref?n&&a?d(a)?a.concat(ca(t)):[a,ca(t)]:ca(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ki?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&da(e.ssContent),ssFallback:e.ssFallback&&da(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&tr(u,c.clone(u)),u}function N(e=` `,t=0){return M(qi,null,e,t)}function fa(e){return e==null||typeof e==`boolean`?M(Ji):d(e)?M(Ki,null,e.slice()):aa(e)?pa(e):M(qi,null,String(e))}function pa(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:da(e)}function ma(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ma(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!ni(t)?t._ctx=Nn:r===3&&Nn&&(Nn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else g(t)?(t={default:t,_ctx:Nn},n=32):(t=String(t),r&64?(n=16,t=[N(t)]):n=8);e.children=t,e.shapeFlag|=n}function ha(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=be([t.class,r.class]));else if(e===`style`)t.style=C([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))&&(t[e]=n?[].concat(n,i):i)}else e!==``&&(t[e]=r[e])}return t}function ga(e,t,n,r=null){fn(e,t,7,[n,r])}const _a=Jr();let va=0;function ya(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||_a,o={uid:va++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new je(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ci(i,a),emitsOptions:Ii(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Fi.bind(null,o),e.ce&&e.ce(o),o}let ba=null;const xa=()=>ba||Nn;let Sa,Ca;{let e=he(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Sa=t(`__VUE_INSTANCE_SETTERS__`,e=>ba=e),Ca=t(`__VUE_SSR_SETTERS__`,e=>Da=e)}const wa=e=>{let t=ba;return Sa(e),e.scope.on(),()=>{e.scope.off(),Sa(t)}},Ta=()=>{ba&&ba.scope.off(),Sa(null)};function Ea(e){return e.vnode.shapeFlag&4}let Da=!1;function Oa(e,t=!1,n=!1){t&&Ca(t);let{props:r,children:i}=e.vnode,a=Ea(e);ri(e,r,a,t),gi(e,i,n||t);let o=a?ka(e,t):void 0;return t&&Ca(!1),o}function ka(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,jr);let{setup:r}=n;if(r){Ye();let n=e.setupContext=r.length>1?Na(e):null,i=wa(e),a=dn(r,e,0,[e.props,n]),o=b(a);if(Xe(),i(),(o||e.sp)&&!or(e)&&ir(e),o){if(a.then(Ta,Ta),t)return a.then(n=>{Aa(e,n,t)}).catch(t=>{pn(t,e,0)});e.asyncDep=a}else Aa(e,a,t)}else ja(e,t)}function Aa(e,t,n){g(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:y(t)&&(e.setupState=tn(t)),ja(e,n)}function ja(e,t,n){let i=e.type;e.render||=i.render||r;{let t=wa(e);Ye();try{Pr(e)}finally{Xe(),t()}}}const Ma={get(e,t){return ot(e,`get`,``),e[t]}};function Na(e){let t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Ma),slots:e.slots,emit:e.emit,expose:t}}function Pa(e){return e.exposed?e.exposeProxy||=new Proxy(tn(Jt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in kr)return kr[n](e)},has(e,t){return t in e||t in kr}}):e.proxy}function Fa(e){return g(e)&&`__vccOpts`in e}const Ia=(e,t)=>{let n=rn(e,t,Da);return n},La=`3.5.18`;let Ra;const za=typeof window<`u`&&window.trustedTypes;if(za)try{Ra=za.createPolicy(`vue`,{createHTML:e=>e})}catch{}const Ba=Ra?e=>Ra.createHTML(e):e=>e,Va=typeof document<`u`?document:null,Ha=Va&&Va.createElement(`template`),Ua={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Va.createElementNS(`http://www.w3.org/2000/svg`,e):t===`mathml`?Va.createElementNS(`http://www.w3.org/1998/Math/MathML`,e):n?Va.createElement(e,{is:n}):Va.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Va.createTextNode(e),createComment:e=>Va.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Va.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ha.innerHTML=Ba(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ha.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Wa=Symbol(`_vtc`);String,String,Boolean,String,Number,Object,String,String,String,String,String,String,String,String,String;function Ga(e,t,n){let r=e[Wa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}const Ka=Symbol(`_vod`),qa=Symbol(`_vsh`),Ja=Symbol(``),Ya=/(^|;)\s*display\s*:/;function Xa(e,t,n){let r=e.style,i=_(n),a=!1;if(n&&!i){if(t)if(_(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Qa(r,t,``)}else for(let e in t)n[e]??Qa(r,e,``);for(let e in n)e===`display`&&(a=!0),Qa(r,e,n[e])}else if(i){if(t!==n){let e=r[Ja];e&&(n+=`;`+e),r.cssText=n,a=Ya.test(n)}}else t&&e.removeAttribute(`style`);Ka in e&&(e[Ka]=a?r.display:``,e[qa]&&(r.display=`none`))}const Za=/\s*!important$/;function Qa(e,t,n){if(d(n))n.forEach(n=>Qa(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=to(e,t);Za.test(n)?e.setProperty(ce(r),n.replace(Za,``),`important`):e[r]=n}}const $a=[`Webkit`,`Moz`,`ms`],eo={};function to(e,t){let n=eo[t];if(n)return n;let r=oe(t);if(r!==`filter`&&r in e)return eo[t]=r;r=le(r);for(let n=0;n<$a.length;n++){let i=$a[n]+r;if(i in e)return eo[t]=i}return t}const no=`http://www.w3.org/1999/xlink`;function ro(e,t,n,r,i,a=Se(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(no,t.slice(6,t.length)):e.setAttributeNS(no,t,n):n==null||a&&!Ce(n)?e.removeAttribute(t):e.setAttribute(t,a?``:v(n)?String(n):n)}function io(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ba(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=Ce(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function ao(e,t,n,r){e.addEventListener(t,n,r)}function oo(e,t,n,r){e.removeEventListener(t,n,r)}const so=Symbol(`_vei`);function co(e,t,n,r,i=null){let a=e[so]||(e[so]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=uo(t);if(r){let o=a[t]=ho(r,i);ao(e,n,o,s)}else o&&(oo(e,n,o,s),a[t]=void 0)}}const lo=/(?:Once|Passive|Capture)$/;function uo(e){let t;if(lo.test(e)){t={};let n;for(;n=e.match(lo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}let n=e[2]===`:`?e.slice(3):ce(e.slice(2));return[n,t]}let fo=0;const po=Promise.resolve(),mo=()=>fo||(po.then(()=>fo=0),fo=Date.now());function ho(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;fn(go(e,n.value),t,5,[e])};return n.value=e,n.attached=mo(),n}function go(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}const _o=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,vo=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Ga(e,r,c):t===`style`?Xa(e,n,r):a(t)?o(t)||co(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):yo(e,t,r,c))?(io(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&ro(e,t,r,c,s,t!==`value`)):e._isVueCE&&(/[A-Z]/.test(t)||!_(r))?io(e,oe(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),ro(e,t,r,c))};function yo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&_o(t)&&g(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return _o(t)&&_(n)?!1:t in e}Symbol(`_moveCb`),Symbol(`_enterCb`),String,String,Symbol(`_assign`);const bo=s({patchProp:vo},Ua);function xo(){return yi(bo)}const So=(...e)=>{let t=xo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=wo(e);if(!r)return;let i=t._component;!g(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Co(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t};function Co(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function wo(e){if(_(e)){let t=document.querySelector(e);return t}return e}const To=()=>void 0,Eo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},P=function(e,t){if(!e)throw Do(t)},Do=function(e){return Error(`Firebase Database (`+Eo.SDK_VERSION+`) INTERNAL ASSERT FAILED: `+e)},Oo=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ko=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[n++],o=e[n++],s=e[n++],c=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join(``)},Ao={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,get ENCODED_VALS(){return this.ENCODED_VALS_BASE+`+/=`},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+`-_.`},HAS_NATIVE_SUPPORT:typeof atob==`function`,encodeByteArray(e,t){if(!Array.isArray(e))throw Error(`encodeByteArray takes an array as a parameter`);this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(i&3)<<4|o>>4,d=(o&15)<<2|c>>6,f=c&63;s||(f=64,!a&&(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join(``)},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Oo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ko(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length,o=a?n[e.charAt(t)]:0;++t;let s=t<e.length,c=s?n[e.charAt(t)]:64;++t;let l=t<e.length,u=l?n[e.charAt(t)]:64;if(++t,i==null||o==null||c==null||u==null)throw new jo;let d=i<<2|o>>4;if(r.push(d),c!==64){let e=o<<4&240|c>>2;if(r.push(e),u!==64){let e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};var jo=class extends Error{constructor(){super(...arguments),this.name=`DecodeBase64StringError`}};const Mo=function(e){let t=Oo(e);return Ao.encodeByteArray(t,!0)},No=function(e){return Mo(e).replace(/\./g,``)},Po=function(e){try{return Ao.decodeString(e,!0)}catch(e){console.error(`base64Decode failed: `,e)}return null};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Fo(e){return Io(void 0,e)}function Io(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:let n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(let n in t){if(!t.hasOwnProperty(n)||!Lo(n))continue;e[n]=Io(e[n],t[n])}return e}function Lo(e){return e!==`__proto__`}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ro(){if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw Error(`Unable to locate global object.`)}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const zo=()=>Ro().__FIREBASE_DEFAULTS__,Bo=()=>{if(typeof process>`u`)return;let e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Vo=()=>{if(typeof document>`u`)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&Po(e[1]);return t&&JSON.parse(t)},Ho=()=>{try{return To()||zo()||Bo()||Vo()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Uo=e=>Ho()?.emulatorHosts?.[e],Wo=e=>{let t=Uo(e);if(!t)return;let n=t.lastIndexOf(`:`);if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return t[0]===`[`?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Go=()=>Ho()?.config,Ko=e=>Ho()?.[`_${e}`];
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qo=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e==`function`&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}};
/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Jo(e){try{let t=e.startsWith(`http://`)||e.startsWith(`https://`)?new URL(e).hostname:e;return t.endsWith(`.cloudworkstations.dev`)}catch{return!1}}async function Yo(e){let t=await fetch(e,{credentials:`include`});return t.ok}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Xo(e,t){if(e.uid)throw Error(`The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.`);let n={alg:`none`,type:`JWT`},r=t||`demo-project`,i=e.iat||0,a=e.sub||e.user_id;if(!a)throw Error(`mockUserToken must contain 'sub' or 'user_id' field!`);let o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:`custom`,identities:{}},...e};return[No(JSON.stringify(n)),No(JSON.stringify(o)),``].join(`.`)}const Zo={};function Qo(){let e={prod:[],emulator:[]};for(let t of Object.keys(Zo))Zo[t]?e.emulator.push(t):e.prod.push(t);return e}function $o(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement(`div`),t.setAttribute(`id`,e),n=!0),{created:n,element:t}}let es=!1;function ts(e,t){if(typeof window>`u`||typeof document>`u`||!Jo(window.location.host)||Zo[e]===t||Zo[e]||es)return;Zo[e]=t;function n(e){return`__firebase__banner__${e}`}let r=`__firebase__banner`,i=Qo(),a=i.prod.length>0;function o(){let e=document.getElementById(r);e&&e.remove()}function s(e){e.style.display=`flex`,e.style.background=`#7faaf0`,e.style.position=`fixed`,e.style.bottom=`5px`,e.style.left=`5px`,e.style.padding=`.5em`,e.style.borderRadius=`5px`,e.style.alignItems=`center`}function c(e,t){e.setAttribute(`width`,`24`),e.setAttribute(`id`,t),e.setAttribute(`height`,`24`),e.setAttribute(`viewBox`,`0 0 24 24`),e.setAttribute(`fill`,`none`),e.style.marginLeft=`-6px`}function l(){let e=document.createElement(`span`);return e.style.cursor=`pointer`,e.style.marginLeft=`16px`,e.style.fontSize=`24px`,e.innerHTML=` &times;`,e.onclick=()=>{es=!0,o()},e}function u(e,t){e.setAttribute(`id`,t),e.innerText=`Learn more`,e.href=`https://firebase.google.com/docs/studio/preview-apps#preview-backend`,e.setAttribute(`target`,`__blank`),e.style.paddingLeft=`5px`,e.style.textDecoration=`underline`}function d(){let e=$o(r),t=n(`text`),i=document.getElementById(t)||document.createElement(`span`),o=n(`learnmore`),d=document.getElementById(o)||document.createElement(`a`),f=n(`preprendIcon`),p=document.getElementById(f)||document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);if(e.created){let t=e.element;s(t),u(d,o);let n=l();c(p,f),t.append(p,i,d,n),document.body.appendChild(t)}a?(i.innerText=`Preview backend disconnected.`,p.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(p.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,i.innerText=`Preview backend running in this workspace.`),i.setAttribute(`id`,t)}document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,d):d()}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ns(){return typeof navigator<`u`&&typeof navigator.userAgent==`string`?navigator.userAgent:``}function rs(){return typeof window<`u`&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ns())}function os(){let e=Ho()?.forceEnvironment;if(e===`node`)return!0;if(e===`browser`)return!1;try{return Object.prototype.toString.call(global.process)===`[object process]`}catch{return!1}}function ss(){return typeof navigator<`u`&&navigator.userAgent===`Cloudflare-Workers`}function cs(){let e=typeof chrome==`object`?chrome.runtime:typeof browser==`object`?browser.runtime:void 0;return typeof e==`object`&&e.id!==void 0}function ls(){return typeof navigator==`object`&&navigator.product===`ReactNative`}function us(){let e=ns();return e.indexOf(`MSIE `)>=0||e.indexOf(`Trident/`)>=0}function ds(){return Eo.NODE_CLIENT===!0||Eo.NODE_ADMIN===!0}function fs(){return!os()&&!!navigator.userAgent&&navigator.userAgent.includes(`Safari`)&&!navigator.userAgent.includes(`Chrome`)}function ps(){try{return typeof indexedDB==`object`}catch{return!1}}function ms(){return new Promise((e,t)=>{try{let n=!0,r=`validate-browser-context-for-indexeddb-analytics-module`,i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),!n&&self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||``)}}catch(e){t(e)}})}var hs=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=`FirebaseError`,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}},gs=class{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?_s(i,n):`Error`,o=`${this.serviceName}: ${a} (${r}).`,s=new hs(r,o,n);return s}};function _s(e,t){return e.replace(vs,(e,n)=>{let r=t[n];return r==null?`<${n}?>`:String(r)})}const vs=/\{\$([^}]+)}/g;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ys(e){return JSON.parse(e)}function bs(e){return JSON.stringify(e)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const xs=function(e){let t={},n={},r={},i=``;try{let a=e.split(`.`);t=ys(Po(a[0])||``),n=ys(Po(a[1])||``),i=a[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},Ss=function(e){let t=xs(e),n=t.claims;return!!n&&typeof n==`object`&&n.hasOwnProperty(`iat`)},Cs=function(e){let t=xs(e).claims;return typeof t==`object`&&t.admin===!0};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ws(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ts(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Es(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ds(e,t,n){let r={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Os(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],a=t[i];if(ks(n)&&ks(a)){if(!Os(n,a))return!1}else if(n!==a)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function ks(e){return typeof e==`object`&&!!e}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function As(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+`=`+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+`=`+encodeURIComponent(r));return t.length?`&`+t.join(`&`):``}function js(e){let t={},n=e.replace(/^\?/,``).split(`&`);return n.forEach(e=>{if(e){let[n,r]=e.split(`=`);t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function Ms(e){let t=e.indexOf(`?`);if(!t)return``;let n=e.indexOf(`#`,t);return e.substring(t,n>0?n:void 0)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ns=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||=0;let n=this.W_;if(typeof e==`string`)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=(t<<1|t>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],a=this.chain_[2],o=this.chain_[3],s=this.chain_[4],c,l;for(let e=0;e<80;e++){e<40?e<20?(c=o^i&(a^o),l=1518500249):(c=i^a^o,l=1859775393):e<60?(c=i&a|o&(i|a),l=2400959708):(c=i^a^o,l=3395469782);let t=(r<<5|r>>>27)+c+s+l+n[e]&4294967295;s=o,o=a,a=(i<<30|i>>>2)&4294967295,i=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+o&4294967295,this.chain_[4]=this.chain_[4]+s&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);let n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;for(;r<t;){if(a===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e==`string`){for(;r<t;)if(i[a]=e.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){let e=[],t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}};function Ps(e,t){let n=new Fs(e,t);return n.subscribe.bind(n)}var Fs=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw Error(`Missing Observer.`);r=Is(e,[`next`,`error`,`complete`])?e:{next:e,error:t,complete:n},r.next===void 0&&(r.next=Ls),r.error===void 0&&(r.error=Ls),r.complete===void 0&&(r.complete=Ls);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){!(this.observers===void 0||this.observers[e]===void 0)&&(delete this.observers[e],--this.observerCount,this.observerCount===0&&this.onNoObservers!==void 0)&&this.onNoObservers(this)}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(e){typeof console<`u`&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Is(e,t){if(typeof e!=`object`||!e)return!1;for(let n of t)if(n in e&&typeof e[n]==`function`)return!0;return!1}function Ls(){}function Rs(e,t){return`${e} failed: ${t} argument `}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const zs=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){let t=i-55296;r++,P(r<e.length,`Surrogate pair missing trail surrogate.`);let n=e.charCodeAt(r)-56320;i=65536+(t<<10)+n}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Bs=function(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Vs(e){return e&&e._delegate?e._delegate:e}var Hs=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode=`LAZY`,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Us=`[DEFAULT]`;
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ws=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new qo;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}else if(n)return null;else throw Error(`Service ${this.name} is not available`)}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(Ks(e))try{this.getOrInitializeService({instanceIdentifier:Us})}catch{}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch{}}}}clearInstance(e=Us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>`INTERNAL`in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>`_delete`in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Us){return this.instances.has(e)}getOptions(e=Us){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}onInit(e,t){let n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);let i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Gs(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Us){return this.component?this.component.multipleInstances?e:Us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!==`EXPLICIT`}};function Gs(e){return e===Us?void 0:e}function Ks(e){return e.instantiationMode===`EAGER`}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qs=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Ws(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Js=[];var F;(function(e){e[e.DEBUG=0]=`DEBUG`,e[e.VERBOSE=1]=`VERBOSE`,e[e.INFO=2]=`INFO`,e[e.WARN=3]=`WARN`,e[e.ERROR=4]=`ERROR`,e[e.SILENT=5]=`SILENT`})(F||={});const Ys={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Xs=F.INFO,Zs={[F.DEBUG]:`log`,[F.VERBOSE]:`log`,[F.INFO]:`info`,[F.WARN]:`warn`,[F.ERROR]:`error`},Qs=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=Zs[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};var $s=class{constructor(e){this.name=e,this._logLevel=Xs,this._logHandler=Qs,this._userLogHandler=null,Js.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e==`string`?Ys[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!=`function`)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}};const ec=(e,t)=>t.some(t=>e instanceof t);function tc(){return[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function nc(){return[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}const rc=new WeakMap,ic=new WeakMap,ac=new WeakMap,oc=new WeakMap,sc=new WeakMap;function cc(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(mc(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return t.then(t=>{t instanceof IDBCursor&&rc.set(t,e)}).catch(()=>{}),sc.set(t,e),t}function lc(e){if(ic.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});ic.set(e,t)}let uc={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return ic.get(e);if(t===`objectStoreNames`)return e.objectStoreNames||ac.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mc(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function dc(e){uc=e(uc)}function fc(e){return e===IDBDatabase.prototype.transaction&&!(`objectStoreNames`in IDBTransaction.prototype)?function(t,...n){let r=e.call(hc(this),t,...n);return ac.set(r,t.sort?t.sort():[t]),mc(r)}:nc().includes(e)?function(...t){return e.apply(hc(this),t),mc(rc.get(this))}:function(...t){return mc(e.apply(hc(this),t))}}function pc(e){return typeof e==`function`?fc(e):(e instanceof IDBTransaction&&lc(e),ec(e,tc())?new Proxy(e,uc):e)}function mc(e){if(e instanceof IDBRequest)return cc(e);if(oc.has(e))return oc.get(e);let t=pc(e);return t!==e&&(oc.set(e,t),sc.set(t,e)),t}const hc=e=>sc.get(e);function gc(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=mc(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(mc(o.result),e.oldVersion,e.newVersion,mc(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}const _c=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],vc=[`put`,`add`,`delete`,`clear`],yc=new Map;function bc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(yc.get(t))return yc.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=vc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_c.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return yc.set(t,a),a}dc(e=>({...e,get:(t,n,r)=>bc(t,n)||e.get(t,n,r),has:(t,n)=>!!bc(t,n)||e.has(t,n)}));
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xc=class{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(Sc(e)){let t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(` `)}};function Sc(e){let t=e.getComponent();return t?.type===`VERSION`}const Cc=`@firebase/app`,wc=`0.14.0`,Tc=new $s(`@firebase/app`),Ec=`[DEFAULT]`,Dc={[Cc]:`fire-core`,"@firebase/app-compat":`fire-core-compat`,"@firebase/analytics":`fire-analytics`,"@firebase/analytics-compat":`fire-analytics-compat`,"@firebase/app-check":`fire-app-check`,"@firebase/app-check-compat":`fire-app-check-compat`,"@firebase/auth":`fire-auth`,"@firebase/auth-compat":`fire-auth-compat`,"@firebase/database":`fire-rtdb`,"@firebase/data-connect":`fire-data-connect`,"@firebase/database-compat":`fire-rtdb-compat`,"@firebase/functions":`fire-fn`,"@firebase/functions-compat":`fire-fn-compat`,"@firebase/installations":`fire-iid`,"@firebase/installations-compat":`fire-iid-compat`,"@firebase/messaging":`fire-fcm`,"@firebase/messaging-compat":`fire-fcm-compat`,"@firebase/performance":`fire-perf`,"@firebase/performance-compat":`fire-perf-compat`,"@firebase/remote-config":`fire-rc`,"@firebase/remote-config-compat":`fire-rc-compat`,"@firebase/storage":`fire-gcs`,"@firebase/storage-compat":`fire-gcs-compat`,"@firebase/firestore":`fire-fst`,"@firebase/firestore-compat":`fire-fst-compat`,"@firebase/ai":`fire-vertex`,"fire-js":`fire-js`,firebase:`fire-js-all`},Oc=new Map,kc=new Map,Ac=new Map;function jc(e,t){try{e.container.addComponent(t)}catch(n){Tc.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mc(e){let t=e.name;if(Ac.has(t))return Tc.debug(`There were multiple attempts to register component ${t}.`),!1;Ac.set(t,e);for(let t of Oc.values())jc(t,e);for(let t of kc.values())jc(t,e);return!0}function Nc(e,t){let n=e.container.getProvider(`heartbeat`).getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Pc(e){return e==null?!1:e.settings!==void 0}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Fc={"no-app":`No Firebase App '{$appName}' has been created - call initializeApp() first`,"bad-app-name":`Illegal App name: '{$appName}'`,"duplicate-app":`Firebase App named '{$appName}' already exists with different options or config`,"app-deleted":`Firebase App named '{$appName}' already deleted`,"server-app-deleted":`Firebase Server App has been deleted`,"no-options":`Need to provide options, when not being deployed to hosting via source.`,"invalid-app-argument":`firebase.{$appName}() takes either no argument or a Firebase App instance.`,"invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":`Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.`,"idb-get":`Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.`,"idb-set":`Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.`,"idb-delete":`Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.`,"finalization-registry-not-supported":`FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.`,"invalid-server-app-environment":`FirebaseServerApp is not for use in browser environments.`},Ic=new gs(`app`,`Firebase`,Fc);
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Lc=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Hs(`app`,()=>this,`PUBLIC`))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ic.create(`app-deleted`,{appName:this._name})}};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Rc=`12.0.0`;function zc(e,t={}){let n=e;if(typeof t!=`object`){let e=t;t={name:e}}let r={name:Ec,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!=`string`||!i)throw Ic.create(`bad-app-name`,{appName:String(i)});if(n||=Go(),!n)throw Ic.create(`no-options`);let a=Oc.get(i);if(a){if(Os(n,a.options)&&Os(r,a.config))return a;throw Ic.create(`duplicate-app`,{appName:i})}let o=new qs(i);for(let e of Ac.values())o.addComponent(e);let s=new Lc(n,r,o);return Oc.set(i,s),s}function Bc(e=Ec){let t=Oc.get(e);if(!t&&e===Ec&&Go())return zc();if(!t)throw Ic.create(`no-app`,{appName:e});return t}function Vc(e,t,n){let r=Dc[e]??e;n&&(r+=`-${n}`);let i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){let e=[`Unable to register library "${r}" with version "${t}":`];i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push(`and`),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Tc.warn(e.join(` `));return}Mc(new Hs(`${r}-version`,()=>({library:r,version:t}),`VERSION`))}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Hc=`firebase-heartbeat-store`;let Uc=null;function Wc(){return Uc||=gc(`firebase-heartbeat-database`,1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Hc)}catch(e){console.warn(e)}}}}).catch(e=>{throw Ic.create(`idb-open`,{originalErrorMessage:e.message})}),Uc}async function Gc(e){try{let t=await Wc(),n=t.transaction(Hc),r=await n.objectStore(Hc).get(qc(e));return await n.done,r}catch(e){if(e instanceof hs)Tc.warn(e.message);else{let t=Ic.create(`idb-get`,{originalErrorMessage:e?.message});Tc.warn(t.message)}}}async function Kc(e,t){try{let n=await Wc(),r=n.transaction(Hc,`readwrite`),i=r.objectStore(Hc);await i.put(t,qc(e)),await r.done}catch(e){if(e instanceof hs)Tc.warn(e.message);else{let t=Ic.create(`idb-set`,{originalErrorMessage:e?.message});Tc.warn(t.message)}}}function qc(e){return`${e.name}!${e.options.appId}`}var Jc=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider(`app`).getImmediate();this._storage=new Zc(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{let e=this.container.getProvider(`platform-logger`).getImmediate(),t=e.getPlatformInfoString(),n=Yc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>30){let e=$c(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Tc.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return``;let e=Yc(),{heartbeatsToSend:t,unsentEntries:n}=Xc(this._heartbeatsCache.heartbeats),r=No(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Tc.warn(e),``}}};function Yc(){let e=new Date;return e.toISOString().substring(0,10)}function Xc(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Qc(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var Zc=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ps()?ms().then(()=>!0).catch(()=>!1):!1}async read(){let e=await this._canUseIndexedDBPromise;if(e){let e=await Gc(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){let t=await this._canUseIndexedDBPromise;if(t){let t=await this.read();return Kc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){let t=await this._canUseIndexedDBPromise;if(t){let t=await this.read();return Kc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}};function Qc(e){return No(JSON.stringify({version:2,heartbeats:e})).length}function $c(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function el(e){Mc(new Hs(`platform-logger`,e=>new xc(e),`PRIVATE`)),Mc(new Hs(`heartbeat`,e=>new Jc(e),`PRIVATE`)),Vc(Cc,wc,e),Vc(Cc,wc,`esm2020`),Vc(`fire-js`,``)}el(``);function tl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nl=tl,rl=new gs(`auth`,`Firebase`,tl()),il=new $s(`@firebase/auth`);function al(e,...t){il.logLevel<=F.WARN&&il.warn(`Auth (${Rc}): ${e}`,...t)}function ol(e,...t){il.logLevel<=F.ERROR&&il.error(`Auth (${Rc}): ${e}`,...t)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function sl(e,...t){throw dl(e,...t)}function cl(e,...t){return dl(e,...t)}function ll(e,t,n){let r={...nl(),[t]:n},i=new gs(`auth`,`Firebase`,r);return i.create(t,{appName:e.name})}function ul(e){return ll(e,`operation-not-supported-in-this-environment`,`Operations that alter the current user are not supported in conjunction with FirebaseServerApp`)}function dl(e,...t){if(typeof e!=`string`){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return rl.create(e,...t)}function I(e,t,...n){if(!e)throw dl(t,...n)}function fl(e){let t=`INTERNAL ASSERTION FAILED: `+e;throw ol(t),Error(t)}function pl(e,t){e||fl(t)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ml(){return typeof self<`u`&&self.location?.href||``}function hl(){return gl()===`http:`||gl()===`https:`}function gl(){return typeof self<`u`&&self.location?.protocol||null}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function _l(){return typeof navigator<`u`&&navigator&&`onLine`in navigator&&typeof navigator.onLine==`boolean`&&(hl()||cs()||`connection`in navigator)?navigator.onLine:!0}function vl(){if(typeof navigator>`u`)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var yl=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,pl(t>e,`Short delay should be less than long delay!`),this.isMobile=rs()||ls()}get(){return _l()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function bl(e,t){pl(e.emulator,`Emulator should always be set here`);let{url:n}=e.emulator;return t?`${n}${t.startsWith(`/`)?t.slice(1):t}`:n}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xl=class{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<`u`&&`fetch`in self)return self.fetch;if(typeof globalThis<`u`&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<`u`)return fetch;fl(`Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<`u`&&`Headers`in self)return self.Headers;if(typeof globalThis<`u`&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<`u`)return Headers;fl(`Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<`u`&&`Response`in self)return self.Response;if(typeof globalThis<`u`&&globalThis.Response)return globalThis.Response;if(typeof Response<`u`)return Response;fl(`Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`)}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Sl={CREDENTIAL_MISMATCH:`custom-token-mismatch`,MISSING_CUSTOM_TOKEN:`internal-error`,INVALID_IDENTIFIER:`invalid-email`,MISSING_CONTINUE_URI:`internal-error`,INVALID_PASSWORD:`wrong-password`,MISSING_PASSWORD:`missing-password`,INVALID_LOGIN_CREDENTIALS:`invalid-credential`,EMAIL_EXISTS:`email-already-in-use`,PASSWORD_LOGIN_DISABLED:`operation-not-allowed`,INVALID_IDP_RESPONSE:`invalid-credential`,INVALID_PENDING_TOKEN:`invalid-credential`,FEDERATED_USER_ID_ALREADY_LINKED:`credential-already-in-use`,MISSING_REQ_TYPE:`internal-error`,EMAIL_NOT_FOUND:`user-not-found`,RESET_PASSWORD_EXCEED_LIMIT:`too-many-requests`,EXPIRED_OOB_CODE:`expired-action-code`,INVALID_OOB_CODE:`invalid-action-code`,MISSING_OOB_CODE:`internal-error`,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:`requires-recent-login`,INVALID_ID_TOKEN:`invalid-user-token`,TOKEN_EXPIRED:`user-token-expired`,USER_NOT_FOUND:`user-token-expired`,TOO_MANY_ATTEMPTS_TRY_LATER:`too-many-requests`,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:`password-does-not-meet-requirements`,INVALID_CODE:`invalid-verification-code`,INVALID_SESSION_INFO:`invalid-verification-id`,INVALID_TEMPORARY_PROOF:`invalid-credential`,MISSING_SESSION_INFO:`missing-verification-id`,SESSION_EXPIRED:`code-expired`,MISSING_ANDROID_PACKAGE_NAME:`missing-android-pkg-name`,UNAUTHORIZED_DOMAIN:`unauthorized-continue-uri`,INVALID_OAUTH_CLIENT_ID:`invalid-oauth-client-id`,ADMIN_ONLY_OPERATION:`admin-restricted-operation`,INVALID_MFA_PENDING_CREDENTIAL:`invalid-multi-factor-session`,MFA_ENROLLMENT_NOT_FOUND:`multi-factor-info-not-found`,MISSING_MFA_ENROLLMENT_ID:`missing-multi-factor-info`,MISSING_MFA_PENDING_CREDENTIAL:`missing-multi-factor-session`,SECOND_FACTOR_EXISTS:`second-factor-already-in-use`,SECOND_FACTOR_LIMIT_EXCEEDED:`maximum-second-factor-count-exceeded`,BLOCKING_FUNCTION_ERROR_RESPONSE:`internal-error`,RECAPTCHA_NOT_ENABLED:`recaptcha-not-enabled`,MISSING_RECAPTCHA_TOKEN:`missing-recaptcha-token`,INVALID_RECAPTCHA_TOKEN:`invalid-recaptcha-token`,INVALID_RECAPTCHA_ACTION:`invalid-recaptcha-action`,MISSING_CLIENT_TYPE:`missing-client-type`,MISSING_RECAPTCHA_VERSION:`missing-recaptcha-version`,INVALID_RECAPTCHA_VERSION:`invalid-recaptcha-version`,INVALID_REQ_TYPE:`invalid-req-type`},Cl=[`/v1/accounts:signInWithCustomToken`,`/v1/accounts:signInWithEmailLink`,`/v1/accounts:signInWithIdp`,`/v1/accounts:signInWithPassword`,`/v1/accounts:signInWithPhoneNumber`,`/v1/token`],wl=new yl(3e4,6e4);function Tl(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function El(e,t,n,r,i={}){return Dl(e,i,async()=>{let i={},a={};r&&(t===`GET`?a=r:i={body:JSON.stringify(r)});let o=As({key:e.config.apiKey,...a}).slice(1),s=await e._getAdditionalHeaders();s[`Content-Type`]=`application/json`,e.languageCode&&(s[`X-Firebase-Locale`]=e.languageCode);let c={method:t,headers:s,...i};return ss()||(c.referrerPolicy=`no-referrer`),e.emulatorConfig&&Jo(e.emulatorConfig.host)&&(c.credentials=`include`),xl.fetch()(await kl(e,e.config.apiHost,n,o),c)})}async function Dl(e,t,n){e._canInitEmulator=!1;let r={...Sl,...t};try{let t=new jl(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let a=await i.json();if(`needConfirmation`in a)throw Ml(e,`account-exists-with-different-credential`,a);if(i.ok&&!(`errorMessage`in a))return a;{let t=i.ok?a.errorMessage:a.error.message,[n,o]=t.split(` : `);if(n===`FEDERATED_USER_ID_ALREADY_LINKED`)throw Ml(e,`credential-already-in-use`,a);if(n===`EMAIL_EXISTS`)throw Ml(e,`email-already-in-use`,a);if(n===`USER_DISABLED`)throw Ml(e,`user-disabled`,a);let s=r[n]||n.toLowerCase().replace(/[_\s]+/g,`-`);if(o)throw ll(e,s,o);sl(e,s)}}catch(t){if(t instanceof hs)throw t;sl(e,`network-request-failed`,{message:String(t)})}}async function Ol(e,t,n,r,i={}){let a=await El(e,t,n,r,i);return`mfaPendingCredential`in a&&sl(e,`multi-factor-auth-required`,{_serverResponse:a}),a}async function kl(e,t,n,r){let i=`${t}${n}?${r}`,a=e,o=a.config.emulator?bl(e.config,i):`${e.config.apiScheme}://${i}`;if(Cl.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()===`COOKIE`)){let e=a._getPersistence();return e._getFinalTarget(o).toString()}return o}function Al(e){switch(e){case`ENFORCE`:return`ENFORCE`;case`AUDIT`:return`AUDIT`;case`OFF`:return`OFF`;default:return`ENFORCEMENT_STATE_UNSPECIFIED`}}var jl=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(cl(this.auth,`network-request-failed`)),wl.get())})}};function Ml(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=cl(e,t,r);return i.customData._tokenResponse=n,i}function Nl(e){return e!==void 0&&e.enterprise!==void 0}var Pl=class{constructor(e){if(this.siteKey=``,this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw Error(`recaptchaKey undefined`);this.siteKey=e.recaptchaKey.split(`/`)[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Al(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)===`ENFORCE`||this.getProviderEnforcementState(e)===`AUDIT`}isAnyProviderEnabled(){return this.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)||this.isProviderEnabled(`PHONE_PROVIDER`)}};async function Fl(e,t){return El(e,`GET`,`/v2/recaptchaConfig`,Tl(e,t))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Il(e,t){return El(e,`POST`,`/v1/accounts:delete`,t)}async function Ll(e,t){return El(e,`POST`,`/v1/accounts:lookup`,t)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Rl(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function zl(e,t=!1){let n=Vs(e),r=await n.getIdToken(t),i=Vl(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,`internal-error`);let a=typeof i.firebase==`object`?i.firebase:void 0,o=a?.sign_in_provider;return{claims:i,token:r,authTime:Rl(Bl(i.auth_time)),issuedAtTime:Rl(Bl(i.iat)),expirationTime:Rl(Bl(i.exp)),signInProvider:o||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Bl(e){return Number(e)*1e3}function Vl(e){let[t,n,r]=e.split(`.`);if(t===void 0||n===void 0||r===void 0)return ol(`JWT malformed, contained fewer than 3 sections`),null;try{let e=Po(n);return e?JSON.parse(e):(ol(`Failed to decode base64 JWT payload`),null)}catch(e){return ol(`Caught error parsing JWT payload as JSON`,e?.toString()),null}}function Hl(e){let t=Vl(e);return I(t,`internal-error`),I(t.exp!==void 0,`internal-error`),I(t.iat!==void 0,`internal-error`),Number(t.exp)-Number(t.iat)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Ul(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof hs&&Wl(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function Wl({code:e}){return e===`auth/user-disabled`||e===`auth/user-token-expired`}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Gl=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;let e=this.user.stsTokenManager.expirationTime??0,t=e-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code===`auth/network-request-failed`&&this.schedule(!0);return}this.schedule()}},Kl=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rl(this.lastLoginAt),this.creationTime=Rl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function ql(e){let t=e.auth,n=await e.getIdToken(),r=await Ul(e,Ll(t,{idToken:n}));I(r?.users.length,t,`internal-error`);let i=r.users[0];e._notifyReloadListener(i);let a=i.providerUserInfo?.length?Xl(i.providerUserInfo):[],o=Yl(e.providerData,a),s=e.isAnonymous,c=!(e.email&&i.passwordHash)&&!o?.length,l=s?c:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Kl(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,u)}async function Jl(e){let t=Vs(e);await ql(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Yl(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function Xl(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||``,displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Zl(e,t){let n=await Dl(e,{},async()=>{let n=As({grant_type:`refresh_token`,refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=await kl(e,r,`/v1/token`,`key=${i}`),o=await e._getAdditionalHeaders();o[`Content-Type`]=`application/x-www-form-urlencoded`;let s={method:`POST`,headers:o,body:n};return e.emulatorConfig&&Jo(e.emulatorConfig.host)&&(s.credentials=`include`),xl.fetch()(a,s)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ql(e,t){return El(e,`POST`,`/v2/accounts:revokeToken`,Tl(e,t))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $l=class e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,`internal-error`),I(e.idToken!==void 0,`internal-error`),I(e.refreshToken!==void 0,`internal-error`);let t=`expiresIn`in e&&e.expiresIn!==void 0?Number(e.expiresIn):Hl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){I(e.length!==0,`internal-error`);let t=Hl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(I(this.refreshToken,e,`user-token-expired`),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await Zl(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,n){let{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new e;return r&&(I(typeof r==`string`,`internal-error`,{appName:t}),o.refreshToken=r),i&&(I(typeof i==`string`,`internal-error`,{appName:t}),o.accessToken=i),a&&(I(typeof a==`number`,`internal-error`,{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new e,this.toJSON())}_performRefresh(){return fl(`not implemented`)}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function eu(e,t){I(typeof e==`string`||e===void 0,`internal-error`,{appName:t})}var tu=class e{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId=`firebase`,this.proactiveRefresh=new Gl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Kl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await Ul(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,`internal-error`),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zl(this,e)}reload(){return Jl(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,`internal-error`),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(t){let n=new e({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,`internal-error`),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ql(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pc(this.auth.app))return Promise.reject(ul(this.auth));let e=await this.getIdToken();return await Ul(this,Il(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||``}static _fromJSON(t,n){let r=n.displayName??void 0,i=n.email??void 0,a=n.phoneNumber??void 0,o=n.photoURL??void 0,s=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:f,isAnonymous:p,providerData:m,stsTokenManager:h}=n;I(d&&h,t,`internal-error`);let g=$l.fromJSON(this.name,h);I(typeof d==`string`,t,`internal-error`),eu(r,t.name),eu(i,t.name),I(typeof f==`boolean`,t,`internal-error`),I(typeof p==`boolean`,t,`internal-error`),eu(a,t.name),eu(o,t.name),eu(s,t.name),eu(c,t.name),eu(l,t.name),eu(u,t.name);let _=new e({uid:d,auth:t,email:i,emailVerified:f,displayName:r,isAnonymous:p,photoURL:o,phoneNumber:a,tenantId:s,stsTokenManager:g,createdAt:l,lastLoginAt:u});return m&&Array.isArray(m)&&(_.providerData=m.map(e=>({...e}))),c&&(_._redirectEventId=c),_}static async _fromIdTokenResponse(t,n,r=!1){let i=new $l;i.updateFromServerResponse(n);let a=new e({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ql(a),a}static async _fromGetAccountInfoResponse(t,n,r){let i=n.users[0];I(i.localId!==void 0,`internal-error`);let a=i.providerUserInfo===void 0?[]:Xl(i.providerUserInfo),o=!(i.email&&i.passwordHash)&&!a?.length,s=new $l;s.updateFromIdToken(r);let c=new e({uid:i.localId,auth:t,stsTokenManager:s,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Kl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(c,l),c}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const nu=new Map;function ru(e){pl(e instanceof Function,`Expected a class definition`);let t=nu.get(e);return t?(pl(t instanceof e,`Instance stored in cache mismatched with class`),t):(t=new e,nu.set(e,t),t)}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var iu=class{constructor(){this.type=`NONE`,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};iu.type=`NONE`;const au=iu;
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ou(e,t,n){return`firebase:${e}:${t}:${n}`}var su=class e{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=ou(this.userKey,r.apiKey,i),this.fullPersistenceKey=ou(`persistence`,r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e==`string`){let t=await Ll(this.auth,{idToken:e}).catch(()=>void 0);return t?tu._fromGetAccountInfoResponse(this.auth,t,e):null}return tu._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r=`authUser`){if(!n.length)return new e(ru(au),t,r);let i=(await Promise.all(n.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),a=i[0]||ru(au),o=ou(r,t.config.apiKey,t.name),s=null;for(let e of n)try{let n=await e._get(o);if(n){let r;if(typeof n==`string`){let e=await Ll(t,{idToken:n}).catch(()=>void 0);if(!e)break;r=await tu._fromGetAccountInfoResponse(t,e,n)}else r=tu._fromJSON(t,n);e!==a&&(s=r),a=e;break}}catch{}let c=i.filter(e=>e._shouldAllowMigration);return!a._shouldAllowMigration||!c.length?new e(a,t,r):(a=c[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async e=>{if(e!==a)try{await e._remove(o)}catch{}})),new e(a,t,r))}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function cu(e){let t=e.toLowerCase();if(t.includes(`opera/`)||t.includes(`opr/`)||t.includes(`opios/`))return`Opera`;if(fu(t))return`IEMobile`;if(t.includes(`msie`)||t.includes(`trident/`))return`IE`;if(t.includes(`edge/`))return`Edge`;if(lu(t))return`Firefox`;if(t.includes(`silk/`))return`Silk`;if(mu(t))return`Blackberry`;if(hu(t))return`Webos`;if(uu(t))return`Safari`;if((t.includes(`chrome/`)||du(t))&&!t.includes(`edge/`))return`Chrome`;if(pu(t))return`Android`;{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(n?.length===2)return n[1]}return`Other`}function lu(e=ns()){return/firefox\//i.test(e)}function uu(e=ns()){let t=e.toLowerCase();return t.includes(`safari/`)&&!t.includes(`chrome/`)&&!t.includes(`crios/`)&&!t.includes(`android`)}function du(e=ns()){return/crios\//i.test(e)}function fu(e=ns()){return/iemobile/i.test(e)}function pu(e=ns()){return/android/i.test(e)}function mu(e=ns()){return/blackberry/i.test(e)}function hu(e=ns()){return/webos/i.test(e)}function gu(e=ns()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _u(e=ns()){return gu(e)&&!!window.navigator?.standalone}function vu(){return us()&&document.documentMode===10}function yu(e=ns()){return gu(e)||pu(e)||hu(e)||mu(e)||/windows phone/i.test(e)||fu(e)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function bu(e,t=[]){let n;switch(e){case`Browser`:n=cu(ns());break;case`Worker`:n=`${cu(ns())}-${e}`;break;default:n=e}let r=t.length?t.join(`,`):`FirebaseCore-web`;return`${n}/JsCore/${Rc}/${r}`}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xu=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let r=e(t);n(r)}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(let e of t)try{e()}catch{}throw this.auth._errorFactory.create(`login-blocked`,{originalMessage:e?.message})}}};
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Su(e,t={}){return El(e,`GET`,`/v2/passwordPolicy`,Tl(e,t))}var Cu=class{constructor(e){let t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState===`ENFORCEMENT_STATE_UNSPECIFIED`&&(this.enforcementState=`OFF`),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join(``)??``,this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&=t.meetsMinPasswordLength??!0,t.isValid&&=t.meetsMaxPasswordLength??!0,t.isValid&&=t.containsLowercaseLetter??!0,t.isValid&&=t.containsUppercaseLetter??!0,t.isValid&&=t.containsNumericCharacter??!0,t.isValid&&=t.containsNonAlphanumericCharacter??!0,t}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>=`a`&&n<=`z`,n>=`A`&&n<=`Z`,n>=`0`&&n<=`9`,this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||=t),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||=n),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||=r),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||=i)}},wu=class{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eu(this),this.idTokenSubscription=new Eu(this),this.beforeStateQueue=new xu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ru(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await su.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Ll(this,{idToken:e}),n=await tu._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn(`FirebaseServerApp could not login user with provided authIdToken: `,e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Pc(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let t=await this.assertedPersistence.getCurrentUser(),n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,a=await this.tryRedirectSignIn(e);(!t||t===i)&&a?.user&&(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,`argument-error`),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ql(e)}catch(e){if(e?.code!==`auth/network-request-failed`)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pc(this.app))return Promise.reject(ul(this));let t=e?Vs(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,`invalid-user-token`),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,`tenant-id-mismatch`),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pc(this.app)?Promise.reject(ul(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pc(this.app)?Promise.reject(ul(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ru(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion===this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?t.validatePassword(e):Promise.reject(this._errorFactory.create(`unsupported-password-policy-schema-version`,{}))}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Su(this),t=new Cu(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gs(`auth`,`Firebase`,e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),n={providerId:`apple.com`,tokenType:`ACCESS_TOKEN`,token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Ql(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&ru(e)||this._popupRedirectResolver;I(t,this,`argument-error`),this.redirectPersistenceManager=await su.create(this,[ru(t._redirectPersistence)],`redirectUser`),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i=typeof t==`function`?t:t.next.bind(t),a=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(o,this,`internal-error`),o.then(()=>{a||i(this.currentUser)}),typeof t==`function`){let i=e.addObserver(t,n,r);return()=>{a=!0,i()}}else{let n=e.addObserver(t);return()=>{a=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,`internal-error`),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e[`X-Firebase-gmpid`]=this.app.options.appId);let t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e[`X-Firebase-Client`]=t);let n=await this._getAppCheckToken();return n&&(e[`X-Firebase-AppCheck`]=n),e}async _getAppCheckToken(){if(Pc(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&al(`Error while retrieving App Check token: ${e.error}`),e?.token}};function Tu(e){return Vs(e)}var Eu=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ps(e=>this.observer=e)}get next(){return I(this.observer,this.auth,`internal-error`),this.observer.next.bind(this.observer)}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let Du={async loadJS(){throw Error(`Unable to load external scripts`)},recaptchaV2Script:``,recaptchaEnterpriseScript:``,gapiScript:``};function Ou(e){Du=e}function ku(e){return Du.loadJS(e)}function Au(){return Du.recaptchaEnterpriseScript}function ju(){return Du.gapiScript}function Mu(e){return`__${e}${Math.floor(Math.random()*1e6)}`}var Nu=class{constructor(){this.enterprise=new Pu}ready(e){e()}execute(e,t){return Promise.resolve(`token`)}render(e,t){return``}},Pu=class{ready(e){e()}execute(e,t){return Promise.resolve(`token`)}render(e,t){return``}};const Fu=`NO_RECAPTCHA`;var Iu=class{constructor(e){this.type=`recaptcha-enterprise`,this.auth=Tu(e)}async verify(e=`verify`,t=!1){async function n(e){if(!t){if(e.tenantId==null&&e._agentRecaptchaConfig!=null)return e._agentRecaptchaConfig.siteKey;if(e.tenantId!=null&&e._tenantRecaptchaConfigs[e.tenantId]!==void 0)return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{Fl(e,{clientType:`CLIENT_TYPE_WEB`,version:`RECAPTCHA_ENTERPRISE`}).then(r=>{if(r.recaptchaKey===void 0)n(Error(`recaptcha Enterprise site key undefined`));else{let n=new Pl(r);return e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function r(t,n,r){let i=window.grecaptcha;Nl(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Fu)})}):r(Error(`No reCAPTCHA enterprise script loaded.`))}if(this.auth.settings.appVerificationDisabledForTesting){let e=new Nu;return e.execute(`siteKey`,{action:`verify`})}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&Nl(window.grecaptcha))r(n,e,i);else{if(typeof window>`u`){i(Error(`RecaptchaVerifier is only supported in browser`));return}let t=Au();t.length!==0&&(t+=n),ku(t).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}};async function Lu(e,t,n,r=!1,i=!1){let a=new Iu(e),o;if(i)o=Fu;else try{o=await a.verify(n)}catch{o=await a.verify(n,!0)}let s={...t};if(n===`mfaSmsEnrollment`||n===`mfaSmsSignIn`){if(`phoneEnrollmentInfo`in s){let e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:`CLIENT_TYPE_WEB`,recaptchaVersion:`RECAPTCHA_ENTERPRISE`}})}else if(`phoneSignInInfo`in s){let e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:`CLIENT_TYPE_WEB`,recaptchaVersion:`RECAPTCHA_ENTERPRISE`}})}return s}return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:`CLIENT_TYPE_WEB`}),Object.assign(s,{recaptchaVersion:`RECAPTCHA_ENTERPRISE`}),s}async function Ru(e,t,n,r,i){if(i===`EMAIL_PASSWORD_PROVIDER`)if(e._getRecaptchaConfig()?.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)){let i=await Lu(e,t,n,n===`getOobCode`);return r(e,i)}else return r(e,t).catch(async i=>{if(i.code===`auth/missing-recaptcha-token`){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await Lu(e,t,n,n===`getOobCode`);return r(e,i)}else return Promise.reject(i)});else if(i===`PHONE_PROVIDER`)if(e._getRecaptchaConfig()?.isProviderEnabled(`PHONE_PROVIDER`)){let i=await Lu(e,t,n);return r(e,i).catch(async i=>{if(e._getRecaptchaConfig()?.getProviderEnforcementState(`PHONE_PROVIDER`)===`AUDIT`&&(i.code===`auth/missing-recaptcha-token`||i.code===`auth/invalid-app-credential`)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);let i=await Lu(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}else{let i=await Lu(e,t,n,!1,!0);return r(e,i)}else return Promise.reject(i+` provider is not supported.`)}async function zu(e){let t=Tu(e),n=await Fl(t,{clientType:`CLIENT_TYPE_WEB`,version:`RECAPTCHA_ENTERPRISE`}),r=new Pl(n);if(t.tenantId==null?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){let e=new Iu(t);e.verify()}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Bu(e,t){let n=Nc(e,`auth`);if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if(Os(r,t??{}))return e;sl(e,`already-initialized`)}let r=n.initialize({options:t});return r}function Vu(e,t){let n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(ru);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hu=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fl(`not implemented`)}_getIdTokenResponse(e){return fl(`not implemented`)}_linkToIdToken(e,t){return fl(`not implemented`)}_getReauthenticationResolver(e){return fl(`not implemented`)}};async function Uu(e,t){return El(e,`POST`,`/v1/accounts:signUp`,t)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Wu(e,t){return Ol(e,`POST`,`/v1/accounts:signInWithPassword`,Tl(e,t))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Gu(e,t){return Ol(e,`POST`,`/v1/accounts:signInWithEmailLink`,Tl(e,t))}async function Ku(e,t){return Ol(e,`POST`,`/v1/accounts:signInWithEmailLink`,Tl(e,t))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qu=class e extends Hu{constructor(e,t,n,r=null){super(`password`,n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(t,n){return new e(t,n,`password`)}static _fromEmailAndCode(t,n,r=null){return new e(t,n,`emailLink`,r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e==`string`?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod===`password`)return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod===`emailLink`)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case`password`:let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:`CLIENT_TYPE_WEB`};return Ru(e,t,`signInWithPassword`,Wu,`EMAIL_PASSWORD_PROVIDER`);case`emailLink`:return Gu(e,{email:this._email,oobCode:this._password});default:sl(e,`internal-error`)}}async _linkToIdToken(e,t){switch(this.signInMethod){case`password`:let n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:`CLIENT_TYPE_WEB`};return Ru(e,n,`signUpPassword`,Uu,`EMAIL_PASSWORD_PROVIDER`);case`emailLink`:return Ku(e,{idToken:t,email:this._email,oobCode:this._password});default:sl(e,`internal-error`)}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Ju(e,t){return Ol(e,`POST`,`/v1/accounts:signInWithIdp`,Tl(e,t))}var Yu=class e extends Hu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){let n=new e(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):sl(`argument-error`),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){let n=typeof t==`string`?JSON.parse(t):t,{providerId:r,signInMethod:i,...a}=n;if(!r||!i)return null;let o=new e(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return Ju(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,Ju(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Ju(e,t)}buildRequest(){let e={requestUri:`http://localhost`,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=As(t)}return e}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function Xu(e,t){return El(e,`POST`,`/v1/accounts:sendVerificationCode`,Tl(e,t))}async function Zu(e,t){return Ol(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,Tl(e,t))}async function Qu(e,t){let n=await Ol(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,Tl(e,t));if(n.temporaryProof)throw Ml(e,`account-exists-with-different-credential`,n);return n}const $u={USER_NOT_FOUND:`user-not-found`};async function ed(e,t){let n={...t,operation:`REAUTH`};return Ol(e,`POST`,`/v1/accounts:signInWithPhoneNumber`,Tl(e,n),$u)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var td=class e extends Hu{constructor(e){super(`phone`,`phone`),this.params=e}static _fromVerification(t,n){return new e({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new e({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(e){return Zu(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Qu(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return ed(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(t){typeof t==`string`&&(t=JSON.parse(t));let{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a}=t;return!r&&!n&&!i&&!a?null:new e({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:a})}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function nd(e){switch(e){case`recoverEmail`:return`RECOVER_EMAIL`;case`resetPassword`:return`PASSWORD_RESET`;case`signIn`:return`EMAIL_SIGNIN`;case`verifyEmail`:return`VERIFY_EMAIL`;case`verifyAndChangeEmail`:return`VERIFY_AND_CHANGE_EMAIL`;case`revertSecondFactorAddition`:return`REVERT_SECOND_FACTOR_ADDITION`;default:return null}}function rd(e){let t=js(Ms(e)).link,n=t?js(Ms(t)).deep_link_id:null,r=js(Ms(e)).deep_link_id,i=r?js(Ms(r)).link:null;return i||r||n||t||e}var id=class e{constructor(e){let t=js(Ms(e)),n=t.apiKey??null,r=t.oobCode??null,i=nd(t.mode??null);I(n&&r&&i,`argument-error`),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(t){let n=rd(t);try{return new e(n)}catch{return null}}},ad=class e{constructor(){this.providerId=e.PROVIDER_ID}static credential(e,t){return qu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=id.parseLink(t);return I(n,`argument-error`),qu._fromEmailAndCode(e,n.code,n.tenantId)}};ad.PROVIDER_ID=`password`,ad.EMAIL_PASSWORD_SIGN_IN_METHOD=`password`,ad.EMAIL_LINK_SIGN_IN_METHOD=`emailLink`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var od=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}},sd=class extends od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}},cd=class e extends sd{constructor(){super(`facebook.com`)}static credential(t){return Yu._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!(`oauthAccessToken`in t)||!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};cd.FACEBOOK_SIGN_IN_METHOD=`facebook.com`,cd.PROVIDER_ID=`facebook.com`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ld=class e extends sd{constructor(){super(`google.com`),this.addScope(`profile`)}static credential(t,n){return Yu._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return e.credential(n,r)}catch{return null}}};ld.GOOGLE_SIGN_IN_METHOD=`google.com`,ld.PROVIDER_ID=`google.com`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ud=class e extends sd{constructor(){super(`github.com`)}static credential(t){return Yu._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!(`oauthAccessToken`in t)||!t.oauthAccessToken)return null;try{return e.credential(t.oauthAccessToken)}catch{return null}}};ud.GITHUB_SIGN_IN_METHOD=`github.com`,ud.PROVIDER_ID=`github.com`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dd=class e extends sd{constructor(){super(`twitter.com`)}static credential(t,n){return Yu._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return e.credentialFromTaggedObject(t)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return e.credential(n,r)}catch{return null}}};dd.TWITTER_SIGN_IN_METHOD=`twitter.com`,dd.PROVIDER_ID=`twitter.com`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var fd=class e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){let a=await tu._fromIdTokenResponse(t,r,i),o=pd(r),s=new e({user:a,providerId:o,_tokenResponse:r,operationType:n});return s}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);let i=pd(r);return new e({user:t,providerId:i,_tokenResponse:r,operationType:n})}};function pd(e){return e.providerId?e.providerId:`phoneNumber`in e?`phone`:null}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var md=class e extends hs{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,e.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new e(t,n,r,i)}};function hd(e,t,n,r){let i=t===`reauthenticate`?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{throw n.code===`auth/multi-factor-auth-required`?md._fromErrorAndOperation(e,n,t,r):n})}async function gd(e,t,n=!1){let r=await Ul(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return fd._forOperation(e,`link`,r)}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function _d(e,t,n=!1){let{auth:r}=e;if(Pc(r.app))return Promise.reject(ul(r));let i=`reauthenticate`;try{let a=await Ul(e,hd(r,i,t,e),n);I(a.idToken,r,`internal-error`);let o=Vl(a.idToken);I(o,r,`internal-error`);let{sub:s}=o;return I(e.uid===s,r,`user-mismatch`),fd._forOperation(e,i,a)}catch(e){throw e?.code===`auth/user-not-found`&&sl(r,`user-mismatch`),e}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function vd(e,t,n=!1){if(Pc(e.app))return Promise.reject(ul(e));let r=`signIn`,i=await hd(e,r,t),a=await fd._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}function yd(e,t,n,r){return Vs(e).onIdTokenChanged(t,n,r)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function bd(e,t){return El(e,`POST`,`/v2/accounts/mfaEnrollment:start`,Tl(e,t))}function xd(e,t){return El(e,`POST`,`/v2/accounts/mfaEnrollment:finalize`,Tl(e,t))}function Sd(e,t){return El(e,`POST`,`/v2/accounts/mfaEnrollment:start`,Tl(e,t))}function Cd(e,t){return El(e,`POST`,`/v2/accounts/mfaEnrollment:finalize`,Tl(e,t))}const wd=`__sak`;
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Td=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wd,`1`),this.storage.removeItem(wd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}},Ed=class extends Td{constructor(){super(()=>window.localStorage,`LOCAL`),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;t?this.detachListener():this.stopPolling();let r=()=>{let e=this.storage.getItem(n);!t&&this.localCache[n]===e||this.notifyListeners(n,e)},i=this.storage.getItem(n);vu()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent(`storage`,{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener(`storage`,this.boundEventHandler)}detachListener(){window.removeEventListener(`storage`,this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Ed.type=`LOCAL`;const Dd=Ed;function Od(e){let t=e.replace(/[\\^$.*+?()[\]{}|]/g,`\\$&`),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function kd(e){let t=window.location.protocol===`http:`;return`${t?`__dev_`:`__HOST-`}FIREBASE_${e.split(`:`)[3]}`}var Ad=class{constructor(){this.type=`COOKIE`,this.listenerUnsubscribes=new Map}_getFinalTarget(e){let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set(`finalTarget`,e),t}async _isAvailable(){return typeof isSecureContext==`boolean`&&!isSecureContext||typeof navigator>`u`||typeof document>`u`?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=kd(e);if(window.cookieStore){let e=await window.cookieStore.get(t);return e?.value}return Od(t)}async _remove(e){if(!this._isAvailable())return;let t=await this._get(e);if(!t)return;let n=kd(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch(`/__cookies__`,{method:`DELETE`}).catch(()=>void 0)}_addListener(e,t){if(!this._isAvailable())return;let n=kd(e);if(window.cookieStore){let e=(e=>{let r=e.changed.find(e=>e.name===n);r&&t(r.value);let i=e.deleted.find(e=>e.name===n);i&&t(null)}),r=()=>window.cookieStore.removeEventListener(`change`,e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener(`change`,e)}let r=Od(n),i=setInterval(()=>{let e=Od(n);e!==r&&(t(e),r=e)},1e3),a=()=>clearInterval(i);this.listenerUnsubscribes.set(t,a)}_removeListener(e,t){let n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}};Ad.type=`COOKIE`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jd=class extends Td{constructor(){super(()=>window.sessionStorage,`SESSION`)}_addListener(e,t){}_removeListener(e,t){}};jd.type=`SESSION`;const Md=jd;
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Nd(e){return Promise.all(e.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Pd=class e{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){let n=this.receivers.find(e=>e.isListeningto(t));if(n)return n;let r=new e(t);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:`ack`,eventId:n,eventType:r});let o=Array.from(a).map(async e=>e(t.origin,i)),s=await Nd(o);t.ports[0].postMessage({status:`done`,eventId:n,eventType:r,response:s})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener(`message`,this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener(`message`,this.boundEventHandler)}};Pd.receivers=[];
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Fd(e=``,t=10){let n=``;for(let e=0;e<t;e++)n+=Math.floor(Math.random()*10);return e+n}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Id=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener(`message`,e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r=typeof MessageChannel<`u`?new MessageChannel:null;if(!r)throw Error(`connection_unavailable`);let i,a;return new Promise((o,s)=>{let c=Fd(``,20);r.port1.start();let l=setTimeout(()=>{s(Error(`unsupported_event`))},n);a={messageChannel:r,onMessage(e){let t=e;if(t.data.eventId===c)switch(t.data.status){case`ack`:clearTimeout(l),i=setTimeout(()=>{s(Error(`timeout`))},3e3);break;case`done`:clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),s(Error(`invalid_response`));break}}},this.handlers.add(a),r.port1.addEventListener(`message`,a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ld(){return window}function Rd(e){Ld().location.href=e}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function zd(){return Ld().WorkerGlobalScope!==void 0&&typeof Ld().importScripts==`function`}async function Bd(){if(!navigator?.serviceWorker)return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch{return null}}function Vd(){return navigator?.serviceWorker?.controller||null}function Hd(){return zd()?self:null}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Ud=`firebaseLocalStorageDb`,Wd=`firebaseLocalStorage`,Gd=`fbase_key`;var Kd=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener(`success`,()=>{e(this.request.result)}),this.request.addEventListener(`error`,()=>{t(this.request.error)})})}};function qd(e,t){return e.transaction([Wd],t?`readwrite`:`readonly`).objectStore(Wd)}function Jd(){let e=indexedDB.deleteDatabase(Ud);return new Kd(e).toPromise()}function Yd(){let e=indexedDB.open(Ud,1);return new Promise((t,n)=>{e.addEventListener(`error`,()=>{n(e.error)}),e.addEventListener(`upgradeneeded`,()=>{let t=e.result;try{t.createObjectStore(Wd,{keyPath:Gd})}catch(e){n(e)}}),e.addEventListener(`success`,async()=>{let n=e.result;n.objectStoreNames.contains(Wd)?t(n):(n.close(),await Jd(),t(await Yd()))})})}async function Xd(e,t,n){let r=qd(e,!0).put({[Gd]:t,value:n});return new Kd(r).toPromise()}async function Zd(e,t){let n=qd(e,!1).get(t),r=await new Kd(n).toPromise();return r===void 0?null:r.value}function Qd(e,t){let n=qd(e,!0).delete(t);return new Kd(n).toPromise()}var $d=class{constructor(){this.type=`LOCAL`,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||=await Yd(),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pd._getInstance(Hd()),this.receiver._subscribe(`keyChanged`,async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe(`ping`,async(e,t)=>[`keyChanged`])}async initializeSender(){if(this.activeServiceWorker=await Bd(),!this.activeServiceWorker)return;this.sender=new Id(this.activeServiceWorker);let e=await this.sender._send(`ping`,{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes(`keyChanged`)&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vd()!==this.activeServiceWorker))try{await this.sender._send(`keyChanged`,{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Yd();return await Xd(e,wd,`1`),await Qd(e,wd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xd(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>Zd(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=qd(e,!1).getAll();return new Kd(t).toPromise()});if(!e||this.pendingWrites!==0)return[];let t=[],n=new Set;if(e.length!==0)for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};$d.type=`LOCAL`;const ef=$d;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function tf(e,t){return El(e,`POST`,`/v2/accounts/mfaSignIn:start`,Tl(e,t))}function nf(e,t){return El(e,`POST`,`/v2/accounts/mfaSignIn:finalize`,Tl(e,t))}function rf(e,t){return El(e,`POST`,`/v2/accounts/mfaSignIn:finalize`,Tl(e,t))}Mu(`rcb`),new yl(3e4,6e4);
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const af=`recaptcha`;async function sf(e,t,n){if(!e._getRecaptchaConfig())try{await zu(e)}catch{console.log(`Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.`)}try{let r;if(r=typeof t==`string`?{phoneNumber:t}:t,`session`in r){let t=r.session;if(`phoneNumber`in r){I(t.type===`enroll`,e,`internal-error`);let i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:`CLIENT_TYPE_WEB`}},a=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===Fu){I(n?.type===af,e,`argument-error`);let r=await cf(e,t,n);return bd(e,r)}return bd(e,t)},o=Ru(e,i,`mfaSmsEnrollment`,a,`PHONE_PROVIDER`),s=await o.catch(e=>Promise.reject(e));return s.phoneSessionInfo.sessionInfo}else{I(t.type===`signin`,e,`internal-error`);let i=r.multiFactorHint?.uid||r.multiFactorUid;I(i,e,`missing-multi-factor-info`);let a={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:`CLIENT_TYPE_WEB`}},o=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===Fu){I(n?.type===af,e,`argument-error`);let r=await cf(e,t,n);return tf(e,r)}return tf(e,t)},s=Ru(e,a,`mfaSmsSignIn`,o,`PHONE_PROVIDER`),c=await s.catch(e=>Promise.reject(e));return c.phoneResponseInfo.sessionInfo}}else{let t={phoneNumber:r.phoneNumber,clientType:`CLIENT_TYPE_WEB`},i=async(e,t)=>{if(t.captchaResponse===Fu){I(n?.type===af,e,`argument-error`);let r=await cf(e,t,n);return Xu(e,r)}return Xu(e,t)},a=Ru(e,t,`sendVerificationCode`,i,`PHONE_PROVIDER`),o=await a.catch(e=>Promise.reject(e));return o.sessionInfo}}finally{n?._reset()}}async function cf(e,t,n){I(n.type===af,e,`argument-error`);let r=await n.verify();I(typeof r==`string`,e,`argument-error`);let i={...t};if(`phoneEnrollmentInfo`in i){let e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,a=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:a}}),i}else if(`phoneSignInInfo`in i){let e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}else return Object.assign(i,{recaptchaToken:r}),i}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lf=class e{constructor(t){this.providerId=e.PROVIDER_ID,this.auth=Tu(t)}verifyPhoneNumber(e,t){return sf(this.auth,e,Vs(t))}static credential(e,t){return td._fromVerification(e,t)}static credentialFromResult(t){let n=t;return e.credentialFromTaggedObject(n)}static credentialFromError(t){return e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?td._fromTokenResponse(t,n):null}};lf.PROVIDER_ID=`phone`,lf.PHONE_SIGN_IN_METHOD=`phone`;
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function uf(e,t){return t?ru(t):(I(e._popupRedirectResolver,e,`argument-error`),e._popupRedirectResolver)}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var df=class extends Hu{constructor(e){super(`custom`,`custom`),this.params=e}_getIdTokenResponse(e){return Ju(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ju(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ju(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function ff(e){return vd(e.auth,new df(e),e.bypassAuthState)}function pf(e){let{auth:t,user:n}=e;return I(n,t,`internal-error`),_d(n,new df(e),e.bypassAuthState)}async function mf(e){let{auth:t,user:n}=e;return I(n,t,`internal-error`),gd(n,new df(e),e.bypassAuthState)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hf=class{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}let s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case`signInViaPopup`:case`signInViaRedirect`:return ff;case`linkViaPopup`:case`linkViaRedirect`:return mf;case`reauthViaPopup`:case`reauthViaRedirect`:return pf;default:sl(this.auth,`internal-error`)}}resolve(e){pl(this.pendingPromise,`Pending promise was never set`),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pl(this.pendingPromise,`Pending promise was never set`),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const gf=new yl(2e3,1e4);var _f=class e extends hf{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,e.currentPopupAction&&e.currentPopupAction.cancel(),e.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return I(e,this.auth,`internal-error`),e}async onExecution(){pl(this.filter.length===1,`Popup operations only handle one event`);let e=Fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(cl(this.auth,`web-storage-unsupported`))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(cl(this.auth,`cancelled-popup-request`))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,e.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cl(this.auth,`popup-closed-by-user`))},8e3);return}this.pollId=window.setTimeout(e,gf.get())};e()}};_f.currentPopupAction=null;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const vf=new Map;var yf=class extends hf{constructor(e,t,n=!1){super(e,[`signInViaRedirect`,`linkViaRedirect`,`reauthViaRedirect`,`unknown`],t,void 0,n),this.eventId=null}async execute(){let e=vf.get(this.auth._key());if(!e){try{let t=await bf(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}vf.set(this.auth._key(),e)}return this.bypassAuthState||vf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type===`signInViaRedirect`)return super.onAuthEvent(e);if(e.type===`unknown`){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function bf(e,t){let n=Cf(t),r=Sf(e);if(!await r._isAvailable())return!1;let i=await r._get(n)===`true`;return await r._remove(n),i}function xf(e,t){vf.set(e._key(),t)}function Sf(e){return ru(e._redirectPersistence)}function Cf(e){return ou(`pendingRedirect`,e.config.apiKey,e.name)}async function wf(e,t,n=!1){if(Pc(e.app))return Promise.reject(ul(e));let r=Tu(e),i=uf(r,t),a=new yf(r,i,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}var Tf=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Of(e)?t:(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0),t)}sendToConsumer(e,t){if(e.error&&!Df(e)){let n=e.error.code?.split(`auth/`)[1]||`internal-error`;t.onError(cl(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ef(e))}saveEventToCache(e){this.cachedEventUids.add(Ef(e)),this.lastProcessedEventTime=Date.now()}};function Ef(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join(`-`)}function Df({type:e,error:t}){return e===`unknown`&&t?.code===`auth/no-auth-event`}function Of(e){switch(e.type){case`signInViaRedirect`:case`linkViaRedirect`:case`reauthViaRedirect`:return!0;case`unknown`:return Df(e);default:return!1}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function kf(e,t={}){return El(e,`GET`,`/v1/projects`,t)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Af=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jf=/^https?/;async function Mf(e){if(e.config.emulator)return;let{authorizedDomains:t}=await kf(e);for(let e of t)try{if(Nf(e))return}catch{}sl(e,`unauthorized-domain`)}function Nf(e){let t=ml(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith(`chrome-extension://`)){let i=new URL(e);return i.hostname===``&&r===``?n===`chrome-extension:`&&e.replace(`chrome-extension://`,``)===t.replace(`chrome-extension://`,``):n===`chrome-extension:`&&i.hostname===r}if(!jf.test(n))return!1;if(Af.test(e))return r===e;let i=e.replace(/\./g,`\\.`),a=RegExp(`^(.+\\.`+i+`|`+i+`)$`,`i`);return a.test(r)}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Pf=new yl(3e4,6e4);function Ff(){let e=Ld().___jsl;if(e?.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}function If(e){return new Promise((t,n)=>{function r(){Ff(),gapi.load(`gapi.iframes`,{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ff(),n(cl(e,`network-request-failed`))},timeout:Pf.get()})}if(Ld().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Ld().gapi?.load)r();else{let t=Mu(`iframefcb`);return Ld()[t]=()=>{gapi.load?r():n(cl(e,`network-request-failed`))},ku(`${ju()}?onload=${t}`).catch(e=>n(e))}}).catch(e=>{throw Lf=null,e})}let Lf=null;function Rf(e){return Lf||=If(e),Lf}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const zf=new yl(5e3,15e3),Bf={style:{position:`absolute`,top:`-100px`,width:`1px`,height:`1px`},"aria-hidden":`true`,tabindex:`-1`},Vf=new Map([[`identitytoolkit.googleapis.com`,`p`],[`staging-identitytoolkit.sandbox.googleapis.com`,`s`],[`test-identitytoolkit.sandbox.googleapis.com`,`t`]]);function Hf(e){let t=e.config;I(t.authDomain,e,`auth-domain-config-required`);let n=t.emulator?bl(t,`emulator/auth/iframe`):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Rc},i=Vf.get(e.config.apiHost);i&&(r.eid=i);let a=e._getFrameworks();return a.length&&(r.fw=a.join(`,`)),`${n}?${As(r).slice(1)}`}async function Uf(e){let t=await Rf(e),n=Ld().gapi;return I(n,e,`internal-error`),t.open({where:document.body,url:Hf(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bf,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=cl(e,`network-request-failed`),a=Ld().setTimeout(()=>{r(i)},zf.get());function o(){Ld().clearTimeout(a),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Wf={location:`yes`,resizable:`yes`,statusbar:`yes`,toolbar:`no`};var Gf=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Kf(e,t,n,r=500,i=600){let a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),s=``,c={...Wf,width:r.toString(),height:i.toString(),top:a,left:o},l=ns().toLowerCase();n&&(s=du(l)?`_blank`:n),lu(l)&&(t||=`http://localhost`,c.scrollbars=`yes`);let u=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,``);if(_u(l)&&s!==`_self`)return qf(t||``,s),new Gf(null);let d=window.open(t||``,s,u);I(d,e,`popup-blocked`);try{d.focus()}catch{}return new Gf(d)}function qf(e,t){let n=document.createElement(`a`);n.href=e,n.target=t;let r=document.createEvent(`MouseEvent`);r.initMouseEvent(`click`,!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Jf=encodeURIComponent(`fac`);async function Yf(e,t,n,r,i,a){I(e.config.authDomain,e,`auth-domain-config-required`),I(e.config.apiKey,e,`invalid-api-key`);let o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Rc,eventId:i};if(t instanceof od){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||``,Es(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(let[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof sd){let e=t.getScopes().filter(e=>e!==``);e.length>0&&(o.scopes=e.join(`,`))}e.tenantId&&(o.tid=e.tenantId);let s=o;for(let e of Object.keys(s))s[e]===void 0&&delete s[e];let c=await e._getAppCheckToken(),l=c?`#${Jf}=${encodeURIComponent(c)}`:``;return`${Xf(e)}?${As(s).slice(1)}${l}`}function Xf({config:e}){return e.emulator?bl(e,`emulator/auth/handler`):`https://${e.authDomain}/__/auth/handler`}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Zf=`webStorageSupport`;var Qf=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Md,this._completeRedirectFn=wf,this._overrideRedirectResult=xf}async _openPopup(e,t,n,r){pl(this.eventManagers[e._key()]?.manager,`_initialize() not called before _openPopup()`);let i=await Yf(e,t,n,ml(),r);return Kf(e,i,Fd())}async _openRedirect(e,t,n,r){await this._originValidation(e);let i=await Yf(e,t,n,ml(),r);return Rd(i),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(pl(n,`If manager is not set, promise should be`),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await Uf(e),n=new Tf(e);return t.register(`authEvent`,t=>{I(t?.authEvent,e,`invalid-auth-event`);let r=n.onEvent(t.authEvent);return{status:r?`ACK`:`ERROR`}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(Zf,{type:Zf},n=>{let r=n?.[0]?.[Zf];r!==void 0&&t(!!r),sl(e,`internal-error`)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yu()||uu()||gu()}};const $f=Qf;var ep=class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case`enroll`:return this._finalizeEnroll(e,t.credential,n);case`signin`:return this._finalizeSignIn(e,t.credential);default:return fl(`unexpected MultiFactorSessionType`)}}},tp=class e extends ep{constructor(e){super(`phone`),this.credential=e}static _fromCredential(t){return new e(t)}_finalizeEnroll(e,t,n){return xd(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return nf(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},np=class{constructor(){}static assertion(e){return tp._fromCredential(e)}};np.FACTOR_ID=`phone`;var rp=class{static assertionForEnrollment(e,t){return ip._fromSecret(e,t)}static assertionForSignIn(e,t){return ip._fromEnrollmentId(e,t)}static async generateSecret(e){let t=e;I(t.user?.auth!==void 0,`internal-error`);let n=await Sd(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return ap._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}};rp.FACTOR_ID=`totp`;var ip=class e extends ep{constructor(e,t,n){super(`totp`),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(t,n){return new e(n,void 0,t)}static _fromEnrollmentId(t,n){return new e(n,t)}async _finalizeEnroll(e,t,n){return I(this.secret!==void 0,e,`argument-error`),Cd(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){I(this.enrollmentId!==void 0&&this.otp!==void 0,e,`argument-error`);let n={verificationCode:this.otp};return rf(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}},ap=class e{constructor(e,t,n,r,i,a,o){this.sessionInfo=a,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,n){return new e(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let n=!1;return(op(e)||op(t))&&(n=!0),n&&(op(e)&&(e=this.auth.currentUser?.email||`unknownuser`),op(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function op(e){return e===void 0||e?.length===0}var sp=`@firebase/auth`,cp=`1.11.0`,lp=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,`dependent-sdk-initialized-before-auth`)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function up(e){switch(e){case`Node`:return`node`;case`ReactNative`:return`rn`;case`Worker`:return`webworker`;case`Cordova`:return`cordova`;case`WebExtension`:return`web-extension`;default:return}}function dp(e){Mc(new Hs(`auth`,(t,{options:n})=>{let r=t.getProvider(`app`).getImmediate(),i=t.getProvider(`heartbeat`),a=t.getProvider(`app-check-internal`),{apiKey:o,authDomain:s}=r.options;I(o&&!o.includes(`:`),`invalid-api-key`,{appName:r.name});let c={apiKey:o,authDomain:s,clientPlatform:e,apiHost:`identitytoolkit.googleapis.com`,tokenApiHost:`securetoken.googleapis.com`,apiScheme:`https`,sdkClientVersion:bu(e)},l=new wu(r,i,a,c);return Vu(l,n),l},`PUBLIC`).setInstantiationMode(`EXPLICIT`).setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider(`auth-internal`);r.initialize()})),Mc(new Hs(`auth-internal`,e=>{let t=Tu(e.getProvider(`auth`).getImmediate());return(e=>new lp(e))(t)},`PRIVATE`).setInstantiationMode(`EXPLICIT`)),Vc(sp,cp,up(e)),Vc(sp,cp,`esm2020`)}Ko(`authIdTokenMaxAge`);function fp(){return document.getElementsByTagName(`head`)?.[0]??document}Ou({loadJS(e){return new Promise((t,n)=>{let r=document.createElement(`script`);r.setAttribute(`src`,e),r.onload=t,r.onerror=e=>{let t=cl(`internal-error`);t.customData=e,n(t)},r.type=`text/javascript`,r.charset=`UTF-8`,fp().appendChild(r)})},gapiScript:`https://apis.google.com/js/api.js`,recaptchaV2Script:`https://www.google.com/recaptcha/api.js`,recaptchaEnterpriseScript:`https://www.google.com/recaptcha/enterprise.js?render=`}),dp(`Browser`);
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const pp=new Map,mp={activated:!1,tokenObservers:[]},hp={initialized:!1,enabled:!1};function gp(e){return pp.get(e)||{...mp}}function _p(){return hp}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const vp={OFFSET_DURATION:300*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var yp=class{constructor(e,t,n,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw Error(`Proactive refresh lower bound greater than upper bound!`)}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject(`cancelled`),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new qo,this.pending.promise.catch(e=>{}),await bp(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new qo,this.pending.promise.catch(e=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(e){this.retryPolicy(e)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{let e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}};function bp(e){return new Promise(t=>{setTimeout(t,e)})}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const xp={"already-initialized":`You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.`,"use-before-activation":`App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.`,"fetch-network-error":`Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.`,"fetch-parse-error":`Fetch client could not parse response. Original error: {$originalErrorMessage}.`,"fetch-status-error":`Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.`,"storage-open":`Error thrown when opening storage. Original error: {$originalErrorMessage}.`,"storage-get":`Error thrown when reading from storage. Original error: {$originalErrorMessage}.`,"storage-set":`Error thrown when writing to storage. Original error: {$originalErrorMessage}.`,"recaptcha-error":`ReCAPTCHA error.`,"initial-throttle":`{$httpStatus} error. Attempts allowed again after {$time}`,throttled:`Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}`},Sp=new gs(`appCheck`,`AppCheck`,xp);function Cp(e){if(!gp(e).activated)throw Sp.create(`use-before-activation`,{appName:e.name})}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
async function wp({url:e,body:t},n){let r={"Content-Type":`application/json`},i=n.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&(r[`X-Firebase-Client`]=e)}let a={method:`POST`,body:JSON.stringify(t),headers:r},o;try{o=await fetch(e,a)}catch(e){throw Sp.create(`fetch-network-error`,{originalErrorMessage:e?.message})}if(o.status!==200)throw Sp.create(`fetch-status-error`,{httpStatus:o.status});let s;try{s=await o.json()}catch(e){throw Sp.create(`fetch-parse-error`,{originalErrorMessage:e?.message})}let c=s.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw Sp.create(`fetch-parse-error`,{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${s.ttl}`});let l=Number(c[1])*1e3,u=Date.now();return{token:s.token,expireTimeMillis:u+l,issuedAtTimeMillis:u}}function Tp(e,t){let{projectId:n,appId:r,apiKey:i}=e.options;return{url:`https://content-firebaseappcheck.googleapis.com/v1/projects/${n}/apps/${r}:exchangeDebugToken?key=${i}`,body:{debug_token:t}}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Ep=`firebase-app-check-store`;let Dp=null;function Op(){return Dp||(Dp=new Promise((e,t)=>{try{let n=indexedDB.open(`firebase-app-check-database`,1);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{t(Sp.create(`storage-open`,{originalErrorMessage:e.target.error?.message}))},n.onupgradeneeded=e=>{let t=e.target.result;switch(e.oldVersion){case 0:t.createObjectStore(Ep,{keyPath:`compositeKey`})}}}catch(e){t(Sp.create(`storage-open`,{originalErrorMessage:e?.message}))}}),Dp)}function kp(e,t){return Ap(jp(e),t)}async function Ap(e,t){let n=await Op(),r=n.transaction(Ep,`readwrite`),i=r.objectStore(Ep),a=i.put({compositeKey:e,value:t});return new Promise((e,t)=>{a.onsuccess=t=>{e()},r.onerror=e=>{t(Sp.create(`storage-set`,{originalErrorMessage:e.target.error?.message}))}})}function jp(e){return`${e.options.appId}-${e.name}`}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Mp=new $s(`@firebase/app-check`);function Np(e,t){return ps()?kp(e,t).catch(e=>{Mp.warn(`Failed to write token to IndexedDB. Error: ${e}`)}):Promise.resolve()}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Pp(){let e=_p();return e.enabled}async function Fp(){let e=_p();if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Ip={error:`UNKNOWN_ERROR`};function Lp(e){return Ao.encodeString(JSON.stringify(e),!1)}async function Rp(e,t=!1,n=!1){let r=e.app;Cp(r);let i=gp(r),a=i.token,o;if(a&&!Gp(a)&&(i.token=void 0,a=void 0),!a){let e=await i.cachedTokenPromise;e&&(Gp(e)?a=e:await Np(r,void 0))}if(!t&&a&&Gp(a))return{token:a.token};let s=!1;if(Pp())try{i.exchangeTokenPromise||(i.exchangeTokenPromise=wp(Tp(r,await Fp()),e.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),s=!0);let t=await i.exchangeTokenPromise;return await Np(r,t),i.token=t,{token:t.token}}catch(e){return e.code===`appCheck/throttled`||e.code===`appCheck/initial-throttle`?Mp.warn(e.message):n&&Mp.error(e),Kp(e)}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),s=!0),a=await gp(r).exchangeTokenPromise}catch(e){e.code===`appCheck/throttled`||e.code===`appCheck/initial-throttle`?Mp.warn(e.message):n&&Mp.error(e),o=e}let c;return a?o?c=Gp(a)?{token:a.token,internalError:o}:Kp(o):(c={token:a.token},i.token=a,await Np(r,a)):c=Kp(o),s&&Wp(r,c),c}async function zp(e){let t=e.app;Cp(t);let{provider:n}=gp(t);if(Pp()){let n=await Fp(),{token:r}=await wp(Tp(t,n),e.heartbeatServiceProvider);return{token:r}}else{let{token:e}=await n.getToken();return{token:e}}}function Bp(e,t,n,r){let{app:i}=e,a=gp(i),o={next:n,error:r,type:t};if(a.tokenObservers=[...a.tokenObservers,o],a.token&&Gp(a.token)){let t=a.token;Promise.resolve().then(()=>{n({token:t.token}),Hp(e)}).catch(()=>{})}a.cachedTokenPromise.then(()=>Hp(e))}function Vp(e,t){let n=gp(e),r=n.tokenObservers.filter(e=>e.next!==t);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Hp(e){let{app:t}=e,n=gp(t),r=n.tokenRefresher;r||(r=Up(e),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function Up(e){let{app:t}=e;return new yp(async()=>{let n=gp(t),r;if(r=n.token?await Rp(e,!0):await Rp(e),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{let e=gp(t);if(e.token){let t=e.token.issuedAtTimeMillis+(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)*.5+300*1e3,n=e.token.expireTimeMillis-300*1e3;return t=Math.min(t,n),Math.max(0,t-Date.now())}else return 0},vp.RETRIAL_MIN_WAIT,vp.RETRIAL_MAX_WAIT)}function Wp(e,t){let n=gp(e).tokenObservers;for(let e of n)try{e.type===`EXTERNAL`&&t.error!=null?e.error(t.error):e.next(t)}catch{}}function Gp(e){return e.expireTimeMillis-Date.now()>0}function Kp(e){return{token:Lp(Ip),error:e}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qp=class{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){let{tokenObservers:e}=gp(this.app);for(let t of e)Vp(this.app,t.next);return Promise.resolve()}};function Jp(e,t){return new qp(e,t)}function Yp(e){return{getToken:t=>Rp(e,t),getLimitedUseToken:()=>zp(e),addTokenListener:t=>Bp(e,`INTERNAL`,t),removeTokenListener:t=>Vp(e.app,t)}}const Xp=`app-check-internal`;function Zp(){Mc(new Hs(`app-check`,e=>{let t=e.getProvider(`app`).getImmediate(),n=e.getProvider(`heartbeat`);return Jp(t,n)},`PUBLIC`).setInstantiationMode(`EXPLICIT`).setInstanceCreatedCallback((e,t,n)=>{e.getProvider(Xp).initialize()})),Mc(new Hs(Xp,e=>{let t=e.getProvider(`app-check`).getImmediate();return Yp(t)},`PUBLIC`).setInstantiationMode(`EXPLICIT`)),Vc(`@firebase/app-check`,`0.11.0`)}Zp();var Qp=`firebase`,$p=`12.0.0`;
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
Vc(Qp,$p,`app`);const em=Symbol(`firebaseApp`);function tm(e){return xa()&&$r(em,null)||Bc(e)}Object.prototype,Symbol.for(`v-scx`);const nm=new WeakMap;function rm(e,t){if(!nm.has(e)){let n=Me(!0);nm.set(e,n);let{unmount:r}=t;t.unmount=()=>{r.call(t),n.stop(),nm.delete(e)}}return nm.get(e)}const im=new WeakMap,am=new WeakMap;function om(e){let t=tm(e);if(!am.has(t)){let e,n=new Promise(t=>{e=t}),r=[n,n=>{am.set(t,n),e(n.value)}];am.set(t,r)}return am.get(t)}function sm(e,t){yd(t,t=>{let n=om();e.value=t,Array.isArray(n)&&n[1](e)})}Symbol(`app-check-token`);const cm=`@firebase/database`,lm=`1.1.0`;
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let um=``;function dm(e){um=e}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var fm=class{constructor(e){this.domStorage_=e,this.prefix_=`firebase:`}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),bs(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ys(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}},pm=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ws(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const mm=function(e){try{if(typeof window<`u`&&window[e]!==void 0){let t=window[e];return t.setItem(`firebase:sentinel`,`cache`),t.removeItem(`firebase:sentinel`),new fm(t)}}catch{}return new pm},hm=mm(`localStorage`),gm=mm(`sessionStorage`),_m=new $s(`@firebase/database`),vm=(function(){let e=1;return function(){return e++}})(),ym=function(e){let t=zs(e),n=new Ns;n.update(t);let r=n.digest();return Ao.encodeByteArray(r)},bm=function(...e){let t=``;for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)||r&&typeof r==`object`&&typeof r.length==`number`?t+=bm.apply(null,r):typeof r==`object`?t+=bs(r):t+=r,t+=` `}return t};let xm=null,Sm=!0;const Cm=function(e,t){P(!t||e===!0||e===!1,`Can't turn on custom loggers persistently.`),e===!0?(_m.logLevel=F.VERBOSE,xm=_m.log.bind(_m),t&&gm.set(`logging_enabled`,!0)):typeof e==`function`?xm=e:(xm=null,gm.remove(`logging_enabled`))},wm=function(...e){if(Sm===!0&&(Sm=!1,xm===null&&gm.get(`logging_enabled`)===!0&&Cm(!0)),xm){let t=bm.apply(null,e);xm(t)}},Tm=function(e){return function(...t){wm(e,...t)}},Em=function(...e){let t=`FIREBASE INTERNAL ERROR: `+bm(...e);_m.error(t)},Dm=function(...e){let t=`FIREBASE FATAL ERROR: ${bm(...e)}`;throw _m.error(t),Error(t)},Om=function(...e){let t=`FIREBASE WARNING: `+bm(...e);_m.warn(t)},km=function(){typeof window<`u`&&window.location&&window.location.protocol&&window.location.protocol.indexOf(`https:`)!==-1&&Om(`Insecure Firebase access from a secure page. Please use https in calls to new Firebase().`)},Am=function(e){return typeof e==`number`&&(e!==e||e===1/0||e===-1/0)},jm=function(e){if(ds()||document.readyState===`complete`)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,10);return}t||(t=!0,e())};document.addEventListener?(document.addEventListener(`DOMContentLoaded`,n,!1),window.addEventListener(`load`,n,!1)):document.attachEvent&&(document.attachEvent(`onreadystatechange`,()=>{document.readyState===`complete`&&n()}),window.attachEvent(`onload`,n))}},Mm=`[MIN_NAME]`,Nm=`[MAX_NAME]`,Pm=function(e,t){if(e===t)return 0;if(e===Mm||t===Nm)return-1;if(t===Mm||e===Nm)return 1;{let n=Wm(e),r=Wm(t);return n===null?r===null&&e<t?-1:1:r===null?-1:n-r===0?e.length-t.length:n-r}},Fm=function(e,t){return e===t?0:e<t?-1:1},Im=function(e,t){if(t&&e in t)return t[e];throw Error(`Missing required key (`+e+`) in object: `+bs(t))},Lm=function(e){if(typeof e!=`object`||!e)return bs(e);let t=[];for(let n in e)t.push(n);t.sort();let n=`{`;for(let r=0;r<t.length;r++)r!==0&&(n+=`,`),n+=bs(t[r]),n+=`:`,n+=Lm(e[t[r]]);return n+=`}`,n},Rm=function(e,t){let n=e.length;if(n<=t)return[e];let r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function zm(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Bm=function(e){P(!Am(e),`Invalid JSON number`);let t=1023,n,r,i,a,o;e===0?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,e=Math.abs(e),e>=2**(1-t)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=a+t,i=Math.round(e*2**(52-a)-2**52)):(r=0,i=Math.round(e/2**(1-t-52))));let s=[];for(o=52;o;--o)s.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;--o)s.push(r%2?1:0),r=Math.floor(r/2);s.push(n?1:0),s.reverse();let c=s.join(``),l=``;for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);e.length===1&&(e=`0`+e),l+=e}return l.toLowerCase()},Vm=function(){return!!(typeof window==`object`&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Hm=function(){return typeof Windows==`object`&&typeof Windows.UI==`object`},Um=RegExp(`^-?(0*)\\d{1,10}$`),Wm=function(e){if(Um.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Gm=function(e){try{e()}catch(e){setTimeout(()=>{let t=e.stack||``;throw Om(`Exception was thrown by user callback.`,t),e},0)}},Km=function(){let e=typeof window==`object`&&window.navigator&&window.navigator.userAgent||``;return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qm=function(e,t){let n=setTimeout(e,t);return typeof n==`number`&&typeof Deno<`u`&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n==`object`&&n.unref&&n.unref(),n};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Jm=class{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Pc(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),!this.appCheck&&t?.get().then(e=>this.appCheck=e)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Om(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}},Ym=class{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),!this.auth_&&n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&e.code===`auth/token-not-initialized`?(wm(`Got auth/token-not-initialized error.  Treating as null token.`),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e=`Provided authentication credentials for the app named "`+this.appName_+`" are invalid. This usually indicates your app was not initialized correctly. `;`credential`in this.firebaseOptions_?e+=`Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.`:`serviceAccount`in this.firebaseOptions_?e+=`Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.`:e+=`Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.`,Om(e)}},Xm=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};Xm.OWNER=`owner`;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Zm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Qm=`websocket`,$m=`long_polling`;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eh=class{constructor(e,t,n,r,i=!1,a=``,o=!1,s=!1,c=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=a,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=s,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(`.`)+1),this.internalHost=hm.get(`host:`+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)===`s-`}isCustomHost(){return this._domain!==`firebaseio.com`&&this._domain!==`firebaseio-demo.com`}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hm.set(`host:`+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+=`<`+this.persistenceKey+`>`),e}toURLString(){let e=this.secure?`https://`:`http://`,t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:``;return`${e}${this.host}/${t}`}};function th(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function nh(e,t,n){P(typeof t==`string`,`typeof type must == string`),P(typeof n==`object`,`typeof params must == object`);let r;if(t===Qm)r=(e.secure?`wss://`:`ws://`)+e.internalHost+`/.ws?`;else if(t===$m)r=(e.secure?`https://`:`http://`)+e.internalHost+`/.lp?`;else throw Error(`Unknown connection type: `+t);th(e)&&(n.ns=e.namespace);let i=[];return zm(n,(e,t)=>{i.push(e+`=`+t)}),r+i.join(`&`)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var rh=class{constructor(){this.counters_={}}incrementCounter(e,t=1){ws(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Fo(this.counters_)}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const ih={},ah={};function oh(e){let t=e.toString();return ih[t]||(ih[t]=new rh),ih[t]}function sh(e,t){let n=e.toString();return ah[n]||(ah[n]=t()),ah[n]}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ch=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Gm(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const lh=`start`,uh=1870;uh-30;var dh=class e{constructor(e,t,n,r,i,a,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=a,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tm(e),this.stats_=oh(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),nh(t,$m,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ch(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_(`Timed out trying to connect.`),this.onClosed_(),this.connectTimeoutTimer_=null},3e4),jm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fh((...e)=>{let[t,n,r,i,a]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===lh)this.id=n,this.password=r;else if(t===`close`)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error(`Unrecognized command received: `+t)},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[lh]=`t`,e.ser=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=`5`,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),typeof location<`u`&&location.hostname&&Zm.test(location.hostname)&&(e.r=`f`);let t=this.urlFn(e);this.log_(`Connecting via long-poll to `+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){e.forceAllow_=!0}static forceDisallow(){e.forceDisallow_=!0}static isAvailable(){return ds()?!1:e.forceAllow_?!0:!e.forceDisallow_&&typeof document<`u`&&document.createElement!=null&&!Vm()&&!Hm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_(`Longpoll is closing itself`),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_(`Longpoll is being closed.`),this.shutdown_())}send(e){let t=bs(e);this.bytesSent+=t.length,this.stats_.incrementCounter(`bytes_sent`,t.length);let n=Mo(t),r=Rm(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(ds())return;this.myDisconnFrame=document.createElement(`iframe`);let n={};n.dframe=`t`,n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display=`none`,document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=bs(e).length;this.bytesReceived+=t,this.stats_.incrementCounter(`bytes_received`,t)}},fh=class e{constructor(t,n,r,i){if(this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0,!ds()){this.uniqueCallbackIdentifier=vm(),window[`pLPCommand`+this.uniqueCallbackIdentifier]=t,window[`pRTLPCB`+this.uniqueCallbackIdentifier]=n,this.myIFrame=e.createIFrame_();let r=``;if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)===`javascript:`){let e=document.domain;r=`<script>document.domain="`+e+`";<\/script>`}let i=`<html><body>`+r+`</body></html>`;try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){wm(`frame writing exception`),e.stack&&wm(e.stack),wm(e)}}else this.commandCB=t,this.onMessageCB=n}static createIFrame_(){let e=document.createElement(`iframe`);if(e.style.display=`none`,document.body){document.body.appendChild(e);try{let t=e.contentWindow.document;t||wm(`No IE domain setting required`)}catch{let t=document.domain;e.src=`javascript:void((function(){document.open();document.domain='`+t+`';document.close();})())`}}else throw`Document body has not initialized. Wait to initialize Firebase until after the document is ready.`;return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent=``,setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},0));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n=``,r=0;for(;this.pendingSegs.length>0;){let e=this.pendingSegs[0];if(e.d.length+30+n.length<=uh){let e=this.pendingSegs.shift();n=n+`&seg`+r+`=`+e.seg+`&ts`+r+`=`+e.ts+`&d`+r+`=`+e.d,r++}else break}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,25e3),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){ds()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement(`script`);n.type=`text/javascript`,n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;(!e||e===`loaded`||e===`complete`)&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{wm(`Long-poll script failed to load: `+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},1)}};let ph=null;typeof MozWebSocket<`u`?ph=MozWebSocket:typeof WebSocket<`u`&&(ph=WebSocket);var mh=class e{constructor(t,n,r,i,a,o,s){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tm(this.connId),this.stats_=oh(n),this.connURL=e.connectionURL_(n,o,s,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,t,n,r,i){let a={};return a.v=`5`,!ds()&&typeof location<`u`&&location.hostname&&Zm.test(location.hostname)&&(a.r=`f`),t&&(a.s=t),n&&(a.ls=n),r&&(a.ac=r),i&&(a.p=i),nh(e,Qm,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_(`Websocket connecting to `+this.connURL),this.everConnected_=!1,hm.set(`previous_websocket_failure`,!0);try{let e;if(ds()){let t=this.nodeAdmin?`AdminNode`:`Node`;e={headers:{"User-Agent":`Firebase/5/${um}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||``}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers[`X-Firebase-AppCheck`]=this.appCheckToken);let n={},r=this.connURL.indexOf(`wss://`)===0?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new ph(this.connURL,[],e)}catch(e){this.log_(`Error instantiating WebSocket.`);let t=e.message||e.data;t&&this.log_(t),this.onClosed_();return}this.mySock.onopen=()=>{this.log_(`Websocket connected.`),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_(`Websocket connection was disconnected.`),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_(`WebSocket error.  Closing connection.`);let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){e.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<`u`&&navigator.userAgent){let e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&ph!==null&&!e.forceDisallow_}static previouslyFailed(){return hm.isInMemoryStorage||hm.get(`previous_websocket_failure`)===!0}markConnectionHealthy(){hm.remove(`previous_websocket_failure`)}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join(``);this.frames=null;let t=ys(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,`We already have a frame buffer`),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter(`bytes_received`,t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);e!==null&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=bs(e);this.bytesSent+=t.length,this.stats_.incrementCounter(`bytes_sent`,t.length);let n=Rm(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_(`WebSocket is closing itself`),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_(`WebSocket is being closed`),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_(`0`),this.resetKeepAlive()},45e3)}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_(`Exception thrown from WebSocket.send():`,e.message||e.data,`Closing connection.`),setTimeout(this.onClosed_.bind(this),0)}}};mh.responsesRequiredToBeHealthy=2,mh.healthyTimeout=3e4;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hh=class e{static get ALL_TRANSPORTS(){return[dh,mh]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(t){let n=mh&&mh.isAvailable(),r=n&&!mh.previouslyFailed();if(t.webSocketOnly&&(n||Om(`wss:// URL used, but browser isn't known to support websockets.  Trying anyway.`),r=!0),r)this.transports_=[mh];else{let t=this.transports_=[];for(let n of e.ALL_TRANSPORTS)n&&n.isAvailable()&&t.push(n);e.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error(`No transports available`)}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};hh.globalTransportInitialized_=!1;var gh=class{constructor(e,t,n,r,i,a,o,s,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=a,this.onReady_=o,this.onDisconnect_=s,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tm(`c:`+this.id+`:`),this.transportManager_=new hh(t),this.log_(`Connection created`),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},0);let r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=qm(()=>{this.healthyTimeout_=null,!this.isHealthy_&&(this.conn_&&this.conn_.bytesReceived>102400?(this.log_(`Connection exceeded healthy timeout but has received `+this.conn_.bytesReceived+` bytes.  Marking connection healthy.`),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_(`Connection exceeded healthy timeout but has sent `+this.conn_.bytesSent+` bytes.  Leaving connection alive.`):(this.log_(`Closing unhealthy connection after timeout.`),this.close()))},Math.floor(r)))}nextTransportId_(){return`c:`+this.id+`:`+ this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_(`Secondary connection lost.`),this.onSecondaryConnectionLost_()):this.log_(`closing an old connection`)}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_(`message on old connection`))}}sendRequest(e){let t={t:`d`,d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_(`cleaning up and promoting a connection: `+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(`t`in e){let t=e.t;t===`a`?this.upgradeIfSecondaryHealthy_():t===`r`?(this.log_(`Got a reset on secondary, closing it`),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===`o`&&(this.log_(`got pong on secondary.`),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=Im(`t`,e),n=Im(`d`,e);if(t===`c`)this.onSecondaryControl_(n);else if(t===`d`)this.pendingDataMessages.push(n);else throw Error(`Unknown protocol layer: `+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_(`Secondary connection is healthy.`),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_(`sending ping on secondary.`),this.secondaryConn_.send({t:`c`,d:{t:`p`,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_(`sending client ack on secondary`),this.secondaryConn_.send({t:`c`,d:{t:`a`,d:{}}}),this.log_(`Ending transmission on primary`),this.conn_.send({t:`c`,d:{t:`n`,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=Im(`t`,e),n=Im(`d`,e);t===`c`?this.onControl_(n):t===`d`&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_(`Primary connection is healthy.`),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=Im(`t`,e);if(`d`in e){let n=e.d;if(t===`h`){let e={...n};this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===`n`){this.log_(`recvd end transmission on primary`),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===`s`?this.onConnectionShutdown_(n):t===`r`?this.onReset_(n):t===`e`?Em(`Server Error: `+n):t===`o`?(this.log_(`got pong on primary.`),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Em(`Unknown control packet command: `+t)}}onHandshake_(e){let t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),n!==`5`&&Om(`Protocol version mismatch detected`),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),qm(()=>{this.secondaryConn_&&(this.log_(`Timed out trying to upgrade.`),this.secondaryConn_.close())},6e4)}onReset_(e){this.log_(`Reset packet received.  New host: `+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_(`Realtime connection established.`),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_(`Primary connection is healthy.`),this.isHealthy_=!0):qm(()=>{this.sendPingOnPrimaryIfNecessary_()},5e3)}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_(`sending ping on primary.`),this.sendData_({t:`c`,d:{t:`p`,d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_(`Realtime connection failed.`),this.repoInfo_.isCacheableHost()&&(hm.remove(`host:`+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_(`Realtime connection lost.`),this.close()}onConnectionShutdown_(e){this.log_(`Connection shutdown command received. Shutting down...`),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw`Connection is not connected`;this.tx_.send(e)}close(){this.state_!==2&&(this.log_(`Closing realtime connection.`),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_(`Shutting down all connections`),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}},_h=class{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}},vh=class{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,`Requires a non-empty array`)}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);let r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context)){r.splice(e,1);return}}validateEventType_(e){P(this.allowedEvents_.find(t=>t===e),`Unknown event: `+e)}},yh=class e extends vh{static getInstance(){return new e}constructor(){super([`online`]),this.online_=!0,typeof window<`u`&&window.addEventListener!==void 0&&!rs()&&(window.addEventListener(`online`,()=>{this.online_||(this.online_=!0,this.trigger(`online`,!0))},!1),window.addEventListener(`offline`,()=>{this.online_&&(this.online_=!1,this.trigger(`online`,!1))},!1))}getInitialEvent(e){return P(e===`online`,`Unknown event type: `+e),[this.online_]}currentlyOnline(){return this.online_}},L=class{constructor(e,t){if(t===void 0){this.pieces_=e.split(`/`);let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e=``;for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==``&&(e+=`/`+this.pieces_[t]);return e||`/`}};function R(){return new L(``)}function z(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function bh(e){return e.pieces_.length-e.pieceNum_}function B(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new L(e.pieces_,t)}function xh(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Sh(e){let t=``;for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==``&&(t+=`/`+encodeURIComponent(String(e.pieces_[n])));return t||`/`}function Ch(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function wh(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new L(t,0)}function Th(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof L)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split(`/`);for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new L(n,0)}function V(e){return e.pieceNum_>=e.pieces_.length}function Eh(e,t){let n=z(e),r=z(t);if(n===null)return t;if(n===r)return Eh(B(e),B(t));throw Error(`INTERNAL ERROR: innerPath (`+t+`) is not within outerPath (`+e+`)`)}function Dh(e,t){if(bh(e)!==bh(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Oh(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(bh(e)>bh(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var kh=class{constructor(e,t){this.errorPrefix_=t,this.parts_=Ch(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Bs(this.parts_[e]);Mh(this)}};function Ah(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Bs(t),Mh(e)}function jh(e){let t=e.parts_.pop();e.byteLength_-=Bs(t),e.parts_.length>0&&--e.byteLength_}function Mh(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+`has a key path longer than 768 bytes (`+e.byteLength_+`).`);if(e.parts_.length>32)throw Error(e.errorPrefix_+`path specified exceeds the maximum depth that can be written (32) or object contains a cycle `+Nh(e))}function Nh(e){return e.parts_.length===0?``:`in property '`+e.parts_.join(`.`)+`'`}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ph=class e extends vh{static getInstance(){return new e}constructor(){super([`visible`]);let e,t;typeof document<`u`&&document.addEventListener!==void 0&&(document.hidden===void 0?document.mozHidden===void 0?document.msHidden===void 0?document.webkitHidden!==void 0&&(t=`webkitvisibilitychange`,e=`webkitHidden`):(t=`msvisibilitychange`,e=`msHidden`):(t=`mozvisibilitychange`,e=`mozHidden`):(t=`visibilitychange`,e=`hidden`)),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger(`visible`,t))},!1)}getInitialEvent(e){return P(e===`visible`,`Unknown event type: `+e),[this.visible_]}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Fh=1e3,Ih=30*1e3;var Lh=class e extends _h{constructor(t,n,r,i,a,o,s,c){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=a,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=c,this.id=e.nextPersistentConnectionId_++,this.log_=Tm(`p:`+this.id+`:`),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fh,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!ds())throw Error(`Auth override specified in options, but not supported on non Node.js platforms`);Ph.getInstance().on(`visible`,this.onVisible_,this),t.host.indexOf(`fblocal`)===-1&&yh.getInstance().on(`online`,this.onOnline_,this)}sendRequest(e,t,n){let r=++this.requestNumber_,i={r,a:e,b:t};this.log_(bs(i)),P(this.connected_,`sendRequest call when we're not connected not allowed.`),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();let t=new qo,n={p:e._path.toString(),q:e._queryObject},r={action:`g`,request:n,onComplete:e=>{let n=e.d;e.s===`ok`?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();let i=e._queryIdentifier,a=e._path.toString();this.log_(`Listen called for `+a+` `+i),!this.listens.has(a)&&this.listens.set(a,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),`listen() called for non-default but complete query`),P(!this.listens.get(a).has(i),`listen() called twice for same path/queryId.`);let o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest(`g`,t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(t){let n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_(`Listen on `+r+` for `+i);let a={p:r};t.tag&&(a.q=n._queryObject,a.t=t.tag),a.h=t.hashFn(),this.sendRequest(`q`,a,a=>{let o=a.d,s=a.s;e.warnOnListenWarnings_(o,n);let c=this.listens.get(r)&&this.listens.get(r).get(i);c===t&&(this.log_(`listen response`,a),s!==`ok`&&this.removeListen_(r,i),t.onComplete&&t.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&typeof e==`object`&&ws(e,`w`)){let n=Ts(e,`w`);if(Array.isArray(n)&&~n.indexOf(`no_index`)){let e=`".indexOn": "`+t._queryParams.getIndex().toString()+`"`,n=t._path.toString();Om(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_(`Auth token refreshed`),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest(`unauth`,{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){let t=e&&e.length===40;(t||Cs(e))&&(this.log_(`Admin auth credential detected.  Reducing max reconnect time.`),this.maxReconnectDelay_=Ih)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_(`App check token refreshed`),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest(`unappeck`,{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=Ss(e)?`auth`:`gauth`,n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_==`object`&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,r=t.d||`error`;this.authToken_===e&&(n===`ok`?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest(`appcheck`,{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||`error`;t===`ok`?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),r=e._queryIdentifier;this.log_(`Unlisten called for `+n+` `+r),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),`unlisten() called for non-default but complete query`);let i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_(`Unlisten on `+e+` for `+t);let i={p:e};r&&(i.q=n,i.t=r),this.sendRequest(`n`,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`o`,e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:`o`,data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`om`,e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:`om`,data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_(`oc`,e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:`oc`,data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){let i={p:t,d:n};this.log_(`onDisconnect `+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e.s,e.d)},0)})}put(e,t,n,r){this.putInternal(`p`,e,t,n,r)}merge(e,t,n,r){this.putInternal(`m`,e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();let a={p:t,d:n};i!==void 0&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_(`Buffering put: `+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+` response`,n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_(`reportStats`,t),this.sendRequest(`s`,t,e=>{let t=e.s;if(t!==`ok`){let t=e.d;this.log_(`reportStats`,`Error sending stats: `+t)}})}}onDataMessage_(e){if(`r`in e){this.log_(`from server: `+bs(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if(`error`in e)throw`A server-side error has occurred: `+e.error;else `a`in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_(`handleServerMessage`,e,t),e===`d`?this.onDataUpdate_(t.p,t.d,!1,t.t):e===`m`?this.onDataUpdate_(t.p,t.d,!0,t.t):e===`c`?this.onListenRevoked_(t.p,t.q):e===`ac`?this.onAuthRevoked_(t.s,t.d):e===`apc`?this.onAppCheckRevoked_(t.s,t.d):e===`sd`?this.onSecurityDebugPacket_(t):Em(`Unrecognized action received from server: `+bs(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_(`connection ready`),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,`Scheduling a connect when we're already connected/ing?`),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_(`Window became visible.  Reducing delay.`),this.reconnectDelay_=Fh,!this.realtime_&&this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_(`Browser went online.`),this.reconnectDelay_=Fh,!this.realtime_&&this.scheduleConnect_(0)):(this.log_(`Browser went offline.  Killing connection.`),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_(`data client disconnected`),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(!this.visible_)this.log_(`Window isn't visible.  Delaying reconnect.`),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();else if(this.lastConnectionEstablishedTime_){let e=new Date().getTime()-this.lastConnectionEstablishedTime_;e>3e4&&(this.reconnectDelay_=Fh),this.lastConnectionEstablishedTime_=null}let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_(`Trying to reconnect in `+t+`ms`),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*1.3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_(`Making a connection attempt`),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+`:`+ e.nextConnectionId_++,a=this.lastSessionId,o=!1,s=null,c=function(){s?s.close():(o=!0,r())},l=function(e){P(s,`sendRequest call when we're not connected not allowed.`),s.sendRequest(e)};this.realtime_={close:c,sendRequest:l};let u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[e,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?wm(`getToken() completed but was canceled`):(wm(`getToken() completed. Creating connection.`),this.authToken_=e&&e.accessToken,this.appCheckToken_=c&&c.token,s=new gh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,e=>{Om(e+` (`+this.repoInfo_.toString()+`)`),this.interrupt(`server_kill`)},a))}catch(e){this.log_(`Failed to get token: `+e),!o&&(this.repoInfo_.nodeAdmin&&Om(e),c())}}}interrupt(e){wm(`Interrupting connection for reason: `+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wm(`Resuming connection for reason: `+e),delete this.interruptReasons_[e],Es(this.interruptReasons_)&&(this.reconnectDelay_=Fh,!this.realtime_&&this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&`h`in t.request&&t.queued&&(t.onComplete&&t.onComplete(`disconnect`),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>Lm(e)).join(`$`):`default`;let r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete(`permission_denied`)}removeListen_(e,t){let n=new L(e).toString(),r;if(this.listens.has(n)){let e=this.listens.get(n);r=e.get(t),e.delete(t),e.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){wm(`Auth token revoked: `+e+`/`+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e===`invalid_token`||e===`permission_denied`)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=Ih,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){wm(`App check token revoked: `+e+`/`+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e===`invalid_token`||e===`permission_denied`)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):`msg`in e&&console.log(`FIREBASE: `+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(let e of this.listens.values())for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t=`js`;ds()&&(t=this.repoInfo_.nodeAdmin?`admin_node`:`node`),e[`sdk.`+t+`.`+um.replace(/\./g,`-`)]=1,rs()?e[`framework.cordova`]=1:ls()&&(e[`framework.reactnative`]=1),this.reportStats(e)}shouldReconnect_(){let e=yh.getInstance().currentlyOnline();return Es(this.interruptReasons_)&&e}};Lh.nextPersistentConnectionId_=0,Lh.nextConnectionId_=0;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var H=class e{constructor(e,t){this.name=e,this.node=t}static Wrap(t,n){return new e(t,n)}},Rh=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new H(Mm,e),r=new H(Mm,t);return this.compare(n,r)!==0}minPost(){return H.MIN}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let zh;var Bh=class extends Rh{static get __EMPTY_NODE(){return zh}static set __EMPTY_NODE(e){zh=e}compare(e,t){return Pm(e.name,t.name)}isDefinedOn(e){throw Do(`KeyIndex.isDefinedOn not expected to be called.`)}indexedValueChanged(e,t){return!1}minPost(){return H.MIN}maxPost(){return new H(Nm,zh)}makePost(e,t){return P(typeof e==`string`,`KeyIndex indexValue must always be a string.`),new H(e,zh)}toString(){return`.key`}};const Vh=new Bh;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hh=class{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?n(e.key,t):1,r&&(a*=-1),a<0)e=this.isReverse_?e.left:e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Uh=class e{constructor(t,n,r,i,a){this.key=t,this.value=n,this.color=r??e.RED,this.left=i??Gh.EMPTY_NODE,this.right=a??Gh.EMPTY_NODE}copy(t,n,r,i,a){return new e(t??this.key,n??this.value,r??this.color,i??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gh.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return Gh.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){let t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){let t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return 2**e<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error(`Red node has red child(`+this.key+`,`+this.value+`)`);if(this.right.isRed_())throw Error(`Right child of (`+this.key+`,`+this.value+`) is red`);let e=this.left.check_();if(e!==this.right.check_())throw Error(`Black depths differ`);return e+(this.isRed_()?0:1)}};Uh.RED=!0,Uh.BLACK=!1;var Wh=class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Uh(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},Gh=class e{constructor(t,n=e.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Uh.BLACK,null,null))}remove(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Uh.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw Error(`Attempted to find predecessor key for a nonexistent key.  What gives?`)}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Hh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Hh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Hh(this.root_,null,this.comparator_,!0,e)}};Gh.EMPTY_NODE=new Wh;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Kh(e,t){return Pm(e.name,t.name)}function qh(e,t){return Pm(e,t)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let Jh;function Yh(e){Jh=e}const Xh=function(e){return typeof e==`number`?`number:`+Bm(e):`string:`+e},Zh=function(e){if(e.isLeafNode()){let t=e.val();P(typeof t==`string`||typeof t==`number`||typeof t==`object`&&ws(t,`.sv`),`Priority must be a string or number.`)}else P(e===Jh||e.isEmpty(),`priority of unexpected type.`);P(e===Jh||e.getPriority().isEmpty(),`Priority nodes can't have a priority of their own.`)};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let Qh;var $h=class e{static set __childrenNodeConstructor(e){Qh=e}static get __childrenNodeConstructor(){return Qh}constructor(t,n=e.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,`LeafNode shouldn't be created with null/undefined value.`),Zh(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new e(this.value_,t)}getImmediateChild(t){return t===`.priority`?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return V(t)?this:z(t)===`.priority`?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(t,n){return t===`.priority`?this.updatePriority(n):n.isEmpty()&&t!==`.priority`?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){let r=z(t);return r===null?n:n.isEmpty()&&r!==`.priority`?this:(P(r!==`.priority`||bh(t)===1,`.priority must be the last token in a path`),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(B(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e=``;this.priorityNode_.isEmpty()||(e+=`priority:`+Xh(this.priorityNode_.val())+`:`);let t=typeof this.value_;e+=t+`:`,t===`number`?e+=Bm(this.value_):e+=this.value_,this.lazyHash_=ym(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(P(t.isLeafNode(),`Unknown node type`),this.compareToLeafNode_(t))}compareToLeafNode_(t){let n=typeof t.value_,r=typeof this.value_,i=e.VALUE_TYPE_ORDER.indexOf(n),a=e.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,`Unknown leaf type: `+n),P(a>=0,`Unknown leaf type: `+r),i===a?r===`object`?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:a-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};$h.VALUE_TYPE_ORDER=[`object`,`boolean`,`number`,`string`];
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let eg,tg;function ng(e){eg=e}function rg(e){tg=e}var ig=class extends Rh{compare(e,t){let n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return i===0?Pm(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Nm,new $h(`[PRIORITY-POST]`,tg))}makePost(e,t){let n=eg(e);return new H(t,new $h(`[PRIORITY-POST]`,n))}toString(){return`.priority`}};const ag=new ig,og=Math.log(2);var sg=class{constructor(e){let t=e=>parseInt(Math.log(e)/og,10),n=e=>parseInt(Array(e+1).join(`1`),2);this.count=t(e+1),this.current_=this.count-1;let r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}};const cg=function(e,t,n,r){e.sort(t);let i=function(t,r){let a=r-t,o,s;if(a===0)return null;if(a===1)return o=e[t],s=n?n(o):o,new Uh(s,o.node,Uh.BLACK,null,null);{let c=parseInt(a/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],s=n?n(o):o,new Uh(s,o.node,Uh.BLACK,l,u)}},a=function(t){let r=null,a=null,o=e.length,s=function(t,r){let a=o-t,s=o;o-=t;let l=i(a+1,s),u=e[a],d=n?n(u):u;c(new Uh(d,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(a=e,r=e)};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),r=2**(t.count-(e+1));n?s(r,Uh.BLACK):(s(r,Uh.BLACK),s(r,Uh.RED))}return a},o=new sg(e.length),s=a(o);return new Gh(r||t,s)};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let lg;const ug={};var dg=class e{static get Default(){return P(ug&&ag,`ChildrenNode.ts has not been loaded`),lg||=new e({".priority":ug},{".priority":ag}),lg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=Ts(this.indexes_,e);if(!t)throw Error(`No index defined for `+e);return t instanceof Gh?t:null}hasIndex(e){return ws(this.indexSet_,e.toString())}addIndex(t,n){P(t!==Vh,`KeyIndex always exists and isn't meant to be added to the IndexMap.`);let r=[],i=!1,a=n.getIterator(H.Wrap),o=a.getNext();for(;o;)i||=t.isDefinedOn(o.node),r.push(o),o=a.getNext();let s;s=i?cg(r,t.getCompare()):ug;let c=t.toString(),l={...this.indexSet_};l[c]=t;let u={...this.indexes_};return u[c]=s,new e(u,l)}addToIndexes(t,n){let r=Ds(this.indexes_,(e,r)=>{let i=Ts(this.indexSet_,r);if(P(i,`Missing index implementation for `+r),e===ug)if(i.isDefinedOn(t.node)){let e=[],r=n.getIterator(H.Wrap),a=r.getNext();for(;a;)a.name!==t.name&&e.push(a),a=r.getNext();return e.push(t),cg(e,i.getCompare())}else return ug;else{let r=n.get(t.name),i=e;return r&&(i=i.remove(new H(t.name,r))),i.insert(t,t.node)}});return new e(r,this.indexSet_)}removeFromIndexes(t,n){let r=Ds(this.indexes_,e=>{if(e===ug)return e;{let r=n.get(t.name);return r?e.remove(new H(t.name,r)):e}});return new e(r,this.indexSet_)}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let fg;var U=class e{static get EMPTY_NODE(){return fg||=new e(new Gh(qh),null,dg.Default)}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zh(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),`An empty node cannot have a priority`)}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fg}updatePriority(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)}getImmediateChild(e){if(e===`.priority`)return this.getPriority();{let t=this.children_.get(e);return t===null?fg:t}}getChild(e){let t=z(e);return t===null?this:this.getImmediateChild(t).getChild(B(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(t,n){if(P(n,`We should always be passing snapshot nodes`),t===`.priority`)return this.updatePriority(n);{let r=new H(t,n),i,a;n.isEmpty()?(i=this.children_.remove(t),a=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),a=this.indexMap_.addToIndexes(r,this.children_));let o=i.isEmpty()?fg:this.priorityNode_;return new e(i,o,a)}}updateChild(e,t){let n=z(e);if(n===null)return t;{P(z(e)!==`.priority`||bh(e)===1,`.priority must be the last token in a path`);let r=this.getImmediateChild(n).updateChild(B(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;let n={},r=0,i=0,a=!0;if(this.forEachChild(ag,(o,s)=>{n[o]=s.val(t),r++,a&&e.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1}),!t&&a&&i<2*r){let e=[];for(let t in n)e[t]=n[t];return e}else return t&&!this.getPriority().isEmpty()&&(n[`.priority`]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e=``;this.getPriority().isEmpty()||(e+=`priority:`+Xh(this.getPriority().val())+`:`),this.forEachChild(ag,(t,n)=>{let r=n.hash();r!==``&&(e+=`:`+t+`:`+r)}),this.lazyHash_=e===``?``:ym(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let r=this.resolveIndex_(n);if(r){let n=r.getPredecessorKey(new H(e,t));return n?n.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){let t=this.resolveIndex_(e);if(t){let e=t.minKey();return e&&e.name}else return this.children_.minKey()}getFirstChild(e){let t=this.getFirstChildName(e);return t?new H(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(t){let e=t.maxKey();return e&&e.name}else return this.children_.maxKey()}getLastChild(e){let t=this.getLastChildName(e);return t?new H(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,H.Wrap),r=n.peek();for(;r!=null&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,H.Wrap),r=n.peek();for(;r!=null&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mg?-1:0}withIndex(t){if(t===Vh||this.indexMap_.hasIndex(t))return this;{let n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vh||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(!this.getPriority().equals(t.getPriority()))return!1;if(this.children_.count()===t.children_.count()){let e=this.getIterator(ag),n=t.getIterator(ag),r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return r===null&&i===null}else return!1}}resolveIndex_(e){return e===Vh?null:this.indexMap_.get(e.toString())}};U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var pg=class extends U{constructor(){super(new Gh(qh),U.EMPTY_NODE,dg.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}};const mg=new pg;Object.defineProperties(H,{MIN:{value:new H(Mm,U.EMPTY_NODE)},MAX:{value:new H(Nm,mg)}}),Bh.__EMPTY_NODE=U.EMPTY_NODE,$h.__childrenNodeConstructor=U,Yh(mg),rg(mg);function hg(e,t=null){if(e===null)return U.EMPTY_NODE;if(typeof e==`object`&&`.priority`in e&&(t=e[`.priority`]),P(t===null||typeof t==`string`||typeof t==`number`||typeof t==`object`&&`.sv`in t,`Invalid priority type found: `+typeof t),typeof e==`object`&&`.value`in e&&e[`.value`]!==null&&(e=e[`.value`]),typeof e!=`object`||`.sv`in e){let n=e;return new $h(n,hg(t))}if(e instanceof Array){let n=U.EMPTY_NODE;return zm(e,(t,r)=>{if(ws(e,t)&&t.substring(0,1)!==`.`){let e=hg(r);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(hg(t))}else{let n=[],r=!1,i=e;if(zm(i,(e,t)=>{if(e.substring(0,1)!==`.`){let i=hg(t);i.isEmpty()||(r||=!i.getPriority().isEmpty(),n.push(new H(e,i)))}}),n.length===0)return U.EMPTY_NODE;let a=cg(n,Kh,e=>e.name,qh);if(r){let e=cg(n,ag.getCompare());return new U(a,hg(t),new dg({".priority":e},{".priority":ag}))}else return new U(a,hg(t),dg.Default)}}ng(hg);
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gg=class extends Rh{constructor(e){super(),this.indexPath_=e,P(!V(e)&&z(e)!==`.priority`,`Can't create PathIndex with empty path or .priority key`)}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return i===0?Pm(e.name,t.name):i}makePost(e,t){let n=hg(e),r=U.EMPTY_NODE.updateChild(this.indexPath_,n);return new H(t,r)}maxPost(){let e=U.EMPTY_NODE.updateChild(this.indexPath_,mg);return new H(Nm,e)}toString(){return Ch(this.indexPath_,0).join(`/`)}},_g=class extends Rh{compare(e,t){let n=e.node.compareTo(t.node);return n===0?Pm(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,t){let n=hg(e);return new H(t,n)}toString(){return`.value`}};const vg=new _g;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function yg(e){return{type:`value`,snapshotNode:e}}function bg(e,t){return{type:`child_added`,snapshotNode:t,childName:e}}function xg(e,t){return{type:`child_removed`,snapshotNode:t,childName:e}}function Sg(e,t,n){return{type:`child_changed`,snapshotNode:t,childName:e,oldSnap:n}}function Cg(e,t){return{type:`child_moved`,snapshotNode:t,childName:e}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wg=class e{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_=``,this.indexStartValue_=null,this.indexStartName_=``,this.indexEndValue_=null,this.indexEndName_=``,this.index_=ag}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===``?this.startSet_:this.viewFrom_===`l`}getIndexStartValue(){return P(this.startSet_,`Only valid if start has been set`),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,`Only valid if start has been set`),this.startNameSet_?this.indexStartName_:Mm}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,`Only valid if end has been set`),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,`Only valid if end has been set`),this.endNameSet_?this.indexEndName_:Nm}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==``}getLimit(){return P(this.limitSet_,`Only valid if limit has been set`),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ag}copy(){let t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}};function Tg(e){let t={};if(e.isDefault())return t;let n;if(e.index_===ag?n=`$priority`:e.index_===vg?n=`$value`:e.index_===Vh?n=`$key`:(P(e.index_ instanceof gg,`Unrecognized index type!`),n=e.index_.toString()),t.orderBy=bs(n),e.startSet_){let n=e.startAfterSet_?`startAfter`:`startAt`;t[n]=bs(e.indexStartValue_),e.startNameSet_&&(t[n]+=`,`+bs(e.indexStartName_))}if(e.endSet_){let n=e.endBeforeSet_?`endBefore`:`endAt`;t[n]=bs(e.indexEndValue_),e.endNameSet_&&(t[n]+=`,`+bs(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Eg(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===``&&(n=e.isViewFromLeft()?`l`:`r`),t.vf=n}return e.index_!==ag&&(t.i=e.index_.toString()),t}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Dg=class e extends _h{reportStats(e){throw Error(`Method not implemented.`)}static getListenId_(e,t){return t===void 0?(P(e._queryParams.isDefault(),`should have a tag if it's not a default query.`),e._path.toString()):`tag$`+t}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Tm(`p:rest:`),this.listens_={}}listen(t,n,r,i){let a=t._path.toString();this.log_(`Listen called for `+a+` `+t._queryIdentifier);let o=e.getListenId_(t,r),s={};this.listens_[o]=s;let c=Tg(t._queryParams);this.restRequest_(a+`.json`,c,(e,t)=>{let n=t;if(e===404&&(n=null,e=null),e===null&&this.onDataUpdate_(a,n,!1,r),Ts(this.listens_,o)===s){let t;t=e?e===401?`permission_denied`:`rest_error:`+e:`ok`,i(t,null)}})}unlisten(t,n){let r=e.getListenId_(t,n);delete this.listens_[r]}get(e){let t=Tg(e._queryParams),n=e._path.toString(),r=new qo;return this.restRequest_(n+`.json`,t,(e,t)=>{let i=t;e===404&&(i=null,e=null),e===null?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format=`export`,Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);let a=(this.repoInfo_.secure?`https://`:`http://`)+this.repoInfo_.host+e+`?ns=`+this.repoInfo_.namespace+As(t);this.log_(`Sending REST request for `+a);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&o.readyState===4){this.log_(`REST Response for `+a+` received. status:`,o.status,`response:`,o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=ys(o.responseText)}catch{Om(`Failed to parse JSON response for `+a+`: `+o.responseText)}n(null,e)}else o.status!==401&&o.status!==404&&Om(`Got unsuccessful REST response for `+a+` Status: `+o.status),n(o.status);n=null}},o.open(`GET`,a,!0),o.send()})}},Og=class{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function kg(){return{value:null,children:new Map}}function Ag(e,t,n){if(V(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{let r=z(t);e.children.has(r)||e.children.set(r,kg());let i=e.children.get(r);t=B(t),Ag(i,t,n)}}function jg(e,t,n){e.value===null?Mg(e,(e,r)=>{let i=new L(t.toString()+`/`+e);jg(r,i,n)}):n(t,e.value)}function Mg(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ng=class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t={...e};return this.last_&&zm(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Pg=10*1e3;var Fg=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ng(e);let n=Pg+(3e4-Pg)*Math.random();qm(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;zm(e,(e,r)=>{r>0&&ws(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),qm(this.reportStats_.bind(this),Math.floor(Math.random()*2*3e5))}},Ig;(function(e){e[e.OVERWRITE=0]=`OVERWRITE`,e[e.MERGE=1]=`MERGE`,e[e.ACK_USER_WRITE=2]=`ACK_USER_WRITE`,e[e.LISTEN_COMPLETE=3]=`LISTEN_COMPLETE`})(Ig||={});function Lg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zg(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Bg=class e{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ig.ACK_USER_WRITE,this.source=Lg()}operationForChild(t){if(!V(this.path))return P(z(this.path)===t,`operationForChild called for unrelated child.`),new e(B(this.path),this.affectedTree,this.revert);if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),`affectedTree should not have overlapping affected paths.`),this;{let n=this.affectedTree.subtree(new L(t));return new e(R(),n,this.revert)}}},Vg=class e{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ig.OVERWRITE}operationForChild(t){return V(this.path)?new e(this.source,R(),this.snap.getImmediateChild(t)):new e(this.source,B(this.path),this.snap)}},Hg=class e{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ig.MERGE}operationForChild(t){if(V(this.path)){let n=this.children.subtree(new L(t));return n.isEmpty()?null:n.value?new Vg(this.source,R(),n.value):new e(this.source,R(),n)}else return P(z(this.path)===t,`Can't get a merge for a child not on the path of the operation`),new e(this.source,B(this.path),this.children)}toString(){return`Operation(`+this.path+`: `+this.source.toString()+` merge: `+this.children.toString()+`)`}},Ug=class{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;let t=z(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};function Wg(e,t,n,r){let i=[],a=[];return t.forEach(t=>{t.type===`child_changed`&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push(Cg(t.childName,t.snapshotNode))}),Gg(e,i,`child_removed`,t,r,n),Gg(e,i,`child_added`,t,r,n),Gg(e,i,`child_moved`,a,r,n),Gg(e,i,`child_changed`,t,r,n),Gg(e,i,`value`,t,r,n),i}function Gg(e,t,n,r,i,a){let o=r.filter(e=>e.type===n);o.sort((t,n)=>qg(e,t,n)),o.forEach(n=>{let r=Kg(e,n,a);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function Kg(e,t,n){return t.type===`value`||t.type===`child_removed`||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function qg(e,t,n){if(t.childName==null||n.childName==null)throw Do(`Should only compare child_ events.`);let r=new H(t.childName,t.snapshotNode),i=new H(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Jg(e,t){return{eventCache:e,serverCache:t}}function Yg(e,t,n,r){return Jg(new Ug(t,n,r),e.serverCache)}function Xg(e,t,n,r){return Jg(e.eventCache,new Ug(t,n,r))}function Zg(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Qg(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let $g;const e_=()=>($g||=new Gh(Fm),$g);var t_=class e{static fromObject(t){let n=new e(null);return zm(t,(e,t)=>{n=n.set(new L(e),t)}),n}constructor(e,t=e_()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:R(),value:this.value};if(V(e))return null;{let n=z(e),r=this.children.get(n);if(r!==null){let i=r.findRootMostMatchingPathAndValue(B(e),t);if(i!=null){let e=Th(new L(n),i.path);return{path:e,value:i.value}}else return null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(t){if(V(t))return this;{let n=z(t),r=this.children.get(n);return r===null?new e(null):r.subtree(B(t))}}set(t,n){if(V(t))return new e(n,this.children);{let r=z(t),i=this.children.get(r)||new e(null),a=i.set(B(t),n),o=this.children.insert(r,a);return new e(this.value,o)}}remove(t){if(V(t))return this.children.isEmpty()?new e(null):new e(null,this.children);{let n=z(t),r=this.children.get(n);if(r){let i=r.remove(B(t)),a;return a=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),this.value===null&&a.isEmpty()?new e(null):new e(this.value,a)}else return this}}get(e){if(V(e))return this.value;{let t=z(e),n=this.children.get(t);return n?n.get(B(e)):null}}setTree(t,n){if(V(t))return n;{let r=z(t),i=this.children.get(r)||new e(null),a=i.setTree(B(t),n),o;return o=a.isEmpty()?this.children.remove(r):this.children.insert(r,a),new e(this.value,o)}}fold(e){return this.fold_(R(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(Th(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,R(),t)}findOnPath_(e,t,n){let r=this.value?n(t,this.value):!1;if(r)return r;if(V(e))return null;{let r=z(e),i=this.children.get(r);return i?i.findOnPath_(B(e),Th(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,R(),t)}foreachOnPath_(t,n,r){if(V(t))return this;{this.value&&r(n,this.value);let i=z(t),a=this.children.get(i);return a?a.foreachOnPath_(B(t),Th(n,i),r):new e(null)}}foreach(e){this.foreach_(R(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(Th(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}},n_=class e{constructor(e){this.writeTree_=e}static empty(){return new e(new t_(null))}};function r_(e,t,n){if(V(t))return new n_(new t_(n));{let r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){let i=r.path,a=r.value,o=Eh(i,t);return a=a.updateChild(o,n),new n_(e.writeTree_.set(i,a))}else{let r=new t_(n),i=e.writeTree_.setTree(t,r);return new n_(i)}}}function i_(e,t,n){let r=e;return zm(n,(e,n)=>{r=r_(r,Th(t,e),n)}),r}function a_(e,t){if(V(t))return n_.empty();{let n=e.writeTree_.setTree(t,new t_(null));return new n_(n)}}function o_(e,t){return s_(e,t)!=null}function s_(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return n==null?null:e.writeTree_.get(n.path).getChild(Eh(n.path,t))}function c_(e){let t=[],n=e.writeTree_.value;return n==null?e.writeTree_.children.inorderTraversal((e,n)=>{n.value!=null&&t.push(new H(e,n.value))}):n.isLeafNode()||n.forEachChild(ag,(e,n)=>{t.push(new H(e,n))}),t}function l_(e,t){if(V(t))return e;{let n=s_(e,t);return n==null?new n_(e.writeTree_.subtree(t)):new n_(new t_(n))}}function u_(e){return e.writeTree_.isEmpty()}function d_(e,t){return f_(R(),e.writeTree_,t)}function f_(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{t===`.priority`?(P(i.value!==null,`Priority writes must always be leaf nodes`),r=i.value):n=f_(Th(e,t),i,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(Th(e,`.priority`),r)),n}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function p_(e,t){return F_(t,e)}function m_(e,t,n,r,i){P(r>e.lastWriteId,`Stacking an older write on top of newer ones`),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=r_(e.visibleWrites,t,n)),e.lastWriteId=r}function h_(e,t){for(let n=0;n<e.allWrites.length;n++){let r=e.allWrites[n];if(r.writeId===t)return r}return null}function g_(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);P(n>=0,`removeWrite called with nonexistent writeId.`);let r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,a=!1,o=e.allWrites.length-1;for(;i&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=n&&__(t,r.path)?i=!1:Oh(r.path,t.path)&&(a=!0)),o--}if(!i)return!1;if(a)return v_(e),!0;if(r.snap)e.visibleWrites=a_(e.visibleWrites,r.path);else{let t=r.children;zm(t,t=>{e.visibleWrites=a_(e.visibleWrites,Th(r.path,t))})}return!0}function __(e,t){if(e.snap)return Oh(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&Oh(Th(e.path,n),t))return!0;return!1}function v_(e){e.visibleWrites=b_(e.allWrites,y_,R()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function y_(e){return e.visible}function b_(e,t,n){let r=n_.empty();for(let i=0;i<e.length;++i){let a=e[i];if(t(a)){let e=a.path,t;if(a.snap)Oh(n,e)?(t=Eh(n,e),r=r_(r,t,a.snap)):Oh(e,n)&&(t=Eh(e,n),r=r_(r,R(),a.snap.getChild(t)));else if(a.children){if(Oh(n,e))t=Eh(n,e),r=i_(r,t,a.children);else if(Oh(e,n))if(t=Eh(e,n),V(t))r=i_(r,R(),a.children);else{let e=Ts(a.children,z(t));if(e){let n=e.getChild(B(t));r=r_(r,R(),n)}}}else throw Do(`WriteRecord should have .snap or .children`)}}return r}function x_(e,t,n,r,i){if(!r&&!i){let r=s_(e.visibleWrites,t);if(r!=null)return r;{let r=l_(e.visibleWrites,t);if(u_(r))return n;if(n==null&&!o_(r,R()))return null;{let e=n||U.EMPTY_NODE;return d_(r,e)}}}else{let a=l_(e.visibleWrites,t);if(!i&&u_(a))return n;if(!i&&n==null&&!o_(a,R()))return null;{let a=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Oh(e.path,t)||Oh(t,e.path))},o=b_(e.allWrites,a,t),s=n||U.EMPTY_NODE;return d_(o,s)}}}function S_(e,t,n){let r=U.EMPTY_NODE,i=s_(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ag,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){let i=l_(e.visibleWrites,t);return n.forEachChild(ag,(e,t)=>{let n=d_(l_(i,new L(e)),t);r=r.updateImmediateChild(e,n)}),c_(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}else{let n=l_(e.visibleWrites,t);return c_(n).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}function C_(e,t,n,r,i){P(r||i,`Either existingEventSnap or existingServerSnap must exist`);let a=Th(t,n);if(o_(e.visibleWrites,a))return null;{let t=l_(e.visibleWrites,a);return u_(t)?i.getChild(n):d_(t,i.getChild(n))}}function w_(e,t,n,r){let i=Th(t,n),a=s_(e.visibleWrites,i);if(a!=null)return a;if(r.isCompleteForChild(n)){let t=l_(e.visibleWrites,i);return d_(t,r.getNode().getImmediateChild(n))}else return null}function T_(e,t){return s_(e.visibleWrites,t)}function E_(e,t,n,r,i,a,o){let s,c=l_(e.visibleWrites,t),l=s_(c,R());if(l!=null)s=l;else if(n!=null)s=d_(c,n);else return[];if(s=s.withIndex(o),!s.isEmpty()&&!s.isLeafNode()){let e=[],t=o.getCompare(),n=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),c=n.getNext();for(;c&&e.length<i;)t(c,r)!==0&&e.push(c),c=n.getNext();return e}else return[]}function D_(){return{visibleWrites:n_.empty(),allWrites:[],lastWriteId:-1}}function O_(e,t,n,r){return x_(e.writeTree,e.treePath,t,n,r)}function k_(e,t){return S_(e.writeTree,e.treePath,t)}function A_(e,t,n,r){return C_(e.writeTree,e.treePath,t,n,r)}function j_(e,t){return T_(e.writeTree,Th(e.treePath,t))}function M_(e,t,n,r,i,a){return E_(e.writeTree,e.treePath,t,n,r,i,a)}function N_(e,t,n){return w_(e.writeTree,e.treePath,t,n)}function P_(e,t){return F_(Th(e.treePath,t),e.writeTree)}function F_(e,t){return{treePath:e,writeTree:t}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var I_=class{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;P(t===`child_added`||t===`child_changed`||t===`child_removed`,`Only child changes supported for tracking`),P(n!==`.priority`,`Only non-priority child changes can be tracked.`);let r=this.changeMap.get(n);if(r){let i=r.type;if(t===`child_added`&&i===`child_removed`)this.changeMap.set(n,Sg(n,e.snapshotNode,r.snapshotNode));else if(t===`child_removed`&&i===`child_added`)this.changeMap.delete(n);else if(t===`child_removed`&&i===`child_changed`)this.changeMap.set(n,xg(n,r.oldSnap));else if(t===`child_changed`&&i===`child_added`)this.changeMap.set(n,bg(n,e.snapshotNode));else if(t===`child_changed`&&i===`child_changed`)this.changeMap.set(n,Sg(n,e.snapshotNode,r.oldSnap));else throw Do(`Illegal combination of changes: `+e+` occurred after `+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}},L_=class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};const R_=new L_;var z_=class{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=this.optCompleteServerCache_==null?this.viewCache_.serverCache:new Ug(this.optCompleteServerCache_,!0,!1);return N_(this.writes_,e,t)}}getChildAfterChild(e,t,n){let r=this.optCompleteServerCache_==null?Qg(this.viewCache_):this.optCompleteServerCache_,i=M_(this.writes_,r,t,1,n,e);return i.length===0?null:i[0]}};function B_(e,t){P(t.eventCache.getNode().isIndexed(e.filter.getIndex()),`Event snap not indexed`),P(t.serverCache.getNode().isIndexed(e.filter.getIndex()),`Server snap not indexed`)}function V_(e,t,n,r,i){let a=new I_,o,s;if(n.type===Ig.OVERWRITE){let c=n;c.source.fromUser?o=G_(e,t,c.path,c.snap,r,i,a):(P(c.source.fromServer,`Unknown source.`),s=c.source.tagged||t.serverCache.isFiltered()&&!V(c.path),o=W_(e,t,c.path,c.snap,r,i,s,a))}else if(n.type===Ig.MERGE){let c=n;c.source.fromUser?o=q_(e,t,c.path,c.children,r,i,a):(P(c.source.fromServer,`Unknown source.`),s=c.source.tagged||t.serverCache.isFiltered(),o=Y_(e,t,c.path,c.children,r,i,s,a))}else if(n.type===Ig.ACK_USER_WRITE){let s=n;o=s.revert?Q_(e,t,s.path,r,i,a):X_(e,t,s.path,s.affectedTree,r,i,a)}else if(n.type===Ig.LISTEN_COMPLETE)o=Z_(e,t,n.path,r,a);else throw Do(`Unknown operation type: `+n.type);let c=a.getChanges();return H_(t,o,c),{viewCache:o,changes:c}}function H_(e,t,n){let r=t.eventCache;if(r.isFullyInitialized()){let i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Zg(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(yg(Zg(t)))}}function U_(e,t,n,r,i,a){let o=t.eventCache;if(j_(r,n)!=null)return t;{let s,c;if(V(n))if(P(t.serverCache.isFullyInitialized(),`If change path is empty, we must have complete server data`),t.serverCache.isFiltered()){let n=Qg(t),i=n instanceof U?n:U.EMPTY_NODE,o=k_(r,i);s=e.filter.updateFullNode(t.eventCache.getNode(),o,a)}else{let n=O_(r,Qg(t));s=e.filter.updateFullNode(t.eventCache.getNode(),n,a)}else{let l=z(n);if(l===`.priority`){P(bh(n)===1,`Can't have a priority with additional path components`);let i=o.getNode();c=t.serverCache.getNode();let a=A_(r,n,i,c);s=a==null?o.getNode():e.filter.updatePriority(i,a)}else{let u=B(n),d;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();let e=A_(r,n,o.getNode(),c);d=e==null?o.getNode().getImmediateChild(l):o.getNode().getImmediateChild(l).updateChild(u,e)}else d=N_(r,l,t.serverCache);s=d==null?o.getNode():e.filter.updateChild(o.getNode(),l,d,u,i,a)}}return Yg(t,s,o.isFullyInitialized()||V(n),e.filter.filtersNodes())}}function W_(e,t,n,r,i,a,o,s){let c=t.serverCache,l,u=o?e.filter:e.filter.getIndexedFilter();if(V(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){let e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{let e=z(n);if(!c.isCompleteForPath(n)&&bh(n)>1)return t;let i=B(n),a=c.getNode().getImmediateChild(e),o=a.updateChild(i,r);l=e===`.priority`?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,i,R_,null)}let d=Xg(t,l,c.isFullyInitialized()||V(n),u.filtersNodes()),f=new z_(i,d,a);return U_(e,d,n,i,f,s)}function G_(e,t,n,r,i,a,o){let s=t.eventCache,c,l,u=new z_(i,t,a);if(V(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=Yg(t,l,!0,e.filter.filtersNodes());else{let i=z(n);if(i===`.priority`)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=Yg(t,l,s.isFullyInitialized(),s.isFiltered());else{let a=B(n),l=s.getNode().getImmediateChild(i),d;if(V(a))d=r;else{let e=u.getCompleteChild(i);d=e==null?U.EMPTY_NODE:xh(a)===`.priority`&&e.getChild(wh(a)).isEmpty()?e:e.updateChild(a,r)}if(l.equals(d))c=t;else{let n=e.filter.updateChild(s.getNode(),i,d,a,u,o);c=Yg(t,n,s.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function K_(e,t){return e.eventCache.isCompleteForChild(t)}function q_(e,t,n,r,i,a,o){let s=t;return r.foreach((r,c)=>{let l=Th(n,r);K_(t,z(l))&&(s=G_(e,s,l,c,i,a,o))}),r.foreach((r,c)=>{let l=Th(n,r);K_(t,z(l))||(s=G_(e,s,l,c,i,a,o))}),s}function J_(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function Y_(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c=t,l;l=V(n)?r:new t_(null).setTree(n,r);let u=t.serverCache.getNode();return l.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){let l=t.serverCache.getNode().getImmediateChild(n),u=J_(e,l,r);c=W_(e,c,new L(n),u,i,a,o,s)}}),l.children.inorderTraversal((n,r)=>{let l=!t.serverCache.isCompleteForChild(n)&&r.value===null;if(!u.hasChild(n)&&!l){let l=t.serverCache.getNode().getImmediateChild(n),u=J_(e,l,r);c=W_(e,c,new L(n),u,i,a,o,s)}}),c}function X_(e,t,n,r,i,a,o){if(j_(i,n)!=null)return t;let s=t.serverCache.isFiltered(),c=t.serverCache;if(r.value!=null){if(V(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return W_(e,t,n,c.getNode().getChild(n),i,a,s,o);if(V(n)){let r=new t_(null);return c.getNode().forEachChild(Vh,(e,t)=>{r=r.set(new L(e),t)}),Y_(e,t,n,r,i,a,s,o)}else return t}else{let l=new t_(null);return r.foreach((e,t)=>{let r=Th(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))}),Y_(e,t,n,l,i,a,s,o)}}function Z_(e,t,n,r,i){let a=t.serverCache,o=Xg(t,a.getNode(),a.isFullyInitialized()||V(n),a.isFiltered());return U_(e,o,n,r,R_,i)}function Q_(e,t,n,r,i,a){let o;if(j_(r,n)!=null)return t;{let s=new z_(r,t,i),c=t.eventCache.getNode(),l;if(V(n)||z(n)===`.priority`){let n;if(t.serverCache.isFullyInitialized())n=O_(r,Qg(t));else{let e=t.serverCache.getNode();P(e instanceof U,`serverChildren would be complete if leaf node`),n=k_(r,e)}n=n,l=e.filter.updateFullNode(c,n,a)}else{let i=z(n),u=N_(r,i,t.serverCache);u==null&&t.serverCache.isCompleteForChild(i)&&(u=c.getImmediateChild(i)),l=u==null?t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,U.EMPTY_NODE,B(n),s,a):c:e.filter.updateChild(c,i,u,B(n),s,a),l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=O_(r,Qg(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,a)))}return o=t.serverCache.isFullyInitialized()||j_(r,R())!=null,Yg(t,l,o,e.filter.filtersNodes())}}function $_(e,t){let n=Qg(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!V(t)&&!n.getImmediateChild(z(t)).isEmpty())?n.getChild(t):null}function ev(e,t,n,r){t.type===Ig.MERGE&&t.source.queryId!==null&&(P(Qg(e.viewCache_),`We should always have a full cache before handling merges`),P(Zg(e.viewCache_),`Missing event cache, even though we have a server cache`));let i=e.viewCache_,a=V_(e.processor_,i,t,n,r);return B_(e.processor_,a.viewCache),P(a.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),`Once a server snap is complete, it should never go back`),e.viewCache_=a.viewCache,tv(e,a.changes,a.viewCache.eventCache.getNode(),null)}function tv(e,t,n,r){let i=r?[r]:e.eventRegistrations_;return Wg(e.eventGenerator_,t,n,i)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let nv;function rv(e){P(!nv,`__referenceConstructor has already been defined`),nv=e}function iv(e,t,n,r){let i=t.source.queryId;if(i!==null){let a=e.views.get(i);return P(a!=null,`SyncTree gave us an op for an invalid query.`),ev(a,t,n,r)}else{let i=[];for(let a of e.views.values())i=i.concat(ev(a,t,n,r));return i}}function av(e,t){let n=null;for(let r of e.views.values())n||=$_(r,t);return n}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let ov;function sv(e){P(!ov,`__referenceConstructor has already been defined`),ov=e}var cv=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new t_(null),this.pendingWriteTree_=D_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function lv(e,t,n,r,i){return m_(e.pendingWriteTree_,t,n,r,i),i?gv(e,new Vg(Lg(),t,n)):[]}function uv(e,t,n=!1){let r=h_(e.pendingWriteTree_,t),i=g_(e.pendingWriteTree_,t);if(!i)return[];{let t=new t_(null);return r.snap==null?zm(r.children,e=>{t=t.set(new L(e),!0)}):t=t.set(R(),!0),gv(e,new Bg(r.path,t,n))}}function dv(e,t,n){return gv(e,new Vg(Rg(),t,n))}function fv(e,t,n){let r=t_.fromObject(n);return gv(e,new Hg(Rg(),t,r))}function pv(e,t,n,r){let i=yv(e,r);if(i!=null){let r=bv(i),a=r.path,o=r.queryId,s=Eh(a,t),c=new Vg(zg(o),s,n);return xv(e,a,c)}else return[]}function mv(e,t,n,r){let i=yv(e,r);if(i){let r=bv(i),a=r.path,o=r.queryId,s=Eh(a,t),c=t_.fromObject(n),l=new Hg(zg(o),s,c);return xv(e,a,l)}else return[]}function hv(e,t,n){let r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(e,n)=>{let r=Eh(e,t),i=av(n,r);if(i)return i});return x_(r,t,i,n,!0)}function gv(e,t){return _v(t,e.syncPointTree_,null,p_(e.pendingWriteTree_,R()))}function _v(e,t,n,r){if(V(e.path))return vv(e,t,n,r);{let i=t.get(R());n==null&&i!=null&&(n=av(i,R()));let a=[],o=z(e.path),s=e.operationForChild(o),c=t.children.get(o);if(c&&s){let e=n?n.getImmediateChild(o):null,t=P_(r,o);a=a.concat(_v(s,c,e,t))}return i&&(a=a.concat(iv(i,e,r,n))),a}}function vv(e,t,n,r){let i=t.get(R());n==null&&i!=null&&(n=av(i,R()));let a=[];return t.children.inorderTraversal((t,i)=>{let o=n?n.getImmediateChild(t):null,s=P_(r,t),c=e.operationForChild(t);c&&(a=a.concat(vv(c,i,o,s)))}),i&&(a=a.concat(iv(i,e,r,n))),a}function yv(e,t){return e.tagToQueryMap.get(t)}function bv(e){let t=e.indexOf(`$`);return P(t!==-1&&t<e.length-1,`Bad queryKey.`),{queryId:e.substr(t+1),path:new L(e.substr(0,t))}}function xv(e,t,n){let r=e.syncPointTree_.get(t);P(r,`Missing sync point for query tag that we're tracking`);let i=p_(e.pendingWriteTree_,t);return iv(r,n,i,null)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Sv=class e{constructor(e){this.node_=e}getImmediateChild(t){let n=this.node_.getImmediateChild(t);return new e(n)}node(){return this.node_}},Cv=class e{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(t){let n=Th(this.path_,t);return new e(this.syncTree_,n)}node(){return hv(this.syncTree_,this.path_)}};const wv=function(e){return e||={},e.timestamp=e.timestamp||new Date().getTime(),e},Tv=function(e,t,n){if(!e||typeof e!=`object`)return e;if(P(`.sv`in e,`Unexpected leaf node or priority contents`),typeof e[`.sv`]==`string`)return Ev(e[`.sv`],t,n);if(typeof e[`.sv`]==`object`)return Dv(e[`.sv`],t);P(!1,`Unexpected server value: `+JSON.stringify(e,null,2))},Ev=function(e,t,n){switch(e){case`timestamp`:return n.timestamp;default:P(!1,`Unexpected server value: `+e)}},Dv=function(e,t,n){e.hasOwnProperty(`increment`)||P(!1,`Unexpected server value: `+JSON.stringify(e,null,2));let r=e.increment;typeof r!=`number`&&P(!1,`Unexpected increment value: `+r);let i=t.node();if(P(i!=null,`Expected ChildrenNode.EMPTY_NODE for nulls`),!i.isLeafNode())return r;let a=i,o=a.getValue();return typeof o==`number`?o+r:r},Ov=function(e,t,n,r){return Av(t,new Cv(n,e),r)},kv=function(e,t,n){return Av(e,new Sv(t),n)};function Av(e,t,n){let r=e.getPriority().val(),i=Tv(r,t.getImmediateChild(`.priority`),n),a;if(e.isLeafNode()){let r=e,a=Tv(r.getValue(),t,n);return a!==r.getValue()||i!==r.getPriority().val()?new $h(a,hg(i)):e}else{let r=e;return a=r,i!==r.getPriority().val()&&(a=a.updatePriority(new $h(i))),r.forEachChild(ag,(e,r)=>{let i=Av(r,t.getImmediateChild(e),n);i!==r&&(a=a.updateImmediateChild(e,i))}),a}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jv=class{constructor(e=``,t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}};function Mv(e,t){let n=t instanceof L?t:new L(t),r=e,i=z(n);for(;i!==null;){let e=Ts(r.node.children,i)||{children:{},childCount:0};r=new jv(i,r,e),n=B(n),i=z(n)}return r}function Nv(e){return e.node.value}function Pv(e,t){e.node.value=t,Vv(e)}function Fv(e){return e.node.childCount>0}function Iv(e){return Nv(e)===void 0&&!Fv(e)}function Lv(e,t){zm(e.node.children,(n,r)=>{t(new jv(n,e,r))})}function Rv(e,t,n,r){n&&!r&&t(e),Lv(e,e=>{Rv(e,t,!0,r)}),n&&r&&t(e)}function zv(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Bv(e){return new L(e.parent===null?e.name:Bv(e.parent)+`/`+e.name)}function Vv(e){e.parent!==null&&Hv(e.parent,e.name,e)}function Hv(e,t,n){let r=Iv(n),i=ws(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Vv(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Vv(e))}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Uv=/[\[\].#$\/\u0000-\u001F\u007F]/,Wv=/[\[\].#$\u0000-\u001F\u007F]/,Gv=10*1024*1024,Kv=function(e){return typeof e==`string`&&e.length!==0&&!Uv.test(e)},qv=function(e){return typeof e==`string`&&e.length!==0&&!Wv.test(e)},Jv=function(e){return e&&=e.replace(/^\/*\.info(\/|$)/,`/`),qv(e)},Yv=function(e,t,n){let r=n instanceof L?new kh(n,e):n;if(t===void 0)throw Error(e+`contains undefined `+Nh(r));if(typeof t==`function`)throw Error(e+`contains a function `+Nh(r)+` with contents = `+t.toString());if(Am(t))throw Error(e+`contains `+t.toString()+` `+Nh(r));if(typeof t==`string`&&t.length>Gv/3&&Bs(t)>Gv)throw Error(e+`contains a string greater than 10485760 utf8 bytes `+Nh(r)+` ('`+t.substring(0,50)+`...')`);if(t&&typeof t==`object`){let n=!1,i=!1;if(zm(t,(t,a)=>{if(t===`.value`)n=!0;else if(t!==`.priority`&&t!==`.sv`&&(i=!0,!Kv(t)))throw Error(e+` contains an invalid key (`+t+`) `+Nh(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ah(r,t),Yv(e,a,r),jh(r)}),n&&i)throw Error(e+` contains ".value" child `+Nh(r)+` in addition to actual children.`)}},Xv=function(e,t){let n=t.path.toString();if(typeof t.repoInfo.host!=`string`||t.repoInfo.host.length===0||!Kv(t.repoInfo.namespace)&&t.repoInfo.host.split(`:`)[0]!==`localhost`||n.length!==0&&!Jv(n))throw Error(Rs(e,`url`)+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Zv=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function Qv(e,t){let n=null;for(let r=0;r<t.length;r++){let i=t[r],a=i.getPath();n!==null&&!Dh(a,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function $v(e,t,n){Qv(e,n),ey(e,e=>Oh(e,t)||Oh(t,e))}function ey(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){let i=e.eventLists_[r];if(i){let a=i.path;t(a)?(ty(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ty(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(n!==null){e.events[t]=null;let r=n.getEventRunner();xm&&wm(`event: `+n.toString()),Gm(r)}}}var ny=class{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kg(),this.transactionQueueTree_=new jv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?`https://`:`http://`)+this.repoInfo_.host}};function ry(e,t,n){if(e.stats_=oh(e.repoInfo_),e.forceRestClient_||Km())e.server_=new Dg(e.repoInfo_,(t,n,r,i)=>{oy(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>sy(e,!0),0);else{if(n!=null){if(typeof n!=`object`)throw Error(`Only objects are supported for option databaseAuthVariableOverride`);try{bs(n)}catch(e){throw Error(`Invalid authOverride provided: `+e)}}e.persistentConnection_=new Lh(e.repoInfo_,t,(t,n,r,i)=>{oy(e,t,n,r,i)},t=>{sy(e,t)},t=>{cy(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=sh(e.repoInfo_,()=>new Fg(e.stats_,e.server_)),e.infoData_=new Og,e.infoSyncTree_=new cv({startListening:(t,n,r,i)=>{let a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=dv(e.infoSyncTree_,t._path,o),setTimeout(()=>{i(`ok`)},0)),a},stopListening:()=>{}}),ly(e,`connected`,!1),e.serverSyncTree_=new cv({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{let a=i(n,r);$v(e.eventQueue_,t._path,a)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function iy(e){let t=e.infoData_.getNode(new L(`.info/serverTimeOffset`)),n=t.val()||0;return new Date().getTime()+n}function ay(e){return wv({timestamp:iy(e)})}function oy(e,t,n,r,i){e.dataUpdateCount++;let a=new L(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){let t=Ds(n,e=>hg(e));o=mv(e.serverSyncTree_,a,t,i)}else{let t=hg(n);o=pv(e.serverSyncTree_,a,t,i)}else if(r){let t=Ds(n,e=>hg(e));o=fv(e.serverSyncTree_,a,t)}else{let t=hg(n);o=dv(e.serverSyncTree_,a,t)}let s=a;o.length>0&&(s=_y(e,a)),$v(e.eventQueue_,s,o)}function sy(e,t){ly(e,`connected`,t),t===!1&&dy(e)}function cy(e,t){zm(t,(t,n)=>{ly(e,t,n)})}function ly(e,t,n){let r=new L(`/.info/`+t),i=hg(n);e.infoData_.updateSnapshot(r,i);let a=dv(e.infoSyncTree_,r,i);$v(e.eventQueue_,r,a)}function uy(e){return e.nextWriteId_++}function dy(e){py(e,`onDisconnectEvents`);let t=ay(e),n=kg();jg(e.onDisconnect_,R(),(r,i)=>{let a=Ov(r,i,e.serverSyncTree_,t);Ag(n,r,a)});let r=[];jg(n,R(),(t,n)=>{r=r.concat(dv(e.serverSyncTree_,t,n));let i=Cy(e,t);_y(e,i)}),e.onDisconnect_=kg(),$v(e.eventQueue_,R(),r)}function fy(e){e.persistentConnection_&&e.persistentConnection_.interrupt(`repo_interrupt`)}function py(e,...t){let n=``;e.persistentConnection_&&(n=e.persistentConnection_.id+`:`),wm(n,...t)}function my(e,t,n){return hv(e.serverSyncTree_,t,n)||U.EMPTY_NODE}function hy(e,t=e.transactionQueueTree_){if(t||Sy(e,t),Nv(t)){let n=by(e,t);P(n.length>0,`Sending zero length transaction queue`);let r=n.every(e=>e.status===0);r&&gy(e,Bv(t),n)}else Fv(t)&&Lv(t,t=>{hy(e,t)})}function gy(e,t,n){let r=n.map(e=>e.currentWriteId),i=my(e,t,r),a=i,o=i.hash();for(let e=0;e<n.length;e++){let r=n[e];P(r.status===0,`tryToSendTransactionQueue_: items in queue should all be run.`),r.status=1,r.retryCount++;let i=Eh(t,r.path);a=a.updateChild(i,r.currentOutputSnapshotRaw)}let s=a.val(!0),c=t;e.server_.put(c.toString(),s,r=>{py(e,`transaction put response`,{path:c.toString(),status:r});let i=[];if(r===`ok`){let r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(uv(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();Sy(e,Mv(e.transactionQueueTree_,t)),hy(e,e.transactionQueueTree_),$v(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Gm(r[e])}else{if(r===`datastale`)for(let e=0;e<n.length;e++)n[e].status===3?n[e].status=4:n[e].status=0;else{Om(`transaction at `+c.toString()+` failed: `+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}_y(e,t)}},o)}function _y(e,t){let n=yy(e,t),r=Bv(n),i=by(e,n);return vy(e,i,r),r}function vy(e,t,n){if(t.length===0)return;let r=[],i=[],a=t.filter(e=>e.status===0),o=a.map(e=>e.currentWriteId);for(let a=0;a<t.length;a++){let s=t[a],c=Eh(n,s.path),l=!1,u;if(P(c!==null,`rerunTransactionsUnderNode_: relativePath should not be null.`),s.status===4)l=!0,u=s.abortReason,i=i.concat(uv(e.serverSyncTree_,s.currentWriteId,!0));else if(s.status===0)if(s.retryCount>=25)l=!0,u=`maxretry`,i=i.concat(uv(e.serverSyncTree_,s.currentWriteId,!0));else{let n=my(e,s.path,o);s.currentInputSnapshot=n;let r=t[a].update(n.val());if(r!==void 0){Yv(`transaction failed: Data returned `,r,s.path);let t=hg(r),a=typeof r==`object`&&!!r&&ws(r,`.priority`);a||(t=t.updatePriority(n.getPriority()));let c=s.currentWriteId,l=ay(e),u=kv(t,n,l);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=u,s.currentWriteId=uy(e),o.splice(o.indexOf(c),1),i=i.concat(lv(e.serverSyncTree_,s.path,u,s.currentWriteId,s.applyLocally)),i=i.concat(uv(e.serverSyncTree_,c,!0))}else l=!0,u=`nodata`,i=i.concat(uv(e.serverSyncTree_,s.currentWriteId,!0))}$v(e.eventQueue_,n,i),i=[],l&&(t[a].status=2,(function(e){setTimeout(e,0)})(t[a].unwatcher),t[a].onComplete&&(u===`nodata`?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(Error(u),!1,null))))}Sy(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Gm(r[e]);hy(e,e.transactionQueueTree_)}function yy(e,t){let n,r=e.transactionQueueTree_;for(n=z(t);n!==null&&Nv(r)===void 0;)r=Mv(r,n),t=B(t),n=z(t);return r}function by(e,t){let n=[];return xy(e,t,n),n.sort((e,t)=>e.order-t.order),n}function xy(e,t,n){let r=Nv(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Lv(t,t=>{xy(e,t,n)})}function Sy(e,t){let n=Nv(t);if(n){let e=0;for(let t=0;t<n.length;t++)n[t].status!==2&&(n[e]=n[t],e++);n.length=e,Pv(t,n.length>0?n:void 0)}Lv(t,t=>{Sy(e,t)})}function Cy(e,t){let n=Bv(yy(e,t)),r=Mv(e.transactionQueueTree_,t);return zv(r,t=>{wy(e,t)}),wy(e,r),Rv(r,t=>{wy(e,t)}),n}function wy(e,t){let n=Nv(t);if(n){let r=[],i=[],a=-1;for(let t=0;t<n.length;t++)n[t].status===3||(n[t].status===1?(P(a===t-1,`All SENT items should be at beginning of queue.`),a=t,n[t].status=3,n[t].abortReason=`set`):(P(n[t].status===0,`Unexpected transaction status in abort`),n[t].unwatcher(),i=i.concat(uv(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,Error(`set`),!1,null))));a===-1?Pv(t,void 0):n.length=a+1,$v(e.eventQueue_,Bv(t),i);for(let e=0;e<r.length;e++)Gm(r[e])}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ty(e){let t=``,n=e.split(`/`);for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g,` `))}catch{}t+=`/`+r}return t}function Ey(e){let t={};e.charAt(0)===`?`&&(e=e.substring(1));for(let n of e.split(`&`)){if(n.length===0)continue;let r=n.split(`=`);r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Om(`Invalid query segment '${n}' in query '${e}'`)}return t}const Dy=function(e,t){let n=Oy(e),r=n.namespace;n.domain===`firebase.com`&&Dm(n.host+` is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead`),(!r||r===`undefined`)&&n.domain!==`localhost`&&Dm(`Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com`),n.secure||km();let i=n.scheme===`ws`||n.scheme===`wss`;return{repoInfo:new eh(n.host,n.secure,r,i,t,``,r!==n.subdomain),path:new L(n.pathString)}},Oy=function(e){let t=``,n=``,r=``,i=``,a=``,o=!0,s=`https`,c=443;if(typeof e==`string`){let l=e.indexOf(`//`);l>=0&&(s=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf(`/`);u===-1&&(u=e.length);let d=e.indexOf(`?`);d===-1&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(i=Ty(e.substring(u,d)));let f=Ey(e.substring(Math.min(e.length,d)));l=t.indexOf(`:`),l>=0?(o=s===`https`||s===`wss`,c=parseInt(t.substring(l+1),10)):l=t.length;let p=t.slice(0,l);if(p.toLowerCase()===`localhost`)n=`localhost`;else if(p.split(`.`).length<=2)n=p;else{let e=t.indexOf(`.`);r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),a=r}`ns`in f&&(a=f.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},ky=`-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz`;(function(){let e=0,t=[];return function(n){let r=n===e;e=n;let i,a=Array(8);for(i=7;i>=0;i--)a[i]=ky.charAt(n%64),n=Math.floor(n/64);P(n===0,`Cannot push at time == 0`);let o=a.join(``);if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ky.charAt(t[i]);return P(o.length===20,`nextPushId: Length should be 20.`),o}})();
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ay=class e{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return V(this._path)?null:xh(this._path)}get ref(){return new jy(this._repo,this._path)}get _queryIdentifier(){let e=Eg(this._queryParams),t=Lm(e);return t===`{}`?`default`:t}get _queryObject(){return Eg(this._queryParams)}isEqual(t){if(t=Vs(t),!(t instanceof e))return!1;let n=this._repo===t._repo,r=Dh(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sh(this._path)}},jy=class e extends Ay{constructor(e,t){super(e,t,new wg,!1)}get parent(){let t=wh(this._path);return t===null?null:new e(this._repo,t)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}};rv(jy),sv(jy);
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const My={};function Ny(e,t,n,r,i){let a=r||e.options.databaseURL;a===void 0&&(e.options.projectId||Dm(`Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().`),wm(`Using default host for project `,e.options.projectId),a=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=Dy(a,i),s=o.repoInfo,c,l;typeof process<`u`&&(l={}.FIREBASE_DATABASE_EMULATOR_HOST),l?(c=!0,a=`http://${l}?ns=${s.namespace}`,o=Dy(a,i),s=o.repoInfo):c=!o.repoInfo.secure;let u=i&&c?new Xm(Xm.OWNER):new Ym(e.name,e.options,t);Xv(`Invalid Firebase Database URL`,o),!V(o.path)&&Dm(`Database URL must point to the root of a Firebase Database (not including a child path).`);let d=Fy(s,e,u,new Jm(e,n));return new Iy(d,e)}function Py(e,t){let n=My[t];(!n||n[e.key]!==e)&&Dm(`Database ${t}(${e.repoInfo_}) has already been deleted.`),fy(e),delete n[e.key]}function Fy(e,t,n,r){let i=My[t.name];i||(i={},My[t.name]=i);let a=i[e.toURLString()];return a&&Dm(`Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.`),a=new ny(e,!1,n,r),i[e.toURLString()]=a,a}var Iy=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type=`database`,this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ry(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||=new jy(this._repo,R()),this._rootInternal}_delete(){return this._rootInternal!==null&&(Py(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Dm(`Cannot call `+e+` on a deleted database.`)}};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ly(e){dm(Rc),Mc(new Hs(`database`,(e,{instanceIdentifier:t})=>{let n=e.getProvider(`app`).getImmediate(),r=e.getProvider(`auth-internal`),i=e.getProvider(`app-check-internal`);return Ny(n,r,i,t)},`PUBLIC`).setMultipleInstances(!0)),Vc(cm,lm,e),Vc(cm,lm,`esm2020`)}Lh.prototype.simpleListen=function(e,t){this.sendRequest(`q`,{p:e},t)},Lh.prototype.echo=function(e,t){this.sendRequest(`echo`,{d:e},t)},Ly();var Ry=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},zy={},By,Vy;(function(){var e;function t(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(e,t,n){n||=0;var r=Array(16);if(typeof t==`string`)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var a=e.g[3],o=t+(a^n&(i^a))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=a+(i^t&(n^i))+r[1]+3905402710&4294967295,a=t+(o<<12&4294967295|o>>>20),o=i+(n^a&(t^n))+r[2]+606105819&4294967295,i=a+(o<<17&4294967295|o>>>15),o=n+(t^i&(a^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(a^n&(i^a))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=a+(i^t&(n^i))+r[5]+1200080426&4294967295,a=t+(o<<12&4294967295|o>>>20),o=i+(n^a&(t^n))+r[6]+2821735955&4294967295,i=a+(o<<17&4294967295|o>>>15),o=n+(t^i&(a^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(a^n&(i^a))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=a+(i^t&(n^i))+r[9]+2336552879&4294967295,a=t+(o<<12&4294967295|o>>>20),o=i+(n^a&(t^n))+r[10]+4294925233&4294967295,i=a+(o<<17&4294967295|o>>>15),o=n+(t^i&(a^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(a^n&(i^a))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=a+(i^t&(n^i))+r[13]+4254626195&4294967295,a=t+(o<<12&4294967295|o>>>20),o=i+(n^a&(t^n))+r[14]+2792965006&4294967295,i=a+(o<<17&4294967295|o>>>15),o=n+(t^i&(a^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^a&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=a+(n^i&(t^n))+r[6]+3225465664&4294967295,a=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(a^t))+r[11]+643717713&4294967295,i=a+(o<<14&4294967295|o>>>18),o=n+(a^t&(i^a))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^a&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=a+(n^i&(t^n))+r[10]+38016083&4294967295,a=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(a^t))+r[15]+3634488961&4294967295,i=a+(o<<14&4294967295|o>>>18),o=n+(a^t&(i^a))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^a&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=a+(n^i&(t^n))+r[14]+3275163606&4294967295,a=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(a^t))+r[3]+4107603335&4294967295,i=a+(o<<14&4294967295|o>>>18),o=n+(a^t&(i^a))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^a&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=a+(n^i&(t^n))+r[2]+4243563512&4294967295,a=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(a^t))+r[7]+1735328473&4294967295,i=a+(o<<14&4294967295|o>>>18),o=n+(a^t&(i^a))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^a)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=a+(t^n^i)+r[8]+2272392833&4294967295,a=t+(o<<11&4294967295|o>>>21),o=i+(a^t^n)+r[11]+1839030562&4294967295,i=a+(o<<16&4294967295|o>>>16),o=n+(i^a^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^a)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=a+(t^n^i)+r[4]+1272893353&4294967295,a=t+(o<<11&4294967295|o>>>21),o=i+(a^t^n)+r[7]+4139469664&4294967295,i=a+(o<<16&4294967295|o>>>16),o=n+(i^a^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^a)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=a+(t^n^i)+r[0]+3936430074&4294967295,a=t+(o<<11&4294967295|o>>>21),o=i+(a^t^n)+r[3]+3572445317&4294967295,i=a+(o<<16&4294967295|o>>>16),o=n+(i^a^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^a)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=a+(t^n^i)+r[12]+3873151461&4294967295,a=t+(o<<11&4294967295|o>>>21),o=i+(a^t^n)+r[15]+530742520&4294967295,i=a+(o<<16&4294967295|o>>>16),o=n+(i^a^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~a))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=a+(n^(t|~i))+r[7]+1126891415&4294967295,a=t+(o<<10&4294967295|o>>>22),o=i+(t^(a|~n))+r[14]+2878612391&4294967295,i=a+(o<<15&4294967295|o>>>17),o=n+(a^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~a))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=a+(n^(t|~i))+r[3]+2399980690&4294967295,a=t+(o<<10&4294967295|o>>>22),o=i+(t^(a|~n))+r[10]+4293915773&4294967295,i=a+(o<<15&4294967295|o>>>17),o=n+(a^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~a))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=a+(n^(t|~i))+r[15]+4264355552&4294967295,a=t+(o<<10&4294967295|o>>>22),o=i+(t^(a|~n))+r[6]+2734768916&4294967295,i=a+(o<<15&4294967295|o>>>17),o=n+(a^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~a))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=a+(n^(t|~i))+r[11]+3174756917&4294967295,a=t+(o<<10&4294967295|o>>>22),o=i+(t^(a|~n))+r[2]+718787259&4294967295,i=a+(o<<15&4294967295|o>>>17),o=n+(a^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+a&4294967295}r.prototype.u=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.B,a=this.h,o=0;o<t;){if(a==0)for(;o<=n;)i(this,e,o),o+=this.blockSize;if(typeof e==`string`){for(;o<t;)if(r[a++]=e.charCodeAt(o++),a==this.blockSize){i(this,r),a=0;break}}else for(;o<t;)if(r[a++]=e[o++],a==this.blockSize){i(this,r),a=0;break}}this.h=a,this.o+=t},r.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function a(e,t){var n=s;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function o(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var a=e[i]|0;r&&a==t||(n[i]=a,r=!1)}this.g=n}var s={};function c(e){return-128<=e&&128>e?a(e,function(e){return new o([e|0],0>e?-1:0)}):new o([e|0],0>e?-1:0)}function l(e){if(isNaN(e)||!isFinite(e))return d;if(0>e)return g(l(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new o(t,0)}function u(e,t){if(e.length==0)throw Error(`number format error: empty string`);if(t||=10,2>t||36<t)throw Error(`radix out of range: `+t);if(e.charAt(0)==`-`)return g(u(e.substring(1),t));if(0<=e.indexOf(`-`))throw Error(`number format error: interior "-" character`);for(var n=l(t**8),r=d,i=0;i<e.length;i+=8){var a=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+a),t);8>a?(a=l(t**+a),r=r.j(a).add(l(o))):(r=r.j(n),r=r.add(l(o)))}return r}var d=c(0),f=c(1),p=c(16777216);e=o.prototype,e.m=function(){if(h(this))return-g(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(e||=10,2>e||36<e)throw Error(`radix out of range: `+e);if(m(this))return`0`;if(h(this))return`-`+g(this).toString(e);for(var t=l(e**6),n=this,r=``;;){var i=b(n,t).g;n=_(n,i.j(t));var a=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,m(n))return a+r;for(;6>a.length;)a=`0`+a;r=a+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function m(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function h(e){return e.h==-1}e.l=function(e){return e=_(this,e),h(e)?-1:m(e)?0:1};function g(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new o(n,~e.h).add(f)}e.abs=function(){return h(this)?g(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var a=r+(this.i(i)&65535)+(e.i(i)&65535),s=(a>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);r=s>>>16,a&=65535,s&=65535,n[i]=s<<16|a}return new o(n,n[n.length-1]&-2147483648?-1:0)};function _(e,t){return e.add(g(t))}e.j=function(e){if(m(this)||m(e))return d;if(h(this))return h(e)?g(this).j(g(e)):g(g(this).j(e));if(h(e))return g(this.j(g(e)));if(0>this.l(p)&&0>e.l(p))return l(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var a=this.i(r)>>>16,s=this.i(r)&65535,c=e.i(i)>>>16,u=e.i(i)&65535;n[2*r+2*i]+=s*u,v(n,2*r+2*i),n[2*r+2*i+1]+=a*u,v(n,2*r+2*i+1),n[2*r+2*i+1]+=s*c,v(n,2*r+2*i+1),n[2*r+2*i+2]+=a*c,v(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new o(n,0)};function v(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function b(e,t){if(m(t))throw Error(`division by zero`);if(m(e))return new y(d,d);if(h(e))return t=b(g(e),t),new y(g(t.g),g(t.h));if(h(t))return t=b(e,g(t)),new y(g(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error(`slowDivide_ only works with positive integers.`);for(var n=f,r=t;0>=r.l(e);)n=ee(n),r=ee(r);var i=x(n,1),a=x(r,1);for(r=x(r,2),n=x(n,2);!m(r);){var o=a.add(r);0>=o.l(e)&&(i=i.add(n),a=o),r=x(r,1),n=x(n,1)}return t=_(e,i.j(t)),new y(i,t)}for(i=d;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:2**(r-48),a=l(n),o=a.j(t);h(o)||0<o.l(e);)n-=r,a=l(n),o=a.j(t);m(a)&&(a=f),i=i.add(a),e=_(e,o)}return new y(i,e)}e.A=function(e){return b(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new o(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new o(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new o(n,this.h^e.h)};function ee(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new o(n,e.h)}function x(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],a=0;a<r;a++)i[a]=0<t?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new o(i,e.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vy=zy.Md5=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=u,By=zy.Integer=o}).apply(Ry===void 0?typeof self<`u`?self:typeof window<`u`?window:{}:Ry);var Hy=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},Uy={},Wy,Gy,Ky,qy,Jy,Yy,Xy,Zy,Qy;(function(){var e,t=typeof Object.defineProperties==`function`?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function n(e){e=[typeof globalThis==`object`&&globalThis,e,typeof window==`object`&&window,typeof self==`object`&&self,typeof Hy==`object`&&Hy];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error(`Cannot find global object`)}var r=n(this);function i(e,n){if(n)a:{var i=r;e=e.split(`.`);for(var a=0;a<e.length-1;a++){var o=e[a];if(!(o in i))break a;i=i[o]}e=e[e.length-1],a=i[e],n=n(a),n!=a&&n!=null&&t(i,e,{configurable:!0,writable:!0,value:n})}}function a(e,t){e instanceof String&&(e+=``);var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i(`Array.prototype.values`,function(e){return e||function(){return a(this,function(e,t){return t})}});var o=o||{},s=this||self;function c(e){var t=typeof e;return t=t==`object`?e?Array.isArray(e)?`array`:t:`null`:t,t==`array`||t==`object`&&typeof e.length==`number`}function l(e){var t=typeof e;return t==`object`&&e!=null||t==`function`}function u(e,t,n){return e.call.apply(e.bind,arguments)}function d(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function f(e,t,n){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf(`native code`)!=-1?u:d,f.apply(null,arguments)}function p(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function m(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function h(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function g(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(c(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}class _{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function v(e){return/^[\s\xa0]*$/.test(e)}function y(){var e=s.navigator;return(e&&=e.userAgent)?e:``}function b(e){return b[` `](e),e}b[` `]=function(){};var ee=y().indexOf(`Gecko`)!=-1&&!(y().toLowerCase().indexOf(`webkit`)!=-1&&y().indexOf(`Edge`)==-1)&&!(y().indexOf(`Trident`)!=-1||y().indexOf(`MSIE`)!=-1)&&y().indexOf(`Edge`)==-1;function x(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function S(e,t){for(let n in e)t.call(void 0,e[n],n,e)}function te(e){let t={};for(let n in e)t[n]=e[n];return t}let ne=`constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf`.split(` `);function re(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<ne.length;t++)n=ne[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ie(e){var t=1;e=e.split(`:`);let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(`:`)),n}function ae(e){s.setTimeout(()=>{throw e},0)}function oe(){var e=fe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class se{constructor(){this.h=this.g=null}add(e,t){let n=ce.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var ce=new _(()=>new le,e=>e.reset());class le{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,de=!1,fe=new se,pe=()=>{let e=s.Promise.resolve(void 0);ue=()=>{e.then(me)}};var me=()=>{for(var e;e=oe();){try{e.h.call(e.g)}catch(e){ae(e)}var t=ce;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}de=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},`passive`,{get:function(){e=!0}});try{let e=()=>{};s.addEventListener(`test`,e,t),s.removeEventListener(`test`,e,t)}catch{}return e}();function _e(e,t){if(C.call(this,e?e.type:``),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key=``,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType=``,this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ee){a:{try{b(t.nodeName);var i=!0;break a}catch{}i=!1}i||(t=null)}}else n==`mouseover`?t=e.fromElement:n==`mouseout`&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX===void 0?r.pageX:r.clientX,this.clientY=r.clientY===void 0?r.pageY:r.clientY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX===void 0?e.pageX:e.clientX,this.clientY=e.clientY===void 0?e.pageY:e.clientY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||``,this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType==`string`?e.pointerType:ve[e.pointerType]||``,this.state=e.state,this.i=e,e.defaultPrevented&&_e.aa.h.call(this)}}m(_e,C);var ve={2:`touch`,3:`pen`,4:`mouse`};_e.prototype.h=function(){_e.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ye=`closure_listenable_`+(1e6*Math.random()|0),be=0;function xe(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++be,this.da=this.fa=!1}function Se(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Ce(e){this.src=e,this.g={},this.h=0}Ce.prototype.add=function(e,t,n,r,i){var a=e.toString();e=this.g[a],e||(e=this.g[a]=[],this.h++);var o=Te(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new xe(t,this.src,a,!!r,i),t.fa=n,e.push(t)),t};function we(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Array.prototype.indexOf.call(r,t,void 0),a;(a=0<=i)&&Array.prototype.splice.call(r,i,1),a&&(Se(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Te(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.da&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}var Ee=`closure_lm_`+(1e6*Math.random()|0),De={};function Oe(e,t,n,r,i){if(r&&r.once)return je(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)Oe(e,t[a],n,r,i);return null}return n=Le(n),e&&e[ye]?e.K(t,n,l(r)?!!r.capture:!!r,i):ke(e,t,n,!1,r,i)}function ke(e,t,n,r,i,a){if(!t)throw Error(`Invalid event type`);var o=l(i)?!!i.capture:!!i,s=Fe(e);if(s||(e[Ee]=s=new Ce(e)),n=s.add(t,n,r,o,a),n.proxy)return n;if(r=Ae(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ge||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(w(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error(`addEventListener and attachEvent are unavailable.`);return n}function Ae(){function e(n){return t.call(e.src,e.listener,n)}let t=Pe;return e}function je(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)je(e,t[a],n,r,i);return null}return n=Le(n),e&&e[ye]?e.L(t,n,l(r)?!!r.capture:!!r,i):ke(e,t,n,!0,r,i)}function Me(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)Me(e,t[a],n,r,i);else r=l(r)?!!r.capture:!!r,n=Le(n),e&&e[ye]?(e=e.i,t=String(t).toString(),t in e.g&&(a=e.g[t],n=Te(a,n,r,i),-1<n&&(Se(a[n]),Array.prototype.splice.call(a,n,1),a.length==0&&(delete e.g[t],e.h--)))):(e&&=Fe(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Te(t,n,r,i)),(n=-1<e?t[e]:null)&&Ne(n))}function Ne(e){if(typeof e!=`number`&&e&&!e.da){var t=e.src;if(t&&t[ye])we(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(w(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Fe(t))?(we(n,e),n.h==0&&(n.src=null,t[Ee]=null)):Se(e)}}}function w(e){return e in De?De[e]:De[e]=`on`+e}function Pe(e,t){if(e.da)e=!0;else{t=new _e(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&Ne(e),e=n.call(r,t)}return e}function Fe(e){return e=e[Ee],e instanceof Ce?e:null}var Ie=`__closure_events_fn_`+(1e9*Math.random()>>>0);function Le(e){return typeof e==`function`?e:(e[Ie]||(e[Ie]=function(t){return e.handleEvent(t)}),e[Ie])}function T(){he.call(this),this.i=new Ce(this),this.M=this,this.F=null}m(T,he),T.prototype[ye]=!0,T.prototype.removeEventListener=function(e,t,n,r){Me(this,e,t,n,r)};function Re(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,typeof t==`string`)t=new C(t,e);else if(t instanceof C)t.target=t.target||e;else{var i=t;t=new C(r,e),re(t,i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=t.g=n[a];i=ze(o,r,!0,t)&&i}if(o=t.g=e,i=ze(o,r,!0,t)&&i,i=ze(o,r,!1,t)&&i,n)for(a=0;a<n.length;a++)o=t.g=n[a],i=ze(o,r,!1,t)&&i}T.prototype.N=function(){if(T.aa.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Se(n[r]);delete e.g[t],e.h--}}this.F=null},T.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},T.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ze(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.da&&o.capture==n){var s=o.listener,c=o.ha||o.src;o.fa&&we(e.i,o),i=!1!==s.call(c,r)&&i}}return i&&!r.defaultPrevented}function Be(e,t,n){if(typeof e==`function`)n&&(e=f(e,n));else if(e&&typeof e.handleEvent==`function`)e=f(e.handleEvent,e);else throw Error(`Invalid listener argument`);return 2147483647<Number(t)?-1:s.setTimeout(e,t||0)}function Ve(e){e.g=Be(()=>{e.g=null,e.i&&(e.i=!1,Ve(e))},e.l);let t=e.h;e.h=null,e.m.apply(null,t)}class He extends he{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:Ve(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ue(e){he.call(this),this.h=e,this.g={}}m(Ue,he);var We=[];function Ge(e){x(e.g,function(e,t){this.g.hasOwnProperty(t)&&Ne(e)},e),e.g={}}Ue.prototype.N=function(){Ue.aa.N.call(this),Ge(this)},Ue.prototype.handleEvent=function(){throw Error(`EventHandler.handleEvent not implemented`)};var Ke=s.JSON.stringify,qe=s.JSON.parse,Je=class{stringify(e){return s.JSON.stringify(e,void 0)}parse(e){return s.JSON.parse(e,void 0)}};function Ye(){}Ye.prototype.h=null;function Xe(e){return e.h||=e.i()}function Ze(){}var Qe={OPEN:`a`,kb:`b`,Ja:`c`,wb:`d`};function $e(){C.call(this,`d`)}m($e,C);function et(){C.call(this,`c`)}m(et,C);var tt={},nt=null;function rt(){return nt||=new T}tt.La=`serverreachability`;function it(e){C.call(this,tt.La,e)}m(it,C);function at(e){let t=rt();Re(t,new it(t))}tt.STAT_EVENT=`statevent`;function ot(e,t){C.call(this,tt.STAT_EVENT,e),this.stat=t}m(ot,C);function E(e){let t=rt();Re(t,new ot(t,e))}tt.Ma=`timingevent`;function st(e,t){C.call(this,tt.Ma,e),this.size=t}m(st,C);function ct(e,t){if(typeof e!=`function`)throw Error(`Fn must not be null and must be a function`);return s.setTimeout(function(){e()},t)}function lt(){this.g=!0}lt.prototype.xa=function(){this.g=!1};function ut(e,t,n,r,i,a){e.info(function(){if(e.g)if(a)for(var o=``,s=a.split(`&`),c=0;c<s.length;c++){var l=s[c].split(`=`);if(1<l.length){var u=l[0];l=l[1];var d=u.split(`_`);o=2<=d.length&&d[1]==`type`?o+(u+`=`+l+`&`):o+(u+`=redacted&`)}}else o=null;else o=a;return`XMLHTTP REQ (`+r+`) [attempt `+i+`]: `+t+`
`+n+`
`+o})}function dt(e,t,n,r,i,a,o){e.info(function(){return`XMLHTTP RESP (`+r+`) [ attempt `+i+`]: `+t+`
`+n+`
`+a+` `+o})}function ft(e,t,n,r){e.info(function(){return`XMLHTTP TEXT (`+t+`): `+mt(e,n)+(r?` `+r:``)})}function pt(e,t){e.info(function(){return`TIMEOUT: `+t})}lt.prototype.info=function(){};function mt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if(a!=`noop`&&a!=`stop`&&a!=`close`)for(var o=1;o<i.length;o++)i[o]=``}}}}return Ke(n)}catch{return t}}var ht={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gt={lb:`complete`,Hb:`success`,Ja:`error`,Ia:`abort`,zb:`ready`,Ab:`readystatechange`,TIMEOUT:`timeout`,vb:`incrementaldata`,yb:`progress`,ob:`downloadprogress`,Pb:`uploadprogress`},_t;function vt(){}m(vt,Ye),vt.prototype.g=function(){return new XMLHttpRequest},vt.prototype.i=function(){return{}},_t=new vt;function yt(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new Ue(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bt}function bt(){this.i=null,this.g=``,this.h=!1}var xt={},St={};function Ct(e,t,n){e.L=1,e.v=k(qt(t)),e.m=n,e.P=!0,wt(e,null)}function wt(e,t){e.F=Date.now(),Dt(e),e.A=qt(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),ln(n.i,`t`,r),e.C=0,n=e.j.J,e.h=new bt,e.g=er(e.j,n?t:null,!e.m),0<e.O&&(e.M=new He(f(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i=`readystatechange`;Array.isArray(i)||(i&&(We[0]=i.toString()),i=We);for(var a=0;a<i.length;a++){var o=Oe(n,i[a],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?te(e.H):{},e.m?(e.u||=`POST`,t[`Content-Type`]=`application/x-www-form-urlencoded`,e.g.ea(e.A,e.u,e.m,t)):(e.u=`GET`,e.g.ea(e.A,e.u,null,t)),at(),ut(e.i,e.u,e.A,e.l,e.R,e.m)}yt.prototype.ca=function(e){e=e.target;let t=this.M;t&&jn(e)==3?t.j():this.Y(e)},yt.prototype.Y=function(e){try{if(e==this.g)a:{let f=jn(this.g);var t=this.g.Ba();let p=this.g.Z();if(!(3>f)&&(f!=3||this.g&&(this.h.h||this.g.oa()||Mn(this.g)))){this.J||f!=4||t==7||at(t==8||0>=p?3:2),kt(this);var n=this.g.Z();this.X=n;b:if(Tt(this)){var r=Mn(this.g);e=``;var i=r.length,a=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>`u`){jt(this),At(this);var o=``;break b}this.h.i=new s.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(a&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=n==200,dt(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){b:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader(`X-HTTP-Initial-Response`):null)&&!v(c)){var u=c;break b}}u=null}if(n=u)ft(this.i,this.l,n,`Initial handshake response via X-HTTP-Initial-Response`),this.K=!0,Mt(this,n);else{this.o=!1,this.s=3,E(12),jt(this),At(this);break a}}if(this.P){n=!0;let e;for(;!this.J&&this.C<o.length;)if(e=Et(this,o),e==St){f==4&&(this.s=4,E(14),n=!1),ft(this.i,this.l,null,`[Incomplete Response]`);break}else if(e==xt){this.s=4,E(15),ft(this.i,this.l,o,`[Invalid Chunk]`),n=!1;break}else ft(this.i,this.l,e,null),Mt(this,e);if(Tt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),f!=4||o.length!=0||this.h.h||(this.s=1,E(16),n=!1),this.o=this.o&&n,!n)ft(this.i,this.l,o,`[Invalid Chunked Response]`),jt(this),At(this);else if(0<o.length&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.ba&&!d.M&&(d.j.info(`Great, no buffering proxy detected. Bytes received: `+o.length),Kn(d),d.M=!0,E(11))}}else ft(this.i,this.l,o,null),Mt(this,o);f==4&&jt(this),this.o&&!this.J&&(f==4?Yn(this.j,this):(this.o=!1,Dt(this)))}else Nn(this.g),n==400&&0<o.indexOf(`Unknown SID`)?(this.s=3,E(12)):(this.s=0,E(13)),jt(this),At(this)}}}catch{}};function Tt(e){return e.g?e.u==`GET`&&e.L!=2&&e.j.Ca:!1}function Et(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?St:(n=Number(t.substring(n,r)),isNaN(n)?xt:(r+=1,r+n>t.length?St:(t=t.slice(r,r+n),e.C=r+n,t)))}yt.prototype.cancel=function(){this.J=!0,jt(this)};function Dt(e){e.S=Date.now()+e.I,Ot(e,e.I)}function Ot(e,t){if(e.B!=null)throw Error(`WatchDog timer not null`);e.B=ct(f(e.ba,e),t)}function kt(e){e.B&&(s.clearTimeout(e.B),e.B=null)}yt.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(pt(this.i,this.A),this.L!=2&&(at(),E(17)),jt(this),this.s=2,At(this)):Ot(this,this.S-e)};function At(e){e.j.G==0||e.J||Yn(e.j,e)}function jt(e){kt(e);var t=e.M;t&&typeof t.ma==`function`&&t.ma(),e.M=null,Ge(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Mt(e,t){try{var n=e.j;if(n.G!=0&&(n.g==e||Lt(n.h,e))){if(!e.K&&Lt(n.h,e)&&n.G==3){try{var r=n.Da.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){a:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Jn(n),Ln(n);else break a;Gn(n),E(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&n.v==0&&!n.C&&(n.C=ct(f(n.Za,n),6e3));if(1>=It(n.h)&&n.ca){try{n.ca()}catch{}n.ca=void 0}}else Zn(n,11)}else if((e.K||n.g==e)&&Jn(n),!v(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]==`c`){n.K=l[1],n.ia=l[2];let t=l[3];t!=null&&(n.la=t,n.j.info(`VER=`+n.la));let i=l[4];i!=null&&(n.Aa=i,n.j.info(`SVER=`+n.Aa));let u=l[5];u!=null&&typeof u==`number`&&0<u&&(r=1.5*u,n.L=r,n.j.info(`backChannelRequestTimeoutMs_=`+r)),r=n;let d=e.g;if(d){let e=d.g?d.g.getResponseHeader(`X-Client-Wire-Protocol`):null;if(e){var a=r.h;a.g||e.indexOf(`spdy`)==-1&&e.indexOf(`quic`)==-1&&e.indexOf(`h2`)==-1||(a.j=a.l,a.g=new Set,a.h&&(Rt(a,a.h),a.h=null))}if(r.D){let e=d.g?d.g.getResponseHeader(`X-HTTP-Session-Id`):null;e&&(r.ya=e,O(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info(`Handshake RTT: `+n.R+`ms`)),r=n;var o=e;if(r.qa=$n(r,r.J?r.ia:null,r.W),o.K){zt(r.h,o);var s=o,c=r.L;c&&(s.I=c),s.B&&(kt(s),Dt(s)),r.g=o}else Wn(r);0<n.i.length&&zn(n)}else l[0]!=`stop`&&l[0]!=`close`||Zn(n,7);else n.G==3&&(l[0]==`stop`||l[0]==`close`?l[0]==`stop`?Zn(n,7):In(n):l[0]!=`noop`&&n.l&&n.l.ta(l),n.v=0)}}at(4)}catch{}}var Nt=class{constructor(e,t){this.g=e,this.map=t}};function Pt(e){this.l=e||10,s.PerformanceNavigationTiming?(e=s.performance.getEntriesByType(`navigation`),e=0<e.length&&(e[0].nextHopProtocol==`hq`||e[0].nextHopProtocol==`h2`)):e=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ft(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function It(e){return e.h?1:e.g?e.g.size:0}function Lt(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Rt(e,t){e.g?e.g.add(t):e.h=t}function zt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Pt.prototype.cancel=function(){if(this.i=Bt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let e of this.g.values())e.cancel();this.g.clear()}};function Bt(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return h(e.i)}function Vt(e){if(e.V&&typeof e.V==`function`)return e.V();if(typeof Map<`u`&&e instanceof Map||typeof Set<`u`&&e instanceof Set)return Array.from(e.values());if(typeof e==`string`)return e.split(``);if(c(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ht(e){if(e.na&&typeof e.na==`function`)return e.na();if(!e.V||typeof e.V!=`function`){if(typeof Map<`u`&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<`u`&&e instanceof Set)){if(c(e)||typeof e==`string`){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}function Ut(e,t){if(e.forEach&&typeof e.forEach==`function`)e.forEach(t,void 0);else if(c(e)||typeof e==`string`)Array.prototype.forEach.call(e,t,void 0);else for(var n=Ht(e),r=Vt(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}var Wt=RegExp(`^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$`);function Gt(e,t){if(e){e=e.split(`&`);for(var n=0;n<e.length;n++){var r=e[n].indexOf(`=`),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g,` `)):``)}}}function Kt(e){if(this.g=this.o=this.j=``,this.s=null,this.m=this.l=``,this.h=!1,e instanceof Kt){this.h=e.h,D(this,e.j),this.o=e.o,this.g=e.g,Jt(this,e.s),this.l=e.l;var t=e.i,n=new an;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Yt(this,n),this.m=e.m}else e&&(t=String(e).match(Wt))?(this.h=!1,D(this,t[1]||``,!0),this.o=Xt(t[2]||``),this.g=Xt(t[3]||``,!0),Jt(this,t[4]),this.l=Xt(t[5]||``,!0),Yt(this,t[6]||``,!0),this.m=Xt(t[7]||``)):(this.h=!1,this.i=new an(null,this.h))}Kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Zt(t,$t,!0),`:`);var n=this.g;return(n||t==`file`)&&(e.push(`//`),(t=this.o)&&e.push(Zt(t,$t,!0),`@`),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,`%$1`)),n=this.s,n!=null&&e.push(`:`,String(n))),(n=this.l)&&(this.g&&n.charAt(0)!=`/`&&e.push(`/`),e.push(Zt(n,n.charAt(0)==`/`?tn:en,!0))),(n=this.i.toString())&&e.push(`?`,n),(n=this.m)&&e.push(`#`,Zt(n,rn)),e.join(``)};function qt(e){return new Kt(e)}function D(e,t,n){e.j=n?Xt(t,!0):t,e.j&&=e.j.replace(/:$/,``)}function Jt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error(`Bad port number `+t);e.s=t}else e.s=null}function Yt(e,t,n){t instanceof an?(e.i=t,dn(e.i,e.h)):(n||(t=Zt(t,nn)),e.i=new an(t,e.h))}function O(e,t,n){e.i.set(t,n)}function k(e){return O(e,`zx`,Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Xt(e,t){return e?t?decodeURI(e.replace(/%25/g,`%2525`)):decodeURIComponent(e):``}function Zt(e,t,n){return typeof e==`string`?(e=encodeURI(e).replace(t,Qt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,`%$1`)),e):null}function Qt(e){return e=e.charCodeAt(0),`%`+(e>>4&15).toString(16)+(e&15).toString(16)}var $t=/[#\/\?@]/g,en=/[#\?:]/g,tn=/[#\?]/g,nn=/[#\?@]/g,rn=/#/g;function an(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function on(e){e.g||(e.g=new Map,e.h=0,e.i&&Gt(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g,` `)),n)}))}e=an.prototype,e.add=function(e,t){on(this),this.i=null,e=un(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function sn(e,t){on(e),t=un(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function cn(e,t){return on(e),t=un(e,t),e.g.has(t)}e.forEach=function(e,t){on(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.na=function(){on(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){on(this);let t=[];if(typeof e==`string`)cn(this,e)&&(t=t.concat(this.g.get(un(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return on(this),this.i=null,e=un(this,e),cn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=this.V(e),0<e.length?String(e[0]):t):t};function ln(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(un(e,t),h(n)),e.h+=n.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return``;let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let a=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=a;o[r]!==``&&(i+=`=`+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join(`&`)};function un(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function dn(e,t){t&&!e.j&&(on(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),ln(this,n,e))},e)),e.j=t}function fn(e,t){let n=new lt;if(s.Image){let r=new Image;r.onload=p(mn,n,`TestLoadImage: loaded`,!0,t,r),r.onerror=p(mn,n,`TestLoadImage: error`,!1,t,r),r.onabort=p(mn,n,`TestLoadImage: abort`,!1,t,r),r.ontimeout=p(mn,n,`TestLoadImage: timeout`,!1,t,r),s.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function pn(e,t){let n=new lt,r=new AbortController,i=setTimeout(()=>{r.abort(),mn(n,`TestPingServer: timeout`,!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(i),e.ok?mn(n,`TestPingServer: ok`,!0,t):mn(n,`TestPingServer: server error`,!1,t)}).catch(()=>{clearTimeout(i),mn(n,`TestPingServer: error`,!1,t)})}function mn(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch{}}function hn(){this.g=new Je}function gn(e,t,n){let r=n||``;try{Ut(e,function(e,n){let i=e;l(e)&&(i=Ke(e)),t.push(r+n+`=`+encodeURIComponent(i))})}catch(e){throw t.push(r+`type=`+encodeURIComponent(`_badmap`)),e}}function _n(e){this.l=e.Ub||null,this.j=e.eb||!1}m(_n,Ye),_n.prototype.g=function(){return new vn(this.l,this.j)},_n.prototype.i=function(e){return function(){return e}}({});function vn(e,t){T.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText=``,this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B=`GET`,this.A=``,this.g=!1,this.v=this.j=this.l=null}m(vn,T),e=vn.prototype,e.open=function(e,t){if(this.readyState!=0)throw this.abort(),Error(`Error reopening a connection`);this.B=e,this.A=t,this.readyState=1,xn(this)},e.send=function(e){if(this.readyState!=1)throw this.abort(),Error(`need to call open() first. `);this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||s).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText=``,this.u=new Headers,this.status=0,this.j&&this.j.cancel(`Request was aborted.`).catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType===`arraybuffer`)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(s.ReadableStream!==void 0&&`body`in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error(`responseType must be empty for "streamBinaryChunks" mode responses.`);this.response=[]}else this.response=this.responseText=``,this.v=new TextDecoder;yn(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))};function yn(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array;(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?bn(this):xn(this),this.readyState==3&&yn(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,bn(this))},e.Qa=function(e){this.g&&(this.response=e,bn(this))},e.ga=function(){this.g&&bn(this)};function bn(e){e.readyState=4,e.l=null,e.j=null,e.v=null,xn(e)}e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||``},e.getAllResponseHeaders=function(){if(!this.h)return``;let e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+`: `+n[1]),n=t.next();return e.join(`\r
`)};function xn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(vn.prototype,`withCredentials`,{get:function(){return this.m===`include`},set:function(e){this.m=e?`include`:`same-origin`}});function Sn(e){let t=``;return x(e,function(e,n){t+=n,t+=`:`,t+=e,t+=`\r
`}),t}function Cn(e,t,n){a:{for(r in n){var r=!1;break a}r=!0}r||(n=Sn(n),typeof e==`string`?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function A(e){T.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D=``,this.m=0,this.l=``,this.j=this.B=this.u=this.A=!1,this.I=null,this.H=``,this.J=!1}m(A,T);var wn=/^https?$/i,Tn=[`POST`,`PUT`];e=A.prototype,e.Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error(`[goog.net.XhrIo] Object is active with another request=`+this.D+`; newUri=`+e);t=t?t.toUpperCase():`GET`,this.D=e,this.l=``,this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_t.g(),this.v=this.o?Xe(this.o):Xe(_t),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(e){En(this,e);return}if(e=n||``,n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys==`function`&&typeof r.get==`function`)for(let e of r.keys())n.set(e,r.get(e));else throw Error(`Unknown input type for opt_headers: `+String(r));r=Array.from(n.keys()).find(e=>e.toLowerCase()==`content-type`),i=s.FormData&&e instanceof s.FormData,!(0<=Array.prototype.indexOf.call(Tn,t,void 0))||r||i||n.set(`Content-Type`,`application/x-www-form-urlencoded;charset=utf-8`);for(let[e,t]of n)this.g.setRequestHeader(e,t);this.H&&(this.g.responseType=this.H),`withCredentials`in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{An(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){En(this,e)}};function En(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Dn(e),kn(e)}function Dn(e){e.A||(e.A=!0,Re(e,`complete`),Re(e,`error`))}e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,Re(this,`complete`),Re(this,`abort`),kn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),A.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?On(this):this.bb())},e.bb=function(){On(this)};function On(e){if(e.h&&o!==void 0&&(!e.v[1]||jn(e)!=4||e.Z()!=2)){if(e.u&&jn(e)==4)Be(e.Ea,0,e);else if(Re(e,`readystatechange`),jn(e)==4){e.h=!1;try{let o=e.Z();a:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break a;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.D).match(Wt)[1]||null;!i&&s.self&&s.self.location&&(i=s.self.location.protocol.slice(0,-1)),r=!wn.test(i?i.toLowerCase():``)}n=r}if(n)Re(e,`complete`),Re(e,`success`);else{e.m=6;try{var a=2<jn(e)?e.g.statusText:``}catch{a=``}e.l=a+` [`+e.Z()+`]`,Dn(e)}}finally{kn(e)}}}}function kn(e,t){if(e.g){An(e);let n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||Re(e,`ready`);try{n.onreadystatechange=r}catch{}}}function An(e){e.I&&(s.clearTimeout(e.I),e.I=null)}e.isActive=function(){return!!this.g};function jn(e){return e.g?e.g.readyState:0}e.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:``}catch{return``}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),qe(t)}};function Mn(e){try{if(!e.g)return null;if(`response`in e.g)return e.g.response;switch(e.H){case``:case`text`:return e.g.responseText;case`arraybuffer`:if(`mozResponseArrayBuffer`in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Nn(e){let t={};e=(e.g&&2<=jn(e)&&e.g.getAllResponseHeaders()||``).split(`\r
`);for(let r=0;r<e.length;r++){if(v(e[r]))continue;var n=ie(e[r]);let i=n[0];if(n=n[1],typeof n!=`string`)continue;n=n.trim();let a=t[i]||[];t[i]=a,a.push(n)}S(t,function(e){return e.join(`, `)})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l==`string`?this.l:String(this.l)};function Pn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Fn(e){this.Aa=0,this.i=[],this.j=new lt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pn(`failFast`,!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pn(`baseRetryDelayMs`,5e3,e),this.cb=Pn(`retryDelaySeedMs`,1e4,e),this.Wa=Pn(`forwardChannelMaxRetries`,2,e),this.wa=Pn(`forwardChannelRequestTimeoutMs`,2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K=``,this.h=new Pt(e&&e.concurrentRequestLimit),this.Da=new hn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Fn.prototype,e.la=8,e.G=1,e.connect=function(e,t,n,r){E(0),this.W=e,this.H=t||{},n&&r!==void 0&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=$n(this,null,this.W),zn(this)};function In(e){if(Rn(e),e.G==3){var t=e.U++,n=qt(e.I);if(O(n,`SID`,e.K),O(n,`RID`,t),O(n,`TYPE`,`terminate`),Hn(e,n),t=new yt(e,e.j,t),t.L=2,t.v=k(qt(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(t.v.toString(),``)}catch{}!n&&s.Image&&(new Image().src=t.v,n=!0),n||(t.g=er(t.j,null),t.g.ea(t.v)),t.F=Date.now(),Dt(t)}Qn(e)}function Ln(e){e.g&&(Kn(e),e.g.cancel(),e.g=null)}function Rn(e){Ln(e),e.u&&(s.clearTimeout(e.u),e.u=null),Jn(e),e.h.cancel(),e.s&&(typeof e.s==`number`&&s.clearTimeout(e.s),e.s=null)}function zn(e){if(!Ft(e.h)&&!e.s){e.s=!0;var t=e.Ga;ue||pe(),de||(ue(),de=!0),fe.add(t,e),e.B=0}}function Bn(e,t){return It(e.h)>=e.h.j-(e.s?1:0)?!1:e.s?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.B>=(e.Va?0:e.Wa)?!1:(e.s=ct(f(e.Ga,e,t),Xn(e,e.B)),e.B++,!0)}e.Ga=function(e){if(this.s)if(this.s=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new yt(this,this.j,e),a=this.o;if(this.S&&(a?(a=te(a),re(a,this.S)):a=this.S),this.m!==null||this.O||(i.H=a,a=null),this.P)a:{for(var t=0,n=0;n<this.i.length;n++){b:{var r=this.i[n];if(`__data__`in r.map&&(r=r.map.__data__,typeof r==`string`)){r=r.length;break b}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break a}if(t===4096||n===this.i.length-1){t=n+1;break a}}t=1e3}else t=1e3;t=Un(this,i,t),n=qt(this.I),O(n,`RID`,e),O(n,`CVER`,22),this.D&&O(n,`X-HTTP-Session-Id`,this.D),Hn(this,n),a&&(this.O?t=`headers=`+encodeURIComponent(String(Sn(a)))+`&`+t:this.m&&Cn(n,this.m,a)),Rt(this.h,i),this.Ua&&O(n,`TYPE`,`init`),this.P?(O(n,`$req`,t),O(n,`SID`,`null`),i.T=!0,Ct(i,n,null)):Ct(i,n,t),this.G=2}}else this.G==3&&(e?Vn(this,e):this.i.length==0||Ft(this.h)||Vn(this))};function Vn(e,t){var n;n=t?t.l:e.U++;let r=qt(e.I);O(r,`SID`,e.K),O(r,`RID`,n),O(r,`AID`,e.T),Hn(e,r),e.m&&e.o&&Cn(r,e.m,e.o),n=new yt(e,e.j,n,e.B+1),e.m===null&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Un(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Rt(e.h,n),Ct(n,r,t)}function Hn(e,t){e.H&&x(e.H,function(e,n){O(t,n,e)}),e.l&&Ut({},function(e,n){O(t,n,e)})}function Un(e,t,n){n=Math.min(e.i.length,n);var r=e.l?f(e.l.Na,e.l,e):null;a:{var i=e.i;let t=-1;for(;;){let e=[`count=`+n];t==-1?0<n?(t=i[0].g,e.push(`ofs=`+t)):t=0:e.push(`ofs=`+t);let a=!0;for(let o=0;o<n;o++){let n=i[o].g,s=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),a=!1;else try{gn(s,e,`req`+n+`_`)}catch{r&&r(s)}}if(a){r=e.join(`&`);break a}}}return e=e.i.splice(0,n),t.D=e,r}function Wn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;ue||pe(),de||(ue(),de=!0),fe.add(t,e),e.v=0}}function Gn(e){return e.g||e.u||3<=e.v?!1:(e.Y++,e.u=ct(f(e.Fa,e),Xn(e,e.v)),e.v++,!0)}e.Fa=function(){if(this.u=null,qn(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var e=2*this.R;this.j.info(`BP detection timer enabled: `+e),this.A=ct(f(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info(`BP detection timeout reached.`),this.j.info(`Buffering proxy detected and switch to long-polling!`),this.F=!1,this.M=!0,E(10),Ln(this),qn(this))};function Kn(e){e.A!=null&&(s.clearTimeout(e.A),e.A=null)}function qn(e){e.g=new yt(e,e.j,`rpc`,e.Y),e.m===null&&(e.g.H=e.o),e.g.O=0;var t=qt(e.qa);O(t,`RID`,`rpc`),O(t,`SID`,e.K),O(t,`AID`,e.T),O(t,`CI`,e.F?`0`:`1`),!e.F&&e.ja&&O(t,`TO`,e.ja),O(t,`TYPE`,`xmlhttp`),Hn(e,t),e.m&&e.o&&Cn(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=k(qt(t)),n.m=null,n.P=!0,wt(n,e)}e.Za=function(){this.C!=null&&(this.C=null,Ln(this),Gn(this),E(19))};function Jn(e){e.C!=null&&(s.clearTimeout(e.C),e.C=null)}function Yn(e,t){var n=null;if(e.g==t){Jn(e),Kn(e),e.g=null;var r=2}else if(Lt(e.h,t))n=t.D,zt(e.h,t),r=1;else return;if(e.G!=0){if(t.o)if(r==1){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;r=rt(),Re(r,new st(r,n)),zn(e)}else Wn(e);else if(i=t.s,i==3||i==0&&0<t.X||!(r==1&&Bn(e,t)||r==2&&Gn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Zn(e,5);break;case 4:Zn(e,10);break;case 3:Zn(e,6);break;default:Zn(e,2)}}}function Xn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function Zn(e,t){if(e.j.info(`Error code `+t),t==2){var n=f(e.fb,e),r=e.Xa;let t=!r;r=new Kt(r||`//www.google.com/images/cleardot.gif`),s.location&&s.location.protocol==`http`||D(r,`https`),k(r),t?fn(r.toString(),n):pn(r.toString(),n)}else E(2);e.G=0,e.l&&e.l.sa(t),Qn(e),Rn(e)}e.fb=function(e){e?(this.j.info(`Successfully pinged google.com`),E(2)):(this.j.info(`Failed to ping google.com`),E(1))};function Qn(e){if(e.G=0,e.ka=[],e.l){let t=Bt(e.h);(t.length!=0||e.i.length!=0)&&(g(e.ka,t),g(e.ka,e.i),e.h.i.length=0,h(e.i),e.i.length=0),e.l.ra()}}function $n(e,t,n){var r=n instanceof Kt?qt(n):new Kt(n);if(r.g!=``)t&&(r.g=t+`.`+r.g),Jt(r,r.s);else{var i=s.location;r=i.protocol,t=t?t+`.`+i.hostname:i.hostname,i=+i.port;var a=new Kt(null);r&&D(a,r),t&&(a.g=t),i&&Jt(a,i),n&&(a.l=n),r=a}return n=e.D,t=e.ya,n&&t&&O(r,n,t),O(r,`VER`,e.la),Hn(e,r),r}function er(e,t,n){if(t&&!e.J)throw Error(`Can't create secondary domain capable XhrIo object.`);return t=e.Ca&&!e.pa?new A(new _n({eb:n})):new A(e.pa),t.Ha(e.J),t}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function tr(){}e=tr.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function nr(){}nr.prototype.g=function(e,t){return new rr(e,t)};function rr(e,t){T.call(this),this.g=new Fn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e[`X-Client-Protocol`]=`webchannel`:e={"X-Client-Protocol":`webchannel`}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e[`X-WebChannel-Content-Type`]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e[`X-WebChannel-Client-Profile`]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!v(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t&&=t.httpSessionIdParam)&&!v(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new or(this)}m(rr,T),rr.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rr.prototype.close=function(){In(this.g)},rr.prototype.o=function(e){var t=this.g;if(typeof e==`string`){var n={};n.__data__=e,e=n}else this.u&&(n={},n.__data__=Ke(e),e=n);t.i.push(new Nt(t.Ya++,e)),t.G==3&&zn(t)},rr.prototype.N=function(){this.g.l=null,delete this.j,In(this.g),delete this.g,rr.aa.N.call(this)};function ir(e){$e.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){a:{for(let n in t){e=n;break a}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}m(ir,$e);function ar(){et.call(this),this.status=1}m(ar,et);function or(e){this.g=e}m(or,tr),or.prototype.ua=function(){Re(this.g,`a`)},or.prototype.ta=function(e){Re(this.g,new ir(e))},or.prototype.sa=function(e){Re(this.g,new ar)},or.prototype.ra=function(){Re(this.g,`b`)},nr.prototype.createWebChannel=nr.prototype.g,rr.prototype.send=rr.prototype.o,rr.prototype.open=rr.prototype.m,rr.prototype.close=rr.prototype.close,Qy=Uy.createWebChannelTransport=function(){return new nr},Zy=Uy.getStatEventTarget=function(){return rt()},Xy=Uy.Event=tt,Yy=Uy.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,Jy=Uy.ErrorCode=ht,gt.COMPLETE=`complete`,qy=Uy.EventType=gt,Ze.EventType=Qe,Qe.OPEN=`a`,Qe.CLOSE=`b`,Qe.ERROR=`c`,Qe.MESSAGE=`d`,T.prototype.listen=T.prototype.K,Ky=Uy.WebChannel=Ze,Gy=Uy.FetchXmlHttpFactory=_n,A.prototype.listenOnce=A.prototype.L,A.prototype.getLastError=A.prototype.Ka,A.prototype.getLastErrorCode=A.prototype.Ba,A.prototype.getStatus=A.prototype.Z,A.prototype.getResponseJson=A.prototype.Oa,A.prototype.getResponseText=A.prototype.oa,A.prototype.send=A.prototype.ea,A.prototype.setWithCredentials=A.prototype.Ha,Wy=Uy.XhrIo=A}).apply(Hy===void 0?typeof self<`u`?self:typeof window<`u`?window:{}:Hy);const $y=`@firebase/firestore`,eb=`4.9.0`;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var tb=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?`uid:`+this.uid:`anonymous-user`}isEqual(e){return e.uid===this.uid}};tb.UNAUTHENTICATED=new tb(null),tb.GOOGLE_CREDENTIALS=new tb(`google-credentials-uid`),tb.FIRST_PARTY=new tb(`first-party-uid`),tb.MOCK_USER=new tb(`mock-user`);
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let nb=`12.0.0`;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const rb=new $s(`@firebase/firestore`);function ib(){return rb.logLevel}function W(e,...t){if(rb.logLevel<=F.DEBUG){let n=t.map(sb);rb.debug(`Firestore (${nb}): ${e}`,...n)}}function ab(e,...t){if(rb.logLevel<=F.ERROR){let n=t.map(sb);rb.error(`Firestore (${nb}): ${e}`,...n)}}function ob(e,...t){if(rb.logLevel<=F.WARN){let n=t.map(sb);rb.warn(`Firestore (${nb}): ${e}`,...n)}}function sb(e){if(typeof e==`string`)return e;try{
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
return function(e){return JSON.stringify(e)}(e)}catch{return e}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function G(e,t,n){let r=`Unexpected state`;typeof t==`string`?r=t:n=t,cb(e,r,n)}function cb(e,t,n){let r=`FIRESTORE (${nb}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=` CONTEXT: `+JSON.stringify(n)}catch{r+=` CONTEXT: `+n}throw ab(r),Error(r)}function lb(e,t,n,r){let i=`Unexpected state`;typeof n==`string`?i=n:r=n,e||cb(t,i,r)}function ub(e,t){return e}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const K={OK:`ok`,CANCELLED:`cancelled`,UNKNOWN:`unknown`,INVALID_ARGUMENT:`invalid-argument`,DEADLINE_EXCEEDED:`deadline-exceeded`,NOT_FOUND:`not-found`,ALREADY_EXISTS:`already-exists`,PERMISSION_DENIED:`permission-denied`,UNAUTHENTICATED:`unauthenticated`,RESOURCE_EXHAUSTED:`resource-exhausted`,FAILED_PRECONDITION:`failed-precondition`,ABORTED:`aborted`,OUT_OF_RANGE:`out-of-range`,UNIMPLEMENTED:`unimplemented`,INTERNAL:`internal`,UNAVAILABLE:`unavailable`,DATA_LOSS:`data-loss`};var q=class extends hs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}},db=class{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}},fb=class{constructor(e,t){this.user=t,this.type=`OAuth`,this.headers=new Map,this.headers.set(`Authorization`,`Bearer ${e}`)}},pb=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(tb.UNAUTHENTICATED)))}shutdown(){}},mb=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}},hb=class{constructor(e){this.t=e,this.currentUser=tb.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){lb(this.o===void 0,42304);let n=this.i,r=e=>this.i===n?Promise.resolve():(n=this.i,t(e)),i=new db;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new db,e.enqueueRetryable((()=>r(this.currentUser)))};let a=()=>{let t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{W(`FirebaseAuthCredentialsProvider`,`Auth detected`),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(W(`FirebaseAuthCredentialsProvider`,`Auth not yet detected`),i.resolve(),i=new db)}}),0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i===e?t?(lb(typeof t.accessToken==`string`,31837,{l:t}),new fb(t.accessToken,this.currentUser)):null:(W(`FirebaseAuthCredentialsProvider`,`getToken aborted due to token change.`),this.getToken()))):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return lb(e===null||typeof e==`string`,2055,{h:e}),new tb(e)}},gb=class{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type=`FirstParty`,this.user=tb.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set(`X-Goog-AuthUser`,this.P);let e=this.R();return e&&this.A.set(`Authorization`,e),this.T&&this.A.set(`X-Goog-Iam-Authorization-Token`,this.T),this.A}},_b=class{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new gb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(tb.FIRST_PARTY)))}shutdown(){}invalidateToken(){}},vb=class{constructor(e){this.value=e,this.type=`AppCheck`,this.headers=new Map,e&&e.length>0&&this.headers.set(`x-firebase-appcheck`,this.value)}},yb=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pc(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){lb(this.o===void 0,3512);let n=e=>{e.error!=null&&W(`FirebaseAppCheckTokenProvider`,`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.m;return this.m=e.token,W(`FirebaseAppCheckTokenProvider`,`Received ${n?`new`:`existing`} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};let r=e=>{W(`FirebaseAppCheckTokenProvider`,`AppCheck detected`),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?r(e):W(`FirebaseAppCheckTokenProvider`,`AppCheck not yet detected`)}}),0)}getToken(){if(this.p)return Promise.resolve(new vb(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(lb(typeof e.token==`string`,44558,{tokenResult:e}),this.m=e.token,new vb(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function bb(e){let t=typeof self<`u`&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues==`function`)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xb=class{static newId(){let e=``;for(;e.length<20;){let t=bb(40);for(let n=0;n<t.length;++n)e.length<20&&t[n]<248&&(e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(t[n]%62))}return e}};function J(e,t){return e<t?-1:e>t?1:0}function Sb(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.charAt(r),i=t.charAt(r);if(n!==i)return Cb(n)===Cb(i)?J(n,i):Cb(n)?1:-1}return J(e.length,t.length)}function Cb(e){let t=e.charCodeAt(0);return t>=55296&&t<=57343}function wb(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Tb=`__name__`;var Eb=class e{constructor(e,t,n){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&G(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(t){return e.comparator(this,t)===0}child(t){let n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach((e=>{n.push(e)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){let r=Math.min(t.length,n.length);for(let i=0;i<r;i++){let r=e.compareSegments(t.get(i),n.get(i));if(r!==0)return r}return J(t.length,n.length)}static compareSegments(t,n){let r=e.isNumericId(t),i=e.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?e.extractNumericId(t).compare(e.extractNumericId(n)):Sb(t,n)}static isNumericId(e){return e.startsWith(`__id`)&&e.endsWith(`__`)}static extractNumericId(e){return By.fromString(e.substring(4,e.length-2))}},Db=class e extends Eb{construct(t,n,r){return new e(t,n,r)}canonicalString(){return this.toArray().join(`/`)}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join(`/`)}static fromString(...t){let n=[];for(let e of t){if(e.indexOf(`//`)>=0)throw new q(K.INVALID_ARGUMENT,`Invalid segment (${e}). Paths must not contain // in them.`);n.push(...e.split(`/`).filter((e=>e.length>0)))}return new e(n)}static emptyPath(){return new e([])}};const Ob=/^[_a-zA-Z][_a-zA-Z0-9]*$/;var kb=class e extends Eb{construct(t,n,r){return new e(t,n,r)}static isValidIdentifier(e){return Ob.test(e)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,`\\\\`).replace(/`/g,"\\`"),e.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(`.`)}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tb}static keyField(){return new e([Tb])}static fromServerFormat(t){let n=[],r=``,i=0,a=()=>{if(r.length===0)throw new q(K.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=``},o=!1;for(;i<t.length;){let e=t[i];if(e===`\\`){if(i+1===t.length)throw new q(K.INVALID_ARGUMENT,`Path has trailing escape character: `+t);let e=t[i+1];if(e!==`\\`&&e!==`.`&&e!=="`")throw new q(K.INVALID_ARGUMENT,`Path has invalid escape sequence: `+t);r+=e,i+=2}else e==="`"?(o=!o,i++):e!==`.`||o?(r+=e,i++):(a(),i++)}if(a(),o)throw new q(K.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new e(n)}static emptyPath(){return new e([])}},Y=class e{constructor(e){this.path=e}static fromPath(t){return new e(Db.fromString(t))}static fromName(t){return new e(Db.fromString(t).popFirst(5))}static empty(){return new e(Db.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Db.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Db.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(t){return new e(new Db(t.slice()))}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ab(e,t,n){if(!n)throw new q(K.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function jb(e,t,n,r){if(!0===t&&!0===r)throw new q(K.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Mb(e){if(Y.isDocumentKey(e))throw new q(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Nb(e){return typeof e==`object`&&!!e&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function Pb(e){if(e===void 0)return`undefined`;if(e===null)return`null`;if(typeof e==`string`)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e==`number`||typeof e==`boolean`)return``+e;if(typeof e==`object`){if(e instanceof Array)return`an array`;{let t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:`an object`}}return typeof e==`function`?`a function`:G(12329,{type:typeof e})}function Fb(e,t){if(`_delegate`in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new q(K.INVALID_ARGUMENT,`Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?`);{let n=Pb(e);throw new q(K.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function X(e,t){let n={typeString:e};return t&&(n.value=t),n}function Ib(e,t){if(!Nb(e))throw new q(K.INVALID_ARGUMENT,`JSON must be an object`);let n;for(let r in t)if(t[r]){let i=t[r].typeString,a=`value`in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}let o=e[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&o!==a.value){n=`Expected '${r}' field to equal '${a.value}'`;break}}if(n)throw new q(K.INVALID_ARGUMENT,n);return!0}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Lb=-62135596800,Rb=1e6;var zb=class e{static now(){return e.fromMillis(Date.now())}static fromDate(t){return e.fromMillis(t.getTime())}static fromMillis(t){let n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Rb);return new e(n,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new q(K.INVALID_ARGUMENT,`Timestamp nanoseconds out of range: `+t);if(e<Lb||e>=253402300800)throw new q(K.INVALID_ARGUMENT,`Timestamp seconds out of range: `+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rb}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return`Timestamp(seconds=`+this.seconds+`, nanoseconds=`+this.nanoseconds+`)`}toJSON(){return{type:e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ib(t,e._jsonSchema))return new e(t.seconds,t.nanoseconds)}valueOf(){let e=this.seconds-Lb;return String(e).padStart(12,`0`)+`.`+String(this.nanoseconds).padStart(9,`0`)}};zb._jsonSchemaVersion=`firestore/timestamp/1.0`,zb._jsonSchema={type:X(`string`,zb._jsonSchemaVersion),seconds:X(`number`),nanoseconds:X(`number`)};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Bb=class e{static fromTimestamp(t){return new e(t)}static min(){return new e(new zb(0,0))}static max(){return new e(new zb(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return`SnapshotVersion(`+this.timestamp.toString()+`)`}toTimestamp(){return this.timestamp}},Vb=class{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}};Vb.UNKNOWN_ID=-1;function Hb(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Bb.fromTimestamp(r===1e9?new zb(n+1,0):new zb(n,r));return new Wb(i,Y.empty(),t)}function Ub(e){return new Wb(e.readTime,e.key,-1)}var Wb=class e{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new e(Bb.min(),Y.empty(),-1)}static max(){return new e(Bb.max(),Y.empty(),-1)}};function Gb(e,t){let n=e.readTime.compareTo(t.readTime);return n===0?(n=Y.comparator(e.documentKey,t.documentKey),n===0?J(e.largestBatchId,t.largestBatchId):n):n}var Kb=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}},Z=class e{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(t,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new e(((e,r)=>{this.nextCallback=n=>{this.wrapSuccess(t,n).next(e,r)},this.catchCallback=t=>{this.wrapFailure(n,t).next(e,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(t){try{let n=t();return n instanceof e?n:e.resolve(n)}catch(t){return e.reject(t)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):e.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):e.reject(n)}static resolve(t){return new e(((e,n)=>{e(t)}))}static reject(t){return new e(((e,n)=>{n(t)}))}static waitFor(t){return new e(((e,n)=>{let r=0,i=0,a=!1;t.forEach((t=>{++r,t.next((()=>{++i,a&&i===r&&e()}),(e=>n(e)))})),a=!0,i===r&&e()}))}static or(t){let n=e.resolve(!1);for(let r of t)n=n.next((t=>t?e.resolve(t):r()));return n}static forEach(e,t){let n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(t,n){return new e(((e,r)=>{let i=t.length,a=Array(i),o=0;for(let s=0;s<i;s++){let c=s;n(t[c]).next((t=>{a[c]=t,++o,o===i&&e(a)}),(e=>r(e)))}}))}static doWhile(t,n){return new e(((e,r)=>{let i=()=>{!0===t()?n().next((()=>{i()}),r):e()};i()}))}};function qb(e){let t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(`.`).slice(0,2).join(`.`):`-1`;return Number(n)}function Jb(e){return e.name===`IndexedDbTransactionError`}
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Yb=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ue&&this.ue(e),e}};Yb.ce=-1;function Xb(e){return e==null}function Zb(e){return e===0&&1/e==-1/0}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Qb=`owner`,$b=`mutationQueues`,ex=`mutations`,tx=`documentMutations`,nx=`remoteDocumentGlobal`,rx=`targets`,ix=`targetDocuments`,ax=`targetGlobal`,ox=`collectionParents`,sx=`clientMetadata`,cx=`bundles`,lx=`namedQueries`,ux=[...[...[...[...[$b,ex,tx,`remoteDocuments`,rx,Qb,ax,ix],sx],nx],ox],cx,lx];[...ux];const dx=[$b,ex,tx,`remoteDocumentsV14`,rx,Qb,ax,ix,sx,nx,ox,cx,lx,`documentOverlays`],fx=dx,px=[...fx,`indexConfiguration`,`indexState`,`indexEntries`];[...px];
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function mx(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function hx(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function gx(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _x=class e{constructor(e,t){this.comparator=e,this.root=t||yx.EMPTY}insert(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,yx.BLACK,null,null))}remove(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,yx.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){let e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(`, `)}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vx(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vx(this.root,e,this.comparator,!1)}getReverseIterator(){return new vx(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vx(this.root,e,this.comparator,!0)}},vx=class{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},yx=class e{constructor(t,n,r,i,a){this.key=t,this.value=n,this.color=r??e.RED,this.left=i??e.EMPTY,this.right=a??e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,a){return new e(t??this.key,n??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return 2**e<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}};yx.EMPTY=null,yx.RED=!0,yx.BLACK=!1,yx.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new yx(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var bx=class e{constructor(e){this.comparator=e,this.data=new _x(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t===void 0?this.data.getIterator():this.data.getIteratorFrom(t);n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xx(this.data.getIterator())}getIteratorFrom(e){return new xx(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(t){if(!(t instanceof e)||this.size!==t.size)return!1;let n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){let e=n.getNext().key,t=r.getNext().key;if(this.comparator(e,t)!==0)return!1}return!0}toArray(){let e=[];return this.forEach((t=>{e.push(t)})),e}toString(){let e=[];return this.forEach((t=>e.push(t))),`SortedSet(`+e.toString()+`)`}copy(t){let n=new e(this.comparator);return n.data=t,n}},xx=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}},Sx=class e{constructor(e){this.fields=e,e.sort(kb.comparator)}static empty(){return new e([])}unionWith(t){let n=new bx(kb.comparator);for(let e of this.fields)n=n.add(e);for(let e of t)n=n.add(e);return new e(n.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wb(this.fields,e.fields,((e,t)=>e.isEqual(t)))}},Cx=class extends Error{constructor(){super(...arguments),this.name=`Base64DecodeError`}},wx=class e{constructor(e){this.binaryString=e}static fromBase64String(t){let n=function(e){try{return atob(e)}catch(e){throw typeof DOMException<`u`&&e instanceof DOMException?new Cx(`Invalid base64 string: `+e):e}}(t);return new e(n)}static fromUint8Array(t){let n=function(e){let t=``;for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(t);return new e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};wx.EMPTY_BYTE_STRING=new wx(``);const Tx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ex(e){if(lb(!!e,39018),typeof e==`string`){let t=0,n=Tx.exec(e);if(lb(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+`000000000`).substr(0,9),t=Number(e)}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Q(e.seconds),nanos:Q(e.nanos)}}function Q(e){return typeof e==`number`?e:typeof e==`string`?Number(e):0}function Dx(e){return typeof e==`string`?wx.fromBase64String(e):wx.fromUint8Array(e)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Ox=`server_timestamp`,kx=`__type__`,Ax=`__previous_value__`,jx=`__local_write_time__`;function Mx(e){let t=(e?.mapValue?.fields||{})[kx]?.stringValue;return t===Ox}function Nx(e){let t=e.mapValue.fields[Ax];return Mx(t)?Nx(t):t}function Px(e){let t=Ex(e.mapValue.fields[jx].timestampValue);return new zb(t.seconds,t.nanos)}const Fx=`(default)`;var Ix=class e{constructor(e,t){this.projectId=e,this.database=t||Fx}static empty(){return new e(``,``)}get isDefaultDatabase(){return this.database===Fx}isEqual(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Lx=`__max__`,Rx={mapValue:{fields:{__type__:{stringValue:Lx}}}},zx=`value`;function Bx(e){return`nullValue`in e?0:`booleanValue`in e?1:`integerValue`in e||`doubleValue`in e?2:`timestampValue`in e?3:`stringValue`in e?5:`bytesValue`in e?6:`referenceValue`in e?7:`geoPointValue`in e?8:`arrayValue`in e?9:`mapValue`in e?Mx(e)?4:$x(e)?9007199254740991:Zx(e)?10:11:G(28295,{value:e})}function Vx(e,t){if(e===t)return!0;let n=Bx(e);if(n!==Bx(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Px(e).isEqual(Px(t));case 3:return function(e,t){if(typeof e.timestampValue==`string`&&typeof t.timestampValue==`string`&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=Ex(e.timestampValue),r=Ex(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Dx(e.bytesValue).isEqual(Dx(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Q(e.geoPointValue.latitude)===Q(t.geoPointValue.latitude)&&Q(e.geoPointValue.longitude)===Q(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if(`integerValue`in e&&`integerValue`in t)return Q(e.integerValue)===Q(t.integerValue);if(`doubleValue`in e&&`doubleValue`in t){let n=Q(e.doubleValue),r=Q(t.doubleValue);return n===r?Zb(n)===Zb(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return wb(e.arrayValue.values||[],t.arrayValue.values||[],Vx);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(mx(n)!==mx(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(r[e]===void 0||!Vx(n[e],r[e])))return!1;return!0}(e,t);default:return G(52216,{left:e})}}function Hx(e,t){return(e.values||[]).find((e=>Vx(e,t)))!==void 0}function Ux(e,t){if(e===t)return 0;let n=Bx(e),r=Bx(t);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=Q(e.integerValue||e.doubleValue),r=Q(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Wx(e.timestampValue,t.timestampValue);case 4:return Wx(Px(e),Px(t));case 5:return Sb(e.stringValue,t.stringValue);case 6:return function(e,t){let n=Dx(e),r=Dx(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split(`/`),r=t.split(`/`);for(let e=0;e<n.length&&e<r.length;e++){let t=J(n[e],r[e]);if(t!==0)return t}return J(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=J(Q(e.latitude),Q(t.latitude));return n===0?J(Q(e.longitude),Q(t.longitude)):n}(e.geoPointValue,t.geoPointValue);case 9:return Gx(e.arrayValue,t.arrayValue);case 10:return function(e,t){let n=e.fields||{},r=t.fields||{},i=n[zx]?.arrayValue,a=r[zx]?.arrayValue,o=J(i?.values?.length||0,a?.values?.length||0);return o===0?Gx(i,a):o}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Rx.mapValue&&t===Rx.mapValue)return 0;if(e===Rx.mapValue)return 1;if(t===Rx.mapValue)return-1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(let e=0;e<r.length&&e<a.length;++e){let t=Sb(r[e],a[e]);if(t!==0)return t;let o=Ux(n[r[e]],i[a[e]]);if(o!==0)return o}return J(r.length,a.length)}(e.mapValue,t.mapValue);default:throw G(23264,{he:n})}}function Wx(e,t){if(typeof e==`string`&&typeof t==`string`&&e.length===t.length)return J(e,t);let n=Ex(e),r=Ex(t),i=J(n.seconds,r.seconds);return i===0?J(n.nanos,r.nanos):i}function Gx(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=Ux(n[e],r[e]);if(t)return t}return J(n.length,r.length)}function Kx(e){return qx(e)}function qx(e){return`nullValue`in e?`null`:`booleanValue`in e?``+e.booleanValue:`integerValue`in e?``+e.integerValue:`doubleValue`in e?``+e.doubleValue:`timestampValue`in e?function(e){let t=Ex(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):`stringValue`in e?e.stringValue:`bytesValue`in e?function(e){return Dx(e).toBase64()}(e.bytesValue):`referenceValue`in e?function(e){return Y.fromName(e).toString()}(e.referenceValue):`geoPointValue`in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):`arrayValue`in e?function(e){let t=`[`,n=!0;for(let r of e.values||[])n?n=!1:t+=`,`,t+=qx(r);return t+`]`}(e.arrayValue):`mapValue`in e?function(e){let t=Object.keys(e.fields||{}).sort(),n=`{`,r=!0;for(let i of t)r?r=!1:n+=`,`,n+=`${i}:${qx(e.fields[i])}`;return n+`}`}(e.mapValue):G(61005,{value:e})}function Jx(e){return!!e&&`integerValue`in e}function Yx(e){return!!e&&`arrayValue`in e}function Xx(e){return!!e&&`mapValue`in e}function Zx(e){let t=(e?.mapValue?.fields||{}).__type__?.stringValue;return t===`__vector__`}function Qx(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue==`object`)return{timestampValue:{...e.timestampValue}};if(e.mapValue){let t={mapValue:{fields:{}}};return hx(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Qx(n))),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Qx(e.arrayValue.values[n]);return t}return{...e}}function $x(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Lx}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eS=class e{constructor(e){this.value=e}static empty(){return new e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Xx(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qx(t)}setAll(e){let t=kb.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Qx(e):r.push(i.lastSegment())}));let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());Xx(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vx(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Xx(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){hx(t,((t,n)=>e[t]=n));for(let t of n)delete e[t]}clone(){return new e(Qx(this.value))}},tS=class e{constructor(e,t,n,r,i,a,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(t){return new e(t,0,Bb.min(),Bb.min(),Bb.min(),eS.empty(),0)}static newFoundDocument(t,n,r,i){return new e(t,1,n,Bb.min(),r,i,0)}static newNoDocument(t,n){return new e(t,2,n,Bb.min(),Bb.min(),eS.empty(),0)}static newUnknownDocument(t,n){return new e(t,3,n,Bb.min(),Bb.min(),eS.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Bb.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eS.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eS.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Bb.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}},nS=class{constructor(e,t){this.position=e,this.inclusive=t}};function rS(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let a=t[i],o=e.position[i];if(r=a.field.isKeyField()?Y.comparator(Y.fromName(o.referenceValue),n.key):Ux(o,n.data.field(a.field)),a.dir===`desc`&&(r*=-1),r!==0)break}return r}function iS(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Vx(e.position[n],t.position[n]))return!1;return!0}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var aS=class{constructor(e,t=`asc`){this.field=e,this.dir=t}};function oS(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sS=class{},cS=class e extends sS{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(t,n,r){return t.isKeyField()?n===`in`||n===`not-in`?this.createKeyFieldInFilter(t,n,r):new gS(t,n,r):n===`array-contains`?new bS(t,r):n===`in`?new xS(t,r):n===`not-in`?new SS(t,r):n===`array-contains-any`?new CS(t,r):new e(t,n,r)}static createKeyFieldInFilter(e,t,n){return t===`in`?new _S(e,n):new vS(e,n)}matches(e){let t=e.data.field(this.field);return this.op===`!=`?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ux(t,this.value)):t!==null&&Bx(this.value)===Bx(t)&&this.matchesComparison(Ux(t,this.value))}matchesComparison(e){switch(this.op){case`<`:return e<0;case`<=`:return e<=0;case`==`:return e===0;case`!=`:return e!==0;case`>`:return e>0;case`>=`:return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return[`<`,`<=`,`>`,`>=`,`!=`,`not-in`].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},lS=class e extends sS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(t,n){return new e(t,n)}matches(e){return uS(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}};function uS(e){return e.op===`and`}function dS(e){return fS(e)&&uS(e)}function fS(e){for(let t of e.filters)if(t instanceof lS)return!1;return!0}function pS(e){if(e instanceof cS)return e.field.canonicalString()+e.op.toString()+Kx(e.value);if(dS(e))return e.filters.map((e=>pS(e))).join(`,`);{let t=e.filters.map((e=>pS(e))).join(`,`);return`${e.op}(${t})`}}function mS(e,t){return e instanceof cS?function(e,t){return t instanceof cS&&e.op===t.op&&e.field.isEqual(t.field)&&Vx(e.value,t.value)}(e,t):e instanceof lS?function(e,t){return t instanceof lS&&e.op===t.op&&e.filters.length===t.filters.length?e.filters.reduce(((e,n,r)=>e&&mS(n,t.filters[r])),!0):!1}(e,t):void G(19439)}function hS(e){return e instanceof cS?function(e){return`${e.field.canonicalString()} ${e.op} ${Kx(e.value)}`}(e):e instanceof lS?function(e){return e.op.toString()+` {`+e.getFilters().map(hS).join(` ,`)+`}`}(e):`Filter`}var gS=class extends cS{constructor(e,t,n){super(e,t,n),this.key=Y.fromName(n.referenceValue)}matches(e){let t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}},_S=class extends cS{constructor(e,t){super(e,`in`,t),this.keys=yS(`in`,t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}},vS=class extends cS{constructor(e,t){super(e,`not-in`,t),this.keys=yS(`not-in`,t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}};function yS(e,t){return(t.arrayValue?.values||[]).map((e=>Y.fromName(e.referenceValue)))}var bS=class extends cS{constructor(e,t){super(e,`array-contains`,t)}matches(e){let t=e.data.field(this.field);return Yx(t)&&Hx(t.arrayValue,this.value)}},xS=class extends cS{constructor(e,t){super(e,`in`,t)}matches(e){let t=e.data.field(this.field);return t!==null&&Hx(this.value.arrayValue,t)}},SS=class extends cS{constructor(e,t){super(e,`not-in`,t)}matches(e){if(Hx(this.value.arrayValue,{nullValue:`NULL_VALUE`}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Hx(this.value.arrayValue,t)}},CS=class extends cS{constructor(e,t){super(e,`array-contains-any`,t)}matches(e){let t=e.data.field(this.field);return!(!Yx(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Hx(this.value.arrayValue,e)))}},wS=class{constructor(e,t=null,n=[],r=[],i=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=o,this.Te=null}};function TS(e,t=null,n=[],r=[],i=null,a=null,o=null){return new wS(e,t,n,r,i,a,o)}function ES(e){let t=ub(e);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+=`|cg:`+t.collectionGroup),e+=`|f:`,e+=t.filters.map((e=>pS(e))).join(`,`),e+=`|ob:`,e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(`,`),Xb(t.limit)||(e+=`|l:`,e+=t.limit),t.startAt&&(e+=`|lb:`,e+=t.startAt.inclusive?`b:`:`a:`,e+=t.startAt.position.map((e=>Kx(e))).join(`,`)),t.endAt&&(e+=`|ub:`,e+=t.endAt.inclusive?`a:`:`b:`,e+=t.endAt.position.map((e=>Kx(e))).join(`,`)),t.Te=e}return t.Te}function DS(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!oS(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!mS(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!iS(e.startAt,t.startAt)&&iS(e.endAt,t.endAt)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var OS=class{constructor(e,t=null,n=[],r=[],i=null,a=`F`,o=null,s=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=s,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}};function kS(e,t,n,r,i,a,o,s){return new OS(e,t,n,r,i,a,o,s)}function AS(e){return new OS(e)}function jS(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function MS(e){return e.collectionGroup!==null}function NS(e){let t=ub(e);if(t.Ie===null){t.Ie=[];let e=new Set;for(let n of t.explicitOrderBy)t.Ie.push(n),e.add(n.field.canonicalString());let n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:`asc`,r=function(e){let t=new bx(kb.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new aS(r,n))})),e.has(kb.keyField().canonicalString())||t.Ie.push(new aS(kb.keyField(),n))}return t.Ie}function PS(e){let t=ub(e);return t.Ee||=FS(t,NS(e)),t.Ee}function FS(e,t){if(e.limitType===`F`)return TS(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{let t=e.dir===`desc`?`asc`:`desc`;return new aS(e.field,t)}));let n=e.endAt?new nS(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new nS(e.startAt.position,e.startAt.inclusive):null;return TS(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function IS(e,t,n){return new OS(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function LS(e,t){return DS(PS(e),PS(t))&&e.limitType===t.limitType}function RS(e){return`${ES(PS(e))}|lt:${e.limitType}`}function zS(e){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=` collectionGroup=`+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>hS(e))).join(`, `)}]`),Xb(e.limit)||(t+=`, limit: `+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(`, `)}]`),e.startAt&&(t+=`, startAt: `,t+=e.startAt.inclusive?`b:`:`a:`,t+=e.startAt.position.map((e=>Kx(e))).join(`,`)),e.endAt&&(t+=`, endAt: `,t+=e.endAt.inclusive?`a:`:`b:`,t+=e.endAt.position.map((e=>Kx(e))).join(`,`)),`Target(${t})`}(PS(e))}; limitType=${e.limitType})`}function BS(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return e.collectionGroup===null?Y.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n):t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n)}(e,t)&&function(e,t){for(let n of NS(e))if(!n.field.isKeyField()&&t.data.field(n.field)===null)return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return e.startAt&&!function(e,t,n){let r=rS(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,NS(e),t)||e.endAt&&!function(e,t,n){let r=rS(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,NS(e),t)?!1:!0}(e,t)}function VS(e){return(t,n)=>{for(let r of NS(e)){let e=HS(r,t,n);if(e!==0)return e;r.field.isKeyField()}return 0}}function HS(e,t,n){let r=e.field.isKeyField()?Y.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return r!==null&&i!==null?Ux(r,i):G(42886)}(e.field,t,n);switch(e.dir){case`asc`:return r;case`desc`:return-1*r;default:return G(19790,{direction:e.dir})}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var US=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){hx(this.inner,((t,n)=>{for(let[t,r]of n)e(t,r)}))}isEmpty(){return gx(this.inner)}size(){return this.innerSize}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const WS=new _x(Y.comparator);function GS(){return WS}const KS=new _x(Y.comparator);function qS(...e){let t=KS;for(let n of e)t=t.insert(n.key,n);return t}function JS(e){let t=KS;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function YS(){return ZS()}function XS(){return ZS()}function ZS(){return new US((e=>e.toString()),((e,t)=>e.isEqual(t)))}new _x(Y.comparator);const QS=new bx(Y.comparator);function $S(...e){let t=QS;for(let n of e)t=t.add(n);return t}const eC=new bx(J);function tC(){return eC}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function nC(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:`NaN`};if(t===1/0)return{doubleValue:`Infinity`};if(t===-1/0)return{doubleValue:`-Infinity`}}return{doubleValue:Zb(t)?`-0`:t}}function rC(e){return{integerValue:``+e}}
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var iC=class{constructor(){this._=void 0}};function aC(e,t,n){return e instanceof cC?function(e,t){let n={fields:{[kx]:{stringValue:Ox},[jx]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Mx(t)&&(t=Nx(t)),t&&(n.fields[Ax]=t),{mapValue:n}}(n,t):e instanceof lC?uC(e,t):e instanceof dC?fC(e,t):function(e,t){let n=sC(e,t),r=mC(n)+mC(e.Ae);return Jx(n)&&Jx(e.Ae)?rC(r):nC(e.serializer,r)}(e,t)}function oC(e,t,n){return e instanceof lC?uC(e,t):e instanceof dC?fC(e,t):n}function sC(e,t){return e instanceof pC?function(e){return Jx(e)||function(e){return!!e&&`doubleValue`in e}(e)}(t)?t:{integerValue:0}:null}var cC=class extends iC{},lC=class extends iC{constructor(e){super(),this.elements=e}};function uC(e,t){let n=hC(t);for(let t of e.elements)n.some((e=>Vx(e,t)))||n.push(t);return{arrayValue:{values:n}}}var dC=class extends iC{constructor(e){super(),this.elements=e}};function fC(e,t){let n=hC(t);for(let t of e.elements)n=n.filter((e=>!Vx(e,t)));return{arrayValue:{values:n}}}var pC=class extends iC{constructor(e,t){super(),this.serializer=e,this.Ae=t}};function mC(e){return Q(e.integerValue||e.doubleValue)}function hC(e){return Yx(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function gC(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof lC&&t instanceof lC||e instanceof dC&&t instanceof dC?wb(e.elements,t.elements,Vx):e instanceof pC&&t instanceof pC?Vx(e.Ae,t.Ae):e instanceof cC&&t instanceof cC}(e.transform,t.transform)}var _C=class e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new e}static exists(t){return new e(void 0,t)}static updateTime(t){return new e(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function vC(e,t){return e.updateTime===void 0?e.exists===void 0||e.exists===t.isFoundDocument():t.isFoundDocument()&&t.version.isEqual(e.updateTime)}var yC=class{};function bC(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new kC(e.key,_C.none()):new wC(e.key,e.data,_C.none());{let n=e.data,r=eS.empty(),i=new bx(kb.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);t===null&&e.length>1&&(e=e.popLast(),t=n.field(e)),t===null?r.delete(e):r.set(e,t),i=i.add(e)}return new TC(e.key,r,new Sx(i.toArray()),_C.none())}}function xC(e,t,n){e instanceof wC?function(e,t,n){let r=e.value.clone(),i=DC(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof TC?function(e,t,n){if(!vC(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=DC(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(EC(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function SC(e,t,n,r){return e instanceof wC?function(e,t,n,r){if(!vC(e.precondition,t))return n;let i=e.value.clone(),a=OC(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof TC?function(e,t,n,r){if(!vC(e.precondition,t))return n;let i=OC(e.fieldTransforms,r,t),a=t.data;return a.setAll(EC(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),n===null?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return vC(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function CC(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return e===void 0&&t===void 0||!(!e||!t)&&wb(e,t,((e,t)=>gC(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}var wC=class extends yC{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}},TC=class extends yC{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}};function EC(e){let t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}})),t}function DC(e,t,n){let r=new Map;lb(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let i=0;i<n.length;i++){let a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,oC(o,s,n[i]))}return r}function OC(e,t,n){let r=new Map;for(let i of e){let e=i.transform,a=n.data.field(i.field);r.set(i.field,aC(e,a,t))}return r}var kC=class extends yC{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},AC=class{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let r=this.mutations[t];r.key.isEqual(e.key)&&xC(r,e,n[t])}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=SC(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=SC(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=XS();return this.mutations.forEach((r=>{let i=e.get(r.key),a=i.overlayedDocument,o=this.applyToLocalView(a,i.mutatedFields);o=t.has(r.key)?null:o;let s=bC(a,o);s!==null&&n.set(r.key,s),a.isValidDocument()||a.convertToNoDocument(Bb.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),$S())}isEqual(e){return this.batchId===e.batchId&&wb(this.mutations,e.mutations,((e,t)=>CC(e,t)))&&wb(this.baseMutations,e.baseMutations,((e,t)=>CC(e,t)))}},jC=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}},MC,$;function NC(e){if(e===void 0)return ab(`GRPC error has no .code`),K.UNKNOWN;switch(e){case MC.OK:return K.OK;case MC.CANCELLED:return K.CANCELLED;case MC.UNKNOWN:return K.UNKNOWN;case MC.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case MC.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case MC.INTERNAL:return K.INTERNAL;case MC.UNAVAILABLE:return K.UNAVAILABLE;case MC.UNAUTHENTICATED:return K.UNAUTHENTICATED;case MC.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case MC.NOT_FOUND:return K.NOT_FOUND;case MC.ALREADY_EXISTS:return K.ALREADY_EXISTS;case MC.PERMISSION_DENIED:return K.PERMISSION_DENIED;case MC.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case MC.ABORTED:return K.ABORTED;case MC.OUT_OF_RANGE:return K.OUT_OF_RANGE;case MC.UNIMPLEMENTED:return K.UNIMPLEMENTED;case MC.DATA_LOSS:return K.DATA_LOSS;default:return G(39323,{code:e})}}($=MC||={})[$.OK=0]=`OK`,$[$.CANCELLED=1]=`CANCELLED`,$[$.UNKNOWN=2]=`UNKNOWN`,$[$.INVALID_ARGUMENT=3]=`INVALID_ARGUMENT`,$[$.DEADLINE_EXCEEDED=4]=`DEADLINE_EXCEEDED`,$[$.NOT_FOUND=5]=`NOT_FOUND`,$[$.ALREADY_EXISTS=6]=`ALREADY_EXISTS`,$[$.PERMISSION_DENIED=7]=`PERMISSION_DENIED`,$[$.UNAUTHENTICATED=16]=`UNAUTHENTICATED`,$[$.RESOURCE_EXHAUSTED=8]=`RESOURCE_EXHAUSTED`,$[$.FAILED_PRECONDITION=9]=`FAILED_PRECONDITION`,$[$.ABORTED=10]=`ABORTED`,$[$.OUT_OF_RANGE=11]=`OUT_OF_RANGE`,$[$.UNIMPLEMENTED=12]=`UNIMPLEMENTED`,$[$.INTERNAL=13]=`INTERNAL`,$[$.UNAVAILABLE=14]=`UNAVAILABLE`,$[$.DATA_LOSS=15]=`DATA_LOSS`,new By([4294967295,4294967295],0),(()=>{let e={asc:`ASCENDING`,desc:`DESCENDING`};return e})(),(()=>{let e={"<":`LESS_THAN`,"<=":`LESS_THAN_OR_EQUAL`,">":`GREATER_THAN`,">=":`GREATER_THAN_OR_EQUAL`,"==":`EQUAL`,"!=":`NOT_EQUAL`,"array-contains":`ARRAY_CONTAINS`,in:`IN`,"not-in":`NOT_IN`,"array-contains-any":`ARRAY_CONTAINS_ANY`};return e})(),(()=>{let e={and:`AND`,or:`OR`};return e})();var PC=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function FC(e){return lb(!!e,49232),Bb.fromTimestamp(function(e){let t=Ex(e);return new zb(t.seconds,t.nanos)}(e))}function IC(e,t){let n=function(e){return new Db([`projects`,e.projectId,`databases`,e.database])}(e).child(`documents`);return t===void 0?n:n.child(t)}function LC(e){let t=Db.fromString(e);return lb(UC(t),10190,{key:t.toString()}),t}function RC(e){let t=LC(e);return t.length===4?Db.emptyPath():zC(t)}function zC(e){return lb(e.length>4&&e.get(4)===`documents`,29091,{key:e.toString()}),e.popFirst(5)}function BC(e){let t=RC(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){lb(r===1,65062);let e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let a=[];n.where&&(a=function(e){let t=VC(e);return t instanceof lS&&dS(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new aS(HC(e.field),function(e){switch(e){case`ASCENDING`:return`asc`;case`DESCENDING`:return`desc`;default:return}}(e.direction))}(e)))}(n.orderBy));let s=null;n.limit&&(s=function(e){let t;return t=typeof e==`object`?e.value:e,Xb(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){let t=!!e.before,n=e.values||[];return new nS(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){let t=!e.before,n=e.values||[];return new nS(n,t)}(n.endAt)),kS(t,i,o,a,s,`F`,c,l)}function VC(e){return e.unaryFilter===void 0?e.fieldFilter===void 0?e.compositeFilter===void 0?G(30097,{filter:e}):function(e){return lS.create(e.compositeFilter.filters.map((e=>VC(e))),function(e){switch(e){case`AND`:return`and`;case`OR`:return`or`;default:return G(1026)}}(e.compositeFilter.op))}(e):function(e){return cS.create(HC(e.fieldFilter.field),function(e){switch(e){case`EQUAL`:return`==`;case`NOT_EQUAL`:return`!=`;case`GREATER_THAN`:return`>`;case`GREATER_THAN_OR_EQUAL`:return`>=`;case`LESS_THAN`:return`<`;case`LESS_THAN_OR_EQUAL`:return`<=`;case`ARRAY_CONTAINS`:return`array-contains`;case`IN`:return`in`;case`NOT_IN`:return`not-in`;case`ARRAY_CONTAINS_ANY`:return`array-contains-any`;case`OPERATOR_UNSPECIFIED`:return G(58110);default:return G(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):function(e){switch(e.unaryFilter.op){case`IS_NAN`:let t=HC(e.unaryFilter.field);return cS.create(t,`==`,{doubleValue:NaN});case`IS_NULL`:let n=HC(e.unaryFilter.field);return cS.create(n,`==`,{nullValue:`NULL_VALUE`});case`IS_NOT_NAN`:let r=HC(e.unaryFilter.field);return cS.create(r,`!=`,{doubleValue:NaN});case`IS_NOT_NULL`:let i=HC(e.unaryFilter.field);return cS.create(i,`!=`,{nullValue:`NULL_VALUE`});case`OPERATOR_UNSPECIFIED`:return G(61313);default:return G(60726)}}(e)}function HC(e){return kb.fromServerFormat(e.fieldPath)}function UC(e){return e.length>=4&&e.get(0)===`projects`&&e.get(2)===`databases`}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WC=class{constructor(e){this.yt=e}};function GC(e){let t=BC({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType===`LAST`?IS(t,t.limit,`L`):t}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var KC=class{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if(`nullValue`in e)this.Ft(t,5);else if(`booleanValue`in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if(`integerValue`in e)this.Ft(t,15),t.Mt(Q(e.integerValue));else if(`doubleValue`in e){let n=Q(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),Zb(n)?t.Mt(0):t.Mt(n))}else if(`timestampValue`in e){let n=e.timestampValue;this.Ft(t,20),typeof n==`string`&&(n=Ex(n)),t.xt(`${n.seconds||``}`),t.Mt(n.nanos||0)}else if(`stringValue`in e)this.Ot(e.stringValue,t),this.Nt(t);else if(`bytesValue`in e)this.Ft(t,30),t.Bt(Dx(e.bytesValue)),this.Nt(t);else if(`referenceValue`in e)this.Lt(e.referenceValue,t);else if(`geoPointValue`in e){let n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else `mapValue`in e?$x(e)?this.Ft(t,2**53-1):Zx(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):`arrayValue`in e?(this.Qt(e.arrayValue,t),this.Nt(t)):G(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){let n=e.fields||{};this.Ft(t,55);for(let e of Object.keys(n))this.Ot(e,t),this.Ct(n[e],t)}kt(e,t){let n=e.fields||{};this.Ft(t,53);let r=zx,i=n[r].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(Q(i)),this.Ot(r,t),this.Ct(n[r],t)}Qt(e,t){let n=e.values||[];this.Ft(t,50);for(let e of n)this.Ct(e,t)}Lt(e,t){this.Ft(t,37),Y.fromName(e).path.forEach((e=>{this.Ft(t,60),this.Ut(e,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}};KC.Kt=new KC;
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qC=class{constructor(){this.Cn=new JC}addToCollectionParentIndex(e,t){return this.Cn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Wb.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Wb.min())}updateCollectionGroup(e,t,n){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}},JC=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new bx(Db.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new bx(Db.comparator)).toArray()}};new Uint8Array;
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const YC=41943040;var XC=class e{static withCacheSize(t){return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
XC.DEFAULT_COLLECTION_PERCENTILE=10,XC.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,XC.DEFAULT=new XC(YC,XC.DEFAULT_COLLECTION_PERCENTILE,XC.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),XC.DISABLED=new XC(-1,0,0);
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ZC=class e{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new e(0)}static cr(){return new e(-1)}},QC=class{constructor(){this.changes=new US((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tS.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return n===void 0?this.getFromCache(e,t):Z.resolve(n)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}},$C=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}},ew=class{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(n!==null&&SC(n.mutation,e,Sx.empty(),zb.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,$S()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=$S()){let r=YS();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=qS();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){let n=YS();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,$S())))}populateOverlays(e,t,n){let r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=GS(),a=ZS(),o=function(){return ZS()}();return t.forEach(((e,t)=>{let o=n.get(t.key);r.has(t.key)&&(o===void 0||o.mutation instanceof TC)?i=i.insert(t.key,t):o===void 0?a.set(t.key,Sx.empty()):(a.set(t.key,o.mutation.getFieldMask()),SC(o.mutation,t,o.mutation.getFieldMask(),zb.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>a.set(e,t))),t.forEach(((e,t)=>o.set(e,new $C(t,a.get(e)??null)))),o)))}recalculateAndSaveOverlays(e,t){let n=ZS(),r=new _x(((e,t)=>e-t)),i=$S();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(let i of e)i.keys().forEach((e=>{let a=t.get(e);if(a===null)return;let o=n.get(e)||Sx.empty();o=i.applyToLocalView(a,o),n.set(e,o);let s=(r.get(i.batchId)||$S()).add(e);r=r.insert(i.batchId,s)}))})).next((()=>{let a=[],o=r.getReverseIterator();for(;o.hasNext();){let r=o.getNext(),s=r.key,c=r.value,l=XS();c.forEach((e=>{if(!i.has(e)){let r=bC(t.get(e),n.get(e));r!==null&&l.set(e,r),i=i.add(e)}})),a.push(this.documentOverlayCache.saveOverlays(e,s,l))}return Z.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return Y.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):MS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{let a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Z.resolve(YS()),o=-1,s=i;return a.next((t=>Z.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Z.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{s=s.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,s,t,$S()))).next((e=>({batchId:o,changes:JS(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next((e=>{let t=qS();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,a=qS();return this.indexManager.getCollectionParents(e,i).next((o=>Z.forEach(o,(o=>{let s=function(e,t){return new OS(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,s,n,r).next((e=>{e.forEach(((e,t)=>{a=a.insert(e,t)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{let r=n.getKey();e.get(r)===null&&(e=e.insert(r,tS.newInvalidDocument(r)))}));let n=qS();return e.forEach(((e,r)=>{let a=i.get(e);a!==void 0&&SC(a.mutation,r,Sx.empty(),zb.now()),BS(t,r)&&(n=n.insert(e,r))})),n}))}},tw=class{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:FC(e.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(e){return{name:e.name,query:GC(e.bundledQuery),readTime:FC(e.readTime)}}(t)),Z.resolve()}},nw=class{constructor(){this.overlays=new _x(Y.comparator),this.qr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){let n=YS();return Z.forEach(t,(t=>this.getOverlay(e,t).next((e=>{e!==null&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.St(e,t,r)})),Z.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.qr.get(n);return r!==void 0&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.qr.delete(n)),Z.resolve()}getOverlaysForCollection(e,t,n){let r=YS(),i=t.length+1,a=new Y(t.child(``)),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){let e=o.getNext().value,a=e.getKey();if(!t.isPrefixOf(a.path))break;a.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Z.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _x(((e,t)=>e-t)),a=this.overlays.getIterator();for(;a.hasNext();){let e=a.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);t===null&&(t=YS(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=YS(),s=i.getIterator();for(;s.hasNext()&&(s.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return Z.resolve(o)}St(e,t,n){let r=this.overlays.get(n.key);if(r!==null){let e=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new jC(t,n));let i=this.qr.get(t);i===void 0&&(i=$S(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}},rw=class{constructor(){this.sessionToken=wx.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}},iw=class{constructor(){this.Qr=new bx(aw.$r),this.Ur=new bx(aw.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){let n=new aw(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Gr(new aw(e,t))}zr(e,t){e.forEach((e=>this.removeReference(e,t)))}jr(e){let t=new Y(new Db([])),n=new aw(t,e),r=new aw(t,e+1),i=[];return this.Ur.forEachInRange([n,r],(e=>{this.Gr(e),i.push(e.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){let t=new Y(new Db([])),n=new aw(t,e),r=new aw(t,e+1),i=$S();return this.Ur.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){let t=new aw(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}},aw=class{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Y.comparator(e.key,t.key)||J(e.Yr,t.Yr)}static Kr(e,t){return J(e.Yr,t.Yr)||Y.comparator(e.key,t.key)}},ow=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new bx(aw.$r)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){let i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new AC(i,t,n,r);this.mutationQueue.push(a);for(let t of r)this.Zr=this.Zr.add(new aw(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Z.resolve(a)}lookupMutationBatch(e,t){return Z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=this.ei(n),i=r<0?0:r;return Z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?-1:this.tr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new aw(t,0),r=new aw(t,1/0),i=[];return this.Zr.forEachInRange([n,r],(e=>{let t=this.Xr(e.Yr);i.push(t)})),Z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new bx(J);return t.forEach((e=>{let t=new aw(e,0),r=new aw(e,1/0);this.Zr.forEachInRange([t,r],(e=>{n=n.add(e.Yr)}))})),Z.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;Y.isDocumentKey(i)||(i=i.child(``));let a=new aw(new Y(i),0),o=new bx(J);return this.Zr.forEachWhile((e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Yr)),!0)}),a),Z.resolve(this.ti(o))}ti(e){let t=[];return e.forEach((e=>{let n=this.Xr(e);n!==null&&t.push(n)})),t}removeMutationBatch(e,t){lb(this.ni(t.batchId,`removed`)===0,55003),this.mutationQueue.shift();let n=this.Zr;return Z.forEach(t.mutations,(r=>{let i=new aw(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){let n=new aw(t,0),r=this.Zr.firstAfterOrEqual(n);return Z.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){let t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}},sw=class{constructor(e){this.ri=e,this.docs=function(){return new _x(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return Z.resolve(n?n.document.mutableCopy():tS.newInvalidDocument(t))}getEntries(e,t){let n=GS();return t.forEach((e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tS.newInvalidDocument(e))})),Z.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=GS(),a=t.path,o=new Y(a.child(`__id-9223372036854775808__`)),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){let{key:e,value:{document:o}}=s.getNext();if(!a.isPrefixOf(e.path))break;e.path.length>a.length+1||Gb(Ub(o),n)<=0||(r.has(o.key)||BS(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Z.resolve(i)}getAllFromCollectionGroup(e,t,n,r){G(9500)}ii(e,t){return Z.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new cw(this)}getSize(e){return Z.resolve(this.size)}},cw=class extends QC{constructor(e){super(),this.Nr=e}applyChanges(e){let t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)})),Z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}},lw=class{constructor(e){this.persistence=e,this.si=new US((e=>ES(e)),DS),this.lastRemoteSnapshotVersion=Bb.min(),this.highestTargetId=0,this.oi=0,this._i=new iw,this.targetCount=0,this.ai=ZC.ur()}forEachTarget(e,t){return this.si.forEach(((e,n)=>t(n))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),Z.resolve()}Pr(e){this.si.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.ai=new ZC(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Pr(t),Z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),--this.targetCount,Z.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.si.forEach(((a,o)=>{o.sequenceNumber<=t&&n.get(o.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Z.waitFor(i).next((()=>r))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){let n=this.si.get(t)||null;return Z.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),Z.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Z.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){let n=this._i.Hr(t);return Z.resolve(n)}containsKey(e,t){return Z.resolve(this._i.containsKey(t))}},uw=class{constructor(e,t){this.ui={},this.overlays={},this.ci=new Yb(0),this.li=!1,this.li=!0,this.hi=new rw,this.referenceDelegate=e(this),this.Pi=new lw(this),this.indexManager=new qC,this.remoteDocumentCache=function(e){return new sw(e)}((e=>this.referenceDelegate.Ti(e))),this.serializer=new WC(t),this.Ii=new tw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new ow(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){W(`MemoryPersistence`,`Starting transaction:`,e);let r=new dw(this.ci.next());return this.referenceDelegate.Ei(),n(r).next((e=>this.referenceDelegate.di(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ai(e,t){return Z.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}},dw=class extends Kb{constructor(e){super(),this.currentSequenceNumber=e}},fw=class e{constructor(e){this.persistence=e,this.Ri=new iw,this.Vi=null}static mi(t){return new e(t)}get fi(){if(this.Vi)return this.Vi;throw G(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),Z.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((e=>this.fi.add(e.toString())));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.fi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.fi,(n=>{let r=Y.fromPath(n);return this.gi(e,r).next((e=>{e||t.removeEntry(r,Bb.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((e=>{e?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return Z.or([()=>Z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}},pw=class e{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(t,n){let r=$S(),i=$S();for(let e of n.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new e(t,n.fromCache,r,i)}},mw=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}},hw=class{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return fs()?8:qb(ns())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.ys(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.ws(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;let n=new mw;return this.Ss(e,t,n).next((r=>{if(i.result=r,this.Vs)return this.bs(e,t,n,r.size)}))})).next((()=>i.result))}bs(e,t,n,r){return n.documentReadCount<this.fs?(ib()<=F.DEBUG&&W(`QueryEngine`,`SDK will not create cache indexes for query:`,zS(t),`since it only creates cache indexes for collection contains`,`more than or equal to`,this.fs,`documents`),Z.resolve()):(ib()<=F.DEBUG&&W(`QueryEngine`,`Query:`,zS(t),`scans`,n.documentReadCount,`local documents and returns`,r,`documents as results.`),n.documentReadCount>this.gs*r?(ib()<=F.DEBUG&&W(`QueryEngine`,`The SDK decides to create cache indexes for query:`,zS(t),`as using cache indexes may help improve performance.`),this.indexManager.createTargetIndexes(e,PS(t))):Z.resolve())}ys(e,t){if(jS(t))return Z.resolve(null);let n=PS(t);return this.indexManager.getIndexType(e,n).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=IS(t,null,`F`),n=PS(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{let i=$S(...r);return this.ps.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{let a=this.Ds(t,r);return this.Cs(t,a,i,n.readTime)?this.ys(e,IS(t,null,`F`)):this.vs(e,a,t,n)}))))})))))}ws(e,t,n,r){return jS(t)||r.isEqual(Bb.min())?Z.resolve(null):this.ps.getDocuments(e,n).next((i=>{let a=this.Ds(t,i);return this.Cs(t,a,n,r)?Z.resolve(null):(ib()<=F.DEBUG&&W(`QueryEngine`,`Re-using previous result from %s to execute query: %s`,r.toString(),zS(t)),this.vs(e,a,t,Hb(r,-1)).next((e=>e)))}))}Ds(e,t){let n=new bx(VS(e));return t.forEach(((t,r)=>{BS(e,r)&&(n=n.add(r))})),n}Cs(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;let i=e.limitType===`F`?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,n){return ib()<=F.DEBUG&&W(`QueryEngine`,`Using full collection scan to execute query:`,zS(t)),this.ps.getDocumentsMatchingQuery(e,t,Wb.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}},gw=class{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new _x(J),this.xs=new US((e=>ES(e)),DS),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ew(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction(`Collect garbage`,`readwrite-primary`,(t=>e.collect(t,this.Ms)))}};function _w(e,t,n,r){return new gw(e,t,n,r)}async function vw(e,t){let n=ub(e);return await n.persistence.runTransaction(`Handle user change`,`readonly`,(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Bs(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{let i=[],a=[],o=$S();for(let e of r){i.push(e.batchId);for(let t of e.mutations)o=o.add(t.key)}for(let e of t){a.push(e.batchId);for(let t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ls:e,removedBatchIds:i,addedBatchIds:a})))}))}))}var yw=class{constructor(){this.activeTargetIds=tC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}},bw=class{constructor(){this.Mo=new yw,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||`not-current`}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new yw,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}},xw=class{Oo(e){}shutdown(){}};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Sw=`ConnectivityMonitor`;var Cw=class{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener(`online`,this.No),window.removeEventListener(`offline`,this.Lo)}Qo(){window.addEventListener(`online`,this.No),window.addEventListener(`offline`,this.Lo)}Bo(){W(Sw,`Network connectivity changed: AVAILABLE`);for(let e of this.qo)e(0)}ko(){W(Sw,`Network connectivity changed: UNAVAILABLE`);for(let e of this.qo)e(1)}static v(){return typeof window<`u`&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let ww=null;function Tw(){return ww===null?ww=function(){return 268435456+Math.round(2147483648*Math.random())}():ww++,`0x`+ww.toString(16)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ew=`RestConnection`,Dw={BatchGetDocuments:`batchGet`,Commit:`commit`,RunQuery:`runQuery`,RunAggregationQuery:`runAggregationQuery`};var Ow=class{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?`https`:`http`,n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+`://`+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===Fx?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,i){let a=Tw(),o=this.zo(e,t.toUriEncodedString());W(Ew,`Sending RPC '${e}' ${a}:`,o,n);let s={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(s,r,i);let{host:c}=new URL(o),l=Jo(c);return this.Jo(e,o,s,n,l).then((t=>(W(Ew,`Received RPC '${e}' ${a}: `,t),t)),(t=>{throw ob(Ew,`RPC '${e}' ${a} failed with error: `,t,`url: `,o,`request:`,n),t}))}Ho(e,t,n,r,i,a){return this.Go(e,t,n,r,i)}jo(e,t,n){e[`X-Goog-Api-Client`]=function(){return`gl-js/ fire/`+nb}(),e[`Content-Type`]=`text/plain`,this.databaseInfo.appId&&(e[`X-Firebase-GMPID`]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}zo(e,t){let n=Dw[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}},kw=class{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Aw=`WebChannelConnection`;var jw=class extends Ow{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){let a=Tw();return new Promise(((i,o)=>{let s=new Wy;s.setWithCredentials(!0),s.listenOnce(qy.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case Jy.NO_ERROR:let t=s.getResponseJson();W(Aw,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(t)),i(t);break;case Jy.TIMEOUT:W(Aw,`RPC '${e}' ${a} timed out`),o(new q(K.DEADLINE_EXCEEDED,`Request time out`));break;case Jy.HTTP_ERROR:let n=s.getStatus();if(W(Aw,`RPC '${e}' ${a} failed with status:`,n,`response text:`,s.getResponseText()),n>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=e?.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,`-`);return Object.values(K).indexOf(t)>=0?t:K.UNKNOWN}(t.status);o(new q(e,t.message))}else o(new q(K.UNKNOWN,`Server responded with status `+s.getStatus()))}else o(new q(K.UNAVAILABLE,`Connection failed.`));break;default:G(9055,{l_:e,streamId:a,h_:s.getLastErrorCode(),P_:s.getLastError()})}}finally{W(Aw,`RPC '${e}' ${a} completed.`)}}));let c=JSON.stringify(r);W(Aw,`RPC '${e}' ${a} sending request:`,r),s.send(t,`POST`,c,n,15)}))}T_(e,t,n){let r=Tw(),i=[this.Uo,`/`,`google.firestore.v1.Firestore`,`/`,e,`/channel`],a=Qy(),o=Zy(),s={httpSessionIdParam:`gsessionid`,initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(s.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(s.useFetchStreams=!0),this.jo(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;let l=i.join(``);W(Aw,`Creating RPC '${e}' stream ${r}: ${l}`,s);let u=a.createWebChannel(l,s);this.I_(u);let d=!1,f=!1,p=new kw({Yo:t=>{f?W(Aw,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(W(Aw,`Opening RPC '${e}' stream ${r} transport.`),u.open(),d=!0),W(Aw,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Zo:()=>u.close()}),m=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return m(u,Ky.EventType.OPEN,(()=>{f||(W(Aw,`RPC '${e}' stream ${r} transport opened.`),p.o_())})),m(u,Ky.EventType.CLOSE,(()=>{f||(f=!0,W(Aw,`RPC '${e}' stream ${r} transport closed`),p.a_(),this.E_(u))})),m(u,Ky.EventType.ERROR,(t=>{f||(f=!0,ob(Aw,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,`Message:`,t.message),p.a_(new q(K.UNAVAILABLE,`The operation could not be completed`)))})),m(u,Ky.EventType.MESSAGE,(t=>{if(!f){let n=t.data[0];lb(!!n,16349);let i=n,a=i?.error||i[0]?.error;if(a){W(Aw,`RPC '${e}' stream ${r} received error:`,a);let t=a.status,n=function(e){let t=MC[e];if(t!==void 0)return NC(t)}(t),i=a.message;n===void 0&&(n=K.INTERNAL,i=`Unknown error status: `+t+` with message `+a.message),f=!0,p.a_(new q(n,i)),u.close()}else W(Aw,`RPC '${e}' stream ${r} received:`,n),p.u_(n)}})),m(o,Xy.STAT_EVENT,(t=>{t.stat===Yy.PROXY?W(Aw,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Yy.NOPROXY&&W(Aw,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.__()}),0),p}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}};function Mw(){return typeof document<`u`?document:null}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Nw(e){return new PC(e,!0)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Pw=class{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();let t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&W(`ExponentialBackoff`,`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}},Fw=class{},Iw=class extends Fw{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new q(K.FAILED_PRECONDITION,`The client has already been terminated.`)}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,IC(t,n),r,i,a))).catch((e=>{throw e.name===`FirebaseError`?(e.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new q(K.UNKNOWN,e.toString())}))}Ho(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,o])=>this.connection.Ho(e,IC(t,n),r,a,o,i))).catch((e=>{throw e.name===`FirebaseError`?(e.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new q(K.UNKNOWN,e.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}},Lw=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state=`Unknown`,this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca(`Unknown`),this._a=this.asyncQueue.enqueueAfterDelay(`online_state_timeout`,1e4,(()=>(this._a=null,this.la(`Backend didn't respond within 10 seconds.`),this.ca(`Offline`),Promise.resolve()))))}ha(e){this.state===`Online`?this.ca(`Unknown`):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca(`Offline`)))}set(e){this.Pa(),this.oa=0,e===`Online`&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){let t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ab(t),this.aa=!1):W(`OnlineStateTracker`,t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Rw=`RemoteStore`;var zw=class{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((e=>{n.enqueueAndForget((async()=>{Hw(this)&&(W(Rw,`Restarting streams for network reachability change.`),await async function(e){let t=ub(e);t.Ea.add(4),await Vw(t),t.Ra.set(`Unknown`),t.Ea.delete(4),await Bw(t)}(this))}))})),this.Ra=new Lw(n,r)}};async function Bw(e){if(Hw(e))for(let t of e.da)await t(!0)}async function Vw(e){for(let t of e.da)await t(!1)}function Hw(e){return ub(e).Ea.size===0}async function Uw(e,t){let n=ub(e);t?(n.Ea.delete(2),await Bw(n)):t||(n.Ea.add(2),await Vw(n),n.Ra.set(`Unknown`))}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ww=class e{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new db,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,a){let o=Date.now()+r,s=new e(t,n,o,i,a);return s.start(r),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(K.CANCELLED,`Operation cancelled`+(e?`: `+e:``))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle===null?Promise.resolve():(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e))))))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}},Gw=class{constructor(){this.queries=Kw(),this.onlineState=`Unknown`,this.Ca=new Set}terminate(){(function(e,t){let n=ub(e),r=n.queries;n.queries=Kw(),r.forEach(((e,n)=>{for(let e of n.Sa)e.onError(t)}))})(this,new q(K.ABORTED,`Firestore shutting down`))}};function Kw(){return new US((e=>RS(e)),LS)}function qw(e){e.Ca.forEach((e=>{e.next()}))}var Jw,Yw;(Yw=Jw||={}).Ma=`default`,Yw.Cache=`cache`;var Xw=class{constructor(e,t,n,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new US((e=>RS(e)),LS),this.Iu=new Map,this.Eu=new Set,this.du=new _x(Y.comparator),this.Au=new Map,this.Ru=new iw,this.Vu={},this.mu=new Map,this.fu=ZC.cr(),this.onlineState=`Unknown`,this.gu=void 0}get isPrimaryClient(){return!0===this.gu}};function Zw(e,t,n){let r=ub(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){let e=[];r.Tu.forEach(((n,r)=>{let i=r.view.va(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){let n=ub(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(let e of n.Sa)e.va(t)&&(r=!0)})),r&&qw(n)}(r.eventManager,t),e.length&&r.Pu.H_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Qw(e,t,n){let r=ub(e),i=[],a=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((e,s)=>{o.push(r.pu(s,t,n).then((e=>{if((e||n)&&r.isPrimaryClient){let t=e?!e.fromCache:n?.targetChanges.get(s.targetId)?.current;r.sharedClientState.updateQueryState(s.targetId,t?`current`:`not-current`)}if(e){i.push(e);let t=pw.As(s.targetId,e);a.push(t)}})))})),await Promise.all(o),r.Pu.H_(i),await async function(e,t){let n=ub(e);try{await n.persistence.runTransaction(`notifyLocalViewChanges`,`readwrite`,(e=>Z.forEach(t,(t=>Z.forEach(t.Es,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Z.forEach(t.ds,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Jb(e))throw e;W(`LocalStore`,`Failed to update sequence numbers: `+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.Ms.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(t,i)}}}(r.localStore,a))}async function $w(e,t){let n=ub(e);if(!n.currentUser.isEqual(t)){W(`SyncEngine`,`User change. New user:`,t.toKey());let e=await vw(n.localStore,t);n.currentUser=t,function(e,t){e.mu.forEach((e=>{e.forEach((e=>{e.reject(new q(K.CANCELLED,t))}))})),e.mu.clear()}(n,`'waitForPendingWrites' promise is rejected due to a user change.`),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Qw(n,e.Ls)}}var eT=class{constructor(){this.kind=`memory`,this.synchronizeTabs=!1}async initialize(e){this.serializer=Nw(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return _w(this.persistence,new hw,e.initialUser,this.serializer)}Cu(e){return new uw(fw.mi,this.serializer)}Du(e){return new bw}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};eT.provider={build:()=>new eT};var tT=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Zw(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=$w.bind(null,this.syncEngine),await Uw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Gw}()}createDatastore(e){let t=Nw(e.databaseInfo.databaseId),n=function(e){return new jw(e)}(e.databaseInfo);return function(e,t,n,r){return new Iw(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new zw(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>Zw(this.syncEngine,e,0)),function(){return Cw.v()?new Cw:new xw}())}createSyncEngine(e,t){return function(e,t,n,r,i,a,o){let s=new Xw(e,t,n,r,i,a);return o&&(s.gu=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){let t=ub(e);W(Rw,`RemoteStore shutting down.`),t.Ea.add(5),await Vw(t),t.Aa.shutdown(),t.Ra.set(`Unknown`)}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}};tT.provider={build:()=>new tT};
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function nT(e){let t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const rT=new Map,iT=`firestore.googleapis.com`;var aT=class{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(K.INVALID_ARGUMENT,`Can't provide ssl option if host option is not set`);this.host=iT,this.ssl=!0}else this.host=e.host,this.ssl=e.ssl??!0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=YC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(K.INVALID_ARGUMENT,`cacheSizeBytes must be at least 1048576`);this.cacheSizeBytes=e.cacheSizeBytes}jb(`experimentalForceLongPolling`,e.experimentalForceLongPolling,`experimentalAutoDetectLongPolling`,e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nT(e.experimentalLongPollingOptions??{}),function(e){if(e.timeoutSeconds!==void 0){if(isNaN(e.timeoutSeconds))throw new q(K.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new q(K.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new q(K.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},oT=class{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type=`firestore-lite`,this._persistenceKey=`(lite)`,this._settings=new aT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask=`notTerminated`}get app(){if(!this._app)throw new q(K.FAILED_PRECONDITION,`Firestore was not initialized using the Firebase SDK. 'app' is not available`);return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==`notTerminated`}_setSettings(e){if(this._settingsFrozen)throw new q(K.FAILED_PRECONDITION,`Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.`);this._settings=new aT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(e){if(!e)return new pb;switch(e.type){case`firstParty`:return new _b(e.sessionIndex||`0`,e.iamToken||null,e.authTokenFactory||null);case`provider`:return e.client;default:throw new q(K.INVALID_ARGUMENT,`makeAuthCredentialsProvider failed due to invalid credential type`)}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask===`notTerminated`&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask===`notTerminated`?await this._terminate():this._terminateTask=`notTerminated`}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=rT.get(e);t&&(W(`ComponentProvider`,`Removing Datastore`),rT.delete(e),t.terminate())}(this),Promise.resolve()}};function sT(e,t,n,r={}){e=Fb(e,oT);let i=Jo(t),a=e._getSettings(),o={...a,emulatorOptions:e._getEmulatorOptions()},s=`${t}:${n}`;i&&(Yo(`https://${s}`),ts(`Firestore`,!0)),a.host!==iT&&a.host!==s&&ob(`Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.`);let c={...a,host:s,ssl:i,emulatorOptions:r};if(!Os(c,o)&&(e._setSettings(c),r.mockUserToken)){let t,n;if(typeof r.mockUserToken==`string`)t=r.mockUserToken,n=tb.MOCK_USER;else{t=Xo(r.mockUserToken,e._app?.options.projectId);let i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new q(K.INVALID_ARGUMENT,`mockUserToken must contain 'sub' or 'user_id' field!`);n=new tb(i)}e._authCredentials=new mb(new fb(t,n))}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cT=class e{constructor(e,t,n){this.converter=t,this._query=n,this.type=`query`,this.firestore=e}withConverter(t){return new e(this.firestore,t,this._query)}},lT=class e{constructor(e,t,n){this.converter=t,this._key=n,this.type=`document`,this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new uT(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new e(this.firestore,t,this._key)}toJSON(){return{type:e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(Ib(n,e._jsonSchema))return new e(t,r||null,new Y(Db.fromString(n.referencePath)))}};lT._jsonSchemaVersion=`firestore/documentReference/1.0`,lT._jsonSchema={type:X(`string`,lT._jsonSchemaVersion),referencePath:X(`string`)};var uT=class e extends cT{constructor(e,t,n){super(e,t,AS(n)),this._path=n,this.type=`collection`}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new lT(this.firestore,null,new Y(e))}withConverter(t){return new e(this.firestore,t,this._path)}};function dT(e,t,...n){if(e=Vs(e),Ab(`collection`,`path`,t),e instanceof oT){let r=Db.fromString(t,...n);return Mb(r),new uT(e,null,r)}{if(!(e instanceof lT||e instanceof uT))throw new q(K.INVALID_ARGUMENT,`Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore`);let r=e._path.child(Db.fromString(t,...n));return Mb(r),new uT(e.firestore,null,r)}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const fT=`AsyncQueue`;var pT=class{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Pw(this,`async_queue_retry`),this._c=()=>{let e=Mw();e&&W(fT,`Visibility state changed to `+e.visibilityState),this.M_.w_()},this.ac=e;let t=Mw();t&&typeof t.addEventListener==`function`&&t.addEventListener(`visibilitychange`,this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;let t=Mw();t&&typeof t.removeEventListener==`function`&&t.removeEventListener(`visibilitychange`,this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));let t=new db;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Jb(e))throw e;W(fT,`Operation failed with retryable error: `+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){let t=this.ac.then((()=>(this.rc=!0,e().catch((e=>{throw this.nc=e,this.rc=!1,ab(`INTERNAL UNHANDLED ERROR: `,mT(e)),e})).then((e=>(this.rc=!1,e))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);let r=Ww.createAndSchedule(this,e,t,n,(e=>this.hc(e)));return this.tc.push(r),r}uc(){this.nc&&G(47125,{Pc:mT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(let t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(let t of this.tc)if(t.skipDelay(),e!==`all`&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){let t=this.tc.indexOf(e);this.tc.splice(t,1)}};function mT(e){let t=e.message||``;return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}var hT=class extends oT{constructor(e,t,n,r){super(e,t,n,r),this.type=`firestore`,this._queue=new pT,this._persistenceKey=r?.name||`[DEFAULT]`}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new pT(e),this._firestoreClient=void 0,await e}}};function gT(e,t){let n=typeof e==`object`?e:Bc(),r=typeof e==`string`?e:t||Fx,i=Nc(n,`firestore`).getImmediate({identifier:r});if(!i._initialized){let e=Wo(`firestore`);e&&sT(i,...e)}return i}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _T=class e{constructor(e){this._byteString=e}static fromBase64String(t){try{return new e(wx.fromBase64String(t))}catch(e){throw new q(K.INVALID_ARGUMENT,`Failed to construct data from Base64 string: `+e)}}static fromUint8Array(t){return new e(wx.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return`Bytes(base64: `+this.toBase64()+`)`}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ib(t,e._jsonSchema))return e.fromBase64String(t.bytes)}};_T._jsonSchemaVersion=`firestore/bytes/1.0`,_T._jsonSchema={type:X(`string`,_T._jsonSchemaVersion),bytes:X(`string`)};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var vT=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(K.INVALID_ARGUMENT,`Invalid field name at argument $(i + 1). Field names must not be empty.`);this._internalPath=new kb(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}},yT=class e{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(K.INVALID_ARGUMENT,`Latitude must be a number between -90 and 90, but was: `+e);if(!isFinite(t)||t<-180||t>180)throw new q(K.INVALID_ARGUMENT,`Longitude must be a number between -180 and 180, but was: `+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:e._jsonSchemaVersion}}static fromJSON(t){if(Ib(t,e._jsonSchema))return new e(t.latitude,t.longitude)}};yT._jsonSchemaVersion=`firestore/geoPoint/1.0`,yT._jsonSchema={type:X(`string`,yT._jsonSchemaVersion),latitude:X(`number`),longitude:X(`number`)};
/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var bT=class e{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ib(t,e._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e==`number`)))return new e(t.vectorValues);throw new q(K.INVALID_ARGUMENT,`Expected 'vectorValues' field to be a number array`)}}};bT._jsonSchemaVersion=`firestore/vectorValue/1.0`,bT._jsonSchema={type:X(`string`,bT._jsonSchemaVersion),vectorValues:X(`object`)};const xT=RegExp(`[~\\*/\\[\\]]`);function ST(e,t,n){if(t.search(xT)>=0)throw CT(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new vT(...t.split(`.`))._internalPath}catch{throw CT(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function CT(e,t,n,r,i){let a=r&&!r.isEmpty(),o=i!==void 0,s=`Function ${t}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=`. `;let c=``;return(a||o)&&(c+=` (found`,a&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=`)`),new q(K.INVALID_ARGUMENT,s+e+c)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wT=class{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lT(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new TT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ET(`DocumentSnapshot.get`,e));if(t!==null)return this._userDataWriter.convertValue(t)}}},TT=class extends wT{data(){return super.data()}};function ET(e,t){return typeof t==`string`?ST(e,t):t instanceof vT?t._internalPath:t._delegate._internalPath}var DT=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},OT=class e extends wT{constructor(e,t,n,r,i,a){super(e,t,n,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new kT(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(ET(`DocumentSnapshot.get`,e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(K.FAILED_PRECONDITION,`DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().`);let t=this._document,n={};return n.type=e._jsonSchemaVersion,n.bundle=``,n.bundleSource=`DocumentSnapshot`,n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,`previous`),n.bundle=(this._firestore,this.ref.path,`NOT SUPPORTED`),n)}};OT._jsonSchemaVersion=`firestore/documentSnapshot/1.0`,OT._jsonSchema={type:X(`string`,OT._jsonSchemaVersion),bundleSource:X(`string`,`DocumentSnapshot`),bundleName:X(`string`),bundle:X(`string`)};var kT=class extends OT{data(e={}){return super.data(e)}},AT=class e{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new DT(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new kT(this._firestore,this._userDataWriter,n.key,n,new DT(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(K.INVALID_ARGUMENT,`To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().`);return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{let r=new kT(e._firestore,e._userDataWriter,n.doc.key,n.doc,new DT(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:`added`,doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||e.type!==3)).map((t=>{let r=new kT(e._firestore,e._userDataWriter,t.doc.key,t.doc,new DT(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,a=-1;return t.type!==0&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),t.type!==1&&(n=n.add(t.doc),a=n.indexOf(t.doc.key)),{type:jT(t.type),doc:r,oldIndex:i,newIndex:a}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(K.FAILED_PRECONDITION,`QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().`);let t={};t.type=e._jsonSchemaVersion,t.bundleSource=`QuerySnapshot`,t.bundleName=xb.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let n=[],r=[],i=[];return this.docs.forEach((e=>{e._document!==null&&(n.push(e._document),r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,`previous`)),i.push(e.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,`NOT SUPPORTED`),t}};function jT(e){switch(e){case 0:return`added`;case 2:case 3:return`modified`;case 1:return`removed`;default:return G(61501,{type:e})}}AT._jsonSchemaVersion=`firestore/querySnapshot/1.0`,AT._jsonSchema={type:X(`string`,AT._jsonSchemaVersion),bundleSource:X(`string`,`QuerySnapshot`),bundleName:X(`string`),bundle:X(`string`)},(function(e,t=!0){(function(e){nb=e})(Rc),Mc(new Hs(`firestore`,((e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider(`app`).getImmediate(),a=new hT(new hb(e.getProvider(`auth-internal`)),new yb(i,e.getProvider(`app-check-internal`)),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,[`projectId`]))throw new q(K.INVALID_ARGUMENT,`"projectId" not provided in firebase.initializeApp.`);return new Ix(e.options.projectId,t)}(i,n),i);return r={useFetchStreams:t,...r},a._setSettings(r),a}),`PUBLIC`).setMultipleInstances(!0)),Vc($y,eb,e),Vc($y,eb,`esm2020`)})();
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const MT=`firebasestorage.googleapis.com`;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var NT=class e extends hs{constructor(t,n,r=0){super(FT(t),`Firebase Storage: ${n} (${FT(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return FT(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}},PT;(function(e){e.UNKNOWN=`unknown`,e.OBJECT_NOT_FOUND=`object-not-found`,e.BUCKET_NOT_FOUND=`bucket-not-found`,e.PROJECT_NOT_FOUND=`project-not-found`,e.QUOTA_EXCEEDED=`quota-exceeded`,e.UNAUTHENTICATED=`unauthenticated`,e.UNAUTHORIZED=`unauthorized`,e.UNAUTHORIZED_APP=`unauthorized-app`,e.RETRY_LIMIT_EXCEEDED=`retry-limit-exceeded`,e.INVALID_CHECKSUM=`invalid-checksum`,e.CANCELED=`canceled`,e.INVALID_EVENT_NAME=`invalid-event-name`,e.INVALID_URL=`invalid-url`,e.INVALID_DEFAULT_BUCKET=`invalid-default-bucket`,e.NO_DEFAULT_BUCKET=`no-default-bucket`,e.CANNOT_SLICE_BLOB=`cannot-slice-blob`,e.SERVER_FILE_WRONG_SIZE=`server-file-wrong-size`,e.NO_DOWNLOAD_URL=`no-download-url`,e.INVALID_ARGUMENT=`invalid-argument`,e.INVALID_ARGUMENT_COUNT=`invalid-argument-count`,e.APP_DELETED=`app-deleted`,e.INVALID_ROOT_OPERATION=`invalid-root-operation`,e.INVALID_FORMAT=`invalid-format`,e.INTERNAL_ERROR=`internal-error`,e.UNSUPPORTED_ENVIRONMENT=`unsupported-environment`})(PT||={});function FT(e){return`storage/`+e}function IT(){return new NT(PT.UNKNOWN,`An unknown error occurred, please check the error payload for server response.`)}function LT(){return new NT(PT.RETRY_LIMIT_EXCEEDED,`Max retry time for operation exceeded, please try again.`)}function RT(){return new NT(PT.CANCELED,`User canceled the upload/download.`)}function zT(e){return new NT(PT.INVALID_URL,`Invalid URL '`+e+`'.`)}function BT(e){return new NT(PT.INVALID_DEFAULT_BUCKET,`Invalid default bucket '`+e+`'.`)}function VT(e){return new NT(PT.INVALID_ARGUMENT,e)}function HT(){return new NT(PT.APP_DELETED,`The Firebase app was deleted.`)}function UT(e){return new NT(PT.INVALID_ROOT_OPERATION,`The operation '`+e+`' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').`)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WT=class e{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){let e=encodeURIComponent;return`/b/`+e(this.bucket)+`/o/`+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return`/b/`+e(this.bucket)+`/o`}static makeFromBucketSpec(t,n){let r;try{r=e.makeFromUrl(t,n)}catch{return new e(t,``)}if(r.path===``)return r;throw BT(t)}static makeFromUrl(t,n){let r=null,i=`([A-Za-z0-9.\\-_]+)`;function a(e){e.path.charAt(e.path.length-1)===`/`&&(e.path_=e.path_.slice(0,-1))}let o=RegExp(`^gs://`+i+`(/(.*))?$`,`i`),s={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}let l=n.replace(/[.]/g,`\\.`),u=RegExp(`^https?://${l}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?\$`,`i`),d={bucket:1,path:3},f=n===MT?`(?:storage.googleapis.com|storage.cloud.google.com)`:n,p=RegExp(`^https?://${f}/${i}/([^?#]*)`,`i`),m={bucket:1,path:2},h=[{regex:o,indices:s,postModify:a},{regex:u,indices:d,postModify:c},{regex:p,indices:m,postModify:c}];for(let n=0;n<h.length;n++){let i=h[n],a=i.regex.exec(t);if(a){let t=a[i.indices.bucket],n=a[i.indices.path];n||=``,r=new e(t,n),i.postModify(r);break}}if(r==null)throw zT(t);return r}},GT=class{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function KT(e,t,n){let r=1,i=null,a=null,o=!1,s=0;function c(){return s===2}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function d(t){i=setTimeout(()=>{i=null,e(p,c())},t)}function f(){a&&clearTimeout(a)}function p(e,...t){if(l){f();return}if(e){f(),u.call(null,e,...t);return}let n=c()||o;if(n){f(),u.call(null,e,...t);return}r<64&&(r*=2);let i;s===1?(s=2,i=0):i=(r+Math.random())*1e3,d(i)}let m=!1;function h(e){m||(m=!0,f(),!l&&(i===null?e||(s=1):(e||(s=2),clearTimeout(i),d(0))))}return d(0),a=setTimeout(()=>{o=!0,h(!0)},n),h}function qT(e){e(!1)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function JT(e){return e!==void 0}function YT(e,t,n,r){if(r<t)throw VT(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw VT(`Invalid value for '${e}'. Expected ${n} or less.`)}function XT(e){let t=encodeURIComponent,n=`?`;for(let r in e)if(e.hasOwnProperty(r)){let i=t(r)+`=`+t(e[r]);n=n+i+`&`}return n=n.slice(0,-1),n}var ZT;(function(e){e[e.NO_ERROR=0]=`NO_ERROR`,e[e.NETWORK_ERROR=1]=`NETWORK_ERROR`,e[e.ABORT=2]=`ABORT`})(ZT||={});
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function QT(e,t){let n=e>=500&&e<600,r=[408,429],i=r.indexOf(e)!==-1,a=t.indexOf(e)!==-1;return n||i||a}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $T=class{constructor(e,t,n,r,i,a,o,s,c,l,u,d=!0,f=!1){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=s,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=d,this.isUsingEmulator=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{if(t){e(!1,new eE(!1,null,!0));return}let n=this.connectionFactory_();this.pendingConnection_=n;let r=e=>{let t=e.loaded,n=e.lengthComputable?e.total:-1;this.progressCallback_!==null&&this.progressCallback_(t,n)};this.progressCallback_!==null&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&n.removeUploadProgressListener(r),this.pendingConnection_=null;let t=n.getErrorCode()===ZT.NO_ERROR,i=n.getStatus();if(!t||QT(i,this.additionalRetryCodes_)&&this.retry){let t=n.getErrorCode()===ZT.ABORT;e(!1,new eE(!1,null,t));return}let a=this.successCodes_.indexOf(i)!==-1;e(!0,new eE(a,n))})},t=(e,t)=>{let n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());JT(e)?n(e):n()}catch(e){r(e)}else if(i!==null){let e=IT();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){let e=this.appDelete_?HT():RT();r(e)}else{let e=LT();r(e)}};this.canceled_?t(!1,new eE(!1,null,!0)):this.backoffId_=KT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}},eE=class{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}};function tE(e,t){t!==null&&t.length>0&&(e.Authorization=`Firebase `+t)}function nE(e,t){e[`X-Firebase-Storage-Version`]=`webjs/`+(t??`AppManager`)}function rE(e,t){t&&(e[`X-Firebase-GMPID`]=t)}function iE(e,t){t!==null&&(e[`X-Firebase-AppCheck`]=t)}function aE(e,t,n,r,i,a,o=!0,s=!1){let c=XT(e.urlParams),l=e.url+c,u=Object.assign({},e.headers);return rE(u,t),tE(u,n),nE(u,a),iE(u,r),new $T(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o,s)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function oE(e){if(e.length===0)return null;let t=e.lastIndexOf(`/`);if(t===-1)return``;let n=e.slice(0,t);return n}function sE(e){let t=e.lastIndexOf(`/`,e.length-2);return t===-1?e:e.slice(t+1)}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cE=class e{constructor(e,t){this._service=e,t instanceof WT?this._location=t:this._location=WT.makeFromUrl(t,e.host)}toString(){return`gs://`+this._location.bucket+`/`+this._location.path}_newRef(t,n){return new e(t,n)}get root(){let e=new WT(this._location.bucket,``);return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sE(this._location.path)}get storage(){return this._service}get parent(){let t=oE(this._location.path);if(t===null)return null;let n=new WT(this._location.bucket,t);return new e(this._service,n)}_throwIfRoot(e){if(this._location.path===``)throw UT(e)}};function lE(e,t){let n=t?.storageBucket;return n==null?null:WT.makeFromBucketSpec(n,e)}var uE=class{constructor(e,t,n,r,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=MT,this._protocol=`https`,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,r==null?this._bucket=lE(this._host,this.app.options):this._bucket=WT.makeFromBucketSpec(r,this._host)}get host(){return this._host}set host(e){this._host=e,this._url==null?this._bucket=lE(e,this.app.options):this._bucket=WT.makeFromBucketSpec(this._url,e)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){YT(`time`,0,1/0,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){YT(`time`,0,1/0,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Pc(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new cE(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new GT(HT());{let a=aE(e,this._appId,n,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){let[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}};const dE=`@firebase/storage`,fE=`0.14.0`;function pE(e,{instanceIdentifier:t}){let n=e.getProvider(`app`).getImmediate(),r=e.getProvider(`auth-internal`),i=e.getProvider(`app-check-internal`);return new uE(n,r,i,t,Rc)}function mE(){Mc(new Hs(`storage`,pE,`PUBLIC`).setMultipleInstances(!0)),Vc(dE,fE,``),Vc(dE,fE,`esm2020`)}mE(),Symbol();function hE(e){return _E({initialUser:e,dependencies:{popupRedirectResolver:$f,persistence:[ef,Dd,Md]}})}const gE=Symbol(`VueFireAuth`);function _E({dependencies:e,initialUser:t}){return(n,r)=>{let[i,a]=vE(n,r,t,e);sm(i,a)}}function vE(e,t,n,r,i=Bu(e,r)){let a=rm(e,t).run(()=>Xt(n));return im.set(e,a),t.provide(gE,i),[a,i]}function yE(e,{firebaseApp:t,modules:n=[]}){e.provide(em,t);for(let r of n)r(t,e)}var bE=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e`;const xE={class:`greetings`},SE={class:`green`};var CE=rr({__name:`HelloWorld`,props:{msg:{}},setup(e){return(e,t)=>(Qi(),ra(`div`,xE,[j(`h1`,SE,De(e.msg),1),t[0]||=j(`h3`,null,[N(` You’ve successfully created a project with `),j(`a`,{href:`https://vite.dev/`,target:`_blank`,rel:`noopener`},`Vite`),N(` + `),j(`a`,{href:`https://vuejs.org/`,target:`_blank`,rel:`noopener`},`Vue 3`),N(`. `)],-1)]))}}),wE=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},TE=wE(CE,[[`__scopeId`,`data-v-244e519f`]]);const EE={},DE={class:`item`},OE={class:`details`};function kE(e,t){return Qi(),ra(`div`,DE,[j(`i`,null,[Er(e.$slots,`icon`,{},void 0,!0)]),j(`div`,OE,[j(`h3`,null,[Er(e.$slots,`heading`,{},void 0,!0)]),Er(e.$slots,`default`,{},void 0,!0)])])}var AE=wE(EE,[[`render`,kE],[`__scopeId`,`data-v-fd0742eb`]]);const jE={},ME={xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`17`,fill:`currentColor`};function NE(e,t){return Qi(),ra(`svg`,ME,t[0]||=[j(`path`,{d:`M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z`},null,-1)])}var PE=wE(jE,[[`render`,NE]]);const FE={},IE={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,"aria-hidden":`true`,role:`img`,class:`iconify iconify--mdi`,width:`24`,height:`24`,preserveAspectRatio:`xMidYMid meet`,viewBox:`0 0 24 24`};function LE(e,t){return Qi(),ra(`svg`,IE,t[0]||=[j(`path`,{d:`M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z`,fill:`currentColor`},null,-1)])}var RE=wE(FE,[[`render`,LE]]);const zE={},BE={xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`20`,fill:`currentColor`};function VE(e,t){return Qi(),ra(`svg`,BE,t[0]||=[j(`path`,{d:`M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z`},null,-1)])}var HE=wE(zE,[[`render`,VE]]);const UE={},WE={xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,fill:`currentColor`};function GE(e,t){return Qi(),ra(`svg`,WE,t[0]||=[j(`path`,{d:`M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z`},null,-1)])}var KE=wE(UE,[[`render`,GE]]);const qE={},JE={xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,fill:`currentColor`};function YE(e,t){return Qi(),ra(`svg`,JE,t[0]||=[j(`path`,{d:`M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z`},null,-1)])}var XE=wE(qE,[[`render`,YE]]),ZE=rr({__name:`TheWelcome`,setup(e){let t=()=>fetch(`/__open-in-editor?file=README.md`);return(e,n)=>(Qi(),ra(Ki,null,[M(AE,null,{icon:In(()=>[M(PE)]),heading:In(()=>n[0]||=[N(`Documentation`,-1)]),default:In(()=>[n[1]||=N(` Vue’s `,-1),n[2]||=j(`a`,{href:`https://vuejs.org/`,target:`_blank`,rel:`noopener`},`official documentation`,-1),n[3]||=N(` provides you with all information you need to get started. `,-1)]),_:1,__:[1,2,3]}),M(AE,null,{icon:In(()=>[M(RE)]),heading:In(()=>n[4]||=[N(`Tooling`,-1)]),default:In(()=>[n[6]||=N(` This project is served and bundled with `,-1),n[7]||=j(`a`,{href:`https://vite.dev/guide/features.html`,target:`_blank`,rel:`noopener`},`Vite`,-1),n[8]||=N(`. The recommended IDE setup is `,-1),n[9]||=j(`a`,{href:`https://code.visualstudio.com/`,target:`_blank`,rel:`noopener`},`VSCode`,-1),n[10]||=N(` + `,-1),n[11]||=j(`a`,{href:`https://github.com/vuejs/language-tools`,target:`_blank`,rel:`noopener`},`Vue - Official`,-1),n[12]||=N(`. If you need to test your components and web pages, check out `,-1),n[13]||=j(`a`,{href:`https://vitest.dev/`,target:`_blank`,rel:`noopener`},`Vitest`,-1),n[14]||=N(` and `,-1),n[15]||=j(`a`,{href:`https://www.cypress.io/`,target:`_blank`,rel:`noopener`},`Cypress`,-1),n[16]||=N(` / `,-1),n[17]||=j(`a`,{href:`https://playwright.dev/`,target:`_blank`,rel:`noopener`},`Playwright`,-1),n[18]||=N(`. `,-1),n[19]||=j(`br`,null,null,-1),n[20]||=N(` More instructions are available in `,-1),j(`a`,{href:`javascript:void(0)`,onClick:t},n[5]||=[j(`code`,null,`README.md`,-1)]),n[21]||=N(`. `,-1)]),_:1,__:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]}),M(AE,null,{icon:In(()=>[M(HE)]),heading:In(()=>n[22]||=[N(`Ecosystem`,-1)]),default:In(()=>[n[23]||=N(` Get official tools and libraries for your project: `,-1),n[24]||=j(`a`,{href:`https://pinia.vuejs.org/`,target:`_blank`,rel:`noopener`},`Pinia`,-1),n[25]||=N(`, `,-1),n[26]||=j(`a`,{href:`https://router.vuejs.org/`,target:`_blank`,rel:`noopener`},`Vue Router`,-1),n[27]||=N(`, `,-1),n[28]||=j(`a`,{href:`https://test-utils.vuejs.org/`,target:`_blank`,rel:`noopener`},`Vue Test Utils`,-1),n[29]||=N(`, and `,-1),n[30]||=j(`a`,{href:`https://github.com/vuejs/devtools`,target:`_blank`,rel:`noopener`},`Vue Dev Tools`,-1),n[31]||=N(`. If you need more resources, we suggest paying `,-1),n[32]||=j(`a`,{href:`https://github.com/vuejs/awesome-vue`,target:`_blank`,rel:`noopener`},`Awesome Vue`,-1),n[33]||=N(` a visit. `,-1)]),_:1,__:[23,24,25,26,27,28,29,30,31,32,33]}),M(AE,null,{icon:In(()=>[M(KE)]),heading:In(()=>n[34]||=[N(`Community`,-1)]),default:In(()=>[n[35]||=N(` Got stuck? Ask your question on `,-1),n[36]||=j(`a`,{href:`https://chat.vuejs.org`,target:`_blank`,rel:`noopener`},`Vue Land`,-1),n[37]||=N(` (our official Discord server), or `,-1),n[38]||=j(`a`,{href:`https://stackoverflow.com/questions/tagged/vue.js`,target:`_blank`,rel:`noopener`},`StackOverflow`,-1),n[39]||=N(`. You should also follow the official `,-1),n[40]||=j(`a`,{href:`https://bsky.app/profile/vuejs.org`,target:`_blank`,rel:`noopener`},`@vuejs.org`,-1),n[41]||=N(` Bluesky account or the `,-1),n[42]||=j(`a`,{href:`https://x.com/vuejs`,target:`_blank`,rel:`noopener`},`@vuejs`,-1),n[43]||=N(` X account for latest news in the Vue world. `,-1)]),_:1,__:[35,36,37,38,39,40,41,42,43]}),M(AE,null,{icon:In(()=>[M(XE)]),heading:In(()=>n[44]||=[N(`Support Vue`,-1)]),default:In(()=>[n[45]||=N(` As an independent project, Vue relies on community backing for its sustainability. You can help us by `,-1),n[46]||=j(`a`,{href:`https://vuejs.org/sponsor/`,target:`_blank`,rel:`noopener`},`becoming a sponsor`,-1),n[47]||=N(`. `,-1)]),_:1,__:[45,46,47]})],64))}}),QE=ZE;const $E={class:`wrapper`};var eD=rr({__name:`App`,setup(e){return(e,t)=>(Qi(),ra(Ki,null,[j(`header`,null,[t[0]||=j(`img`,{alt:`Vue logo`,class:`logo`,src:bE,width:`125`,height:`125`},null,-1),j(`div`,$E,[M(TE,{msg:`You did it!`})])]),j(`main`,null,[M(QE)])],64))}}),tD=wE(eD,[[`__scopeId`,`data-v-440c393a`]]);const nD=zc({}),rD=gT(nD);dT(rD,`todos`);const iD=So(tD);iD.use(yE,{firebaseApp:nD,modules:[hE()]}),iD.mount(`#app`);