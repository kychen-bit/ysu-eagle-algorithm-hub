import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RoboMaster 算法开源项目","description":"适合学习视觉、定位、导航和工程架构的开源项目索引","frontmatter":{"title":"RoboMaster 算法开源项目","description":"适合学习视觉、定位、导航和工程架构的开源项目索引","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"resources/open-source.md","filePath":"resources/open-source.md","lastUpdated":null}');
const _sfc_main = { name: "resources/open-source.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="robomaster-算法开源项目" tabindex="-1">RoboMaster 算法开源项目 <a class="header-anchor" href="#robomaster-算法开源项目" aria-label="Permalink to &quot;RoboMaster 算法开源项目&quot;">​</a></h1><h2 id="官方与通用工具" tabindex="-1">官方与通用工具 <a class="header-anchor" href="#官方与通用工具" aria-label="Permalink to &quot;官方与通用工具&quot;">​</a></h2><ul><li><a href="https://github.com/RoboMaster" target="_blank" rel="noreferrer">RoboMaster GitHub</a>：官方 SDK、裁判系统和相关资料。</li><li><a href="https://github.com/opencv/opencv" target="_blank" rel="noreferrer">OpenCV</a>：计算机视觉基础库。</li><li><a href="https://docs.ros.org/" target="_blank" rel="noreferrer">ROS 2</a>：机器人软件通信与工具生态。</li></ul><h2 id="选择项目时看什么" tabindex="-1">选择项目时看什么 <a class="header-anchor" href="#选择项目时看什么" aria-label="Permalink to &quot;选择项目时看什么&quot;">​</a></h2><p>不要只看 Star 数量。优先检查许可证、维护时间、硬件条件、构建说明、数据与模型是否公开，以及代码是否能在当前平台复现。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/open-source.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const openSource = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  openSource as default
};
