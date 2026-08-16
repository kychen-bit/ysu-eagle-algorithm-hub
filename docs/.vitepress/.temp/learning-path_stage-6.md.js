import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"阶段 6：部署、调参与上场维护","description":"在真实车载环境复现系统并形成可维护文档","frontmatter":{"title":"阶段 6：部署、调参与上场维护","description":"在真实车载环境复现系统并形成可维护文档","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"learning-path/stage-6.md","filePath":"learning-path/stage-6.md","lastUpdated":null}');
const _sfc_main = { name: "learning-path/stage-6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="阶段-6-部署、调参与上场维护" tabindex="-1">阶段 6：部署、调参与上场维护 <a class="header-anchor" href="#阶段-6-部署、调参与上场维护" aria-label="Permalink to &quot;阶段 6：部署、调参与上场维护&quot;">​</a></h1><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>把算法部署到指定计算平台，建立启动、日志、参数、回滚和故障排查流程。</p><h2 id="必读" tabindex="-1">必读 <a class="header-anchor" href="#必读" aria-label="Permalink to &quot;必读&quot;">​</a></h2><ul><li><a href="/knowledge/communication-deploy">通信与部署专题</a></li><li><a href="/knowledge/imported/qd/Project_Tutorial/deploy_auto_aim">自瞄部署资料</a></li><li><a href="/projects/minimal-vision">最小视觉项目</a></li></ul><h2 id="实践任务" tabindex="-1">实践任务 <a class="header-anchor" href="#实践任务" aria-label="Permalink to &quot;实践任务&quot;">​</a></h2><p>在一台干净设备上从 README 完成部署，制作启动服务，记录关键配置并进行断电重启测试。</p><h2 id="完成标准" tabindex="-1">完成标准 <a class="header-anchor" href="#完成标准" aria-label="Permalink to &quot;完成标准&quot;">​</a></h2><p>另一名队员可以只依据项目手册完成部署；常见故障至少包含现象、检查顺序和恢复方法。</p><p>完成这一步后，应选择自瞄、能量机关、雷达或导航方向继续深入，并开始为知识库贡献资料。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("learning-path/stage-6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stage6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stage6 as default
};
