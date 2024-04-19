"use strict";
exports.id = 7705;
exports.ids = [7705];
exports.modules = {

/***/ 45584:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ _),
/* harmony export */   "b": () => (/* binding */ P)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95650);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57218);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5885);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4731);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99163);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90511);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91636);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40433);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82082);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6502);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11478);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5664);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97675);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6665);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3417);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(30786);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54207);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(73393);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2833);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(89585);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3864);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(20105);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(12664);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(41272);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_HeaderComment_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(78115);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(10938);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(23410);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(3961);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function P(P){const _=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_27__/* .ShaderBuilder */ .kG,S=_.vertex.code,$=_.fragment.code;return _.include(_views_3d_webgl_engine_core_shaderLibrary_util_HeaderComment_glsl_js__WEBPACK_IMPORTED_MODULE_24__/* .HeaderComment */ .a,{name:"Default Material Shader",output:P.output}),_.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .PositionAttribute */ .f),_.varyings.add("vpos","vec3"),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_22__/* .VisualVariables */ .kl,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .InstancedDoublePrecision */ .f,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .VerticalOffset */ .LC,P),0!==P.output&&7!==P.output||(_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .NormalAttribute */ .O,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .w,{linearDepth:!1}),0===P.normalType&&P.offsetBackfaces&&_.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .Offset */ .w),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .ComputeNormalTexture */ .Q,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .VertexNormal */ .B,P),P.instancedColor&&_.attributes.add("instanceColor","vec4"),_.varyings.add("localvpos","vec3"),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .TextureCoordinateAttribute */ .D,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ForwardLinearDepth */ .q,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .SymbolColor */ .R,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .VertexColor */ .c,P),_.vertex.uniforms.add("externalColor","vec4"),_.varyings.add("vcolorExt","vec4"),P.multipassTerrainEnabled&&_.varyings.add("depth","float"),S.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${P.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl.float */ .H.float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .symbolAlphaCutoff */ .bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===P.normalType?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${P.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===P.normalType&&P.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${P.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===P.output&&(_.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .Slice */ .p2,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .DiscardOrAdjustAlpha */ .sj,P),P.multipassTerrainEnabled&&(_.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .ReadLinearDepth */ .S),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_17__/* .multipassTerrainTest */ .l,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__/* .MixExternalColor */ .y),$.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`vec4 texColor = vec4(1.0);`}
        ${P.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===P.output&&(_.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .Slice */ .p2,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .EvaluateSceneLighting */ .X,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .EvaluateAmbientOcclusion */ .K,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .DiscardOrAdjustAlpha */ .sj,P),P.receiveShadows&&_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .ReadShadowMap */ .hX,P),P.multipassTerrainEnabled&&(_.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .ReadLinearDepth */ .S),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_17__/* .multipassTerrainTest */ .l,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .PhysicallyBasedRenderingParameters */ .jV,P),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_19__/* .PhysicallyBasedRendering */ .T,P),_.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__/* .MixExternalColor */ .y),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .Normals */ .k,P),$.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===P.normalType?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
        vec3 normal = screenDerivativeNormal(localvpos);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===P.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${P.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===P.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${P.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${P.hasNormalTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
              mat3 tangentSpace = ${P.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===P.pbrMode||2===P.pbrMode?1===P.viewingMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`vec3 normalGround = normalize(vpos + localOrigin);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H``}
        ${1===P.pbrMode||2===P.pbrMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${P.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),_.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .DefaultMaterialAuxiliaryPasses */ .s,P),_}const _=Object.freeze({__proto__:null,build:P});


/***/ }),

/***/ 60926:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ E),
/* harmony export */   "b": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95650);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57218);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5885);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4731);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99163);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90511);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91636);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40433);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82082);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6502);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5664);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97675);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6665);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30786);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54207);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73393);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89585);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3864);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20105);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(12664);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(41272);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(10938);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(23410);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3961);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function j(j){const E=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_23__/* .ShaderBuilder */ .kG,O=E.vertex.code,_=E.fragment.code;return E.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .PositionAttribute */ .f),E.varyings.add("vpos","vec3"),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_19__/* .VisualVariables */ .kl,j),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .InstancedDoublePrecision */ .f,j),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .VerticalOffset */ .LC,j),0!==j.output&&7!==j.output||(E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .NormalAttribute */ .O,j),E.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .w,{linearDepth:!1}),j.offsetBackfaces&&E.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .Offset */ .w),j.instancedColor&&E.attributes.add("instanceColor","vec4"),E.varyings.add("vNormalWorld","vec3"),E.varyings.add("localvpos","vec3"),j.multipassTerrainEnabled&&E.varyings.add("depth","float"),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .TextureCoordinateAttribute */ .D,j),E.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ForwardLinearDepth */ .q,j),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .SymbolColor */ .R,j),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .VertexColor */ .c,j),E.vertex.uniforms.add("externalColor","vec4"),E.varyings.add("vcolorExt","vec4"),O.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${j.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl.float */ .H.float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .symbolAlphaCutoff */ .bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${j.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${j.multipassTerrainEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===j.output&&(E.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .Slice */ .p2,j),E.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .DiscardOrAdjustAlpha */ .sj,j),j.multipassTerrainEnabled&&(E.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .ReadLinearDepth */ .S),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .multipassTerrainTest */ .l,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .MixExternalColor */ .y),_.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`vec4 texColor = vec4(1.0);`}
        ${j.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===j.output&&(E.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .Slice */ .p2,j),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .EvaluateSceneLighting */ .X,j),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .EvaluateAmbientOcclusion */ .K,j),E.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .DiscardOrAdjustAlpha */ .sj,j),j.receiveShadows&&E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .ReadShadowMap */ .hX,j),j.multipassTerrainEnabled&&(E.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .ReadLinearDepth */ .S),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .multipassTerrainTest */ .l,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_17__/* .PhysicallyBasedRenderingParameters */ .jV,j),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .PhysicallyBasedRendering */ .T,j),E.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .MixExternalColor */ .y),_.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===j.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${j.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===j.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${j.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===j.pbrMode||2===j.pbrMode?1===j.viewingMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`vec3 normalGround = normalize(vpos + localOrigin);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H``}
        ${1===j.pbrMode||2===j.pbrMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__/* .glsl */ .H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${j.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),E.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .DefaultMaterialAuxiliaryPasses */ .s,j),E}const E=Object.freeze({__proto__:null,build:j});


/***/ }),

/***/ 79912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ n),
/* harmony export */   "f": () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports O, U, Z, a, b, d, e, g, h, o, u, v, z */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function r(n){const r=new Float32Array(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function t(n,r,t){const e=new Float32Array(3);return e[0]=n,e[1]=r,e[2]=t,e}function e(n,r){return new Float32Array(n,r,3)}function a(){return n()}function o(){return t(1,1,1)}function u(){return t(1,0,0)}function s(){return t(0,1,0)}function c(){return t(0,0,1)}const i=a(),f=o(),l=u(),_=s(),w=c(),y=Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:e,zeros:a,ones:o,unitX:u,unitY:s,unitZ:c,ZEROS:i,ONES:f,UNIT_X:l,UNIT_Y:_,UNIT_Z:w});


/***/ }),

/***/ 57989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pJ": () => (/* binding */ a),
/* harmony export */   "XO": () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export isTelemetryDevEnvironment */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,n.some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(r)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(l)||null!=a.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function o(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(n).some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}const t=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,n=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,l,/^jsapps.esri.com$/,r,s];


/***/ }),

/***/ 44883:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"image",...r});return a}


/***/ }),

/***/ 47705:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fetch": () => (/* binding */ $),
  "gltfToEngineResources": () => (/* binding */ objectResourceUtils_K),
  "parseUrl": () => (/* binding */ objectResourceUtils_q)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/devEnvironmentUtils.js
