import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
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
  __name: "ssr",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "SSR Example",
      meta: [
        { name: "description", content: "Nuxt.js Server-Side Rendering (SSR) example page demonstrating real-time data and dynamic content" }
      ]
    });
    const { data: ssrData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("ssr-data", () => $fetch("/api/ssr-data"), {
      server: true
    })), __temp = await __temp, __restore(), __temp);
    const formatNumber = (num) => {
      if (!num) return "0";
      return num.toLocaleString("en-US");
    };
    const formatRelativeTime = (dateString) => {
      if (!dateString) return "unknown";
      const serverTime = ssrData.value?.timestamp ? new Date(ssrData.value.timestamp) : /* @__PURE__ */ new Date();
      const date = new Date(dateString);
      const diff = serverTime.getTime() - date.getTime();
      const minutes = Math.floor(diff / 6e4);
      if (minutes < 1) return "just now";
      if (minutes < 60) return `${minutes} minutes ago`;
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return `${hours} hours ago`;
      const days = Math.floor(hours / 24);
      return `${days} days ago`;
    };
    const getStatusClass = (status) => {
      switch (status) {
        case "online":
          return "status-online";
        case "offline":
          return "status-offline";
        case "busy":
          return "status-busy";
        default:
          return "status-unknown";
      }
    };
    const getStatusText = (status) => {
      switch (status) {
        case "online":
          return "Online";
        case "offline":
          return "Offline";
        case "busy":
          return "Busy";
        case "healthy":
          return "Healthy";
        case "warning":
          return "Warning";
        case "error":
          return "Error";
        default:
          return "Unknown";
      }
    };
    const getServiceName = (service) => {
      switch (service) {
        case "database":
          return "Database";
        case "cache":
          return "Cache";
        case "api":
          return "API Service";
        case "cdn":
          return "CDN";
        default:
          return service;
      }
    };
    const getServiceIcon = (service) => {
      switch (service) {
        case "database":
          return "🗄️";
        case "cache":
          return "⚡";
        case "api":
          return "🔌";
        case "cdn":
          return "🌐";
        default:
          return "⚙️";
      }
    };
    const getLoadTrend = (load) => {
      if (load < 30) return "Low";
      if (load < 70) return "Medium";
      return "High";
    };
    const getLoadTrendClass = (load) => {
      if (load < 30) return "positive";
      if (load < 70) return "neutral";
      return "negative";
    };
    const getResponseTrend = (time) => {
      if (time < 50) return "Excellent";
      if (time < 100) return "Good";
      return "Needs Optimization";
    };
    const getResponseTrendClass = (time) => {
      if (time < 50) return "positive";
      if (time < 100) return "neutral";
      return "negative";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ssr-page" }, _attrs))} data-v-521c1333><section class="page-header" data-v-521c1333><div class="container" data-v-521c1333><div class="header-content" data-v-521c1333><div class="badge badge-success" data-v-521c1333><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-521c1333><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-521c1333></path><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-521c1333></path><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-521c1333></path></svg> Server-Side Rendering </div><h1 data-v-521c1333>SSR (Server-Side Rendering)</h1><p class="page-description" data-v-521c1333> Render pages on the server in real-time, supporting personalized content and live data display. Each request generates fresh data and content dynamically. </p></div></div></section><section class="dashboard section" data-v-521c1333><div class="container" data-v-521c1333><div class="dashboard-header" data-v-521c1333><h2 data-v-521c1333>📊 Server-Side Rendered Dashboard</h2><div class="server-info" data-v-521c1333><span class="badge badge-success" data-v-521c1333><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-521c1333><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-521c1333></path><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-521c1333></path><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-521c1333></path></svg> Rendered on Server </span><span class="server-time" data-v-521c1333>Server-Side Rendered</span></div></div><div class="stats-grid grid grid-cols-4" data-v-521c1333><div class="stat-card" data-v-521c1333><div class="stat-icon active-users" data-v-521c1333>👥</div><div class="stat-content" data-v-521c1333><div class="stat-value" data-v-521c1333>${ssrInterpolate(unref(ssrData)?.stats?.activeUsers || 0)}</div><div class="stat-label" data-v-521c1333>Active Users</div><div class="stat-trend positive" data-v-521c1333>+12%</div></div></div><div class="stat-card" data-v-521c1333><div class="stat-icon total-views" data-v-521c1333>👁️</div><div class="stat-content" data-v-521c1333><div class="stat-value" data-v-521c1333>${ssrInterpolate(formatNumber(unref(ssrData)?.stats?.totalViews))}</div><div class="stat-label" data-v-521c1333>Total Views</div><div class="stat-trend positive" data-v-521c1333>+8%</div></div></div><div class="stat-card" data-v-521c1333><div class="stat-icon server-load" data-v-521c1333>⚡</div><div class="stat-content" data-v-521c1333><div class="stat-value" data-v-521c1333>${ssrInterpolate(unref(ssrData)?.stats?.serverLoad || 0)}%</div><div class="stat-label" data-v-521c1333>Server Load</div><div class="${ssrRenderClass([getLoadTrendClass(unref(ssrData)?.stats?.serverLoad), "stat-trend"])}" data-v-521c1333>${ssrInterpolate(getLoadTrend(unref(ssrData)?.stats?.serverLoad))}</div></div></div><div class="stat-card" data-v-521c1333><div class="stat-icon response-time" data-v-521c1333>🚀</div><div class="stat-content" data-v-521c1333><div class="stat-value" data-v-521c1333>${ssrInterpolate(unref(ssrData)?.stats?.responseTime || 0)}ms</div><div class="stat-label" data-v-521c1333>Response Time</div><div class="${ssrRenderClass([getResponseTrendClass(unref(ssrData)?.stats?.responseTime), "stat-trend"])}" data-v-521c1333>${ssrInterpolate(getResponseTrend(unref(ssrData)?.stats?.responseTime))}</div></div></div></div><div class="activity-section" data-v-521c1333><h3 data-v-521c1333>👤 User Activity</h3><div class="users-grid" data-v-521c1333><!--[-->`);
      ssrRenderList(unref(ssrData)?.users, (user) => {
        _push(`<div class="user-card" data-v-521c1333><div class="user-avatar" data-v-521c1333><div class="${ssrRenderClass([getStatusClass(user.status), "avatar-circle"])}" data-v-521c1333>${ssrInterpolate(user.name.charAt(0))}</div><div class="${ssrRenderClass([user.status, "status-indicator"])}" data-v-521c1333></div></div><div class="user-info" data-v-521c1333><div class="user-name" data-v-521c1333>${ssrInterpolate(user.name)}</div><div class="user-status" data-v-521c1333>${ssrInterpolate(getStatusText(user.status))}</div><div class="last-active" data-v-521c1333> Last active: ${ssrInterpolate(formatRelativeTime(user.lastActive))}</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="system-status" data-v-521c1333><h3 data-v-521c1333>🔧 System Status</h3><div class="status-grid grid grid-cols-2" data-v-521c1333><!--[-->`);
      ssrRenderList(unref(ssrData)?.systemStatus, (status, service) => {
        _push(`<div class="status-item" data-v-521c1333><div class="service-info" data-v-521c1333><div class="service-name" data-v-521c1333>${ssrInterpolate(getServiceName(service))}</div><div class="${ssrRenderClass([status, "service-status"])}" data-v-521c1333><div class="${ssrRenderClass([status, "status-dot"])}" data-v-521c1333></div> ${ssrInterpolate(getStatusText(status))}</div></div><div class="${ssrRenderClass([status, "service-icon"])}" data-v-521c1333>${ssrInterpolate(getServiceIcon(service))}</div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="page-info section" data-v-521c1333><div class="container" data-v-521c1333><div class="info-card card" data-v-521c1333><h3 data-v-521c1333>📊 Page Information</h3><div class="info-grid" data-v-521c1333><div class="info-item" data-v-521c1333><strong data-v-521c1333>Rendering Mode:</strong><span class="badge badge-success" data-v-521c1333>SSR</span></div><div class="info-item" data-v-521c1333><strong data-v-521c1333>Request ID:</strong><span data-v-521c1333>${ssrInterpolate(unref(ssrData)?.requestId || "unknown")}</span></div><div class="info-item" data-v-521c1333><strong data-v-521c1333>Processing Time:</strong><span data-v-521c1333>${ssrInterpolate(unref(ssrData)?.performance?.processingTime || 0)}ms</span></div><div class="info-item" data-v-521c1333><strong data-v-521c1333>Environment:</strong><span data-v-521c1333>${ssrInterpolate(unref(ssrData)?.metadata?.environment || "unknown")}</span></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ssr.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ssr = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-521c1333"]]);

export { ssr as default };
//# sourceMappingURL=ssr-BmnZZsOc.mjs.map
