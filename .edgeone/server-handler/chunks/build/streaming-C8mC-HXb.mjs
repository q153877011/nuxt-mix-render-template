import { defineComponent, withAsyncContext, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useHead } from './composables-zw5j2RbG.mjs';
import { u as useAsyncData } from './asyncData-Dwr9S_jy.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "streaming",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Streaming Example",
      meta: [
        { name: "description", content: "Nuxt.js Streaming rendering example page demonstrating progressive content delivery" }
      ]
    });
    const { data: streamData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("streaming-data", () => $fetch("/api/streaming-data"), {
      server: true
    })), __temp = await __temp, __restore(), __temp);
    const progress = ref(0);
    const formatNumber = (num) => {
      if (!num) return "0";
      return num.toLocaleString("en-US");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "streaming-page" }, _attrs))} data-v-52fa1e07><section class="page-header" data-v-52fa1e07><div class="container" data-v-52fa1e07><div class="header-content" data-v-52fa1e07><div class="badge badge-warning" data-v-52fa1e07><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-52fa1e07><path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-52fa1e07></path><polyline points="7,10 12,15 17,10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-52fa1e07></polyline><line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-52fa1e07></line></svg> Streaming Rendering </div><h1 data-v-52fa1e07>Streaming (Server-Side Streaming)</h1><p class="page-description" data-v-52fa1e07> Demonstrates progressive content delivery where data is streamed from server to client in chunks. </p></div></div></section><section class="streaming-demo section" data-v-52fa1e07><div class="container" data-v-52fa1e07><div class="demo-card" data-v-52fa1e07><h2 data-v-52fa1e07>📡 Data Streaming Progress</h2><div class="progress-section" data-v-52fa1e07><div class="progress-info" data-v-52fa1e07><span data-v-52fa1e07>Streaming data from server...</span><span data-v-52fa1e07>${ssrInterpolate(unref(progress))}%</span></div><div class="progress-bar" data-v-52fa1e07><div class="progress-fill" style="${ssrRenderStyle({ width: `${unref(progress)}%` })}" data-v-52fa1e07></div></div></div><div class="data-section" data-v-52fa1e07><h3 data-v-52fa1e07>📊 Received Data</h3><div class="data-container" data-v-52fa1e07><div class="data-item" data-v-52fa1e07><label data-v-52fa1e07>Server Time:</label><span data-v-52fa1e07>${ssrInterpolate(unref(streamData)?.serverTime || "Loading...")}</span></div><div class="data-item" data-v-52fa1e07><label data-v-52fa1e07>Request ID:</label><span data-v-52fa1e07>${ssrInterpolate(unref(streamData)?.metadata?.requestId || "Loading...")}</span></div><div class="data-item" data-v-52fa1e07><label data-v-52fa1e07>Environment:</label><span data-v-52fa1e07>${ssrInterpolate(unref(streamData)?.metadata?.environment || "Loading...")}</span></div><div class="data-item" data-v-52fa1e07><label data-v-52fa1e07>Response Time:</label><span data-v-52fa1e07>${ssrInterpolate(unref(streamData)?.performance?.responseTime || 0)}ms</span></div><div class="data-item" data-v-52fa1e07><label data-v-52fa1e07>Throughput:</label><span data-v-52fa1e07>${ssrInterpolate(formatNumber(unref(streamData)?.performance?.throughput))} req/s</span></div><div class="data-item" data-v-52fa1e07><label data-v-52fa1e07>Uptime:</label><span data-v-52fa1e07>${ssrInterpolate(unref(streamData)?.performance?.uptime || "N/A")}</span></div></div></div><div class="raw-data-section" data-v-52fa1e07><h3 data-v-52fa1e07>🔍 Raw JSON Data</h3><pre class="json-display" data-v-52fa1e07>${ssrInterpolate(JSON.stringify(unref(streamData), null, 2))}</pre></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/streaming.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const streaming = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52fa1e07"]]);

export { streaming as default };
//# sourceMappingURL=streaming-C8mC-HXb.mjs.map