var devEnvironmentUtils = __webpack_require__(57989);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat3.js
var mat3 = __webpack_require__(1662);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(34344);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(24455);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(39100);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(6766);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(8909);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(37116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js + 6 modules
var BufferView = __webpack_require__(81936);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(86717);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(56999);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/buffer/utils.js + 2 modules
var utils = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js
var DefaultLoadingContext = __webpack_require__(91420);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/glTF/loader.js + 6 modules
var loader = __webpack_require__(20016);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js
var indexUtils = __webpack_require__(1731);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(66341);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(67979);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Version.js
var Version = __webpack_require__(26139);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/requestImageUtils.js
var requestImageUtils = __webpack_require__(44883);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(17135);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(15095);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class BoundingInfo_a{constructor(i,s,a,c){this.primitiveIndices=i,this._numIndexPerPrimitive=s,this.indices=a,this.position=c,this.center=(0,vec3f64.c)(),(0,Util/* assert */.hu)(i.length>=1),(0,Util/* assert */.hu)(a.length%this._numIndexPerPrimitive==0),(0,Util/* assert */.hu)(a.length>=i.length*this._numIndexPerPrimitive),(0,Util/* assert */.hu)(3===c.size||4===c.size);const{data:o,size:M}=c,d=i.length;let l=M*a[this._numIndexPerPrimitive*i[0]];b.clear(),b.push(l),this.bbMin=(0,vec3f64.f)(o[l],o[l+1],o[l+2]),this.bbMax=(0,vec3f64.a)(this.bbMin);for(let t=0;t<d;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){l=M*a[s+i],b.push(l);let t=o[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}(0,vec3.e)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let t=0;t<b.length;++t){l=b.getItemAt(t);const i=o[l]-this.center[0],s=o[l+1]-this.center[1],e=o[l+2]-this.center[2],n=i*i+s*s+e*e;if(n<=m)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,m=this.radius*this.radius;const a=h/r;this.center[0]+=i*a,this.center[1]+=s*a,this.center[2]+=e*a}b.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,vec3.h)(this.bbMin,this.bbMax)>1){const i=(0,vec3.e)((0,vec3f64.c)(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,n=new Uint8Array(s),r=new Array(8);for(let t=0;t<8;++t)r[t]=0;const{data:h,size:b}=this.position;for(let t=0;t<s;++t){let s=0;const e=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=b*this.indices[e],c=h[a],o=h[a+1],M=h[a+2];for(let i=1;i<this._numIndexPerPrimitive;++i){a=b*this.indices[e+i];const t=h[a],s=h[a+1],n=h[a+2];t<c&&(c=t),s<o&&(o=s),n<M&&(M=n)}c<i[0]&&(s|=1),o<i[1]&&(s|=2),M<i[2]&&(s|=4),n[t]=s,++r[s]}let c=0;for(let t=0;t<8;++t)r[t]>0&&++c;if(c<2)return;const o=new Array(8);for(let t=0;t<8;++t)o[t]=r[t]>0?new Uint32Array(r[t]):void 0;for(let t=0;t<8;++t)r[t]=0;for(let t=0;t<s;++t){const i=n[t];o[i][r[i]++]=this.primitiveIndices[t]}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==o[t]&&(this._children[t]=new BoundingInfo_a(o[t],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){b.prune()}}const b=new PooledArray/* default */.Z({deallocator:null});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/uid.js
var uid = __webpack_require__(7958);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class ContentObject_r{constructor(){this.id=(0,uid/* generateUID */.D)()}unload(){}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js + 2 modules
var geometryDataUtils = __webpack_require__(58196);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class Geometry_u extends ContentObject_r{constructor(t,e=[],i=0,s=-1){super(),this._primitiveType=i,this.edgeIndicesLength=s,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,r]of t)r&&this._vertexAttributes.set(n,{...r});if(null==e||0===e.length){const t=Geometry_h(this._vertexAttributes),e=(0,geometryDataUtils/* generateDefaultIndexArray */.p)(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e)}else for(const[n,r]of e)r&&(this._indices.set(n,Geometry_g(r)),"position"===n&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e.data=Array.from(e.data),e.exclusive=!0),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return (0,maybe/* isNone */.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)}computeAttachmentOriginTriangles(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return (0,geometryDataUtils/* computeAttachmentOriginTriangles */.cM)(i,e,t)}computeAttachmentOriginPoints(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return (0,geometryDataUtils/* computeAttachmentOriginPoints */.NO)(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.indices.get("position");if(0===t.length)return null;const i=0===this.primitiveType?3:1;(0,Util/* assert */.hu)(t.length%i==0,"Indexing error: "+t.length+" not divisible by "+i);const s=(0,geometryDataUtils/* generateDefaultIndexArray */.p)(t.length/i),r=this.vertexAttributes.get("position");return new BoundingInfo_a(s,i,t,r)}}function Geometry_h(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function Geometry_g(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(27755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(31355);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(19431);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(86098);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/requestUtils.js
var requestUtils = __webpack_require__(73401);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(36567);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/libs/basisu/BasisU.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function BasisU_s(){if((0,maybe/* isNone */.Wi)(BasisU_i)){const t=t=>(0,assets/* getAssetUrl */.V)(`esri/libs/basisu/${t}`);BasisU_i=__webpack_require__.e(/* import() */ 1681).then(__webpack_require__.bind(__webpack_require__, 21681)).then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return BasisU_i}let BasisU_i;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/Texture.js
var Texture = __webpack_require__(43487);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/Util.js
var webgl_Util = __webpack_require__(62486);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let BasisUtil_s=null,BasisUtil_i=null;async function BasisUtil_a(){return (0,maybe/* isNone */.Wi)(BasisUtil_i)&&(BasisUtil_i=BasisU_s(),BasisUtil_s=await BasisUtil_i),BasisUtil_i}function BasisUtil_o(t,n){if((0,maybe/* isNone */.Wi)(BasisUtil_s))return t.byteLength;const r=new BasisUtil_s.BasisFile(new Uint8Array(t)),i=BasisUtil_c(r)?l(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),n):0;return r.close(),r.delete(),i}function BasisUtil_g(t,n){if((0,maybe/* isNone */.Wi)(BasisUtil_s))return t.byteLength;const r=new BasisUtil_s.KTX2File(new Uint8Array(t)),i=u(r)?l(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),n):0;return r.close(),r.delete(),i}function l(e,t,n,s,i){const a=(0,webgl_Util/* getBytesPerElementFormat */.RG)(t?37496:37492),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(n*s*a*o)}function BasisUtil_c(e){return e.getNumImages()>=1&&!e.isUASTC()}function u(e){return e.getFaces()>=1&&e.isETC1S()}async function m(t,n,r){(0,maybe/* isNone */.Wi)(BasisUtil_s)&&(BasisUtil_s=await BasisUtil_a());const i=new BasisUtil_s.BasisFile(new Uint8Array(r));if(!BasisUtil_c(i))return null;i.startTranscoding();const o=d(t,n,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>i.transcodeImage(n,0,e,t,0,0)));return i.close(),i.delete(),o}async function BasisUtil_h(t,n,r){(0,maybe/* isNone */.Wi)(BasisUtil_s)&&(BasisUtil_s=await BasisUtil_a());const i=new BasisUtil_s.KTX2File(new Uint8Array(r));if(!u(i))return null;i.startTranscoding();const o=d(t,n,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>i.transcodeImage(n,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}function d(e,t,r,s,i,a,o,g){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,m]=l?s?[1,37496]:[0,37492]:c?s?[3,33779]:[2,33776]:[13,6408],h=t.hasMipmap?r:Math.min(1,r),d=[];for(let n=0;n<h;n++)d.push(new Uint8Array(o(n,u))),g(n,u,d[n]);const p=d.length>1,f=p?9987:9729,w={...t,samplingMode:f,hasMipmap:p,internalFormat:m,width:i,height:a};return new Texture/* default */.Z(e,w,{type:"compressed",levels:d})}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const DDSUtil_n=Logger/* default.getLogger */.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),DDSUtil_o=542327876,DDSUtil_a=131072,DDSUtil_i=4;function DDSUtil_s(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function DDSUtil_l(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const DDSUtil_u=DDSUtil_s("DXT1"),DDSUtil_c=DDSUtil_s("DXT3"),DDSUtil_m=DDSUtil_s("DXT5"),DDSUtil_h=31,p=0,DDSUtil_d=1,DDSUtil_g=2,DDSUtil_f=3,w=4,C=7,x=20,D=21;function DDSUtil_b(e,t,n){const{textureData:o,internalFormat:a,width:i,height:s}=A(n,t.hasMipmap);return t.samplingMode=o.levels.length>1?9987:9729,t.hasMipmap=o.levels.length>1,t.internalFormat=a,t.width=i,t.height=s,new Texture/* default */.Z(e,t,o)}function A(e,r){const s=new Int32Array(e,0,DDSUtil_h);if(s[p]!==DDSUtil_o)return DDSUtil_n.error("Invalid magic number in DDS header"),null;if(!(s[x]&DDSUtil_i))return DDSUtil_n.error("Unsupported format, must contain a FourCC code"),null;const b=s[D];let A,M;switch(b){case DDSUtil_u:A=8,M=33776;break;case DDSUtil_c:A=16,M=33778;break;case DDSUtil_m:A=16,M=33779;break;default:return DDSUtil_n.error("Unsupported FourCC code:",DDSUtil_l(b)),null}let v=1,F=s[w],U=s[DDSUtil_f];0==(3&F)&&0==(3&U)||(DDSUtil_n.warn("Rounding up compressed texture size to nearest multiple of 4."),F=F+3&-4,U=U+3&-4);const T=F,j=U;let k,y;s[DDSUtil_g]&DDSUtil_a&&!1!==r&&(v=Math.max(1,s[C])),1===v||(0,mathUtils/* isPowerOfTwo */.wt)(F)&&(0,mathUtils/* isPowerOfTwo */.wt)(U)||(DDSUtil_n.warn("Ignoring mipmaps of non power of two sized compressed texture."),v=1);let I=s[DDSUtil_d]+4;const S=[];for(let t=0;t<v;++t)y=(F+3>>2)*(U+3>>2)*A,k=new Uint8Array(e,I,y),S.push(k),I+=y,F=Math.max(1,F>>1),U=Math.max(1,U>>1);return{textureData:{type:"compressed",levels:S},internalFormat:M,width:T,height:j}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const DefaultVertexAttributeLocations_o=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]);

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexBufferLayouts.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const DefaultVertexBufferLayouts_e=[{name:"position",count:3,type:5126,offset:0,stride:12,normalized:!1}],DefaultVertexBufferLayouts_t=[{name:"position",count:3,type:5126,offset:0,stride:20,normalized:!1},{name:"uv0",count:2,type:5126,offset:12,stride:20,normalized:!1}],DefaultVertexBufferLayouts_o=[{name:"position",count:3,type:5126,offset:0,stride:32,normalized:!1},{name:"normal",count:3,type:5126,offset:12,stride:32,normalized:!1},{name:"uv0",count:2,type:5126,offset:24,stride:32,normalized:!1}],DefaultVertexBufferLayouts_n=[{name:"position",count:3,type:5126,offset:0,stride:16,normalized:!1},{name:"color",count:4,type:5121,offset:12,stride:16,normalized:!1}],DefaultVertexBufferLayouts_i=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],DefaultVertexBufferLayouts_s=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/BufferObject.js
var BufferObject = __webpack_require__(78951);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js
var VertexArrayObject = __webpack_require__(29620);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/glUtil3D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function glUtil3D_i(o,i=DefaultVertexBufferLayouts_i,l=DefaultVertexAttributeLocations_o,m=-1,f=1){let u=null;if(i===DefaultVertexBufferLayouts_s)u=new Float32Array([m,m,0,0,f,m,1,0,m,f,0,1,f,f,1,1]);else u=new Float32Array([m,m,f,m,m,f,f,f]);return new VertexArrayObject/* default */.Z(o,l,{geometry:i},{geometry:BufferObject/* default.createVertex */.Z.createVertex(o,35044,u)})}function glUtil3D_l(r,o=t,i=e){const l=new Float32Array([-1,-1,3,-1,-1,3]);return new a(r,i,{geometry:o},{geometry:n.createVertex(r,35044,l)})}const glUtil3D_m=4;function glUtil3D_f(e,t=glUtil3D_m){return new o(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:t,height:t})}function glUtil3D_u(e,t,r=glUtil3D_m){const n=new Uint8Array(r*r*4);for(let o=0;o<n.length;o+=4)n[o+0]=255*t[0],n[o+1]=255*t[1],n[o+2]=255*t[2],n[o+3]=255*t[3];return new o(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:r,height:r},n)}function glUtil3D_g(e){return new o(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([255,255,255,255]))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/FramebufferObject.js
var FramebufferObject = __webpack_require__(18567);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/capabilities/isWebGL2Context.js
var isWebGL2Context = __webpack_require__(79193);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class Texture_b extends ContentObject_r{constructor(t,e){super(),this.data=t,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Evented/* default */.Z,this.params=e||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Texture_b.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const t=this.data;(0,maybe/* isNone */.Wi)(t)||(t instanceof HTMLVideoElement?this.startPreloadVideoElement(t):t instanceof HTMLImageElement&&this.startPreloadImageElement(t))}startPreloadVideoElement(t){(0,urlUtils/* isBlobProtocol */.jc)(t.src)||"auto"===t.preload&&t.crossOrigin||(t.preload="auto",t.crossOrigin="anonymous",t.src=t.src)}startPreloadImageElement(t){(0,urlUtils/* isDataProtocol */.HK)(t.src)||(0,urlUtils/* isBlobProtocol */.jc)(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}static getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static estimateTexMemRequired(t,e){if((0,maybe/* isNone */.Wi)(t))return 0;if((0,typedArrayUtil/* isArrayBuffer */.eP)(t)||(0,typedArrayUtil/* isUint8Array */.lq)(t))return e.encoding===Texture_b.KTX2_ENCODING?BasisUtil_g(t,e.mipmap):e.encoding===Texture_b.BASIS_ENCODING?BasisUtil_o(t,e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?Texture_b.getDataDimensions(t):e;return(e.mipmap?4/3:1)*r*i*(e.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(t){var e;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(e=this.params.maxAnisotropy)?e:this.params.mipmap?t.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(t,e){if((0,maybe/* isSome */.pC)(this._glTexture))return this._glTexture;if((0,maybe/* isSome */.pC)(this._loadingPromise))return this._loadingPromise;const r=this.data;return (0,maybe/* isNone */.Wi)(r)?(this._glTexture=new Texture/* default */.Z(t,this.createDescriptor(t),null),this._glTexture):"string"==typeof r?this.loadFromURL(t,e,r):r instanceof Image?this.loadFromImageElement(t,e,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(t,e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(t,r,e):((0,typedArrayUtil/* isArrayBuffer */.eP)(r)||(0,typedArrayUtil/* isUint8Array */.lq)(r))&&this.params.encoding===Texture_b.DDS_ENCODING?this.loadFromDDSData(t,r):((0,typedArrayUtil/* isArrayBuffer */.eP)(r)||(0,typedArrayUtil/* isUint8Array */.lq)(r))&&this.params.encoding===Texture_b.KTX2_ENCODING?this.loadFromKTX2(t,r):((0,typedArrayUtil/* isArrayBuffer */.eP)(r)||(0,typedArrayUtil/* isUint8Array */.lq)(r))&&this.params.encoding===Texture_b.BASIS_ENCODING?this.loadFromBasis(t,r):(0,typedArrayUtil/* isUint8Array */.lq)(r)?this.loadFromPixelData(t,r):(0,typedArrayUtil/* isArrayBuffer */.eP)(r)?this.loadFromPixelData(t,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(t,e,r){if(!(this.data instanceof HTMLVideoElement)||(0,maybe/* isNone */.Wi)(this._glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if((0,maybe/* isSome */.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this.data),this.drawStretchedTexture(t,e,r,i,s,this._glTexture)}else{const{width:t,height:e}=this.data,{width:r,height:i}=this._glTexture.descriptor;t!==r||e!==i?this._glTexture.updateData(0,0,0,Math.min(t,r),Math.min(e,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(t,e){return this._glTexture=DDSUtil_b(t,this.createDescriptor(t),e),this._glTexture}loadFromKTX2(t,e){return this.loadAsync((()=>BasisUtil_h(t,this.createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}loadFromBasis(t,e){return this.loadAsync((()=>m(t,this.createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}loadFromPixelData(t,e){(0,Util/* assert */.hu)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(t);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this._glTexture=new Texture/* default */.Z(t,r,e),this._glTexture}loadFromURL(t,e,r){return this.loadAsync((async i=>{const s=await (0,requestImageUtils/* requestImage */.t)(r,{signal:i});return this.loadFromImage(t,s,e)}))}loadFromImageElement(t,e,r){return r.complete?this.loadFromImage(t,r,e):this.loadAsync((async i=>{const s=await (0,requestUtils/* loadImageAsync */.f)(r,r.src,!1,i);return this.loadFromImage(t,s,e)}))}loadFromVideoElement(t,e,r){return r.readyState>=2?this.loadFromImage(t,r,e):this.loadFromVideoElementAsync(t,e,r)}loadFromVideoElementAsync(t,r,i){return this.loadAsync((s=>new Promise(((a,o)=>{const l=()=>{i.removeEventListener("loadeddata",p),i.removeEventListener("error",d),(0,maybe/* removeMaybe */.hw)(c)},p=()=>{i.readyState>=2&&(l(),a(this.loadFromImage(t,i,r)))},d=t=>{l(),o(t||new core_Error/* default */.Z("Failed to load video"))};i.addEventListener("loadeddata",p),i.addEventListener("error",d);const c=(0,promiseUtils/* onAbort */.fu)(s,(()=>d((0,promiseUtils/* createAbortError */.zE)())))}))))}loadFromImage(t,e,r){const s=Texture_b.getDataDimensions(e);this.params.width=s.width,this.params.height=s.height;const a=this.createDescriptor(t);return a.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(t,a)||(0,mathUtils/* isPowerOfTwo */.wt)(s.width)&&(0,mathUtils/* isPowerOfTwo */.wt)(s.height)?(a.width=s.width,a.height=s.height,this._glTexture=new Texture/* default */.Z(t,a,e),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(t,e,s,a,r),this._glTexture)}loadAsync(t){const e=new AbortController;this._loadingController=e;const r=t(e.signal);this._loadingPromise=r;const i=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}requiresPowerOfTwo(t,e){const r=33071,i="number"==typeof e.wrapMode?e.wrapMode===r:e.wrapMode.s===r&&e.wrapMode.t===r;return!(0,isWebGL2Context/* default */.Z)(t.gl)&&(e.hasMipmap||!i)}makePowerOfTwoTexture(e,r,i,a,o){const{width:n,height:h}=i,m=(0,mathUtils/* nextHighestPowerOfTwo */.Sf)(n),l=(0,mathUtils/* nextHighestPowerOfTwo */.Sf)(h);let p;switch(a.width=m,a.height=l,this.params.powerOfTwoResizeMode){case 2:a.textureCoordinateScaleFactor=[n/m,h/l],p=new Texture/* default */.Z(e,a),p.updateData(0,0,0,n,h,r);break;case 1:case null:case void 0:p=this.stretchToPowerOfTwo(e,r,a,o());break;default:(0,compilerUtils/* neverReached */.Bg)(this.params.powerOfTwoResizeMode)}return a.hasMipmap&&p.generateMipmap(),p}stretchToPowerOfTwo(t,e,r,i){const s=new Texture/* default */.Z(t,r),a=new FramebufferObject/* default */.Z(t,{colorTarget:0,depthStencilTarget:0},s),o=new Texture/* default */.Z(t,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},e),n=glUtil3D_i(t),h=t.getBoundFramebufferObject();return this.drawStretchedTexture(t,i,a,n,o,s),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),t.bindFramebuffer(h),s}drawStretchedTexture(t,e,r,i,s,a){t.bindFramebuffer(r);const o=t.getViewport();t.setViewport(0,0,a.descriptor.width,a.descriptor.height);const n=e.program;t.useProgram(n),n.setUniform4f("color",1,1,1,1),n.bindTexture(s,"tex"),t.bindVAO(i),e.bindPipelineState(t),t.drawArrays(5,0,(0,webgl_Util/* vertexCount */._V)(i,"geometry")),t.bindFramebuffer(null),t.setViewport(o.x,o.y,o.width,o.height)}unload(){if((0,maybe/* isSome */.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:r}=this._powerOfTwoStretchInfo;e.dispose(!0),r.dispose(),t.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,maybe/* isSome */.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,maybe/* isSome */.pC)(this._loadingController)){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort()}this.events.emit("unloaded")}}Texture_b.DDS_ENCODING="image/vnd-ms.dds",Texture_b.KTX2_ENCODING="image/ktx2",Texture_b.BASIS_ENCODING="image/x.basis";

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js
var InterleavedLayout = __webpack_require__(44685);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js
var AlphaDiscard_glsl = __webpack_require__(41272);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class GLMaterial_e{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,t),this._technique),this._technique}ensureResources(e){return 2}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterialTexture.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class GLMaterialTexture_r extends GLMaterial_e{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId).then((e=>this._texture=e)),this._acquire(e.normalTextureId).then((e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId).then((e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId).then((e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId).then((e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,maybe/* releaseMaybe */.RY)(this._texture),this._textureNormal=(0,maybe/* releaseMaybe */.RY)(this._textureNormal),this._textureEmissive=(0,maybe/* releaseMaybe */.RY)(this._textureEmissive),this._textureOcclusion=(0,maybe/* releaseMaybe */.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,maybe/* releaseMaybe */.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?2:1}updateTexture(i){((0,maybe/* isNone */.Wi)(this._texture)||i!==this._texture.id)&&(this._texture=(0,maybe/* releaseMaybe */.RY)(this._texture),this._textureId=i,this._acquire(this._textureId).then((e=>this._texture=e)))}bindTextures(e){(0,maybe/* isSome */.pC)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),(0,maybe/* isSome */.pC)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),(0,maybe/* isSome */.pC)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),(0,maybe/* isSome */.pC)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),(0,maybe/* isSome */.pC)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=(0,maybe/* isSome */.pC)(this._texture)?this._texture.glTexture:null;(0,maybe/* isSome */.pC)(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(i){return (0,maybe/* isNone */.Wi)(i)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(i).then((t=>this._disposed?((0,maybe/* releaseMaybe */.RY)(t),null):t)).finally((()=>--this._numLoading)))}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js + 2 modules
var MaterialUtil = __webpack_require__(54443);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class Material_a extends ContentObject_r{constructor(e,r){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=DefaultVertexAttributeLocations_o,this._parameters=(0,MaterialUtil/* copyParameters */.Uf)(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){(0,MaterialUtil/* updateParameters */.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,maybe/* isSome */.pC)(this.repository)&&this.repository.materialChanged(this)}}const Material_n={renderOccluded:1};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js
var OrderIndependentTransparency = __webpack_require__(12045);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(10663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(61044);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3f32.js
var vec3f32 = __webpack_require__(79912);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(1983);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(88589);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/ObjectStack.js
var ObjectStack = __webpack_require__(19480);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(68817);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/ray.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function ray_d(i){return i?{origin:a(i.origin),direction:a(i.direction)}:{origin:g(),direction:g()}}function ray_m(n,r){return i(n.origin,r.origin)&&i(n.direction,r.direction)}function j(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function ray_l(i,n=ray_d()){return k(i.origin,i.direction,n)}function ray_p(i,n,t=ray_d()){return r(t.origin,i),o(t.direction,n,i),t}function k(i,n,o=ray_d()){return r(o.origin,i),r(o.direction,n),o}function ray_h(i,n){const r=t(f.get(),c(f.get(),i.direction),o(f.get(),n,i.origin));return e(r,r)}function v(i,n){return Math.sqrt(ray_h(i,n))}function ray_b(i,n,r){const t=(0,vec3.d)(i.direction,(0,vec3.f)(r,n,i.origin));return (0,vec3.b)(r,i.origin,(0,vec3.a)(r,i.direction,t)),r}function q(){return{origin:null,direction:null}}const S=new ObjectStack/* ObjectStack */.x(q);

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/vector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function vector_a(n,o,s){const c=t(n,o)/t(n,n);return r(s,n,c)}function vector_e(n,r){return t(n,r)/o(n)}function vector_f(r,s){const c=(0,vec3.d)(r,s)/((0,vec3.l)(r)*(0,vec3.l)(s));return-(0,mathUtils/* acosClamped */.ZF)(c)}function vector_i(o,r,u){s(vector_m,o),s(vector_h,r);const a=t(vector_m,vector_h),e=n(a),f=c(vector_m,vector_m,vector_h);return t(f,u)<0?2*Math.PI-e:e}const vector_m=(0,vec3f64.c)(),vector_h=(0,vec3f64.c)();

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/chunks/sphere.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const sphere_x=Logger/* default.getLogger */.Z.getLogger("esri.geometry.support.sphere");function P(){return (0,vec4f64.c)()}function _(t,r=P()){return (0,vec4.c)(r,t)}function sphere_q(t,r){return (0,vec4f64.f)(t[0],t[1],t[2],r)}function sphere_w(t){return t}function sphere_C(t){t[0]=t[1]=t[2]=t[3]=0}function sphere_k(t){return t}function E(t){return Array.isArray(t)?t[3]:t}function L(t){return Array.isArray(t)?t:X}function O(t,r,n,s){return (0,vec4f64.f)(t,r,n,s)}function T(t,r,n){return t!==n&&(0,vec3.g)(n,t),n[3]=t[3]+r,n}function z(t,r,n){return sphere_x.error("sphere.setExtent is not yet supported"),t===n?n:_(t,n)}function U(t,r,n){if((0,maybe/* isNone */.Wi)(r))return!1;const{origin:e,direction:o}=r,i=V;i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return!1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return(m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=e[0]+o[0]*m,n[1]=e[1]+o[1]*m,n[2]=e[2]+o[2]*m),!0)}const V=(0,vec3f64.c)();function B(t,r){return U(t,r,null)}function sphere_D(t,r,n){if(U(t,r,n))return n;const s=F(t,r,vectorStacks/* sv3d.get */.WM.get());return (0,vec3.b)(n,r.origin,(0,vec3.a)(vectorStacks/* sv3d.get */.WM.get(),r.direction,(0,vec3.i)(r.origin,s)/(0,vec3.l)(r.direction))),n}function F(t,r,n){const s=vectorStacks/* sv3d.get */.WM.get(),i=vectorStacks/* sm4d.get */.MP.get();(0,vec3.c)(s,r.origin,r.direction);const a=E(t);(0,vec3.c)(n,s,r.origin),(0,vec3.a)(n,n,1/(0,vec3.l)(n)*a);const u=J(t,r.origin),g=vector_f(r.origin,n);return (0,mat4.i)(i),(0,mat4.e)(i,i,g+u,s),(0,vec3.m)(n,n,i),n}function G(t,r,n){return U(t,r,n)?n:(ray_b(r,L(t),n),H(t,n,n))}function H(t,r,n){const s=(0,vec3.f)(vectorStacks/* sv3d.get */.WM.get(),r,L(t)),e=(0,vec3.a)(vectorStacks/* sv3d.get */.WM.get(),s,t[3]/(0,vec3.l)(s));return (0,vec3.b)(n,e,L(t))}function I(t,r){const n=(0,vec3.f)(vectorStacks/* sv3d.get */.WM.get(),r,L(t)),s=(0,vec3.p)(n),e=t[3]*t[3];return Math.sqrt(Math.abs(s-e))}function J(t,n){const s=(0,vec3.f)(vectorStacks/* sv3d.get */.WM.get(),n,L(t)),e=(0,vec3.l)(s),o=E(t),i=o+Math.abs(o-e);return (0,mathUtils/* acosClamped */.ZF)(o/i)}const K=(0,vec3f64.c)();function N(t,r,s,e){const o=(0,vec3.f)(K,r,L(t));switch(s){case 0:{const t=(0,mathUtils/* cartesianToSpherical */.jE)(o,K)[2];return (0,vec3.s)(e,-Math.sin(t),Math.cos(t),0)}case 1:{const t=(0,mathUtils/* cartesianToSpherical */.jE)(o,K),r=t[1],s=t[2],i=Math.sin(r);return (0,vec3.s)(e,-i*Math.cos(s),-i*Math.sin(s),Math.cos(r))}case 2:return (0,vec3.n)(e,o);default:return}}function Q(t,r){const n=(0,vec3.f)(Y,r,L(t));return (0,vec3.l)(n)-t[3]}function W(t,r,n,s){const e=Q(t,r),o=N(t,r,2,Y),i=(0,vec3.a)(Y,o,n-e);return (0,vec3.b)(s,r,i)}const X=(0,vec3f64.c)(),Y=(0,vec3f64.c)(),Z=Object.freeze({__proto__:null,create:P,copy:_,fromCenterAndRadius:sphere_q,wrap:sphere_w,clear:sphere_C,fromRadius:sphere_k,getRadius:E,getCenter:L,fromValues:O,elevate:T,setExtent:z,intersectRay:U,intersectsRay:B,intersectRayClosestSilhouette:sphere_D,closestPointOnSilhouette:F,closestPoint:G,projectPoint:H,distanceToSilhouette:I,angleToSilhouette:J,axisAt:N,altitudeAt:Q,setAltitudeAt:W});

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class verticalOffsetUtils_z{constructor(){this._transform=h(),this._transformInverse=new verticalOffsetUtils_g({value:this._transform},r,h),this._transformInverseTranspose=new verticalOffsetUtils_g(this._transformInverse,e,h),this._transformTranspose=new verticalOffsetUtils_g({value:this._transform},e,h),this._transformInverseRotation=new verticalOffsetUtils_g({value:this._transform},s,i)}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){o(this._transform,t)}multiplyTransform(t){n(this._transform,this._transform,t)}set(t){o(this._transform,t),this.invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this.invalidateLazyTransforms()}}class verticalOffsetUtils_g{constructor(t,s,i){this.original=t,this.update=s,this.dirty=!0,this.transform=i()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}class verticalOffsetUtils_S{constructor(t=0){this.offset=t,this.tmpVertex=(0,vec3f64.c)()}applyToVertex(t,s,i){const r=t+this.localOrigin[0],e=s+this.localOrigin[1],o=i+this.localOrigin[2],n=this.offset/Math.sqrt(r*r+e*e+o*o);return this.tmpVertex[0]=t+r*n,this.tmpVertex[1]=s+e*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(t){const s=t[0]+this.localOrigin[0],i=t[1]+this.localOrigin[1],r=t[2]+this.localOrigin[2],e=t[3]+this.localOrigin[0],o=t[4]+this.localOrigin[1],n=t[5]+this.localOrigin[2],h=this.offset/Math.sqrt(s*s+i*i+r*r);t[0]+=s*h,t[1]+=i*h,t[2]+=r*h;const a=this.offset/Math.sqrt(e*e+o*o+n*n);return t[3]+=e*a,t[4]+=o*a,t[5]+=n*a,t}}class verticalOffsetUtils_T{constructor(t=0){this.offset=t,this.componentLocalOriginLength=0,this.tmpVertex=(0,vec3f64.c)(),this.mbs=(0,vec4f64.c)(),this.obb={center:(0,vec3f64.c)(),halfSize:(0,vec3f32.c)(),quaternion:null}}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}applyToVertex(t,s,i){const r=t,e=s,o=i+this.componentLocalOriginLength,n=this.offset/Math.sqrt(r*r+e*e+o*o);return this.tmpVertex[0]=t+r*n,this.tmpVertex[1]=s+e*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(t){const s=t[0],i=t[1],r=t[2]+this.componentLocalOriginLength,e=t[3],o=t[4],n=t[5]+this.componentLocalOriginLength,h=this.offset/Math.sqrt(s*s+i*i+r*r);t[0]+=s*h,t[1]+=i*h,t[2]+=r*h;const a=this.offset/Math.sqrt(e*e+o*o+n*n);return t[3]+=e*a,t[4]+=o*a,t[5]+=n*a,t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/s;return this.mbs[0]=t[0]+t[0]*i,this.mbs[1]=t[1]+t[1]*i,this.mbs[2]=t[2]+t[2]*i,this.mbs[3]=t[3]+t[3]*this.offset/s,this.mbs}applyToObb(t){const s=t.center,i=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.obb.center[0]=s[0]+s[0]*i,this.obb.center[1]=s[1]+s[1]*i,this.obb.center[2]=s[2]+s[2]*i,(0,vec3.q)(this.obb.halfSize,t.halfSize,t.quaternion),(0,vec3.b)(this.obb.halfSize,this.obb.halfSize,t.center);const r=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*r,this.obb.halfSize[1]+=this.obb.halfSize[1]*r,this.obb.halfSize[2]+=this.obb.halfSize[2]*r,(0,vec3.f)(this.obb.halfSize,this.obb.halfSize,t.center),(0,quat.c)(verticalOffsetUtils_j,t.quaternion),(0,vec3.q)(this.obb.halfSize,this.obb.halfSize,verticalOffsetUtils_j),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=t.quaternion,this.obb}}class verticalOffsetUtils_q{constructor(t=0){this.offset=t,this.sphere=P(),this.tmpVertex=(0,vec3f64.c)()}applyToVertex(t,s,i){const r=this.objectTransform.transform;let e=r[0]*t+r[4]*s+r[8]*i+r[12],o=r[1]*t+r[5]*s+r[9]*i+r[13],n=r[2]*t+r[6]*s+r[10]*i+r[14];const h=this.offset/Math.sqrt(e*e+o*o+n*n);e+=e*h,o+=o*h,n+=n*h;const a=this.objectTransform.inverse;return this.tmpVertex[0]=a[0]*e+a[4]*o+a[8]*n+a[12],this.tmpVertex[1]=a[1]*e+a[5]*o+a[9]*n+a[13],this.tmpVertex[2]=a[2]*e+a[6]*o+a[10]*n+a[14],this.tmpVertex}applyToMinMax(t,s){const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i;const r=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*r,s[1]+=s[1]*r,s[2]+=s[2]*r}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const i=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*i,t[4]+=t[4]*i,t[5]+=t[5]*i,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/s;return this.sphere[0]=t[0]+t[0]*i,this.sphere[1]=t[1]+t[1]*i,this.sphere[2]=t[2]+t[2]*i,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const verticalOffsetUtils_x=new verticalOffsetUtils_q;function verticalOffsetUtils_(s){return (0,maybe/* isSome */.pC)(s)?(verticalOffsetUtils_x.offset=s,verticalOffsetUtils_x):null}const y=new verticalOffsetUtils_T;function M(s){return t(s)?(y.offset=s,y):null}const verticalOffsetUtils_V=new verticalOffsetUtils_S;function verticalOffsetUtils_d(s){return t(s)?(verticalOffsetUtils_V.offset=s,verticalOffsetUtils_V):null}const verticalOffsetUtils_O="terrain",verticalOffsetUtils_j=(0,quatf64.a)();

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function bufferWriterUtils_n(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=2*t[i];r[o]=e[f],r[o+1]=e[f+1],o+=s}}function bufferWriterUtils_i(t,e,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n}else for(let c=0;c<i;++c){const f=3*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n}}function bufferWriterUtils_c(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n}else for(let c=0;c<i;++c){const f=4*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n}}function bufferWriterUtils_l(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=9*t[i];for(let t=0;t<9;++t)r[o+t]=e[f+t];o+=s}}function bufferWriterUtils_d(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=16*t[i];for(let t=0;t<16;++t)r[o+t]=e[f+t];o+=s}}function bufferWriterUtils_u(t,e,f,o,r,s=1){if(!f)return void bufferWriterUtils_i(t,e,o,r,s);const n=o.typedBuffer,c=o.typedBufferStride,l=t.length,d=f[0],u=f[1],a=f[2],p=f[4],y=f[5],g=f[6],B=f[8],h=f[9],m=f[10],b=f[12],z=f[13],S=f[14];if(r*=c,1===s)for(let i=0;i<l;++i){const f=3*t[i],o=e[f],s=e[f+1],l=e[f+2];n[r]=d*o+p*s+B*l+b,n[r+1]=u*o+y*s+h*l+z,n[r+2]=a*o+g*s+m*l+S,r+=c}else for(let i=0;i<l;++i){const f=3*t[i],o=e[f],l=e[f+1],k=e[f+2],F=d*o+p*l+B*k+b,v=u*o+y*l+h*k+z,q=a*o+g*l+m*k+S;for(let t=0;t<s;++t)n[r]=F,n[r+1]=v,n[r+2]=q,r+=c}}function bufferWriterUtils_a(e,f,o,r,s,n=1){if(!o)return void bufferWriterUtils_i(e,f,r,s,n);const c=o,l=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=c[0],p=c[1],y=c[2],g=c[4],B=c[5],h=c[6],m=c[8],b=c[9],z=c[10],S=!(0,mat4.k)(c),k=1e-6,F=1-k;if(s*=d,1===n)for(let t=0;t<u;++t){const o=3*e[t],r=f[o],n=f[o+1],i=f[o+2];let c=a*r+g*n+m*i,u=p*r+B*n+b*i,v=y*r+h*n+z*i;if(S){const t=c*c+u*u+v*v;if(t<F&&t>k){const e=1/Math.sqrt(t);c*=e,u*=e,v*=e}}l[s+0]=c,l[s+1]=u,l[s+2]=v,s+=d}else for(let t=0;t<u;++t){const o=3*e[t],r=f[o],i=f[o+1],c=f[o+2];let u=a*r+g*i+m*c,v=p*r+B*i+b*c,q=y*r+h*i+z*c;if(S){const t=u*u+v*v+q*q;if(t<F&&t>k){const e=1/Math.sqrt(t);u*=e,v*=e,q*=e}}for(let t=0;t<n;++t)l[s+0]=u,l[s+1]=v,l[s+2]=q,s+=d}}function bufferWriterUtils_p(e,f,o,r,s,n=1){if(!o)return void bufferWriterUtils_c(e,f,r,s,n);const i=o,l=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=i[0],p=i[1],y=i[2],g=i[4],B=i[5],h=i[6],m=i[8],b=i[9],z=i[10],S=!(0,mat4.k)(i),k=1e-6,F=1-k;if(s*=d,1===n)for(let t=0;t<u;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],c=f[o+3];let u=a*r+g*n+m*i,v=p*r+B*n+b*i,q=y*r+h*n+z*i;if(S){const t=u*u+v*v+q*q;if(t<F&&t>k){const e=1/Math.sqrt(t);u*=e,v*=e,q*=e}}l[s+0]=u,l[s+1]=v,l[s+2]=q,l[s+3]=c,s+=d}else for(let t=0;t<u;++t){const o=4*e[t],r=f[o],i=f[o+1],c=f[o+2],u=f[o+3];let v=a*r+g*i+m*c,q=p*r+B*i+b*c,M=y*r+h*i+z*c;if(S){const t=v*v+q*q+M*M;if(t<F&&t>k){const e=1/Math.sqrt(t);v*=e,q*=e,M*=e}}for(let t=0;t<n;++t)l[s+0]=v,l[s+1]=q,l[s+2]=M,l[s+3]=u,s+=d}}function bufferWriterUtils_y(t,e,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=t.length;if(r*=i,1===s){if(4===f)for(let l=0;l<c;++l){const f=4*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i}}else if(4===f)for(let l=0;l<c;++l){const f=4*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i}}function bufferWriterUtils_g(t,i,c,l,d,g){for(const B of i.fieldNames){const i=t.vertexAttributes.get(B),h=t.indices.get(B);if(i&&h)switch(B){case"position":{(0,Util/* assert */.hu)(3===i.size);const t=d.getField(B,BufferView/* BufferViewVec3f */.ct);t&&bufferWriterUtils_u(h,i.data,c,t,g);break}case"normal":{(0,Util/* assert */.hu)(3===i.size);const t=d.getField(B,BufferView/* BufferViewVec3f */.ct);t&&bufferWriterUtils_a(h,i.data,l,t,g);break}case"uv0":{(0,Util/* assert */.hu)(2===i.size);const t=d.getField(B,BufferView/* BufferViewVec2f */.Eu);t&&bufferWriterUtils_n(h,i.data,t,g);break}case"color":{(0,Util/* assert */.hu)(3===i.size||4===i.size);const t=d.getField(B,BufferView/* BufferViewVec4u8 */.mc);t&&bufferWriterUtils_y(h,i.data,i.size,t,g);break}case"symbolColor":{(0,Util/* assert */.hu)(3===i.size||4===i.size);const t=d.getField(B,BufferView/* BufferViewVec4u8 */.mc);t&&bufferWriterUtils_y(h,i.data,i.size,t,g);break}case"tangent":{(0,Util/* assert */.hu)(4===i.size);const t=d.getField(B,BufferView/* BufferViewVec4f */.ek);t&&bufferWriterUtils_p(h,i.data,l,t,g);break}}}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js
var Slice_glsl = __webpack_require__(5885);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js
var InstancedDoublePrecision_glsl = __webpack_require__(99163);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js + 1 modules
var VerticalOffset_glsl = __webpack_require__(5664);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js
var OutputHighlight_glsl = __webpack_require__(55994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js
var MultipassTerrainTest_glsl = __webpack_require__(73393);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js
var PhysicallyBasedRenderingParameters_glsl = __webpack_require__(3864);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js
var ReadShadowMap_glsl = __webpack_require__(20105);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js
var VisualVariables_glsl = __webpack_require__(12664);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js
var DoublePrecision_glsl = __webpack_require__(5331);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat4f32.js
var mat4f32 = __webpack_require__(64790);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function View_glsl_o(i,n,o){i.setUniform3f("camPos",o[3]-n[0],o[7]-n[1],o[11]-n[2])}function View_glsl_r(i,n){i.setUniformMatrix4fv("proj",n)}function View_glsl_t(i,n){i.setUniform2fv("nearFar",n)}function View_glsl_f(n,o,r){(0,mat4.a)(View_glsl_c,r,o),n.setUniform3fv("localOrigin",o),n.setUniformMatrix4fv("view",View_glsl_c)}function View_glsl_a(i,n){View_glsl_f(i,n.origin,n.camera.viewMatrix)}function View_glsl_m(i,n){i.setUniform4fv("viewport",n.camera.fullViewport)}const View_glsl_c=(0,mat4f32.c)();

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class ReloadableShaderModule_t{constructor(t,o){this._module=t,this._loadModule=o}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class ShaderTechnique_t{constructor(i,t,e=(()=>this.dispose())){this.release=e,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i)}dispose(){this._program=(0,maybe/* disposeMaybe */.O3)(this._program),this._pipeline=this._config=null}reload(t){(0,maybe/* disposeMaybe */.O3)(this._program),this._program=this.initializeProgram(t)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(i,t){}bindMaterial(i,t){}bindDraw(i){}bindPipelineState(i,t=null,e){i.setPipelineState(this.getPipelineState(t,e))}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i)}get primitiveType(){return 4}getPipelineState(i,t){return this._pipeline}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class ShaderTechniqueConfiguration_t{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function ShaderTechniqueConfiguration_e(t={}){return(e,r)=>{var a,s;e._parameterNames=null!=(a=e._parameterNames)?a:[],e._parameterNames.push(r);const i=e._parameterNames.length-1,h=t.count||2,o=Math.ceil(Math.log2(h)),m=null!=(s=e._parameterBits)?s:[0];let n=0;for(;m[n]+o>16;)n++,n>=m.length&&m.push(0);e._parameterBits=m;const p=m[n],_=(1<<o)-1<<p;m[n]+=o,Object.defineProperty(e,r,{get(){return this[i]},set(t){if(this[i]!==t&&(this[i]=t,this._keyDirty=!0,this._parameterBits[n]=this._parameterBits[n]&~_|+t<<p&_,"number"!=typeof t&&"boolean"!=typeof t))throw"Configuration value for "+r+" must be boolean or number, got "+typeof t}})}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/checkWebGLError.js
var checkWebGLError = __webpack_require__(6174);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/Program.js + 2 modules
var Program = __webpack_require__(69002);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class Program_n extends Program/* Program */.${constructor(e,t,i){super(e,t.generateSource("vertex"),t.generateSource("fragment"),i),this._textures=new Map,this._freeTextureUnits=new PooledArray/* default */.Z({deallocator:null}),this._fragmentUniforms=(0,checkWebGLError/* webglDebugEnabled */.hZ)()?t.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,r){if((0,maybe/* isNone */.Wi)(t)||null==t.glName){const e=this._textures.get(r);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(r)),null}let s=this._textures.get(r);return null==s?(s=this._allocTextureUnit(t),this._textures.set(r,s)):s.texture=t,this._context.useProgram(this),this.setUniform1i(r,s.unit),this._context.bindTexture(t,s.unit),s.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,maybe/* isSome */.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const StencilUtils_a={func:513},StencilUtils_n={func:519},StencilUtils_f={mask:255},StencilUtils_i={mask:0},StencilUtils_s=a=>({function:{func:517,ref:a,mask:a},operation:{fail:7680,zFail:7680,zPass:7680}}),StencilUtils_o=a=>({function:{func:519,ref:a,mask:a},operation:{fail:7680,zFail:7680,zPass:7681}}),StencilUtils_c={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},StencilUtils_t={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}},StencilUtils_u={function:{func:514,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}},StencilUtils_e={function:{func:517,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js
var DefaultMaterial_glsl = __webpack_require__(45584);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/renderState.js
var renderState = __webpack_require__(17346);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class R extends ShaderTechnique_t{initializeProgram(e){const t=R.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,DoublePrecision_glsl/* doublePrecisionRequiresObfuscation */.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Program_n(e.rctx,i,DefaultVertexAttributeLocations_o)}bindPass(e,t){var r,i;View_glsl_r(this.program,t.camera.projectionMatrix);const l=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===l)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),(0,MultipassTerrainTest_glsl/* bindMultipassTerrainTexture */.p)(this.program,t)),7===l&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",MaterialUtil/* colorMixModes */.FZ[e.colorMixMode])),0===l?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",MaterialUtil/* colorMixModes */.FZ[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&(0,PhysicallyBasedRenderingParameters_glsl/* bindPBRUniforms */.nW)(this.program,e,this.configuration.isSchematic)):4===l&&(0,OutputHighlight_glsl/* bindOutputHighlight */.wW)(this.program,t),(0,VisualVariables_glsl/* bindVisualVariablesUniformsForSymbols */.uj)(this.program,e),(0,VerticalOffset_glsl/* bindVerticalOffsetUniforms */.Mo)(this.program,e,t),(0,MaterialUtil/* bindScreenSizePerspective */.bj)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const o=this.configuration.instancedDoublePrecision?(0,vec3f64.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;View_glsl_f(this.program,o,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&View_glsl_o(this.program,o,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&InstancedDoublePrecision_glsl/* InstancedDoublePrecision.bindCustomOrigin */.f.bindCustomOrigin(this.program,o),(0,Slice_glsl/* bindSliceUniforms */.Vv)(this.program,this.configuration,e.slicePlane,o),0===this.configuration.output&&(0,ReadShadowMap_glsl/* bindReadShadowMapViewCustomOrigin */.vL)(this.program,e,o)}setPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return (0,renderState/* makePipelineState */.sm)({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?OrderIndependentTransparency/* blendingDefault */.wu:(0,OrderIndependentTransparency/* OITBlending */.$L)(e),culling:DefaultMaterialTechnique_L(r)&&(0,renderState/* cullingParams */.zp)(r.cullFace),depthTest:{func:(0,OrderIndependentTransparency/* OITDepthTest */.$x)(e)},depthWrite:i||o?r.writeDepth&&renderState/* defaultDepthWriteParams */.LZ:null,colorWrite:renderState/* defaultColorWriteParams */.BK,stencilWrite:r.sceneHasOcludees?StencilUtils_f:null,stencilTest:r.sceneHasOcludees?t?StencilUtils_t:StencilUtils_c:null,polygonOffset:i||o?null:(0,OrderIndependentTransparency/* getOITPolygonOffset */.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function DefaultMaterialTechnique_L(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&(!e.transparent&&!e.doubleSidedMode)}R.shader=new ReloadableShaderModule_t(DefaultMaterial_glsl.D,(()=>__webpack_require__.e(/* import() */ 3197).then(__webpack_require__.bind(__webpack_require__, 13197))));class DefaultMaterialTechnique_H extends ShaderTechniqueConfiguration_t{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}(0,tslib_es6._)([ShaderTechniqueConfiguration_e({count:8})],DefaultMaterialTechnique_H.prototype,"output",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e({count:4})],DefaultMaterialTechnique_H.prototype,"alphaDiscardMode",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e({count:3})],DefaultMaterialTechnique_H.prototype,"doubleSidedMode",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"isSchematic",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"vertexColors",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"offsetBackfaces",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"symbolColors",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"vvSize",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"vvColor",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"verticalOffset",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"receiveShadows",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"slicePlaneEnabled",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"sliceHighlightDisabled",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"receiveAmbientOcclusion",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"screenSizePerspective",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"textureAlphaPremultiplied",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"hasColorTexture",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"usePBR",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"hasEmissionTexture",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"hasOcclusionTexture",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"hasNormalTexture",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"instanced",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"instancedColor",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"instancedDoublePrecision",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"vertexTangents",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"normalsTypeDerivate",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"writeDepth",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"sceneHasOcludees",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"transparent",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"enableOffset",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e({count:3})],DefaultMaterialTechnique_H.prototype,"cullFace",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e({count:4})],DefaultMaterialTechnique_H.prototype,"transparencyPassType",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"multipassTerrainEnabled",void 0),(0,tslib_es6._)([ShaderTechniqueConfiguration_e()],DefaultMaterialTechnique_H.prototype,"cullAboveGround",void 0);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/RealisticTree.glsl.js
var RealisticTree_glsl = __webpack_require__(60926);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class RealisticTreeTechnique_a extends R{initializeProgram(e){const s=RealisticTreeTechnique_a.shader.get(),t=this.configuration,l=s.build({OITEnabled:0===t.transparencyPassType,output:t.output,viewingMode:e.viewingMode,receiveShadows:t.receiveShadows,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:t.symbolColors,vvSize:t.vvSize,vvColor:t.vvColor,vvInstancingEnabled:!0,instanced:t.instanced,instancedColor:t.instancedColor,instancedDoublePrecision:t.instancedDoublePrecision,pbrMode:t.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:t.hasColorTexture,receiveAmbientOcclusion:t.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:t.hasColorTexture?1:0,textureAlphaPremultiplied:t.textureAlphaPremultiplied,attributeColor:t.vertexColors,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,offsetBackfaces:t.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,DoublePrecision_glsl/* doublePrecisionRequiresObfuscation */.I)(e.rctx),alphaDiscardMode:t.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:t.multipassTerrainEnabled,cullAboveGround:t.cullAboveGround});return new Program_n(e.rctx,l,DefaultVertexAttributeLocations_o)}}RealisticTreeTechnique_a.shader=new ReloadableShaderModule_t(RealisticTree_glsl.R,(()=>__webpack_require__.e(/* import() */ 7578).then(__webpack_require__.bind(__webpack_require__, 67578))));

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class DefaultMaterial_y extends Material_a{constructor(e){super(e,DefaultMaterial_P),this.supportsEdges=!0,this.techniqueConfig=new DefaultMaterialTechnique_H,this.vertexBufferLayout=DefaultMaterial_w(this.parameters),this.instanceBufferLayout=e.instanced?DefaultMaterial_E(this.parameters):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,i=e.vertexColors,s=e.symbolColors,r=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,o=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(r||a||s)?!!n||o:i?n?l:o:r||a||s?!!n||o:n?l:o}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<OrderIndependentTransparency/* OITPolygonOffsetLimit */.ve),this.techniqueConfig}intersect(e,c,u,h,d,p,m){if(null!==this.parameters.verticalOffset){const e=h.camera;(0,vec3.s)(DefaultMaterial_j,u[12],u[13],u[14]);let c=null;switch(h.viewingMode){case 1:c=(0,vec3.n)(DefaultMaterial_D,DefaultMaterial_j);break;case 2:c=(0,vec3.g)(DefaultMaterial_D,DefaultMaterial_A)}let m=0;if(null!==this.parameters.verticalOffset){const t=(0,vec3.f)(DefaultMaterial_L,DefaultMaterial_j,e.eye),i=(0,vec3.l)(t),s=(0,vec3.a)(t,t,1/i);let l=null;this.parameters.screenSizePerspective&&(l=(0,vec3.d)(c,s)),m+=(0,MaterialUtil/* verticalOffsetAtDistance */.Hx)(e,i,this.parameters.verticalOffset,l,this.parameters.screenSizePerspective)}(0,vec3.a)(c,c,m),(0,vec3.t)(DefaultMaterial_z,c,h.transform.inverseRotation),d=(0,vec3.f)(DefaultMaterial_I,d,DefaultMaterial_z),p=(0,vec3.f)(DefaultMaterial_B,p,DefaultMaterial_z)}(0,MaterialUtil/* intersectTriangleGeometry */.Bw)(e,c,h,d,p,verticalOffsetUtils_(h.verticalOffset),m)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new DefaultMaterial_O(e):null}createBufferWriter(){return new DefaultMaterial_M(this.vertexBufferLayout,this.instanceBufferLayout)}}class DefaultMaterial_O extends GLMaterialTexture_r{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?RealisticTreeTechnique_a:R,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const DefaultMaterial_P={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,mat3f64.c)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:AlphaDiscard_glsl/* defaultMaskAlphaCutoff */.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...Material_n};class DefaultMaterial_M{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,i,s){bufferWriterUtils_g(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,s)}}function DefaultMaterial_w(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=(0,InterleavedLayout/* newLayout */.U$)().vec3f("position").vec3f("normal");return e.vertexTangents&&i.vec4f("tangent"),t&&i.vec2f("uv0"),e.vertexColors&&i.vec4u8("color"),e.symbolColors&&i.vec4u8("symbolColor"),i}function DefaultMaterial_E(e){let t=(0,InterleavedLayout/* newLayout */.U$)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}const DefaultMaterial_I=(0,vec3f64.c)(),DefaultMaterial_B=(0,vec3f64.c)(),DefaultMaterial_A=(0,vec3f64.f)(0,0,1),DefaultMaterial_D=(0,vec3f64.c)(),DefaultMaterial_z=(0,vec3f64.c)(),DefaultMaterial_j=(0,vec3f64.c)(),DefaultMaterial_L=(0,vec3f64.c)();

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const wosrLoader_y=Logger/* default.getLogger */.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function wosrLoader_x(e,t){const r=await wosrLoader_g(e,t);return{resource:r,textures:await wosrLoader_A(r.textureDefinitions,t)}}async function wosrLoader_g(r,n){const i=(0,maybe/* isSome */.pC)(n)&&n.streamDataRequester;if(i)return wosrLoader_h(r,i,n);const u=await (0,asyncUtils/* result */.q6)((0,request["default"])(r,(0,maybe/* unwrap */.Wg)(n)));if(!0===u.ok)return u.value.data;(0,promiseUtils/* throwIfAbortError */.r9)(u.error),wosrLoader_w(u.error)}async function wosrLoader_h(e,r,n){const a=await (0,asyncUtils/* result */.q6)(r.request(e,"json",n));if(!0===a.ok)return a.value;(0,promiseUtils/* throwIfAbortError */.r9)(a.error),wosrLoader_w(a.error.details.url)}function wosrLoader_w(e){throw new core_Error/* default */.Z("",`Request for object resource failed: ${e}`)}function wosrLoader_v(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(wosrLoader_y.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(wosrLoader_y.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(wosrLoader_y.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(wosrLoader_y.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else wosrLoader_y.warn("Indexed geometries must specify faces"),n=!1;break}default:wosrLoader_y.warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(wosrLoader_y.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(wosrLoader_y.warn("Geometries with externally defined attributes are not yet supported"),n=!1)}return n}function wosrLoader_b(e,t){const r=[],n=[],s=[],o=[],l=e.resource,c=Version/* Version.parse */.G.parse(l.version||"1.0","wosr");wosrLoader_I.validate(c);const p=l.model.name,y=l.model.geometries,x=l.materialDefinitions,g=e.textures;let h=0;const w=new Map;for(let i=0;i<y.length;i++){const e=y[i];if(!wosrLoader_v(e))continue;const l=wosrLoader_M(e),c=e.params.vertexAttributes,p=[];for(const t in c){const e=c[t],r=e.values;p.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)])}const j=g&&g[l.texture];if(j&&!w.has(l.texture)){const{image:e,params:t}=j,r=new Texture_b(e,t);o.push(r),w.set(l.texture,r)}const A=w.get(l.texture),I=A?A.id:void 0;let P=s[l.material]?s[l.material][l.texture]:null;if(!P){const e=x[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=j&&j.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=j?wosrLoader_U(j.alphaChannelUsage):void 0,i={ambient:(0,vec3f64.d)(e.diffuse),diffuse:(0,vec3f64.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:I,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!j&&!!j.params.preMultiplyAlpha};(0,maybe/* isSome */.pC)(t)&&t.materialParamsMixin&&Object.assign(i,t.materialParamsMixin),P=new DefaultMaterial_y(i),s[l.material]||(s[l.material]={}),s[l.material][l.texture]=P}n.push(P);const T=new Geometry_u(p,b);h+=b.position?b.position.length:0,r.push(T)}return{name:p,stageResources:{textures:o,materials:n,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:wosrLoader_j(r),numberOfVertices:h,lodThreshold:null}}function wosrLoader_j(e){const t=(0,aaBoundingBox/* empty */.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,maybe/* isSome */.pC)(r)&&((0,aaBoundingBox/* expandWithVec3 */.pp)(t,r.getBBMin()),(0,aaBoundingBox/* expandWithVec3 */.pp)(t,r.getBBMax()))})),t}async function wosrLoader_A(e,t){const r=[];for(const o in e){const n=e[o],s=n.images[0].data;if(!s){wosrLoader_y.warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+s,u="/textureDefinitions/"+o,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==wosrLoader_U(l)},m=(0,maybe/* isSome */.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,requestImageUtils/* requestImage */.t)(i,t);r.push(m.then((e=>({refId:u,image:e,params:c,alphaChannelUsage:l}))))}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function wosrLoader_U(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function wosrLoader_M(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const wosrLoader_I=new Version/* Version */.G(1,2,"wosr");

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js
var DefaultMaterial_COLOR_GAMMA = __webpack_require__(14634);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec22.js
var vec22 = __webpack_require__(385);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec43.js
var vec43 = __webpack_require__(32101);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec33.js
var vec33 = __webpack_require__(14789);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function $(s,o){const i=objectResourceUtils_q((0,devEnvironmentUtils/* adjustStaticAGOUrl */.pJ)(s));if("wosr"===i.fileType){const e=await(o.cache?o.cache.loadWOSR(i.url,o):wosrLoader_x(i.url,o)),t=wosrLoader_b(e,o);return{lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(o.cache?o.cache.loadGLTF(i.url,o,o.usePBR):(0,loader/* load */.z)(new DefaultLoadingContext/* DefaultLoadingContext */.C(o.streamDataRequester),i.url,o,o.usePBR)),u=(0,maybe/* get */.U2)(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&(0,maybe/* isSome */.pC)(u)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&objectResourceUtils_J(a,u);const n=a.meta.isEsriSymbolResource?{usePBR:o.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:o.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},l={...o.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=objectResourceUtils_K(a,n,l,i.specifiedLodIndex);let t=e[0].boundingBox;if(0!==i.specifiedLodIndex){t=objectResourceUtils_K(a,n,l,0)[0].boundingBox}return{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const c=objectResourceUtils_K(a,n,l);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function objectResourceUtils_q(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function objectResourceUtils_K(e,t,s,a){const u=e.model,n=(0,mat3f64.c)(),l=new Array,c=new Map,m=new Map;return u.lods.forEach(((e,i)=>{if(void 0!==a&&i!==a)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,maybe/* isSome */.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,aaBoundingBox/* empty */.cS)()};l.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=u.materials.get(e.material),l=(0,maybe/* isSome */.pC)(e.attributes.texCoord0),f=(0,maybe/* isSome */.pC)(e.attributes.normal),p=objectResourceUtils_Q(a.alphaMode);if(!c.has(i)){if(l){if((0,maybe/* isSome */.pC)(a.textureColor)&&!m.has(a.textureColor)){const e=u.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:1!==p};m.set(a.textureColor,new Texture_b(e.data,t))}if((0,maybe/* isSome */.pC)(a.textureNormal)&&!m.has(a.textureNormal)){const e=u.textures.get(a.textureNormal);m.set(a.textureNormal,new Texture_b(e.data,e.parameters))}if((0,maybe/* isSome */.pC)(a.textureOcclusion)&&!m.has(a.textureOcclusion)){const e=u.textures.get(a.textureOcclusion);m.set(a.textureOcclusion,new Texture_b(e.data,e.parameters))}if((0,maybe/* isSome */.pC)(a.textureEmissive)&&!m.has(a.textureEmissive)){const e=u.textures.get(a.textureEmissive);m.set(a.textureEmissive,new Texture_b(e.data,e.parameters))}if((0,maybe/* isSome */.pC)(a.textureMetallicRoughness)&&!m.has(a.textureMetallicRoughness)){const e=u.textures.get(a.textureMetallicRoughness);m.set(a.textureMetallicRoughness,new Texture_b(e.data,e.parameters))}}const o=a.color[0]**(1/DefaultMaterial_COLOR_GAMMA/* COLOR_GAMMA */.K),n=a.color[1]**(1/DefaultMaterial_COLOR_GAMMA/* COLOR_GAMMA */.K),d=a.color[2]**(1/DefaultMaterial_COLOR_GAMMA/* COLOR_GAMMA */.K),x=a.emissiveFactor[0]**(1/DefaultMaterial_COLOR_GAMMA/* COLOR_GAMMA */.K),g=a.emissiveFactor[1]**(1/DefaultMaterial_COLOR_GAMMA/* COLOR_GAMMA */.K),h=a.emissiveFactor[2]**(1/DefaultMaterial_COLOR_GAMMA/* COLOR_GAMMA */.K),b=(0,maybe/* isSome */.pC)(a.textureColor)&&l?m.get(a.textureColor):null;c.set(i,new DefaultMaterial_y({...t,transparent:0===p,textureAlphaMode:p,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,n,d],ambient:[o,n,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,maybe/* isSome */.pC)(b)?b.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:(0,maybe/* isSome */.pC)(a.textureNormal)&&l?m.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:(0,maybe/* isSome */.pC)(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:(0,maybe/* isSome */.pC)(a.textureOcclusion)&&l?m.get(a.textureOcclusion).id:void 0,emissiveTextureId:(0,maybe/* isSome */.pC)(a.textureEmissive)&&l?m.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,maybe/* isSome */.pC)(a.textureMetallicRoughness)&&l?m.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[x,g,h],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...s}))}const x=objectResourceUtils_H(e.indices||e.attributes.position.count,e.primitiveType),O=e.attributes.position.count,F=(0,utils/* createBuffer */.gS)(BufferView/* BufferViewVec3f */.ct,O);(0,vec32.t)(F,e.attributes.position,e.transform);const A=[["position",{data:F.typedBuffer,size:F.elementCount,exclusive:!0}]],I=[["position",x]];if((0,maybe/* isSome */.pC)(e.attributes.normal)){const t=(0,utils/* createBuffer */.gS)(BufferView/* BufferViewVec3f */.ct,O);(0,mat3.a)(n,e.transform),(0,vec32.a)(t,e.attributes.normal,n),A.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["normal",x])}if((0,maybe/* isSome */.pC)(e.attributes.tangent)){const t=(0,utils/* createBuffer */.gS)(BufferView/* BufferViewVec4f */.ek,O);(0,mat3.a)(n,e.transform),(0,vec42.t)(t,e.attributes.tangent,n),A.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["tangent",x])}if((0,maybe/* isSome */.pC)(e.attributes.texCoord0)){const t=(0,utils/* createBuffer */.gS)(BufferView/* BufferViewVec2f */.Eu,O);(0,vec22.n)(t,e.attributes.texCoord0),A.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["uv0",x])}if((0,maybe/* isSome */.pC)(e.attributes.color)){const t=(0,utils/* createBuffer */.gS)(BufferView/* BufferViewVec4u8 */.mc,O);if(4===e.attributes.color.elementCount)e.attributes.color instanceof BufferView/* BufferViewVec4f */.ek?(0,vec42.s)(t,e.attributes.color,255):e.attributes.color instanceof BufferView/* BufferViewVec4u8 */.mc?(0,vec43.c)(t,e.attributes.color):e.attributes.color instanceof BufferView/* BufferViewVec4u16 */.v6&&(0,vec42.s)(t,e.attributes.color,1/256);else{(0,vec43.f)(t,255,255,255,255);const r=new BufferView/* BufferViewVec3u8 */.ne(t.buffer,0,4);e.attributes.color instanceof BufferView/* BufferViewVec3f */.ct?(0,vec32.s)(r,e.attributes.color,255):e.attributes.color instanceof BufferView/* BufferViewVec3u8 */.ne?(0,vec33.c)(r,e.attributes.color):e.attributes.color instanceof BufferView/* BufferViewVec3u16 */.mw&&(0,vec32.s)(r,e.attributes.color,1/256)}A.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["color",x])}const k=new Geometry_u(A,I);d.stageResources.geometries.push(k),d.stageResources.materials.push(c.get(i)),l&&((0,maybe/* isSome */.pC)(a.textureColor)&&d.stageResources.textures.push(m.get(a.textureColor)),(0,maybe/* isSome */.pC)(a.textureNormal)&&d.stageResources.textures.push(m.get(a.textureNormal)),(0,maybe/* isSome */.pC)(a.textureOcclusion)&&d.stageResources.textures.push(m.get(a.textureOcclusion)),(0,maybe/* isSome */.pC)(a.textureEmissive)&&d.stageResources.textures.push(m.get(a.textureEmissive)),(0,maybe/* isSome */.pC)(a.textureMetallicRoughness)&&d.stageResources.textures.push(m.get(a.textureMetallicRoughness))),d.numberOfVertices+=O;const L=k.boundingInfo;(0,maybe/* isSome */.pC)(L)&&((0,aaBoundingBox/* expandWithVec3 */.pp)(d.boundingBox,L.getBBMin()),(0,aaBoundingBox/* expandWithVec3 */.pp)(d.boundingBox,L.getBBMax()))}))})),l}function objectResourceUtils_Q(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}function objectResourceUtils_H(e,t){switch(t){case 4:return (0,indexUtils/* trianglesToTriangles */.nh)(e);case 5:return (0,indexUtils/* triangleStripToTriangles */.DA)(e);case 6:return (0,indexUtils/* triangleFanToTriangles */.jX)(e)}}function objectResourceUtils_J(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if((0,maybe/* isNone */.Wi)(o))return;const x=i.attributes.position,g=x.count,b=(0,vec3f64.c)(),v=(0,vec3f64.c)(),y=(0,vec3f64.c)(),B=(0,utils/* createBuffer */.gS)(BufferView/* BufferViewVec4u8 */.mc,g),M=(0,utils/* createBuffer */.gS)(BufferView/* BufferViewVec3f */.ct,g),w=(0,mat4.b)((0,mat4f64.c)(),i.transform);for(let s=0;s<g;s++){x.getVec(s,v),o.getVec(s,b),(0,vec3.m)(v,v,i.transform),(0,vec3.f)(y,v,t.center),(0,vec3.E)(y,y,t.radius);const a=y[2],u=(0,vec3.l)(y),p=Math.min(.45+.55*u*u,1);(0,vec3.E)(y,y,t.radius),(0,vec3.m)(y,y,w),(0,vec3.n)(y,y),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,vec3.e)(y,y,b,a>-1?.2:Math.min(-4*a-3.8,1)),M.setVec(s,y),B.set(s,0,255*p),B.set(s,1,255*p),B.set(s,2,255*p),B.set(s,3,255)}i.attributes.normal=M,i.attributes.color=B}}}


/***/ }),

/***/ 44685:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U$": () => (/* binding */ A)
/* harmony export */ });
/* unused harmony exports InterleavedBuffer, InterleavedLayout */
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81936);
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90331);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class N{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const i of e.fieldNames){const t=e.fields.get(i);this[i]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new N(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,s){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,s*r/4);new Uint32Array(this.buffer,i*r,s*r/4).set(n)}else{const n=new Uint8Array(e.buffer,t*r,s*r);new Uint8Array(this.buffer,i*r,s*r).set(n)}}}class T{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(t,i){return this.appendField(t,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2f */ .Eu,i),this}vec2f64(e,i){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2f64 */ .q6,i),this}vec3f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3f */ .ct,t),this}vec3f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3f64 */ .fP,t),this}vec4f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4f */ .ek,t),this}vec4f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4f64 */ .Cd,t),this}mat3f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat3f */ .gK,t),this}mat3f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat3f64 */ .ey,t),this}mat4f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat4f */ .bj,t),this}mat4f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat4f64 */ .O1,t),this}vec4u8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u8 */ .mc,t),this}f32(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewFloat */ .ly,t),this}f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewFloat64 */ .oS,t),this}u8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint8 */ .D_,t),this}u16(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint16 */ .av,t),this}i8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewInt8 */ .Hz,t),this}vec2i8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i8 */ .Vs,t),this}vec2i16(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i16 */ .or,t),this}vec2u8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2u8 */ .xA,t),this}vec4u16(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u16 */ .v6,t),this}u32(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint32 */ .Nu,t),this}appendField(e,t,i){const s=t.ElementCount*(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__/* .elementTypeSize */ .n1)(t.ElementType),r=this.stride;this.fields.set(e,{size:s,constructor:t,offset:r,optional:i}),this.stride+=s,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new N(this,e)}createView(e){return new N(this,e)}clone(){const e=new T;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,i)=>e.fields.set(i,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function A(){return new T}


/***/ }),

