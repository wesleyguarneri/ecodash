"use strict";
exports.id = 3667;
exports.ids = [3667];
exports.modules = {

/***/ 13667:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLabelFunction": () => (/* binding */ f),
/* harmony export */   "formatField": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13802);
/* harmony import */ var _intl_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72057);
/* harmony import */ var _intl_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25741);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17095);
/* harmony import */ var _labelUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1110);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30879);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLogger */ .Z.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},c={getAttribute:(e,t)=>e.field(t)};async function f(t,r,a){if(!t||!t.symbol)return p;const n=t.where,o=(0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .getLabelExpression */ .hV)(t),f=n?await __webpack_require__.e(/* import() */ 3362).then(__webpack_require__.bind(__webpack_require__, 3362)):null;let d;if("arcade"===o.type){const t=await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_6__/* .createLabelExpression */ .WW)(o.expression,a,r);d={type:"arcade",evaluate(r){try{const e=t.evaluate({$feature:"attributes"in r?t.repurposeFeature(r):t.repurposeAdapter(r)});if(null!=e)return e.toString()}catch(a){u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:r,expression:o}))}return null},needsHydrationToEvaluate:()=>null==(0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .getSingleFieldArcadeExpression */ .el)(o.expression)}}else d={type:"simple",evaluate:e=>o.expression.replace(/{[^}]*}/g,(t=>{const a=t.slice(1,-1),n=r.get(a);if(!n)return t;let o=null;if("attributes"in e){e&&e.attributes&&(o=e.attributes[n.name])}else o=e.field(n.name);return null==o?"":m(o,n)}))};if(n){let e;try{e=f.WhereClause.create(n,r)}catch(y){return p}const t=d.evaluate;d.evaluate=r=>{const a="attributes"in r?void 0:c;return e.testFeature(r,a)?t(r):null}}return d}function m(e,t){if(null==e)return"";const l=t.domain;if(l)if("codedValue"===l.type||"coded-value"===l.type){const t=e;for(const e of l.codedValues)if(e.code===t)return e.name}else if("range"===l.type){const t=+e,r="range"in l?l.range[0]:l.minValue,a="range"in l?l.range[1]:l.maxValue;if(r<=t&&t<=a)return l.name}let i=e;return"date"===t.type||"esriFieldTypeDate"===t.type?i=(0,_intl_date_js__WEBPACK_IMPORTED_MODULE_2__/* .formatDate */ .p6)(i,(0,_intl_date_js__WEBPACK_IMPORTED_MODULE_2__/* .convertDateFormatToIntlOptions */ .Ze)("short-date")):(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isNumericField */ .H7)(t)&&(i=(0,_intl_number_js__WEBPACK_IMPORTED_MODULE_3__/* .formatNumber */ .uf)(+i)),i||""}


/***/ })

};
;
//# sourceMappingURL=3667.render-page.js.map