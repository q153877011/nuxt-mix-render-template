import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { u as useHead } from './composables-zw5j2RbG.mjs';
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
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ssg",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "SSG Example",
      meta: [
        { name: "description", content: "Nuxt.js Static Site Generation (SSG) example page demonstrating SSG principles, performance benefits and best practices" }
      ]
    });
    const buildTime = (/* @__PURE__ */ new Date()).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "UTC"
    });
    const activeTab = ref("config");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ssg-page" }, _attrs))} data-v-4f7e5184><section class="page-header" data-v-4f7e5184><div class="container" data-v-4f7e5184><div class="header-content" data-v-4f7e5184><div class="badge badge-success" data-v-4f7e5184><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4f7e5184><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-4f7e5184></path></svg> Static Site Generation </div><h1 data-v-4f7e5184>SSG (Static Site Generation)</h1><p class="page-description" data-v-4f7e5184> Pre-generate all pages at build time for the fastest loading speed and optimal SEO performance. This page was generated at build time on ${ssrInterpolate(unref(buildTime))}. </p></div></div></section><section class="how-it-works section" data-v-4f7e5184><div class="container" data-v-4f7e5184><h2 data-v-4f7e5184>How SSG Works</h2><div class="workflow-diagram" data-v-4f7e5184><div class="workflow-step" data-v-4f7e5184><div class="step-icon build" data-v-4f7e5184>📦</div><h3 data-v-4f7e5184>Build Time Generation</h3><p data-v-4f7e5184>During <code data-v-4f7e5184>npm run build</code> or <code data-v-4f7e5184>npm run generate</code>, Nuxt pre-renders all pages as static HTML files</p></div><div class="workflow-arrow" data-v-4f7e5184>→</div><div class="workflow-step" data-v-4f7e5184><div class="step-icon cdn" data-v-4f7e5184>🌐</div><h3 data-v-4f7e5184>CDN Distribution</h3><p data-v-4f7e5184>Static files can be deployed to any CDN or static hosting service like Netlify, Vercel, GitHub Pages</p></div><div class="workflow-arrow" data-v-4f7e5184>→</div><div class="workflow-step" data-v-4f7e5184><div class="step-icon fast" data-v-4f7e5184>⚡</div><h3 data-v-4f7e5184>Lightning Fast Loading</h3><p data-v-4f7e5184>Users get pre-generated HTML directly, no server rendering needed, extremely fast loading</p></div></div></div></section><section class="performance-metrics section" data-v-4f7e5184><div class="container" data-v-4f7e5184><h2 data-v-4f7e5184>Performance Metrics</h2><div class="metrics-grid grid grid-cols-2" data-v-4f7e5184><div class="metrics-chart" data-v-4f7e5184><h3 data-v-4f7e5184>Loading Time Comparison</h3><div class="chart-bars" data-v-4f7e5184><div class="chart-bar" data-v-4f7e5184><div class="bar-label" data-v-4f7e5184>SSG</div><div class="bar-container" data-v-4f7e5184><div class="bar ssg-bar" style="${ssrRenderStyle({ width: "20%" })}" data-v-4f7e5184>50ms</div></div></div><div class="chart-bar" data-v-4f7e5184><div class="bar-label" data-v-4f7e5184>ISR</div><div class="bar-container" data-v-4f7e5184><div class="bar isr-bar" style="${ssrRenderStyle({ width: "40%" })}" data-v-4f7e5184>120ms</div></div></div><div class="chart-bar" data-v-4f7e5184><div class="bar-label" data-v-4f7e5184>SSR</div><div class="bar-container" data-v-4f7e5184><div class="bar ssr-bar" style="${ssrRenderStyle({ width: "80%" })}" data-v-4f7e5184>300ms</div></div></div></div></div><div class="metrics-stats" data-v-4f7e5184><h3 data-v-4f7e5184>SSG Advantages</h3><div class="stats-list" data-v-4f7e5184><div class="stat-item" data-v-4f7e5184><div class="stat-icon" data-v-4f7e5184>⚡</div><div class="stat-content" data-v-4f7e5184><strong data-v-4f7e5184>Lightning Fast</strong><p data-v-4f7e5184>First load time typically &lt; 100ms</p></div></div><div class="stat-item" data-v-4f7e5184><div class="stat-icon" data-v-4f7e5184>🔍</div><div class="stat-content" data-v-4f7e5184><strong data-v-4f7e5184>SEO Friendly</strong><p data-v-4f7e5184>Complete HTML content, easily indexed by search engines</p></div></div><div class="stat-item" data-v-4f7e5184><div class="stat-icon" data-v-4f7e5184>💰</div><div class="stat-content" data-v-4f7e5184><strong data-v-4f7e5184>Cost Effective</strong><p data-v-4f7e5184>No server needed, can deploy to free CDN</p></div></div><div class="stat-item" data-v-4f7e5184><div class="stat-icon" data-v-4f7e5184>🛡️</div><div class="stat-content" data-v-4f7e5184><strong data-v-4f7e5184>Secure &amp; Stable</strong><p data-v-4f7e5184>Static files, no server security risks</p></div></div></div></div></div></div></section><section class="use-cases section" data-v-4f7e5184><div class="container" data-v-4f7e5184><h2 data-v-4f7e5184>Use Cases</h2><div class="use-cases-grid grid grid-cols-3" data-v-4f7e5184><div class="use-case-card card" data-v-4f7e5184><div class="use-case-icon" data-v-4f7e5184>📚</div><h3 data-v-4f7e5184>Documentation Sites</h3><p data-v-4f7e5184>Technical docs, API documentation, user manuals with relatively fixed content</p><div class="use-case-examples" data-v-4f7e5184><span class="example-tag" data-v-4f7e5184>VuePress</span><span class="example-tag" data-v-4f7e5184>GitBook</span><span class="example-tag" data-v-4f7e5184>Docusaurus</span></div></div><div class="use-case-card card" data-v-4f7e5184><div class="use-case-icon" data-v-4f7e5184>🏢</div><h3 data-v-4f7e5184>Corporate Websites</h3><p data-v-4f7e5184>Company introduction, product showcase, contact information and marketing sites</p><div class="use-case-examples" data-v-4f7e5184><span class="example-tag" data-v-4f7e5184>Landing Page</span><span class="example-tag" data-v-4f7e5184>Portfolio</span><span class="example-tag" data-v-4f7e5184>Brochure</span></div></div><div class="use-case-card card" data-v-4f7e5184><div class="use-case-icon" data-v-4f7e5184>✍️</div><h3 data-v-4f7e5184>Personal Blogs</h3><p data-v-4f7e5184>Low-frequency publishing, infrequent content updates for personal websites</p><div class="use-case-examples" data-v-4f7e5184><span class="example-tag" data-v-4f7e5184>Jekyll</span><span class="example-tag" data-v-4f7e5184>Hexo</span><span class="example-tag" data-v-4f7e5184>Gatsby</span></div></div></div></div></section><section class="code-examples section" data-v-4f7e5184><div class="container" data-v-4f7e5184><h2 data-v-4f7e5184>Configuration Example</h2><div class="code-tabs" data-v-4f7e5184><div class="tab-buttons" data-v-4f7e5184><button class="${ssrRenderClass([{ active: unref(activeTab) === "config" }, "tab-button"])}" data-v-4f7e5184> Nuxt Config </button><button class="${ssrRenderClass([{ active: unref(activeTab) === "page" }, "tab-button"])}" data-v-4f7e5184> Page Component </button><button class="${ssrRenderClass([{ active: unref(activeTab) === "build" }, "tab-button"])}" data-v-4f7e5184> Build Commands </button></div><div class="tab-content" data-v-4f7e5184>`);
      if (unref(activeTab) === "config") {
        _push(`<div class="tab-panel" data-v-4f7e5184><pre data-v-4f7e5184><code data-v-4f7e5184>// nuxt.config.ts
export default defineNuxtConfig({
  // Global SSG configuration
  nitro: {
    prerender: {
      routes: [&#39;/ssg&#39;, &#39;/about&#39;, &#39;/contact&#39;]
    }
  },
  
  // Route-level configuration
  routeRules: {
    &#39;/ssg&#39;: { prerender: true },
    &#39;/blog/**&#39;: { prerender: true }
  }
})</code></pre></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "page") {
        _push(`<div class="tab-panel" data-v-4f7e5184><pre data-v-4f7e5184><code data-v-4f7e5184>// pages/ssg.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;${ssrInterpolate(_ctx.title)}&lt;/h1&gt;
    &lt;p&gt;Build time: ${ssrInterpolate(unref(buildTime))}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Executed at build time, data will be staticized
const { data: content } = await $fetch(&#39;/api/static-content&#39;)

const title = content.title
const buildTime = new Date().toISOString()
&lt;/script&gt;</code></pre></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "build") {
        _push(`<div class="tab-panel" data-v-4f7e5184><pre data-v-4f7e5184><code data-v-4f7e5184># Generate static site
npm run generate

# Or build with prerendering
npm run build

# Preview generated static files
npm run preview</code></pre></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section class="page-info section" data-v-4f7e5184><div class="container" data-v-4f7e5184><div class="info-card card" data-v-4f7e5184><h3 data-v-4f7e5184>📊 Page Information</h3><div class="info-grid" data-v-4f7e5184><div class="info-item" data-v-4f7e5184><strong data-v-4f7e5184>Rendering Mode:</strong><span class="badge badge-success" data-v-4f7e5184>SSG</span></div><div class="info-item" data-v-4f7e5184><strong data-v-4f7e5184>Build Time:</strong><span data-v-4f7e5184>${ssrInterpolate(unref(buildTime))}</span></div><div class="info-item" data-v-4f7e5184><strong data-v-4f7e5184>Page Size:</strong><span data-v-4f7e5184>~15KB (gzipped)</span></div><div class="info-item" data-v-4f7e5184><strong data-v-4f7e5184>First Load:</strong><span data-v-4f7e5184>&lt; 100ms</span></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ssg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ssg = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f7e5184"]]);

export { ssg as default };
//# sourceMappingURL=ssg-Ba2SplRj.mjs.map
