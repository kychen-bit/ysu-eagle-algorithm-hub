import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"关于燕鹰算法知识库","description":"网站定位、维护方式和公开边界","frontmatter":{"title":"关于燕鹰算法知识库","description":"网站定位、维护方式和公开边界","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"about/index.md","filePath":"about/index.md","lastUpdated":null}');
const _sfc_main = { name: "about/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于燕鹰算法知识库" tabindex="-1">关于燕鹰算法知识库 <a class="header-anchor" href="#关于燕鹰算法知识库" aria-label="Permalink to &quot;关于燕鹰算法知识库&quot;">​</a></h1><p>燕鹰算法知识库由燕山大学 RoboMaster 燕鹰战队算法组维护，面向新人、在役队员、历届成员及其他 RoboMaster 学习者公开。</p><p>网站的目标不是展示“我们知道多少”，而是让一个具体问题更容易被找到、复现和继续改进。</p><h2 id="公开边界" tabindex="-1">公开边界 <a class="header-anchor" href="#公开边界" aria-label="Permalink to &quot;公开边界&quot;">​</a></h2><p>本站不保存账号、密钥、内网地址、未公开比赛参数和对局策略。公开内容不代表燕山大学官方立场。</p><h2 id="联系与反馈" tabindex="-1">联系与反馈 <a class="header-anchor" href="#联系与反馈" aria-label="Permalink to &quot;联系与反馈&quot;">​</a></h2><p>文章错误通过 GitHub Issue 反馈，内容修改通过 Pull Request 提交。投稿前请阅读<a href="/contribute/">参与共建</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("about/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
