import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"其他战队资料","description":"本站参考与收录的 RoboMaster 战队知识库和博客","frontmatter":{"title":"其他战队资料","description":"本站参考与收录的 RoboMaster 战队知识库和博客","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"resources/teams.md","filePath":"resources/teams.md","lastUpdated":null}');
const _sfc_main = { name: "resources/teams.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="其他战队资料" tabindex="-1">其他战队资料 <a class="header-anchor" href="#其他战队资料" aria-label="Permalink to &quot;其他战队资料&quot;">​</a></h1><table tabindex="0"><thead><tr><th>项目</th><th>类型</th><th>本站使用方式</th></tr></thead><tbody><tr><td><a href="https://github.com/NOMANE-0/QD_Algorithm_Library" target="_blank" rel="noreferrer">QD Algorithm Library</a></td><td>算法知识库</td><td>主要内容来源与结构参考</td></tr><tr><td><a href="https://github.com/SJTU-RoboMaster-Team/SJTU-RoboMaster-Team.github.io" target="_blank" rel="noreferrer">SJTU RoboMaster Team Blog</a></td><td>战队技术博客</td><td>视觉课程与训练资料</td></tr><tr><td><a href="https://github.com/TongjiSuperPower/TongjiSuperPower.github.io" target="_blank" rel="noreferrer">Tongji SuperPower</a></td><td>战队官网</td><td>界面与品牌组织参考</td></tr><tr><td>T-UP 飞书知识库</td><td>飞书资料</td><td>待获得可访问内容后补充索引</td></tr></tbody></table><p>转载页面会单独显示来源和原始链接。发现署名或链接错误，请通过 GitHub Issue 反馈。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/teams.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const teams = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  teams as default
};
