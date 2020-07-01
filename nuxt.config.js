
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: "%s - " + "Mono's Town",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'モノクロの街へようこそ。歓迎するよ。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://use.typekit.net/oht0caz.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'black'
  },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/bootstrap'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "nuxt-svg-loader",
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    injected: true
  },
  /*
  ** Build configuration
  */
  build: {
    extend(config) {
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-avatar': 'src',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
    }
  },

  generate: {
    crawler: false,
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./assets/content/blog').map(file => {
        return {
          route: `/diary/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`),
        };
      });
    },
  },
}