/***/ 95650:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(a,r){0===r.output&&r.receiveShadows?(a.varyings.add("linearDepth","float"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===r.output||3===r.output?(a.varyings.add("linearDepth","float"),a.vertex.uniforms.add("cameraNearFar","vec2"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`void forwardLinearDepth() {}`)}


/***/ }),

/***/ 57218:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}


/***/ }),

/***/ 5885:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p2": () => (/* binding */ c),
/* harmony export */   "Vv": () => (/* binding */ r)
/* harmony export */ });
/* unused harmony export bindSliceUniformsWithOrigin */
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61681);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6766);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8909);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(e,s){if(s.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),s.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=s.sliceHighlightDisabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`#define highlightSlice(_color_, _pos_) (_color_)`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(c)}else{const i=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i)}}function l(e,s,i){r(e,s,i.slicePlane,i.origin)}function r(a,o,c,l){o.slicePlaneEnabled&&((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(c)?(l?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.f)(t,c.origin,l),a.setUniform3fv("slicePlaneOrigin",t)):a.setUniform3fv("slicePlaneOrigin",c.origin),a.setUniform3fv("slicePlaneBasis1",c.basis1),a.setUniform3fv("slicePlaneBasis2",c.basis2)):(a.setUniform3fv("slicePlaneBasis1",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.Z),a.setUniform3fv("slicePlaneBasis2",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.Z),a.setUniform3fv("slicePlaneOrigin",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.Z)))}const t=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)();


