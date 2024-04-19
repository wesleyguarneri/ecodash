"use strict";
exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 12348:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(s){if(0===this.size)return null;for(const e of this._buffer)if((0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .pC)(e)&&s(e))return e;return null}clear(s){let e=this.dequeue();for(;(0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .pC)(e);)s&&s(e),e=this.dequeue()}}


/***/ }),

/***/ 88013:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_I": () => (/* binding */ n),
/* harmony export */   "xp": () => (/* binding */ c),
/* harmony export */   "PX": () => (/* binding */ u),
/* harmony export */   "QS": () => (/* binding */ s),
/* harmony export */   "KS": () => (/* binding */ i),
/* harmony export */   "jL": () => (/* binding */ f),
/* harmony export */   "vs": () => (/* binding */ e),
/* harmony export */   "nE": () => (/* binding */ p)
/* harmony export */ });
/* unused harmony exports AGGREGATE_VALID_FILTERS_MASK, DISPLAY_ID_TYPE_MASK, NONAGGREGATE_VALID_FILTERS_MASK */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=8388607,t=8388608,r=254,o=255,u=0,c=1,e=n=>(n&t)>>>23,f=t=>t&n,i=n=>e(n)===c?r:o;function p(n){return e(n)===c}function s(n,r){return((r?t:0)|n)>>>0}


/***/ }),

/***/ 37727:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ l),
/* harmony export */   "g": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=(n,l)=>n&&((...n)=>l.warn("DEBUG:",...n))||(()=>null),l=!1;


/***/ }),

/***/ 25970:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36663);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53280);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_0__/* .HandleOwner */ .r{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],i.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],i.prototype,"layerView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],i.prototype,"tileInfoView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],i.prototype,"updating",null),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],i);const o=i;


/***/ }),

