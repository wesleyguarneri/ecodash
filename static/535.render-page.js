"use strict";
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 26488:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QB": () => (/* binding */ h)
/* harmony export */ });
/* unused harmony exports BBox, default */
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7753);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61681);
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17135);
/* harmony import */ var _chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80657);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h{constructor(t=9,i){this.compareMinX=l,this.compareMinY=c,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),M.prune(),X.prune(),Y.prune(),B.prune()}all(t){this._all(this.data,t)}search(t,i){let n=this.data;const e=this.toBBox;if(p(t,n))for(M.clear();n;){for(let s=0,h=n.children.length;s<h;s++){const h=n.children[s],a=n.leaf?e(h):h;p(t,a)&&(n.leaf?i(h):x(t,a)?this._all(h,i):M.push(h))}n=M.pop()}}collides(t){let i=this.data;const n=this.toBBox;if(!p(t,i))return!1;for(M.clear();i;){for(let e=0,s=i.children.length;e<s;e++){const s=i.children[e],h=i.leaf?n(s):s;if(p(t,h)){if(i.leaf||x(t,h))return!0;M.push(s)}}i=M.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){const t=this.data;this.data=i,i=t}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new b([]),this}remove(i){if(!i)return this;let e,s=this.data,h=null,a=0,r=!1;const o=this.toBBox(i);for(Y.clear(),B.clear();s||Y.length>0;){var l;if(!s)s=(0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .assumeNonNull */ .j0)(Y.pop()),h=Y.data[Y.length-1],a=null!=(l=B.pop())?l:0,r=!0;if(s.leaf&&(e=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .cq)(s.children,i,s.children.length,s.indexHint),-1!==e))return s.children.splice(e,1),Y.push(s),this._condense(Y),this;r||s.leaf||!x(s,o)?h?(a++,s=h.children[a],r=!1):s=null:(Y.push(s),B.push(a),a=0,h=s,s=s.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,i){let n=t;for(X.clear();n;){var e;if(!0===n.leaf)for(const t of n.children)i(t);else X.pushArray(n.children);n=null!=(e=X.pop())?e:null}}_build(t,i,n,e){const s=n-i+1;let h=this._maxEntries;if(s<=h){const e=new b(t.slice(i,n+1));return a(e,this.toBBox),e}e||(e=Math.ceil(Math.log(s)/Math.log(h)),h=Math.ceil(s/h**(e-1)));const r=new j([]);r.height=e;const o=Math.ceil(s/h),l=o*Math.ceil(Math.sqrt(h));g(t,i,n,l,this.compareMinX);for(let a=i;a<=n;a+=l){const i=Math.min(a+l-1,n);g(t,a,i,o,this.compareMinY);for(let n=a;n<=i;n+=o){const s=Math.min(n+o-1,i);r.children.push(this._build(t,n,s,e-1))}}return a(r,this.toBBox),r}_chooseSubtree(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,s=1/0;for(let h=0,a=i.children.length;h<a;h++){const a=i.children[h],r=m(a),o=d(t,a)-r;o<s?(s=o,e=r<e?r:e,n=a):o===s&&r<e&&(e=r,n=a)}i=n||i.children[0]}return i}_insert(t,i,n){const e=this.toBBox,s=n?t:e(t);Y.clear();const h=this._chooseSubtree(s,this.data,i,Y);for(h.children.push(t),o(h,s);i>=0&&Y.data[i].children.length>this._maxEntries;)this._split(Y,i),i--;this._adjustParentBBoxes(s,Y,i)}_split(t,i){const n=t.data[i],e=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,e);const h=this._chooseSplitIndex(n,s,e);if(!h)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(h,n.children.length-h),o=n.leaf?new b(r):new j(r);o.height=n.height,a(n,this.toBBox),a(o,this.toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,i){this.data=new j([t,i]),this.data.height=t.height+1,a(this.data,this.toBBox)}_chooseSplitIndex(t,i,n){let e,s,h;e=s=1/0;for(let a=i;a<=n-i;a++){const i=r(t,0,a,this.toBBox),o=r(t,a,n,this.toBBox),l=f(i,o),c=m(i)+m(o);l<e?(e=l,h=a,s=c<s?c:s):l===e&&c<s&&(s=c,h=a)}return h}_chooseSplitAxis(t,i,n){const e=t.leaf?this.compareMinX:l,s=t.leaf?this.compareMinY:c;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,s)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const s=this.toBBox,h=r(t,0,i,s),a=r(t,n-i,n,s);let l=u(h)+u(a);for(let r=i;r<n-i;r++){const i=t.children[r];o(h,t.leaf?s(i):i),l+=u(h)}for(let r=n-i-1;r>=i;r--){const i=t.children[r];o(a,t.leaf?s(i):i),l+=u(a)}return l}_adjustParentBBoxes(t,i,n){for(let e=n;e>=0;e--)o(i.data[e],t)}_condense(i){for(let n=i.length-1;n>=0;n--){const e=i.data[n];if(0===e.children.length)if(n>0){const s=i.data[n-1],h=s.children;h.splice((0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .cq)(h,e,h.length,s.indexHint),1)}else this.clear();else a(e,this.toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,i){r(t,0,t.children.length,i,t)}function r(t,i,n,e,s){s||(s=new b([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let h,a=i;a<n;a++)h=t.children[a],o(s,t.leaf?e(h):h);return s}function o(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function l(t,i){return t.minX-i.minX}function c(t,i){return t.minY-i.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function f(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),s=Math.min(t.maxX,i.maxX),h=Math.min(t.maxY,i.maxY);return Math.max(0,s-n)*Math.max(0,h-e)}function x(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function p(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function g(t,i,e,h,a){const r=[i,e];for(;r.length;){const i=(0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .assumeNonNull */ .j0)(r.pop()),e=(0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .assumeNonNull */ .j0)(r.pop());if(i-e<=h)continue;const o=e+Math.ceil((i-e)/h/2)*h;(0,_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_2__.q)(t,o,e,i,a),r.push(e,o,o,i)}}const M=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,X=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,Y=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,B=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({deallocator:void 0});class _{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class w extends _{constructor(){super(...arguments),this.height=1,this.indexHint=new _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .PositionHint */ .SO}}class b extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class j extends w{constructor(t){super(),this.children=t,this.leaf=!1}}


/***/ }),

/***/ 61107:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={convertToGEGeometry:s,exportPoint:n,exportPolygon:o,exportPolyline:a,exportMultipoint:c,exportExtent:m};function s(t,s){return null==s?null:t.convertJSONToGeometry(s)}class i{constructor(t,s,i){this.x=t,this.y=s,this.spatialReference=i,this.z=void 0,this.m=void 0}}function n(t,s,n){const e=new i(t.getPointX(s),t.getPointY(s),n),o=t.hasZ(s),h=t.hasM(s);return o&&(e.z=t.getPointZ(s)),h&&(e.m=t.getPointM(s)),e}class e{constructor(t,s,i,n){this.rings=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function o(t,s,i){return new e(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class h{constructor(t,s,i,n){this.paths=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function a(t,s,i){return new h(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class r{constructor(t,s,i,n){this.points=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function c(t,s,i){return new r(t.exportPoints(s),i,t.hasZ(s),t.hasM(s))}class x{constructor(t,s,i,n,e){this.xmin=t,this.ymin=s,this.xmax=i,this.ymax=n,this.spatialReference=e,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}function m(t,s,i){const n=t.hasZ(s),e=t.hasM(s),o=new x(t.getXMin(s),t.getYMin(s),t.getXMax(s),t.getYMax(s),i);if(n){const i=t.getZExtent(s);o.zmin=i.vmin,o.zmax=i.vmax}if(e){const i=t.getMExtent(s);o.mmin=i.vmin,o.mmax=i.vmax}return o}


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

/***/ 33480:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ e)
/* harmony export */ });
/* unused harmony export lineCentroid */
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(t,n){return t?n?4:3:n?3:2}function e(e,o,u,l,N){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isNone */ .Wi)(o)||!o.lengths.length)return null;const s="upperLeft"===(null==N?void 0:N.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const c=e.coords,f=[],i=u?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:T,coords:h}=o,g=n(u,l);let E=0;for(const t of T){const n=r(i,h,E,t,u,l,s);n&&f.push(n),E+=t*g}if(f.sort(((t,n)=>{let e=s*t[2]-s*n[2];return 0===e&&u&&(e=t[4]-n[4]),e})),f.length){let t=6*f[0][2];c[0]=f[0][0]/t,c[1]=f[0][1]/t,u&&(t=6*f[0][4],c[2]=0!==t?f[0][3]/t:0),(c[0]<i[0]||c[0]>i[1]||c[1]<i[2]||c[1]>i[3]||u&&(c[2]<i[4]||c[2]>i[5]))&&(c.length=0)}if(!c.length){const t=o.lengths[0]?I(h,0,T[0],u,l):null;if(!t)return null;c[0]=t[0],c[1]=t[1],u&&t.length>2&&(c[2]=t[2])}return e}function r(t,e,r,I,o,u,l=1){const N=n(o,u);let s=r,c=r+N,f=0,i=0,T=0,h=0,g=0;for(let n=0,m=I-1;n<m;n++,s+=N,c+=N){const n=e[s],r=e[s+1],I=e[s+2],u=e[c],l=e[c+1],N=e[c+2];let E=n*l-u*r;h+=E,f+=(n+u)*E,i+=(r+l)*E,o&&(E=n*N-u*I,T+=(I+N)*E,g+=E),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),r<t[2]&&(t[2]=r),r>t[3]&&(t[3]=r),o&&(I<t[4]&&(t[4]=I),I>t[5]&&(t[5]=I))}if(h*l>0&&(h*=-1),g*l>0&&(g*=-1),!h)return null;const E=[f,i,.5*h];return o&&(E[3]=T,E[4]=.5*g),E}function I(t,e,r,I,s){const c=n(I,s);let f=e,i=e+c,T=0,h=0,g=0,E=0;for(let n=0,m=r-1;n<m;n++,f+=c,i+=c){const n=t[f],e=t[f+1],r=t[f+2],s=t[i],c=t[i+1],m=t[i+2],b=I?u(n,e,r,s,c,m):o(n,e,s,c);if(b)if(T+=b,I){const t=N(n,e,r,s,c,m);h+=b*t[0],g+=b*t[1],E+=b*t[2]}else{const t=l(n,e,s,c);h+=b*t[0],g+=b*t[1]}}return T>0?I?[h/T,g/T,E/T]:[h/T,g/T]:r>0?I?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function o(t,n,e,r){const I=e-t,o=r-n;return Math.sqrt(I*I+o*o)}function u(t,n,e,r,I,o){const u=r-t,l=I-n,N=o-e;return Math.sqrt(u*u+l*l+N*N)}function l(t,n,e,r){return[t+.5*(e-t),n+.5*(r-n)]}function N(t,n,e,r,I,o){return[t+.5*(r-t),n+.5*(I-n),e+.5*(o-e)]}


/***/ }),

/***/ 117:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39994);
/* harmony import */ var _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26488);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=5e4,n={minX:0,minY:0,maxX:0,maxY:0};function t(i,s,d){n.minX=s[0],n.minY=s[1],n.maxX=s[2],n.maxY=s[3],i.search(n,d)}class e{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__/* .PooledRBush */ .QB(9,(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("esri-csp-restrictions")?i=>({minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const i=new Array(this._idByBounds.size);let s=0;this._idByBounds.forEach(((d,n)=>{i[s++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(i)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((i=>this._idByBounds.has(i)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(i){const s=this._boundsById.get(i);this._boundsById.delete(i),s&&(this._idByBounds.delete(s),this._indexInvalid||this._index.remove(s))}forEachInBounds(i,s){this._loadIndex(),t(this._index,i,(i=>s(this._idByBounds.get(i))))}get(i){return this._boundsById.get(i)}has(i){return this._boundsById.has(i)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(i,s){if(!this._indexInvalid){const s=this._boundsById.get(i);s&&(this._index.remove(s),this._idByBounds.delete(s))}this._boundsById.set(i,s),s&&(this._idByBounds.set(s,i),this._indexInvalid||(this._boundsToLoad.push(s),this._boundsToLoad.length>d&&this._loadIndex()))}}


/***/ }),

/***/ 4811:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ m)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(31355);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(37116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(24568);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(12065);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js
var BoundsStore = __webpack_require__(117);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/centroid.js
var centroid = __webpack_require__(33480);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js
var OptimizedFeature = __webpack_require__(59958);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js
var OptimizedGeometry = __webpack_require__(15540);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/graphics/data/optimizedFeatureQueryEngineAdapter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,r)=>new OptimizedFeature/* default */.ZP(r,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(e,o)=>(e.centroid||(e.centroid=(0,centroid/* getCentroidOptimizedGeometry */.Y)(new OptimizedGeometry/* default */.Z,e.geometry,o.hasZ,o.hasM)),e.centroid)};

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/graphics/data/FeatureStore.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m{constructor(e){this.geometryInfo=e,this._boundsStore=new BoundsStore/* BoundsStore */.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new Evented/* default */.Z,this.featureAdapter=o}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=(0,aaBoundingRect/* create */.Ue)(aaBoundingRect/* NEGATIVE_INFINITY */.Gv);return this._featuresById.forEach((t=>{const r=this._boundsStore.get(t.objectId);r&&(e[0]=Math.min(r[0],e[0]),e[1]=Math.min(r[1],e[1]),e[2]=Math.max(r[2],e[2]),e[3]=Math.max(r[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{(0,maybe/* isSome */.pC)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,r){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t((0,aaBoundingBox/* fromRect */.JR)(r,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,r)=>{this._markedIds.has(r)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const i=t.objectId;if(null==i)return void Logger/* default.getLogger */.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new Error/* default */.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const d=this._featuresById.get(i);let h;if(this._markedIds.add(i),d?(t.displayId=d.displayId,h=this._boundsStore.get(i),this._boundsStore.delete(i)):(0,maybe/* isSome */.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),(0,maybe/* isNone */.Wi)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(i,null),void this._featuresById.set(i,t);h=(0,featureConversionUtils/* getBoundsOptimizedGeometry */.$)((0,maybe/* isSome */.pC)(h)?h:(0,aaBoundingRect/* create */.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,maybe/* isSome */.pC)(h)&&this._boundsStore.set(i,h),this._featuresById.set(i,t)}_remove(e){return (0,maybe/* isSome */.pC)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}


/***/ }),

/***/ 66069:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_W": () => (/* binding */ f),
/* harmony export */   "iV": () => (/* binding */ g),
/* harmony export */   "oj": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61681);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76117);
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61107);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35925);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39536);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=[0,0];function c(s,t){if(!t)return null;if("x"in t){const e={x:0,y:0};return[e.x,e.y]=s(t.x,t.y,u),null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}if("xmin"in t){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=s(t.xmin,t.ymin,u),[e.xmax,e.ymax]=s(t.xmax,t.ymax,u),t.hasZ&&(e.zmin=t.zmin,e.zmax=t.zmax,e.hasZ=!0),t.hasM&&(e.mmin=t.mmin,e.mmax=t.mmax,e.hasM=!0),e}return"rings"in t?{rings:p(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:p(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:l(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:void 0}function p(s,t){const e=[];for(const n of s)e.push(l(n,t));return e}function l(s,t){const e=[];for(const n of s){const s=t(n[0],n[1],[0,0]);e.push(s),n.length>2&&s.push(n[2]),n.length>3&&s.push(n[3])}return e}async function f(e,n){if(!n)return;const r=Array.isArray(e)?e.map((t=>(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .isSome */ .pC)(t.geometry)&&t.geometry.spatialReference)):[e];await (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__/* .initializeProjection */ .iQ)(r.map((s=>({source:s,dest:n}))))}const x=c.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .lngLatToXY */ .hG),y=c.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .xyToLngLat */ .R6);function g(s,t,m){return s?(m||(m=t,t=s.spatialReference),(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isValid */ .JY)(t)&&(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isValid */ .JY)(m)&&!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .equals */ .fS)(t,m)?(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .canProject */ .Q8)(t,m)?(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isWebMercator */ .sS)(m)?x(s):y(s):(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__/* .projectMany */ .oj)(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__/* .jsonAdapter */ .N,[s],t,m,null)[0]:s):s}class _{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(s,t,e){if(!s||!s.length||!t||!e||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .equals */ .fS)(t,e))return s;const n={geometries:s,inSpatialReference:t,outSpatialReference:e,resolve:null};return this._jobs.push(n),new Promise((s=>{n.resolve=s,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:t,inSpatialReference:r,outSpatialReference:i,resolve:m}=s;(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .canProject */ .Q8)(r,i)?(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isWebMercator */ .sS)(i)?m(t.map(x)):m(t.map(y)):m((0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__/* .projectMany */ .oj)(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__/* .jsonAdapter */ .N,t,r,i,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const j=new _;function M(s,t,e){return j.push(s,t,e)}


/***/ })

};
;
//# sourceMappingURL=535.render-page.js.map