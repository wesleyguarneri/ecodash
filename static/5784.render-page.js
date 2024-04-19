"use strict";
exports.id = 5784;
exports.ids = [5784];
exports.modules = {

/***/ 15875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mR": () => (/* binding */ Z),
  "C$": () => (/* binding */ R),
  "e2": () => (/* binding */ $),
  "Jq": () => (/* binding */ ye),
  "wO": () => (/* binding */ X),
  "Mk": () => (/* binding */ _),
  "cM": () => (/* binding */ ne),
  "Z_": () => (/* binding */ ie),
  "ws": () => (/* binding */ k),
  "xV": () => (/* binding */ V),
  "Ub": () => (/* binding */ pe),
  "UK": () => (/* binding */ Q),
  "Yw": () => (/* binding */ H),
  "$_": () => (/* binding */ z),
  "Gr": () => (/* binding */ ae),
  "nU": () => (/* binding */ q),
  "Ll": () => (/* binding */ le),
  "$K": () => (/* binding */ O),
  "DQ": () => (/* binding */ ce),
  "HX": () => (/* binding */ se),
  "hj": () => (/* binding */ P),
  "iw": () => (/* binding */ ue),
  "TB": () => (/* binding */ de),
  "sG": () => (/* binding */ oe),
  "Gg": () => (/* binding */ fe),
  "js": () => (/* binding */ me),
  "Y8": () => (/* binding */ j)
});

