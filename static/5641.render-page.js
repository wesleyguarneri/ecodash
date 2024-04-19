"use strict";
exports.id = 5641;
exports.ids = [5641];
exports.modules = {

/***/ 16749:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ B)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(15842);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(34248);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(39835);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(91772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js
var Layer = __webpack_require__(76136);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(91223);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js
var ArcGISCachedService = __webpack_require__(89993);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(87232);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(27668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(63989);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(43330);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(18241);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(95874);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/imageUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let A=null;function o(o){if(A)return A;const l={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return A=new Promise((A=>{const n=new Image;n.onload=()=>{n.onload=n.onerror=null,A(n.width>0&&n.height>0)},n.onerror=()=>{n.onload=n.onerror=null,A(!1)},n.src="data:image/webp;base64,"+l[o]})),A}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/SpriteSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=Logger/* default.getLogger */.Z.getLogger("esri.layers.support.SpriteSource"),h=1.15;class SpriteSource_o{constructor(t,e,i,s){this.baseURL=t,this.devicePixelRatio=e,this.maxTextureSize=i,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const t=[];for(const e in this._spritesData)t.push(e);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(i){this._isRetina=this.devicePixelRatio>h;const o=(0,urlUtils/* urlToObject */.mN)(this.baseURL),l=o.query?"?"+(0,urlUtils/* objectToQuery */.B7)(o.query):"",n=this._isRetina?"@2x":"",d=`${o.path}${n}.${this._spriteImageFormat}${l}`,g=`${o.path}${n}.json${l}`;return Promise.all([(0,request["default"])(g,i),(0,request["default"])(d,{responseType:"image",...i})]).then((([t,i])=>{const s=Object.keys(t.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!i||!i.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=t.data;const a=i.data,h=Math.max(this.maxTextureSize,4096);if(a.width>h||a.height>h){const t=`Sprite resource for style ${o.path} is bigger than the maximum allowed of ${h} pixels}`;throw r.error(t),new core_Error/* default */.Z("SpriteSource",t)}this.width=a.width,this.height=a.height;const l=document.createElement("canvas"),n=l.getContext("2d");l.width=a.width,l.height=a.height,n.drawImage(a,0,0,a.width,a.height);const d=n.getImageData(0,0,a.width,a.height),g=new Uint8Array(d.data);let m;for(let e=0;e<g.length;e+=4)m=g[e+3]/255,g[e]=g[e]*m,g[e+1]=g[e+1]*m,g[e+2]=g[e+2]*m;this.image=g}))}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TileInfo.js
var TileInfo = __webpack_require__(81590);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/config.js
var config = __webpack_require__(51366);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/serviceTileInfoProperty.js
var serviceTileInfoProperty = __webpack_require__(58269);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TilemapCache.js + 1 modules
var TilemapCache = __webpack_require__(52953);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/tiling/TileKey.js
var TileKey = __webpack_require__(87241);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapIndex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l{constructor(e){this.url=e}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=(0,request["default"])(this.url).then((e=>e.data.index))),this._tileIndexPromise}async dataKey(e,r){const l=await this.fetchTileIndex();return (0,promiseUtils/* throwIfAborted */.k_)(r),this._getIndexedDataKey(l,e)}_getIndexedDataKey(e,t){const l=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;let i=t;for(;0!==i.level;)i=new TileKey/* default */.Z(i.level-1,i.row>>1,i.col>>1,i.world),l.push(i);let o,s,n=e,a=l.pop();if(1===n)return a;for(;l.length;)if(o=l.pop(),s=(1&o.col)+((1&o.row)<<1),n){if(0===n[s]){a=null;break}if(1===n[s]){a=o;break}a=o,n=n[s]}return a}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapRequest.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class TilemapRequest_r{constructor(e,t){this._tilemap=e,this._tileIndexUrl=t}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=(0,request["default"])(this._tileIndexUrl,{query:{...null==t?void 0:t.query}}).then((e=>e.data.index))),this._tileIndexPromise}dataKey(e,r){const{level:l,row:s,col:o}=e,n=new TileKey/* default */.Z(e);return this._tilemap.fetchAvailabilityUpsample(l,s,o,n,r).then((()=>(n.world=e.world,n))).catch((e=>{if((0,promiseUtils/* isAbortError */.D_)(e))throw e;return null}))}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTileSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class VectorTileSource_u{constructor(u,h,c){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=u,this.sourceUrl=h;const m=(0,urlUtils/* urlToObject */.mN)(this.sourceUrl),f=(0,lang/* clone */.d9)(c),d=f.tiles;if(m)for(let t=0;t<d.length;t++){const s=(0,urlUtils/* urlToObject */.mN)(d[t]);s&&((0,urlUtils/* isAbsolute */.YP)(s.path)||(s.path=(0,urlUtils/* join */.v_)(m.path,s.path)),d[t]=(0,urlUtils/* addQueryParameters */.fl)(s.path,{...m.query,...s.query}))}this.tileServers=d;const g=c.capabilities&&c.capabilities.split(",").map((t=>t.toLowerCase().trim())),x=!0===(null==c?void 0:c.exportTilesAllowed),y=!0===(null==g?void 0:g.includes("tilemap")),v=x&&c.hasOwnProperty("maxExportTilesCount")?c.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:x,supportsTileMap:y},exportTiles:x?{maxExportTilesCount:+v}:null},this.tileInfo=(0,serviceTileInfoProperty/* readServiceTileInfo */.d)(f.tileInfo,f,null,{ignoreMinMaxLOD:!0});const T=c.tileMap?(0,urlUtils/* addQueryParameters */.fl)((0,urlUtils/* join */.v_)(m.path,c.tileMap),m.query):null;y?(this.type="vector-tile",this.tilemap=new TilemapRequest_r(new TilemapCache/* TilemapCache */.y({layer:{parsedUrl:m,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),T)):T&&(this.tilemap=new l(T)),this.fullExtent=Extent/* default.fromJSON */.Z.fromJSON(c.fullExtent)}async getRefKey(t,e){var i,l;return null!=(i=null==(l=this.tilemap)?void 0:l.dataKey(t,e))?i:t}getSourceTileUrl(t,e,i){return this.tileServers[e%this.tileServers.length].replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,e.toString()).replace(/\{x\}/gi,i.toString())}isCompatibleWith(t){const e=this.tileInfo,i=t.tileInfo;if(!e.spatialReference.equals(i.spatialReference))return!1;if(!e.origin.equals(i.origin))return!1;if(Math.round(e.dpi)!==Math.round(i.dpi))return!1;const l=e.lods,r=i.lods,s=Math.min(l.length,r.length);for(let o=0;o<s;o++){const t=l[o],e=r[o];if(t.level!==e.level||Math.round(t.scale)!==Math.round(e.scale))return!1}return!0}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/vectorTileLayerLoader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m=config/* default.defaults */.Z.defaults&&config/* default.defaults.io.corsEnabledServers */.Z.defaults.io.corsEnabledServers;async function y(e,r){const s={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[t,o]="string"==typeof e?[e,null]:[null,e.jsonUrl];await vectorTileLayerLoader_h(s,"esri",e,o,r);const l={layerDefinition:s.validatedSource,url:t,serviceUrl:s.sourceUrl,style:s.style,styleUrl:s.styleUrl,spriteUrl:s.style.sprite&&S(s.styleBase,s.style.sprite),spriteFormat:s.spriteFormat,glyphsUrl:s.style.glyphs&&S(s.styleBase,s.style.glyphs),sourceNameToSource:s.sourceNameToSource,primarySourceName:s.primarySourceName};return d(l.spriteUrl),d(l.glyphsUrl),l}function d(e){if(!e)return;const r=(0,urlUtils/* getOrigin */.P$)(e);m&&!m.includes(r)&&m.push(r)}function S(...e){let r;for(let s=0;s<e.length;++s)if((0,urlUtils/* isProtocolRelative */.oC)(e[s])){if(r){const t=r.split("://")[0];r=t+":"+e[s].trim()}}else r=(0,urlUtils/* isAbsolute */.YP)(e[s])?e[s]:(0,urlUtils/* join */.v_)(r,e[s]);return (0,urlUtils/* removeTrailingSlash */.Qj)(r)}async function vectorTileLayerLoader_h(e,t,o,l,i){let n,c,a;if((0,promiseUtils/* throwIfAborted */.k_)(i),"string"==typeof o){const e=(0,urlUtils/* normalize */.Fv)(o);d(e),a=await (0,request["default"])(e,{...i,responseType:"json",query:{f:"json",...null==i?void 0:i.query}}),a.ssl&&(n&&(n=n.replace(/^http:/i,"https:")),c&&(c=c.replace(/^http:/i,"https:"))),n=e,c=e}else a={data:o},n=o.jsonUrl||null,c=l;const f=a.data;return U(f)?(e.styleUrl=n||null,v(e,f,c,i)):x(f)?e.sourceUrl?w(e,f,c,!1,t,i):(e.sourceUrl=n||null,w(e,f,c,!0,t,i)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function U(e){return!!e.sources}function x(e){return!U(e)}async function v(e,r,s,t){const o=s?(0,urlUtils/* removeFile */.Yd)(s):urlUtils/* appBaseUrl */.AX;e.styleBase=o,e.style=r,e.styleUrl&&d(e.styleUrl),r["sprite-format"]&&"webp"===r["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const l=[];if(r.sources&&r.sources.esri){const s=r.sources.esri;s.url?await vectorTileLayerLoader_h(e,"esri",S(o,s.url),void 0,t):l.push(vectorTileLayerLoader_h(e,"esri",s,o,t))}for(const i of Object.keys(r.sources))"esri"!==i&&"vector"===r.sources[i].type&&(r.sources[i].url?l.push(vectorTileLayerLoader_h(e,i,S(o,r.sources[i].url),void 0,t)):r.sources[i].tiles&&l.push(vectorTileLayerLoader_h(e,i,r.sources[i],o,t)));await Promise.all(l)}async function w(e,r,s,o,l,i){const n=s?(0,urlUtils/* removeTrailingSlash */.Qj)(s)+"/":urlUtils/* appBaseUrl */.AX,u=g(r,n),c=new VectorTileSource_u(l,(0,urlUtils/* addQueryParameters */.fl)(n,null==i?void 0:i.query),u);if(!o&&e.primarySourceName in e.sourceNameToSource){const r=e.sourceNameToSource[e.primarySourceName];if(!r.isCompatibleWith(c))return Promise.resolve();null!=c.fullExtent&&(null!=r.fullExtent?r.fullExtent.union(c.fullExtent):r.fullExtent=c.fullExtent.clone()),r.tileInfo.lods.length<c.tileInfo.lods.length&&(r.tileInfo=c.tileInfo)}if(o?(e.sourceBase=n,e.source=r,e.validatedSource=u,e.primarySourceName=l,e.sourceUrl&&d(e.sourceUrl)):d(n),e.sourceNameToSource[l]=c,!e.style)return null==r.defaultStyles?Promise.reject():"string"==typeof r.defaultStyles?vectorTileLayerLoader_h(e,"",S(n,r.defaultStyles,"root.json"),void 0,i):vectorTileLayerLoader_h(e,"",r.defaultStyles,S(n,"root.json"),i)}function g(e,r){if(e.hasOwnProperty("tileInfo"))return e;const s={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},t=512;let o=78271.51696400007,l=295828763.7957775;const i=[],n=e.hasOwnProperty("minzoom")?+e.minzoom:0,u=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let c=0;c<=u;c++)c>=n&&i.push({level:c,scale:l,resolution:o}),o/=2,l/=2;for(const c of e.tiles)d(S(r,c));return{capabilities:"TilesOnly",initialExtent:s,fullExtent:s,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:t,cols:t,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:i,spatialReference:{wkid:102100}}}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/jsonContext.js
var jsonContext = __webpack_require__(84513);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LOD.js
var LOD = __webpack_require__(13054);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SchemaHelper.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(e,i){this.lockedSchemaPixelSize=e,this.isGCS=i}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,i){let s=0,t=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(s=i),e[1]%2&&(t=i)),[s,t]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(s){if(!s)return null;if(256===s.size[0]&&256===s.size[1])return s;const t=256,l=s.spatialReference.isGeographic,r=[],o=s.lods.length;for(let i=0;i<o;i++){const t=s.lods[i],o=l?t.resolution:2*t.resolution;r.push(new LOD/* default */.Z({level:t.level,scale:t.scale,resolution:o}))}return new TileInfo/* default */.Z({size:[t,t],dpi:s.dpi,format:s.format,compressionQuality:s.compressionQuality,origin:s.origin,spatialReference:s.spatialReference,lods:r})}static create512x512CompatibleTileInfo(s){if(!s)return null;if(256===s.size[0]||256===s.size[1])return null;const t=512,l=[],r=s.lods.length;for(let i=0;i<r;i++){const t=s.lods[i],r=.5*t.resolution;l.push(new LOD/* default */.Z({level:t.level,scale:t.scale,resolution:r}))}return new TileInfo/* default */.Z({size:[t,t],dpi:s.dpi,format:s.format,compressionQuality:s.compressionQuality,origin:s.origin,spatialReference:s.spatialReference,lods:l})}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/tileInfoUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const tileInfoUtils_l=1e-6;function tileInfoUtils_s(e,s){if(e===s)return!0;if(!e&&null!=s)return!1;if(null!=e&&!s)return!1;if(!e.spatialReference.equals(s.spatialReference)||e.dpi!==s.dpi)return!1;const o=e.origin,r=s.origin;if(Math.abs(o.x-r.x)>=tileInfoUtils_l||Math.abs(o.y-r.y)>=tileInfoUtils_l)return!1;let n,t;e.lods[0].scale>s.lods[0].scale?(n=e,t=s):(t=e,n=s);for(let i=n.lods[0].scale;i>=t.lods[t.lods.length-1].scale-tileInfoUtils_l;i/=2)if(Math.abs(i-t.lods[0].scale)<tileInfoUtils_l)return!0;return!1}function tileInfoUtils_o(l,s){if(l===s)return l;if(!l&&null!=s)return s;if(null!=l&&!s)return l;const o=l.size[0],r=l.format,n=l.dpi,t={x:l.origin.x,y:l.origin.y},i=l.spatialReference.toJSON(),a=l.lods[0].scale>s.lods[0].scale?l.lods[0]:s.lods[0],d=l.lods[l.lods.length-1].scale<=s.lods[s.lods.length-1].scale?l.lods[l.lods.length-1]:s.lods[s.lods.length-1],f=a.scale,u=a.resolution,c=d.scale,p=[];let g=f,h=u,x=0;for(;g>c;)p.push({level:x,resolution:h,scale:g}),x++,g/=2,h/=2;return new TileInfo/* default */.Z({size:[o,o],dpi:n,format:r||"pbf",origin:t,lods:p,spatialReference:i})}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleRepository.js
var StyleRepository = __webpack_require__(63043);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/capabilities.js
var capabilities = __webpack_require__(35119);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/VectorTileLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let k=class extends((0,BlendLayer/* BlendLayer */.h)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)((0,ArcGISCachedService/* ArcGISCachedService */.Z)((0,ArcGISService/* ArcGISService */.Y)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.I)((0,CustomParametersMixin/* CustomParametersMixin */.N)((0,APIKeyMixin/* APIKeyMixin */.V)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)(Layer/* default */.Z)))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.symbolCollisionBoxesVisible=!1,this.path=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const r=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(promiseUtils/* throwIfAbortError */.r9).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await (0,request["default"])(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},(0,jsonContext/* createForItem */.m)(this.portalItem))})).catch(promiseUtils/* throwIfAbortError */.r9).then((()=>this._loadStyle(e)));return this.addResolvingPromise(r),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&(0,urlUtils/* urlToObject */.mN)(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?(0,urlUtils/* addQueryParameters */.fl)(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return(null==(e=this.primarySource)?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?(0,urlUtils/* urlToObject */.mN)(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&(0,urlUtils/* isProtocolRelative */.oC)(e)&&(e=`https:${e}`),t.styleUrl=e}get tileInfo(){var e;const t=[];for(const o in this.sourceNameToSource)t.push(this.sourceNameToSource[o]);let r=(null==(e=this.primarySource)?void 0:e.tileInfo)||new TileInfo/* default */.Z;if(t.length>1)for(let o=0;o<t.length;o++)tileInfoUtils_s(r,t[o].tileInfo)&&(r=tileInfoUtils_o(r,t[o].tileInfo));return r}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return s.create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return s.create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){var r;const o=(0,capabilities/* default */.Z)(),i=null!=(r=this.currentStyleInfo)&&r.spriteUrl?(0,urlUtils/* addQueryParameters */.fl)(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,s=new SpriteSource_o(i,e,o.maxTextureSize,this.currentStyleInfo.spriteFormat);await s.load(t),this._spriteSourceMap.set(e,s)}return Promise.resolve(this._spriteSourceMap.get(e))}async loadStyle(e,t){var r;const o=e||this.style||this.url;return this._loadingTask&&"string"==typeof o&&this.url===o||(null==(r=this._loadingTask)||r.abort(),this._loadingTask=(0,promiseUtils/* createTask */.vr)((e=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(o,{signal:e}))),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return (0,lang/* clone */.d9)(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const o=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||o})}getStyleLayer(e){return (0,lang/* clone */.d9)(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return (0,lang/* clone */.d9)(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new core_Error/* default */.Z("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await y(e,{...t,query:{...this.customParameters,token:this.apiKey}});if("webp"===r.spriteFormat){await o("lossy")||(r.spriteFormat="png")}this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new StyleRepository/* default */.Z(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const o=t[2]&&t[2].toLowerCase();if(!o)return;const i=t[1]||"";for(const s of r)if(s.toLowerCase().includes(o))return (0,urlUtils/* normalize */.Fv)(`//static.arcgis.com/attribution/Vector${i}/${s}`)}async _loadStyle(e){var t,r;return null!=(t=null==(r=this._loadingTask)?void 0:r.promise)?t:this.loadStyle(null,e)}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],k.prototype,"attributionDataUrl",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide"]})],k.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{read:!1}})],k.prototype,"capabilities",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],k.prototype,"currentStyleInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1},readOnly:!0,type:Extent/* default */.Z})],k.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],k.prototype,"style",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],k.prototype,"isReference",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["VectorTileLayer"]})],k.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],k.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],k.prototype,"serviceUrl",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:SpatialReference/* default */.Z,readOnly:!0})],k.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],k.prototype,"styleRepository",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],k.prototype,"sourceNameToSource",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],k.prototype,"primarySource",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],k.prototype,"styleUrl",null),(0,tslib_es6._)([(0,writer/* writer */.c)(["portal-item","web-document"],"styleUrl")],k.prototype,"writeStyleUrl",null),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:TileInfo/* default */.Z})],k.prototype,"tileInfo",null),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1},readOnly:!0,value:"vector-tile"})],k.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],k.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],k.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)("version",["version","currentVersion"])],k.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],k.prototype,"compatibleTileInfo256",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],k.prototype,"compatibleTileInfo512",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean})],k.prototype,"symbolCollisionBoxesVisible",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],k.prototype,"path",void 0),k=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.VectorTileLayer")],k);const B=k;


