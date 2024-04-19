"use strict";
exports.id = 2982;
exports.ids = [2982];
exports.modules = {

/***/ 57989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pJ": () => (/* binding */ a),
/* harmony export */   "XO": () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export isTelemetryDevEnvironment */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,n.some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(r)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(l)||null!=a.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function o(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(n).some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}const t=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,n=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,l,/^jsapps.esri.com$/,r,s];


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

/***/ 59468:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ s)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++)}return e/n}function n(t,n){return"number"==typeof t?t:t&&t.stops&&t.stops.length?e(t.stops):n}function r(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:s}=e;return(n(r,t)+n(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let n=0;n<o;n++)s+=r[n];const f=Math.floor(s/o);return Math.max(f,t)}function s(e){const n=e&&e.renderer,s="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!n)return s;const o="visualVariables"in n?r(s,n.visualVariables):s;if("simple"===n.type)return t(o,n.symbol);if("unique-value"===n.type){let e=o;return n.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol)})),e}if("class-breaks"===n.type){let e=o;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol)})),e}return n.type,o}


/***/ }),

/***/ 41657:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13802);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38716);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15875);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLogger */ .Z.getLogger("esri.views.2d.engine.webgl");function o(s){return (0,_Utils_js__WEBPACK_IMPORTED_MODULE_3__/* .isNumber */ .hj)(s.minDataValue)&&(0,_Utils_js__WEBPACK_IMPORTED_MODULE_3__/* .isNumber */ .hj)(s.maxDataValue)&&null!=s.minSize&&null!=s.maxSize?_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .WGLVVFlag.SIZE_MINMAX_VALUE */ .X.SIZE_MINMAX_VALUE:(s.expression&&"view.scale"===s.expression||s.valueExpression&&"$view.scale"===s.valueExpression)&&Array.isArray(s.stops)?_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .WGLVVFlag.SIZE_SCALE_STOPS */ .X.SIZE_SCALE_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&(Array.isArray(s.stops)||"levels"in s&&s.levels)?_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .WGLVVFlag.SIZE_FIELD_STOPS */ .X.SIZE_FIELD_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&null!=s.valueUnit?_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .WGLVVFlag.SIZE_UNIT_VALUE */ .X.SIZE_UNIT_VALUE:(l.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("mapview-bad-type","Found invalid size VisualVariable",s)),_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .WGLVVFlag.NONE */ .X.NONE)}


/***/ }),

