import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"项目手册","description":"面向真实算法项目的部署、配置、调试和交接文档","frontmatter":{"title":"项目手册","description":"面向真实算法项目的部署、配置、调试和交接文档","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"projects/index.md","filePath":"projects/index.md","lastUpdated":null}');
const _sfc_main = { name: "projects/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="项目手册" tabindex="-1">项目手册 <a class="header-anchor" href="#项目手册" aria-label="Permalink to &quot;项目手册&quot;">​</a></h1><p>项目手册回答“这个系统如何运行和维护”，与讲解通用原理的知识库不同。</p><h2 id="当前内容" tabindex="-1">当前内容 <a class="header-anchor" href="#当前内容" aria-label="Permalink to &quot;当前内容&quot;">​</a></h2><ul><li><a href="/projects/minimal-vision">最小视觉项目</a>：新人从图像输入走到结果输出的最小闭环。</li><li><a href="/projects/template">公开手册模板</a>：后续燕鹰项目统一使用的文档结构。</li></ul><div class="warning custom-block"><p class="custom-block-title">公开边界</p><p>项目手册不得记录服务器账号、密钥、内网地址、未公开参数、对局策略和其他不适合公开的信息。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("projects/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
