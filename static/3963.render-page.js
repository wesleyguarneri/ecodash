"use strict";
exports.id = 3963;
exports.ids = [3963];
exports.modules = {

/***/ 53963:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ M)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(80020);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var ClassBreaksRenderer = __webpack_require__(86004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/DictionaryRenderer.js
var DictionaryRenderer = __webpack_require__(45510);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/DotDensityRenderer.js + 2 modules
var DotDensityRenderer = __webpack_require__(66908);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/HeatmapRenderer.js + 1 modules
var HeatmapRenderer = __webpack_require__(2802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(22836);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(50172);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js
var UniqueValueRenderer = __webpack_require__(25634);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(72506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/types.js
var types = __webpack_require__(54021);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(15842);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(59659);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js
var Layer = __webpack_require__(76136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(68309);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/ogc/ogcFeatureUtils.js
var ogcFeatureUtils = __webpack_require__(53237);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(51211);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/OGCFeatureSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let v=class extends Loadable/* default */.Z{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:r},layer:{apiKey:o,capabilities:i,customParameters:p}}=this;return{capabilities:i,collection:e,layerDefinition:t,queryParameters:{apiKey:o,customParameters:p},spatialReference:s,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then((e=>FeatureSet["default"].fromJSON(e)))}queryFeaturesJSON(e,t={}){const s=this.getFeatureDefinition();return this.load(t).then((()=>(0,ogcFeatureUtils/* queryFeatureSetJSON */.yN)(s,e,t)))}queryObjectIds(e,t={}){return null}supportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var s;const r=new RegExp(`^${t}$`,"i");return null!=(s=e.conformsTo.some((e=>r.test(e))))&&s}_getCapabilities(e,t){var s,o,i,p,a,n,u;const l=(0,maybe/* isSome */.pC)(t)?null==(s=t.components)?void 0:s.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(o=null!=(i=null==l||null==(p=l.limit)||null==(a=p.schema)?void 0:a.maximum)?i:null==l||null==(n=l.limitFeatures)||null==(u=n.schema)?void 0:u.maximum)?o:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const s=null==(t=e.extent)?void 0:t.spatial;if(!s)return null;const r=s.bbox[0],o=4===r.length,i=r[0],p=r[1],a=o?void 0:r[2];return{xmin:i,ymin:p,xmax:o?r[2]:r[3],ymax:o?r[3]:r[4],zmin:a,zmax:o?void 0:r[5],spatialReference:SpatialReference/* default.WGS84.toJSON */.Z.WGS84.toJSON()}}_getStorageSpatialReference(e){var t;const s=null!=(t=e.storageCrs)?t:ogcFeatureUtils/* crsDefault */.$9,r=(0,ogcFeatureUtils/* getSpatialReferenceWkid */.d)(s);return (0,maybe/* isNone */.Wi)(r)?SpatialReference/* default.WGS84 */.Z.WGS84:new SpatialReference/* default */.Z({wkid:r})}_getSupportedSpatialReferences(e,t){var s;const r="#/crs",o=null!=(s=e.crs)?s:[ogcFeatureUtils/* crsDefault */.$9],i=o.includes(r)?o.filter((e=>e!==r)).concat(t.crs):o,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter((e=>!p.test(e)))}async _loadOGCServices(e,s){const o=(0,maybe/* isSome */.pC)(s)?s.signal:null,{apiKey:i,collectionId:p,customParameters:a,fields:y,geometryType:h,hasZ:g,objectIdField:v,timeInfo:x,url:R}=e,w={fields:null==y?void 0:y.map((e=>e.toJSON())),geometryType:typeUtils/* typeKebabDictionary.toJSON */.P$.toJSON(h),hasZ:g,objectIdField:v,timeInfo:null==x?void 0:x.toJSON()},C={apiKey:i,customParameters:a,signal:o},j=await (0,ogcFeatureUtils/* getServerLandingPage */.gp)(R,C),[O,F]=await Promise.all([(0,ogcFeatureUtils/* getServerConformance */.G4)(j,C),(0,ogcFeatureUtils/* getServerCollections */.j)(j,C)]);if(!this._conformsToType(O,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new Error/* default */.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");const b=F.collections.find((e=>e.id===p));if(!b)throw new Error/* default */.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const D=this._conformsToType(O,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await (0,ogcFeatureUtils/* getServerOpenApi */.eS)(j,C):null,P=await (0,ogcFeatureUtils/* getCollectionDefinition */.w9)(b,w,C),T=this._getCapabilities(P.hasZ,D),_=this._getExtent(b),q=this._getStorageSpatialReference(b).toJSON(),E=this._getSupportedSpatialReferences(b,F),G=new RegExp(`^${ogcFeatureUtils/* crsPrefix */.Lu}`,"i"),I={};for(const t of E){const e=(0,ogcFeatureUtils/* getSpatialReferenceWkid */.d)(t);(0,maybe/* isSome */.pC)(e)&&(I[e]||(I[e]=t.replace(G,"")))}P.extent=_,this.featureDefinition={capabilities:T,collection:b,layerDefinition:P,queryParameters:{},spatialReference:q,supportedCrs:I}}};(0,tslib_es6._)([(0,property/* property */.Cb)()],v.prototype,"featureDefinition",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0})],v.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],v.prototype,"type",void 0),v=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.graphics.sources.OGCFeatureSource")],v);const x=v;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(91223);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(27668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(63989);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js
var FeatureEffectLayer = __webpack_require__(22368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(43330);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OrderedLayer.js + 1 modules
var OrderedLayer = __webpack_require__(50386);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(18241);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(12478);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(95874);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var TemporalLayer = __webpack_require__(2030);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(51599);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureReductionUtils.js + 3 modules
var featureReductionUtils = __webpack_require__(94759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FeatureType.js
var FeatureType = __webpack_require__(18160);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(12512);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(89076);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js + 1 modules
var fieldUtils = __webpack_require__(17095);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LabelClass.js + 1 modules
var LabelClass = __webpack_require__(26732);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(49341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(10171);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/OGCFeatureLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const B=(0,fieldProperties/* defineFieldProperties */.v)();let V=class extends((0,APIKeyMixin/* APIKeyMixin */.V)((0,CustomParametersMixin/* CustomParametersMixin */.N)((0,FeatureEffectLayer/* FeatureEffectLayer */.b)((0,BlendLayer/* BlendLayer */.h)((0,OrderedLayer/* OrderedLayer */.c)((0,TemporalLayer/* TemporalLayer */.n)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.I)((0,RefreshableLayer/* RefreshableLayer */.Q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)(Layer/* default */.Z)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new x({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,fieldUtils/* fixRendererFields */.YN)(e,this.fieldsIndex),this._set("renderer",e)}on(e,r){return super.on(e,r)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.eZ)(this,e)}createQuery(){return new Query/* default */.Z}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var t;let i,o=!1;const s=null==r||null==(t=r.feature)?void 0:t.attributes,n=this.typeIdField&&(null==s?void 0:s[this.typeIdField]);return null!=n&&this.types&&(o=this.types.some((r=>{var t,o;return r.id==n&&(i=null==(t=r.domains)?void 0:t[e],"inherited"===(null==(o=i)?void 0:o.type)&&(i=this._getLayerDomain(e)),!0)}))),o||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(Query/* default.from */.Z.from(e)||this.createQuery(),r))).then((e=>{var r;return null==e||null==(r=e.features)||r.forEach((e=>{e.layer=e.sourceLayer=this})),e}))}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,fieldUtils/* fixRendererFields */.YN)(this.renderer,this.fieldsIndex),(0,fieldUtils/* fixTimeInfoFields */.UF)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],V.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],V.prototype,"collectionId",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],V.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],V.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],V.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],V.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],V.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* elevationInfo */.PV)],V.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(featureReductionUtils/* featureReductionProperty */.d)],V.prototype,"featureReduction",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Field/* default */.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],V.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(B.fieldsIndex)],V.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:Extent/* default */.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],V.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:typeUtils/* featureGeometryTypeKebabDictionary.apiValues */.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:typeUtils/* featureGeometryTypeKebabDictionary.read */.Mk.read}}}}})],V.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],V.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,readOnly:!0})],V.prototype,"isTable",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[LabelClass/* default */.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:labelingInfo/* reader */.r},write:!0}}}})],V.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* labelsVisible */.iR)],V.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* legendEnabled */.rn)],V.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],V.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["OGCFeatureLayer"]})],V.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* popupEnabled */.C_)],V.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:PopupTemplate/* default */.Z,json:{name:"popupInfo",write:!0}})],V.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({types:types/* rendererTypes */.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:types/* webSceneRendererTypes */.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],V.prototype,"renderer",null),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* screenSizePerspectiveEnabled */.YI)],V.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],V.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:SpatialReference/* default */.Z,json:{origins:{service:{read:!0}}}})],V.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],V.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{read:!1}})],V.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0})],V.prototype,"typeIdField",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[FeatureType/* default */.Z]})],V.prototype,"types",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* url */.HQ)],V.prototype,"url",void 0),V=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.OGCFeatureLayer")],V);const M=V;


