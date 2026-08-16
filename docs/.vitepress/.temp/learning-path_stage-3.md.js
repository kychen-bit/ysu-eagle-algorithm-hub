import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"阶段 3：装甲板识别","description":"从图像预处理走到目标角点与类别输出","frontmatter":{"title":"阶段 3：装甲板识别","description":"从图像预处理走到目标角点与类别输出","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"learning-path/stage-3.md","filePath":"learning-path/stage-3.md","lastUpdated":null}');
const _sfc_main = { name: "learning-path/stage-3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="阶段-3-装甲板识别" tabindex="-1">阶段 3：装甲板识别 <a class="header-anchor" href="#阶段-3-装甲板识别" aria-label="Permalink to &quot;阶段 3：装甲板识别&quot;">​</a></h1><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>理解传统视觉和学习型检测的角色，构建可观察、可调试的装甲板识别流水线。</p><h2 id="必读" tabindex="-1">必读 <a class="header-anchor" href="#必读" aria-label="Permalink to &quot;必读&quot;">​</a></h2><ul><li><a href="/blog/imported/sjtu/2020-09-05-vision-learning-1-overview">RoboMaster 视觉综述</a></li><li><a href="/blog/imported/sjtu/2023-05-16-rm-cv-std-how-to-adjust-parameters">装甲板调参经验</a></li><li><a href="/knowledge/deep-learning">深度学习专题</a></li></ul><h2 id="实践任务" tabindex="-1">实践任务 <a class="header-anchor" href="#实践任务" aria-label="Permalink to &quot;实践任务&quot;">​</a></h2><p>在给定视频上输出灯条、候选装甲板、四角点和类别；保留中间二值图、候选筛选数量和耗时统计。</p><h2 id="完成标准" tabindex="-1">完成标准 <a class="header-anchor" href="#完成标准" aria-label="Permalink to &quot;完成标准&quot;">​</a></h2><p>程序能离线处理测试视频，输出可视化结果与失败样例；文档说明每个阈值影响哪一步。</p><p>下一阶段：<a href="/learning-path/stage-4">PnP 与坐标系</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("learning-path/stage-3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stage3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stage3 as default
};
