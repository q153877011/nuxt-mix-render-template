import { _ as __nuxt_component_0 } from './nuxt-link-BNLvi22R.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createVNode, createBlock, openBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, b as useRoute } from './server.mjs';
import { u as useHead } from './composables-zw5j2RbG.mjs';
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

const nuxtVersion = "4.1.3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };
    const route = useRoute();
    watch(() => route.path, () => {
      closeMobileMenu();
    });
    useHead({
      titleTemplate: "%s - Nuxt Hybrid Rendering Example",
      meta: [
        { name: "description", content: "Nuxt.js hybrid rendering example project showcasing SSG, ISR, and SSR rendering modes" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-layout" }, _attrs))} data-v-a8e8247c><header class="header" data-v-a8e8247c><div class="container" data-v-a8e8247c><nav class="navbar" data-v-a8e8247c><div class="navbar-brand" data-v-a8e8247c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "brand-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo" data-v-a8e8247c${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a8e8247c${_scopeId}><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-a8e8247c${_scopeId}></path><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-a8e8247c${_scopeId}></path><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round" data-v-a8e8247c${_scopeId}></path></svg></div><span class="brand-text gradient-text" data-v-a8e8247c${_scopeId}>Nuxt Hybrid Rendering</span>`);
          } else {
            return [
              createVNode("div", { class: "logo" }, [
                (openBlock(), createBlock("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M12 2L2 7L12 12L22 7L12 2Z",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M2 17L12 22L22 17",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M2 12L12 17L22 12",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linejoin": "round"
                  })
                ]))
              ]),
              createVNode("span", { class: "brand-text gradient-text" }, "Nuxt Hybrid Rendering")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navbar-nav" data-v-a8e8247c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["nav-link", { active: _ctx.$route.path === "/" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ssg",
        class: ["nav-link", { active: _ctx.$route.path === "/ssg" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` SSG Example `);
          } else {
            return [
              createTextVNode(" SSG Example ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/isr",
        class: ["nav-link", { active: _ctx.$route.path === "/isr" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ISR Example `);
          } else {
            return [
              createTextVNode(" ISR Example ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ssr",
        class: ["nav-link", { active: _ctx.$route.path === "/ssr" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` SSR Example `);
          } else {
            return [
              createTextVNode(" SSR Example ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/streaming",
        class: ["nav-link", { active: _ctx.$route.path === "/streaming" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Streaming `);
          } else {
            return [
              createTextVNode(" Streaming ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="${ssrRenderClass([{ active: isMobileMenuOpen.value }, "mobile-menu-btn"])}" data-v-a8e8247c><span data-v-a8e8247c></span><span data-v-a8e8247c></span><span data-v-a8e8247c></span></button></nav><div class="${ssrRenderClass([{ open: isMobileMenuOpen.value }, "mobile-menu"])}" data-v-a8e8247c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["mobile-nav-link", { active: _ctx.$route.path === "/" }],
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ssg",
        class: ["mobile-nav-link", { active: _ctx.$route.path === "/ssg" }],
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` SSG Example `);
          } else {
            return [
              createTextVNode(" SSG Example ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/isr",
        class: ["mobile-nav-link", { active: _ctx.$route.path === "/isr" }],
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ISR Example `);
          } else {
            return [
              createTextVNode(" ISR Example ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ssr",
        class: ["mobile-nav-link", { active: _ctx.$route.path === "/ssr" }],
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` SSR Example `);
          } else {
            return [
              createTextVNode(" SSR Example ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/streaming",
        class: ["mobile-nav-link", { active: _ctx.$route.path === "/streaming" }],
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Streaming `);
          } else {
            return [
              createTextVNode(" Streaming ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><main class="main-content" data-v-a8e8247c>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="footer" data-v-a8e8247c><div class="container" data-v-a8e8247c><div class="footer-content" data-v-a8e8247c><div class="footer-section" data-v-a8e8247c><h3 data-v-a8e8247c>Nuxt Hybrid Rendering Example</h3><p data-v-a8e8247c>A complete example project showcasing SSG, ISR, and SSR rendering modes</p></div><div class="footer-section" data-v-a8e8247c><h4 data-v-a8e8247c>Rendering Modes</h4><ul class="footer-links" data-v-a8e8247c><li data-v-a8e8247c>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/ssg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Static Site Generation (SSG)`);
          } else {
            return [
              createTextVNode("Static Site Generation (SSG)")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-a8e8247c>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/isr" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Incremental Static Regeneration (ISR)`);
          } else {
            return [
              createTextVNode("Incremental Static Regeneration (ISR)")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-a8e8247c>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/ssr" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Server-Side Rendering (SSR)`);
          } else {
            return [
              createTextVNode("Server-Side Rendering (SSR)")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="footer-section" data-v-a8e8247c><h4 data-v-a8e8247c>Tech Stack</h4><ul class="footer-links" data-v-a8e8247c><li data-v-a8e8247c><a href="https://nuxt.com" target="_blank" data-v-a8e8247c>Nuxt.js</a></li><li data-v-a8e8247c><a href="https://vuejs.org" target="_blank" data-v-a8e8247c>Vue.js</a></li><li data-v-a8e8247c><a href="https://www.typescriptlang.org" target="_blank" data-v-a8e8247c>TypeScript</a></li></ul></div></div><div class="footer-bottom" data-v-a8e8247c><p data-v-a8e8247c>© 2025 Nuxt Hybrid Rendering Example Project. Built with Nuxt ${ssrInterpolate(nuxtVersion)}</p></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a8e8247c"]]);

export { _default as default };
//# sourceMappingURL=default-BuZIu8NX.mjs.map
