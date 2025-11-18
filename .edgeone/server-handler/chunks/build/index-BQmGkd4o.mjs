import { _ as __nuxt_component_0 } from './nuxt-link-BNLvi22R.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './composables-zw5j2RbG.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home",
      meta: [
        { name: "description", content: "Nuxt.js hybrid rendering example project homepage showcasing SSG, ISR, and SSR rendering modes" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-cf39062d><section class="hero-section" data-v-cf39062d><div class="container" data-v-cf39062d><div class="hero-content" data-v-cf39062d><div class="hero-badge" data-v-cf39062d><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-cf39062d><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-cf39062d></path></svg> Nuxt.js Hybrid Rendering </div><h1 class="hero-title" data-v-cf39062d> Modern Web Application <span class="gradient-text" data-v-cf39062d>Rendering Strategies</span></h1><p class="hero-description" data-v-cf39062d> Explore SSG, ISR, and SSR rendering modes with complete examples and best practices. </p><div class="hero-actions" data-v-cf39062d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ssg",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start Exploring <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-cf39062d${_scopeId}><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cf39062d${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Start Exploring "),
              (openBlock(), createBlock("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M5 12H19M19 12L12 5M19 12L12 19",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://nuxt.com/docs" target="_blank" class="btn btn-secondary" data-v-cf39062d> View Documentation </a></div></div></div></section><section class="features-section section" data-v-cf39062d><div class="container" data-v-cf39062d><div class="section-header" data-v-cf39062d><h2 data-v-cf39062d>Rendering Mode Comparison</h2><p data-v-cf39062d>Learn the characteristics and use cases of each rendering mode</p></div><div class="features-grid grid grid-cols-3" data-v-cf39062d><div class="feature-card card" data-v-cf39062d><div class="feature-icon ssg-color" data-v-cf39062d><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-cf39062d><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-cf39062d></path></svg></div><h3 data-v-cf39062d>Static Site Generation (SSG)</h3><p data-v-cf39062d>Pre-generate all pages at build time for the fastest loading speed and optimal SEO performance.</p><div class="feature-stats" data-v-cf39062d><div class="stat" data-v-cf39062d><span class="stat-value" data-v-cf39062d>&lt; 100ms</span><span class="stat-label" data-v-cf39062d>First Load</span></div><div class="stat" data-v-cf39062d><span class="stat-value" data-v-cf39062d>100%</span><span class="stat-label" data-v-cf39062d>SEO Friendly</span></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ssg",
        class: "feature-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Example → `);
          } else {
            return [
              createTextVNode(" View Example → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="feature-card card" data-v-cf39062d><div class="feature-icon isr-color" data-v-cf39062d><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-cf39062d><path d="M1 4V10H7M23 20V14H17M20.49 9A9 9 0 0 0 5.64 5.64L1 10M22.99 14A9 9 0 0 1 18.36 18.36L23 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cf39062d></path></svg></div><h3 data-v-cf39062d>Incremental Static Regeneration (ISR)</h3><p data-v-cf39062d>Combine static generation with dynamic updates, maintaining high performance while ensuring content freshness.</p><div class="feature-stats" data-v-cf39062d><div class="stat" data-v-cf39062d><span class="stat-value" data-v-cf39062d>On-Demand</span><span class="stat-label" data-v-cf39062d>Content Updates</span></div><div class="stat" data-v-cf39062d><span class="stat-value" data-v-cf39062d>Balanced</span><span class="stat-label" data-v-cf39062d>Performance</span></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/isr",
        class: "feature-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Example → `);
          } else {
            return [
              createTextVNode(" View Example → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="feature-card card" data-v-cf39062d><div class="feature-icon ssr-color" data-v-cf39062d><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-cf39062d><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-cf39062d></path><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-cf39062d></path><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-cf39062d></path></svg></div><h3 data-v-cf39062d>Server-Side Rendering (SSR)</h3><p data-v-cf39062d>Render pages on the server in real-time, supporting personalized content and live data display.</p><div class="feature-stats" data-v-cf39062d><div class="stat" data-v-cf39062d><span class="stat-value" data-v-cf39062d>Real-time</span><span class="stat-label" data-v-cf39062d>Data Updates</span></div><div class="stat" data-v-cf39062d><span class="stat-value" data-v-cf39062d>Personalized</span><span class="stat-label" data-v-cf39062d>User Experience</span></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ssr",
        class: "feature-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Example → `);
          } else {
            return [
              createTextVNode(" View Example → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="tech-stack-section section" data-v-cf39062d><div class="container" data-v-cf39062d><div class="section-header" data-v-cf39062d><h2 data-v-cf39062d>Tech Stack</h2><p data-v-cf39062d>Modern technology stack used in this project</p></div><div class="tech-grid grid grid-cols-2" data-v-cf39062d><div class="tech-info" data-v-cf39062d><h3 data-v-cf39062d>Core Technologies</h3><ul class="tech-list" data-v-cf39062d><li data-v-cf39062d><strong data-v-cf39062d>Nuxt.js 4.1.3</strong> - Full-stack Vue framework </li><li data-v-cf39062d><strong data-v-cf39062d>Vue.js 3.5.22</strong> - Progressive JavaScript framework </li><li data-v-cf39062d><strong data-v-cf39062d>TypeScript</strong> - Type-safe JavaScript </li><li data-v-cf39062d><strong data-v-cf39062d>Vite</strong> - Fast build tool </li></ul></div><div class="tech-features" data-v-cf39062d><h3 data-v-cf39062d>Project Features</h3><div class="feature-badges" data-v-cf39062d><span class="badge badge-success" data-v-cf39062d>Hybrid Rendering</span><span class="badge badge-info" data-v-cf39062d>TypeScript</span><span class="badge badge-success" data-v-cf39062d>Responsive Design</span><span class="badge badge-warning" data-v-cf39062d>Performance Optimized</span><span class="badge badge-info" data-v-cf39062d>SEO Friendly</span><span class="badge badge-success" data-v-cf39062d>Modern UI</span></div><div class="highlight-box" data-v-cf39062d><h4 data-v-cf39062d>🎯 Learning Goals</h4><p data-v-cf39062d> Through this example project, you will gain deep understanding of different rendering modes, their performance characteristics and best practices, mastering core skills for modern web application development. </p></div></div></div></div></section><section class="quick-start-section section" data-v-cf39062d><div class="container" data-v-cf39062d><div class="section-header" data-v-cf39062d><h2 data-v-cf39062d>Quick Start</h2><p data-v-cf39062d>Get started with your Nuxt hybrid rendering journey in a few simple steps</p></div><div class="steps-grid grid grid-cols-3" data-v-cf39062d><div class="step-card" data-v-cf39062d><div class="step-number" data-v-cf39062d>1</div><h3 data-v-cf39062d>Clone Project</h3><pre data-v-cf39062d><code data-v-cf39062d>git clone &lt;repository-url&gt;
cd nuxt-hybrid-rendering</code></pre></div><div class="step-card" data-v-cf39062d><div class="step-number" data-v-cf39062d>2</div><h3 data-v-cf39062d>Install Dependencies</h3><pre data-v-cf39062d><code data-v-cf39062d>npm install
# or
yarn install</code></pre></div><div class="step-card" data-v-cf39062d><div class="step-number" data-v-cf39062d>3</div><h3 data-v-cf39062d>Start Development</h3><pre data-v-cf39062d><code data-v-cf39062d>npm run dev
# Visit http://localhost:3000</code></pre></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf39062d"]]);

export { index as default };
//# sourceMappingURL=index-BQmGkd4o.mjs.map
