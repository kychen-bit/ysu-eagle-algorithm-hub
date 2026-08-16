import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"算法组学习路线","description":"从开发环境到整车联调的一条连续训练路线","frontmatter":{"title":"算法组学习路线","description":"从开发环境到整车联调的一条连续训练路线","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"learning-path/index.md","filePath":"learning-path/index.md","lastUpdated":null}');
const _sfc_main = { name: "learning-path/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="算法组学习路线" tabindex="-1">算法组学习路线 <a class="header-anchor" href="#算法组学习路线" aria-label="Permalink to &quot;算法组学习路线&quot;">​</a></h1><p>这不是“建议阅读列表”，而是一条可执行的训练顺序。每一阶段都说明目标、必读材料、实践任务和完成标准。遇到陌生概念时先完成当前阶段，不要同时铺开所有方向。</p><table tabindex="0"><thead><tr><th>阶段</th><th>主题</th><th>最终产出</th></tr></thead><tbody><tr><td><a href="/learning-path/stage-0">0</a></td><td>准备与环境</td><td>可复现的 Linux 开发环境</td></tr><tr><td><a href="/learning-path/stage-1">1</a></td><td>Linux、Git 与 C++</td><td>能参与一个规范仓库的协作</td></tr><tr><td><a href="/learning-path/stage-2">2</a></td><td>OpenCV 与相机</td><td>读取相机并稳定处理图像</td></tr><tr><td><a href="/learning-path/stage-3">3</a></td><td>装甲板识别</td><td>输出可靠的目标角点与类别</td></tr><tr><td><a href="/learning-path/stage-4">4</a></td><td>PnP 与坐标系</td><td>从像素位置得到空间位姿</td></tr><tr><td><a href="/learning-path/stage-5">5</a></td><td>预测与通信</td><td>形成识别—解算—控制闭环</td></tr><tr><td><a href="/learning-path/stage-6">6</a></td><td>部署与维护</td><td>在车载设备复现并排查系统</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">使用方式</p><p>每个阶段先完成“必读”，再做实践任务。能够复述概念不算完成，产生可运行程序、日志或复盘记录才算完成。</p></div><h2 id="学习原则" tabindex="-1">学习原则 <a class="header-anchor" href="#学习原则" aria-label="Permalink to &quot;学习原则&quot;">​</a></h2><ol><li>先复现，再优化；先形成闭环，再讨论局部极限。</li><li>记录设备、系统、依赖和参数版本，避免“只在我的电脑上能跑”。</li><li>任何连续两小时没有进展的问题，都应整理最小复现后向组内提问。</li><li>重要结论提交到知识库，不把技术积累留在聊天记录里。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("learning-path/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