/***/ }),

/***/ 89993:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36663);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34248);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);
/* harmony import */ var _support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58269);
/* harmony import */ var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52953);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14685);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=s=>{let l=class extends s{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_8__/* .TilemapCache */ .y({layer:this}):null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],l.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__/* .reader */ .r)("service","minScale")],l.prototype,"readMinScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],l.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__/* .reader */ .r)("service","maxScale")],l.prototype,"readMaxScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z})],l.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({readOnly:!0})],l.prototype,"supportsBlankTile",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)(_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_7__/* .serviceTileInfoProperty */ .h)],l.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],l.prototype,"tilemapCache",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__/* .reader */ .r)("service","tilemapCache",["capabilities"])],l.prototype,"readTilemapCache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],l.prototype,"version",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.layers.mixins.ArcGISCachedService")],l),l};


/***/ }),

/***/ 52953:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* binding */ T)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 3 modules
var Accessor = __webpack_require__(53443);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/HandleOwner.js
var HandleOwner = __webpack_require__(53280);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/LRUCache.js
var LRUCache = __webpack_require__(55854);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(17135);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/scheduling.js
var scheduling = __webpack_require__(17262);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/watchUtils.js
var watchUtils = __webpack_require__(15071);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(69236);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/Tilemap.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class Tilemap_l{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(t,i){if("unknown"!==this._allAvailability)return this._allAvailability;const e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%8,l=e>>3,o=this._tileAvailabilityBitSet;return l<0||l>o.length?"unknown":o[l]&1<<a?"available":"unavailable"}_updateFromData(t){const i=this.location.width,e=this.location.height;let a=!0,l=!0;const o=Math.ceil(i*e/8),n=new Uint8Array(o);let r=0;for(let s=0;s<t.length;s++){const i=s%8;t[s]?(l=!1,n[r]|=1<<i):a=!1,7===i&&++r}l?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(a,o){const r=a.service.request||request["default"],{row:s,col:h,width:c,height:m}=a,d={query:{f:"json"}};return o=o?{...d,...o}:d,r(n(a),o).then((t=>t.data)).catch((t=>{if(t&&t.details&&422===t.details.httpStatus)return{location:{top:s,left:h,width:c,height:m},valid:!0,data:(0,arrayUtils/* constant */.a9)(c*m,0)};throw t})).then((t=>{if(t.location&&(t.location.top!==s||t.location.left!==h||t.location.width!==c||t.location.height!==m))throw new Error/* default */.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:s,left:h,width:c,height:m}});return Tilemap_l.fromJSON(t)}))}static fromJSON(t){Tilemap_l.validateJSON(t);const i=new Tilemap_l;return i.location=Object.freeze((0,lang/* clone */.d9)(t.location)),i._updateFromData(t.data),Object.freeze(i)}static validateJSON(t){if(!t||!t.location)throw new Error/* default */.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===t.valid)throw new Error/* default */.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new Error/* default */.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new Error/* default */.Z("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new Error/* default */.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function Tilemap_o(t){return`${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}function n(t){let i;if("vector-tile"===t.service.type)i=`${t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;else{const e=t.service.tileServers;i=`${e&&e.length?e[t.row%e.length]:t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}const e=t.service.query;return e&&(i=`${i}?${e}`),i}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/TilemapCache.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var g;const w=Logger/* default.getLogger */.Z.getLogger("esri.layers.support.TilemapCache");let T=g=class extends((0,HandleOwner/* HandleOwnerMixin */.p)(Accessor/* default */.Z)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=request["default"],this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new LRUCache/* default */.Z(this.cacheByteSize),this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?","layer.apiKey?","layer.customParameters?"],(()=>this._initializeTilemapDefinition())),(0,watchUtils/* init */.S1)(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(w.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,l){if(!this._availableLevels[e])return Promise.reject(new Error/* default */.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const s=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,s);if(a)return Promise.resolve(a);const o=l&&l.signal;return l={...l,signal:null},new Promise(((e,t)=>{(0,promiseUtils/* onAbort */.fu)(o,(()=>t((0,promiseUtils/* createAbortError */.zE)())));const i=Tilemap_o(s);let r=this._pendingTilemapRequests[i];if(!r){r=Tilemap_l.fromDefinition(s,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=r,r.then(e,e)}r.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,l){return this._availableLevels[e]?this.fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof Tilemap_l){const s=l.getAvailability(t,i);return"unavailable"===s?Promise.reject(new Error/* default */.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):s}if((0,promiseUtils/* isAbortError */.D_)(l))throw l;return"unknown"})):Promise.reject(new Error/* default */.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const s=this.layer.tileInfo;s.updateTileInfo(r);const a=this.fetchAvailability(e,t,i,l).catch((e=>{if((0,promiseUtils/* isAbortError */.D_)(e))throw e;if(s.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,a),a}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,l,s){if(!this._prefetchingEnabled)return;const a=`prefetch-${e}`;if(this.handles.has(a))return;const o=new AbortController;s.then((()=>o.abort()),(()=>o.abort()));let n=!1;const c={remove(){n||(n=!0,o.abort())}};if(this.handles.add(c,a),await (0,scheduling/* waitTicks */.MU)(10,o.signal).catch((()=>{})),n||(n=!0,this.handles.remove(a)),(0,promiseUtils/* isAborted */.Hc)(o))return;const p={id:e,level:t,row:i,col:r},u={...l,signal:o.signal},f=this.layer.tileInfo;for(let h=0;g._prefetches.length<g._maxPrefetch&&f.upsampleTile(p);++h){const e=this.fetchAvailability(p.level,p.row,p.col,u);g._prefetches.push(e);const t=()=>{g._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:r}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:(0,urlUtils/* objectToQuery */.B7)({...t.query,...r,token:null!=i?i:null==(e=t.query)?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=Tilemap_o(r);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};T._maxPrefetch=4,T._prefetches=new PooledArray/* default */.Z({initialSize:g._maxPrefetch}),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0,type:Number})],T.prototype,"levels",void 0),(0,tslib_es6._)([(0,cast/* cast */.p)("levels")],T.prototype,"castLevels",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,type:Number})],T.prototype,"size",null),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0,type:Number})],T.prototype,"cacheByteSize",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0})],T.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0})],T.prototype,"request",void 0),T=g=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.TilemapCache")],T);


