"use strict";
exports.id = 8060;
exports.ids = [8060];
exports.modules = {

/***/ 8060:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGeometryServiceURL": () => (/* binding */ i),
/* harmony export */   "projectGeometry": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51366);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70375);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26869);
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94466);
/* harmony import */ var _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41268);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i(o=null,n){var i,l;if(_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].geometryServiceUrl */ .Z.geometryServiceUrl)return _config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].geometryServiceUrl */ .Z.geometryServiceUrl;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("internal:geometry-service-url-not-configured");let a;a="portal"in o?o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getDefault */ .Z.getDefault():o,await a.load({signal:n});const c=null==(i=a.helperServices)||null==(l=i.geometry)?void 0:l.url;if(!c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("internal:geometry-service-url-not-configured");return c}async function l(r,t,l=null,a){const c=await i(l,a),s=new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;s.geometries=[r],s.outSpatialReference=t;const m=await (0,_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__/* .project */ .i)(c,s,{signal:a});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("internal:geometry-service-projection-failed")}


/***/ })

};
;
//# sourceMappingURL=8060.render-page.js.map