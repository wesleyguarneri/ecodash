"use strict";
exports.id = 6290;
exports.ids = [6290];
exports.modules = {

/***/ 5992:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ x)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e,n,t,r={exports:{}};e=r,n=function(){function e(e,t,x){x=x||2;var i,u,v,o,y,p,a,l=t&&t.length,h=l?t[0]*x:e.length,s=n(e,0,h,x,!0),c=[];if(!s||s.next===s.prev)return c;if(l&&(s=f(e,t,s,x)),e.length>80*x){i=v=e[0],u=o=e[1];for(var Z=x;Z<h;Z+=x)(y=e[Z])<i&&(i=y),(p=e[Z+1])<u&&(u=p),y>v&&(v=y),p>o&&(o=p);a=0!==(a=Math.max(v-i,o-u))?1/a:0}return r(s,c,x,i,u,a),c}function n(e,n,t,r,x){var i,u;if(x===E(e,n,t,r)>0)for(i=n;i<t;i+=r)u=B(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=B(i,e[i],e[i+1],u);if(u&&M(u,u.next)){var v=u.next;C(u),u=v}return u}function t(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!M(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else{var x=r.prev;if(C(r),(r=n=x)===r.next)break;t=!0}}while(t||r!==n);return n}function r(e,n,f,o,y,p,a){if(e){!a&&p&&h(e,o,y,p);for(var l,s,c=e;e.prev!==e.next;)if(l=e.prev,s=e.next,p?i(e,o,y,p):x(e))n.push(l.i/f),n.push(e.i/f),n.push(s.i/f),C(e),e=s.next,c=s.next;else if((e=s)===c){a?1===a?r(e=u(t(e),n,f),n,f,o,y,p,2):2===a&&v(e,n,f,o,y,p):r(t(e),n,f,o,y,p,1);break}}}function x(e){var n=e.prev,t=e,r=e.next;if(w(n,t,r)>=0)return!1;for(var x=e.next.next;x!==e.prev;){if(g(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&w(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function i(e,n,t,r){var x=e.prev,i=e,u=e.next;if(w(x,i,u)>=0)return!1;for(var v=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,f=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,o=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,y=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,p=c(v,f,n,t,r),a=c(o,y,n,t,r),l=e.prevZ,h=e.nextZ;l&&l.z>=p&&h&&h.z<=a;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;if(l=l.prevZ,h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;l&&l.z>=p;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;l=l.prevZ}for(;h&&h.z<=a;){if(h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function u(e,n,r){var x=e;do{var i=x.prev,u=x.next.next;!M(i,u)&&z(i,x,x.next,u)&&j(i,u)&&j(u,i)&&(n.push(i.i/r),n.push(x.i/r),n.push(u.i/r),C(x),C(x.next),x=e=u),x=x.next}while(x!==e);return t(x)}function v(e,n,x,i,u,v){var f=e;do{for(var o=f.next.next;o!==f.prev;){if(f.i!==o.i&&d(f,o)){var y=A(f,o);return f=t(f,f.next),y=t(y,y.next),r(f,n,x,i,u,v),void r(y,n,x,i,u,v)}o=o.next}f=f.next}while(f!==e)}function f(e,r,x,i){var u,v,f,y=[];for(u=0,v=r.length;u<v;u++)(f=n(e,r[u]*i,u<v-1?r[u+1]*i:e.length,i,!1))===f.next&&(f.steiner=!0),y.push(Z(f));for(y.sort(o),u=0;u<y.length;u++)x=t(x=p(y[u],x),x.next);return x}function o(e,n){return e.x-n.x}function y(e){if(e.next.prev===e)return e;let n=e;for(;;){const t=n.next;if(t.prev===n||t===n||t===e)break;n=t}return n}function p(e,n){var r=a(e,n);if(!r)return n;var x=A(r,e),i=t(r,r.next);let u=y(x);return t(u,u.next),i=y(i),y(n===r?i:n)}function a(e,n){var t,r=n,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var v=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(v<=x&&v>u){if(u=v,v===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===u)return t;var f,o=t,y=t.x,p=t.y,a=1/0;r=t;do{x>=r.x&&r.x>=y&&x!==r.x&&g(i<p?x:u,i,y,p,i<p?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),j(r,e)&&(f<a||f===a&&(r.x>t.x||r.x===t.x&&l(t,r)))&&(t=r,a=f)),r=r.next}while(r!==o);return t}function l(e,n){return w(e.prev,e,n.prev)<0&&w(n.next,e,e.next)<0}function h(e,n,t,r){var x=e;do{if(null===x.z&&(x.z=c(x.x,x.y,n,t,r)),x.prev.next!==x||x.next.prev!==x)return x.prev.next=x,x.next.prev=x,h(e,n,t,r);x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,s(x)}function s(e){var n,t,r,x,i,u,v,f,o=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,v=0,n=0;n<o&&(v++,r=r.nextZ);n++);for(f=o;v>0||f>0&&r;)0!==v&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,v--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,o*=2}while(u>1);return e}function c(e,n,t,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*x)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function Z(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function g(e,n,t,r,x,i,u,v){return(x-u)*(n-v)-(e-u)*(i-v)>=0&&(e-u)*(r-v)-(t-u)*(n-v)>=0&&(t-u)*(i-v)-(x-u)*(r-v)>=0}function d(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!k(e,n)&&(j(e,n)&&j(n,e)&&q(e,n)&&(w(e.prev,e,n.prev)||w(e,n.prev,n))||M(e,n)&&w(e.prev,e,e.next)>0&&w(n.prev,n,n.next)>0)}function w(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function M(e,n){return e.x===n.x&&e.y===n.y}function z(e,n,t,r){var x=m(w(e,n,t)),i=m(w(e,n,r)),u=m(w(t,r,e)),v=m(w(t,r,n));return x!==i&&u!==v||!(0!==x||!b(e,t,n))||!(0!==i||!b(e,r,n))||!(0!==u||!b(t,e,r))||!(0!==v||!b(t,n,r))}function b(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function m(e){return e>0?1:e<0?-1:0}function k(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&z(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function j(e,n){return w(e.prev,e,e.next)<0?w(e,n,e.next)>=0&&w(e,e.prev,n)>=0:w(e,n,e.prev)<0||w(e,e.next,n)<0}function q(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}function A(e,n){var t=new D(e.i,e.x,e.y),r=new D(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function B(e,n,t,r){var x=new D(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function C(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function D(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E(e,n,t,r){for(var x=0,i=n,u=t-r;i<t;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}return e.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(E(e,0,i,t));if(x)for(var v=0,f=n.length;v<f;v++){var o=n[v]*t,y=v<f-1?n[v+1]*t:e.length;u-=Math.abs(E(e,o,y,t))}var p=0;for(v=0;v<r.length;v+=3){var a=r[v]*t,l=r[v+1]*t,h=r[v+2]*t;p+=Math.abs((e[a]-e[h])*(e[l+1]-e[a+1])-(e[a]-e[l])*(e[h+1]-e[a+1]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},e.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<n;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t},e},void 0!==(t=n())&&(e.exports=t);const x=r.exports;


/***/ }),

/***/ 71200:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vX": () => (/* binding */ g),
/* harmony export */   "s5": () => (/* binding */ M),
/* harmony export */   "k3": () => (/* binding */ P),
/* harmony export */   "Or": () => (/* binding */ h)
/* harmony export */ });
/* unused harmony exports C_256_TO_RAD, C_2PI, C_DEG_TO_256, C_DEG_TO_RAD, C_INFINITY, C_PI, C_PI_BY_2, C_RAD_TO_256, C_SQRT2, C_SQRT2_INV, interpolate, positiveMod, sqr */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=Number.POSITIVE_INFINITY,t=Math.PI,r=2*t,u=t/2,o=128/t,e=t/128,c=256/360,f=t/180,i=1.414213562,I=1/i,N=1/Math.LN2;function a(n,t){return(n%=t)>=0?n:n+t}function h(n){return a(n*o,256)}function M(n){return a(n*c,256)}function P(n){return Math.log(n)*N}function T(n){return n*n}function b(n,t,r){return n*(1-r)+t*r}function g(n,t,r){return n>=t&&n<=r||n>=r&&n<=t}


/***/ }),

/***/ 89106:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dk": () => (/* binding */ x),
/* harmony export */   "Gq": () => (/* binding */ b),
/* harmony export */   "a": () => (/* binding */ B),
/* harmony export */   "mE": () => (/* binding */ U),
/* harmony export */   "m2": () => (/* binding */ _),
/* harmony export */   "qr": () => (/* binding */ R),
/* harmony export */   "jj": () => (/* binding */ L),
/* harmony export */   "hF": () => (/* binding */ F)
/* harmony export */ });
/* unused harmony export getSizeFlagsMask */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38716);
/* harmony import */ var _mesh_templates_meshUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65956);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t,s){const a=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVFlag.SIZE_FIELD_STOPS */ .X.SIZE_FIELD_STOPS|_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVFlag.SIZE_MINMAX_VALUE */ .X.SIZE_MINMAX_VALUE|_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVFlag.SIZE_SCALE_STOPS */ .X.SIZE_SCALE_STOPS|_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVFlag.SIZE_UNIT_VALUE */ .X.SIZE_UNIT_VALUE,r=(t&(_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVTarget.FIELD_TARGETS_OUTLINE */ .mf.FIELD_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVTarget.MINMAX_TARGETS_OUTLINE */ .mf.MINMAX_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVTarget.SCALE_TARGETS_OUTLINE */ .mf.SCALE_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVTarget.UNIT_TARGETS_OUTLINE */ .mf.UNIT_TARGETS_OUTLINE))>>>4;return s.isOutline||s.isOutlinedFill?a&r:a&~r}const n=0,v=8,o=7,l=8,h=11,S=11,u=12,d=13,V=14,c=15,p=15,g=16,z=17,m=18,y=19,E=20,T=21,M=22;function L(t,e){switch(t){case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.FILL */ .LW.FILL:return x.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.LINE */ .LW.LINE:return B.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.MARKER */ .LW.MARKER:return U.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.TEXT */ .LW.TEXT:return R.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.LABEL */ .LW.LABEL:return b.from(e);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function F(t){switch(_.load(t).geometryType){case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.MARKER */ .LW.MARKER:return new U(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.FILL */ .LW.FILL:return new x(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.LINE */ .LW.LINE:return new B(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.TEXT */ .LW.TEXT:return new R(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.LABEL */ .LW.LABEL:return new b(t)}}class _{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(l,h)}set geometryType(t){this.setBits(t,l,h)}get mapAligned(){return!!this.bit(E)}set mapAligned(t){this.setBit(E,t)}get sdf(){return!!this.bit(S)}set sdf(t){this.setBit(S,t)}get pattern(){return!!this.bit(u)}set pattern(t){this.setBit(u,t)}get textureBinding(){return this.bits(n,v)}set textureBinding(t){this.setBits(t,n,v)}get geometryTypeString(){switch(this.geometryType){case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.FILL */ .LW.FILL:return"fill";case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.MARKER */ .LW.MARKER:return"marker";case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.LINE */ .LW.LINE:return"line";case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.TEXT */ .LW.TEXT:return"text";case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.LABEL */ .LW.LABEL:return"label";default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i}bit(t){return(this._data&1<<t)>>t}setBits(t,e,i){for(let s=e,a=0;s<i;s++,a++)this.setBit(s,0!=(t&1<<a))}bits(t,e){let i=0;for(let s=t,a=0;s<e;s++,a++)i|=this.bit(s)<<a;return i}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(o&this.textureBinding)}}_.shared=new _(0);const I=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(g)}set vvSizeMinMaxValue(t){this.setBit(g,t)}get vvSizeScaleStops(){return 0!==this.bit(z)}set vvSizeScaleStops(t){this.setBit(z,t)}get vvSizeFieldStops(){return 0!==this.bit(m)}set vvSizeFieldStops(t){this.setBit(m,t)}get vvSizeUnitValue(){return 0!==this.bit(y)}set vvSizeUnitValue(t){this.setBit(y,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,i){super.setVV(t,i);const s=r(t,i)&t;this.vvSizeMinMaxValue=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVFlag.SIZE_MINMAX_VALUE */ .X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVFlag.SIZE_FIELD_STOPS */ .X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVFlag.SIZE_UNIT_VALUE */ .X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVFlag.SIZE_SCALE_STOPS */ .X.SIZE_SCALE_STOPS)}},O=t=>class extends t{get vvRotation(){return 0!==this.bit(c)}set vvRotation(t){this.setBit(c,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,i){super.setVV(t,i),this.vvRotation=!i.isOutline&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVFlag.ROTATION */ .X.ROTATION)}},A=t=>class extends t{get vvColor(){return 0!==this.bit(d)}set vvColor(t){this.setBit(d,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,i){super.setVV(t,i),this.vvColor=!i.isOutline&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVFlag.COLOR */ .X.COLOR)}},f=t=>class extends t{get vvOpacity(){return 0!==this.bit(V)}set vvOpacity(t){this.setBit(V,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,i){super.setVV(t,i),this.vvOpacity=!i.isOutline&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLVVFlag.OPACITY */ .X.OPACITY)}};class x extends(A(f(I(_)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.FILL */ .LW.FILL,e.dotDensity="dot-density"===t.stride.fill,e.simple="simple"===t.stride.fill,e.outlinedFill=t.isOutlinedFill,e.dotDensity||e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return!!this.bit(p)}set dotDensity(t){this.setBit(p,t)}get simple(){return!!this.bit(M)}set simple(t){this.setBit(M,t)}get outlinedFill(){return!!this.bit(T)}set outlinedFill(t){this.setBit(T,t)}}x.shared=new x(0);class U extends(A(f(O(I(_))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.MARKER */ .LW.MARKER,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}U.shared=new U(0);class B extends(A(f(I(_)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.LINE */ .LW.LINE,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}B.shared=new B(0);class R extends(A(f(O(I(_))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.TEXT */ .LW.TEXT,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}R.shared=new R(0);class b extends(I(_)){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType.LABEL */ .LW.LABEL,e.setVV(t.vvFlags,t),e.mapAligned=(0,_mesh_templates_meshUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isMapAligned */ .N)(t.placement),e.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}b.shared=new b(0);


/***/ }),

/***/ 65956:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}


/***/ }),

/***/ 67766:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36663);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53280);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_0__/* .HandleOwner */ .r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({readOnly:!0})],s.prototype,"supportsTileUpdates",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({constructOnly:!0})],s.prototype,"remoteClient",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({constructOnly:!0})],s.prototype,"service",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],s.prototype,"spatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({constructOnly:!0})],s.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({constructOnly:!0})],s.prototype,"tileStore",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .j)("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;


/***/ }),

/***/ 84899:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ T)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/BidiText.js
var BidiText = __webpack_require__(89060);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/set.js
var set = __webpack_require__(33156);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js
var diffUtils = __webpack_require__(27281);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/DisplayId.js
var DisplayId = __webpack_require__(88013);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/MeshData.js + 2 modules
var MeshData = __webpack_require__(88710);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/factories/WGLMeshFactory.js + 2 modules
var WGLMeshFactory = __webpack_require__(13191);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLTemplateStore.js + 12 modules
var WGLTemplateStore = __webpack_require__(12044);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Matcher.js
var Matcher = __webpack_require__(41808);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/textUtils.js
var textUtils = __webpack_require__(40576);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/processors/BaseProcessor.js
var BaseProcessor = __webpack_require__(67766);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/support/ResourceManagerProxy.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map}destroy(){}async fetchResource(t,r){const s=this._resourceMap,i=s.get(t);if(i)return i;let n=this._inFlightResourceMap.get(t);if(n)return n;try{n=this._remoteClient.invoke("tileRenderer.fetchResource",{url:t},{...r}),this._inFlightResourceMap.set(t,n),n.then((e=>(this._inFlightResourceMap.delete(t),s.set(t,e),e)))}catch(o){return (0,promiseUtils/* isAbortError */.D_)(o)?null:{width:0,height:0}}return n}getResource(e){var t;return null!=(t=this._resourceMap.get(e))?t:null}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/processors/SymbolProcessor.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function M(e,t){return(!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function j(e){const t=e.message,s={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin},transferList:new Array};for(const r in t.data){const e=t.data[r];if(s.message.data[r]=null,(0,maybe/* isSome */.pC)(e)){const t=e.stride,a=e.indices.slice(0),o=e.vertices.slice(0),n=e.records.slice(0),l={stride:t,indices:a,vertices:o,records:n,metrics:(0,maybe/* andThen */.Po)(e.metrics,(e=>e.slice(0)))};s.transferList.push(a,o,n),s.message.data[r]=l}}return s}Logger/* default.getLogger */.Z.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let x=class extends BaseProcessor/* default */.Z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new t(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e)}))}async update(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const i=(0,diffUtils/* diff */.Hg)(this._schema,r);(0,diffUtils/* hasDiff */.uD)(i,"mesh")&&((0,has/* default */.Z)("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",i),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,s,r){return (0,promiseUtils/* throwIfAborted */.k_)(r),this._onTileData(e,t,s,r)}onTileClear(e){const t={clear:!0};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}onTileError(e,t,s){const r=s.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const s of e)s.message.tileKey===t.id&&this._updateTileMesh("append",t,j(s),[],!1,!1,null)}))}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(j(t))}_createFactory(e){const{geometryType:t,objectIdField:s,fields:r}=this.service,a=(e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t),o={geometryType:t,fields:r,spatialReference:SpatialReference/* default.fromJSON */.Z.fromJSON(this.spatialReference)},n=new WGLTemplateStore/* WGLTemplateStore */.Wr(a,this.tileStore.tileScheme.tileInfo),{matcher:l,aggregateMatcher:c}=e.mesh;return this._store=n,this._matchers.feature=(0,Matcher/* createMatcher */.fL)(l,n,o,this._resourceManagerProxy),this._matchers.aggregate=(0,maybe/* andThen */.Po)(c,(e=>(0,Matcher/* createMatcher */.fL)(e,n,o,this._resourceManagerProxy))),new WGLMeshFactory/* WGLMeshFactory */.j(t,s,n)}async _onTileData(e,t,s,r){(0,promiseUtils/* throwIfAborted */.k_)(r);const{type:i,addOrUpdate:n,remove:l}=t,f=t.end,h=!!this._schema.mesh.sortKey;if(!n){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:f,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const u=this._processFeatures(e,n,s,r);try{const s=await u;if((0,maybe/* isNone */.Wi)(s)){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:f,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const n=[];for(const t of s){let s=!1;const r=t.message.bufferIds,i=e.key.id,a=t.message.tileKey;if(i!==a&&(0,maybe/* isSome */.pC)(r)){if(!this.tileStore.get(a)){this._addBufferData(i,t),n.push(t);continue}let e=this._bufferIds.get(a);e||(e=new Set,this._bufferIds.set(a,e));const o=Array.from(r);for(const t of o){if(e.has(t)){s=!0;break}e.add(t)}}s||(this._addBufferData(i,t),n.push(t))}await (0,promiseUtils/* all */.$6)(n.map((s=>{const a=e.key.id===s.message.tileKey,o=a?t.remove:[],n=a&&t.end;return this._updateTileMesh(i,e,s,o,n,t.clear,r.signal)})))}catch(m){this._handleError(e,m,r)}}async _updateTileMesh(e,t,s,r,a,o,n){const d=e,f=s.message.tileKey,h=!!this._schema.mesh.sortKey;f!==t.key.id&&(a=!1);const u=(0,maybe/* andThen */.Po)(s,(e=>e.message)),m=(0,maybe/* andThen */.Po)(s,(e=>e.transferList))||[],p={type:d,addOrUpdate:u,remove:r,clear:!1,end:a,sort:h},g={transferList:(0,maybe/* unwrap */.Wg)(m)||[],signal:n};return (0,promiseUtils/* throwIfAborted */.k_)(g),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:f,data:p},g)}async _processFeatures(e,t,s,r){if((0,maybe/* isNone */.Wi)(t)||!t.hasFeatures)return null;const i={transform:e.transform,hasZ:!1,hasM:!1},o=this._factory,n={viewingMode:"",scale:e.scale},l=await this._matchers.feature,d=await this._matchers.aggregate;(0,promiseUtils/* throwIfAborted */.k_)(r);const f=this._getLabelInfos(e,t);return await o.analyze(t.getCursor(),this._resourceManagerProxy,l,d,i,n),(0,promiseUtils/* throwIfAborted */.k_)(r),this._writeFeatureSet(e,t,i,f,o,s)}_writeFeatureSet(e,t,s,r,i,a){const n=t.getSize(),l=new MeshData/* MeshData */._(e.key.id,{features:n,records:n,metrics:0},this._schema.mesh.matcher.stride,a,!0),c={viewingMode:"",scale:e.scale},d=t.getCursor();for(;d.next();)try{const t=d.getDisplayId(),a=(0,maybe/* isSome */.pC)(r)?r.get(t):null;i.writeCursor(l,d,s,c,e.level,a)}catch(h){}const f=e.tileInfoView.tileInfo.isWrappable;return l.serialize(f)}_handleError(e,t,s){if(!(0,promiseUtils/* isAbortError */.D_)(t)){const r={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if((0,maybe/* isNone */.Wi)(t))return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let r=!1;for(const i in t.classes){const a=t.classes[i].filter((t=>M(t,e.scale)));r=r||!!a.length,s.classes[i]=a}return r?s:null}const s=t.classes.filter((t=>M(t,e.scale)));return s.length?{type:"simple",classes:s}:null}_getLabels(e,t){if("subtype"===t.type){var s;const r=this.service.subtypeField,i=(0,maybe/* unwrapOrThrow */.s3)(r,"Expected to find subtype Field"),a=e.readAttribute(i);return null==a?[]:null!=(s=t.classes[a])?s:[]}return t.classes}_getLabelInfos(e,s){const r=this._getLabelingSchemaForScale(e);if((0,maybe/* isNone */.Wi)(r))return null;const i=new Map,o=s.getCursor();for(;o.next();){const e=o.getDisplayId(),s=[],a=(0,DisplayId/* isAggregateId */.nE)(e),n=a&&1!==o.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(o,r);for(const r of l){if(r.target!==n)continue;const i=o.getStorage(),l=a&&"feature"===n?i.getComputedStringAtIndex(o.readAttribute("referenceId"),r.fieldIndex):i.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const c=(0,BidiText/* bidiText */.E)(l.toString()),d=c[0],f=c[1];this._store.getMosaicItem(r.symbol,(0,textUtils/* codepoints */._)(d)).then((e=>{s[r.index]={glyphs:e.glyphMosaicItems,rtl:f,index:r.index}}))}i.set(e,s)}return i}};x=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],x);const T=x;


/***/ })

};
;
//# sourceMappingURL=6290.render-page.js.map