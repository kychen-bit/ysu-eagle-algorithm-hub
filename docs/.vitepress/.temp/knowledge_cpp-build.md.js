import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"C++ 与构建系统","description":"C++、CMake、Eigen、多线程与基础算法资料","frontmatter":{"title":"C++ 与构建系统","description":"C++、CMake、Eigen、多线程与基础算法资料","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"knowledge/cpp-build.md","filePath":"knowledge/cpp-build.md","lastUpdated":null}');
const _sfc_main = { name: "knowledge/cpp-build.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="c-与构建系统" tabindex="-1">C++ 与构建系统 <a class="header-anchor" href="#c-与构建系统" aria-label="Permalink to &quot;C++ 与构建系统&quot;">​</a></h1><ul><li><a href="/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/C++11_grammar">C++11 语法</a></li><li><a href="/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/C++_multi_threading">C++ 多线程</a></li><li><a href="/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/Eigen">Eigen</a></li><li><a href="/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/Data_Structures_and_Algorithms">数据结构与算法</a></li><li><a href="/knowledge/imported/qd/Project_Tutorial/cmake">CMake 入门</a></li></ul><p>学习重点不是背语法，而是能建立清晰模块边界、读懂编译错误，并让项目在另一台机器上可重复构建。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/cpp-build.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cppBuild = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cppBuild as default
};
