import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"阶段 0：准备与开发环境","description":"建立可复现的 Linux 开发环境和基本问题排查习惯","frontmatter":{"title":"阶段 0：准备与开发环境","description":"建立可复现的 Linux 开发环境和基本问题排查习惯","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"learning-path/stage-0.md","filePath":"learning-path/stage-0.md","lastUpdated":null}');
const _sfc_main = { name: "learning-path/stage-0.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="阶段-0-准备与开发环境" tabindex="-1">阶段 0：准备与开发环境 <a class="header-anchor" href="#阶段-0-准备与开发环境" aria-label="Permalink to &quot;阶段 0：准备与开发环境&quot;">​</a></h1><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>安装 Linux 开发环境，掌握终端、目录、软件源和基础网络排查，能够把自己的环境信息说清楚。</p><h2 id="必读" tabindex="-1">必读 <a class="header-anchor" href="#必读" aria-label="Permalink to &quot;必读&quot;">​</a></h2><ul><li><a href="/knowledge/imported/qd/Introduction_to_Linux/hello_ubuntu">Ubuntu 入门</a></li><li><a href="/knowledge/imported/qd/Introduction_to_Linux/Basic_commands">Linux 基本命令</a></li><li><a href="/knowledge/environment">开发环境专题</a></li></ul><h2 id="实践任务" tabindex="-1">实践任务 <a class="header-anchor" href="#实践任务" aria-label="Permalink to &quot;实践任务&quot;">​</a></h2><ol><li>安装受支持的 Ubuntu LTS 或组内指定环境。</li><li>使用终端完成目录创建、文件操作、权限检查和软件安装。</li><li>记录系统版本、内核、显卡、网络和磁盘信息。</li><li>新建一份 <code>environment-report.md</code>，写清环境与安装过程。</li></ol><h2 id="完成标准" tabindex="-1">完成标准 <a class="header-anchor" href="#完成标准" aria-label="Permalink to &quot;完成标准&quot;">​</a></h2><p>在不依赖图形化文件管理器的情况下完成基础文件操作，并能提供一份其他队员看得懂的环境报告。</p><p>下一阶段：<a href="/learning-path/stage-1">Linux、Git 与 C++</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("learning-path/stage-0.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stage0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stage0 as default
};
