import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"技术博客","description":"燕鹰原创、转载教程与 RoboMaster 算法实践记录","frontmatter":{"title":"技术博客","description":"燕鹰原创、转载教程与 RoboMaster 算法实践记录","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"blog/index.md","filePath":"blog/index.md","lastUpdated":null}');
const _sfc_main = { name: "blog/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="技术博客" tabindex="-1">技术博客 <a class="header-anchor" href="#技术博客" aria-label="Permalink to &quot;技术博客&quot;">​</a></h1><p>博客保存特定时间的经验、复盘、研究和转载资料。持续维护的通用知识会进一步整理进入知识库。</p><h2 id="转载与整理" tabindex="-1">转载与整理 <a class="header-anchor" href="#转载与整理" aria-label="Permalink to &quot;转载与整理&quot;">​</a></h2><h3 id="装甲板识别调参经验" tabindex="-1"><a href="/blog/imported/sjtu/2023-05-16-rm-cv-std-how-to-adjust-parameters">装甲板识别调参经验</a> <a class="header-anchor" href="#装甲板识别调参经验" aria-label="Permalink to &quot;[装甲板识别调参经验](/blog/imported/sjtu/2023-05-16-rm-cv-std-how-to-adjust-parameters)&quot;">​</a></h3><p>来自上海交通大学 RoboMaster 交龙战队，集中讨论标准装甲板识别的参数调整与问题定位。</p><h3 id="相机模型与相机标定" tabindex="-1"><a href="/blog/imported/sjtu/2021-10-10-vision-learning-2">相机模型与相机标定</a> <a class="header-anchor" href="#相机模型与相机标定" aria-label="Permalink to &quot;[相机模型与相机标定](/blog/imported/sjtu/2021-10-10-vision-learning-2)&quot;">​</a></h3><p>从坐标系、成像模型和畸变出发介绍相机标定，是进入 PnP 之前的重要材料。</p><h3 id="robomaster-视觉综述" tabindex="-1"><a href="/blog/imported/sjtu/2020-09-05-vision-learning-1-overview">RoboMaster 视觉综述</a> <a class="header-anchor" href="#robomaster-视觉综述" aria-label="Permalink to &quot;[RoboMaster 视觉综述](/blog/imported/sjtu/2020-09-05-vision-learning-1-overview)&quot;">​</a></h3><p>面向新人的视觉方向概览，介绍 RoboMaster 视觉的任务、能力与学习路径。</p><h2 id="原创投稿" tabindex="-1">原创投稿 <a class="header-anchor" href="#原创投稿" aria-label="Permalink to &quot;原创投稿&quot;">​</a></h2><p>首篇燕鹰原创文章虚位以待。阅读<a href="/contribute/">投稿指南</a>，把一次调试、训练或复盘整理成可复用资料。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
