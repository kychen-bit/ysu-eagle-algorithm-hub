import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"公开项目手册模板","description":"燕鹰算法项目的部署、调试与交接文档模板","frontmatter":{"title":"公开项目手册模板","description":"燕鹰算法项目的部署、调试与交接文档模板","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"projects/template.md","filePath":"projects/template.md","lastUpdated":null}');
const _sfc_main = { name: "projects/template.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="公开项目手册模板" tabindex="-1">公开项目手册模板 <a class="header-anchor" href="#公开项目手册模板" aria-label="Permalink to &quot;公开项目手册模板&quot;">​</a></h1><h2 id="项目解决什么问题" tabindex="-1">项目解决什么问题 <a class="header-anchor" href="#项目解决什么问题" aria-label="Permalink to &quot;项目解决什么问题&quot;">​</a></h2><p>用一段话说明输入、核心处理和输出，避免只写项目代号。</p><h2 id="支持环境" tabindex="-1">支持环境 <a class="header-anchor" href="#支持环境" aria-label="Permalink to &quot;支持环境&quot;">​</a></h2><p>列出操作系统、硬件、编译器和关键依赖版本。</p><h2 id="获取与构建" tabindex="-1">获取与构建 <a class="header-anchor" href="#获取与构建" aria-label="Permalink to &quot;获取与构建&quot;">​</a></h2><p>提供从干净环境开始的完整命令，并说明成功构建的标志。</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>说明每个公开参数的含义、单位、默认值和影响范围。</p><h2 id="运行与验证" tabindex="-1">运行与验证 <a class="header-anchor" href="#运行与验证" aria-label="Permalink to &quot;运行与验证&quot;">​</a></h2><p>给出启动命令、正常日志、输入输出和最小验证步骤。</p><h2 id="标定与调试" tabindex="-1">标定与调试 <a class="header-anchor" href="#标定与调试" aria-label="Permalink to &quot;标定与调试&quot;">​</a></h2><p>描述前置条件、操作顺序、结果文件和失败现象。</p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><p>按“现象 → 检查 → 原因 → 处理 → 验证”书写。</p><h2 id="维护信息" tabindex="-1">维护信息 <a class="header-anchor" href="#维护信息" aria-label="Permalink to &quot;维护信息&quot;">​</a></h2><p>记录维护者、更新时间、相关文档和公开仓库地址。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("projects/template.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const template = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  template as default
};
