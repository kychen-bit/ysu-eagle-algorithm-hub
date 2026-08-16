import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"视觉与相机","description":"OpenCV、相机模型、标定、坐标系与 PnP 资料","frontmatter":{"title":"视觉与相机","description":"OpenCV、相机模型、标定、坐标系与 PnP 资料","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"knowledge/vision-camera.md","filePath":"knowledge/vision-camera.md","lastUpdated":null}');
const _sfc_main = { name: "knowledge/vision-camera.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="视觉与相机" tabindex="-1">视觉与相机 <a class="header-anchor" href="#视觉与相机" aria-label="Permalink to &quot;视觉与相机&quot;">​</a></h1><h2 id="建议阅读" tabindex="-1">建议阅读 <a class="header-anchor" href="#建议阅读" aria-label="Permalink to &quot;建议阅读&quot;">​</a></h2><ul><li><a href="/blog/imported/sjtu/2020-09-05-vision-learning-1-overview">RoboMaster 视觉综述</a></li><li><a href="/knowledge/imported/qd/environment_configuration/OpenCV">OpenCV 配置</a></li><li><a href="/knowledge/imported/qd/Project_Tutorial/camera_calibration">相机标定</a></li><li><a href="/knowledge/imported/qd/Project_Tutorial/Camera_extrinsic_calibration">相机外参标定</a></li><li><a href="/blog/imported/sjtu/2021-10-10-vision-learning-2">相机模型与标定课程</a></li></ul><h2 id="一条基本数据链" tabindex="-1">一条基本数据链 <a class="header-anchor" href="#一条基本数据链" aria-label="Permalink to &quot;一条基本数据链&quot;">​</a></h2><p>真实目标经过相机成像成为像素点；检测器输出角点；去畸变与 PnP 根据相机模型恢复目标相对相机的位姿；外参再把结果变换到云台或世界坐标系。任何一步坐标约定不一致，都会表现为“角度看起来差一点”。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/vision-camera.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visionCamera = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  visionCamera as default
};
