export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hajtex',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: '@/components/loading.vue',

  css: ['@/assets/css/style.css', 'boxicons/css/boxicons.min.css'],

  plugins: ['@/plugins/aos.client.js', '@/plugins/vue-resource.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', 'vue-toastification/nuxt'],

  axios: {
    baseURL: 'https://admin.hajtex.com/api',
  },

  ssr: true,

  build: {
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: 'encoding',
        },
      ]
    },
  },
}
