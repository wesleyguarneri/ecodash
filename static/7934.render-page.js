"use strict";
exports.id = 7934;
exports.ids = [7934];
exports.modules = {

/***/ 39043:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_Y": () => (/* binding */ y),
/* harmony export */   "Y3": () => (/* binding */ z),
/* harmony export */   "sJ": () => (/* binding */ v),
/* harmony export */   "xr": () => (/* binding */ p)
/* harmony export */ });
/* unused harmony exports darken, toXYZ */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return"r"in n&&"g"in n&&"b"in n}function t(n){return"h"in n&&"s"in n&&"v"in n}function r(n){return"l"in n&&"a"in n&&"b"in n}function u(n){return"l"in n&&"c"in n&&"h"in n}function o(n){return"x"in n&&"y"in n&&"z"in n}const e=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],c=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function i(n,t){const r=[];let u,o;if(n[0].length!==t.length)throw"dimensions do not match";const e=n.length,c=n[0].length;let i=0;for(u=0;u<e;u++){for(i=0,o=0;o<c;o++)i+=n[u][o]*t[o];r.push(i)}return r}function a(n){const t=[n.r/255,n.g/255,n.b/255].map((n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4)),r=i(e,t);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function h(n){const t=i(c,[n.x/100,n.y/100,n.z/100]).map((n=>{const t=n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function s(n){const t=[n.x/95.047,n.y/100,n.z/108.883].map((n=>n>(6/29)**3?n**(1/3):1/3*(29/6)**2*n+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function f(n){const t=n.l,r=[(t+16)/116+n.a/500,(t+16)/116,(t+16)/116-n.b/200].map((n=>n>6/29?n**3:3*(6/29)**2*(n-4/29)));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function b(n){const t=n.l,r=n.a,u=n.b,o=Math.sqrt(r*r+u*u);let e=Math.atan2(u,r);return e=e>0?e:e+2*Math.PI,{l:t,c:o,h:e}}function l(n){const t=n.l,r=n.c,u=n.h;return{l:t,a:r*Math.cos(u),b:r*Math.sin(u)}}function g(n){return s(a(n))}function M(n){return h(f(n))}function m(n){return b(s(a(n)))}function d(n){return h(f(l(n)))}function x(n){const t=n.r,r=n.g,u=n.b,o=Math.max(t,r,u),e=o-Math.min(t,r,u);let c=o,i=0===e?0:o===t?(r-u)/e%6:o===r?(u-t)/e+2:(t-r)/e+4,a=0===e?0:e/c;return i<0&&(i+=6),i*=60,a*=100,c*=100/255,{h:i,s:a,v:c}}function k(n){const t=(n.h+360)%360/60,r=n.s/100,u=n.v/100*255,o=u*r,e=o*(1-Math.abs(t%2-1));let c;switch(Math.floor(t)){case 0:c={r:o,g:e,b:0};break;case 1:c={r:e,g:o,b:0};break;case 2:c={r:0,g:o,b:e};break;case 3:c={r:0,g:e,b:o};break;case 4:c={r:e,g:0,b:o};break;case 5:case 6:c={r:o,g:0,b:e};break;default:c={r:0,g:0,b:0}}return c.r=Math.round(c.r+u-o),c.g=Math.round(c.g+u-o),c.b=Math.round(c.b+u-o),c}function p(e){return n(e)?e:u(e)?d(e):r(e)?M(e):o(e)?h(e):t(e)?k(e):e}function y(n){if(t(n))return n;return x(p(n))}function z(n){return r(n)?n:g(p(n))}function v(n){return u(n)?n:m(p(n))}function w(n){return o(n)?n:a(p(n))}function q(n,t){const r=g(n);return r.l*=1-t,M(r)}


/***/ }),

/***/ 7505:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ym": () => (/* binding */ U),
/* harmony export */   "RF": () => (/* binding */ O),
/* harmony export */   "vY": () => (/* binding */ s),
/* harmony export */   "J9": () => (/* binding */ q),
/* harmony export */   "U1": () => (/* binding */ v),
/* harmony export */   "Ie": () => (/* binding */ B),
/* harmony export */   "G6": () => (/* binding */ C)
/* harmony export */ });
/* unused harmony exports equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeMultipoint, quantizePaths, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizePaths, unquantizePoints, unquantizeRings, unquantizeX, unquantizeY */
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61681);
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53736);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(n){return n&&"upperLeft"===n.originPosition}const a=(n,t,e)=>[t,e],m=(n,t,e)=>[t,e,n[2]],c=(n,t,e)=>[t,e,n[2],n[3]];function s(t){if(!t)return null;return{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}}function f(t,e){if(t===e||null==t&&null==e)return!0;if(null==t||null==e)return!1;let r,u,i,o,a,m;return l(t)?(r=t.translate[0],u=t.translate[1],i=t.scale[0]):(r=n(t.extent)?t.extent.xmin:0,u=n(t.extent)?t.extent.ymax:0,i=t.tolerance),l(e)?(o=e.translate[0],a=e.translate[1],m=e.scale[0]):(o=n(e.extent)?e.extent.xmin:0,a=n(e.extent)?e.extent.ymax:0,m=e.tolerance),r===o&&u===a&&i===m}function x({scale:n,translate:t},e){return Math.round((e-t[0])/n[0])}function h({scale:n,translate:t},e){return Math.round((t[1]-e)/n[1])}function I(n,t,e){const r=[];let u,i,o,l;for(let a=0;a<e.length;a++){const m=e[a];a>0?(o=x(n,m[0]),l=h(n,m[1]),o===u&&l===i||(r.push(t(m,o-u,l-i)),u=o,i=l)):(u=x(n,m[0]),i=h(n,m[1]),r.push(t(m,u,i)))}return r.length>0?r:null}function g(n,t,e){return t[0]=x(n,e[0]),t[3]=h(n,e[1]),t[2]=x(n,e[2]),t[1]=h(n,e[3]),t}function p(n,t,e,r){return I(n,e?r?c:m:r?m:a,t)}function N(n,t,e,r){const u=[],i=e?r?c:m:r?m:a;for(let o=0;o<t.length;o++){const e=I(n,i,t[o]);e&&e.length>=3&&u.push(e)}return u.length?u:null}function y(n,t,e,r){const u=[],i=e?r?c:m:r?m:a;for(let o=0;o<t.length;o++){const e=I(n,i,t[o]);e&&e.length>=2&&u.push(e)}return u.length?u:null}function z({scale:n,translate:t},e){return e*n[0]+t[0]}function T({scale:n,translate:t},e){return t[1]-e*n[1]}function M(n,t,e){const r=new Array(e.length);if(!e.length)return r;const[u,i]=n.scale;let o=z(n,e[0][0]),l=T(n,e[0][1]);r[0]=t(e[0],o,l);for(let a=1;a<e.length;a++){const n=e[a];o+=n[0]*u,l-=n[1]*i,r[a]=t(n,o,l)}return r}function E(n,t,e){const r=new Array(e.length);for(let u=0;u<e.length;u++)r[u]=M(n,t,e[u]);return r}function P(n,t,e){return e?(t[0]=z(n,e[0]),t[1]=T(n,e[3]),t[2]=z(n,e[2]),t[3]=T(n,e[1]),t):[z(n,t[0]),T(n,t[3]),z(n,t[2]),T(n,t[1])]}function b(n,t,e,r){return M(n,e?r?c:m:r?m:a,t)}function F(n,t,e,r){return E(n,e?r?c:m:r?m:a,t)}function V(n,t,e,r){return E(n,e?r?c:m:r?m:a,t)}function Y(n,t,e){let[r,u]=e[0],i=Math.min(r,t[0]),o=Math.min(u,t[1]),l=Math.max(r,t[2]),a=Math.max(u,t[3]);for(let m=1;m<e.length;m++){const[n,t]=e[m];r+=n,u+=t,n<0&&(i=Math.min(i,r)),n>0&&(l=Math.max(l,r)),t<0?o=Math.min(o,u):t>0&&(a=Math.max(a,u))}return n[0]=i,n[1]=o,n[2]=l,n[3]=a,n}function _(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let e=0;e<t.length;e++)Y(n,n,t[e]);return n}function A(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return Y(t,t,n)}function w(n){return _([0,0,0,0],n)}function j(n){return _([0,0,0,0],n)}function G(n,t,e,r,u){return t.xmin=x(n,e.xmin),t.ymin=h(n,e.ymin),t.xmax=x(n,e.xmax),t.ymax=h(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function L(n,t,e,r,u){return t.points=p(n,e.points,r,u),t}function O(n,t,e,r,u){return t.x=x(n,e.x),t.y=h(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m)),t}function S(n,t,e,r,u){const i=N(n,e.rings,r,u);return i?(t.rings=i,t):null}function d(n,t,e,r,u){const i=y(n,e.paths,r,u);return i?(t.paths=i,t):null}function U(n,t){return n&&t?(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPoint */ .wp)(t)?O(n,{},t,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolyline */ .l9)(t)?d(n,{},t,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolygon */ .oU)(t)?S(n,{},t,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMultipoint */ .aW)(t)?L(n,{},t,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isExtent */ .YX)(t)?G(n,{},t,!1,!1):null:null}function k(n,t,e,r,u){return t.xmin=z(n,e.xmin),t.ymin=T(n,e.ymin),t.xmax=z(n,e.xmax),t.ymax=T(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function q(t,e,r,u,i){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(r)&&(e.points=b(t,r.points,u,i)),e}function v(n,e,r,u,i){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isNone */ .Wi)(r)||(e.x=z(n,r.x),e.y=T(n,r.y),e!==r&&(u&&(e.z=r.z),i&&(e.m=r.m))),e}function B(t,e,r,u,i){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(r)&&(e.rings=V(t,r.rings,u,i)),e}function C(t,e,r,u,i){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(r)&&(e.paths=F(t,r.paths,u,i)),e}


/***/ }),

/***/ 556:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95215);
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10927);
/* harmony import */ var _SDFHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89626);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60789);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=512;class m{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(s,o,m){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===s.type||"esriSFS"===s.type){const[t,r,a]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__/* .SymbolHelper.rasterizeSimpleFill */ .fN.rasterizeSimpleFill(this._rasterizationCanvas,s.style,o);return{size:[r,a],image:new Uint32Array(t.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===s.type||"esriSLS"===s.type||"line"===s.type&&s.dashTemplate){let r,a;if("simple-line"===s.type||"esriSLS"===s.type)switch(r=(0,_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__/* .slsDashToTemplateArray */ .U1)(s.style,s.cap),s.cap){case"butt":a="Butt";break;case"square":a="Square";break;default:a="Round"}else r=s.dashTemplate,a=s.cim.capStyle;const[i,n,o]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__/* .SymbolHelper.rasterizeSimpleLine */ .fN.rasterizeSimpleLine(r,a);return{size:[n,o],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let l,c,f;if("simple-marker"===s.type||"esriSMS"===s.type||"line-marker"===s.type?(l=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__/* .CIMSymbolHelper.fromSimpleMarker */ .B$.fromSimpleMarker(s),f=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_1__/* .getSDFInfo */ .Fp)(l)):s.cim&&"CIMHatchFill"===s.cim.type?(l=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__/* .CIMSymbolHelper.fromCIMHatchFill */ .B$.fromCIMHatchFill(s.cim),c=new _Rect_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):s.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===s.cim.markerPlacement.type?(l=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__/* .CIMSymbolHelper.fromCIMInsidePolygon */ .B$.fromCIMInsidePolygon(s.cim),c=new _Rect_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):(l=s.cim,f=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_1__/* .getSDFInfo */ .Fp)(l)),f&&!m){const[e,t,r]=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_1__/* .buildSDF */ .RL)(f);return e?{size:[t,r],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[p,h,u,y,d]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__/* .CIMSymbolHelper.rasterize */ .B$.rasterize(this._rasterizationCanvas,l,c,this._resourceManager,!m);return p?{size:[h,u],image:new Uint32Array(p.buffer),sdf:!1,simplePattern:!1,anchorX:y,anchorY:d}:null}rasterizeImageResource(e,t,r,a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");r instanceof ImageData?i.putImageData(r,0,0):(r.setAttribute("width",`${e}px`),r.setAttribute("height",`${t}px`),i.drawImage(r,0,0,e,t));const n=i.getImageData(0,0,e,t),m=new Uint8Array(n.data);if(a)for(const s of a)if(s&&s.oldColor&&4===s.oldColor.length&&s.newColor&&4===s.newColor.length){const[e,t,r,a]=s.oldColor,[i,n,o,l]=s.newColor;if(e===i&&t===n&&r===o&&a===l)continue;for(let s=0;s<m.length;s+=4)e===m[s]&&t===m[s+1]&&r===m[s+2]&&a===m[s+3]&&(m[s]=i,m[s+1]=n,m[s+2]=o,m[s+3]=l)}let l;for(let s=0;s<m.length;s+=4)l=m[s+3]/255,m[s]=m[s]*l,m[s+1]=m[s+1]*l,m[s+2]=m[s+2]*l;let c=m,f=e,p=t;const h=o;if(f>=h||p>=h){const r=f/p;r>1?(f=h,p=Math.round(h/r)):(p=h,f=Math.round(h*r)),c=new Uint8Array(4*f*p);const a=new Uint8ClampedArray(c.buffer);(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .resampleHermite */ .TT)(m,e,t,a,f,p,!1)}return{size:[f,p],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}


/***/ }),

/***/ 48024:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "previewCIMSymbol": () => (/* binding */ s)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(95550);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(30936);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/string.js
var string = __webpack_require__(21130);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(53736);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/cim/cimAnalyzer.js
var cimAnalyzer = __webpack_require__(75312);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/cim/CIMResourceManager.js
var CIMResourceManager = __webpack_require__(19849);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/cim/Rasterizer.js
var Rasterizer = __webpack_require__(556);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/cim/TextRasterizer.js
var TextRasterizer = __webpack_require__(89417);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/cim/utils.js
var utils = __webpack_require__(60789);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/cimSymbolUtils.js
var cimSymbolUtils = __webpack_require__(97500);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/Symbol3DAnchorPosition2D.js
var Symbol3DAnchorPosition2D = __webpack_require__(37939);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/symbols/cim/CIMSymbolRasterizer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var M;!function(e){e.Legend="legend",e.Preview="preview"}(M||(M={}));const C=(e,t,r)=>{if(e&&e.targetSize){let i;if(r){const t=Math.max(r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin);i=e.targetSize/(0,screenUtils/* pt2px */.F2)(t)}else i=e.targetSize/t.referenceSize;return i}return e&&e.scaleFactor?e.scaleFactor:1},I={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};class z{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._pictureMarkerCache=new Map,this._textRasterizer=new TextRasterizer/* TextRasterizer */.d,this._cimResourceManager=new CIMResourceManager/* default */.Z,this._rasterizer=new Rasterizer/* default */.Z(this._cimResourceManager)}async rasterizeCIMSymbolAsync(e,t,r,a,i,o,n,c){a=a||(t?null!=t.centroid?"esriGeometryPolygon":(0,jsonUtils/* getJsonType */.Ji)(t.geometry):null)||P(e);const l=await this.analyzeCIMSymbol(e,t?x(t.attributes):null,r,a,c);return this.rasterizeCIMSymbol(l,t,a,i,o,n)}async analyzeCIMSymbol(e,t,a,i,s){const o=[],n=t?{geometryType:i,spatialReference:this._spatialReference,fields:t}:null;let l;await (0,cimAnalyzer/* analyzeCIMSymbol */.c)(e.data,n,this._cimResourceManager,o,this._avoidSDF),(0,promiseUtils/* throwIfAborted */.k_)(s);for(const r of o)"CIMPictureMarker"!==r.cim.type&&"CIMPictureFill"!==r.cim.type&&"CIMPictureStroke"!==r.cim.type||(l||(l=[]),l.push(this.fetchPictureMarkerResource(r,s))),a&&"text"===r.type&&"string"==typeof r.text&&r.text.indexOf("[")>-1&&(r.text=(0,utils/* createLabelOverrideFunction */.Qs)(a,r.text,r.cim.textCase));return l&&await Promise.all(l),o}async fetchPictureMarkerResource(e,r){const a=e.materialHash;if(!this._pictureMarkerCache.get(a)){const i=(await (0,request["default"])(e.cim.url,{responseType:"image",signal:r&&r.signal})).data;this._pictureMarkerCache.set(a,i)}}rasterizeCIMSymbol(e,t,r,a,i,s){const o=[];for(const n of e){a&&"function"==typeof a.scaleFactor&&(a.scaleFactor=a.scaleFactor(t,i,s));const e=this._getRasterizedResource(n,t,r,a,i,s);if(!e)continue;let c=0,l=e.anchorX||0,m=e.anchorY||0,h=!1,f=0,g=0;if("esriGeometryPoint"===r){const e=C(a,n,null);if(f=(0,utils/* evaluateValueOrFunction */.hf)(n.offsetX,t,i,s)*e||0,g=(0,utils/* evaluateValueOrFunction */.hf)(n.offsetY,t,i,s)*e||0,"marker"===n.type)c=(0,utils/* evaluateValueOrFunction */.hf)(n.rotation,t,i,s)||0,h=!!n.rotateClockwise&&n.rotateClockwise;else if("text"===n.type){if(c=(0,utils/* evaluateValueOrFunction */.hf)(n.angle,t,i,s)||0,void 0!==n.horizontalAlignment)switch(n.horizontalAlignment){case"left":l=-.5;break;case"right":l=.5;break;default:l=0}if(void 0!==n.verticalAlignment)switch(n.verticalAlignment){case"top":m=.5;break;case"bottom":m=-.5;break;case"baseline":m=-.25;break;default:m=0}}}null!=e&&o.push({angle:c,rotateClockWise:h,anchorX:l,anchorY:m,offsetX:f,offsetY:g,rasterizedResource:e})}return this.getSymbolImage(o)}getSymbolImage(e){const t=document.createElement("canvas"),r=t.getContext("2d");let i=0,s=0,o=0,n=0;const c=[];for(let f=0;f<e.length;f++){const t=e[f],l=t.rasterizedResource;if(!l)continue;const m=l.size,h=t.offsetX,g=t.offsetY,y=t.anchorX,u=t.anchorY,p=t.rotateClockWise||!1;let d=t.angle,M=(0,screenUtils/* pt2px */.F2)(h)-m[0]*(.5+y),C=(0,screenUtils/* pt2px */.F2)(g)-m[1]*(.5+u),I=M+m[0],z=C+m[1];if(d){p&&(d=-d);const e=Math.sin(d*Math.PI/180),t=Math.cos(d*Math.PI/180),r=M*t-C*e,a=M*e+C*t,i=M*t-z*e,s=M*e+z*t,o=I*t-z*e,n=I*e+z*t,c=I*t-C*e,l=I*e+C*t;M=Math.min(r,i,o,c),C=Math.min(a,s,n,l),I=Math.max(r,i,o,c),z=Math.max(a,s,n,l)}i=M<i?M:i,s=C<s?C:s,o=I>o?I:o,n=z>n?z:n;const x=r.createImageData(l.size[0],l.size[1]);x.data.set(new Uint8ClampedArray(l.image.buffer));const P={offsetX:h,offsetY:g,rotateClockwise:p,angle:d,rasterizedImage:x,anchorX:y,anchorY:u};c.push(P)}t.width=o-i,t.height=n-s;const l=-i,m=n;for(let f=0;f<c.length;f++){const e=c[f],t=this._imageDataToCanvas(e.rasterizedImage),i=e.rasterizedImage.width,s=e.rasterizedImage.height,o=l-i*(.5+e.anchorX),n=m-s*(.5-e.anchorY);if(e.angle){const i=(360-e.angle)*Math.PI/180;r.save(),r.translate((0,screenUtils/* pt2px */.F2)(e.offsetX),-(0,screenUtils/* pt2px */.F2)(e.offsetY)),r.translate(l,m),r.rotate(i),r.translate(-l,-m),r.drawImage(t,o,n),r.restore()}else r.drawImage(t,o+(0,screenUtils/* pt2px */.F2)(e.offsetX),n-(0,screenUtils/* pt2px */.F2)(e.offsetY))}const h=new Symbol3DAnchorPosition2D/* default */.Z({x:l/t.width-.5,y:m/t.height-.5});return{imageData:0!==t.width&&0!==t.height?r.getImageData(0,0,t.width,t.height):r.createImageData(1,1),anchorPosition:h}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.putImageData(e,0,0),t}_imageTo32Array(t,r,a,i){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const s=this._imageDataCanvas,o=s.getContext("2d");if(s.width=r,s.height=a,o.drawImage(t,0,0,r,a),i){o.save();const s=new Color/* default */.Z(i);o.fillStyle=s.toHex(),o.globalCompositeOperation="multiply",o.fillRect(0,0,r,a),o.globalCompositeOperation="destination-atop",o.drawImage(t,0,0,r,a),o.restore()}return new Uint32Array(o.getImageData(0,0,r,a).data.buffer)}_getRasterizedResource(e,t,r,a,s,o){let n,c,l,m,h=null,f=null;if("esriGeometryPolyline"===r||"esriGeometryPolygon"===r){const m=a&&a.style?a.style:M.Legend,g="esriGeometryPolyline"===r?I.stroke[m]:I.fill[m];if("line"===e.type){if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){const r=(0,utils/* evaluateValueOrFunction */.hf)(e.width,t,s,o),a=(0,utils/* evaluateValueOrFunction */.hf)(e.color,t,s,o),{image:i,width:n,height:c}=this._getPictureResource(e,r,a);return this._rasterizePictureResource(e,i,n,c,g,r)}return null}({analyzedCIM:n,hash:l}=w(e,t,s,o)),c=this._embedCIMLayerInVectorMarker(n,g)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type)return null;if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=(0,utils/* evaluateValueOrFunction */.hf)(e.offsetX,t,s,o),e.cim.offsetY=(0,utils/* evaluateValueOrFunction */.hf)(e.offsetY,t,s,o),e.cim.rotation=(0,utils/* evaluateValueOrFunction */.hf)(e.rotation,t,s,o),e.cim.markerPlacement=e.markerPlacement,({analyzedCIM:n}=w(e,t,s,o)),l=(0,string/* numericHash */.hP)(JSON.stringify(n)).toString(),c=this._embedCIMLayerInVectorMarker(n,g),h=(0,utils/* evaluateValueOrFunction */.hf)(e.size,t,s,o),f=e.path}else{if("text"===e.type)return null;if("fill"===e.type){if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){const r=e.cim.size||e.cim.height;let a,i,c;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type)({image:a,width:i,height:c}=this._getPictureResource(e,r,(0,utils/* evaluateValueOrFunction */.hf)(e.color,t,s,o)));else{({analyzedCIM:n,hash:l}=w(e,t,s,o));const m=this._rasterizer.rasterizeJSONResource({cim:n,type:e.type,url:e.url,mosaicHash:l,size:r,path:f},1,this._avoidSDF);a=m.image,i=m.size[0],c=m.size[1]}return this._rasterizePictureResource(e,a,i,c,g,null)}if("CIMSolidFill"!==e.cim.type)return null;({analyzedCIM:n,hash:l}=w(e,t,s,o)),c=this._embedCIMLayerInVectorMarker(n,g)}}}else{if("text"===e.type)return m=this._rasterizeTextResource(e,t,a,s,o),m;({analyzedCIM:n,hash:l}=w(e,t,s,o));const r=C(a,e,null);if("CIMPictureMarker"===e.cim.type){const a=(0,utils/* evaluateValueOrFunction */.hf)(e.size,t,s,o)*r,{image:i,width:n,height:c}=this._getPictureResource(e,a,(0,utils/* evaluateValueOrFunction */.hf)(e.color,t,s,o));return m={image:i,size:[n,c],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},m}(0,cimSymbolUtils/* scaleCIMMarker */.FW)(n,r,{preserveOutlineWidth:!1}),c=n}l+=r,a&&(l+=JSON.stringify(a));const g=this._resourceCache;return g.has(l)?g.get(l):(m=this._rasterizer.rasterizeJSONResource({cim:c,type:e.type,url:e.url,mosaicHash:l,size:h,path:f},window.devicePixelRatio||1,this._avoidSDF),g.set(l,m),m)}_rasterizeTextResource(e,t,r,a,i){const s=C(r,e,null),o=(0,utils/* evaluateValueOrFunction */.hf)(e.text,t,a,i);if(!o||0===o.length)return null;const n=(0,utils/* evaluateValueOrFunction */.hf)(e.fontName,t,a,i),c=(0,utils/* evaluateValueOrFunction */.hf)(e.style,t,a,i),l=(0,utils/* evaluateValueOrFunction */.hf)(e.weight,t,a,i),m=(0,utils/* evaluateValueOrFunction */.hf)(e.decoration,t,a,i),h=(0,utils/* evaluateValueOrFunction */.hf)(e.size,t,a,i)*s,f=(0,utils/* evaluateValueOrFunction */.hf)(e.horizontalAlignment,t,a,i),g=(0,utils/* evaluateValueOrFunction */.hf)(e.verticalAlignment,t,a,i),p=(0,utils/* colorToArray */.nn)((0,utils/* evaluateValueOrFunction */.hf)(e.color,t,a,i)),d=(0,utils/* colorToArray */.nn)((0,utils/* evaluateValueOrFunction */.hf)(e.outlineColor,t,a,i)),M={color:p,size:h,horizontalAlignment:f,verticalAlignment:g,font:{family:n,style:c,weight:l,decoration:m},halo:{size:(0,utils/* evaluateValueOrFunction */.hf)(e.outlineSize,t,a,i)||0,color:d,style:c},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(o,M)}_rasterizePictureResource(e,t,r,i,s,c){const l=document.createElement("canvas"),m=l.getContext("2d");l.height=(0,screenUtils/* pt2px */.F2)(Math.max(s.frame.ymax-s.frame.ymin,c)),l.width=(0,screenUtils/* pt2px */.F2)(s.frame.xmax-s.frame.xmin);const h=m.createImageData(r,i);h.data.set(new Uint8ClampedArray(t.buffer));const f=this._imageDataToCanvas(h),g=m.createPattern(f,"repeat"),y=Math.cos((-e.cim.rotation||0)*Math.PI/180),u=Math.sin((-e.cim.rotation||0)*Math.PI/180);g.setTransform({m11:y,m12:u,m21:-u,m22:y,m41:(0,screenUtils/* pt2px */.F2)(e.cim.offsetX)||0,m42:(0,screenUtils/* pt2px */.F2)(e.cim.offsetY)||0});const p=s.canvasPaths;let d,M,C;(0,jsonUtils/* isPolygon */.oU)(p)?(d=p.rings,m.fillStyle=g,M=m.fill,C=["evenodd"]):(0,jsonUtils/* isPolyline */.l9)(p)&&(d=p.paths,m.strokeStyle=g,m.lineWidth=c,M=m.stroke,d[0][0][1]=l.height/2,d[0][1][1]=l.height/2),m.beginPath();for(const o of d){const e=o?o.length:0;if(e>1){let t=o[0];m.moveTo((0,screenUtils/* pt2px */.F2)(t[0]),(0,screenUtils/* pt2px */.F2)(t[1]));for(let r=1;r<e;++r)t=o[r],m.lineTo((0,screenUtils/* pt2px */.F2)(t[0]),(0,screenUtils/* pt2px */.F2)(t[1]));m.closePath()}}M.apply(m,C);const I=m.getImageData(0,0,l.width,l.height),z=new Uint8Array(I.data);return{size:[l.width,l.height],image:new Uint32Array(z.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_getPictureResource(e,t,r){const i=this._pictureMarkerCache.get(e.materialHash);if(!i)return null;const s=i.height/i.width,o=t?s>1?(0,screenUtils/* pt2px */.F2)(t):(0,screenUtils/* pt2px */.F2)(t)/s:i.width,n=t?s>1?(0,screenUtils/* pt2px */.F2)(t)*s:(0,screenUtils/* pt2px */.F2)(t):i.height;return{image:this._imageTo32Array(i,o,n,r),width:o,height:n}}_embedCIMLayerInVectorMarker(e,t){const r=(0,jsonUtils/* isPolygon */.oU)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",a=t.frame;return{type:"CIMVectorMarker",frame:a,size:a.ymax-a.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:r,symbolLayers:[e]}}]}}}function x(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}function P(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function w(e,t,r,a){let i,s;if("function"==typeof e.materialHash){i=(0,e.materialHash)(t,r,a),s=(0,cimAnalyzer/* analyzeCIMResource */.S)(e.cim,e.materialOverrides)}else i=e.materialHash,s=e.cim;return{analyzedCIM:s,hash:i}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/renderUtils.js + 1 modules
var renderUtils = __webpack_require__(64194);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/symbols/support/previewCIMSymbol.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new z(null,!0),n=120;async function s(t,s={}){const{size:c,maxSize:r,node:m,opacity:f}=s,h=s.cimOptions||s,{feature:y,fieldMap:d,geometryType:p,style:u}=h,g=(0,cimSymbolUtils/* getCIMSymbolSize */.kW)(t),w=Math.min(null!=c?c:g,null!=r?r:(0,screenUtils/* px2pt */.Wz)(n));w!==g&&(t=t.clone(),(0,cimSymbolUtils/* scaleCIMSymbolTo */.PI)(t,w,{preserveOutlineWidth:!0}));let M=3;t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(M=1);const b=await o.rasterizeCIMSymbolAsync(t,y,d,p,{scaleFactor:M,style:u}),C=document.createElement("canvas");C.width=b.imageData.width,C.height=b.imageData.height;C.getContext("2d").putImageData(b.imageData,0,0);let D=C.width/M,I=C.height/M;if(null!=c&&(null==(null==s?void 0:s.scale)||(null==s?void 0:s.scale))){const e=D/I;D=e<=1?Math.ceil(w*e):w,I=e<=1?w:Math.ceil(w/e)}const S=new Image(D,I);S.src=C.toDataURL(),null!=f&&(S.style.opacity=`${f}`);let j=S;if(null!=s.effectView){const e={shape:{type:"image",x:0,y:0,width:D,height:I,src:S.src},fill:null,stroke:null,offset:[0,0]};j=(0,renderUtils/* renderSymbol */.w)([[e]],[D,I],{effectView:s.effectView})}return m&&m.appendChild(j),j}


/***/ }),

/***/ 64194:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ l),
  "r": () => (/* binding */ renderUtils_d)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/kernel.js
var kernel = __webpack_require__(88256);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/colorUtils.js
var colorUtils = __webpack_require__(39043);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/libs/maquette/projection.js
var projection = __webpack_require__(56803);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/libs/maquette/projector.js
var projector = __webpack_require__(22591);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(30936);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat2df32.js
var mat2df32 = __webpack_require__(59566);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat2d.js
var mat2d = __webpack_require__(40278);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/widgets/support/widgetUtils.js + 1 modules
var widgetUtils = __webpack_require__(54956);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/widgets/support/jsxFactory.js
var jsxFactory = __webpack_require__(26451);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/symbols/support/svgUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h="http://www.w3.org/2000/svg";let c=0,f=0;const d=(0,has/* default */.Z)("android"),u=(0,has/* default */.Z)("chrome")||d&&d>=4?"auto":"optimizeLegibility",y={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},p=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let g={},x={};const m={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},w=Math.PI;let k=1;function b(t,e){const i=t*(w/180);return Math.abs(e*Math.sin(i))+Math.abs(e*Math.cos(i))}function v(t){return t.map((t=>`${t.command} ${t.values.join(" ")}`)).join(" ").trim()}function j(t,e,i,r){if(t){if("circle"===t.type)return (0,jsxFactory/* tsx */.u)("circle",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return (0,jsxFactory/* tsx */.u)("ellipse",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return (0,jsxFactory/* tsx */.u)("rect",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return (0,jsxFactory/* tsx */.u)("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const r="string"!=typeof t.path?v(t.path):t.path;return (0,jsxFactory/* tsx */.u)("path",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",d:r})}if("text"===t.type)return (0,jsxFactory/* tsx */.u)("text",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4","text-anchor":r.align,"text-decoration":r.decoration,kerning:r.kerning,rotate:r.rotate,"text-rendering":u,"font-style":r.font.style,"font-variant":r.font.variant,"font-weight":r.font.weight,"font-size":r.font.size,"font-family":r.font.family,x:t.x,y:t.y},t.text)}return null}function M(e){const i={fill:"none",pattern:null,linearGradient:null};if(e)if("type"in e&&"pattern"===e.type){const t="patternId-"+ ++c;i.fill=`url(#${t})`,i.pattern={id:t,x:e.x,y:e.y,width:e.width,height:e.height,image:{x:0,y:0,width:e.width,height:e.height,href:e.src}}}else if("type"in e&&"linear"===e.type){const r="linearGradientId-"+ ++f;i.fill=`url(#${r})`,i.linearGradient={id:r,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stops:e.colors.map((e=>({offset:e.offset,color:e.color&&new Color/* default */.Z(e.color).toString()})))}}else if(e){const r=new Color/* default */.Z(e);i.fill=r.toString()}return i}function A(e){const i={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(e&&(null!=e.width&&(i.width=e.width),e.cap&&(i.cap=e.cap),e.join&&(i.join=e.join.toString()),e.color&&(i.color=new Color/* default */.Z(e.color).toString()),e.style)){let t=null;if(e.style in m&&(t=m[e.style]),Array.isArray(t)){t=t.slice(0);for(let i=0;i<t.length;++i)t[i]*=e.width;if("butt"!==e.cap){for(let i=0;i<t.length;i+=2)t[i]-=e.width,t[i]<1&&(t[i]=1);for(let i=1;i<t.length;i+=2)t[i]+=e.width}t=t.join(",")}i.dashArray=t}return i}function N(t,e){const i={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(i.align=t.align,i.decoration=t.decoration,i.kerning=t.kerning?"auto":"0",i.rotate=t.rotated?"90":"0",i.font.style=e.style||"normal",i.font.variant=e.variant||"normal",i.font.weight=e.weight||"normal",i.font.size=e.size&&e.size.toString()||"10pt",i.font.family=e.family||"serif"),i}function G(t){const{pattern:e,linearGradient:i}=t;if(e)return (0,jsxFactory/* tsx */.u)("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},(0,jsxFactory/* tsx */.u)("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(i){const t=i.stops.map(((t,e)=>(0,jsxFactory/* tsx */.u)("stop",{key:`${e}-stop`,offset:t.offset,"stop-color":t.color})));return (0,jsxFactory/* tsx */.u)("linearGradient",{id:i.id,gradientUnits:"userSpaceOnUse",x1:i.x1,y1:i.y1,x2:i.x2,y2:i.y2},t)}return null}function S(t,e,i){return (0,mat2d.t)(t,(0,mat2d.i)(t),[e,i])}function $(t,e,i,r,o){return (0,mat2d.s)(t,(0,mat2d.i)(t),[e,i]),t[4]=t[4]*e-r*e+r,t[5]=t[5]*i-o*i+o,t}function I(t,e,i,r){const o=e%360*Math.PI/180;(0,mat2d.r)(t,(0,mat2d.i)(t),o);const s=Math.cos(o),a=Math.sin(o),h=t[4],c=t[5];return t[4]=h*s-c*a+r*a-i*s+i,t[5]=c*s+h*a-i*a-r*s+r,t}function z(t,e){g&&"left"in g?(g.left>t&&(g.left=t),g.right<t&&(g.right=t),g.top>e&&(g.top=e),g.bottom<e&&(g.bottom=e)):g={left:t,bottom:e,right:t,top:e}}function B(t){const e=t.args,i=e.length;let r;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(r=0;r<i;r+=2)z(e[r],e[r+1]);x.x=e[i-2],x.y=e[i-1];break;case"H":for(r=0;r<i;++r)z(e[r],x.y);x.x=e[i-1];break;case"V":for(r=0;r<i;++r)z(x.x,e[r]);x.y=e[i-1];break;case"m":{let t=0;"x"in x||(z(x.x=e[0],x.y=e[1]),t=2);for(r=t;r<i;r+=2)z(x.x+=e[r],x.y+=e[r+1]);break}case"l":case"t":for(r=0;r<i;r+=2)z(x.x+=e[r],x.y+=e[r+1]);break;case"h":for(r=0;r<i;++r)z(x.x+=e[r],x.y);break;case"v":for(r=0;r<i;++r)z(x.x,x.y+=e[r]);break;case"c":for(r=0;r<i;r+=6)z(x.x+e[r],x.y+e[r+1]),z(x.x+e[r+2],x.y+e[r+3]),z(x.x+=e[r+4],x.y+=e[r+5]);break;case"s":case"q":for(r=0;r<i;r+=4)z(x.x+e[r],x.y+e[r+1]),z(x.x+=e[r+2],x.y+=e[r+3]);break;case"A":for(r=0;r<i;r+=7)z(e[r+5],e[r+6]);x.x=e[i-2],x.y=e[i-1];break;case"a":for(r=0;r<i;r+=7)z(x.x+=e[r+5],x.y+=e[r+6])}}function F(t,e,i){const r=y[t.toLowerCase()];let o;"number"==typeof r&&(r?e.length>=r&&(o={action:t,args:e.slice(0,e.length-e.length%r)},i.push(o),B(o)):(o={action:t,args:[]},i.push(o),B(o)))}function U(t){const e=("string"!=typeof t.path?v(t.path):t.path).match(p),i=[];if(g={},x={},!e)return null;let r="",o=[];const n=e.length;for(let l=0;l<n;++l){const t=e[l],n=parseFloat(t);isNaN(n)?(r&&F(r,o,i),o=[],r=t):o.push(n)}F(r,o,i);const s={x:0,y:0,width:0,height:0};return g&&"left"in g&&(s.x=g.left,s.y=g.top,s.width=g.right-g.left,s.height=g.bottom-g.top),s}function T(t){const e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){const i=U(t);e.x=i.x,e.y=i.y,e.width=i.width,e.height=i.height}return e}function E(t){const e={x:0,y:0,width:0,height:0};let i=null,r=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(const n of t)i?(i.x=Math.min(i.x,n.x),i.y=Math.min(i.y,n.y),r=Math.max(r,n.x+n.width),o=Math.max(o,n.y+n.height)):(i=e,i.x=n.x,i.y=n.y,r=n.x+n.width,o=n.y+n.height);return i&&(i.width=r-i.x,i.height=o-i.y),i}function V(t,e,o,n,s,l,a,h,c){let f=(a&&l?b(l,e):e)/2,d=(a&&l?b(l,o):o)/2;if(c){const t=c[0],e=c[1];f=(a&&l?b(l,t):t)/2,d=(a&&l?b(l,e):e)/2}const u=t.width+n,y=t.height+n,p=(0,mat2df32.c)(),g=(0,mat2df32.c)();let x=!1;if(s&&0!==u&&0!==y){const t=u/y,i=e>o?e:o;let n=1,s=1;isNaN(i)||(t>1?(n=i/u,s=i/t/y):(s=i/y,n=i*t/u)),(0,mat2d.m)(g,g,$(p,n,s,f,d)),x=!0}const m=t.x+(u-n)/2,w=t.y+(y-n)/2;if((0,mat2d.m)(g,g,S(p,f-m,d-w)),!x&&(u>e||y>o)){const t=u/e>y/o,i=(t?e:o)/(t?u:y);(0,mat2d.m)(g,g,$(p,i,i,m,w))}return l&&(0,mat2d.m)(g,g,I(p,l,m,w)),h&&(0,mat2d.m)(g,g,S(p,h[0],h[1])),`matrix(${g[0]},${g[1]},${g[2]},${g[3]},${g[4]},${g[5]})`}function C(t,e,i){const r=null==t?void 0:t.effects.find((t=>"bloom"===t.type));if(!r)return null;const{strength:o,radius:n}=r,s=o>0?n:0,l=(o+s)*e,h=4*o+1;return (0,jsxFactory/* tsx */.u)("filter",{id:`bloom${i}`,x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},(0,jsxFactory/* tsx */.u)("feMorphology",{operator:"dilate",radius:(o+.5*s)*(5**(e/100)*(.4+e/100)),in:"SourceGraphic",result:"dilate"}),(0,jsxFactory/* tsx */.u)("feGaussianBlur",{in:"dilate",stdDeviation:l/25,result:"blur"}),(0,jsxFactory/* tsx */.u)("feGaussianBlur",{in:"blur",stdDeviation:l/50,result:"intensityBlur"}),(0,jsxFactory/* tsx */.u)("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},(0,jsxFactory/* tsx */.u)("feFuncR",{type:"linear",slope:h}),(0,jsxFactory/* tsx */.u)("feFuncG",{type:"linear",slope:h}),(0,jsxFactory/* tsx */.u)("feFuncB",{type:"linear",slope:h})),(0,jsxFactory/* tsx */.u)("feMerge",null,(0,jsxFactory/* tsx */.u)("feMergeNode",{in:"intensityBlur"}),(0,jsxFactory/* tsx */.u)("feMergeNode",{in:"intensityBrightness"}),(0,jsxFactory/* tsx */.u)("feGaussianBlur",{stdDeviation:o/10})))}function D(t,e,i,r){const o=[],n=[],s=++k,l=C(null==r?void 0:r.effectView,e,s);let c=null;if(l){var f;const t=null==r||null==(f=r.effectView)?void 0:f.effects.find((t=>"bloom"===t.type)),o=(t.strength?t.strength+t.radius/2:0)/3,n=e+e*o,s=i+i*o;c=[Math.max(n,10),Math.max(s,10)]}for(const h of t){const t=[],s=[];let l=0,f=0,d=0;for(const e of h){const{shape:i,fill:r,stroke:n,font:a,offset:h}=e;l+=n&&n.width||0;const c=M(r),u=A(n),y="text"===i.type?N(i,a):null;o.push(G(c)),t.push(j(i,c.fill,u,y)),s.push(T(i)),h&&(f+=h[0],d+=h[1])}const u=V(E(s),e,i,l,null==r?void 0:r.scale,null==r?void 0:r.rotation,null==r?void 0:r.useRotationSize,[f,d],c);n.push((0,jsxFactory/* tsx */.u)("g",{transform:u},t))}return null!=r&&r.useRotationSize&&null!=r&&r.rotation&&(e=b(null==r?void 0:r.rotation,e),i=b(null==r?void 0:r.rotation,i)),l&&(e=c[0],i=c[1]),(0,jsxFactory/* tsx */.u)("svg",{xmlns:h,width:e,height:i},l,(0,jsxFactory/* tsx */.u)("defs",null,o),l?(0,jsxFactory/* tsx */.u)("g",{filter:`url(#bloom${s})`},n):n)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/utils.js
var utils = __webpack_require__(59672);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/symbols/support/renderUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const renderUtils_h=(0,projector/* createProjector */.E)();function l(t,e,i){const r=Math.ceil(e[0]),n=Math.ceil(e[1]);if(!t.some((t=>!!t.length)))return null;const o=i&&i.node||document.createElement("div");return null!=i.opacity&&(o.style.opacity=i.opacity.toString()),null!=i.effectView&&(o.style.filter=(0,utils/* getCSSFilterFromEffectList */.wJ)(i.effectView)),renderUtils_h.append(o,D.bind(null,t,r,n,i)),o}function renderUtils_m(t,e){t=Math.ceil(t),e=Math.ceil(e);const i=document.createElement("canvas");i.width=t,i.height=e,i.style.width=t+"px",i.style.height=e+"px";const r=i.getContext("2d");return r.clearRect(0,0,t,e),r}function renderUtils_g(t,i,r){return t?(0,request["default"])(t,{responseType:"image"}).then((t=>{const e=t.data,n=e.width,o=e.height,a=n/o;let c=i;if(r){const t=Math.max(n,o);c=Math.min(c,t)}return{image:e,width:a<=1?Math.ceil(c*a):c,height:a<=1?c:Math.ceil(c/a)}})):Promise.reject(new Error/* default */.Z("renderUtils: imageDataSize","href not provided."))}function renderUtils_u(t,e){return!(!t||"ignore"===e)&&("multiply"!==e||255!==t.r||255!==t.g||255!==t.b||1!==t.a)}function renderUtils_f(t,e,n,o,a){switch(a){case"multiply":t[e+0]*=n[0],t[e+1]*=n[1],t[e+2]*=n[2],t[e+3]*=n[3];break;default:{const a=(0,colorUtils/* toHSV */._Y)({r:t[e+0],g:t[e+1],b:t[e+2]});a.h=o.h,a.s=o.s,a.v=a.v/100*o.v;const c=(0,colorUtils/* toRGB */.xr)(a);t[e+0]=c.r,t[e+1]=c.g,t[e+2]=c.b,t[e+3]*=n[3];break}}}function renderUtils_d(e,r,n,a,c){return renderUtils_g(e,r,c).then((c=>{const s=c.width?c.width:r,h=c.height?c.height:r;if(c.image&&renderUtils_u(n,a)){let t=c.image.width,r=c.image.height;(0,has/* default */.Z)("edge")&&/\.svg$/i.test(e)&&(t-=1,r-=1);const l=renderUtils_m(s,h);l.drawImage(c.image,0,0,t,r,0,0,s,h);const g=l.getImageData(0,0,s,h),u=[n.r/255,n.g/255,n.b/255,n.a],d=(0,colorUtils/* toHSV */._Y)(n);for(let e=0;e<g.data.length;e+=4)renderUtils_f(g.data,e,u,d,a);l.putImageData(g,0,0),e=l.canvas.toDataURL("image/png")}else{const i=kernel.id&&kernel.id.findCredential(e);if(i&&i.token){const t=-1===e.indexOf("?")?"?":"&";e=`${e}${t}token=${i.token}`}}return{url:e,width:s,height:h}})).catch((function(){return{url:e,width:r,height:r}}))}


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


/***/ })

};
;
//# sourceMappingURL=7934.render-page.js.map