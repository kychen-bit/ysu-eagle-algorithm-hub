import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"开发环境","description":"算法开发常用系统、驱动、依赖和工具入口","frontmatter":{"title":"开发环境","description":"算法开发常用系统、驱动、依赖和工具入口","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"knowledge/environment.md","filePath":"knowledge/environment.md","lastUpdated":null}');
const _sfc_main = { name: "knowledge/environment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="开发环境" tabindex="-1">开发环境 <a class="header-anchor" href="#开发环境" aria-label="Permalink to &quot;开发环境&quot;">​</a></h1><h2 id="推荐顺序" tabindex="-1">推荐顺序 <a class="header-anchor" href="#推荐顺序" aria-label="Permalink to &quot;推荐顺序&quot;">​</a></h2><ol><li><a href="/knowledge/imported/qd/Introduction_to_Linux/hello_ubuntu">Ubuntu 入门</a></li><li><a href="/knowledge/imported/qd/Introduction_to_Linux/Basic_commands">Linux 基本命令</a></li><li><a href="/knowledge/imported/qd/environment_configuration/OpenCV">OpenCV 编译与配置</a></li><li><a href="/knowledge/imported/qd/environment_configuration/ROS">ROS 环境配置</a></li><li><a href="/knowledge/imported/qd/environment_configuration/NVIDIA_driver">NVIDIA 驱动</a></li></ol><h2 id="环境记录要求" tabindex="-1">环境记录要求 <a class="header-anchor" href="#环境记录要求" aria-label="Permalink to &quot;环境记录要求&quot;">​</a></h2><p>提交安装类文章时，应写明 Ubuntu、内核、编译器、CUDA、OpenCV/ROS 版本与硬件型号。不要只写“执行以下命令即可”。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/environment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const environment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  environment as default
};