/***/ }),

/***/ 58269:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ n),
/* harmony export */   "h": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81590);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={type:_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:n}}}}};function n(r,n,l,o){if(!r)return null;const{minScale:i,maxScale:t,minLOD:m,maxLOD:s}=n;if(null!=m&&null!=s)return o&&o.ignoreMinMaxLOD?_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fromJSON */ .Z.fromJSON(r):_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fromJSON */ .Z.fromJSON({...r,lods:r.lods.filter((({level:e})=>null!=e&&e>=m&&e<=s))});if(0!==i&&0!==t){const n=e=>Math.round(1e4*e)/1e4,l=i?n(i):1/0,o=t?n(t):-1/0;return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fromJSON */ .Z.fromJSON({...r,lods:r.lods.filter((e=>{const r=n(e.scale);return r<=l&&r>=o}))})}return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fromJSON */ .Z.fromJSON(r)}


/***/ }),

/***/ 84513:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3466);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26869);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){return{origin:"portal-item",url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .mN)(o.itemUrl),portal:o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getDefault */ .Z.getDefault(),portalItem:o,readResourcePaths:[]}}


/***/ }),

/***/ 93944:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_U": () => (/* binding */ r),
/* harmony export */   "DT": () => (/* binding */ f),
/* harmony export */   "B1": () => (/* binding */ n),
/* harmony export */   "JJ": () => (/* binding */ t),
/* harmony export */   "sX": () => (/* binding */ b),
/* harmony export */   "k3": () => (/* binding */ P),
/* harmony export */   "DQ": () => (/* binding */ a),
/* harmony export */   "Or": () => (/* binding */ h)
/* harmony export */ });
/* unused harmony exports C_256_TO_RAD, C_DEG_TO_256, C_PI_BY_2, C_RAD_TO_256, C_SQRT2, C_SQRT2_INV, between, degToByte, sqr */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=Number.POSITIVE_INFINITY,t=Math.PI,r=2*t,u=t/2,o=128/t,e=t/128,c=(/* unused pure expression or super */ null && (256/360)),f=t/180,i=1.414213562,I=1/i,N=1/Math.LN2;function a(n,t){return(n%=t)>=0?n:n+t}function h(n){return a(n*o,256)}function M(n){return a(n*c,256)}function P(n){return Math.log(n)*N}function T(n){return n*n}function b(n,t,r){return n*(1-r)+t*r}function g(n,t,r){return n>=t&&n<=r||n>=r&&n<=t}


