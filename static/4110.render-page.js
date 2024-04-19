"use strict";
exports.id = 4110;
exports.ids = [4110];
exports.modules = {

/***/ 34110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ M)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Handles.js
var Handles = __webpack_require__(44584);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(15842);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/watchUtils.js
var watchUtils = __webpack_require__(15071);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/multiOriginJSONSupportUtils.js
var multiOriginJSONSupportUtils = __webpack_require__(71760);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(12173);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/metadata.js
var metadata = __webpack_require__(41610);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(65943);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/portal/support/resourceExtension.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function resourceExtension_p(i){return o[n(i)]||e}function n(i){return i instanceof Blob?i.type:t(i.url)}function t(p){const n=(0,urlUtils/* getPathExtension */.Ml)(p);return g[n]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const l in g)o[g[l]]=l;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(16641);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function persistable_g(r){const e=(0,maybe/* isSome */.pC)(r)&&r.origins?r.origins:[void 0];return(t,o)=>{const i=w(r,t,o);for(const r of e){const e=(0,property/* propertyJSONMeta */.CJ)(t,r,o);for(const t in i)e[t]=i[t]}}}function w(r,e,o){if((0,maybe/* isSome */.pC)(r)&&"resource"===r.type)return v(r,e,o);switch((0,maybe/* isSome */.pC)(r)&&r.type?r.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:t,write:r}=persistableUrlUtils.p;return{read:t,write:r}}}}function v(e,s,u){const p=(0,metadata/* getOwnPropertyMetadata */.VZ)(s,u);return{type:String,read:(t,r,e)=>{const o=(0,persistableUrlUtils.r)(t,r,e);return p.type===String?o:"function"==typeof p.type?new p.type({url:o}):void 0},write:{writer(s,a,l,f){if(!f||!f.resources)return"string"==typeof s?void(a[l]=(0,persistableUrlUtils.t)(s,f)):void(a[l]=s.write({},f));const m=P(s),d=m?(0,persistableUrlUtils.t)(m,{...f,verifyItemRelativeUrls:f&&f.verifyItemRelativeUrls?{writtenUrls:f.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,g=p.type!==String&&(!(0,multiOriginJSONSupportUtils/* isMultiOriginJSONMixin */.l)(this)||f&&f.origin&&this.originIdOf(u)>(0,PropertyOrigin/* nameToId */.M9)(f.origin));f&&f.portalItem&&(0,maybe/* isSome */.pC)(d)&&!(0,urlUtils/* isAbsolute */.YP)(d)?g?j(this,u,s,d,a,l,f,e):I(d,a,l,f):f&&f.portalItem&&((0,maybe/* isNone */.Wi)(d)||(0,maybe/* isSome */.pC)((0,persistableUrlUtils.i)(d))||(0,urlUtils/* isBlobProtocol */.jc)(d)||g)?U(this,u,s,d,a,l,f,e):a[l]=d}}}}function U(t,r,o,i,u,a,c,l){const m=(0,uuid/* generateUUID */.D)(),y=S(o,i,c),h=(0,urlUtils/* join */.v_)((0,maybe/* get */.U2)(l,"prefix"),m),d=`${h}.${resourceExtension_p(y)}`,g=c.portalItem.resourceFromPath(d);(0,urlUtils/* isBlobProtocol */.jc)(i)&&c.resources.pendingOperations.push(b(i).then((t=>{g.path=`${h}.${resourceExtension_p(t)}`,u[a]=g.itemRelativeUrl})).catch((()=>{}))),O(t,r,g,y,c.resources.toAdd),u[a]=g.itemRelativeUrl}function j(t,r,e,o,i,n,s,p){const a=s.portalItem.resourceFromPath(o),c=S(e,o,s);resourceExtension_p(c)===(0,urlUtils/* getPathExtension */.Ml)(a.path)?(O(t,r,a,c,s.resources.toUpdate),i[n]=o):U(t,r,e,o,i,n,s,p)}function I(t,r,e,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(t)}),r[e]=t}function O(t,r,e,o,i){i.push({resource:e,content:o,finish:e=>{R(t,r,e)}})}function S(t,r,e){return"string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}async function b(t){const r=(await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 66341))).default,{data:e}=await r(t,{responseType:"blob"});return e}function P(t){return (0,maybe/* isNone */.Wi)(t)?null:"string"==typeof t?t:t.url}function R(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js
var Layer = __webpack_require__(76136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(91223);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(87232);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(43330);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(18241);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(95874);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/SceneService.js + 1 modules
var SceneService = __webpack_require__(69877);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(51599);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js
var I3SLayerDefinitions = __webpack_require__(97304);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(66591);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Warning.js
var Warning = __webpack_require__(96863);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(39835);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection.js + 2 modules
var projection = __webpack_require__(76117);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(89542);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/SceneModification.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let y=m=class extends JSONSupport/* JSONSupport */.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,projection/* canProjectWithoutEngine */.Up)(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new Warning/* default */.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new Polygon/* default */.Z;(0,projection/* projectPolygon */.Wt)(e,p,s.layer.spatialReference),r[o]=p.toJSON(s)}else r[o]=e.toJSON(s);delete r[o].spatialReference}clone(){return new m({geometry:(0,lang/* clone */.d9)(this.geometry),type:this.type})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:Polygon/* default */.Z}),persistable_g()],y.prototype,"geometry",void 0),(0,tslib_es6._)([(0,writer/* writer */.c)(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["clip","mask","replace"],nonNullable:!0}),persistable_g()],y.prototype,"type",void 0),y=m=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.SceneModification")],y);const f=y;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/SceneModifications.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var SceneModifications_m;let SceneModifications_n=SceneModifications_m=class extends((0,JSONSupport/* JSONSupportMixin */.eC)(Collection/* default.ofType */.Z.ofType(f))){constructor(r){super(r),this.url=null}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}clone(){return new SceneModifications_m({url:this.url,items:this.items.map((r=>r.clone()))})}_readModifications(r,o){for(const t of r)this.add(f.fromJSON(t,o))}static fromJSON(r,o){const t=new SceneModifications_m;return t._readModifications(r,o),t}static async fromUrl(r,t,e){const c={url:(0,urlUtils/* urlToObject */.mN)(r),origin:"service"},a=await (0,request["default"])(r,{responseType:"json",signal:(0,maybe/* get */.U2)(e,"signal")}),n=t.toJSON(),l=[];for(const o of a.data)l.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},c));return new SceneModifications_m({url:r,items:l})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],SceneModifications_n.prototype,"url",void 0),SceneModifications_n=SceneModifications_m=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.SceneModifications")],SceneModifications_n);const l=SceneModifications_n;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/IntegratedMeshLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let IntegratedMeshLayer_O=class extends((0,SceneService/* SceneService */.V)((0,ArcGISService/* ArcGISService */.Y)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.I)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)((0,APIKeyMixin/* APIKeyMixin */.V)(Layer/* default */.Z)))))))){constructor(...e){super(...e),this.handles=new Handles/* default */.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add((0,watchUtils.on)(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:(0,persistableUrlUtils.f)(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,maybe/* get */.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){(0,promiseUtils/* throwIfAbortError */.r9)(r)}if(await this._fetchService(t),(0,maybe/* isSome */.pC)(this._modificationsSource)){const t=await l.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,maybe/* isNone */.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new Error/* default */.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new Error/* default */.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new Error/* default */.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0})],IntegratedMeshLayer_O.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide"]})],IntegratedMeshLayer_O.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["IntegratedMeshLayer"]})],IntegratedMeshLayer_O.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1},readOnly:!0})],IntegratedMeshLayer_O.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:I3SLayerDefinitions/* I3SNodePageDefinition */.U4,readOnly:!0})],IntegratedMeshLayer_O.prototype,"nodePages",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[I3SLayerDefinitions/* I3SMaterialDefinition */.QI],readOnly:!0})],IntegratedMeshLayer_O.prototype,"materialDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[I3SLayerDefinitions/* I3STextureSetDefinition */.Yh],readOnly:!0})],IntegratedMeshLayer_O.prototype,"textureSetDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[I3SLayerDefinitions/* I3SGeometryDefinition */.H3],readOnly:!0})],IntegratedMeshLayer_O.prototype,"geometryDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],IntegratedMeshLayer_O.prototype,"serviceUpdateTimeStamp",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:l}),persistable_g({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],IntegratedMeshLayer_O.prototype,"modifications",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)(["web-scene","portal-item"],"modifications")],IntegratedMeshLayer_O.prototype,"readModifications",null),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* elevationInfo */.PV)],IntegratedMeshLayer_O.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],IntegratedMeshLayer_O.prototype,"path",void 0),IntegratedMeshLayer_O=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.IntegratedMeshLayer")],IntegratedMeshLayer_O);const M=IntegratedMeshLayer_O;


/***/ })

};
;
//# sourceMappingURL=4110.render-page.js.map