/***/ }),

/***/ 10287:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0};


/***/ }),

/***/ 61957:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lG": () => (/* binding */ L),
/* harmony export */   "q9": () => (/* binding */ i),
/* harmony export */   "my": () => (/* binding */ T),
/* harmony export */   "O3": () => (/* binding */ O)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59958);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15540);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17095);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function i(e){return r[e]}function*s(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function*u(e,o={}){const{geometryType:r,objectIdField:s}=o;for(const u of e){var c;const{geometry:e,properties:l,id:f}=u;if(e&&i(e.type)!==r)continue;const a=l||{};let y=null!=(c=a[s])?c:null;s&&null!=f&&!a[s]&&(a[s]=y=f);const p=new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP(e?d(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,e,o):null,a,null,y);yield p}}function l(e){for(const t of e)if(t.length>2)return!0;return!1}function f(e){return!y(e)}function a(e){return y(e)}function y(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function p(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function d(e,t,n){switch(t.type){case"LineString":return g(e,t,n);case"MultiLineString":return m(e,t,n);case"MultiPoint":return h(e,t,n);case"MultiPolygon":return w(e,t,n);case"Point":return P(e,t,n);case"Polygon":return b(e,t,n)}}function g(e,t,n){return F(e,t.coordinates,n),e}function m(e,t,n){for(const o of t.coordinates)F(e,o,n);return e}function h(e,t,n){return F(e,t.coordinates,n),e}function w(e,t,n){for(const o of t.coordinates){j(e,o[0],n);for(let t=1;t<o.length;t++)S(e,o[t],n)}return e}function P(e,t,n){return M(e,t.coordinates,n),e}function b(e,t,n){const o=t.coordinates;j(e,o[0],n);for(let r=1;r<o.length;r++)S(e,o[r],n);return e}function j(e,t,n){const o=p(t);f(o)?G(e,o,n):F(e,o,n)}function S(e,t,n){const o=p(t);a(o)?G(e,o,n):F(e,o,n)}function F(e,t,n){for(const o of t)M(e,o,n);e.lengths.push(t.length)}function G(e,t,n){for(let o=t.length-1;o>=0;o--)M(e,t[o],n);e.lengths.push(t.length)}function M(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0)}function k(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function O(t){if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==t.type&&"FeatureCollection"!==t.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:n}=t;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function T(e,t={}){const n=[],r=new Set,u=new Set;let f,a=!1,y=null,p=!1,{geometryType:d=null}=t,g=!1;for(const o of s(e)){const{geometry:e,properties:t,id:s}=o;if(!e||(d||(d=i(e.type)),i(e.type)===d)){if(!a){a=l(c(e))}if(p||(p=null!=s,p&&(f=typeof s,y=Object.keys(t).filter((e=>t[e]===s)))),p&&null!=s&&(y.length>1?y=y.filter((e=>t[e]===s)):1===y.length&&(y=t[y[0]]===s?y:[])),!g&&t){let e=!0;for(const o in t){if(r.has(o))continue;const i=t[o];if(null==i){e=!1,u.add(o);continue}const s=k(i);"unknown"!==s?(u.delete(o),r.add(o),n.push({name:o,alias:o,type:s})):u.add(o)}g=e}}}const m=y&&1===y.length&&y[0]||null;if(m)for(const i of n)if(i.name===m&&(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isNumericField */ .H7)(i)){i.type="esriFieldTypeOID";break}return{fields:n,geometryType:d,hasZ:a,objectIdFieldName:m,objectIdFieldType:f,unknownFields:Array.from(u)}}function L(e,t){return Array.from(u(s(e),t))}


/***/ }),

/***/ 40400:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MS": () => (/* binding */ a),
/* harmony export */   "Dm": () => (/* binding */ n),
/* harmony export */   "Hq": () => (/* binding */ i),
/* harmony export */   "bU": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39994);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67134);
/* harmony import */ var _data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10287);
/* harmony import */ var _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86094);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPointSymbolJSON */ .I4:"esriGeometryPolyline"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPolylineSymbolJSON */ .ET:_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPolygonSymbolJSON */ .lF}}}function n(s,e){if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("esri-csp-restrictions"))return()=>({[e]:null,...s});try{let t=`this.${e} = null;`;for(const e in s){t+=`this${e.includes(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(s[e])};`}const r=new Function(t);return()=>new r}catch(r){return()=>({[e]:null,...s})}}function i(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .d9)(t)}}]}function a(t,s){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__/* .queryCapabilities */ .g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}


