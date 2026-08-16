import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"最小视觉项目","description":"用一个可运行的图像处理闭环连接基础知识","frontmatter":{"title":"最小视觉项目","description":"用一个可运行的图像处理闭环连接基础知识","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"projects/minimal-vision.md","filePath":"projects/minimal-vision.md","lastUpdated":null}');
const _sfc_main = { name: "projects/minimal-vision.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="最小视觉项目" tabindex="-1">最小视觉项目 <a class="header-anchor" href="#最小视觉项目" aria-label="Permalink to &quot;最小视觉项目&quot;">​</a></h1><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>读取视频或相机图像，完成颜色空间转换、阈值分割、轮廓筛选和结果可视化，同时记录帧率与关键中间量。</p><h2 id="推荐结构" tabindex="-1">推荐结构 <a class="header-anchor" href="#推荐结构" aria-label="Permalink to &quot;推荐结构&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>minimal-vision/</span></span>
<span class="line"><span>├── CMakeLists.txt</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── config/</span></span>
<span class="line"><span>├── include/</span></span>
<span class="line"><span>├── src/</span></span>
<span class="line"><span>├── tests/</span></span>
<span class="line"><span>└── assets/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="验收" tabindex="-1">验收 <a class="header-anchor" href="#验收" aria-label="Permalink to &quot;验收&quot;">​</a></h2><ol><li>能在干净构建目录完成编译。</li><li>输入源和阈值通过配置文件设置。</li><li>输出包含原图、二值图、候选轮廓和处理耗时。</li><li>输入结束、图像为空或配置错误时给出可理解的错误信息。</li><li>README 说明环境、构建、运行和预期结果。</li></ol><p>完成后进入<a href="/learning-path/stage-3">装甲板识别阶段</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("projects/minimal-vision.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const minimalVision = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  minimalVision as default
};
