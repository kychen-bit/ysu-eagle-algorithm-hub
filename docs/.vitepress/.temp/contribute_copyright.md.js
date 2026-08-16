import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"转载与版权说明","description":"聚合外部资料时必须保留的来源和授权信息","frontmatter":{"title":"转载与版权说明","description":"聚合外部资料时必须保留的来源和授权信息","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"contribute/copyright.md","filePath":"contribute/copyright.md","lastUpdated":null}');
const _sfc_main = { name: "contribute/copyright.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="转载与版权说明" tabindex="-1">转载与版权说明 <a class="header-anchor" href="#转载与版权说明" aria-label="Permalink to &quot;转载与版权说明&quot;">​</a></h1><p>本站是公开资料聚合与技术博客，不会把其他作者的文章包装为燕鹰原创。</p><h2 id="转载文章必须包含" tabindex="-1">转载文章必须包含 <a class="header-anchor" href="#转载文章必须包含" aria-label="Permalink to &quot;转载文章必须包含&quot;">​</a></h2><ul><li>原作者或来源项目。</li><li>可访问的原始链接。</li><li>原许可证（能够确认时）。</li><li>本站做过的格式、结构或内容调整说明。</li></ul><h2 id="原创、转载与整理" tabindex="-1">原创、转载与整理 <a class="header-anchor" href="#原创、转载与整理" aria-label="Permalink to &quot;原创、转载与整理&quot;">​</a></h2><ul><li><code>original</code>：由燕鹰成员原创并授权本站发布。</li><li><code>repost</code>：保留原文主体，仅做站点适配。</li><li><code>curated</code>：汇总多个来源或经过明显重写，仍逐项标注参考资料。</li></ul><p>如果你是权利人，希望更正署名或移除内容，请在仓库提交 Issue，维护者会优先处理。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("contribute/copyright.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const copyright = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  copyright as default
};