/***/ 61138:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SymbolTileRenderer_c)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/set.js
var set = __webpack_require__(33156);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(24568);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/CircularArray.js
var CircularArray = __webpack_require__(12348);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat2d.js
var mat2d = __webpack_require__(40278);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat2df32.js
var mat2df32 = __webpack_require__(59566);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec2.js
var vec2 = __webpack_require__(55709);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec2f32.js
var vec2f32 = __webpack_require__(55542);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js
var enums = __webpack_require__(38716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js + 1 modules
var Utils = __webpack_require__(15875);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLTile.js
var WGLTile = __webpack_require__(780);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/MetricReader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=6,r=4294967296;class o{constructor(t){this._head=t,this._cursor=t}static from(t){const s=i.from(new Float32Array(t));return new o(s)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,s){return this._cursor.setBoundsComputedAnchorX(t,s)}setBoundsComputedAnchorY(t,s){return this._cursor.setBoundsComputedAnchorY(t,s)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(s){if((0,maybe/* isSome */.pC)(s._head))return this._cursor.link(s._head)}getCursor(){return this.copy()}copy(){var t;const s=new o(null==(t=this._head)?void 0:t.copy());if(!s._head)return s;let e=s._head,r=s._head._link;for(;r;)e._link=r.copy(),e=r,r=e._link;return s}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(s){let e=this._head,r=null;for(;e;){if(e.delete(s))return e.isEmpty()&&(0,maybe/* isSome */.pC)(r)&&(r._link=e._link),!0;r=e,e=e._link}return!1}}class i{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}static from(t){return new i(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+t*e+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+t*e+1]}setBoundsComputedAnchorX(t,s){this._buffer[this._offset+10+t*e+0]=s}setBoundsComputedAnchorY(t,s){this._buffer[this._offset+10+t*e+1]=s}boundsX(t){return this._buffer[this._offset+10+t*e+2]}boundsY(t){return this._buffer[this._offset+10+t*e+3]}boundsWidth(t){return this._buffer[this._offset+10+t*e+4]}boundsHeight(t){return this._buffer[this._offset+10+t*e+5]}link(t){let s=this;for(;s._link;)s=s._link;s._link=t}getCursor(){return this.copy()}copy(){const t=new i(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+this.boundsCount*e+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+this.boundsCount*e,this.id===r););return this.id!==r&&this._offset<this._buffer.length}delete(t){const s=this._offset,e=this.lookup(t);if(e)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=s,e}lookup(t){const e=this._offset;if((0,maybe/* isNone */.Wi)(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let s=0;for(;t.next();)t.id!==s&&(this._offsets.instance.set(t.id,t._offset),s=t.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),this.id!==r||(this._offset=e,!1))}_computeCount(){const t=this._offset;let s=0;for(this._offset=-1;this.next();)s++;return this._offset=t,s}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/FreeList.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class FreeList_a{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let e=this;for(let n=1;n<t.length;n++)e.next=new FreeList_a([t[n]]),e=e.next}*values(){let t=this;for(;t;)yield t.data,t=t.next}forEach(t){let a=this;for(;a;)t(a.data),a=a.next}find(t){var a;return t(this.data)?this:null==(a=this.next)?void 0:a.find(t)}max(t,a=this){const e=t(this.data)>t(a.data)?this:a;return this.next?this.next.max(t,e):e}remove(t,a=null){return this===t?a?(a.next=this.next,a):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class FreeList_e{constructor(e){this._head=null,(0,maybe/* isNone */.Wi)(e)||(this._head=new FreeList_a(e))}get head(){return this._head}maxAvailableSpace(){if((0,maybe/* isNone */.Wi)(this._head))return 0;const a=this._head.max((t=>t.end-t.start));return a.data.end-a.data.start}firstFit(a){if((0,maybe/* isNone */.Wi)(this._head))return null;let e=null,n=this._head;for(;n;){const t=n.data.end-n.data.start;if(t===a)return e?e.next=n.next:this._head=n.next,n.data.start;if(t>a){const t=n.data.start;return n.data.start+=a,t}e=n,n=n.next}return null}free(e,n){const r=e+n;if((0,maybe/* isNone */.Wi)(this._head)){const t=new FreeList_a({start:e,end:r});return void(this._head=t)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=n);const t=new FreeList_a({start:e,end:r});return t.next=this._head,void(this._head=t)}let s=this._head,d=s.next;for(;d;){if(d.data.start>=r){if(s.data.end===e){if(s.data.end+=n,s.data.end===d.data.start){const t=d.data.end-d.data.start;return s.data.end+=t,void(s.next=d.next)}return}if(d.data.start===r)return void(d.data.start-=n);const t=new FreeList_a({start:e,end:r});return t.next=s.next,void(s.next=t)}s=d,d=d.next}if(e===s.data.end)return void(s.data.end+=n);const i=new FreeList_a({start:e,end:r});s.next=i}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/FeatureDisplayList.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n{constructor(t,e,i,n,a){this.target=t,this.geometryType=e,this.materialKey=i,this.indexFrom=n,this.indexCount=a}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}draw(t,e,i){this.target.draw(t,e,i,this.indexFrom,this.indexCount)}}class a{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e}static from(e,i,n,d){const s=new a(e,i);if((0,maybe/* isSome */.pC)(d))for(const t of d)n.seekIndex(t),s.addRecord(n);else for(;n.next();)s.addRecord(n);return s}addRecord(t){const a=this._target,d=this.geometryType,s=t.materialKey,r=t.indexFrom,o=t.indexCount;if((0,maybe/* isNone */.Wi)(this._head)){const t=new n(a,d,s,r,o);return void(this._head=new FreeList_a(t))}let h=null,x=this._head;for(;x;){if(r<x.data.indexFrom)return this._insert(s,r,o,h,x);h=x,x=x.next}this._insert(s,r,o,h,null)}forEach(e){(0,maybe/* isSome */.pC)(this._head)&&this._head.forEach(e)}*infos(){if((0,maybe/* isSome */.pC)(this._head))for(const t of this._head.values())yield t}_insert(a,d,s,r,o){if((0,maybe/* isNone */.Wi)(r)&&(0,maybe/* isNone */.Wi)(o)){const t=new n(this._target,this.geometryType,a,d,s);this._head=new FreeList_a(t)}return (0,maybe/* isNone */.Wi)(r)&&(0,maybe/* isSome */.pC)(o)?this._insertAtHead(a,d,s,o):(0,maybe/* isSome */.pC)(r)&&(0,maybe/* isNone */.Wi)(o)?this._insertAtEnd(a,d,s,r):(0,maybe/* isSome */.pC)(r)&&(0,maybe/* isSome */.pC)(o)?this._insertAtMiddle(a,d,s,r,o):void 0}_insertAtHead(t,e,a,d){const s=e+a;if(t===d.data.materialKey&&s===d.data.indexFrom)d.data.indexFrom=e,d.data.indexCount+=a;else{const s=new n(this._target,this.geometryType,t,e,a);this._head=new FreeList_a(s),this._head.next=d}}_insertAtEnd(t,e,a,d){if(d.data.materialKey===t&&d.data.indexEnd===e)d.data.indexCount+=a;else{const s=new n(this._target,this.geometryType,t,e,a),r=new FreeList_a(s);d.next=r}}_insertAtMiddle(t,e,a,d,s){const r=e+a;if(d.data.materialKey===t&&d.data.indexEnd===e)d.data.indexCount+=a,d.data.materialKey===s.data.materialKey&&d.data.indexEnd===s.data.indexFrom&&(d.data.indexCount+=s.data.indexCount,d.next=s.next);else if(t===s.data.materialKey&&r===s.data.indexFrom)s.data.indexFrom=e,s.data.indexCount+=a;else{const r=new n(this._target,this.geometryType,t,e,a),o=new FreeList_a(r);d.next=o,o.next=s}}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/BufferObject.js
var BufferObject = __webpack_require__(78951);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/FramebufferObject.js
var FramebufferObject = __webpack_require__(18567);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/checkWebGLError.js
var checkWebGLError = __webpack_require__(6174);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/enums.js
var webgl_enums = __webpack_require__(91907);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/builtins.js
var builtins = __webpack_require__(88338);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/Texture.js
var Texture = __webpack_require__(43487);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js
var VertexArrayObject = __webpack_require__(29620);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/BufferPool.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const BufferPool_i=(0,has/* default */.Z)("esri-2d-log-allocations");class BufferPool_n{constructor(t){this._array=t}get array(){return this._array}get length(){return this._array.length}static create(t){const e=_.acquire(t);return new BufferPool_n(e)}expand(t){const e=_.acquire(t);e.set(this._array),_.release(this._array),this._array=e}destroy(){_.release(this._array)}set(t,e){this._array.set(t._array,e)}slice(){const t=_.acquire(this._array.byteLength);return t.set(this._array),new BufferPool_n(t)}}class BufferPool_o{constructor(){this._data=new ArrayBuffer(BufferPool_o.BYTE_LENGTH),this._freeList=new FreeList_e({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t){const e=this._freeList.firstFit(t);return (0,maybe/* isNone */.Wi)(e)?null:new Uint32Array(this._data,e,t/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength)}}class c{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}get _bytesTotal(){return this._pages.length*BufferPool_o.BYTE_LENGTH}acquire(t){if(this._bytesAllocated+=t,BufferPool_i&&console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`),t>BufferPool_o.BYTE_LENGTH)return new Uint32Array(t/Uint32Array.BYTES_PER_ELEMENT);for(const r of this._pages){const s=r.allocate(t);if((0,maybe/* isSome */.pC)(s))return s}return (0,maybe/* unwrapOrThrow */.s3)(this._addPage().allocate(t),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,BufferPool_i&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const e=this._pagesByBuffer.get(t.buffer);e&&e.free(t)}_addPage(){const t=new BufferPool_o;return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}}const _=new c;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/Buffer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const Buffer_a=1.25,d=32767,u=d<<16|d;class Buffer_c{constructor(t,i,r){const s=BufferPool_n.create(i*r*Uint32Array.BYTES_PER_ELEMENT);this.strideInt=r,this.bufferType=t,this.dirty={start:1/0,end:0},this.gpu=null,this._cpu=s,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}destroy(){(0,maybe/* andThen */.Po)(this.gpu,(t=>t.dispose())),(0,maybe/* andThen */.Po)(this._cpu,(t=>t.destroy())),(0,maybe/* andThen */.Po)(this._cpu2,(t=>t.destroy()))}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new FreeList_e({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(t){if(this.maxAvailableSpace()>=t)return;if(t*this.strideInt>this._cpu.length-this.fillPointer){(0,maybe/* isSome */.pC)(this.gpu)&&(this.gpu=null);const r=this._cpu.length/this.strideInt,s=Math.round((r+t)*Buffer_a),e=s*this.strideInt;this._cpu.expand(e*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(r,s-r)}}set(t,i){this._cpu.array[t]!==i&&(this._cpu.array[t]=i,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end))}getBuffer(){if(!this._cpu2){const t=this._cpu.slice();this._cpu2=t}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,i,s,e){const h=s*this.strideInt,n=i*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,a=new Uint32Array(t,n,h),d=(0,maybe/* unwrapOrThrow */.s3)(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,u=h,c=d/this.strideInt-i;if(0!==e)for(let r=0;r<a.length;r++)a[r]+=e;return this._cpu.array.set(a,d),this.dirty.start=Math.min(this.dirty.start,d),this.dirty.end=Math.max(this.dirty.end,d+u),this.fillPointer=Math.max(this.fillPointer,d+u),c}free(t,i,r){const s=t*this.strideInt,e=(t+i)*this.strideInt;if(!0===r)for(let h=t;h!==t+i;h++)this._cpu.array[h*this.strideInt]=u;this.dirty.start=Math.min(this.dirty.start,s),this.dirty.end=Math.max(this.dirty.end,e),this.freeList.free(t,i)}upload(t){if(this.dirty.end){if((0,maybe/* isNone */.Wi)(this.gpu))return this.gpu=this._createBuffer(t),this.dirty.start=1/0,void(this.dirty.end=0);this.gpu.setSubDataFromView(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(t){const i=35048;return"index"===this.bufferType?BufferObject/* default.createIndex */.Z.createIndex(t,i,this._cpu.array):BufferObject/* default.createVertex */.Z.createVertex(t,i,this._cpu.array)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/DisplayRecordReader.js
var DisplayRecordReader = __webpack_require__(18018);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/Geometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class Geometry_o{constructor(e,t){this._indicesInvalid=!1,this.geometryType=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null),this._indexBuffer&&this._indexBuffer.destroy(),this._vertexBuffer&&this._vertexBuffer.destroy()}insert(t,r,n){if(!t.records.byteLength)return;const o=t.stride;if(this._vertexBuffer&&this._indexBuffer){const i=t.indices.byteLength/4,n=t.vertices.byteLength/o;this._indexBuffer.ensure(i),this._vertexBuffer.ensure(n);const{vertices:f,indices:d}=t,h=DisplayRecordReader/* DisplayRecordReader.from */.$.from(t.records),u=this._vertexBuffer.insert(f,0,f.byteLength/o,0),_=this._indexBuffer.insert(d,0,d.byteLength/4,u);if(h.forEach((e=>{e.indexFrom+=_,e.vertexFrom+=u})),(0,maybe/* unwrapOrThrow */.s3)(this._records,"Expected records to be defined").link(h),r)this._indicesInvalid=!0;else if(this._displayList){const e=h.getCursor();for(;e.next();)this._displayList.addRecord(e)}}else{const e=t.indices.byteLength/4,n=t.vertices.byteLength/o,f=o/Uint32Array.BYTES_PER_ELEMENT;this._records=DisplayRecordReader/* DisplayRecordReader.from */.$.from(t.records),this._indexBuffer=new Buffer_c("index",e,1),this._vertexBuffer=new Buffer_c("vertex",n,f),this._indexBuffer.insert(t.indices,0,t.indices.byteLength/4,0),this._vertexBuffer.insert(t.vertices,0,t.vertices.byteLength/o,0),r&&(this._indicesInvalid=!0)}}remove(e){if(!(0,maybe/* isNone */.Wi)(this._records))for(const t of e){const e=this._records.getCursor();if(!e.lookup(t))continue;const r=e.indexFrom,i=e.vertexFrom;let s=e.indexCount,n=e.vertexCount;for(;e.next()&&e.id===t;)s+=e.indexCount,n+=e.vertexCount;this._indexBuffer.free(r,s),this._vertexBuffer.free(i,n,!0),this._records.delete(t)}}draw(e,r,i,s,o){if(!this._vertexBuffer||!this._indexBuffer||(0,maybe/* isNone */.Wi)(this._records))return;if(((0,maybe/* isNone */.Wi)(this._vertexBuffer.gpu)||(0,maybe/* isNone */.Wi)(this._indexBuffer.gpu))&&(this._vao&&(this._vao.dispose(),this._vao=null),this._vertexBuffer.gpu=null,this._indexBuffer.gpu=null),this._vertexBuffer.upload(e),this._indexBuffer.upload(e),!this._vao){const t=this._vertexBuffer.gpu,s=this._indexBuffer.gpu;if(!s||!t)return;this._vao=new VertexArrayObject/* default */.Z(e,i,r,{geometry:t},s)}const f=this._vao,d=s*Uint32Array.BYTES_PER_ELEMENT;e.bindVAO(f),e.drawElements(4,o,5125,d)}forEachCommand(e){if(!(0,maybe/* isNone */.Wi)(this._records)){if(this._sortIndices(this._records),!this._displayList){const e=this._cursorIndexOrder;this._displayList=a.from(this,this.geometryType,this._records.getCursor(),e)}this._displayList.forEach(e)}}_sortIndices(e){if(!this._indicesInvalid)return;this._indicesInvalid=!1;let t=0;const r=e.getCursor(),i=this._indexBuffer.getBuffer(),s=[],n=[],o=[];for(;r.next();)n.push(r.index),o.push(r.sortKey),s.push(r.id);n.sort(((e,t)=>{const r=o[t],i=o[e];return i===r?s[t]-s[e]:r-i}));const f=e.getCursor();for(const d of n){if(!f.seekIndex(d))throw new Error("Expected to find index");const{indexFrom:e,indexCount:r}=f;f.indexFrom=t;for(let s=0;s<r;s++)this._indexBuffer.set(t++,i.array[e+s])}this._cursorIndexOrder=n,this._displayList=null}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/FeatureTile.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=50,f=4,S=8,y=100;let w=0;class g extends WGLTile/* WGLTile */.o{constructor(t,r,s,i,a){super(t,r,s),this.instanceId=w++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new CircularArray/* default */.Z(y),this._bufferPatches=new CircularArray/* default */.Z(y),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=(0,mat2df32.c)(),this._store=i,this._requestLabelUpdate=a}destroy(){super.destroy(),this._renderState.current.geometry.forEach((e=>e.destroy()))}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}setTransform(e,t){super.setTransform(e,t);const r=this.transforms.labelMat2d,s=e.getScreenTransform(r,t),h=(0,vec2f32.c)();(0,vec2.t)(h,[this.x,this.y],s),(0,mat2d.i)(r),(0,mat2d.t)(r,r,h),(0,mat2d.m)(r,e.viewMat2d,r)}patch(e,t){if(this.patchCount++,e.clear&&this._lastMessageWasClear)return;this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=l&&this._dropPatches();const r=e,s=r.addOrUpdate&&this.key.id!==r.addOrUpdate.tileKeyOrigin;t&&s?this._bufferPatches.enqueue(r):(r.sort=r.sort&&!t,this._patches.enqueue(r)),this.requestRender()}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<f;e++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=S,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,(0,maybe/* isSome */.pC)(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const e=this._bufferPatches.peek();if(!(0,maybe/* isSome */.pC)(e)||!e.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const e=this._bufferPatches.dequeue();(0,maybe/* isSome */.pC)(e)&&this._patchBuffer(e)}}_updateMesh(){const e=this._patches.peek();if((0,maybe/* isSome */.pC)(e)&&e.clear&&null!==this._renderState.next)return;const r=this._patches.dequeue();if((0,maybe/* isSome */.pC)(r)){if(!0===r.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(r),r.end&&(this.ready(),this._swapRenderStates())}}_patch(e){(0,Utils/* forEachGeometryType */.Z_)((t=>{this._remove(t,e.remove),this._insert(t,e,!1)}))}_patchBuffer(e){(0,Utils/* forEachGeometryType */.Z_)((t=>{this._insert(t,e,!0)}))}_insert(e,t,i){try{var a;const n=(0,maybe/* unwrapOr */.Pt)(this._renderState.next,this._renderState.current),h=null==(a=t.addOrUpdate)?void 0:a.data[e],c=n.geometry;if((0,maybe/* isNone */.Wi)(h))return;c.has(e)||c.set(e,new Geometry_o(e,this.stage)),c.get(e).insert(h,t.sort,i),e===enums/* WGLGeometryType.LABEL */.LW.LABEL&&this._insertLabelMetrics(t.type,h.metrics,t.clear)}catch(n){}}_insertLabelMetrics(e,t,i){const a=(0,maybe/* unwrapOr */.Pt)(this._renderState.next,this._renderState.current);if((0,maybe/* isNone */.Wi)(t))return;const n=o.from(t);if((0,maybe/* isNone */.Wi)(a.metrics))a.metrics=n;else{if("update"===e){const e=n.getCursor();for(;e.next();)a.metrics.delete(e.id)}a.metrics.link(n)}}_remove(e,t){const s=(0,maybe/* unwrapOr */.Pt)(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&s&&(s.remove(t),this._removeLabelMetrics(t))}_removeLabelMetrics(e){const{metrics:t}=(0,maybe/* unwrapOr */.Pt)(this._renderState.next,this._renderState.current);if(!(0,maybe/* isNone */.Wi)(t)&&e.length)for(const r of e)for(;t.delete(r););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const r=this._patches.dequeue();if((0,maybe/* isNone */.Wi)(r))break;if(r.clear){if(t)break;t=!0}e.push(r)}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)))}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/support/rendererUtils.js
var rendererUtils = __webpack_require__(54680);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/BaseTileRenderer.js
var BaseTileRenderer = __webpack_require__(25970);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js
var visualVariablesUtils = __webpack_require__(57786);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/brushes.js + 14 modules
var brushes = __webpack_require__(14351);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/FeatureContainer.js + 2 modules
var FeatureContainer = __webpack_require__(43502);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/WGLFeatureView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const WGLFeatureView_a=(0,has/* default */.Z)("featurelayer-order-by-server-enabled");class WGLFeatureView_l extends FeatureContainer/* FeatureContainer */.T{constructor(e,t,s,i){super(e),this._pointToCallbacks=new Map,this._layer=s,this._layerView=t,this._onUpdate=i}renderChildren(e){if(this.attributeView.update(),this.hasAnimation){e.painter.effects.integrate.draw(e,e.attributeView)}super.renderChildren(e)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(e){const s=(0,promiseUtils/* createResolver */.hh)();return this._pointToCallbacks.set(e,s),this.requestRender(),s.promise}onTileData(e,t){const s=WGLFeatureView_a&&"orderBy"in this._layer&&this._layer.orderBy,i=(null==s?void 0:s.length)&&!s[0].valueExpression&&s[0].field,r=s&&this._layerView.orderByFields===i;e.patch(t,r),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){this.contains(e)||this.addChild(e)}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._layerView.featureEffectView.transitionStep(e,t),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(e){const{minScale:t,maxScale:s}=this._layer,i=e.state.scale;i<=(t||1/0)&&i>=s&&super.doRender(e)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some((e=>e.labelingInfo&&e.labelingInfo.length&&e.labelsVisible));const e=this._layer.featureReduction,t=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}prepareRenderPasses(e){const t=e.registerRenderPass({name:"label",brushes:[brushes/* brushes.label */.U.label],target:()=>this.hasLabels?this.children:null,drawPhase:enums/* WGLDrawPhase.LABEL */.jx.LABEL|enums/* WGLDrawPhase.LABEL_ALPHA */.jx.LABEL_ALPHA}),i=e.registerRenderPass({name:"geometry",brushes:[brushes/* brushes.fill */.U.fill,brushes/* brushes.line */.U.line,brushes/* brushes.marker */.U.marker,brushes/* brushes.text */.U.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:e.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),a=e.registerRenderPass({name:"highlight",brushes:[brushes/* brushes.fill */.U.fill,brushes/* brushes.line */.U.line,brushes/* brushes.marker */.U.marker,brushes/* brushes.text */.U.text],target:()=>this.children,drawPhase:enums/* WGLDrawPhase.HIGHLIGHT */.jx.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(e),i,a,t]}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/SymbolTileRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends BaseTileRenderer/* default */.Z{install(e){const t=()=>this.notifyChange("updating"),i=new WGLFeatureView_l(this.tileInfoView,this.layerView,this.layer,t);this.featuresView=i,e.addChild(i)}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy()}fetchResource(e,t){const{url:s}=e,r=this.featuresView.stage;try{return r.resourceManager.fetchResource(s,{signal:t.signal})}catch(a){return (0,promiseUtils/* isAbortError */.D_)(a)?Promise.resolve({width:0,height:0}):Promise.reject(a)}}isUpdating(){var e;const i=super.isUpdating(),s=!this.featuresView||this.featuresView.isUpdating(),r=null==(e=this.featuresView)?void 0:e.hasEmptyAttributeView(),a=i||s||i&&r;return (0,has/* default */.Z)("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${a}\n  -> updatingTiles ${i}\n  -> hasFeaturesView ${!!this.featuresView}\n  -> updatingFeaturesView ${s}`),a}hitTest(e){return this.featuresView.hitTest(e)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const i=((0,rendererUtils/* simplifyVVRenderer */.a)(e).visualVariables||[]).map((e=>{const t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=(0,visualVariablesUtils/* convertVisualVariables */.I)(i)}this.featuresView.setRendererInfo(e,t,this.layerView.featureEffect)}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()))}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()))}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(e){const t=this.tileInfoView.getTileBounds((0,aaBoundingRect/* create */.Ue)(),e),i=()=>this.layerView.view.labelManager.requestUpdate();return new g(e,t[0],t[3],this.featuresView.attributeView,i)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()}};p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],p);const SymbolTileRenderer_c=p;


