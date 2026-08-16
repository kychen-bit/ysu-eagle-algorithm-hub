import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"参与共建","description":"通过 Markdown 和 GitHub Pull Request 投稿或修正资料","frontmatter":{"title":"参与共建","description":"通过 Markdown 和 GitHub Pull Request 投稿或修正资料","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"contribute/index.md","filePath":"contribute/index.md","lastUpdated":null}');
const _sfc_main = { name: "contribute/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="参与共建" tabindex="-1">参与共建 <a class="header-anchor" href="#参与共建" aria-label="Permalink to &quot;参与共建&quot;">​</a></h1><p>你不需要会前端开发。会写 Markdown、能说明来源并完成基本自检，就可以投稿。</p><h2 id="投稿流程" tabindex="-1">投稿流程 <a class="header-anchor" href="#投稿流程" aria-label="Permalink to &quot;投稿流程&quot;">​</a></h2><ol><li>在 GitHub 打开目标目录，选择新建或编辑文件。</li><li>使用知识文档或博客模板填写 Frontmatter。</li><li>转载内容填写原作者、原始链接、来源项目和许可证。</li><li>提交到新分支并创建 Pull Request。</li><li>根据审核意见修改，合并后网站自动发布。</li></ol><h2 id="适合投稿的内容" tabindex="-1">适合投稿的内容 <a class="header-anchor" href="#适合投稿的内容" aria-label="Permalink to &quot;适合投稿的内容&quot;">​</a></h2><ul><li>环境配置和故障排查记录。</li><li>算法原理、实验和失败样例。</li><li>项目部署、调参和交接说明。</li><li>比赛或训练复盘中可公开的技术部分。</li><li>值得长期保存的外部资料整理。</li></ul><p>继续阅读：<a href="/contribute/writing-guide">写作规范</a> · <a href="/contribute/copyright">转载与版权</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("contribute/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
