import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"阶段 1：Linux、Git 与 C++","description":"掌握算法项目的工程协作底座","frontmatter":{"title":"阶段 1：Linux、Git 与 C++","description":"掌握算法项目的工程协作底座","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"learning-path/stage-1.md","filePath":"learning-path/stage-1.md","lastUpdated":null}');
const _sfc_main = { name: "learning-path/stage-1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="阶段-1-linux、git-与-c" tabindex="-1">阶段 1：Linux、Git 与 C++ <a class="header-anchor" href="#阶段-1-linux、git-与-c" aria-label="Permalink to &quot;阶段 1：Linux、Git 与 C++&quot;">​</a></h1><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>能阅读和修改基础 C++ 项目，使用 Git 分支、提交和 Pull Request 与其他人协作。</p><h2 id="必读" tabindex="-1">必读 <a class="header-anchor" href="#必读" aria-label="Permalink to &quot;必读&quot;">​</a></h2><ul><li><a href="/knowledge/imported/qd/Introduction_to_Linux/Git">Git 基础</a></li><li><a href="/knowledge/cpp-build">C++ 与构建系统</a></li><li><a href="/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/C++11_grammar">C++11 语法</a></li><li><a href="/knowledge/imported/qd/Project_Tutorial/cmake">CMake 入门</a></li></ul><h2 id="实践任务" tabindex="-1">实践任务 <a class="header-anchor" href="#实践任务" aria-label="Permalink to &quot;实践任务&quot;">​</a></h2><p>创建一个 CMake 管理的命令行项目：读取一组二维点，计算中心与包围盒，编写至少两个独立源文件，并通过分支和 Pull Request 合并。</p><h2 id="完成标准" tabindex="-1">完成标准 <a class="header-anchor" href="#完成标准" aria-label="Permalink to &quot;完成标准&quot;">​</a></h2><p>项目能在干净目录中通过 <code>cmake</code> 和构建命令编译；提交历史清楚；README 能指导另一名队员复现。</p><p>下一阶段：<a href="/learning-path/stage-2">OpenCV 与相机</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("learning-path/stage-1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stage1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stage1 as default
};