/***/ 53932:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ D)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(80085);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/AggregateGraphic.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let s=p=class extends Graphic/* default */.Z{constructor(){super(...arguments),this.isAggregate=!0}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;const r=this.sourceLayer&&this.sourceLayer.featureReduction;return r&&"popupTemplate"in r&&r.popupEnabled?r.popupTemplate:null}getObjectId(){return this.objectId}clone(){return new p({objectId:this.objectId,...this.cloneProperties()})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean})],s.prototype,"isAggregate",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{read:!0}})],s.prototype,"objectId",void 0),s=p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.AggregateGraphic")],s);const c=s;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(66591);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(76868);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/watchUtils.js
var watchUtils = __webpack_require__(15071);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 3 modules
var Accessor = __webpack_require__(53443);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/effects/EffectView.js
var EffectView = __webpack_require__(88464);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/effects/FeatureEffectView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends Accessor/* default */.Z{constructor(e){super(e),this._filter=null,this.duration=(0,has/* default */.Z)("mapview-transitions-duration"),this._excludedEffectView=new EffectView/* default */.ZP(e),this._includedEffectView=new EffectView/* default */.ZP(e)}get excludedEffects(){return this._excludedEffectView.effects}set featureEffect(e){this._get("featureEffect")!==e&&this._transitionTo(e)}get filter(){var e;return this._filter||(null==(e=(0,maybe/* unwrap */.Wg)(this.featureEffect))?void 0:e.filter)||null}get hasEffects(){return this._excludedEffectView.hasEffects||this._includedEffectView.hasEffects}get includedEffects(){return this._includedEffectView.effects}set scale(e){this._set("scale",e),this._excludedEffectView.scale=e,this._includedEffectView.scale=e}get transitioning(){return this._excludedEffectView.transitioning||this._includedEffectView.transitioning}transitionStep(e,t){this._set("scale",t),this.transitioning?(this._includedEffectView.transitionStep(e,t),this._excludedEffectView.transitionStep(e,t),this.transitioning||(this._filter=null)):(this._excludedEffectView.scale=t,this._includedEffectView.scale=t)}end(){this._includedEffectView.end(),this._excludedEffectView.end(),this._filter=null}_transitionTo(e){const t=this._get("featureEffect"),i=(0,maybe/* unwrap */.Wg)(e),f=(0,maybe/* unwrap */.Wg)(null==i?void 0:i.includedEffect),c=(0,maybe/* unwrap */.Wg)(null==i?void 0:i.excludedEffect),r=this._includedEffectView.canTransitionTo(f)&&this._excludedEffectView.canTransitionTo(c);this._includedEffectView.effect=f,this._excludedEffectView.effect=c,this._set("featureEffect",i),this._filter=(null==i?void 0:i.filter)||(null==t?void 0:t.filter)||null,r||this.end()}};(0,tslib_es6._)([(0,property/* property */.Cb)()],o.prototype,"_filter",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],o.prototype,"_excludedEffectView",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],o.prototype,"_includedEffectView",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],o.prototype,"duration",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],o.prototype,"excludedEffects",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],o.prototype,"featureEffect",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],o.prototype,"filter",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],o.prototype,"hasEffects",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],o.prototype,"includedEffects",null),(0,tslib_es6._)([(0,property/* property */.Cb)({value:0})],o.prototype,"scale",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],o.prototype,"transitioning",null),o=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.effects.FeatureEffectView")],o);const l=o;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FeatureFilter.js
var FeatureFilter = __webpack_require__(15553);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js
var clickToleranceUtils = __webpack_require__(59468);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(51211);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js
var definitions = __webpack_require__(14266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js + 4 modules
var LayerView2D = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/schemaUtils.js + 1 modules
var schemaUtils = __webpack_require__(23031);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function tileRenderers_e(e,a){if(!e)return null;switch(e.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return new((await Promise.all(/* import() */[__webpack_require__.e(1329), __webpack_require__.e(6224), __webpack_require__.e(994), __webpack_require__.e(2103), __webpack_require__.e(269)]).then(__webpack_require__.bind(__webpack_require__, 61138))).default)(a);case"heatmap":return new((await Promise.all(/* import() */[__webpack_require__.e(1329), __webpack_require__.e(6224), __webpack_require__.e(994), __webpack_require__.e(2670)]).then(__webpack_require__.bind(__webpack_require__, 32670))).default)(a)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/support/pixelBuffering.js
var pixelBuffering = __webpack_require__(37475);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js + 1 modules
var clusterUtils = __webpack_require__(6377);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/support/QueueProcessor.js
var QueueProcessor = __webpack_require__(99542);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/FeatureCommandQueue.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(e){return e.some((e=>e.globalId))}function d(e){return e.filter((e=>!e.error)).map((e=>{var r;return null!=(r=e.objectId)?r:e.globalId}))}function a(e,r){const s=new Set(e);for(const t of r.values())s.add(t);return s}function i(e,r){const s=new Set(e);for(const t of r.values())s.delete(t);return s}let u=class extends Accessor/* default */.Z{constructor(e){super(e),this._hasGlobalIds=!1}normalizeCtorArgs(e){return this._queueProcessor=new QueueProcessor/* QueueProcessor */.e({concurrency:1,process:e.process}),{}}destroy(){this._queueProcessor.clear()}get updating(){return this._queueProcessor.length>0}push(e){const r=this._queueProcessor,s=r.last();switch(e.type){case"update":case"refresh":if((null==s?void 0:s.type)===e.type)return;r.push(e).finally((()=>this.notifyChange("updating")));break;case"edit":{const t="processed-edit"===(null==s?void 0:s.type)?s:null;t&&r.popLast();const o=this._mergeEdits(t,e);for(const e of o)r.push(e).finally((()=>this.notifyChange("updating")));break}}this.notifyChange("updating")}_mergeEdits(e,r){var s,t;const{addedFeatures:o,deletedFeatures:u,updatedFeatures:c}=r.edits;if(this._hasGlobalIds=this._hasGlobalIds||n(o)||n(c)||n(u),this._hasGlobalIds){return[e,{type:"processed-edit",edits:{addOrModified:[...o,...c],removed:u}}]}const l=new Set(d(null!=(s=null==e?void 0:e.edits.addOrModified)?s:[])),p=new Set(d(null!=(t=null==e?void 0:e.edits.removed)?t:[])),f=new Set([...d(o),...d(c)]),h=new Set(d(u));return[{type:"processed-edit",edits:{addOrModified:Array.from(a(i(l,h),f)).map((e=>({objectId:e}))),removed:Array.from(a(i(p,f),h)).map((e=>({objectId:e})))}}]}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],u.prototype,"updating",null),u=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.support.FeatureCommandQueue")],u);const FeatureCommandQueue_c=u;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(64189);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/workers/workers.js + 4 modules
var workers = __webpack_require__(47109);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/FeatureLayerProxy.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function FeatureLayerProxy_c(e){return Array.isArray(e)}let FeatureLayerProxy_l=class extends core_Promise/* EsriPromise */.D{constructor(e){super(e),this._startupResolver=(0,promiseUtils/* createResolver */.hh)(),this.isReady=!1}initialize(){this._controller=new AbortController,this.addResolvingPromise(this._startWorker(this._controller.signal))}destroy(){this._controller.abort(),this._connection&&this._connection.close()}set tileRenderer(e){this.client.tileRenderer=e}get closed(){return this._connection.closed}async startup(e,t,r,s){await this.when();const o=this._controller.signal,i=FeatureLayerProxy_c(r.source)?{transferList:r.source,signal:o}:void 0,n={service:r,config:t,tileInfo:e.tileInfo.toJSON(),tiles:s};await this._connection.invoke("startup",n,i),this._startupResolver.resolve(),this._set("isReady",!0)}async updateTiles(e){return await this._startupResolver.promise,(0,promiseUtils/* ignoreAbortErrors */.R8)(this._connection.invoke("updateTiles",e))}async update(e){const t={config:e};return await this._startupResolver.promise,this._connection.invoke("update",t)}async applyUpdate(e){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",e)}async setHighlight(e){return await this._startupResolver.promise,(0,promiseUtils/* ignoreAbortErrors */.R8)(this._connection.invoke("controller.setHighlight",e))}async refresh(e){return await this._startupResolver.promise,(0,promiseUtils/* ignoreAbortErrors */.R8)(this._connection.invoke("controller.refresh",e))}async querySummaryStatistics(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:e.toJSON(),params:t},r)}async queryUniqueValues(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryUniqueValues",{query:e.toJSON(),params:t},r)}async queryClassBreaks(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryClassBreaks",{query:e.toJSON(),params:t},r)}async queryHistogram(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryHistogram",{query:e.toJSON(),params:t},r)}async queryFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",e.toJSON(),t)}async queryVisibleFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryVisibleFeatures",e.toJSON(),t)}async queryObjectIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",e.toJSON(),t)}async queryFeatureCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",e.toJSON(),t)}async queryExtent(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)}async queryLatestObservations(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)}async queryStatistics(e){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",e)}async getObjectId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",e)}async getDisplayId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",e)}async getFeatures(e){return await this._startupResolver.promise,this._connection.invoke("controller.getFeatures",e)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(e){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",e)}async onEdits(e){return await this._startupResolver.promise,(0,promiseUtils/* ignoreAbortErrors */.R8)(this._connection.invoke("controller.onEdits",e))}async enableEvent(e,t){return await this._startupResolver.promise,(0,promiseUtils/* ignoreAbortErrors */.R8)(this._connection.invoke("controller.enableEvent",{name:e,value:t}))}async _startWorker(e){try{this._connection=await (0,workers/* open */.bA)("Pipeline",{client:this.client,strategy:"dedicated",signal:e})}catch(t){(0,promiseUtils/* throwIfNotAbortError */.H9)(t)}}};(0,tslib_es6._)([(0,property/* property */.Cb)()],FeatureLayerProxy_l.prototype,"isReady",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],FeatureLayerProxy_l.prototype,"client",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],FeatureLayerProxy_l.prototype,"tileRenderer",null),FeatureLayerProxy_l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.support.FeatureLayerProxy")],FeatureLayerProxy_l);const FeatureLayerProxy_u=FeatureLayerProxy_l;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/util.js
var util = __webpack_require__(67437);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/tiling/TileCoverage.js
var TileCoverage = __webpack_require__(88782);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/tiling/TileKey.js
var TileKey = __webpack_require__(87241);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/tiling/TileManager.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const TileManager_l=1e-6;class TileManager_s{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer}destroy(){}clear(){this._tiles.forEach((e=>this._releaseTile(e)))}tileKeys(){const e=[];return this._tiles.forEach(((i,t)=>e.push(t))),e}update(e){const l=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:s,lodInfo:r}=l,{level:a}=r,o=[],d=[],h=new Set,n=new Set;for(const{row:i,colFrom:c,colTo:f}of s)for(let e=c;e<=f;e++){const l=TileKey/* default.getId */.Z.getId(a,i,r.normalizeCol(e),r.getWorldForColumn(e)),s=this._getOrAcquireTile(o,l);h.add(l),s.isReady?s.visible=!0:n.add(s.key)}n.forEach((e=>this._addPlaceholders(h,e))),this._tiles.forEach((e=>{h.has(e.key.id)||(d.push(e.key.id),this._releaseTile(e))})),TileCoverage/* default.pool.release */.Z.pool.release(l);return{hasMissingTiles:n.size>0,added:o,removed:d}}_getOrAcquireTile(e,i){if(!this._tiles.has(i)){const l=this.acquireTile(new TileKey/* default */.Z(i));e.push(i),this._tiles.set(i,l),l.visible=!1}return this._tiles.get(i)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e)}_addPlaceholders(e,i){const t=this._addPlaceholderChildren(e,i);if(!(Math.abs(1-t)<TileManager_l)){if(!this._addPlaceholderParent(e,i)){this._getTile(i.id).visible=!0}}}_addPlaceholderChildren(e,i){let t=0;return this._tiles.forEach((l=>{t+=this._addPlaceholderChild(e,l,i)})),t}_addPlaceholderChild(e,i,t){if(i.key.level<=t.level||!i.hasData||!t.contains(i.key))return 0;i.visible=!0,e.add(i.key.id);return 1/(1<<2*(i.key.level-t.level))}_addPlaceholderParent(i,t){let l=t.getParentKey(),s=0,r=null;for(;(0,maybe/* isSome */.pC)(l);){if(i.has(l.id))return!0;const e=this._getTile(l.id);if(null!=e&&e.isReady)return e.visible=!0,i.add(e.key.id),!0;null!=e&&e.hasData&&e.patchCount>s&&(s=e.patchCount,r=e),l=l.getParentKey()}return!!r&&(r.visible=!0,i.add(r.key.id),!0)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/deprecate.js
var deprecate = __webpack_require__(59801);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(51599);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FeatureEffect.js
var FeatureEffect = __webpack_require__(92150);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js + 1 modules
var fieldUtils = __webpack_require__(17095);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/arcadeOnDemand.js
var arcadeOnDemand = __webpack_require__(30879);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/support/popupUtils.js
var popupUtils = __webpack_require__(59439);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/support/floorFilterUtils.js
var floorFilterUtils = __webpack_require__(89280);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/layers/FeatureLayerView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const P=Logger/* default.getLogger */.Z.getLogger("esri.views.layers.FeatureLayerView"),O=i=>{let O=class extends i{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){(0,watchUtils/* init */.S1)(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","featureEffect","layer.timeInfo","layer.floorInfo","timeExtent"],(()=>this._handleRequiredFieldsChange()),!0),(0,watchUtils.on)(this,"view.floors","change",(()=>this._handleRequiredFieldsChange())),(0,watchUtils.on)(this,"layer.sublayer","change",(()=>this._handleRequiredFieldsChange()))}get availableFields(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return"outFields"in e&&e.outFields?(0,fieldUtils/* fixFields */.Q0)(t,[...(0,fieldUtils/* unpackFieldNames */.Lk)(t,e.outFields),...r]):(0,fieldUtils/* fixFields */.Q0)(t,r)}set effect(e){(0,deprecate/* deprecatedProperty */.Mr)(P,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect=e}get effect(){return (0,deprecate/* deprecatedProperty */.Mr)(P,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){void 0!==e?this._override("featureEffect",e):this._clearOverride("featureEffect")}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){P.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=(0,maybe/* isSome */.pC)(this.filter)?this.filter.createQuery(e):new Query/* default */.Z(e);if("feature"===this.layer.type){const e=(0,floorFilterUtils/* getFloorFilterClause */.cx)(this);(0,maybe/* isSome */.pC)(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return (0,maybe/* isSome */.pC)(this.timeExtent)&&(t.timeExtent=(0,maybe/* isSome */.pC)(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeatures(e,t){const r=this.validateFetchPopupFeatures(t);if(r)throw r;return this.fetchClientPopupFeatures(t)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return (0,arcadeOnDemand/* loadArcade */.LC)()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,o="renderer"in t&&t.renderer,n="orderBy"in t&&t.orderBy,l=t.featureReduction,u=new Set,p=await (0,promiseUtils/* eachAlways */.as)([o?o.collectRequiredFields(u,r):null,(0,fieldUtils/* collectLabelingFields */.Mu)(u,t),e?(0,fieldUtils/* collectElevationFields */.vl)(u,t):null,(0,maybe/* isSome */.pC)(this.filter)?(0,fieldUtils/* collectFilterFields */.Ll)(u,t,this.filter):null,(0,maybe/* isSome */.pC)(this.featureEffect)?(0,fieldUtils/* collectFilterFields */.Ll)(u,t,this.featureEffect.filter):null,l?(0,fieldUtils/* collectFeatureReductionFields */.ZV)(u,t,l):null,n?(0,fieldUtils/* collectOrderByInfos */.Qj)(u,t,n):null]);if(t.timeInfo&&this.timeExtent&&(0,fieldUtils/* collectFields */.gd)(u,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&t.floorInfo&&(0,fieldUtils/* collectFields */.gd)(u,t.fieldsIndex,[t.floorInfo.floorField]),"subtype-group"===t.type){(0,fieldUtils/* collectField */.AB)(u,r,t.subtypeField);const e=t.sublayers.map((e=>{var t;return Promise.all([null==(t=e.renderer)?void 0:t.collectRequiredFields(u,r),(0,fieldUtils/* collectLabelingFields */.Mu)(u,e)])}));await (0,promiseUtils/* eachAlways */.as)(e)}for(const s of p)s.error&&P.error(s.error);(0,fieldUtils/* collectField */.AB)(u,r,i),e&&"displayField"in t&&t.displayField&&(0,fieldUtils/* collectField */.AB)(u,r,t.displayField);const f=Array.from(u).sort();this._set("requiredFields",f)}validateFetchPopupFeatures(e){if((0,maybe/* isNone */.Wi)(e))return null;for(const t of e.clientGraphics){const i=t.layer;if("popupEnabled"in i&&!i.popupEnabled)return new core_Error/* default */.Z("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i});if("popupTemplate"in i){if(!(0,popupUtils/* getFetchPopupTemplate */.V)(i,e))return new core_Error/* default */.Z("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i})}if(t.isAggregate&&!(i.featureReduction&&"popupTemplate"in i.featureReduction&&i.featureReduction.popupEnabled&&i.featureReduction.popupTemplate))return new core_Error/* default */.Z("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})}}async fetchClientPopupFeatures(e){const t=(0,maybe/* isSome */.pC)(e)?e.clientGraphics:null;if(!t||0===t.length)return[];const r=new Array(t.length),i=new Map,o=await this.createPopupQuery(e);for(let a=0;a<t.length;a++){const n=t[a];if(n.isAggregate){r[a]=n;continue}const{layer:l}=n;if(!("popupEnabled"in l))continue;const u=(0,fieldUtils/* unpackFieldNames */.Lk)(this.layer.fieldsIndex,o.outFields),p=(0,popupUtils/* getFetchPopupTemplate */.V)(l,e);if(!(0,maybe/* isSome */.pC)(p))continue;const f=await this._loadArcadeModules(p);f&&f.arcadeUtils.hasGeometryOperations(p)||!(0,fieldUtils/* featureHasFields */.R9)(u,n)?i.set(n.getObjectId(),a):r[a]=n}if("stream"===this.layer.type||0===i.size)return r.filter(Boolean);o.objectIds=Array.from(i.keys());try{const e=await this.layer.queryFeatures(o);for(const t of e.features){r[i.get(t.getObjectId())]=t}}catch{}return r.filter(Boolean)}async createPopupQuery(e){const t=this.layer.createQuery(),r=new Set;let i=!1;const o=(0,maybe/* isSome */.pC)(e)&&e.clientGraphics?e.clientGraphics.map((e=>e.layer)):[this.layer];for(const a of o){if(!("popupEnabled"in a))continue;const t=(0,popupUtils/* getFetchPopupTemplate */.V)(a,e);if(!(0,maybe/* isSome */.pC)(t))continue;const o=await this._loadArcadeModules(t),n=o&&o.arcadeUtils.hasGeometryOperations(t);i=!("point"!==this.layer.geometryType&&!n);const l=await (0,popupUtils/* getRequiredFields */.e)(this.layer,t);for(const e of l)r.add(e)}if(t.returnGeometry=i,t.returnZ=i,t.returnM=i,t.outFields=Array.from(r),t.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=(0,floorFilterUtils/* getFloorFilterClause */.cx)(this);(0,maybe/* isSome */.pC)(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return t}canResume(){return!!super.canResume()&&(!(0,maybe/* isSome */.pC)(this.timeExtent)||!this.timeExtent.isEmpty)}};return (0,tslib_es6._)([(0,property/* property */.Cb)()],O.prototype,"_updatingRequiredFieldsPromise",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],O.prototype,"availableFields",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],O.prototype,"effect",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:FeatureEffect/* default */.Z})],O.prototype,"featureEffect",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:FeatureFilter/* default */.Z})],O.prototype,"filter",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* combinedViewLayerTimeExtentProperty */.qG)],O.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],O.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number})],O.prototype,"maximumNumberOfFeatures",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:Boolean})],O.prototype,"maximumNumberOfFeaturesExceeded",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],O.prototype,"requiredFields",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],O.prototype,"suspended",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],O.prototype,"view",void 0),O=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.layers.FeatureLayerView")],O),O};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/LayerView.js
var LayerView = __webpack_require__(26216);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js
var RefreshableLayerView = __webpack_require__(55068);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/support/drapedUtils.js
var drapedUtils = __webpack_require__(99621);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/capabilities.js
var capabilities = __webpack_require__(35119);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/FeatureLayerView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function Q(e){return e&&"openPorts"in e}const M=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.layers.FeatureLayerView2D");let A=class extends(O((0,RefreshableLayerView/* RefreshableLayerView */.y)((0,LayerView2D/* LayerView2DMixin */.y)(LayerView/* default */.Z)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new FeatureCommandQueue_c({process:e=>{switch(e.type){case"processed-edit":return this._doEdit(e);case"refresh":return this._doRefresh(e.dataChanged);case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._highlightIds=new Map,this._lastPixelBuffer=0,this._updateHighlight=(0,promiseUtils/* debounce */.Ds)((async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys())))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.featureEffectView=new l,this._lastDefinitionExpression=null}destroy(){var e,t;(0,maybe/* andThen */.Po)(this._updateClusterSizeTask,(e=>e.remove())),null==(e=this._proxy)||e.destroy(),null==(t=this.tileRenderer)||t.destroy(),this._commandsQueue.destroy()}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",(e=>{this._set("_aggregateValueRanges",e.valueRanges)})),(0,reactiveUtils/* react */.Ym)((()=>this.featureEffect),(e=>{this.featureEffectView.featureEffect=e}),{initial:!0,sync:!0})])}async _initProxy(){if("isTable"in this.layer&&this.layer.isTable)throw new core_Error/* default */.Z("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});this._proxy&&this._proxy.destroy();const e=this._createClientOptions();return this._set("_proxy",new FeatureLayerProxy_u({client:e})),this._proxy.when()}async _initServiceOptions(){this._set("_serviceOptions",await this._createServiceOptions())}get orderByFields(){return"stream"!==this._serviceOptions.type&&this._serviceOptions.orderByFields}get labelsVisible(){const e="subtype-group"===this.layer.type?this.layer.sublayers.items:[this.layer];return!this.suspended&&e.some((e=>e.labelingInfo&&e.labelsVisible))}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null;const e=this.availableFields,t=this.layer,i=this.view.floors,{definitionExpression:r}=t,s="subtype-group"!==this.layer.type&&this.layer.labelsVisible&&this.layer.labelingInfo,a="renderer"in t&&t.renderer,n="feature"===t.type?t.gdbVersion:void 0,o="feature"===t.type&&t.historicMoment?t.historicMoment.getTime():void 0,{timeExtent:l}=this,u="customParameters"in t?JSON.stringify(t.customParameters):void 0,d="apiKey"in t?t.apiKey:void 0,p="stream"===t.type?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,c=JSON.stringify(this.clips),y=t.featureReduction&&t.featureReduction.toJSON(),f="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),g="sublayers"in this.layer&&this.layer.sublayers.items.reduce(((e,t)=>e+`${t.visible?1:0}.${JSON.stringify(t.renderer)}.${t.labelsVisible}\n.${JSON.stringify(t.labelingInfo)}`),"");return JSON.stringify({orderBy:f,sublayerHash:g,filterHash:(0,maybe/* isSome */.pC)(this.filter)&&this.filter.toJSON(),effectHash:(0,maybe/* isSome */.pC)(this.featureEffect)&&this.featureEffect.toJSON(),streamFilter:p,gdbVersion:n,definitionExpression:r,historicMoment:o,availableFields:e,renderer:a,labelingInfo:s,timeExtent:l,floors:i,clipsHash:c,featureReduction:y,customParameters:u,apiKey:d})}async fetchPopupFeatures(e,t){var i;if((0,maybe/* isSome */.pC)(t)&&0===t.clientGraphics.length)return[];if(!("cluster"===(null==(i=this.layer.featureReduction)?void 0:i.type))){const i=(0,clickToleranceUtils/* calculateTolerance */.k)({renderer:"renderer"in this.layer&&this.layer.renderer,event:(0,maybe/* isSome */.pC)(t)&&t.event}),r=(0,drapedUtils/* createQueryGeometry */.K)(e,i,this.view),{features:s}=await this.queryVisibleFeatures(new Query/* default */.Z({geometry:r,outFields:["*"],returnGeometry:!0}));t=(0,maybe/* isSome */.pC)(t)?t:{};const a=new Set(t.clientGraphics.map((e=>e.getObjectId())));for(const e of s)a.has(e.getObjectId())||t.clientGraphics.push(e)}return super.fetchPopupFeatures(e,t)}highlight(e){var t;let s;return e instanceof Graphic/* default */.Z?s=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?s=[e]:Array.isArray(e)&&e.length>0?s="number"==typeof e[0]||"string"==typeof e[0]?e:e.map((e=>null==e?void 0:e.getObjectId())):Collection/* default.isCollection */.Z.isCollection(e)&&e.length>0&&(s=e.map((e=>null==e?void 0:e.getObjectId())).toArray()),s=null==(t=s)?void 0:t.filter((e=>null!=e)),s&&s.length?(this._addHighlight(s),{remove:()=>this._removeHighlight(s)}):{remove:()=>{}}}hasHighlight(){return!!this._highlightIds.size}async hitTest(e,r){if(!this.tileRenderer)return null;const s=await this.tileRenderer.hitTest(r);if(0===s.length)return null;const{features:a,aggregates:n}=await this._proxy.getFeatures(s);return[...n.map((e=>this._createHittestResult(c.fromJSON(e)))),...a.map((e=>this._createHittestResult(Graphic/* default.fromJSON */.Z.fromJSON(e))))]}async queryAggregates(){return(await this._proxy.getAggregates()).map((e=>c.fromJSON(e)))}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.querySummaryStatistics(this._cleanUpQuery(e),r,i)}async queryUniqueValues(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryUniqueValues(this._cleanUpQuery(e),r,i)}async queryClassBreaks(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryClassBreaks(this._cleanUpQuery(e),r,i)}async queryHistogram(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryHistogram(this._cleanUpQuery(e),r,i)}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then((e=>{const t=FeatureSet["default"].fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))}queryVisibleFeatures(e,t){return this._proxy.queryVisibleFeatures(this._cleanUpQuery(e),t).then((e=>{const t=FeatureSet["default"].fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then((e=>({count:e.count,extent:Extent/* default.fromJSON */.Z.fromJSON(e.extent)})))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update()}update(e){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:t,added:i,removed:r}=this._tileStrategy.update(e);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),t&&this.requestUpdate(),this.notifyChange("updating")}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new TileManager_s({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add((0,watchUtils/* init */.S1)(this,"renderingConfigHash",(()=>this._update())),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",(e=>this._edit(e))),"attach")}detach(){this.container.removeAllChildren(),this.handles.remove("attach"),this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}isUpdating(){var e;const t="renderer"in this.layer&&null!=this.layer.renderer,i=this._commandsQueue.updating,r=null!=this._updatingRequiredFieldsPromise,s=!this._proxy||!this._proxy.isReady,n=this._pipelineIsUpdating,o=null===this.tileRenderer||(null==(e=this.tileRenderer)?void 0:e.updating),l=t&&(i||r||s||n||o);return (0,has/* default */.Z)("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${l}\n  -> hasRenderer ${t}\n  -> hasPendingCommand ${i}\n  -> updatingRequiredFields ${r}\n  -> updatingProxy ${s}\n  -> updatingPipeline ${n}\n  -> updatingTileRenderer ${o}\n`),l}_createClientOptions(){return{setUpdating:e=>{this._set("_pipelineIsUpdating",e)},emitEvent:e=>{this.emit(e.name,e.event)}}}async _detectQueryMode(e){var t;const i="path"in e,r="editingInfo"in this.layer&&(null==(t=this.layer.editingInfo)?void 0:t.lastEditDate),s=!!this.layer.refreshInterval,n=!r&&s;if(i&&("feature"===this.layer.type||"subtype-group"===this.layer.type)&&"point"===this.layer.geometryType&&this.layer.capabilities.query.supportsPagination&&!this.layer.capabilities.operations.supportsEditing&&!n&&(0,has/* default */.Z)("featurelayer-snapshot-enabled"))try{const e=await this.layer.queryFeatureCount();if(e<=(0,has/* default */.Z)("featurelayer-snapshot-point-min-threshold"))return{mode:"snapshot",featureCount:e};const t=(0,has/* default */.Z)("featurelayer-snapshot-point-max-threshold"),i=(0,has/* default */.Z)("featurelayer-snapshot-point-coverage"),r=this.view.extent,s=(0,maybe/* unwrap */.Wg)(this.layer.fullExtent),n=null==s?void 0:s.clone().intersection(r),o=(0,maybe/* isSome */.pC)(n)?n.width*n.height:0,l=(null==s?void 0:s.width)*(null==s?void 0:s.height),d=0===l?0:o/l;if(e<=t&&d>=i)return{mode:"snapshot",featureCount:e}}catch(o){M.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:o})}return{mode:"on-demand"}}async _createServiceOptions(){var e;const t=this.layer;if("stream"===t.type)return null;const{capabilities:i,objectIdField:r}=t,s=t.fields.map((e=>e.toJSON())),a=(0,maybe/* isSome */.pC)(t.fullExtent)&&t.fullExtent.toJSON(),o=(0,util/* toJSONGeometryType */.oq)(t.geometryType),l=t.timeInfo&&t.timeInfo.toJSON()||null,u=t.spatialReference?t.spatialReference.toJSON():null,d="feature"===t.type?t.globalIdField:null;let p;"ogc-feature"===t.type?p=t.source.getFeatureDefinition():Q(t.source)?p=await t.source.openPorts():t.parsedUrl&&(p=(0,lang/* clone */.d9)(t.parsedUrl),"dynamicDataSource"in t&&t.dynamicDataSource&&(p.query={layer:JSON.stringify({source:t.dynamicDataSource})}));const c="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,y=null!=(e="subtypeField"in this.layer&&this.layer.subtypeField)?e:null,{mode:f,featureCount:g}=await this._detectQueryMode(p);let m=this.layer.objectIdField;if("feature"===this.layer.type&&(0,maybe/* isSome */.pC)(this.layer.orderBy)&&this.layer.orderBy.length){const e=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field;e&&(m=e)}return{type:f,timeReferenceUnknownClient:c,subtypeField:y,featureCount:g,globalIdField:d,maxRecordCount:i.query.maxRecordCount,tileMaxRecordCount:i.query.tileMaxRecordCount,capabilities:i,fields:s,fullExtent:a,geometryType:o,objectIdField:r,source:p,timeInfo:l,spatialReference:u,orderByFields:m}}async _createMemoryServiceOptions(e){const t=await e.openPorts();return{...this._createServiceOptions(),type:"memory",source:t}}_cleanUpQuery(e){const t=Query/* default.from */.Z.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(e){if(this._validateEdit(e))return this._commandsQueue.push({type:"edit",edits:e})}async doRefresh(e){return this._commandsQueue.push({type:"refresh",dataChanged:e})}_validateEdit(e){const t="globalIdField"in this.layer&&this.layer.globalIdField,i=e.deletedFeatures.some((e=>-1===e.objectId||!e.objectId)),r=t&&this.availableFields.includes(t);return i&&!r?(M.error(new core_Error/* default */.Z("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)),null):e}async _doUpdate(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return;const{featureEffectView:t,filter:i}=this;await this._updateRequiredFields();const{renderer:r}=this._getEffectiveRenderer();this._set("_effectiveRenderer",r);const s=this._createSchemaConfig(),a=(0,util/* toJSONGeometryType */.oq)(this.layer.geometryType),n=await (0,pixelBuffering/* computePxBuffer */.G)(r,a,this.view.resourceManager,this.layer.fields,this.layer.spatialReference,this.layer.featureReduction),o=this._createConfiguration(s,i,t.filter),l=this._lastDefinitionExpression!==o.definitionExpression;this._lastDefinitionExpression=o.definitionExpression,this._lastPixelBuffer=0===n?0:Math.max(n,this._lastPixelBuffer),o.schema.source.pixelBuffer=this._lastPixelBuffer;const h=this._createTileRendererHash(r);if("snapshot"===this._serviceOptions.type&&(o.schema.source.featureCount=this._serviceOptions.featureCount),h!==this._tileRendererHash){await this._initTileRenderer(r);const e=this._serviceOptions;this.tileRenderer.onConfigUpdate(r);const t=this.layer;"stream"!==t.type&&Q(t.source)&&(e.source=await t.source.openPorts()),"stream"===t.type&&await this._initServiceOptions();const i={added:this._tileStrategy.tileKeys(),removed:[]};await this._proxy.startup(this.view.featuresTilingScheme,o,e,i),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(r)}else{"snapshot"===this._serviceOptions.type&&l&&(o.schema.source.featureCount=await this.layer.queryFeatureCount());const t=await this._proxy.update(o);(t.mesh||t.targets.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(t)}catch(e){(0,promiseUtils/* isAbortError */.D_)(e)||M.error(e)}(t.mesh||t.targets.aggregate)&&this._unlockGPUUploads(),this.tileRenderer.onConfigUpdate(r),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload()}this._tileRendererHash=h,this.tileRenderer.invalidateLabels(),this.requestUpdate()}catch(e){}}async _doEdit(e){try{await this._proxy.onEdits(e)}catch(t){(0,promiseUtils/* isAbortError */.D_)(t),0}}async _doRefresh(e){this._lockGPUUploads();try{await this._proxy.refresh(e)}catch(t){(0,promiseUtils/* isAbortError */.D_)(t),0}this._unlockGPUUploads()}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1)}_createUpdateClusterSizeTask(e,t){return this.watch("_aggregateValueRanges",(async i=>{this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable()}))}async _updateClusterEffectiveRendererSizeVariable(e,t,i){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const r=(0,clusterUtils/* findSizeVV */.os)(e.visualVariables);if((0,maybe/* isSome */.pC)(r)&&"cluster_count"===r.field){const s=e.visualVariables.indexOf(r);e.visualVariables[s]=(0,clusterUtils/* createClusterCountSizeVariable */.aV)(t,i);const a=e.clone();a.dynamicClusterSize=!0,this._set("_effectiveRenderer",a)}}}_getEffectiveRenderer(){const e="renderer"in this.layer&&this.layer.renderer,t=this.layer.featureReduction;if((0,maybe/* isSome */.pC)(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"cluster"===t.type&&(0,clusterUtils/* isClusterCompatibleRenderer */.yR)(e)){const i=t,r=[],s=(0,clusterUtils/* createClusterRenderer */.S1)(r,e,i,this._aggregateValueRanges);return (0,maybe/* andThen */.Po)(this._updateClusterSizeTask,(e=>e.remove())),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,i),{renderer:s,aggregateFields:r,featureReduction:t}}return{renderer:e,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e);return t.once("attach",(()=>{this.requestUpdate()})),t}_releaseTile(e){this.tileRenderer.releaseTile(e)}async _initTileRenderer(e){const t=await tileRenderers_e(e,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=t,this._set("tileRenderer",t),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(e),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return`${"heatmap"===e.type?"heatmap":"symbol"}.${"dot-density"===e.type}`}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return!!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=(0,maybe/* isSome */.pC)(e)?e.timeExtent:null,i=(0,maybe/* isSome */.pC)(this.timeExtent)&&(0,maybe/* isSome */.pC)(t)?this.timeExtent.intersection(t):this.timeExtent||t;let r=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const t=(0,maybe/* isSome */.pC)(e)&&e.where;r=this._addFloorFilterClause(t)}if(!this._visibilityOverrides.size&&!i&&!s)return (0,maybe/* isSome */.pC)(e)?e.toJSON():null;(e=(0,maybe/* isSome */.pC)(e)&&e.clone()||new FeatureFilter/* default */.Z).timeExtent=i,r&&(e.where=r);const a=e.toJSON();return a.hiddenIds=Array.from(this._visibilityOverrides),a}_addFloorFilterClause(e){const t=this.layer;let i=e||"";if("floorInfo"in t&&t.floorInfo){var r;let e=this.view.floors;if(!e||!e.length)return i;null!=(r=t.floorInfo.viewAllLevelIds)&&r.length&&(e=t.floorInfo.viewAllLevelIds);const s=e.filter((e=>""!==e)).map((e=>"'"+e+"'"));s.push("''");const a=t.floorInfo.floorField;let n="("+a+" IN ({ids}) OR "+a+" IS NULL)";if(n=n.replace("{ids}",s.join(", ")),(0,maybe/* isSome */.pC)(i)&&i.includes(a)){let e=new RegExp("AND \\("+a+".*NULL\\)","g");i=i.replace(e,""),e=new RegExp("\\("+a+".*NULL\\)","g"),i=i.replace(e,""),i=i.replace(/\s+/g," ").trim()}i=""!==i?"("+i+") AND "+n:n}return""!==i?i:null}_createConfiguration(e,t,i){const r="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,a=new Array(definitions/* MAX_FILTERS */.m4),n=this._injectOverrides(t);a[0]=n,a[1]=(0,maybe/* isSome */.pC)(i)?i.toJSON():null;const o=(0,schemaUtils.createSchema)(e);if((0,maybe/* isNone */.Wi)(o))return null;const l=(0,capabilities/* default */.Z)();return{definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,gdbVersion:s,historicMoment:r,devicePixelRatio:window.devicePixelRatio||1,filters:a,schema:o,supportsTextureFloat:l.supportsTextureFloat,maxTextureSize:l.maxTextureSize}}_hasRequiredSupport(e){var t;return!("renderer"in e&&"dot-density"===(null==(t=e.renderer)?void 0:t.type)&&!(0,capabilities/* default */.Z)().supportsTextureFloat)||(M.error(new core_Error/* default */.Z("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1)}_onceTilesUpdated(){return this.requestUpdate(),(0,watchUtils/* whenFalseOnce */.OY)(this,"_pipelineIsUpdating",!1)}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads())}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads())}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload()}_createSchemaConfig(){const e="feature"===this.layer.type?this.layer.historicMoment:null,t="feature"===this.layer.type?this.layer.gdbVersion:null;return{renderer:"renderer"in this.layer&&this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:e,labelsVisible:"labelsVisible"in this.layer&&this.layer.labelsVisible,labelingInfo:"labelingInfo"in this.layer&&this.layer.labelingInfo,availableFields:this.availableFields,featureEffect:this.featureEffect,filter:this.filter,gdbVersion:t,pixelBuffer:0,orderBy:"orderBy"in this.layer&&this.layer.orderBy?this.layer.orderBy:null,customParameters:{..."customParameters"in this.layer?this.layer.customParameters:void 0,token:"apiKey"in this.layer?this.layer.apiKey:void 0}}}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight().catch((e=>{(0,promiseUtils/* isAbortError */.D_)(e)||M.error(e)}))}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight().catch((e=>{(0,promiseUtils/* isAbortError */.D_)(e)||M.error(e)}))}_setLayersForFeature(e){const t=this.layer;e.layer=t,e.sourceLayer=t}_createHittestResult(e){return this._setLayersForFeature(e),(0,maybe/* isSome */.pC)(e.geometry)&&(e.geometry.spatialReference=this.view.spatialReference),e}};(0,tslib_es6._)([(0,property/* property */.Cb)()],A.prototype,"_serviceOptions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],A.prototype,"_proxy",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],A.prototype,"_pipelineIsUpdating",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],A.prototype,"_effectiveRenderer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],A.prototype,"_aggregateValueRanges",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],A.prototype,"_commandsQueue",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],A.prototype,"featureEffectView",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],A.prototype,"labelsVisible",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],A.prototype,"queryMode",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],A.prototype,"renderingConfigHash",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],A.prototype,"tileRenderer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],A.prototype,"updating",void 0),A=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.FeatureLayerView2D")],A);const D=A;


/***/ }),

/***/ 81666:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xS": () => (/* binding */ cimSymbolUtils_i),
  "B3": () => (/* binding */ cimSymbolUtils_l)
});

// UNUSED EXPORTS: expandSymbols

// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/cim/cimAnalyzer.js
var cimAnalyzer = __webpack_require__(75312);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js
var enums = __webpack_require__(38716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/materialKey/MaterialKey.js
var MaterialKey = __webpack_require__(89106);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/symbols/cim/ExpandedCIM.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={marker:enums/* WGLGeometryType.MARKER */.LW.MARKER,fill:enums/* WGLGeometryType.FILL */.LW.FILL,line:enums/* WGLGeometryType.LINE */.LW.LINE,text:enums/* WGLGeometryType.TEXT */.LW.TEXT};class l{constructor(e,l,s,n){const r={minScale:null==l?void 0:l.minScale,maxScale:null==l?void 0:l.maxScale},c=i(r);this.layers=e,this.data=l,this.hash=this._createHash()+c,this.rendererKey=s;const m={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:s};for(const i of e){const e=a[i.type];i.materialKey=(0,MaterialKey/* createMaterialKey */.jj)(e,m),i.maxVVSize=n,i.scaleInfo=r,i.templateHash+=c}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function i(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/devEnvironmentUtils.js
var devEnvironmentUtils = __webpack_require__(57989);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/Portal.js + 1 modules
var Portal = __webpack_require__(26869);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(16641);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/styleUtils.js + 1 modules
var styleUtils = __webpack_require__(38453);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/webStyleUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function y(t,r,n){if(!t.name)return Promise.reject(new Error/* default */.Z("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName)return f(t,n);try{return p(await (0,styleUtils/* fetchStyle */.n2)(t,r,n),t.name,r,n)}catch(s){return (0,promiseUtils/* throwIfAborted */.k_)(s),null}}async function f(t,r){const e=styleUtils/* Style2DUrlTemplate.replace */.wm.replace(/\{SymbolName\}/gi,t.name);try{const t=await (0,styleUtils/* requestJSON */.EJ)(e,r);return (0,styleUtils/* makeCIMSymbolRef */.KV)(t.data)}catch(n){return (0,promiseUtils/* throwIfAborted */.k_)(n),null}}async function p(m,a,y,f){const p=m.data,b={portal:y&&y.portal||Portal/* default.getDefault */.Z.getDefault(),url:(0,urlUtils/* urlToObject */.mN)(m.baseUrl),origin:"portal-item"},d=p.items.find((t=>t.name===a));if(!d){throw new Error/* default */.Z("symbolstyleutils:symbol-name-not-found",`The symbol name '${a}' could not be found`,{symbolName:a})}let j=(0,persistableUrlUtils.f)((0,styleUtils/* symbolUrlFromStyleItem */.v9)(d,"cimRef"),b);(0,devEnvironmentUtils/* isDevEnvironment */.XO)()&&(j=(0,devEnvironmentUtils/* adjustStaticAGOUrl */.pJ)(j));try{const t=await (0,styleUtils/* requestJSON */.EJ)(j,f);return (0,styleUtils/* makeCIMSymbolRef */.KV)(t.data)}catch(U){return (0,promiseUtils/* throwIfAborted */.k_)(U),null}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/cimSymbolUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=async(e,t,a,r)=>Promise.all(e.map((e=>cimSymbolUtils_l(e,t,a,r)))),n=async(a,r,n)=>new l(await (0,cimAnalyzer/* analyzeCIMSymbol */.c)(a.data,r,n),a.data,a.rendererKey,a.maxVVSize),cimSymbolUtils_l=async(e,t,r,l)=>{if(!e)return null;if("cim"===e.type)return n(e,t,r);if("web-style"===e.type){const i={type:"cim",data:await y(e,null,l),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return n(i,t,r)}return e};function cimSymbolUtils_i(e){if(!e)return null;const{type:t,cim:a,url:r,materialHash:n}=e,l={cim:a,type:t,mosaicHash:n,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(t){case"marker":l.size=e.size,l.path=e.path;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName}return l}


/***/ }),

/***/ 55068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ i)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36663);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13802);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78668);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15071);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add((0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__.on)(this,"layer","refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isAbortError */ .D_)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getLogger */ .Z.getLogger(this.declaredClass).error(r)}))})),"RefreshableLayerView")}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)()],c.prototype,"layer",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .j)("esri.layers.mixins.RefreshableLayerView")],c),c};


/***/ }),

/***/ 59439:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ d),
/* harmony export */   "e": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61681);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17095);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,d=t.popupTemplate){if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(d))return[];const i=await d.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=d,{objectIdField:s,typeIdField:a,globalIdField:o,relationships:u}=t;if(i.includes("*"))return["*"];const f=n?await (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getFeatureEditFields */ .CH)(t):[],r=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .fixFields */ .Q0)(t.fieldsIndex,[...i,...f]);return a&&r.push(a),r&&s&&t.fieldsIndex.has(s)&&-1===r.indexOf(s)&&r.push(s),r&&o&&t.fieldsIndex.has(o)&&-1===r.indexOf(o)&&r.push(o),u&&u.forEach((e=>{const{keyField:p}=e;r&&p&&t.fieldsIndex.has(p)&&-1===r.indexOf(p)&&r.push(p)})),r}function d(p,l){return p.popupTemplate?p.popupTemplate:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(l)&&l.defaultPopupTemplateEnabled&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}


/***/ }),

/***/ 99621:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export intersectsDrapedGeometry */
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61681);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17321);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91772);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(t,n,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(o)&&!o.equals(a.spatialReference)?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getMetersPerUnitForSR */ .c9)(o)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getMetersPerUnitForSR */ .c9)(a.spatialReference):n*i}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}function o(e,r,i){const o=i.toMap(e);if(t(o))return!1;return a(o,n(),i,s).intersects(r)}const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;


/***/ }),

/***/ 89280:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": () => (/* binding */ l),
/* harmony export */   "cx": () => (/* binding */ o),
/* harmony export */   "ff": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){var n;const l=o.layer;if("floorInfo"in l&&null!=(n=l.floorInfo)&&n.floorField&&"floors"in o.view){return r(o.view.floors,l.floorInfo.floorField)}return null}function n(o,n){var l;return"floorInfo"in n&&null!=(l=n.floorInfo)&&l.floorField?r(o,n.floorInfo.floorField):null}function l(o,n){const{definitionExpression:l}=n;return o?l?`(${l}) AND (${o})`:o:l}function r(o,n){if(null==o||!o.length)return null;const l=o.filter((o=>""!==o)).map((o=>`'${o}'`));return l.push("''"),`${n} IN (${l.join(",")}) OR ${n} IS NULL`}


/***/ })

};
;
//# sourceMappingURL=2982.render-page.js.map