/***/ }),

/***/ 14266:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xl": () => (/* binding */ J),
/* harmony export */   "aK": () => (/* binding */ K),
/* harmony export */   "eF": () => (/* binding */ k),
/* harmony export */   "Uh": () => (/* binding */ ct),
/* harmony export */   "_6": () => (/* binding */ dt),
/* harmony export */   "Tz": () => (/* binding */ it),
/* harmony export */   "CQ": () => (/* binding */ ht),
/* harmony export */   "oK": () => (/* binding */ ot),
/* harmony export */   "e0": () => (/* binding */ at),
/* harmony export */   "SD": () => (/* binding */ nt),
/* harmony export */   "XJ": () => (/* binding */ Z),
/* harmony export */   "$0": () => (/* binding */ r),
/* harmony export */   "iV": () => (/* binding */ Q),
/* harmony export */   "Zd": () => (/* binding */ P),
/* harmony export */   "Ex": () => (/* binding */ b),
/* harmony export */   "uG": () => (/* binding */ O),
/* harmony export */   "Jc": () => (/* binding */ T),
/* harmony export */   "xm": () => (/* binding */ s),
/* harmony export */   "m4": () => (/* binding */ N),
/* harmony export */   "MI": () => (/* binding */ et),
/* harmony export */   "AI": () => (/* binding */ c),
/* harmony export */   "Ip": () => (/* binding */ $),
/* harmony export */   "ru": () => (/* binding */ i),
/* harmony export */   "fL": () => (/* binding */ Y),
/* harmony export */   "iJ": () => (/* binding */ A),
/* harmony export */   "nM": () => (/* binding */ B),
/* harmony export */   "Ij": () => (/* binding */ C),
/* harmony export */   "f2": () => (/* binding */ D),
/* harmony export */   "Ic": () => (/* binding */ z),
/* harmony export */   "Al": () => (/* binding */ y),
/* harmony export */   "QU": () => (/* binding */ E),
/* harmony export */   "Jw": () => (/* binding */ F),
/* harmony export */   "kF": () => (/* binding */ G),
/* harmony export */   "yP": () => (/* binding */ H),
/* harmony export */   "D3": () => (/* binding */ u),
/* harmony export */   "Iw": () => (/* binding */ j),
/* harmony export */   "tQ": () => (/* binding */ S),
/* harmony export */   "I_": () => (/* binding */ o),
/* harmony export */   "a": () => (/* binding */ W),
/* harmony export */   "CU": () => (/* binding */ V),
/* harmony export */   "V4": () => (/* binding */ U)
/* harmony export */ });
/* unused harmony exports ANGLE_FACTOR_256, ATTRIBUTE_DATA_DD0, ATTRIBUTE_DATA_DD1, ATTRIBUTE_DATA_FILTER_FLAGS, ATTRIBUTE_STORE_TEXTURE_SIZE, BUFFER_DATA_MINIMUM_SIZE, BUFFER_DATA_POOL_SIZE, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, ENABLE_EARLY_LABEL_DISCARD, EXTRUDE_SCALE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, MAX_GPU_UPLOADS_PER_FRAME, RASTER_TILE_SIZE, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=8,e=t-2,c=1e-30,h=64,i=4294967295,o=512,a=256,d=(/* unused pure expression or super */ null && (256/360)),n=(/* unused pure expression or super */ null && (!1)),p=128,r=8,s=29,f=1,g=16,l=16,m=o/p,v=8,w=50,x=10,b=24,j=8,k={metrics:{width:15,height:17,left:0,top:-7,advance:14}},q=1024,u=0,y=0,z=0,A=1,B=2,C=3,D=4,E=5,F=6,G=5,H=6,I=0,J=1,K=2,L=3,M=3,N=2,O=1,P=2,Q=4,R=(/* unused pure expression or super */ null && (!1)),S=1.05,T=6,U=5,V=6,W=1.15,X=2,Y=2,Z=8,$=500,_=4,tt=128,et=10,ct=2,ht=0,it=1,ot=4,at=8,dt=4,nt=1;


/***/ })

};
;
//# sourceMappingURL=5641.render-page.js.map