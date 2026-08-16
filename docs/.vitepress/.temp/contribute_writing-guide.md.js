import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"技术资料写作规范","description":"让文章可查找、可复现、可维护的最低要求","frontmatter":{"title":"技术资料写作规范","description":"让文章可查找、可复现、可维护的最低要求","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"contribute/writing-guide.md","filePath":"contribute/writing-guide.md","lastUpdated":null}');
const _sfc_main = { name: "contribute/writing-guide.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="技术资料写作规范" tabindex="-1">技术资料写作规范 <a class="header-anchor" href="#技术资料写作规范" aria-label="Permalink to &quot;技术资料写作规范&quot;">​</a></h1><h2 id="标题与摘要" tabindex="-1">标题与摘要 <a class="header-anchor" href="#标题与摘要" aria-label="Permalink to &quot;标题与摘要&quot;">​</a></h2><p>标题直接说明问题或主题；摘要说明读者完成后能得到什么。避免“踩坑记录”“一些笔记”这类无法检索的标题。</p><h2 id="环境与版本" tabindex="-1">环境与版本 <a class="header-anchor" href="#环境与版本" aria-label="Permalink to &quot;环境与版本&quot;">​</a></h2><p>安装、编译和部署文章必须写操作系统、硬件、编译器和关键依赖版本。</p><h2 id="操作与验证" tabindex="-1">操作与验证 <a class="header-anchor" href="#操作与验证" aria-label="Permalink to &quot;操作与验证&quot;">​</a></h2><p>命令前说明目的，命令后说明正常输出。把“是否成功”写成读者可以观察的结果。</p><h2 id="图片与代码" tabindex="-1">图片与代码 <a class="header-anchor" href="#图片与代码" aria-label="Permalink to &quot;图片与代码&quot;">​</a></h2><p>图片使用语义化文件名和准确替代文本；代码块标注语言；大段代码优先链接仓库，只展示与解释直接相关的部分。</p><h2 id="故障排查" tabindex="-1">故障排查 <a class="header-anchor" href="#故障排查" aria-label="Permalink to &quot;故障排查&quot;">​</a></h2><p>使用“现象 → 环境 → 检查 → 原因 → 处理 → 验证”结构，不只给出最后一条命令。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("contribute/writing-guide.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const writingGuide = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  writingGuide as default
};