/***/ }),

/***/ 57786:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ m),
/* harmony export */   "qc": () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports convertColorVariable, getVisualVariablesFields, normalizeSizeElement, normalizeSizeStops, stopToSizeStop */
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61681);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95550);
/* harmony import */ var _engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62173);
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14266);
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38716);
/* harmony import */ var _engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41657);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function a(e){return{value:e.value,size:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .toPt */ .t_)(e.size)}}function u(e){return e.map((e=>a(e)))}function c(e){if("string"==typeof e||"number"==typeof e)return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .toPt */ .t_)(e);const s=e;return{type:"size",expression:s.expression,stops:u(s.stops)}}function p(e){const t=e&&e.length>0?{}:null;return t&&e.forEach((e=>{const s=e.type;e.field&&(t[s]=e.field)})),t}const f=e=>{const t=[],n=[],i=u(e),l=i.length;for(let r=0;r<6;r++){const e=i[Math.min(r,l-1)];t.push(e.value),n.push(null==e.size?_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_1__/* .NAN_MAGIC_NUMBER */ .AI:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .pt2px */ .F2)(e.size))}return{values:new Float32Array(t),sizes:new Float32Array(n)}};function m(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t)return{vvFields:t,vvRanges:s};for(const n of e)if(n.field&&(t[n.type]=n.field),"size"===n.type){s.size||(s.size={});const e=n;switch((0,_engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getTypeOfSizeVisualVariable */ .a)(e)){case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .WGLVVFlag.SIZE_MINMAX_VALUE */ .X.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:c(e.minSize),maxSize:c(e.maxSize)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .WGLVVFlag.SIZE_SCALE_STOPS */ .X.SIZE_SCALE_STOPS:s.size.scaleStops={stops:u(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .WGLVVFlag.SIZE_FIELD_STOPS */ .X.SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=f(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t}}else s.size.fieldStops={type:"static",...f(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .WGLVVFlag.SIZE_UNIT_VALUE */ .X.SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===n.type)s.color=y(n);else if("opacity"===n.type)s.opacity=v(n);else if("rotation"===n.type){const e=n;s.rotation={type:e.rotationType}}return{vvFields:t,vvRanges:s}}function v(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const n=s[Math.min(e,s.length-1)];t.values[e]=n.value,t.opacities[e]=n.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s}}return t}function g(e,t,s){e[4*t+0]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a}function y(t){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__/* .isNone */ .Wi)(t))return null;if(t.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof t.field){if(!t.stops)return null;{if(t.stops.length>8)return null;s.field=t.field;const e=t.stops;for(let t=0;t<8;++t){const n=e[Math.min(t,e.length-1)];s.values[t]=n.value,g(s.colors,t,n.color)}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const e=t.stops&&t.stops.length>=0&&t.stops[0].color;for(let t=0;t<8;t++)s.values[t]=1/0,g(s.colors,t,e)}}for(let e=0;e<32;e+=4)(0,_engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_0__/* .premultiplyAlpha */ .pr)(s.colors,e,!0);return s}


/***/ })

};
;
//# sourceMappingURL=269.render-page.js.map