"use strict";
exports.id = 2052;
exports.ids = [2052];
exports.modules = {

/***/ 91103:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lm": () => (/* binding */ j),
/* harmony export */   "CS": () => (/* binding */ g),
/* harmony export */   "Yu": () => (/* binding */ b),
/* harmony export */   "Cw": () => (/* binding */ d),
/* harmony export */   "j5": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51366);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88256);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80020);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66341);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67134);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3466);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14685);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37116);
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79880);
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72506);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51211);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const o=e.folders||[],t=o.slice(),r=new Map,n=new Map,i=new Map,f=new Map,a=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const o=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .d9)(e);o.featureSet.features=[];const t=e.featureSet.geometryType;r.set(t,o);const a=e.layerDefinition.objectIdField;"esriGeometryPoint"===t?G(n,a,e.featureSet.features):"esriGeometryPolyline"===t?G(i,a,e.featureSet.features):"esriGeometryPolygon"===t&&G(f,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e)})),o.forEach((o=>{o.networkLinkIds.forEach((r=>{const s=P(r,o.id,e.networkLinks);s&&t.push(s)}))})),t.forEach((e=>{if(e.featureInfos){e.points=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .d9)(r.get("esriGeometryPoint")),e.polylines=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .d9)(r.get("esriGeometryPolyline")),e.polygons=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .d9)(r.get("esriGeometryPolygon")),e.mapImages=[];for(const o of e.featureInfos)switch(o.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l[o.type].get(o.id);t&&e[c[o.type]].featureSet.features.push(t);break}case"GroundOverlay":{const t=a.get(o.id);t&&e.mapImages.push(t);break}}e.fullExtent=j([e])}}));const u=j(t);return{folders:o,sublayers:t,extent:u}}function g(t,s,i,f){const a=_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id&&_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.findCredential(t);t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .addQueryParameters */ .fl)(t,{token:a&&a.token});const l=_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].kmlServiceUrl */ .Z.kmlServiceUrl;return (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(l,{query:{url:t,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:f})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,f=o.folders.map((e=>e.id));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&f.indexOf(i.id)>-1&&(i.visible=-1!==r.indexOf(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i)}else s.unshift(i)})),s}function G(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t)}))}function h(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}function P(e,o,t){const r=h(e,t);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function b(e){const o=_rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(e.featureSet).features,r=e.layerDefinition,s=(0,_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .fromJSON */ .i)(r.drawingInfo.renderer),n=_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].fromJSON */ .Z.fromJSON(e.popupInfo),i=[];for(const t of o){const e=await s.getSymbolAsync(t);t.symbol=e,t.popupTemplate=n,t.visible=!0,i.push(t)}return i}function j(e){const o=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .create */ .Ue)(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .NEGATIVE_INFINITY */ .Gv),t=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .create */ .Ue)(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .NEGATIVE_INFINITY */ .Gv);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getBoundsXYZ */ .Yg)(o,e.geometry),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .expandWithAABB */ .TC)(t,o);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getBoundsXYZ */ .Yg)(o,e.geometry),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .expandWithAABB */ .TC)(t,o);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getBoundsXYZ */ .Yg)(o,e.geometry),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .expandWithAABB */ .TC)(t,o);if(r.mapImages)for(const e of r.mapImages)(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getBoundsXYZ */ .Yg)(o,e.extent),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .expandWithAABB */ .TC)(t,o)}return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .equals */ .fS)(t,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .NEGATIVE_INFINITY */ .Gv)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"].WGS84 */ .Z.WGS84}}


/***/ }),

/***/ 86602:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eY": () => (/* binding */ g)
/* harmony export */ });
/* unused harmony exports isImageSource, rasterize */
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61681);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1662);
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19710);
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55542);
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51118);
/* harmony import */ var _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7349);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43487);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(t){return t&&"render"in t}function l(t){return t&&!("render"in t)}function x(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function _(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z(t,s)}class g extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_3__/* .DisplayObject */ .s{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__.c)()}}setTransform(t){const n=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.transforms.dvs),[o,a]=t.toScreenNoRotation([0,0],[this.x,this.y]),d=this.resolution/this.pixelRatio/t.resolution,c=d*this.width,l=d*this.height,x=Math.PI*this.rotation/180;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__.f)(o,a)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__.f)(c/2,l/2)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.r)(n,n,-x),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__.f)(-c/2,-l/2)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.j)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__.f)(c,l)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.m)(this.transforms.dvs,t.displayViewMat3,n)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}updateTexture(e){var i;if(!this.stage)return null==(i=this._texture)||i.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=_(e,this.sourceWidth,this.sourceHeight):this._texture=_(e));const s=this.source;if(s){if(this._texture.resize(this.sourceWidth,this.sourceHeight),c(s))if(s instanceof _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z){const e=s.getRenderedRasterPixels();this._texture.setData((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isSome */ .pC)(e)?e.renderedRasterPixels:null)}else this._texture.setData(x(s));else l(s)&&this._texture.setData(s);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}


/***/ }),

/***/ 12688:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14351);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38716);
/* harmony import */ var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10994);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_0__/* .brushes.bitmap */ .U.bitmap],target:()=>this.children,drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLDrawPhase.MAP */ .jx.MAP});return[...super.prepareRenderPasses(s),t]}}


/***/ }),

/***/ 7349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const i=this.pixelBlock;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isNone */ .Wi)(i))return;const l=this.filter({pixelBlock:i});if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isNone */ .Wi)(l.pixelBlock))return;const r=l.pixelBlock.getAsRGBA(),o=e.createImageData(l.pixelBlock.width,l.pixelBlock.height);o.data.set(r),e.putImageData(o,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isNone */ .Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}