/***/ }),

/***/ 4731:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,o){o.linearDepth?r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}


/***/ }),

/***/ 99163:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8909);
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5331);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23410);
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30560);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,n){n.instanced&&n.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),n.instancedDoublePrecision&&(e.vertex.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .DoublePrecision */ .$,n),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`
    vec3 calculateVPos() {
      ${n.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`
    vec3 subtractOrigin(vec3 _pos) {
      ${n.instancedDoublePrecision?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`
    vec3 dpNormal(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`
    vec3 dpNormalView(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,n.vertexTangents?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${n.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===n.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4])}!function(e){class i{}function r(e,i){(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .encodeDoubleArraySplit */ .po)(i,t,a,3),e.setUniform3fv("viewOriginHi",t),e.setUniform3fv("viewOriginLo",a)}e.Uniforms=i,e.bindCustomOrigin=r}(o||(o={}));const t=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),a=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)();


/***/ }),

/***/ 90511:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ o)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(23410);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DecodeNormal.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function DecodeNormal_glsl_o(o){const d=interfaces/* glsl */.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.fragment.code.add(d),o.vertex.code.add(d)}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,d){0===d.normalType&&(o.attributes.add("normal","vec3"),o.vertex.code.add(interfaces/* glsl */.H`vec3 normalModel() {
return normal;
}`)),1===d.normalType&&(o.include(DecodeNormal_glsl_o),o.attributes.add("normalCompressed","vec2"),o.vertex.code.add(interfaces/* glsl */.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===d.normalType&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(interfaces/* glsl */.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}


/***/ }),

/***/ 91636:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){o.attributes.add("position","vec3"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`vec3 positionModel() { return position; }`)}


