import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"通信、设备与部署","description":"串口、ROS 2、相机驱动、网络与车载部署资料","frontmatter":{"title":"通信、设备与部署","description":"串口、ROS 2、相机驱动、网络与车载部署资料","updated":"2026-08-16T00:00:00.000Z"},"headers":[],"relativePath":"knowledge/communication-deploy.md","filePath":"knowledge/communication-deploy.md","lastUpdated":null}');
const _sfc_main = { name: "knowledge/communication-deploy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="通信、设备与部署" tabindex="-1">通信、设备与部署 <a class="header-anchor" href="#通信、设备与部署" aria-label="Permalink to &quot;通信、设备与部署&quot;">​</a></h1><ul><li><a href="/knowledge/imported/qd/Technical_Basics_and_Development_Techniques/Serial_Communication">串口通信基础</a></li><li><a href="/knowledge/imported/qd/Project_Tutorial/serial_communication">串口通信项目教程</a></li><li><a href="/knowledge/imported/qd/environment_configuration/ROS">ROS 环境</a></li><li><a href="/knowledge/imported/qd/environment_configuration/hikvision">海康相机</a></li><li><a href="/knowledge/imported/qd/environment_configuration/Fixed_equipment_address">固定设备地址</a></li><li><a href="/knowledge/imported/qd/Project_Tutorial/deploy_auto_aim">自瞄部署</a></li></ul><p>部署文档必须说明启动命令、配置位置、日志位置、正常现象和回滚方式。不要把账号、密钥、内网地址或未公开比赛参数写入公开站点。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("knowledge/communication-deploy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const communicationDeploy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  communicationDeploy as default
};
