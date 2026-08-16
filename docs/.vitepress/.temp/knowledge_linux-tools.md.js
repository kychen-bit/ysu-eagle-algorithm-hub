import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Linux 与工程工具","description":"Linux、Git、SSH、网络与自动化工具资料","frontmatter":{"title":"Linux 与工程工具","description":"Linux、Git、SSH、网络与自动化工具资料","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"knowledge/linux-tools.md","filePath":"knowledge/linux-tools.md","lastUpdated":null}');
const _sfc_main = { name: "knowledge/linux-tools.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="linux-与工程工具" tabindex="-1">Linux 与工程工具 <a class="header-anchor" href="#linux-与工程工具" aria-label="Permalink to &quot;Linux 与工程工具&quot;">​</a></h1><ul><li><a href="/knowledge/imported/qd/Introduction_to_Linux/Basic_commands">Linux 基本命令</a></li><li><a href="/knowledge/imported/qd/Introduction_to_Linux/Git">Git 基础</a></li><li><a href="/knowledge/imported/qd/Introduction_to_Linux/SSH">SSH</a></li><li><a href="/knowledge/imported/qd/environment_configuration/Shared_network">网络共享</a></li><li><a href="/knowledge/imported/qd/Introduction_to_Linux/autoStart">开机自启</a></li></ul><h2 id="排查顺序" tabindex="-1">排查顺序 <a class="header-anchor" href="#排查顺序" aria-label="Permalink to &quot;排查顺序&quot;">​</a></h2><p>遇到问题时先确认“文件是否存在、进程是否运行、端口是否监听、网络是否可达、权限是否正确”，再修改配置。所有修复都应记录原始现象和验证结果。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/linux-tools.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const linuxTools = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  linuxTools as default
};