/***/ }),

/***/ 40433:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ r)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(23410);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function DecodeSymbolColor_glsl_l(l){l.vertex.code.add(interfaces/* glsl */.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${interfaces/* glsl.int */.H.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${interfaces/* glsl.int */.H.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${interfaces/* glsl.int */.H.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${interfaces/* glsl.int */.H.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,l){l.symbolColor?(r.include(DecodeSymbolColor_glsl_l),r.attributes.add("symbolColor","vec4"),r.varyings.add("colorMixMode","mediump float")):r.fragment.uniforms.add("colorMixMode","int"),l.symbolColor?r.vertex.code.add(interfaces/* glsl */.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):r.vertex.code.add(interfaces/* glsl */.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}


/***/ }),

/***/ 82082:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,d){1===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===d.attributeTextureCoordinates&&t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`void forwardTextureCoordinates() {}`)}


/***/ }),

/***/ 6502:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,e){e.attributeColor?(r.attributes.add("color","vec4"),r.varyings.add("vColor","vec4"),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`void forwardVertexColor() { vColor = color; }`),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}


/***/ }),

/***/ 11478:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ l)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js + 1 modules
var NormalAttribute_glsl = __webpack_require__(90511);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(34344);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(39100);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(8909);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js
var PositionAttribute_glsl = __webpack_require__(91636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js
var DoublePrecision_glsl = __webpack_require__(5331);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(23410);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(o,r){o.include(PositionAttribute_glsl/* PositionAttribute */.f),o.vertex.include(DoublePrecision_glsl/* DoublePrecision */.$,r),o.varyings.add("vPositionWorldCameraRelative","vec3"),o.varyings.add("vPosition_view","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),o.vertex.uniforms.add("uTransform_ProjFromView","mat4"),o.vertex.code.add(interfaces/* glsl */.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),o.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.fragment.code.add(interfaces/* glsl */.H`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}!function(i){class m{constructor(){this.worldFromModel_RS=(0,mat3f64.c)(),this.worldFromModel_TH=(0,vec3f64.c)(),this.worldFromModel_TL=(0,vec3f64.c)()}}i.ModelTransform=m;class a{constructor(){this.worldFromView_TH=(0,vec3f64.c)(),this.worldFromView_TL=(0,vec3f64.c)(),this.viewFromCameraRelative_RS=(0,mat3f64.c)(),this.projFromView=(0,mat4f64.c)()}}function d(o,r){o.setUniformMatrix3fv("uTransform_WorldFromModel_RS",r.worldFromModel_RS),o.setUniform3fv("uTransform_WorldFromModel_TH",r.worldFromModel_TH),o.setUniform3fv("uTransform_WorldFromModel_TL",r.worldFromModel_TL)}function s(o,r){o.setUniform3fv("uTransform_WorldFromView_TH",r.worldFromView_TH),o.setUniform3fv("uTransform_WorldFromView_TL",r.worldFromView_TL),o.setUniformMatrix4fv("uTransform_ProjFromView",r.projFromView),o.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",r.viewFromCameraRelative_RS)}i.ViewProjectionTransform=a,i.bindModelTransform=d,i.bindViewProjTransform=s}(d||(d={}));

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(l,e){0===e.normalType||1===e.normalType?(l.include(NormalAttribute_glsl/* NormalAttribute */.O,e),l.varyings.add("vNormalWorld","vec3"),l.varyings.add("vNormalView","vec3"),l.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),l.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),l.vertex.code.add(interfaces/* glsl */.H`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===e.normalType?(l.include(d,e),l.varyings.add("vNormalWorld","vec3"),l.vertex.code.add(interfaces/* glsl */.H`
    void forwardNormal() {
      vNormalWorld = ${1===e.viewingMode?interfaces/* glsl */.H`normalize(vPositionWorldCameraRelative);`:interfaces/* glsl */.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):l.vertex.code.add(interfaces/* glsl */.H`void forwardNormal() {}`)}!function(o){function r(o,r){o.setUniformMatrix4fv("viewNormal",r)}o.bindUniforms=r}(l||(l={}));


/***/ }),

