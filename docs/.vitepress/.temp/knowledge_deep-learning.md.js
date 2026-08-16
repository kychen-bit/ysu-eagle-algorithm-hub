import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"深度学习与目标检测","description":"数据集、训练、评估和部署资料入口","frontmatter":{"title":"深度学习与目标检测","description":"数据集、训练、评估和部署资料入口","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"knowledge/deep-learning.md","filePath":"knowledge/deep-learning.md","lastUpdated":null}');
const _sfc_main = { name: "knowledge/deep-learning.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="深度学习与目标检测" tabindex="-1">深度学习与目标检测 <a class="header-anchor" href="#深度学习与目标检测" aria-label="Permalink to &quot;深度学习与目标检测&quot;">​</a></h1><ul><li><a href="/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/Fundamentals_of_Deep_Learning">深度学习基础</a></li><li><a href="/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/yolov5_learning">YOLOv5 学习资料</a></li><li><a href="/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/yolov8_learning">YOLOv8 学习资料</a></li></ul><h2 id="工程关注点" tabindex="-1">工程关注点 <a class="header-anchor" href="#工程关注点" aria-label="Permalink to &quot;工程关注点&quot;">​</a></h2><p>模型精度不是唯一指标。RoboMaster 场景还需要关注端到端延迟、漏检连续性、部署平台算力、相机曝光变化和失败样例分布。训练报告应同时保留数据版本、权重、配置和推理环境。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/deep-learning.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deepLearning = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deepLearning as default
};
