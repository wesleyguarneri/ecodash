"use strict";
exports.id = 1655;
exports.ids = [1655];
exports.modules = {

/***/ 81655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Z)
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(15842);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/workers/workers.js + 4 modules
var workers = __webpack_require__(47109);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js
var clientSideDefaults = __webpack_require__(40400);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(51211);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(89542);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/GeoJSONSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=Logger/* default.getLogger */.Z.getLogger("esri.layers.graphics.sources.GeoJSONSource");let g=class extends Loadable/* default */.Z{constructor(){super(...arguments),this.type="geojson",this.refresh=(0,promiseUtils/* debounce */.Ds)((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=(0,maybe/* isSome */.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>FeatureSet["default"].fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:Extent/* default.fromJSON */.Z.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new Error/* default */.Z("geojson-layer-source:edit-failure","Memory source not loaded");const r=this.layer.objectIdField,o=[],s=[],i=[];if(e.addFeatures)for(const t of e.addFeatures)o.push(this._serializeFeature(t));if(e.deleteFeatures)for(const t of e.deleteFeatures)"objectId"in t&&null!=t.objectId?s.push(t.objectId):"attributes"in t&&null!=t.attributes[r]&&s.push(t.attributes[r]);if(e.updateFeatures)for(const t of e.updateFeatures)i.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:o,updates:i,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const r=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:r?new Error/* default */.Z("geojson-layer-source:edit-failure",r.description,{code:r.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return (0,maybe/* isNone */.Wi)(t)?null:"mesh"===t.type||"extent"===t.type?Polygon/* default.fromExtent */.Z.fromExtent(t.extent):t}async _startWorker(e){this._connection=await (0,workers/* open */.bA)("GeoJSONSourceWorker",{strategy:(0,has/* default */.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:o,hasZ:s,geometryType:i,objectIdField:n,url:a,timeInfo:l,customParameters:c}=this.layer,p="defaults"===this.layer.originOf("spatialReference"),h={url:a,customParameters:c,fields:t&&t.map((e=>e.toJSON())),geometryType:typeUtils/* featureGeometryTypeKebabDictionary.toJSON */.Mk.toJSON(i),hasZ:s,objectIdField:n,timeInfo:l?l.toJSON():null,spatialReference:p?null:o&&o.toJSON()},m=await this._connection.invoke("load",h,{signal:e});for(const r of m.warnings)f.warn(r.message,{layer:this.layer,warning:r});m.featureErrors.length&&f.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=(0,clientSideDefaults/* createCapabilities */.MS)(this.sourceJSON.hasZ,!0)}};(0,tslib_es6._)([(0,property/* property */.Cb)()],g.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],g.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0})],g.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],g.prototype,"sourceJSON",void 0),g=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.graphics.sources.GeoJSONSource")],g);const S=g;

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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FeatureTemplate.js
var FeatureTemplate = __webpack_require__(60822);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/GeoJSONLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const V=(0,fieldProperties/* defineFieldProperties */.v)();let B=class extends((0,OrderedLayer/* OrderedLayer */.c)((0,CustomParametersMixin/* CustomParametersMixin */.N)((0,FeatureEffectLayer/* FeatureEffectLayer */.b)((0,BlendLayer/* BlendLayer */.h)((0,TemporalLayer/* TemporalLayer */.n)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)((0,RefreshableLayer/* RefreshableLayer */.Q)((0,OperationalLayer/* OperationalLayer */.q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)(Layer/* default */.Z)))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new S({layer:this}),this.spatialReference=SpatialReference/* default.WGS84 */.Z.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.source.load(e).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,fieldUtils/* fixRendererFields */.YN)(this.renderer,this.fieldsIndex),(0,fieldUtils/* fixTimeInfoFields */.UF)(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,urlUtils/* urlToObject */.mN)(this.url):null}set renderer(e){(0,fieldUtils/* fixRendererFields */.YN)(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=(0,urlUtils/* urlToObject */.mN)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const r=await __webpack_require__.e(/* import() */ 3261).then(__webpack_require__.bind(__webpack_require__, 23261));await this.load();const i=await r.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),i}on(e,t){return super.on(e,t)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.eZ)(this,e)}createQuery(){const e=new Query/* default */.Z,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e}getFieldDomain(e,t){let r,i=!1;const o=t&&t.feature,s=o&&o.attributes,p=this.typeIdField&&s&&s[this.typeIdField];return null!=p&&this.types&&(i=this.types.some((t=>t.id==p&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),i||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(Query/* default.from */.Z.from(e)||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(Query/* default.from */.Z.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(Query/* default.from */.Z.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(Query/* default.from */.Z.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return (0,maybe/* isSome */.pC)(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{read:!1,write:!1}})],B.prototype,"capabilities",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],B.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],B.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],B.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean})],B.prototype,"editingEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* elevationInfo */.PV)],B.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(featureReductionUtils/* featureReductionProperty */.d)],B.prototype,"featureReduction",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Field/* default */.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],B.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(V.fieldsIndex)],B.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Extent/* default */.Z,json:{name:"extent"}})],B.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:typeUtils/* featureGeometryTypeKebabDictionary.read */.Mk.read}}})],B.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean})],B.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties.id)],B.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* labelsVisible */.iR)],B.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[LabelClass/* default */.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:labelingInfo/* reader */.r},write:!0}})],B.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* legendEnabled */.rn)],B.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide"]})],B.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],B.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* opacity */.Oh)],B.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["GeoJSON"]})],B.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],B.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* popupEnabled */.C_)],B.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:PopupTemplate/* default */.Z,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({types:types/* rendererTypes */.A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:types/* webSceneRendererTypes */.o}}}})],B.prototype,"renderer",null),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* screenSizePerspectiveEnabled */.YI)],B.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],B.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:SpatialReference/* default */.Z})],B.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[FeatureTemplate/* default */.Z]})],B.prototype,"templates",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],B.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[FeatureType/* default */.Z]})],B.prototype,"types",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* url */.HQ)],B.prototype,"url",null),B=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.GeoJSONLayer")],B);const Z=B;


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


/***/ })

};
;
//# sourceMappingURL=1655.render-page.js.map