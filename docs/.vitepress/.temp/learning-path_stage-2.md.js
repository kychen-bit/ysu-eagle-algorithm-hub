import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"阶段 2：OpenCV 与相机","description":"建立图像处理、相机模型和标定基础","frontmatter":{"title":"阶段 2：OpenCV 与相机","description":"建立图像处理、相机模型和标定基础","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"learning-path/stage-2.md","filePath":"learning-path/stage-2.md","lastUpdated":null}');
const _sfc_main = { name: "learning-path/stage-2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="阶段-2-opencv-与相机" tabindex="-1">阶段 2：OpenCV 与相机 <a class="header-anchor" href="#阶段-2-opencv-与相机" aria-label="Permalink to &quot;阶段 2：OpenCV 与相机&quot;">​</a></h1><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>能够稳定读取图片、视频和工业相机数据，理解像素、颜色空间、曝光和相机内参。</p><h2 id="必读" tabindex="-1">必读 <a class="header-anchor" href="#必读" aria-label="Permalink to &quot;必读&quot;">​</a></h2><ul><li><a href="/knowledge/vision-camera">视觉与相机专题</a></li><li><a href="/knowledge/imported/qd/environment_configuration/OpenCV">OpenCV 配置</a></li><li><a href="/knowledge/imported/qd/Project_Tutorial/camera_calibration">相机标定</a></li><li><a href="/blog/imported/sjtu/2021-10-10-vision-learning-2">相机模型与标定课程</a></li></ul><h2 id="实践任务" tabindex="-1">实践任务 <a class="header-anchor" href="#实践任务" aria-label="Permalink to &quot;实践任务&quot;">​</a></h2><p>完成相机采集程序，显示实时帧率与分辨率；保存标定图并计算内参；使用重投影误差评价结果。</p><h2 id="完成标准" tabindex="-1">完成标准 <a class="header-anchor" href="#完成标准" aria-label="Permalink to &quot;完成标准&quot;">​</a></h2><p>在固定设备上连续采集 10 分钟无崩溃，标定结果和使用的图像完整归档。</p><p>下一阶段：<a href="/learning-path/stage-3">装甲板识别</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("learning-path/stage-2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stage2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stage2 as default
};
