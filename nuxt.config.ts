// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // CSS Configuration
  css: ['~/assets/css/main.css'],
  
  // Hybrid Rendering Route Rules Configuration
  routeRules: {
    // Home page - Static Site Generation (SSG)
    '/': { prerender: true },
    // SSG example page - Static Generation
    '/ssg': { prerender: true },
    // ISR example page - Incremental Static Regeneration
    '/isr': { swr: 5 },
    // SSR example page - Server-Side Rendering
    '/ssr': { ssr: true },
    // Streaming example page - Server-Side Rendering with Streaming
    '/streaming': { ssr: true }
  },
  
  // TypeScript Configuration
  typescript: {
    strict: true
    // typeCheck: true // Temporarily disabled to avoid additional dependencies
  },
  nitro: {}
})