/***/ }),

/***/ 22052:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(36663);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88256);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66341);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66591);
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44584);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(61681);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3466);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40266);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91772);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(76117);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14685);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39536);
/* harmony import */ var _layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91103);
/* harmony import */ var _rest_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84238);
/* harmony import */ var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94449);
/* harmony import */ var _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86602);
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(12688);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(80347);
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(68114);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(57971);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(26216);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class C{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let j=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_19__/* .LayerView2DMixin */ .y)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)){constructor(){super(...arguments),this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,this._bitmapIndex=new Map,this._mapImageContainer=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_18__/* .BitmapContainer */ .c,this._kmlVisualData=new C,this.allVisiblePoints=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_16__/* .GraphicsCollection */ .J,this.allVisiblePolylines=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_16__/* .GraphicsCollection */ .J,this.allVisiblePolygons=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_16__/* .GraphicsCollection */ .J,this.allVisibleMapImages=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}async hitTest(e,i){var t,s,a;return(await Promise.all([null==(t=this._pointsView)?void 0:t.hitTest(e),null==(s=this._polylinesView)?void 0:s.hitTest(e),null==(a=this._polygonsView)?void 0:a.hitTest(e)])).flat().filter((e=>!!e&&(e.layer=this.layer,e.sourceLayer=this.layer,!0)))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)))}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1)}this._refreshCollections()})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating")}))}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&(0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.href,{responseType:"image"}).then((({data:i})=>{let t=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"].fromJSON */ .Z.fromJSON(e.extent);(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .canProject */ .Q8)(t,this.view.spatialReference)&&(t=(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .project */ .iV)(t,this.view.spatialReference));const s=new _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_17__/* .Bitmap */ .eY(i,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/i.naturalWidth,s.rotation=e.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(e,s)}))}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:a,httpQuery:h}=e;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_23__/* .isSome */ .pC)(s)){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_23__/* .isNone */ .Wi)(t))throw new Error("Loading this network link requires a view state.");let p;if(await (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__/* .load */ .zD)(),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_23__/* .isSome */ .pC)(a)&&1!==a){const e=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z(t.extent);e.expand(a),p=e}else p=t.extent;p=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__/* .project */ .iV)(p,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"].WGS84 */ .Z.WGS84);const w=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__/* .project */ .iV)(p,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"].WebMercator */ .Z.WebMercator),g=p.xmin,u=p.xmax,_=p.ymin,V=p.ymax,f=t.size[0]*t.pixelRatio,v=t.size[1]*t.pixelRatio,S=Math.max(w.width,w.height),I={"[bboxWest]":g.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":p.center.x.toString(),"[lookatLat]":p.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":p.center.x.toString(),"[lookatTerrainLat]":p.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":p.center.x.toString(),"[cameraLat]":p.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":_kernel_js__WEBPACK_IMPORTED_MODULE_0__/* .version */ .i8,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},x=e=>{for(const i in e)for(const t in I)e[i]=e[i].replace(t,I[t])},P=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .queryToObject */ .u0)(s);x(P);let k={};(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_23__/* .isSome */ .pC)(h)&&(k=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .queryToObject */ .u0)(h),x(k));const C=(0,_rest_utils_js__WEBPACK_IMPORTED_MODULE_15__/* .parseUrl */ .en)(e.href);C.query={...C.query,...P,...k};return`${C.path}?${(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .objectToQuery */ .B7)(P)}`}return e.href}async _fetchService(){const e=new C;await this._loadVisualData(this.layer.url,e),this._kmlVisualData=e,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)))}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return!!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i){return this._fetchParsedKML(e).then((async e=>{for(const t of e.sublayers){i.allSublayers.set(t.id,t);const e=t.points?await (0,_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .getGraphics */ .Yu)(t.points):[],s=t.polylines?await (0,_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .getGraphics */ .Yu)(t.polylines):[],a=t.polygons?await (0,_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .getGraphics */ .Yu)(t.polygons):[],o=t.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:t.id})))),i.allPolylines.push(...s.map((e=>({item:e,sublayerId:t.id})))),i.allPolygons.push(...a.map((e=>({item:e,sublayerId:t.id})))),i.allMapImages.push(...o.map((e=>({item:e,sublayerId:t.id})))),t.networkLink){const e=await this._getViewDependentUrl(t.networkLink,this.view.state);await this._loadVisualData(e,i)}}}))}_fetchParsedKML(e){return (0,_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .fetchService */ .CS)(e,this.view.spatialReference,this.layer.refreshInterval).then((e=>(0,_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .parseKML */ .Cw)(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_24__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .Cb)()],j.prototype,"_pointsView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_24__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .Cb)()],j.prototype,"_polylinesView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_24__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .Cb)()],j.prototype,"_polygonsView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_24__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .Cb)()],j.prototype,"_fetchingPromise",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_24__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .Cb)()],j.prototype,"updating",void 0),j=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_24__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .j)("esri.views.2d.layers.KMLLayerView2D")],j);const M=j;


/***/ }),

/***/ 68114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38716);
/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26204);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z{renderChildren(r){this.attributeView.bindTextures(r.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .WGLDrawPhase.MAP */ .jx.MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .WGLDrawPhase.HIGHLIGHT */ .jx.HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}


/***/ })

};
;
//# sourceMappingURL=2052.render-page.js.map