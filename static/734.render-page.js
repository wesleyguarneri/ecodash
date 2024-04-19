"use strict";
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 15642:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports c, s */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,n){const r=e.typedBuffer,o=e.typedBufferStride,c=t.typedBuffer,d=t.typedBufferStride,f=n?n.count:t.count;let s=(n&&n.dstIndex?n.dstIndex:0)*o,u=(n&&n.srcIndex?n.srcIndex:0)*d;for(let p=0;p<f;++p)r[s]=c[u],s+=o,u+=d}function t(e,t){const n=e.count;t||(t=new e.TypedArrayConstructor(n));for(let r=0;r<n;r++)t[r]=e.get(r);return t}const n=Object.freeze({__proto__:null,copy:e,makeDense:t});


/***/ }),

/***/ 385:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ d),
/* harmony export */   "n": () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports c, v */
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90331);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f(e,t,n){const f=e.typedBuffer,r=e.typedBufferStride,d=t.typedBuffer,o=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*r,s=(n&&n.srcIndex?n.srcIndex:0)*o;for(let c=0;c<u;++c)f[l]=d[s],f[l+1]=d[s+1],l+=r,s+=o}function r(r,d,o){const u=r.typedBuffer,l=r.typedBufferStride,s=d.typedBuffer,c=d.typedBufferStride,p=o?o.count:d.count;let y=(o&&o.dstIndex?o.dstIndex:0)*l,i=(o&&o.srcIndex?o.srcIndex:0)*c;if((0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__/* .isInteger */ .U)(d.elementType)){const e=(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__/* .maximumValue */ .Op)(d.elementType);if((0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__/* .isSigned */ .B3)(d.elementType))for(let t=0;t<p;++t)u[y]=Math.max(s[i]/e,-1),u[y+1]=Math.max(s[i+1]/e,-1),y+=l,i+=c;else for(let t=0;t<p;++t)u[y]=s[i]/e,u[y+1]=s[i+1]/e,y+=l,i+=c}else f(r,d,o);return r}function d(e,t,n,f){var r,d;const o=e.typedBuffer,u=e.typedBufferStride,l=null!=(r=null==f?void 0:f.count)?r:e.count;let s=(null!=(d=null==f?void 0:f.dstIndex)?d:0)*u;for(let c=0;c<l;++c)o[s]=t,o[s+1]=n,s+=u}const o=Object.freeze({__proto__:null,copy:f,normalizeIntegerBuffer:r,fill:d});


/***/ }),

/***/ 56999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ o),
/* harmony export */   "s": () => (/* binding */ f),
/* harmony export */   "t": () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports b, v */
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45150);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,r,f){if(t.count!==r.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .logger.error */ .k.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],m=f[9],B=f[10],h=f[11],l=f[12],S=f[13],b=f[14],v=f[15],M=t.typedBuffer,_=t.typedBufferStride,g=r.typedBuffer,j=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*_,r=e*j,f=g[r],o=g[r+1],x=g[r+2],z=g[r+3];M[t]=n*f+c*o+y*x+l*z,M[t+1]=u*f+i*o+m*x+S*z,M[t+2]=d*f+a*o+B*x+b*z,M[t+3]=s*f+p*o+h*x+v*z}}function r(t,r,f){if(t.count!==r.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .logger.error */ .k.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],m=t.typedBuffer,B=t.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*B,r=e*l,f=h[r],o=h[r+1],S=h[r+2],b=h[r+3];m[t]=n*f+s*o+a*S,m[t+1]=u*f+c*o+p*S,m[t+2]=d*f+i*o+y*S,m[t+3]=b}}function f(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=r*u[t],o[e+1]=r*u[t+1],o[e+2]=r*u[t+2],o[e+3]=r*u[t+3]}}function o(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=u[t]>>r,o[e+1]=u[t+1]>>r,o[e+2]=u[t+2]>>r,o[e+3]=u[t+3]>>r}}const n=Object.freeze({__proto__:null,transformMat4:t,transformMat3:r,scale:f,shiftRight:o});


/***/ }),

