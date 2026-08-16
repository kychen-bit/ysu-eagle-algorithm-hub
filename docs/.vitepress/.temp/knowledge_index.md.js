import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"技术知识库","description":"按稳定技术领域组织的 RoboMaster 算法资料","frontmatter":{"title":"技术知识库","description":"按稳定技术领域组织的 RoboMaster 算法资料","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"knowledge/index.md","filePath":"knowledge/index.md","lastUpdated":null}');
const _sfc_main = { name: "knowledge/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="技术知识库" tabindex="-1">技术知识库 <a class="header-anchor" href="#技术知识库" aria-label="Permalink to &quot;技术知识库&quot;">​</a></h1><p>知识库回答“这个问题怎么理解和解决”。如果你是第一次接触算法组开发，请优先从<a href="/learning-path/">学习路线</a>进入。</p><h2 id="基础与工程" tabindex="-1">基础与工程 <a class="header-anchor" href="#基础与工程" aria-label="Permalink to &quot;基础与工程&quot;">​</a></h2><ul><li><a href="/knowledge/environment">开发环境</a>：Ubuntu、显卡、依赖与编辑器。</li><li><a href="/knowledge/linux-tools">Linux 与工程工具</a>：终端、Git、SSH、网络与服务。</li><li><a href="/knowledge/cpp-build">C++ 与构建系统</a>：语言、CMake、Eigen、多线程。</li></ul><h2 id="算法与系统" tabindex="-1">算法与系统 <a class="header-anchor" href="#算法与系统" aria-label="Permalink to &quot;算法与系统&quot;">​</a></h2><ul><li><a href="/knowledge/vision-camera">视觉与相机</a>：OpenCV、成像、标定、PnP。</li><li><a href="/knowledge/deep-learning">深度学习</a>：检测网络、数据集、训练与部署。</li><li><a href="/knowledge/communication-deploy">通信与部署</a>：ROS 2、串口、设备与排障。</li></ul><div class="info custom-block"><p class="custom-block-title">资料来源</p><p>“精选原文”保留来自其他 RoboMaster 战队的公开资料，页面顶部会显示来源项目、原始链接和许可证。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