/***/ }),

/***/ 53237:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$9": () => (/* binding */ F),
/* harmony export */   "Lu": () => (/* binding */ j),
/* harmony export */   "w9": () => (/* binding */ I),
/* harmony export */   "j": () => (/* binding */ T),
/* harmony export */   "G4": () => (/* binding */ k),
/* harmony export */   "gp": () => (/* binding */ x),
/* harmony export */   "eS": () => (/* binding */ S),
/* harmony export */   "d": () => (/* binding */ v),
/* harmony export */   "yN": () => (/* binding */ N),
/* harmony export */   "WW": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66341);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70375);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13802);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61681);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35925);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39536);
/* harmony import */ var _graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12065);
/* harmony import */ var _graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61619);
/* harmony import */ var _graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61957);
/* harmony import */ var _graphics_sources_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40400);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28790);
/* harmony import */ var _support_fieldType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86349);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14685);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const b=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getLogger */ .Z.getLogger("esri.layers.graphics.sources.ogcfeature"),j="http://www.opengis.net/def/crs/",F=`${j}OGC/1.3/CRS84`;async function I(i,r,a={},s=5){const{links:o}=i,l=G(o,"items","application/geo+json")||G(o,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(l))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:c}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(l.href,{signal:a.signal,query:{limit:s,...a.customParameters,token:a.apiKey},headers:{accept:"application/geo+json"}});await (0,_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_7__/* .validateGeoJSON */ .O3)(c);const d=(0,_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_7__/* .inferLayerProperties */ .my)(c,{geometryType:r.geometryType}),u=r.fields||d.fields||[],f=null!=r.hasZ?r.hasZ:d.hasZ,h=d.geometryType,j=r.objectIdField||d.objectIdFieldName||"OBJECTID";let F=r.timeInfo;const I=u.find((e=>e.name===j));if(!I){if(!d.objectIdFieldType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");u.unshift({name:j,alias:j,type:"esriFieldTypeOID",editable:!1,nullable:!1})}else I.type="esriFieldTypeOID",I.editable=!1,I.nullable=!1;if(j!==d.objectIdFieldName){const e=u.find((e=>e.name===d.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}u===d.fields&&d.unknownFields.length>0&&b.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:d.unknownFields}});for(const e of u){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(-1===_support_fieldType_js__WEBPACK_IMPORTED_MODULE_10__/* .kebabDict.jsonValues.indexOf */ .v.jsonValues.indexOf(e.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(F){const e=new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(u);if(F.startTimeField){const t=e.get(F.startTimeField);t?(F.startTimeField=t.name,t.type="esriFieldTypeDate"):F.startTimeField=null}if(F.endTimeField){const t=e.get(F.endTimeField);t?(F.endTimeField=t.name,t.type="esriFieldTypeDate"):F.endTimeField=null}if(F.trackIdField){const t=e.get(F.trackIdField);t?F.trackIdField=t.name:(F.trackIdField=null,b.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:F}}))}F.startTimeField||F.endTimeField||(b.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:F}}),F=null)}return{drawingInfo:h?(0,_graphics_sources_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_8__/* .createDrawingInfo */ .bU)(h):null,geometryType:h,fields:u,hasZ:!!f,objectIdField:j,timeInfo:F}}async function T(i,r={}){const{links:a}=i,s=G(a,"data","application/json")||G(a,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(s))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:l,signal:c}=r,{data:d}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(s.href,{signal:c,headers:{accept:"application/json"},query:{...l,token:o}});return d}async function k(i,r={}){const{links:a}=i,s=G(a,"conformance","application/json")||G(a,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(s))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:l,signal:c}=r,{data:d}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(s.href,{signal:c,headers:{accept:"application/json"},query:{...l,token:o}});return d}async function x(t,i={}){const{apiKey:n,customParameters:r,signal:a}=i,{data:s}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t,{signal:a,headers:{accept:"application/json"},query:{...r,token:n}});return s}async function S(t,i={}){const r="application/vnd.oai.openapi+json;version=3.0",a=G(t.links,"service-desc",r);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(a))return b.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:s,customParameters:o,signal:l}=i,{data:c}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a.href,{signal:l,headers:{accept:r},query:{...o,token:s}});return c}function v(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),i=null==t?void 0:t.groups;if(!i)return null;const{authority:n,code:r}=i;switch(n.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"].GCS_NAD_1927.wkid */ .Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"].WGS84.wkid */ .Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(r,10);return Number.isNaN(e)?null:e}default:return null}}async function N(e,t,i){const n=await q(e,t,i);return (0,_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .convertToFeatureSet */ .cn)(n)}async function q(i,l,p){const{capabilities:{query:{maxRecordCount:m}},collection:g,layerDefinition:y,queryParameters:{apiKey:w,customParameters:b},spatialReference:j,supportedCrs:F}=i,{links:I}=g,T=G(I,"items","application/geo+json")||G(I,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(T))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:k,num:x,start:S,timeExtent:v,where:N}=l;if(l.objectIds)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const q=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"].fromJSON */ .Z.fromJSON(j),M=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .unwrapOr */ .Pt)(l.outSpatialReference,q),C=M.isWGS84?null:O(M,F),P=D(k,F),W=R(v),Z=$(N),K=null!=x?x:null!=S&&void 0!==S?10:m,{data:L}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(T.href,{...p,query:{...b,...P,crs:C,datetime:W,query:Z,limit:K,startindex:S,token:w},headers:{accept:"application/geo+json"}});let A=!1;if(L.links){const e=L.links.find((e=>"next"===e.rel));A=!!e}!A&&Number.isInteger(L.numberMatched)&&Number.isInteger(L.numberReturned)&&(A=L.numberReturned<L.numberMatched);const{fields:E,globalIdField:J,hasM:U,hasZ:_,objectIdField:z}=y,B=y.geometryType,Q=(0,_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_7__/* .createOptimizedFeatures */ .lG)(L,{geometryType:B,hasZ:_,objectIdField:z});if(!C&&M.isWebMercator)for(const e of Q)if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(e.geometry)){const t=(0,_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .convertToGeometry */ .di)(e.geometry,B,_,!1);t.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"].WGS84 */ .Z.WGS84,e.geometry=(0,_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .convertFromGeometry */ .GH)((0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .project */ .iV)(t,M))}for(const e of Q)e.objectId=e.attributes[z];const V=C||!C&&M.isWebMercator?M.toJSON():_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .WGS84 */ .Zn,H=new _graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z;return H.exceededTransferLimit=A,H.features=Q,H.fields=E,H.geometryType=B,H.globalIdFieldName=J,H.hasM=U,H.hasZ=_,H.objectIdFieldName=z,H.spatialReference=V,H}function M(e){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(e)&&"extent"===e.type}function O(e,t){var i,n,r;const{isWebMercator:a,wkid:s}=e;if(!s)return null;const o=a?null!=(i=null!=(n=null!=(r=t[3857])?r:t[102100])?n:t[102113])?i:t[900913]:t[e.wkid];return o?`${j}${o}`:null}function C(e){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(e))return"";const{xmin:t,ymin:i,xmax:r,ymax:a}=e;return`${t},${i},${r},${a}`}function R(e){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(e))return null;const{start:t,end:i}=e;return`${(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(t)?t.toISOString():".."}/${(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(i)?i.toISOString():".."}`}function $(e){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(e)||!e||"1=1"===e?null:e}function D(e,t){if(!M(e))return null;const{spatialReference:i}=e;if(!i||i.isWGS84)return{bbox:C(e)};const n=O(i,t);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(n)?{bbox:C(e),"bbox-crs":n}:i.isWebMercator?{bbox:C((0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .project */ .iV)(e,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"].WGS84 */ .Z.WGS84))}:null}function G(e,t,i){return e.find((e=>e.rel===t&&e.type===i))||e.find((e=>e.rel===t&&!e.type))}


/***/ })

};
;
//# sourceMappingURL=3963.render-page.js.map