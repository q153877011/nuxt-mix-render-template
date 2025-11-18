import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "isr",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "ISR Example",
      meta: [
        { name: "description", content: "Nuxt.js Incremental Static Regeneration (ISR) example page demonstrating ISR principles and real-time content updates" }
      ]
    });
    const contentData = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/isr-content")), __temp = await __temp, __restore(), __temp);
    console.log("ISR Content Data:", contentData);
    const formatTime = (dateString) => {
      if (!dateString) return "unknown";
      return new Date(dateString).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const formatNumber = (num) => {
      if (!num) return "0";
      return num.toLocaleString("en-US");
    };
    const getCacheStatusClass = (status) => {
      switch (status) {
        case "fresh":
          return "badge-success";
        case "stale":
          return "badge-warning";
        case "error":
          return "badge-danger";
        default:
          return "badge-info";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "isr-page" }, _attrs))} data-v-d1216187><section class="page-header" data-v-d1216187><div class="container" data-v-d1216187><div class="header-content" data-v-d1216187><div class="badge badge-info" data-v-d1216187><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d1216187><path d="M1 4V10H7M23 20V14H17M20.49 9A9 9 0 0 0 5.64 5.64L1 10M22.99 14A9 9 0 0 1 18.36 18.36L23 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d1216187></path></svg> Incremental Static Regeneration </div><h1 data-v-d1216187>ISR (Incremental Static Regeneration)</h1><p class="page-description" data-v-d1216187> Combine static generation with dynamic updates, maintaining high performance while ensuring content freshness. This page data was last updated at ${ssrInterpolate(formatTime(unref(contentData)?.metadata?.lastUpdated))}. </p></div></div></section><section class="live-content section" data-v-d1216187><div class="container" data-v-d1216187><div class="content-header" data-v-d1216187><h2 data-v-d1216187>📊 Live Content Display</h2><div class="refresh-info" data-v-d1216187><span class="badge badge-info" data-v-d1216187> Data freshness: ${ssrInterpolate(unref(contentData)?.performance?.dataFreshness || 0)} minutes ago </span><span class="badge badge-success" data-v-d1216187> Cache status: ${ssrInterpolate(unref(contentData)?.metadata?.cacheStatus || "unknown")}</span></div></div><div class="content-section" data-v-d1216187><h3 data-v-d1216187>📚 Latest Articles</h3><div class="articles-list" data-v-d1216187><!--[-->`);
      ssrRenderList(unref(contentData)?.articles, (article) => {
        _push(`<article class="article-card" data-v-d1216187><div class="article-header" data-v-d1216187><h4 data-v-d1216187>${ssrInterpolate(article.title)}</h4><div class="article-meta" data-v-d1216187><span class="author" data-v-d1216187>${ssrInterpolate(article.author.name)}</span><span class="read-time" data-v-d1216187>${ssrInterpolate(article.readTime)} min read</span><span class="views" data-v-d1216187>${ssrInterpolate(article.views)} views</span></div></div><p class="article-excerpt" data-v-d1216187>${ssrInterpolate(article.excerpt)}</p><div class="article-tags" data-v-d1216187><!--[-->`);
        ssrRenderList(article.tags, (tag) => {
          _push(`<span class="tag" data-v-d1216187>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></article>`);
      });
      _push(`<!--]--></div></div><div class="statistics-section" data-v-d1216187><h3 data-v-d1216187>📈 Website Statistics</h3><div class="stats-grid grid grid-cols-4" data-v-d1216187><div class="stat-card" data-v-d1216187><div class="stat-value" data-v-d1216187>${ssrInterpolate(unref(contentData)?.statistics?.totalArticles || 0)}</div><div class="stat-label" data-v-d1216187>Total Articles</div></div><div class="stat-card" data-v-d1216187><div class="stat-value" data-v-d1216187>${ssrInterpolate(unref(contentData)?.statistics?.totalProducts || 0)}</div><div class="stat-label" data-v-d1216187>Products</div></div><div class="stat-card" data-v-d1216187><div class="stat-value" data-v-d1216187>${ssrInterpolate(formatNumber(unref(contentData)?.statistics?.monthlyVisitors))}</div><div class="stat-label" data-v-d1216187>Monthly Visitors</div></div><div class="stat-card" data-v-d1216187><div class="stat-value" data-v-d1216187>${ssrInterpolate(unref(contentData)?.statistics?.satisfactionRate || "0%")}</div><div class="stat-label" data-v-d1216187>Satisfaction Rate</div></div></div></div></div></section><section class="how-it-works section" data-v-d1216187><div class="container" data-v-d1216187><h2 data-v-d1216187>How ISR Works</h2><div class="workflow-timeline" data-v-d1216187><div class="timeline-item" data-v-d1216187><div class="timeline-marker" data-v-d1216187>1</div><div class="timeline-content" data-v-d1216187><h3 data-v-d1216187>Initial Build</h3><p data-v-d1216187>Generate static pages at build time, just like SSG</p></div></div><div class="timeline-item" data-v-d1216187><div class="timeline-marker" data-v-d1216187>2</div><div class="timeline-content" data-v-d1216187><h3 data-v-d1216187>User Visit</h3><p data-v-d1216187>Users get fast static page response</p></div></div><div class="timeline-item" data-v-d1216187><div class="timeline-marker" data-v-d1216187>3</div><div class="timeline-content" data-v-d1216187><h3 data-v-d1216187>Background Check</h3><p data-v-d1216187>System checks if page needs regeneration (based on time or triggers)</p></div></div><div class="timeline-item" data-v-d1216187><div class="timeline-marker" data-v-d1216187>4</div><div class="timeline-content" data-v-d1216187><h3 data-v-d1216187>Incremental Update</h3><p data-v-d1216187>If needed, regenerate page in background, next visit gets new content</p></div></div></div></div></section><section class="page-info section" data-v-d1216187><div class="container" data-v-d1216187><div class="info-card card" data-v-d1216187><h3 data-v-d1216187>📊 Page Information</h3><div class="info-grid" data-v-d1216187><div class="info-item" data-v-d1216187><strong data-v-d1216187>Rendering Mode:</strong><span class="badge badge-info" data-v-d1216187>ISR</span></div><div class="info-item" data-v-d1216187><strong data-v-d1216187>Revalidation:</strong><span data-v-d1216187>Every hour</span></div><div class="info-item" data-v-d1216187><strong data-v-d1216187>Data Source:</strong><span data-v-d1216187>/api/isr-content</span></div><div class="info-item" data-v-d1216187><strong data-v-d1216187>Cache Status:</strong><span class="${ssrRenderClass([getCacheStatusClass(unref(contentData)?.metadata?.cacheStatus), "badge"])}" data-v-d1216187>${ssrInterpolate(unref(contentData)?.metadata?.cacheStatus || "unknown")}</span></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/isr.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const isr = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d1216187"]]);

export { isr as default };
//# sourceMappingURL=isr-pf-_32zb.mjs.map