// UNUSED EXPORTS: C_FILL_STRIDE_SPEC, C_FILL_STRIDE_SPEC_DD, C_FILL_STRIDE_SPEC_SIMPLE, C_FILL_VERTEX_DEF, C_FILL_VERTEX_DEF_DD, C_FILL_VERTEX_DEF_SIMPLE, C_ICON_STRIDE_SPEC, C_ICON_VERTEX_DEF, C_LABEL_STRIDE_SPEC, C_LABEL_VERTEX_DEF, C_LINE_STRIDE_SPEC, C_LINE_VERTEX_DEF, C_TEXT_STRIDE_SPEC, C_TEXT_VERTEX_DEF, C_VBO_GEOMETRY, C_VBO_PERINSTANCE, C_VBO_PERINSTANCE_VV, createTextureFromTexelData, geometryToMappedGeometry, getBytes, getNamedBuffers, getTextProperties, getTransformParams, isValidSVG

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(19431);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/color.js
var color = __webpack_require__(62173);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js
var enums = __webpack_require__(38716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/ObjectPool.js
var ObjectPool = __webpack_require__(34596);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/SymbolProperties.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(o,h,s,t,i,l,r,e,c){this.color=o,this.haloColor=h,this.haloSize=s,this.size=t,this.angle=i,this.offsetX=l,this.offsetY=r,this.hAnchor=e,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}h.pool=new ObjectPool/* default */.Z(h);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/Texture.js
var Texture = __webpack_require__(43487);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.engine.webgl.Utils"),l="geometry",f="per_instance",d="per_instance_vv",m=[{name:l,strideInBytes:36,divisor:0}],p=[{name:l,strideInBytes:32,divisor:0}],y=[{name:l,strideInBytes:20,divisor:0}],g=[{name:l,strideInBytes:12,divisor:0}],Utils_h=[{name:l,strideInBytes:40,divisor:0}],w=[{name:l,strideInBytes:36,divisor:0}],v=[{name:l,strideInBytes:36,divisor:0}];function S(e){const t={};for(const r of e)t[r.name]=r.strideInBytes;return t}const I=S(m),L=S(p),M=S(y),A=S(g),T=S(Utils_h),C=S(w),b=S(v);function z(e,{fill:t}){switch(e){case enums/* WGLGeometryType.MARKER */.LW.MARKER:return I;case enums/* WGLGeometryType.FILL */.LW.FILL:return"dot-density"===t?A:"simple"===t?M:L;case enums/* WGLGeometryType.LINE */.LW.LINE:return T;case enums/* WGLGeometryType.TEXT */.LW.TEXT:return C;case enums/* WGLGeometryType.LABEL */.LW.LABEL:return b}}const x=[l],E=[l],F=[l],B=[l],D=[l];function U(e){switch(e){case enums/* WGLGeometryType.MARKER */.LW.MARKER:return x;case enums/* WGLGeometryType.FILL */.LW.FILL:return E;case enums/* WGLGeometryType.LINE */.LW.LINE:return F;case enums/* WGLGeometryType.TEXT */.LW.TEXT:return B;case enums/* WGLGeometryType.LABEL */.LW.LABEL:return D}}function j(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function R(e,t){switch(t%4){case 0:case 2:return new Uint32Array(Math.floor(e*t/4));case 1:case 3:return new Uint8Array(e*t)}}function $(e,t){switch(t%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function N(e){return a.pool.acquire(e.color?i(e.color):[255,255,255,255],e.haloColor?i(e.haloColor):[255,255,255,255],n(e.haloSize),n(e.font.size),e.angle*Math.PI/180,e.xoffset/e.font.size,e.yoffset/e.font.size,"left"===e.horizontalAlignment?0:"right"===e.horizontalAlignment?1:.5,"top"===e.verticalAlignment?0:"bottom"===e.verticalAlignment?1:.5)}function O(e){return null!=e}function P(e){return"number"==typeof e}function k(t){switch(t){case"butt":return 0;case"round":return 1;case"square":return 2;default:return u.error(new Error/* default */.Z("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),1}}function V(t){switch(t){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return u.error(new Error/* default */.Z("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),1}}function q(e){switch(e){case"opacity":return enums/* VVType.OPACITY */.pc.OPACITY;case"color":return enums/* VVType.COLOR */.pc.COLOR;case"rotation":return enums/* VVType.ROTATION */.pc.ROTATION;case"size":return enums/* VVType.SIZE */.pc.SIZE;default:return u.error(`Cannot interpret unknown vv: ${e}`),null}}function K(e){const{transform:t,hasZ:r,hasM:n}=e;return{transform:t,hasZ:r,hasM:n}}function X(e,t,r,n,i,o,s){for(const c in o){const t=o[c].stride,n=j(t),s=o[c].data,a=r[c].data,u=t*i.vertexCount/n,l=t*e/n,f=t*i.vertexFrom/n;for(let e=0;e<u;++e)a[e+l]=s[e+f]}const a=i.indexCount;for(let c=0;c<a;++c)n[c+t]=s[c+i.indexFrom]-i.vertexFrom+e}const Z={[l]:35044};function _(e,t){const r=[];for(let n=0;n<5;++n){const i=U(n),o={};for(const e of i)o[e]={data:t(n,e)};r.push({data:e(n),buffers:o})}return r}function J(e,t){let n,i;return r(t.width)&&r(t.height)?(n=!0,i=9987):(n=!1,i=9729),new c(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,hasMipmap:n,samplingMode:i,wrapMode:33071,flipped:!0},t)}function Y(e){return{vertexFrom:void 0,vertexTo:void 0,geometry:e}}function G(e){switch(e){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function H(t){switch(t){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void u.error(new Error/* default */.Z("webgl-utils",`Unable to handle type ${t}`))}}function Q(t){switch(t){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void u.error(new Error/* default */.Z("webgl-utils",`Unable to handle type ${t}`))}}function W(e){const t={};for(const r in e){const n=e[r];let i=0;t[r]=n.map((e=>{const t={...e,normalized:e.normalized||!1,divisor:e.divisor||0,offset:i,stride:0};return i+=e.count*G(e.type),t})),t[r].forEach((e=>e.stride=i))}return t}const ee=e=>{const t=new Map;for(const r in e)for(const n of e[r])t.set(n.name,n.location);return t},te=e=>{const t={};for(const r in e){const n=e[r];t[r]=n.length?n[0].stride:0}return t},re=new Map,ne=(e,t)=>{if(!re.has(e)){const r=W(t),n={strides:te(r),bufferLayouts:r,attributes:ee(t)};re.set(e,n)}return re.get(e)};function ie(e){e(enums/* WGLGeometryType.FILL */.LW.FILL),e(enums/* WGLGeometryType.LINE */.LW.LINE),e(enums/* WGLGeometryType.MARKER */.LW.MARKER),e(enums/* WGLGeometryType.TEXT */.LW.TEXT),e(enums/* WGLGeometryType.LABEL */.LW.LABEL)}const oe=e=>"path"in e&&ge(e.path),se=e=>"url"in e&&e.url||"imageData"in e&&e.imageData,ae=e=>"imageData"in e&&e.imageData&&"contentType"in e&&e.contentType?`data:${e.contentType};base64,${e.imageData}`:"url"in e?e.url:null,ce=e=>"url"in e&&e.url&&e.url.includes(".gif")||"contentType"in e&&"image/gif"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/gif"),ue=e=>"url"in e&&e.url&&e.url.includes(".png")||"contentType"in e&&"image/png"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/png"),le=e=>e.type&&-1!==e.type.toLowerCase().indexOf("3d");function fe(e){switch(e.type){case"line":{const t=e;return"CIMSolidStroke"===t.cim.type&&!t.dashTemplate}case"fill":return"CIMSolidFill"===e.cim.type;case"esriSFS":return"esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return"esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return!1}}const de=e=>e.includes("data:image/svg+xml");function me(e){switch("cim"in e?e.cim.type:e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function pe(e){const t="maxVVSize"in e&&e.maxVVSize,r="width"in e&&e.width||"size"in e&&e.size||0;return t||r}function ye(e){const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}const ge=e=>!!e&&(e=e.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4));


/***/ }),

/***/ 62173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pr": () => (/* binding */ o),
/* harmony export */   "t2": () => (/* binding */ i),
/* harmony export */   "aH": () => (/* binding */ f)
/* harmony export */ });
/* unused harmony exports copyAndPremultiply, premultiplyAlphaUint32, white */
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8530);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=(/* unused pure expression or super */ null && ([255,255,255,1])),t=(/* unused pure expression or super */ null && ([0,0,0,0]));function u(r,n){return Array.isArray(n)?(r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3]):(r[0]=n.r,r[1]=n.g,r[2]=n.b,r[3]=n.a),r}function o(r,n=0,t=!1){const u=r[n+3];return r[n+0]*=u,r[n+1]*=u,r[n+2]*=u,t||(r[n+3]*=255),r}function c(r){return o(u([],r))}function e(n){return o(u(t,n)),r(t[0],t[1],t[2],t[3])}function i(n){if(!n)return 0;const{r:t,g:u,b:o,a:c}=n;return (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* .i8888to32 */ .Jz)(t*c,u*c,o*c,255*c)}function f(n){if(!n)return 0;const[t,u,o,c]=n;return (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* .i8888to32 */ .Jz)(t*(c/255),u*(c/255),o*(c/255),c)}