/***/ 72129:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ u)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var TextureCoordinateAttribute_glsl = __webpack_require__(82082);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(23410);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(interfaces/* glsl */.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(u,a){u.include(TextureCoordinateAttribute_glsl/* TextureCoordinateAttribute */.D,a),u.fragment.code.add(interfaces/* glsl */.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===a.attributeTextureCoordinates&&u.fragment.code.add(interfaces/* glsl */.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===a.attributeTextureCoordinates&&(u.include(t),u.fragment.code.add(interfaces/* glsl */.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}


/***/ }),

/***/ 5664:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LC": () => (/* binding */ t),
  "Mo": () => (/* binding */ l)
});

// UNUSED EXPORTS: calculateVerticalOffsetFactors

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(23410);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js + 2 modules
var MaterialUtil = __webpack_require__(54443);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(a){a.vertex.code.add(interfaces/* glsl */.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),a.vertex.code.add(interfaces/* glsl */.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),a.vertex.code.add(interfaces/* glsl */.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),a.vertex.code.add(interfaces/* glsl */.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),a.vertex.code.add(interfaces/* glsl */.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),a.vertex.code.add(interfaces/* glsl */.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),a.vertex.code.add(interfaces/* glsl */.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function c(e,r){if(r.screenSizePerspective){a(r.screenSizePerspective,e,"screenSizePerspective");const c=r.screenSizePerspectiveAlignment||r.screenSizePerspective;a(c,e,"screenSizePerspectiveAlignment")}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,l){const c=t.vertex.code;l.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(t.include(r),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),c.add(interfaces/* glsl */.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===l.viewingMode?interfaces/* glsl */.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:interfaces/* glsl */.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${l.screenSizePerspectiveEnabled?interfaces/* glsl */.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:interfaces/* glsl */.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):c.add(interfaces/* glsl */.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function l(e,r,t){if(!r.verticalOffset)return;const l=VerticalOffset_glsl_c(r.verticalOffset,t.camera.fovY,t.camera.fullViewport[3]),i=t.camera.pixelRatio||1;e.setUniform4f("verticalOffset",l.screenLength*i,l.perDistance,l.minWorldLength,l.maxWorldLength)}function VerticalOffset_glsl_c(e,r,t,l=i){return l.screenLength=e.screenLength,l.perDistance=Math.tan(.5*r)/(.5*t),l.minWorldLength=e.minWorldLength,l.maxWorldLength=e.maxWorldLength,l}const i={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};


/***/ }),

/***/ 97675:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ u)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js
var Slice_glsl = __webpack_require__(5885);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js
var Transform_glsl = __webpack_require__(4731);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js + 1 modules
var NormalAttribute_glsl = __webpack_require__(90511);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var TextureCoordinateAttribute_glsl = __webpack_require__(82082);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js + 1 modules
var VertexNormal_glsl = __webpack_require__(11478);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js
var RgbaFloatEncoding_glsl = __webpack_require__(9794);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(23410);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,o){e.fragment.include(RgbaFloatEncoding_glsl/* RgbaFloatEncoding */.n),3===o.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(interfaces/* glsl */.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===o.output&&e.fragment.code.add(interfaces/* glsl */.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js
var OutputHighlight_glsl = __webpack_require__(55994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js
var VisualVariables_glsl = __webpack_require__(12664);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js
var AlphaDiscard_glsl = __webpack_require__(41272);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(u,c){const p=u.vertex.code,v=u.fragment.code;1!==c.output&&3!==c.output||(u.include(Transform_glsl/* Transform */.w,{linearDepth:!0}),u.include(TextureCoordinateAttribute_glsl/* TextureCoordinateAttribute */.D,c),u.include(VisualVariables_glsl/* VisualVariables */.kl,c),u.include(e,c),u.include(Slice_glsl/* Slice */.p2,c),u.vertex.uniforms.add("cameraNearFar","vec2"),u.varyings.add("depth","float"),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(interfaces/* glsl */.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),u.include(AlphaDiscard_glsl/* DiscardOrAdjustAlpha */.sj,c),v.add(interfaces/* glsl */.H`
      void main(void) {
        discardBySlice(vpos);
        ${c.hasColorTexture?interfaces/* glsl */.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===c.output&&(u.include(Transform_glsl/* Transform */.w,{linearDepth:!1}),u.include(NormalAttribute_glsl/* NormalAttribute */.O,c),u.include(VertexNormal_glsl/* VertexNormal */.B,c),u.include(TextureCoordinateAttribute_glsl/* TextureCoordinateAttribute */.D,c),u.include(VisualVariables_glsl/* VisualVariables */.kl,c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),u.vertex.uniforms.add("viewNormal","mat4"),u.varyings.add("vPositionView","vec3"),p.add(interfaces/* glsl */.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===c.normalType?interfaces/* glsl */.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),u.include(Slice_glsl/* Slice */.p2,c),u.include(AlphaDiscard_glsl/* DiscardOrAdjustAlpha */.sj,c),v.add(interfaces/* glsl */.H`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?interfaces/* glsl */.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===c.normalType?interfaces/* glsl */.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:interfaces/* glsl */.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===c.output&&(u.include(Transform_glsl/* Transform */.w,{linearDepth:!1}),u.include(TextureCoordinateAttribute_glsl/* TextureCoordinateAttribute */.D,c),u.include(VisualVariables_glsl/* VisualVariables */.kl,c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(interfaces/* glsl */.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),u.include(Slice_glsl/* Slice */.p2,c),u.include(AlphaDiscard_glsl/* DiscardOrAdjustAlpha */.sj,c),u.include(OutputHighlight_glsl/* OutputHighlight */.bA),v.add(interfaces/* glsl */.H`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?interfaces/* glsl */.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}


/***/ }),

/***/ 55994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bA": () => (/* binding */ r),
/* harmony export */   "wW": () => (/* binding */ g)
/* harmony export */ });
/* unused harmony exports occludedHighlightFlag, unoccludedHighlightFlag */
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1983);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(1,1,0,1),o=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(1,0,1,1);function r(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",t).add("unoccludedHighlightFlag","vec4",o),e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function g(e,i){e.bindTexture(i.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,i.inverseViewport[0],i.inverseViewport[1])}


/***/ }),

/***/ 6665:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9794);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(a){a.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .RgbaFloatEncoding */ .n),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}


/***/ }),

/***/ 3417:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72129);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,a){const r=n.fragment;a.vertexTangents?(n.attributes.add("tangent","vec4"),n.varyings.add("vTangent","vec4"),2===a.doubleSidedMode?r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(n.extensions.add("GL_OES_standard_derivatives"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==a.attributeTextureCoordinates&&(n.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexTextureCoordinates */ .i,a),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${a.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}


/***/ }),

/***/ 30786:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,t){const r=o.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}


/***/ }),

/***/ 54207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ l)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(23410);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,t){const e=n.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(e.uniforms.add("lightingAmbientSH0","vec3"),e.code.add(interfaces/* glsl */.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(e.uniforms.add("lightingAmbientSH_R","vec4"),e.uniforms.add("lightingAmbientSH_G","vec4"),e.uniforms.add("lightingAmbientSH_B","vec4"),e.code.add(interfaces/* glsl */.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(e.uniforms.add("lightingAmbientSH0","vec3"),e.uniforms.add("lightingAmbientSH_R1","vec4"),e.uniforms.add("lightingAmbientSH_G1","vec4"),e.uniforms.add("lightingAmbientSH_B1","vec4"),e.uniforms.add("lightingAmbientSH_R2","vec4"),e.uniforms.add("lightingAmbientSH_G2","vec4"),e.uniforms.add("lightingAmbientSH_B2","vec4"),e.code.add(interfaces/* glsl */.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||e.code.add(interfaces/* glsl */.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js
var EvaluateAmbientOcclusion_glsl = __webpack_require__(30786);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateMainLighting.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function EvaluateMainLighting_glsl_n(n){const t=n.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(interfaces/* glsl */.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js + 1 modules
var PhysicallyBasedRendering_glsl = __webpack_require__(89585);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js
var PiUtils_glsl = __webpack_require__(95509);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js
var ReadShadowMap_glsl = __webpack_require__(20105);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(l,d){const c=l.fragment;l.include(EvaluateMainLighting_glsl_n),l.include(EvaluateAmbientOcclusion_glsl/* EvaluateAmbientOcclusion */.K,d),0!==d.pbrMode&&l.include(PhysicallyBasedRendering_glsl/* PhysicallyBasedRendering */.T,d),l.include(n,d),d.receiveShadows&&l.include(ReadShadowMap_glsl/* ReadShadowMap */.hX,d),c.uniforms.add("lightingGlobalFactor","float"),c.uniforms.add("ambientBoostFactor","float"),l.include(PiUtils_glsl/* PiUtils */.e),c.code.add(interfaces/* glsl */.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===d.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),c.code.add(interfaces/* glsl */.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===d.viewingMode?interfaces/* glsl */.H`normalize(vPosWorld)`:interfaces/* glsl */.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),c.code.add(interfaces/* glsl */.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===d.pbrMode||4===d.pbrMode?c.code.add(interfaces/* glsl */.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==d.pbrMode&&2!==d.pbrMode||(c.code.add(interfaces/* glsl */.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),c.code.add(interfaces/* glsl */.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),c.code.add(interfaces/* glsl */.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),c.code.add(interfaces/* glsl */.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),c.code.add(interfaces/* glsl */.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===d.pbrMode?interfaces/* glsl */.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:interfaces/* glsl */.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}


/***/ }),

/***/ 73393:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ t),
/* harmony export */   "l": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,t){r.fragment.uniforms.add("terrainDepthTexture","sampler2D"),r.fragment.uniforms.add("cameraNearFar","vec2"),r.fragment.uniforms.add("inverseViewport","vec2"),r.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function t(e,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&e.bindTexture(r.terrainLinearDepthTexture,"terrainDepthTexture")}


/***/ }),

/***/ 2833:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,e){const m=r.fragment;m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===e.doubleSidedMode?m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===e.doubleSidedMode?m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}


/***/ }),

/***/ 89585:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ a)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(23410);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){const a=t.fragment.code;a.add(interfaces/* glsl */.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(interfaces/* glsl */.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(interfaces/* glsl */.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js
var PiUtils_glsl = __webpack_require__(95509);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(a,n){const r=a.fragment.code;a.include(PiUtils_glsl/* PiUtils */.e),3===n.pbrMode||4===n.pbrMode?(r.add(interfaces/* glsl */.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${n.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(interfaces/* glsl */.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(interfaces/* glsl */.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(interfaces/* glsl */.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(interfaces/* glsl */.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==n.pbrMode&&2!==n.pbrMode||(a.include(t),r.add(interfaces/* glsl */.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(interfaces/* glsl */.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(interfaces/* glsl */.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(interfaces/* glsl */.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(interfaces/* glsl */.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(interfaces/* glsl */.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}


/***/ }),

/***/ 3864:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jV": () => (/* binding */ r),
/* harmony export */   "nW": () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export PBRSchematicMRRValues */
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79912);
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72129);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=(0,_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_0__.f)(0,.6,.2);function r(e,t){const r=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexTextureCoordinates */ .i,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`float getBakedOcclusion() { return 1.0; }`),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function a(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor))}


/***/ }),

/***/ 95509:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`const float PI = 3.141592653589793;`),t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}


/***/ }),

/***/ 20105:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hX": () => (/* binding */ t),
/* harmony export */   "vL": () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports bindReadShadowMapUniforms, bindReadShadowMapView */
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9794);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){t.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .RgbaFloatEncoding */ .n),t.fragment.uniforms.add("uShadowMapTex","sampler2D"),t.fragment.uniforms.add("uShadowMapNum","int"),t.fragment.uniforms.add("uShadowMapDistance","vec4"),t.fragment.uniforms.add("uShadowMapMatrix","mat4",4),t.fragment.uniforms.add("uDepthHalfPixelSz","float"),t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function o(a,e){e.shadowMappingEnabled&&(e.shadowMap.bind(a),e.shadowMap.bindView(a,e.origin))}function i(a,e,t){e.shadowMappingEnabled&&e.shadowMap.bindView(a,t)}function l(a,e){e.shadowMappingEnabled&&e.shadowMap.bindView(a,e.origin)}


/***/ }),

/***/ 12664:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kl": () => (/* binding */ e),
/* harmony export */   "uj": () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports bindVisualVariablesUniforms, bindVisualVariablesUniformsWithOpacity */
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,o){o.vvInstancingEnabled&&(o.vvSize||o.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),o.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${o.vvInstancingEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),o.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${o.vvInstancingEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`vec4 vvColor() { return vec4(1.0); }`)}function o(v,e){e.vvSizeEnabled&&(v.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),v.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),v.setUniform3fv("vvSizeOffset",e.vvSizeOffset),v.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(v.setUniform1fv("vvColorValues",e.vvColorValues),v.setUniform4fv("vvColorColors",e.vvColorColors))}function r(v,e){o(v,e),e.vvOpacityEnabled&&(v.setUniform1fv("vvOpacityValues",e.vvOpacityValues),v.setUniform1fv("vvOpacityOpacities",e.vvOpacityOpacities))}function t(v,e){o(v,e),e.vvSizeEnabled&&(v.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),v.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix))}


/***/ }),

/***/ 41272:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sj": () => (/* binding */ r),
/* harmony export */   "F": () => (/* binding */ d),
/* harmony export */   "bf": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=.1,o=.001;function r(d,r){const e=d.fragment;switch(r.alphaDiscardMode){case 0:e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl.float */ .H.float(o)}) { discard; } }
      `);break;case 1:e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:e.uniforms.add("textureAlphaCutoff","float"),e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:d.fragment.uniforms.add("textureAlphaCutoff","float"),d.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}


/***/ }),

/***/ 5331:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ i),
/* harmony export */   "I": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39994);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i({code:e},i){i.doublePrecisionRequiresObfuscation?e.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function r(c){return!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("force-double-precision-obfuscation")||c.driverTest.doublePrecisionRequiresObfuscation}


/***/ }),

/***/ 78115:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6174);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(u,o){const r=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`
  /*
  *  ${o.name}
  *  ${0===o.output?"RenderOutput: Color":1===o.output?"RenderOutput: Depth":3===o.output?"RenderOutput: Shadow":2===o.output?"RenderOutput: Normal":4===o.output?"RenderOutput: Highlight":""}
  */
  `;(0,_webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__/* .webglValidateShadersEnabled */ .CG)()&&(u.fragment.code.add(r),u.vertex.code.add(r))}


/***/ }),

/***/ 10938:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* binding */ i)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(23410);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){e.code.add(interfaces/* glsl */.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(i){i.include(e),i.code.add(interfaces/* glsl */.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${interfaces/* glsl.int */.H.int(1)}) {
        return allMixed;
      }
      else if (mode == ${interfaces/* glsl.int */.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${interfaces/* glsl.int */.H.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${interfaces/* glsl.int */.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${interfaces/* glsl.int */.H.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}


/***/ }),

/***/ 9794:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(a){a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}


/***/ }),

/***/ 3961:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kG": () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports Code, Includes, Stage */
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13802);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getLogger */ .Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class r{constructor(){this.includedModules=new Map}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&t.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r))}}class n extends r{constructor(){super(...arguments),this.vertex=new o,this.fragment=new o,this.attributes=new a,this.varyings=new c,this.extensions=new u,this.constants=new h}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?l:m,c=this.constants.generateSource().concat(s.constants.generateSource());return`\n${t.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}}class s{constructor(){this._entries=new Map}add(e,t,r){const n=`${e}_${t}_${r}`;return this._entries.set(n,{name:e,type:t,arraySize:r}),this}generateSource(){const e=e=>e?`[${e}]`:"";return Array.from(this._entries.values()).map((t=>`uniform ${t.type} ${t.name}${e(t.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class i{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class o extends r{constructor(){super(...arguments),this.uniforms=new s,this.code=new i,this.constants=new h}get builder(){return this}}class a{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class c{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class u{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?u.ALLOWLIST_VERTEX:u.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}u.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u.ALLOWLIST_VERTEX=[];class h{constructor(){this._entries=[]}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=h.numberToFloatStr(r);break;case"int":n=h.numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])},                            ${h.numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])},                             ${h.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>h.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${n};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const m="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",l="precision highp float;\nprecision highp sampler2D;";


/***/ }),

/***/ 23410:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o}(t||(t={}));