/***/ 32101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ e),
/* harmony export */   "f": () => (/* binding */ t)
/* harmony export */ });
/* unused harmony export v */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,n){const d=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*f,c=(n&&n.srcIndex?n.srcIndex:0)*r;for(let s=0;s<u;++s)d[l]=o[c],d[l+1]=o[c+1],d[l+2]=o[c+2],d[l+3]=o[c+3],l+=f,c+=r}function t(e,t,n,d,f,o){var r,u;const l=e.typedBuffer,c=e.typedBufferStride,s=null!=(r=null==o?void 0:o.count)?r:e.count;let p=(null!=(u=null==o?void 0:o.dstIndex)?u:0)*c;for(let i=0;i<s;++i)l[p]=t,l[p+1]=n,l[p+2]=d,l[p+3]=f,p+=c}const n=Object.freeze({__proto__:null,copy:e,fill:t});


/***/ }),

/***/ 1983:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ u),
/* harmony export */   "c": () => (/* binding */ n),
/* harmony export */   "f": () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports O, U, Z, b, d, e, g, h, i, j, k, o, u, v, z */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(t){const r=n(),e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function c(){return r(0,1,0,0)}function i(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const _=a(),l=o(),N=s(),U=c(),I=i(),O=f(),T=Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,fromArray:e,createView:u,zeros:a,ones:o,unitX:s,unitY:c,unitZ:i,unitW:f,ZEROS:_,ONES:l,UNIT_X:N,UNIT_Y:U,UNIT_Z:I,UNIT_W:O});


/***/ }),

/***/ 19480:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66581);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow()}get(){return 0===this._itemsPtr&&(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */ .Y)((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this.allocator())}}const i=1024;


/***/ }),

/***/ 90331:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n1": () => (/* binding */ e),
/* harmony export */   "U": () => (/* binding */ c),
/* harmony export */   "B3": () => (/* binding */ r),
/* harmony export */   "Op": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39994);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function r(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function c(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function u(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}


/***/ }),

/***/ 79:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gS": () => (/* binding */ r)
});

// UNUSED EXPORTS: mat3, mat4, scalar, vec2, vec3, vec4

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/buffer/types.js
var types = __webpack_require__(90331);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/chunks/mat32.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*f,u=(r&&r.srcIndex?r.srcIndex:0)*o;for(let p=0;p<c;++p){for(let e=0;e<9;++e)d[s+e]=n[u+e];s+=f,u+=o}}const t=Object.freeze({__proto__:null,copy:e});

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/chunks/mat42.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function mat42_e(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*f,u=(r&&r.srcIndex?r.srcIndex:0)*o;for(let p=0;p<c;++p){for(let e=0;e<16;++e)d[s+e]=n[u+e];s+=f,u+=o}}const mat42_t=Object.freeze({__proto__:null,copy:mat42_e});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/scalar.js
var scalar = __webpack_require__(15642);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec22.js
var vec22 = __webpack_require__(385);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec33.js
var vec33 = __webpack_require__(14789);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec43.js
var vec43 = __webpack_require__(32101);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/buffer/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(s,r){return new s(new ArrayBuffer(r*s.ElementCount*(0,types/* elementTypeSize */.n1)(s.ElementType)))}


/***/ }),

/***/ 68817:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MP": () => (/* binding */ f),
  "WM": () => (/* binding */ c)
});

// UNUSED EXPORTS: sm3d, sq4d, sv2d, sv4d

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/nextTick.js
var nextTick = __webpack_require__(66581);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(34344);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(39100);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(61044);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec2f64.js
var vec2f64 = __webpack_require__(69666);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(8909);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(1983);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/VectorStack.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize)}get(){0===this._itemsPtr&&(0,nextTick/* nextTick */.Y)((()=>this.reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=a){return new m(16,vec2f64.c,t)}static createVec3f64(t=a){return new m(24,vec3f64.b,t)}static createVec4f64(t=a){return new m(32,vec4f64.a,t)}static createMat3f64(t=a){return new m(72,mat3f64.a,t)}static createMat4f64(t=a){return new m(128,mat4f64.a,t)}static createQuatf64(t=a){return new m(32,quatf64.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const a=4096;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/vectorStacks.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=m.createVec2f64(),c=m.createVec3f64(),r=m.createVec4f64(),vectorStacks_a=m.createMat3f64(),f=m.createMat4f64(),o=m.createQuatf64();


/***/ }),

/***/ 91420:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67979);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70375);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61681);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78668);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3466);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n{constructor(r){this.streamDataRequester=r}async loadJSON(r,e){return this.load("json",r,e)}async loadBinary(r,e){return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isDataProtocol */ .HK)(r)?((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .k_)(e),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .dataToArrayBuffer */ .AH)(r)):this.load("binary",r,e)}async loadImage(r,e){return this.load("image",r,e)}async load(t,i,m){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__/* .isNone */ .Wi)(this.streamDataRequester))return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i,{responseType:c[t]})).data;const n=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .result */ .q6)(this.streamDataRequester.request(i,t,m));if(!0===n.ok)return n.value;throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAbortError */ .r9)(n.error),new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("",`Request for resource failed: ${n.error}`)}}const c={image:"image",binary:"array-buffer",json:"json"};