/***/ }),

/***/ 14266:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xl": () => (/* binding */ J),
/* harmony export */   "aK": () => (/* binding */ K),
/* harmony export */   "eF": () => (/* binding */ k),
/* harmony export */   "Uh": () => (/* binding */ ct),
/* harmony export */   "_6": () => (/* binding */ dt),
/* harmony export */   "Tz": () => (/* binding */ it),
/* harmony export */   "CQ": () => (/* binding */ ht),
/* harmony export */   "oK": () => (/* binding */ ot),
/* harmony export */   "e0": () => (/* binding */ at),
/* harmony export */   "SD": () => (/* binding */ nt),
/* harmony export */   "XJ": () => (/* binding */ Z),
/* harmony export */   "$0": () => (/* binding */ r),
/* harmony export */   "iV": () => (/* binding */ Q),
/* harmony export */   "Zd": () => (/* binding */ P),
/* harmony export */   "Ex": () => (/* binding */ b),
/* harmony export */   "uG": () => (/* binding */ O),
/* harmony export */   "Jc": () => (/* binding */ T),
/* harmony export */   "xm": () => (/* binding */ s),
/* harmony export */   "m4": () => (/* binding */ N),
/* harmony export */   "MI": () => (/* binding */ et),
/* harmony export */   "AI": () => (/* binding */ c),
/* harmony export */   "Ip": () => (/* binding */ $),
/* harmony export */   "ru": () => (/* binding */ i),
/* harmony export */   "fL": () => (/* binding */ Y),
/* harmony export */   "iJ": () => (/* binding */ A),
/* harmony export */   "nM": () => (/* binding */ B),
/* harmony export */   "Ij": () => (/* binding */ C),
/* harmony export */   "f2": () => (/* binding */ D),
/* harmony export */   "Ic": () => (/* binding */ z),
/* harmony export */   "Al": () => (/* binding */ y),
/* harmony export */   "QU": () => (/* binding */ E),
/* harmony export */   "Jw": () => (/* binding */ F),
/* harmony export */   "kF": () => (/* binding */ G),
/* harmony export */   "yP": () => (/* binding */ H),
/* harmony export */   "D3": () => (/* binding */ u),
/* harmony export */   "Iw": () => (/* binding */ j),
/* harmony export */   "tQ": () => (/* binding */ S),
/* harmony export */   "I_": () => (/* binding */ o),
/* harmony export */   "a": () => (/* binding */ W),
/* harmony export */   "CU": () => (/* binding */ V),
/* harmony export */   "V4": () => (/* binding */ U)
/* harmony export */ });
/* unused harmony exports ANGLE_FACTOR_256, ATTRIBUTE_DATA_DD0, ATTRIBUTE_DATA_DD1, ATTRIBUTE_DATA_FILTER_FLAGS, ATTRIBUTE_STORE_TEXTURE_SIZE, BUFFER_DATA_MINIMUM_SIZE, BUFFER_DATA_POOL_SIZE, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, ENABLE_EARLY_LABEL_DISCARD, EXTRUDE_SCALE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, MAX_GPU_UPLOADS_PER_FRAME, RASTER_TILE_SIZE, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=8,e=t-2,c=1e-30,h=64,i=4294967295,o=512,a=256,d=(/* unused pure expression or super */ null && (256/360)),n=(/* unused pure expression or super */ null && (!1)),p=128,r=8,s=29,f=1,g=16,l=16,m=o/p,v=8,w=50,x=10,b=24,j=8,k={metrics:{width:15,height:17,left:0,top:-7,advance:14}},q=1024,u=0,y=0,z=0,A=1,B=2,C=3,D=4,E=5,F=6,G=5,H=6,I=0,J=1,K=2,L=3,M=3,N=2,O=1,P=2,Q=4,R=(/* unused pure expression or super */ null && (!1)),S=1.05,T=6,U=5,V=6,W=1.15,X=2,Y=2,Z=8,$=500,_=4,tt=128,et=10,ct=2,ht=0,it=1,ot=4,at=8,dt=4,nt=1;


