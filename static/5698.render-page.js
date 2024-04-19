"use strict";
exports.id = 5698;
exports.ids = [5698];
exports.modules = {

/***/ 5698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ OGCFeatureLayerView2D_a)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/set.js
var set = __webpack_require__(33156);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/FeatureLayerView2D.js + 7 modules
var FeatureLayerView2D = __webpack_require__(53932);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/layers/OGCFeatureLayerView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=a=>{let o=class extends a{initialize(){const{layer:e,view:s}=this;e.source.supportsSpatialReference(s.spatialReference)||this.addResolvingPromise(Promise.reject(new Error/* default */.Z("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})))}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return (0,tslib_es6._)([(0,property/* property */.Cb)()],o.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],o.prototype,"availableFields",null),o=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.layers.OGCFeatureLayerView")],o),o};

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/OGCFeatureLayerView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends(a(FeatureLayerView2D["default"])){};t=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const OGCFeatureLayerView2D_a=t;


/***/ })

};
;
//# sourceMappingURL=5698.render-page.js.map