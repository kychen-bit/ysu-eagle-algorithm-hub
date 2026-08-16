import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"阶段 4：PnP 与坐标系","description":"把二维检测结果转换为空间位姿","frontmatter":{"title":"阶段 4：PnP 与坐标系","description":"把二维检测结果转换为空间位姿","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"learning-path/stage-4.md","filePath":"learning-path/stage-4.md","lastUpdated":null}');
const _sfc_main = { name: "learning-path/stage-4.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="阶段-4-pnp-与坐标系" tabindex="-1">阶段 4：PnP 与坐标系 <a class="header-anchor" href="#阶段-4-pnp-与坐标系" aria-label="Permalink to &quot;阶段 4：PnP 与坐标系&quot;">​</a></h1><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>明确像素、相机、云台和世界坐标系之间的关系，使用 PnP 得到目标位姿，并理解误差来源。</p><h2 id="必读" tabindex="-1">必读 <a class="header-anchor" href="#必读" aria-label="Permalink to &quot;必读&quot;">​</a></h2><ul><li><a href="/knowledge/vision-camera">视觉与相机专题</a></li><li><a href="/knowledge/imported/qd/Project_Tutorial/Camera_extrinsic_calibration">相机外参标定</a></li></ul><h2 id="实践任务" tabindex="-1">实践任务 <a class="header-anchor" href="#实践任务" aria-label="Permalink to &quot;实践任务&quot;">​</a></h2><p>使用已知尺寸目标和标定内参完成 PnP；改变距离与视角采集数据，对比测量值和估计值。</p><h2 id="完成标准" tabindex="-1">完成标准 <a class="header-anchor" href="#完成标准" aria-label="Permalink to &quot;完成标准&quot;">​</a></h2><p>提交坐标系示意图、变换链、误差表和一个可运行的位姿解算示例。</p><p>下一阶段：<a href="/learning-path/stage-5">预测与通信</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("learning-path/stage-4.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stage4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stage4 as default
};