/***/ }),

/***/ 38716:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Un": () => (/* binding */ O),
/* harmony export */   "pc": () => (/* binding */ L),
/* harmony export */   "jx": () => (/* binding */ I),
/* harmony export */   "LW": () => (/* binding */ E),
/* harmony export */   "X": () => (/* binding */ A),
/* harmony export */   "mf": () => (/* binding */ _)
/* harmony export */ });
/* unused harmony export WGLGeometryTransactionStatus */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var E,T,I,L,A,_,O;!function(E){E[E.FILL=0]="FILL",E[E.LINE=1]="LINE",E[E.MARKER=2]="MARKER",E[E.TEXT=3]="TEXT",E[E.LABEL=4]="LABEL"}(E||(E={})),function(E){E[E.SUCCEEDED=0]="SUCCEEDED",E[E.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(T||(T={})),function(E){E[E.NONE=0]="NONE",E[E.MAP=1]="MAP",E[E.LABEL=2]="LABEL",E[E.LABEL_ALPHA=4]="LABEL_ALPHA",E[E.HITTEST=8]="HITTEST",E[E.HIGHLIGHT=16]="HIGHLIGHT",E[E.CLIP=32]="CLIP",E[E.DEBUG=64]="DEBUG",E[E.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(I||(I={})),function(E){E[E.SIZE=0]="SIZE",E[E.COLOR=1]="COLOR",E[E.OPACITY=2]="OPACITY",E[E.ROTATION=3]="ROTATION"}(L||(L={})),function(E){E[E.NONE=0]="NONE",E[E.OPACITY=1]="OPACITY",E[E.COLOR=2]="COLOR",E[E.ROTATION=4]="ROTATION",E[E.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",E[E.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",E[E.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",E[E.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(A||(A={})),function(E){E[E.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",E[E.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",E[E.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",E[E.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(_||(_={})),function(E){E[E.SPRITE=0]="SPRITE",E[E.GLYPH=1]="GLYPH"}(O||(O={}));


/***/ }),

/***/ 8530:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UJ": () => (/* binding */ w),
/* harmony export */   "Jz": () => (/* binding */ x),
/* harmony export */   "Au": () => (/* binding */ M)
/* harmony export */ });
/* unused harmony exports i16, i32, i8, i8816to32, numTo32, toFloat32, toUint32, u16, u32, u4u4to8, u8 */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=new Float32Array(1),r=new Uint32Array(n.buffer);function t(n,r,t){return Math.round(Math.max(Math.min(n,t),r))}function u(n){return t(n,-128,127)}function e(n){return t(n,-32768,32767)}function o(n){return t(n,-2147483648,2147483647)}function f(n){return t(n,0,255)}function i(n){return t(n,0,65535)}function c(n){return t(n,0,4294967295)}function a(t){return n[0]=t,r[0]}function h(t){return r[0]=t,n[0]}function M(n){return[255&n,(65280&n)>>>8,(16711680&n)>>>16,(4278190080&n)>>>24]}function m(n,r){return 15&n|(15&r)<<4}function w(n,r){return 65535&n|r<<16}function x(n,r,t,u){return 255&n|(255&r)<<8|(255&t)<<16|u<<24}function y(n,r,t){return 255&n|(255&r)<<8|t<<16}function A(n){return 0|n}


/***/ }),

/***/ 43487:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19431);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61681);
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6174);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91907);
/* harmony import */ var _capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79193);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=4;class o{constructor(t,e,i=null){this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ResourceType.Texture */ ._g.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...e},34067===this._descriptor.target?this.setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ResourceType.Texture */ ._g.Texture,this))}release(){this.dispose()}resize(t,e){const i=this._descriptor;i.width===t&&i.height===e||(i.width=t,i.height=e,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(t=null){for(let e=34069;e<=34074;e++)this.setData(t,e)}setData(t,a=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||s,this._descriptor.height=this._descriptor.height||s);const p=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES),h=this._descriptor;o._validateTexture(this._context,h),r.pixelStorei(r.UNPACK_ALIGNMENT,h.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,h.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.preMultiplyAlpha?1:0);const l=h.pixelFormat;let d=h.internalFormat?h.internalFormat:this._deriveInternalFormat(l,h.dataType);if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){let e=t.width,s=t.height;t instanceof HTMLVideoElement&&(e=t.videoWidth,s=t.videoHeight),h.width&&h.height,r.texImage2D(a,0,d,l,h.dataType,t),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__/* .checkWebGLError */ .zu)(r),h.hasMipmap&&this.generateMipmap(),void 0===h.width&&(h.width=e),void 0===h.height&&(h.height=s)}else{null!=h.width&&null!=h.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&d===r.DEPTH_STENCIL&&(d=r.DEPTH24_STENCIL8);let s=h.width,o=h.height;if(n(t)){const e=Math.round(Math.log(Math.max(s,o))/Math.LN2)+1;h.hasMipmap=h.hasMipmap&&e===t.levels.length;for(let i=0;;++i){const e=t.levels[Math.min(i,t.levels.length-1)];if(r.compressedTexImage2D(a,i,d,s,o,0,e),1===s&&1===o||!h.hasMipmap)break;s=Math.max(1,s>>1),o=Math.max(1,o>>1)}}else if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(t))r.texImage2D(a,0,d,s,o,0,l,h.dataType,t),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__/* .checkWebGLError */ .zu)(r),h.hasMipmap&&this.generateMipmap();else for(let t=0;r.texImage2D(a,t,d,s,o,0,l,h.dataType,null),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__/* .checkWebGLError */ .zu)(r),(1!==s||1!==o)&&h.hasMipmap;++t)s=Math.max(1,s>>1),o=Math.max(1,o>>1)}o._applySamplingMode(r,this._descriptor),o._applyWrapMode(r,this._descriptor),o._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__/* .checkWebGLError */ .zu)(r),this._context.bindTexture(p,o.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,e,i,a,r,s,n=3553){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._context.gl,h=this._descriptor,l=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);(e<0||i<0||a>h.width||r>h.height||e+a>h.width||i+r>h.height)&&console.error("An attempt to update out of bounds of the texture!"),p.pixelStorei(p.UNPACK_ALIGNMENT,h.unpackAlignment),p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,h.flipped?1:0),p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.preMultiplyAlpha?1:0),s instanceof ImageData||s instanceof HTMLImageElement||s instanceof HTMLCanvasElement||s instanceof HTMLVideoElement?p.texSubImage2D(n,t,e,i,h.pixelFormat,h.dataType,s):p.texSubImage2D(n,t,e,i,a,r,h.pixelFormat,h.dataType,s),this._context.bindTexture(l,o.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,o._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);const e=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,o.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,o._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(o._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(o._applyWrapMode(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(t,e){if("webgl"===this._context.webglVersion)return t;if(5126===e)switch(t){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return t}static _validateTexture(e,i){(i.width<0||i.height<0)&&console.error("Negative dimension parameters are not allowed!");const a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPowerOfTwo */ .wt)(i.width)&&(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPowerOfTwo */ .wt)(i.height);(0,_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(e.gl)||a||("number"==typeof i.wrapMode?33071!==i.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===i.wrapMode.s&&33071===i.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(t,e){let i=e.samplingMode,a=e.samplingMode;9985===i||9987===i?(i=9729,e.hasMipmap||(a=9729)):9984!==i&&9986!==i||(i=9728,e.hasMipmap||(a=9728)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,a)}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){var i;const a=t.capabilities.textureFilterAnisotropic;if(!a)return;t.gl.texParameterf(e.target,a.TEXTURE_MAX_ANISOTROPY,null!=(i=e.maxAnisotropy)?i:1)}}function n(t){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(t)&&"type"in t&&"compressed"===t.type}o.TEXTURE_UNIT_FOR_UPDATES=0;


/***/ }),

/***/ 79193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return window.WebGL2RenderingContext&&n instanceof window.WebGL2RenderingContext}


/***/ }),

/***/ 6174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zu": () => (/* binding */ s),
/* harmony export */   "hZ": () => (/* binding */ u),
/* harmony export */   "CG": () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export hasFeatureFlagWebGLDebug */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39994);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13802);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getLogger */ .Z.getLogger("esri/views/webgl");function o(e,r){switch(r){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const a=!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("enable-feature:webgl-debug");function u(){return a}function c(){return a}function s(r){if(u()){const t=r.getError();if(t){const a=o(r,t),u=(new Error).stack;n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("webgl-error","WebGL error occured",{message:a,stack:u}))}}}


/***/ }),

/***/ 91907:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ld": () => (/* binding */ e),
/* harmony export */   "Lu": () => (/* binding */ f),
/* harmony export */   "_g": () => (/* binding */ r)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=33984;var r;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.VertexShader=3]="VertexShader",e[e.FragmentShader=4]="FragmentShader",e[e.Program=5]="Program",e[e.Framebuffer=6]="Framebuffer",e[e.Renderbuffer=7]="Renderbuffer",e[e.COUNT=8]="COUNT"}(r||(r={}));const f=33306;


/***/ })

};
;
//# sourceMappingURL=5784.render-page.js.map