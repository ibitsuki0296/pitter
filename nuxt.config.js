export default {
  head: {
    titleTemplate: '%s - Pitter-Patter',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'デフォルトの説明文が入ります。' },
      { hid: 'og:title', property: 'og:title', content: 'Pitter-Patter' },
      { hid: 'og:description', property: 'og:description', content: 'デフォルトの説明文が入ります。' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
    ],
    script:[
      { src: 'https://kit.fontawesome.com/bb1405746d.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap' }
    ],
  },
  css: ['~/assets/css/reset.css', '~/assets/css/style.css'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/date-fns'
  ],
  plugins: ['~/plugins/scroll.js'],
  env: {
    baseURL: process.env.baseURL
  },
  components: true,
  content: {},
  target: 'static',
}
