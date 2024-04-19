"use strict";
exports.id = 5609;
exports.ids = [5609];
exports.modules = {

/***/ 75609:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ee)
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols.js + 2 modules
var symbols = __webpack_require__(95156);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(15842);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(34248);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var serializableProperty_reader = __webpack_require__(3593);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(59659);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js
var Layer = __webpack_require__(76136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(87232);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(27668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(63989);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js
var FeatureEffectLayer = __webpack_require__(22368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(43330);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(89076);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js + 1 modules
var fieldUtils = __webpack_require__(17095);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LabelClass.js + 1 modules
var LabelClass = __webpack_require__(26732);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(49341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/PurgeOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let i=t=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],i.prototype,"age",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=t=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.PurgeOptions")],i);const p=i;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/styleUtils.js
var styleUtils = __webpack_require__(16603);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(10171);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 2 modules
var ElevationInfo = __webpack_require__(35957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/StreamLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const X=Logger/* default.getLogger */.Z.getLogger("esri.layers.StreamLayer"),Y=(0,fieldProperties/* defineFieldProperties */.v)();let Z=class extends((0,FeatureEffectLayer/* FeatureEffectLayer */.b)((0,BlendLayer/* BlendLayer */.h)((0,TemporalLayer/* TemporalLayer */.n)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)((0,RefreshableLayer/* RefreshableLayer */.Q)((0,ArcGISService/* ArcGISService */.Y)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.I)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)((0,CustomParametersMixin/* CustomParametersMixin */.N)(Layer/* default */.Z))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new p,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=SpatialReference/* default.WGS84 */.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new Error/* default */.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=(0,maybe/* isSome */.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(promiseUtils/* throwIfAbortError */.r9).then((()=>this._fetchService(r)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,fieldUtils/* fixRendererFields */.YN)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,s){const n=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(n){const e=(0,jsonUtils/* read */.a)(n,r,s)||void 0;return e||X.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:s}),e}if(r.defaultSymbol)return r.types&&r.types.length?new UniqueValueRenderer/* default */.Z({defaultSymbol:$(r.defaultSymbol,r,s),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:$(e.symbol,e,s)})))}):new SimpleRenderer/* default */.Z({symbol:$(r.defaultSymbol,r,s)})}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.eZ)(this,e)}createQuery(){const e=new Query/* default */.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var r;if(!!this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new Error/* default */.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new Error/* default */.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new Error/* default */.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new Error/* default */.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:r}=await (0,request["default"])(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r}return this.sourceJSON={...null!=(r=this.sourceJSON)?r:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),(0,fieldUtils/* fixRendererFields */.YN)(this.renderer,this.fieldsIndex),(0,fieldUtils/* fixTimeInfoFields */.UF)(this.timeInfo,this.fieldsIndex),(0,styleUtils/* loadStyleRenderer */.y)(this,{origin:"service"})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],Z.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Z.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Z.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],Z.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:ElevationInfo/* default */.Z})],Z.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(featureReductionUtils/* featureReductionProperty */.d)],Z.prototype,"featureReduction",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(Y.fields)],Z.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(Y.fieldsIndex)],Z.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Extent/* default */.Z})],Z.prototype,"geometryDefinition",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:typeUtils/* featureGeometryTypeKebabDictionary.apiValues */.Mk.apiValues,json:{read:{reader:typeUtils/* featureGeometryTypeKebabDictionary.read */.Mk.read}}})],Z.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* labelsVisible */.iR)],Z.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[LabelClass/* default */.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:labelingInfo/* reader */.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],Z.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* legendEnabled */.rn)],Z.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide"]})],Z.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:ensureType/* Integer */.z8})],Z.prototype,"maxReconnectionAttempts",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:ensureType/* Integer */.z8})],Z.prototype,"maxReconnectionInterval",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* maxScale */.u1)],Z.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* minScale */.rO)],Z.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],Z.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],Z.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* popupEnabled */.C_)],Z.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:PopupTemplate/* default */.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],Z.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:p})],Z.prototype,"purgeOptions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({types:types/* rendererTypes */.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:types/* webSceneRendererTypes */.o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],Z.prototype,"renderer",null),(0,tslib_es6._)([(0,reader/* reader */.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,reader/* reader */.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],Z.prototype,"readRenderer",null),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* screenSizePerspectiveEnabled */.YI)],Z.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:SpatialReference/* default */.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],Z.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1}})],Z.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* url */.HQ)],Z.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number})],Z.prototype,"updateInterval",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],Z.prototype,"webSocketUrl",void 0),Z=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.StreamLayer")],Z);const $=(0,serializableProperty_reader/* createTypeReader */.d)({types:symbols/* symbolTypesRenderer */.QT}),ee=Z;


/***/ })

};
;
//# sourceMappingURL=5609.render-page.js.map