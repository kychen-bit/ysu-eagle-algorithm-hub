import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"阶段 5：预测与通信","description":"连接检测、解算、预测、控制与下位机通信","frontmatter":{"title":"阶段 5：预测与通信","description":"连接检测、解算、预测、控制与下位机通信","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"learning-path/stage-5.md","filePath":"learning-path/stage-5.md","lastUpdated":null}');
const _sfc_main = { name: "learning-path/stage-5.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="阶段-5-预测与通信" tabindex="-1">阶段 5：预测与通信 <a class="header-anchor" href="#阶段-5-预测与通信" aria-label="Permalink to &quot;阶段 5：预测与通信&quot;">​</a></h1><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>理解时间戳、延迟、滤波、运动模型和串口协议，把独立算法模块连接成稳定闭环。</p><h2 id="必读" tabindex="-1">必读 <a class="header-anchor" href="#必读" aria-label="Permalink to &quot;必读&quot;">​</a></h2><ul><li><a href="/knowledge/communication-deploy">通信与部署专题</a></li><li><a href="/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/Serial_Communication">串口通信</a></li><li><a href="/projects/template">项目手册模板</a></li></ul><h2 id="实践任务" tabindex="-1">实践任务 <a class="header-anchor" href="#实践任务" aria-label="Permalink to &quot;实践任务&quot;">​</a></h2><p>实现带帧头、长度、序号和校验的收发协议；记录端到端延迟；对一段目标轨迹完成基础滤波与短时预测。</p><h2 id="完成标准" tabindex="-1">完成标准 <a class="header-anchor" href="#完成标准" aria-label="Permalink to &quot;完成标准&quot;">​</a></h2><p>在丢包、粘包和异常数据条件下程序不会崩溃，日志可以定位通信与预测阶段的耗时。</p><p>下一阶段：<a href="/learning-path/stage-6">部署与维护</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("learning-path/stage-5.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stage5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stage5 as default
};
