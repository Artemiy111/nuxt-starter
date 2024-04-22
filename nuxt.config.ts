// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/eslint'],
  shadcn: {
    prefix: '',

    componentDir: './components/ui',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