/***/ }),

/***/ 1731:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jX": () => (/* binding */ i),
/* harmony export */   "DA": () => (/* binding */ o),
/* harmony export */   "nh": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86098);
/* harmony import */ var _webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,o=_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .generateDefaultIndexArray */ .p){return"number"==typeof n?o(n):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .isUint16Array */ .Uc)(n)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .isUint8Array */ .lq)(n)?new Uint32Array(n):n}function o(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;e+=1)e%2==0?(n[t++]=e,n[t++]=e+1,n[t++]=e+2):(n[t++]=e+1,n[t++]=e,n[t++]=e+2)}else{let e=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=t[o],i=t[o+1],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f}else{const r=t[o+1],i=t[o],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f}}return n}function i(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;++e)n[t++]=0,n[t++]=e+1,n[t++]=e+2;return n}{const e=t[0];let o=t[1],i=0;for(let f=0;f<r;++f){const r=t[f+2];n[i++]=e,n[i++]=o,n[i++]=r,o=r}return n}}


/***/ }),

/***/ 20016:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ loader_l)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(39100);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/glTF/DefaultErrorContext.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=Logger/* default.getLogger */.Z.getLogger("esri.views.3d.glTF");class t{error(e){throw new Error/* default */.Z("gltf-loader-error",e)}errorUnsupported(e){throw new Error/* default */.Z("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(r,e){r&&this.errorUnsupported(e)}assert(r,e){r||this.error(e)}warn(r){o.warn(r)}warnUnsupported(r){this.warn("[Unsupported Feature] "+r)}warnUnsupportedIf(r,e){r&&this.warnUnsupported(e)}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function LoaderResult_e(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function LoaderResult_t(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(27755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(86114);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Version.js
var Version = __webpack_require__(26139);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(24455);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(10663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(61044);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js + 6 modules
var BufferView = __webpack_require__(81936);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/scalar.js
var scalar = __webpack_require__(15642);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class BinaryStreamReader_t{constructor(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]}readUint8Array(t){const s=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,s,t)}remainingBytes(){return this.data.byteLength-4*this.offset4}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const fillDefaults_o={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},r={pbrMetallicRoughness:fillDefaults_o,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},fillDefaults_t={ESRI_externalColorMixMode:"tint"},fillDefaults_a=(e={})=>{const a={...fillDefaults_o,...e.pbrMetallicRoughness},i=l({...fillDefaults_t,...e.extras});return{...r,...e,pbrMetallicRoughness:a,extras:i}};function l(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,compilerUtils/* neverReached */.Bg)(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint"}return o}const i={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},fillDefaults_s=e=>({...i,...e});

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function pathUtils_r(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const D={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class G{constructor(e,t,r,n,s){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=s,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=pathUtils_r(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,o,a){if((0,urlUtils/* isDataProtocol */.HK)(o)){const r=(0,urlUtils/* dataComponents */.sJ)(o);if("model/gltf-binary"!==r.mediaType)try{const n=JSON.parse(r.isBase64?atob(r.data):r.data);return new G(e,t,o,n)}catch{}const a=(0,urlUtils/* dataToArrayBuffer */.AH)(o);if(G.isGLBData(a))return this.fromGLBData(e,t,o,a)}if(o.endsWith(".gltf")){const r=await e.loadJSON(o,a);return new G(e,t,o,r)}const i=await e.loadBinary(o,a);if(G.isGLBData(i))return this.fromGLBData(e,t,o,i);const u=await e.loadJSON(o,a);return new G(e,t,o,u)}static isGLBData(e){const t=new BinaryStreamReader_t(e);return t.remainingBytes()>=4&&t.readUint32()===D.MAGIC}static async fromGLBData(e,t,r,n){const s=await G.parseGLBData(t,n);return new G(e,t,r,s.json,s.binaryData)}static async parseGLBData(e,t){const r=new BinaryStreamReader_t(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),s=r.readUint32(),o=r.readUint32();e.assert(n===D.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==s,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,i,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===D.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await q(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==D.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),i=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;const s=await this.getBufferLoader(e,t);return n.assert(s.byteLength===r.byteLength,"Buffer byte lengths should match."),s}async getBufferLoader(e,t){const r=this.bufferLoaders.get(e);if(r)return r;const n=this.json.buffers[e],s=this.context.loadBinary(this.resolveUri(n.uri),t).then((e=>new Uint8Array(e)));return this.bufferLoaders.set(e,s),s}async getAccessor(e,t){const r=this.errorContext;r.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const n=this.json.accessors[e];r.errorUnsupportedIf(null==(null==n?void 0:n.bufferView),"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(n.type in["MAT2","MAT3","MAT4"],`AttributeType ${n.type} is not supported`);const s=this.json.bufferViews[n.bufferView],o=await this.getBuffer(s.buffer,t),a=k[n.type],i=V[n.componentType],u=a*i,c=s.byteStride||u;return{raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(s.byteOffset||0)+(n.byteOffset||0),entryCount:n.count,isDenselyPacked:c===u,componentCount:a,componentByteSize:i,componentType:n.componentType,min:n.min,max:n.max,normalized:!!n.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return (0,scalar.m)(this.wrapAccessor(BufferView/* BufferViewUint8 */.D_,r));case 5123:return (0,scalar.m)(this.wrapAccessor(BufferView/* BufferViewUint16 */.av,r));case 5125:return (0,scalar.m)(this.wrapAccessor(BufferView/* BufferViewUint32 */.Nu,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+X[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(BufferView/* BufferViewVec3f */.ct,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+X[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(BufferView/* BufferViewVec3f */.ct,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+X[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new BufferView/* BufferViewVec4f */.ek(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(BufferView/* BufferViewVec2f */.Eu,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),J(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(BufferView/* BufferViewVec4f */.ek,n);if(5121===n.componentType)return this.wrapAccessor(BufferView/* BufferViewVec4u8 */.mc,n);if(5123===n.componentType)return this.wrapAccessor(BufferView/* BufferViewVec4u16 */.v6,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(BufferView/* BufferViewVec3f */.ct,n);if(5121===n.componentType)return this.wrapAccessor(BufferView/* BufferViewVec3u8 */.ne,n);if(5123===n.componentType)return this.wrapAccessor(BufferView/* BufferViewVec3u16 */.mw,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+X[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=this.materialCache.get(e.material);if(!n){const s=null!=e.material?fillDefaults_a(this.json.materials[e.material]):fillDefaults_a(),o=s.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(o.baseColorTexture,t),u=this.getTexture(s.normalTexture,t),c=r?this.getTexture(s.occlusionTexture,t):null,p=r?this.getTexture(s.emissiveTexture,t):null,f=r?this.getTexture(o.metallicRoughnessTexture,t):null,d=null!=e.material?e.material:-1;n={alphaMode:s.alphaMode,alphaCutoff:s.alphaCutoff,color:o.baseColorFactor,doubleSided:!!s.doubleSided,colorTexture:await i,normalTexture:await u,name:s.name,id:d,occlusionTexture:await c,emissiveTexture:await p,emissiveFactor:s.emissiveFactor,metallicFactor:o.metallicFactor,roughnessFactor:o.roughnessFactor,metallicRoughnessTexture:await f,vertexColors:a,ESRI_externalColorMixMode:s.extras.ESRI_externalColorMixMode}}return n}async getTexture(e,r){if(!e)return null;this.errorContext.errorUnsupportedIf(0!==(e.texCoord||0),"Only TEXCOORD with index 0 is supported.");const n=e.index,s=this.errorContext,o=this.json.textures[n],a=fillDefaults_s(null!=o.sampler?this.json.samplers[o.sampler]:{});s.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const i=this.json.images[o.source],u=await this.loadTextureImageData(n,o,r);return (0,MapUtils/* getOrCreateMapValue */.s1)(this.textureCache,n,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>(s.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);return{data:u,wrapS:e(a.wrapS)?a.wrapS:t(a.wrapS),wrapT:e(a.wrapT)?a.wrapT:t(a.wrapT),minFilter:a.minFilter,name:i.name,id:n}}))}getNodeTransform(e){if(void 0===e)return P;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,mat4.m)((0,mat4f64.c)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,mat4f64.b)(r),n.translation&&(0,mat4.a)(t,t,n.translation),n.rotation&&(F[3]=(0,quat.g)(F,n.rotation),(0,mat4.e)(t,t,F[3],F)),n.scale&&(0,mat4.f)(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return (0,urlUtils/* makeAbsolute */.hF)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=Version/* Version.parse */.G.parse(this.json.asset.version,"glTF");_.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}async loadTextureImageData(e,t,r){const n=this.textureLoaders.get(e);if(n)return n;const s=this.createTextureLoader(t,r);return this.textureLoaders.set(e,s),s}async createTextureLoader(e,t){const r=this.json.images[e.source];if(r.uri)return this.context.loadImage(this.resolveUri(r.uri),t);const n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Image bufferView must be defined."),n.errorUnsupportedIf(null==r.mimeType,"Image mimeType must be defined.");const s=this.json.bufferViews[r.bufferView],o=await this.getBuffer(s.buffer,t);return n.errorUnsupportedIf(null!=s.byteStride,"byteStride not supported for image buffer"),H(new Uint8Array(o.buffer,o.byteOffset+(s.byteOffset||0),s.byteLength),r.mimeType)}}const _=new Version/* Version */.G(2,0,"glTF"),P=(0,mat4.u)((0,mat4f64.c)(),Math.PI/2),F=(0,quatf64.a)(),k={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},V={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};function J(t){switch(t.componentType){case 5120:return new BufferView/* BufferViewVec2i8 */.Vs(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5121:return new BufferView/* BufferViewVec2u8 */.xA(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5122:return new BufferView/* BufferViewVec2i16 */.or(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5123:return new BufferView/* BufferViewVec2u16 */.TS(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5125:return new BufferView/* BufferViewVec2u32 */.qt(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5126:return new BufferView/* BufferViewVec2f */.Eu(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);default:return void (0,compilerUtils/* neverReached */.Bg)(t.componentType)}}async function q(e){return new Promise(((t,r)=>{const n=new Blob([e]),s=new FileReader;s.onload=()=>{const e=s.result;t(JSON.parse(e))},s.onerror=e=>{r(e)},s.readAsText(n)}))}async function H(e,t){return new Promise(((r,n)=>{const s=new Blob([e],{type:t}),o=URL.createObjectURL(s),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a)})),a.addEventListener("error",(e=>{URL.revokeObjectURL(o),n(e)})),a.src=o}))}const X={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/glTF/loader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let loader_i=0;async function loader_l(s,r,a={},l=!0){const m=await G.load(s,p,r,a),x="gltf_"+loader_i++,h={lods:[],materials:new Map,textures:new Map,meta:u(m)},T=!(!m.json.asset.extras||"symbolResource"!==m.json.asset.extras.ESRI_type),g=new Map;await c(m,(async(s,r,n,i)=>{var u;const c=null!=(u=g.get(n))?u:0;g.set(n,c+1);const T=void 0!==s.mode?s.mode:4,S=4===T||5===T||6===T?T:null;if((0,maybe/* isNone */.Wi)(S))return void p.warnUnsupported("Unsupported primitive mode ("+f[T]+"). Skipping primitive.");if(!m.hasPositions(s))return void p.warn("Skipping primitive without POSITION vertex attribute.");const v=m.getPositionData(s,a),w=m.getMaterial(s,a,l),_=m.hasNormals(s)?m.getNormalData(s,a):null,I=m.hasTangents(s)?m.getTangentData(s,a):null,R=m.hasTextureCoordinates(s)?m.getTextureCoordinates(s,a):null,E=m.hasVertexColors(s)?m.getVertexColors(s,a):null,M=m.getIndexData(s,a),F={transform:(0,mat4f64.b)(r),attributes:{position:await v,normal:_?await _:null,texCoord0:R?await R:null,color:E?await E:null,tangent:I?await I:null},indices:await M,primitiveType:S,material:d(h,await w,x)};let y=null;(0,maybe/* isSome */.pC)(h.meta)&&(0,maybe/* isSome */.pC)(h.meta.ESRI_lod)&&"screenSpaceRadius"===h.meta.ESRI_lod.metric&&(y=h.meta.ESRI_lod.thresholds[n]),h.lods[n]=h.lods[n]||{parts:[],name:i,lodThreshold:y},h.lods[n].parts[c]=F}));for(const e of h.lods)e.parts=e.parts.filter((e=>!!e));return{model:h,meta:{isEsriSymbolResource:T,uri:m.uri},customMeta:{}}}function u(t){const o=t.json;let s=null;return o.nodes.forEach((t=>{const o=t.extras;(0,maybe/* isSome */.pC)(o)&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(s=o)})),s}async function c(e,t){const o=e.json,s=o.scenes[o.scene||0].nodes,r=s.length>1,a=[];for(const i of s){const e=o.nodes[i];if(a.push(n(i,0)),m(e)&&!r){e.extensions.MSFT_lod.ids.forEach(((e,t)=>n(e,t+1)))}}async function n(s,r){const i=o.nodes[s],l=e.getNodeTransform(s);if(p.warnUnsupportedIf(null!=i.weights,"Morph targets are not supported."),null!=i.mesh){const e=o.meshes[i.mesh];for(const o of e.primitives)a.push(t(o,l,r,e.name))}for(const e of i.children||[])a.push(n(e,r))}await Promise.all(a)}function m(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function d(e,t,o){const s=t=>{const s=`${o}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(s)){const o=LoaderResult_t(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:x.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(s,o)}return s},n=`${o}_mat_${t.id}_${t.name}`;if(!e.materials.has(n)){const o=LoaderResult_e({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?s(t.colorTexture):void 0,textureNormal:t.normalTexture?s(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?s(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?s(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?s(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(n,o)}return n}const p=new t,x=[9987,9985],f=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];


/***/ }),

/***/ 58196:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NO": () => (/* binding */ geometryDataUtils_h),
  "cM": () => (/* binding */ geometryDataUtils_u),
  "p": () => (/* binding */ geometryDataUtils_l),
  "DX": () => (/* binding */ a)
});

// UNUSED EXPORTS: computeAttachmentOriginLines

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(6766);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(8909);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/ObjectStack.js
var ObjectStack = __webpack_require__(19480);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec2.js
var vec2 = __webpack_require__(55709);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(19431);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(68817);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/lineSegment.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function v(t){return t?{origin:(0,vec3f64.a)(t.origin),vector:(0,vec3f64.a)(t.vector)}:{origin:(0,vec3f64.c)(),vector:(0,vec3f64.c)()}}function lineSegment_p(t,r){const n=x.get();return n.origin=t,n.vector=r,n}function h(t,r=v()){return lineSegment_m(t.origin,t.vector,r)}function lineSegment_m(t,r,o=v()){return n(o.origin,t),n(o.vector,r),o}function lineSegment_l(t,r,i=v()){return n(i.origin,t),o(i.vector,r,t),i}function b(r,n){const c=o(f.get(),n,r.origin),u=i(r.vector,c),s=i(r.vector,r.vector),a=t(u/s,0,1),g=o(f.get(),e(f.get(),r.vector,a),c);return i(g,g)}function M(t,r){return Math.sqrt(b(t,r))}function d(t,r,n){return A(t,r,0,1,n)}function j(t,r,n){return c(n,t.origin,e(n,t.vector,r))}function A(r,n,s,a,g){const{vector:v,origin:p}=r,h=o(f.get(),n,p),m=i(v,h)/u(v);return e(g,v,t(m,s,a)),c(g,g,r.origin)}function B(t,r){if(q(t,lineSegment_p(r.origin,r.direction),!1,w)){const{tA:r,pB:n,distance2:o}=w;if(r>=0&&r<=1)return o;if(r<0)return s(t.origin,n);if(r>1)return s(c(f.get(),t.origin,t.vector),n)}return null}function k(t,r,o){return!!q(t,r,!0,w)&&(n(o,w.pA),!0)}function S(t,r){return q(t,r,!0,w)?w.distance2:null}function q(r,n,o,i){const e=1e-6,u=r.origin,a=c(f.get(),u,r.vector),g=n.origin,v=c(f.get(),g,n.vector),p=f.get(),h=f.get();if(p[0]=u[0]-g[0],p[1]=u[1]-g[1],p[2]=u[2]-g[2],h[0]=v[0]-g[0],h[1]=v[1]-g[1],h[2]=v[2]-g[2],Math.abs(h[0])<e&&Math.abs(h[1])<e&&Math.abs(h[2])<e)return!1;const m=f.get();if(m[0]=a[0]-u[0],m[1]=a[1]-u[1],m[2]=a[2]-u[2],Math.abs(m[0])<e&&Math.abs(m[1])<e&&Math.abs(m[2])<e)return!1;const l=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],b=h[0]*m[0]+h[1]*m[1]+h[2]*m[2],M=p[0]*m[0]+p[1]*m[1]+p[2]*m[2],d=h[0]*h[0]+h[1]*h[1]+h[2]*h[2],j=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*d-b*b;if(Math.abs(j)<e)return!1;let A=(l*b-M*d)/j,B=(l+b*A)/d;o&&(A=t(A,0,1),B=t(B,0,1));const k=f.get(),S=f.get();return k[0]=u[0]+A*m[0],k[1]=u[1]+A*m[1],k[2]=u[2]+A*m[2],S[0]=g[0]+B*h[0],S[1]=g[1]+B*h[1],S[2]=g[2]+B*h[2],i.tA=A,i.tB=B,i.pA=k,i.pB=S,i.distance2=s(k,S),!0}const w={tA:0,tB:0,pA:(0,vec3f64.c)(),pB:(0,vec3f64.c)(),distance2:0},x=new ObjectStack/* ObjectStack */.x((()=>({origin:null,vector:null})));

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/triangle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function triangle_j(t){return t?{p0:i(t.p0),p1:i(t.p1),p2:i(t.p2)}:{p0:f(),p1:f(),p2:f()}}function triangle_h(t,n,r){const e=triangle_x.get();return e.p0=t,e.p1=n,e.p2=r,e}function triangle_k(t,n=triangle_j()){return triangle_v(t.p0,t.p1,t.p2,n)}function triangle_v(t,n,e,p=triangle_j()){return r(p.p0,t),r(p.p1,n),r(p.p2,e),p}function triangle_b(t,n){const r=t.p0,s=t.p1,c=t.p2,u=e(l.get(),s,r),i=e(l.get(),c,s),f=e(l.get(),r,c),a=e(l.get(),n,r),j=e(l.get(),n,s),h=e(l.get(),n,c),k=p(u,u,f),v=o(p(l.get(),u,k),a),b=o(p(l.get(),i,k),j),d=o(p(l.get(),f,k),h);if(v>0&&b>0&&d>0){const t=o(k,a);return t*t/o(k,k)}const S=g(m(r,u,triangle_q.get()),n),w=g(m(s,i,triangle_q.get()),n),M=g(m(c,f,triangle_q.get()),n);return Math.min(S,w,M)}function triangle_d(t,n,r){const e=1e-5,{direction:p,origin:o}=n,{p0:u,p1:i,p2:f}=t,a=i[0]-u[0],g=i[1]-u[1],m=i[2]-u[2],l=f[0]-u[0],j=f[1]-u[1],h=f[2]-u[2],k=p[1]*h-j*p[2],v=p[2]*l-h*p[0],b=p[0]*j-l*p[1],d=a*k+g*v+m*b;if(d>-e&&d<e)return!1;const S=1/d,w=o[0]-u[0],M=o[1]-u[1],q=o[2]-u[2],x=S*(w*k+M*v+q*b);if(x<0||x>1)return!1;const O=M*m-g*q,V=q*a-m*w,y=w*g-a*M,z=S*(p[0]*O+p[1]*V+p[2]*y);if(z<0||x+z>1)return!1;if(r){s(r,p,S*(l*O+j*V+h*y)),c(r,o,r)}return!0}function triangle_S(t,r,e){const p=n(t,r),o=n(r,e),s=n(e,t),c=(p+o+s)/2,u=c*(c-p)*(c-o)*(c-s);return u<=0?0:Math.sqrt(u)}function triangle_w(t){return triangle_S(t.p0,t.p1,t.p2)}function triangle_M(t,n,r){return (0,vec3.f)(O,n,t),(0,vec3.f)(V,r,t),(0,vec3.l)((0,vec3.c)(O,O,V))/2}const triangle_q=new ObjectStack/* ObjectStack */.x(v),triangle_x=new ObjectStack/* ObjectStack */.x((()=>({p0:null,p1:null,p2:null}))),O=(0,vec3f64.c)(),V=(0,vec3f64.c)();

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let geometryDataUtils_s=(()=>{const t=new Uint32Array(131072);for(let n=0;n<t.length;++n)t[n]=n;return t})();const geometryDataUtils_f=new Uint16Array([0]),geometryDataUtils_c=(()=>{const t=new Uint16Array(65536);for(let n=0;n<t.length;++n)t[n]=n;return t})();function geometryDataUtils_l(t){if(1===t)return geometryDataUtils_f;if(t<geometryDataUtils_c.length)return new Uint16Array(geometryDataUtils_c.buffer,0,t);if(t>geometryDataUtils_s.length){const n=Math.max(2*geometryDataUtils_s.length,t);geometryDataUtils_s=new Uint32Array(n);for(let t=0;t<geometryDataUtils_s.length;t++)geometryDataUtils_s[t]=t}return new Uint32Array(geometryDataUtils_s.buffer,0,t)}function a(t){if(1===t)return new Uint16Array(geometryDataUtils_f);if(t<geometryDataUtils_c.length)return new Uint16Array(geometryDataUtils_c.slice(0,t));if(t>geometryDataUtils_s.length){const n=new Uint32Array(t);for(let t=0;t<n.length;t++)n[t]=t;return n}return new Uint32Array(geometryDataUtils_s.slice(0,t))}function geometryDataUtils_u(e,o,s){if(!e)return!1;const{size:f,data:c}=e;(0,vec3.s)(s,0,0,0),(0,vec3.s)(U,0,0,0);let l=0,a=0;for(let u=0;u<o.length-2;u+=3){const e=o[u+0]*f,h=o[u+1]*f,g=o[u+2]*f;(0,vec3.s)(y,c[e+0],c[e+1],c[e+2]),(0,vec3.s)(geometryDataUtils_w,c[h+0],c[h+1],c[h+2]),(0,vec3.s)(geometryDataUtils_A,c[g+0],c[g+1],c[g+2]);const m=triangle_M(y,geometryDataUtils_w,geometryDataUtils_A);m?((0,vec3.b)(y,y,geometryDataUtils_w),(0,vec3.b)(y,y,geometryDataUtils_A),(0,vec3.a)(y,y,1/3*m),(0,vec3.b)(s,s,y),l+=m):((0,vec3.b)(U,U,y),(0,vec3.b)(U,U,geometryDataUtils_w),(0,vec3.b)(U,U,geometryDataUtils_A),a+=3)}return(0!==a||0!==l)&&(0!==l?((0,vec3.a)(s,s,1/l),!0):0!==a&&((0,vec3.a)(s,U,1/a),!0))}function geometryDataUtils_h(n,e,o){if(!n||!e)return!1;const{size:i,data:s}=n;(0,vec3.s)(o,0,0,0);let f=-1,c=0;for(let t=0;t<e.length;t++){const n=e[t]*i;f!==n&&(o[0]+=s[n+0],o[1]+=s[n+1],o[2]+=s[n+2],c++),f=n}return c>1&&(0,vec3.a)(o,o,1/c),c>0}function geometryDataUtils_g(o,i,s,f){if(!o)return!1;const{size:c,data:l}=o;t(f,0,0,0),t(U,0,0,0);let a=0,u=0;const h=i?i.length-1:l.length/c-1,g=h+(s?2:0);for(let t=0;t<g;t+=2){const o=t<h?t:h,s=t<h?t+1:0,g=(i?i[o]:o)*c,A=(i?i[s]:s)*c;y[0]=l[g+0],y[1]=l[g+1],y[2]=l[g+2],geometryDataUtils_w[0]=l[A+0],geometryDataUtils_w[1]=l[A+1],geometryDataUtils_w[2]=l[A+2],r(y,n(y,y,geometryDataUtils_w),.5);const m=e(y,geometryDataUtils_w);m>0?(n(f,f,r(y,y,m)),a+=m):(n(U,U,y),u++)}return 0!==a?(r(f,f,1/a),!0):0!==u&&(r(f,U,1/u),!0)}const y=(0,vec3f64.c)(),geometryDataUtils_w=(0,vec3f64.c)(),geometryDataUtils_A=(0,vec3f64.c)(),U=(0,vec3f64.c)();


/***/ }),

/***/ 14634:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=2.1;


/***/ })

};
;
//# sourceMappingURL=734.render-page.js.map