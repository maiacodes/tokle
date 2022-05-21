export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tokle',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'title', content: 'Tokle: Guess the album cover!' },
      { name: 'description', content: 'The aim of the game? Listen to the audio and guess the cover art of the popular song. Skipped or incorrect attempts unlock more of the audio, answer in as few tries as possible and share your score!' },
      { name: 'theme-color', content: '#232323' },
    //  Opengraph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://tokle.app' },
      { property: 'og:title', content: 'Tokle: Guess the album cover!' },
      { property: 'og:description', content: 'The aim of the game? Listen to the audio and guess the cover art of the popular song. Skipped or incorrect attempts unlock more of the audio, answer in as few tries as possible and share your score!' },
      { property: 'og:image', content: 'https://tokle.app/wordmark.png' },
    //  Twitter
      { property: 'twitter:image', content: 'https://tokle.app/logo.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
