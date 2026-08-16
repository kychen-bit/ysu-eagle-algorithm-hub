import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"资源导航","description":"RoboMaster 官方文档、开源项目、其他战队资料与学习资源","frontmatter":{"title":"资源导航","description":"RoboMaster 官方文档、开源项目、其他战队资料与学习资源","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"resources/index.md","filePath":"resources/index.md","lastUpdated":null}');
const _sfc_main = { name: "resources/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="资源导航" tabindex="-1">资源导航 <a class="header-anchor" href="#资源导航" aria-label="Permalink to &quot;资源导航&quot;">​</a></h1><ul><li><a href="/resources/open-source">开源项目</a></li><li><a href="/resources/teams">其他战队资料</a></li><li><a href="https://www.robomaster.com/" target="_blank" rel="noreferrer">RoboMaster 官方网站</a></li><li><a href="https://github.com/RoboMaster" target="_blank" rel="noreferrer">RoboMaster 开源资料</a></li></ul><p>外部资源页只做筛选和导航，不复制没有明确许可的正文与图片。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