/***/ }),

/***/ 12045:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$L": () => (/* binding */ c),
/* harmony export */   "$x": () => (/* binding */ a),
/* harmony export */   "ve": () => (/* binding */ f),
/* harmony export */   "IB": () => (/* binding */ o),
/* harmony export */   "wu": () => (/* binding */ u),
/* harmony export */   "je": () => (/* binding */ s)
/* harmony export */ });
/* unused harmony exports OITDepthWrite, OITPolygonOffset, blendingColor */
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17346);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__/* .separateBlendingParams */ .wK)(770,1,771,771),e=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__/* .simpleBlendingParams */ ["if"])(1,1),o=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__/* .simpleBlendingParams */ ["if"])(0,771);function c(n){return 2===n?null:1===n?o:e}function l(n){return 2===n?r:null}const f=5e5,i={factor:-1,units:-2};function s(n){return n?i:null}function a(n){return 3===n||2===n?513:515}


/***/ }),

/***/ 15095:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hu": () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports AssertException, createTranslationMatrix, dec2hex, encodeInt16, encodeNormal, fallbackIfUndefined, fovd2fovx, fovd2fovy, fovx2fovd, fovx2fovy, fovy2fovd, fovy2fovx, getFirstObjectKey, getMatrixTranslation, hex2rgb, inverseProjectionInfo, isTranslationMatrix, logWithBase, objectEmpty, project, rayBoxTest, rayRay2D, rayTriangle3D, rgb2hex, setMatrixTranslation, setMatrixTranslation3, verify */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19431);
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24455);
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55709);
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69666);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8909);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88589);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1983);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__.c)();class e{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function i(t,n){if(!t){n=n||"assert";const t=new Error(n);throw t.stack&&console.log(t.stack),new e(n)}}function f(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack))}function h(n){return t(Math.round(32767*n),-32767,32767)}function M(t,n){const r=Math.abs(t[0]),o=Math.abs(t[1]),a=1/(r+o+Math.abs(t[2])),u=r*a,c=o*a,s=Math.min(t[2]*a,0);n[0]=(t[0]<0?-1:1)*(u-s),n[1]=(t[1]<0?-1:1)*(c-s)}function m(t,n){return void 0===t?n:t}function l(t){return[((t=Math.floor(t))>>16&255)/255,(t>>8&255)/255,(255&t)/255]}function g(n){return"0x"+((t(Math.round(255*n[0]),0,255)<<16)+(t(Math.round(255*n[1]),0,255)<<8)+t(Math.round(255*n[2]),0,255)).toString(16)}function k(t){const n=t.toString(16);return"00000000".substr(0,8-n.length)+n}function p(t,n,r,o,u,c,s,e,i=a()){const f=1e-5,h=o[s]-r[c],M=o[s+1]-r[c+1],m=o[s+2]-r[c+2],l=u[e]-r[c],g=u[e+1]-r[c+1],k=u[e+2]-r[c+2],p=n[1]*k-g*n[2],j=n[2]*l-k*n[0],v=n[0]*g-l*n[1],d=h*p+M*j+m*v;if(d>-f&&d<f)return!1;const w=1/d,b=t[0]-r[c],q=t[1]-r[c+1],x=t[2]-r[c+2];if(i[1]=w*(b*p+q*j+x*v),i[1]<0||i[1]>1)return!1;const E=q*m-M*x,S=x*h-m*b,y=b*M-h*q;return i[2]=w*(n[0]*E+n[1]*S+n[2]*y),!(i[2]<0||i[1]+i[2]>1)&&(i[0]=w*(l*E+g*S+k*y),!0)}function j(t,n,r,o){let a,u=(r[0]-t[0])/n[0],c=(o[0]-t[0])/n[0];u>c&&(a=u,u=c,c=a);let s=(r[1]-t[1])/n[1],e=(o[1]-t[1])/n[1];if(s>e&&(a=s,s=e,e=a),u>e||s>c)return!1;s>u&&(u=s),e<c&&(c=e);let i=(r[2]-t[2])/n[2],f=(o[2]-t[2])/n[2];return i>f&&(a=i,i=f,f=a),!(u>f||i>c)&&(f<c&&(c=f),!(c<0))}function v(t,n,r,a,u,c=o()){const s=(a[u]-r[u])*(n[0]-t[0])-(a[0]-r[0])*(n[u]-t[u]),e=(a[0]-r[0])*(t[u]-r[u])-(a[u]-r[u])*(t[0]-r[0]);if(0===s)return!1;const i=e/s;return c[0]=t[0]+i*(n[0]-t[0]),c[1]=t[u]+i*(n[u]-t[u]),!0}function d(t,n,r,o,a){a||(a=t),s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=1,u(s,s,n),a.length>2&&(a[2]=-s[2]),u(s,s,r),i(0!==s[3]),a[0]=s[0]/s[3],a[1]=s[1]/s[3],a[2]=s[2]/s[3],a[0]=(.5*a[0]+.5)*o[2]+o[0],a[1]=(.5*a[1]+.5)*o[3]+o[1]}function w(t){for(const n in t)return n}function b(t){for(const n in t)return!1;return!0}function q(t,n){return Math.log(t)/Math.log(n)}function x(t,n){t[12]=n[0],t[13]=n[1],t[14]=n[2]}function E(t,n,r,o){t[12]=n,t[13]=r,t[14]=o}function S(t,n=a()){return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function y(t,r){return x(t=n(t),r),t}function A(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function U(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/n)}function V(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/r)}function $(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/n)}function z(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/r)}function B(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function C(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function D(t,n,o,a,u){const c=t;0===t[11]?(a[0]=2/(n*c[0]),a[1]=2/(o*c[5]),a[2]=(1+c[12])/c[0],a[3]=(1+c[13])/c[5],r(u,0,1)):(a[0]=-2/(n*c[0]),a[1]=-2/(o*c[5]),a[2]=(1-c[8])/c[0],a[3]=(1-c[9])/c[5],r(u,1,0))}


/***/ }),

/***/ 54443:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bj": () => (/* binding */ B),
  "FZ": () => (/* binding */ MaterialUtil_P),
  "Uf": () => (/* binding */ z),
  "Bw": () => (/* binding */ MaterialUtil_h),
  "LO": () => (/* binding */ E),
  "Hx": () => (/* binding */ V)
});

