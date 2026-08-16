import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"页面未找到","description":"","frontmatter":{"layout":"page","title":"页面未找到","aside":false},"headers":[],"relativePath":"404.md","filePath":"404.md","lastUpdated":null}');
const _sfc_main = { name: "404.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="这条路径还没有资料" tabindex="-1">这条路径还没有资料 <a class="header-anchor" href="#这条路径还没有资料" aria-label="Permalink to &quot;这条路径还没有资料&quot;">​</a></h1><p>页面可能已经移动，或者尚未收录。你可以使用顶部搜索、返回<a href="/knowledge/">知识库</a>，也可以提交 Issue 告诉我们缺少什么。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("404.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _404 as default
};