// UNUSED EXPORTS: computeInvDir, computeNormal, intersectAabbInvDir, intersectAabbInvDirBefore, intersectDrapedRenderLineGeometry, intersectTriangles

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(19431);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(6766);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(8909);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(37116);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(e,t){return new p(e,h,t)}function screenSizePerspectiveUtils_r(e,t){const{curvatureDependent:a,scaleStart:i,scaleFallOffRange:r}=h;return new p(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:v.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:v.curvatureDependent.max.scaleFallOffFactor}},scaleStart:i,scaleFallOffRange:r,minPixelSize:v.minPixelSize},t)}function screenSizePerspectiveUtils_n(e){return Math.abs(e*e*e)}function l(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x.scale=Math.min(i.divisor/(t-i.offset),1),x.factor=screenSizePerspectiveUtils_n(e),x.minPixelSize=i.minPixelSize,x.paddingPixels=r,x}function screenSizePerspectiveUtils_s(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function c(t,a){return Math.max((0,mathUtils/* lerp */.t7)(t*a.scale,t,a.factor),screenSizePerspectiveUtils_s(t,a))}function screenSizePerspectiveUtils_o(t,a,i=[0,0]){const r=Math.min(Math.max(a.scale,screenSizePerspectiveUtils_s(t[1],a)/t[1]),1);return i[0]=e(t[0]*r,t[0],a.factor),i[1]=e(t[1]*r,t[1],a.factor),i}function u(e,t,a){const i=l(e,t,a);return i.minPixelSize=0,i.paddingPixels=0,c(1,i)}function d(e,t,a,i){i.scale=u(e,t,a),i.factor=0,i.minPixelSize=a.parameters.minPixelSize,i.paddingPixels=a.paddingPixelsOverride}function f(e,t,a=[0,0]){const i=Math.min(Math.max(t.scale,screenSizePerspectiveUtils_s(e[1],t)/e[1]),1);return a[0]=e[0]*i,a[1]=e[1]*i,a}function screenSizePerspectiveUtils_m(e,t,a,i){return c(e,l(t,a,i))}class p{constructor(e,t,a,i=g(),r){this.viewingMode=e,this.description=t,this.ellipsoidRadius=a,this.parameters=i,this._paddingPixelsOverride=r,2===this.viewingMode?(this.coverageCompensation=this.surfaceCoverageCompensationLocal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersLocal):(this.coverageCompensation=this.surfaceCoverageCompensationGlobal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersGlobal)}get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}update(e){return(!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this.calculateParameters(e,this.ellipsoidRadius,this.parameters),!0)}overridePadding(e){return e!==this.paddingPixelsOverride?new p(this.viewingMode,this.description,this.ellipsoidRadius,this.parameters,e):this}calculateParameters(e,t,a){const{scaleStart:i,scaleFallOffRange:r,minPixelSize:n}=this.description,{fovY:l,distance:s}=e,c=this.calculateCurvatureDependentParameters(e,t),o=this.coverageCompensation(e,t,c),{tiltAngle:u,scaleFallOffFactor:d}=c,f=Math.sin(u)*s,m=.5*Math.PI-u-l*(.5-i*o),p=f/Math.cos(m),h=m+l*r*o,v=(p-d*(f/Math.cos(h)))/(1-d);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=v,a.divisor=p-v,a.minPixelSize=n,a}calculateCurvatureDependentParametersLocal(e,t,a=P){return a.tiltAngle=this.description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this.description.curvatureDependent.min.scaleFallOffFactor,a}calculateCurvatureDependentParametersGlobal(t,i,r=P){const n=this.description.curvatureDependent,l=1+t.distance/i,s=Math.sqrt(l*l-1),[c,o]=[n.min.curvature,n.max.curvature],u=a((s-c)/(o-c),0,1),[d,f]=[n.min,n.max];return r.tiltAngle=e(d.tiltAngle,f.tiltAngle,u),r.scaleFallOffFactor=e(d.scaleFallOffFactor,f.scaleFallOffFactor,u),r}surfaceCoverageCompensationLocal(e,t,a){return(e.fovY-a.tiltAngle)/e.fovY}surfaceCoverageCompensationGlobal(e,t,a){const i=t*t,r=a.tiltAngle+.5*Math.PI,{fovY:n,distance:l}=e,s=l*l+i-2*Math.cos(r)*l*t,c=Math.sqrt(s),o=Math.sqrt(s-i);return(Math.acos(o/c)-Math.asin(t/(c/Math.sin(r)))+.5*n)/n}}const h={curvatureDependent:{min:{curvature:(0,mathUtils/* deg2rad */.Vl)(10),tiltAngle:(0,mathUtils/* deg2rad */.Vl)(12),scaleFallOffFactor:.5},max:{curvature:(0,mathUtils/* deg2rad */.Vl)(70),tiltAngle:(0,mathUtils/* deg2rad */.Vl)(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},v={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function g(){return{camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0}}const x={scale:0,factor:0,minPixelSize:0,paddingPixels:0},P={tiltAngle:0,scaleFallOffFactor:0};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(15095);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(24455);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(39100);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js
var doublePrecisionUtils = __webpack_require__(30560);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function utils_c(r,n){return t(r)&&(r=[]),r.push(n),r}function utils_f(r,n){if(t(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function utils_u(t){return!!(0,maybe/* isSome */.pC)(t)&&!t.visible}function utils_l(t,i,m){const c=t.origin.vec3;a(j,-c[0],-c[1],-c[2]),r(t.transformation)?n(i,j,t.transformation):o(i,j),m&&(s(m,i),e(m,m))}function utils_p(t,r,n,o,s){b[0]=t.get(r,0),b[1]=t.get(r,1),b[2]=t.get(r,2),m(b,utils_g,3),n.set(s,0,utils_g[0]),o.set(s,0,utils_g[1]),n.set(s,1,utils_g[2]),o.set(s,1,utils_g[3]),n.set(s,2,utils_g[4]),o.set(s,2,utils_g[5])}const b=new Float64Array(3),utils_g=new Float32Array(6),j=(0,mat4f64.c)();

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const MaterialUtil_p=(0,aaBoundingBox/* create */.Ue)();function MaterialUtil_h(t,n,e,i,o,r,s){if(!utils_u(n))if(t.boundingInfo){(0,Util/* assert */.hu)(0===t.primitiveType);const n=e.tolerance;MaterialUtil_g(t.boundingInfo,i,o,n,r,s)}else{const n=t.indices.get("position"),e=t.vertexAttributes.get("position");M(i,o,0,n.length/3,n,e,void 0,r,s)}}const MaterialUtil_d=(0,vec3f64.c)();function MaterialUtil_g(t,i,o,r,s,c){if((0,maybe/* isNone */.Wi)(t))return;const l=MaterialUtil_j(i,o,MaterialUtil_d);if((0,aaBoundingBox/* setMin */.op)(MaterialUtil_p,t.getBBMin()),(0,aaBoundingBox/* setMax */.Tn)(MaterialUtil_p,t.getBBMax()),(0,maybe/* isSome */.pC)(s)&&s.applyToAabb(MaterialUtil_p),A(MaterialUtil_p,i,l,r)){const{primitiveIndices:n,indices:e,position:f}=t,a=n?n.length:e.length/3;if(a>U){const n=t.getChildren();if(void 0!==n){for(let t=0;t<8;++t)void 0!==n[t]&&MaterialUtil_g(n[t],i,o,r,s,c);return}}M(i,o,0,a,e,f,n,s,c)}}const MaterialUtil_x=(0,vec3f64.c)();function M(t,n,i,o,r,s,c,f,a){if(c)return MaterialUtil_b(t,n,i,o,r,s,c,f,a);const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,M=n[2]-h;for(let b=i,v=3*i;b<o;++b){let t=u*r[v++],n=l[t++],i=l[t++],o=l[t];t=u*r[v++];let s=l[t++],c=l[t++],y=l[t];t=u*r[v++];let j=l[t++],A=l[t++],L=l[t];(0,maybe/* isSome */.pC)(f)&&([n,i,o]=f.applyToVertex(n,i,o,b),[s,c,y]=f.applyToVertex(s,c,y,b),[j,A,L]=f.applyToVertex(j,A,L,b));const V=s-n,B=c-i,z=y-o,E=j-n,I=A-i,N=L-o,P=g*N-I*M,U=M*E-N*d,S=d*I-E*g,W=V*P+B*U+z*S;if(Math.abs(W)<=Number.EPSILON)continue;const O=m-n,k=p-i,R=h-o,C=O*P+k*U+R*S;if(W>0){if(C<0||C>W)continue}else if(C>0||C<W)continue;const H=k*z-B*R,X=R*V-z*O,Y=O*B-V*k,_=d*H+g*X+M*Y;if(W>0){if(_<0||C+_>W)continue}else if(_>0||C+_<W)continue;const q=(E*H+I*X+N*Y)/W;if(q>=0){a(q,T(V,B,z,E,I,N,MaterialUtil_x),b,!1)}}}function MaterialUtil_b(t,n,i,o,r,s,c,f,a){const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,M=n[2]-h;for(let b=i;b<o;++b){const t=c[b];let n=3*t,i=u*r[n++],o=l[i++],s=l[i++],v=l[i];i=u*r[n++];let y=l[i++],j=l[i++],A=l[i];i=u*r[n];let L=l[i++],V=l[i++],B=l[i];(0,maybe/* isSome */.pC)(f)&&([o,s,v]=f.applyToVertex(o,s,v,b),[y,j,A]=f.applyToVertex(y,j,A,b),[L,V,B]=f.applyToVertex(L,V,B,b));const z=y-o,E=j-s,I=A-v,N=L-o,P=V-s,U=B-v,S=g*U-P*M,W=M*N-U*d,O=d*P-N*g,k=z*S+E*W+I*O;if(Math.abs(k)<=Number.EPSILON)continue;const R=m-o,C=p-s,H=h-v,X=R*S+C*W+H*O;if(k>0){if(X<0||X>k)continue}else if(X>0||X<k)continue;const Y=C*I-E*H,_=H*z-I*R,q=R*E-z*C,w=d*Y+g*_+M*q;if(k>0){if(w<0||X+w>k)continue}else if(w>0||X+w<k)continue;const D=(N*Y+P*_+U*q)/k;if(D>=0){a(D,T(z,E,I,N,P,U,MaterialUtil_x),t,!1)}}}const MaterialUtil_v=(0,vec3f64.c)(),y=(0,vec3f64.c)();function T(t,n,e,s,c,f,a){return (0,vec3.s)(MaterialUtil_v,t,n,e),(0,vec3.s)(y,s,c,f),(0,vec3.c)(a,MaterialUtil_v,y),(0,vec3.n)(a,a),a}function MaterialUtil_j(t,n,e){return (0,vec3.s)(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function A(t,n,e,i){return L(t,n,e,i,1/0)}function L(t,n,e,i,o){const r=(t[0]-i-n[0])*e[0],s=(t[3]+i-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-i-n[1])*e[1],l=(t[4]+i-n[1])*e[1];if(f=Math.min(f,Math.max(a,l)),f<0)return!1;if(c=Math.max(c,Math.min(a,l)),c>f)return!1;const u=(t[2]-i-n[2])*e[2],m=(t[5]+i-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<o)}function V(n,e,i,o,r){let s=(i.screenLength||0)*n.pixelRatio;r&&(s=screenSizePerspectiveUtils_m(s,o,e,r));const c=s*Math.tan(.5*n.fovY)/(.5*n.fullHeight);return (0,mathUtils/* clamp */.uZ)(c*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function B(t,n,e){if(!t)return;const i=t.parameters,o=t.paddingPixelsOverride;n.setUniform4f(e,i.divisor,i.offset,i.minPixelSize,o)}function z(t,n){const e=n?z(n):{};for(const i in t){let n=t[i];n&&n.forEach&&(n=N(n)),null==n&&i in e||(e[i]=n)}return e}function E(t,n){let e=!1;for(const i in n){const o=n[i];void 0!==o&&(e=!0,Array.isArray(o)?t[i]=o.slice():t[i]=o)}return e}function I(n,e,i,o,r,s){if(!e.options.selectionMode)return;const c=n.vertexAttributes.get("position").data,f=n.vertexAttributes.get("size"),a=f&&f.data[0],l=o[0],u=o[1],m=((a+r)/2+4)*n.screenToWorldRatio;let p=Number.MAX_VALUE,h=0;for(let d=0;d<c.length-5;d+=3){const n=c[d],e=c[d+1],i=l-n,o=u-e,r=c[d+3]-n,s=c[d+4]-e,f=t((r*i+s*o)/(r*r+s*s),0,1),a=r*f-i,m=s*f-o,g=a*a+m*m;g<p&&(p=g,h=d/3)}p<m*m&&s(i.dist,i.normal,h,!1)}function N(t){const n=[];return t.forEach((t=>n.push(t))),n}const MaterialUtil_P={multiply:1,ignore:2,replace:3,tint:4},U=1e3;


/***/ }),

/***/ 43487:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19431);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61681);
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6174);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91907);
/* harmony import */ var _capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79193);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=4;class o{constructor(t,e,i=null){this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ResourceType.Texture */ ._g.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...e},34067===this._descriptor.target?this.setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ResourceType.Texture */ ._g.Texture,this))}release(){this.dispose()}resize(t,e){const i=this._descriptor;i.width===t&&i.height===e||(i.width=t,i.height=e,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(t=null){for(let e=34069;e<=34074;e++)this.setData(t,e)}setData(t,a=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||s,this._descriptor.height=this._descriptor.height||s);const p=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES),h=this._descriptor;o._validateTexture(this._context,h),r.pixelStorei(r.UNPACK_ALIGNMENT,h.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,h.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.preMultiplyAlpha?1:0);const l=h.pixelFormat;let d=h.internalFormat?h.internalFormat:this._deriveInternalFormat(l,h.dataType);if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){let e=t.width,s=t.height;t instanceof HTMLVideoElement&&(e=t.videoWidth,s=t.videoHeight),h.width&&h.height,r.texImage2D(a,0,d,l,h.dataType,t),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__/* .checkWebGLError */ .zu)(r),h.hasMipmap&&this.generateMipmap(),void 0===h.width&&(h.width=e),void 0===h.height&&(h.height=s)}else{null!=h.width&&null!=h.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&d===r.DEPTH_STENCIL&&(d=r.DEPTH24_STENCIL8);let s=h.width,o=h.height;if(n(t)){const e=Math.round(Math.log(Math.max(s,o))/Math.LN2)+1;h.hasMipmap=h.hasMipmap&&e===t.levels.length;for(let i=0;;++i){const e=t.levels[Math.min(i,t.levels.length-1)];if(r.compressedTexImage2D(a,i,d,s,o,0,e),1===s&&1===o||!h.hasMipmap)break;s=Math.max(1,s>>1),o=Math.max(1,o>>1)}}else if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(t))r.texImage2D(a,0,d,s,o,0,l,h.dataType,t),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__/* .checkWebGLError */ .zu)(r),h.hasMipmap&&this.generateMipmap();else for(let t=0;r.texImage2D(a,t,d,s,o,0,l,h.dataType,null),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__/* .checkWebGLError */ .zu)(r),(1!==s||1!==o)&&h.hasMipmap;++t)s=Math.max(1,s>>1),o=Math.max(1,o>>1)}o._applySamplingMode(r,this._descriptor),o._applyWrapMode(r,this._descriptor),o._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__/* .checkWebGLError */ .zu)(r),this._context.bindTexture(p,o.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,e,i,a,r,s,n=3553){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._context.gl,h=this._descriptor,l=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);(e<0||i<0||a>h.width||r>h.height||e+a>h.width||i+r>h.height)&&console.error("An attempt to update out of bounds of the texture!"),p.pixelStorei(p.UNPACK_ALIGNMENT,h.unpackAlignment),p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,h.flipped?1:0),p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.preMultiplyAlpha?1:0),s instanceof ImageData||s instanceof HTMLImageElement||s instanceof HTMLCanvasElement||s instanceof HTMLVideoElement?p.texSubImage2D(n,t,e,i,h.pixelFormat,h.dataType,s):p.texSubImage2D(n,t,e,i,a,r,h.pixelFormat,h.dataType,s),this._context.bindTexture(l,o.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,o._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);const e=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,o.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,o._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(o._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(o._applyWrapMode(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(t,e){if("webgl"===this._context.webglVersion)return t;if(5126===e)switch(t){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return t}static _validateTexture(e,i){(i.width<0||i.height<0)&&console.error("Negative dimension parameters are not allowed!");const a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPowerOfTwo */ .wt)(i.width)&&(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPowerOfTwo */ .wt)(i.height);(0,_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(e.gl)||a||("number"==typeof i.wrapMode?33071!==i.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===i.wrapMode.s&&33071===i.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(t,e){let i=e.samplingMode,a=e.samplingMode;9985===i||9987===i?(i=9729,e.hasMipmap||(a=9729)):9984!==i&&9986!==i||(i=9728,e.hasMipmap||(a=9728)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,a)}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){var i;const a=t.capabilities.textureFilterAnisotropic;if(!a)return;t.gl.texParameterf(e.target,a.TEXTURE_MAX_ANISOTROPY,null!=(i=e.maxAnisotropy)?i:1)}}function n(t){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(t)&&"type"in t&&"compressed"===t.type}o.TEXTURE_UNIT_FOR_UPDATES=0;


/***/ }),

/***/ 79193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return window.WebGL2RenderingContext&&n instanceof window.WebGL2RenderingContext}


/***/ }),

/***/ 6174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zu": () => (/* binding */ s),
/* harmony export */   "hZ": () => (/* binding */ u),
/* harmony export */   "CG": () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export hasFeatureFlagWebGLDebug */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39994);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13802);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getLogger */ .Z.getLogger("esri/views/webgl");function o(e,r){switch(r){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const a=!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("enable-feature:webgl-debug");function u(){return a}function c(){return a}function s(r){if(u()){const t=r.getError();if(t){const a=o(r,t),u=(new Error).stack;n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("webgl-error","WebGL error occured",{message:a,stack:u}))}}}


/***/ }),

/***/ 30560:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LF": () => (/* binding */ o),
/* harmony export */   "po": () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports decodeDoubleArray, encodeDouble */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,o){e[0]=n,e[1]=n-e[0],o[0]=e[0],o[1]=e[1]}function o(n,o,t){for(let r=0;r<t;++r)o[2*r]=n[r],o[2*r+1]=n[r]-o[2*r]}function t(n,o,t){for(let r=0;r<t;++r)o[r]=n[2*r]+n[2*r+1]}function r(n,t,r,c){for(let l=0;l<c;++l)f[0]=n[l],o(f,e,1),t[l]=e[0],r[l]=e[1]}const f=new Float64Array(1),e=new Float32Array(2);


/***/ }),

/***/ 91907:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ld": () => (/* binding */ e),
/* harmony export */   "Lu": () => (/* binding */ f),
/* harmony export */   "_g": () => (/* binding */ r)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=33984;var r;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.VertexShader=3]="VertexShader",e[e.FragmentShader=4]="FragmentShader",e[e.Program=5]="Program",e[e.Framebuffer=6]="Framebuffer",e[e.Renderbuffer=7]="Renderbuffer",e[e.COUNT=8]="COUNT"}(r||(r={}));const f=33306;


/***/ }),

/***/ 17346:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jp": () => (/* binding */ K),
/* harmony export */   "zp": () => (/* binding */ s),
/* harmony export */   "BK": () => (/* binding */ r),
/* harmony export */   "LZ": () => (/* binding */ l),
/* harmony export */   "sm": () => (/* binding */ g),
/* harmony export */   "wK": () => (/* binding */ e),
/* harmony export */   "if": () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports backFaceCullingParams, frontFaceCullingParams, makeBlending, makeColorWrite, makeCulling, makeDepthTest, makeDepthWrite, makePolygonOffset, makeStencilTest, makeStencilWrite */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,e,i=32774,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function e(t,e,i,n,s=32774,l=32774,r=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:n,opRgb:s,opAlpha:l,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}const i={face:1029,mode:2305},n={face:1028,mode:2305},s=t=>2===t?i:1===t?n:null,l={zNear:0,zFar:1},r={r:!0,g:!0,b:!0,a:!0};function h(t){return I.intern(t)}function o(t){return S.intern(t)}function a(t){return T.intern(t)}function c(t){return O.intern(t)}function d(t){return w.intern(t)}function p(t){return D.intern(t)}function u(t){return A.intern(t)}function _(t){return k.intern(t)}function g(t){return B.intern(t)}class f{constructor(t,e){this.makeKey=t,this.makeRef=e,this.interns=new Map}intern(t){if(!t)return null;const e=this.makeKey(t),i=this.interns;return i.has(e)||i.set(e,this.makeRef(t)),i.get(e)}}function v(t){return"["+t.join(",")+"]"}const I=new f(W,(t=>({__tag:"Blending",...t})));function W(t){return t?v([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const S=new f(b,(t=>({__tag:"Culling",...t})));function b(t){return t?v([t.face,t.mode]):null}const T=new f(y,(t=>({__tag:"PolygonOffset",...t})));function y(t){return t?v([t.factor,t.units]):null}const O=new f(R,(t=>({__tag:"DepthTest",...t})));function R(t){return t?v([t.func]):null}const w=new f(C,(t=>({__tag:"StencilTest",...t})));function C(t){return t?v([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const D=new f(m,(t=>({__tag:"DepthWrite",...t})));function m(t){return t?v([t.zNear,t.zFar]):null}const A=new f(P,(t=>({__tag:"ColorWrite",...t})));function P(t){return t?v([t.r,t.g,t.b,t.a]):null}const k=new f(z,(t=>({__tag:"StencilWrite",...t})));function z(t){return t?v([t.mask]):null}const B=new f(F,(t=>({blending:h(t.blending),culling:o(t.culling),polygonOffset:a(t.polygonOffset),depthTest:c(t.depthTest),stencilTest:d(t.stencilTest),depthWrite:p(t.depthWrite),colorWrite:u(t.colorWrite),stencilWrite:_(t.stencilWrite)})));function F(t){return t?v([W(t.blending),b(t.culling),y(t.polygonOffset),R(t.depthTest),C(t.stencilTest),m(t.depthWrite),P(t.colorWrite),z(t.stencilWrite)]):null}class K{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this.setBlending(t.blending),this.setCulling(t.culling),this.setPolygonOffset(t.polygonOffset),this.setDepthTest(t.depthTest),this.setStencilTest(t.stencilTest),this.setDepthWrite(t.depthWrite),this.setColorWrite(t.colorWrite),this.setStencilWrite(t.stencilWrite),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}setBlending(t){this._blending=this.setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}setCulling(t){this._culling=this.setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}setPolygonOffset(t){this._polygonOffset=this.setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}setDepthTest(t){this._depthTest=this.setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}setStencilTest(t){this._stencilTest=this.setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}setDepthWrite(t){this._depthWrite=this.setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}setColorWrite(t){this._colorWrite=this.setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}setStencilWrite(t){this._stencilWrite=this.setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}setSubState(t,e,i,n){return(i||t!==e)&&(n(t),this._pipelineInvalid=!0),t}}


/***/ })

};
;
//# sourceMappingURL=7705.render-page.js.map