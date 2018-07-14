module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Inspinia',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Inspinia Nuxt Template'},
      {hid: 'author', name: 'author', content: 'Kronhyx'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/font-awesome/css/font-awesome.css'},
      {rel: 'stylesheet', href: '/css/animate.css'},
      {rel: 'stylesheet', href: '/css/style.css'}
    ],
    script: [
      {rel: 'script', href: '/js/jquery-2.1.1.js'},
      {rel: 'script', href: '/js/bootstrap.min.js'},
      {rel: 'script', href: '/js/plugins/metisMenu/jquery.metisMenu.js'},
      {rel: 'script', href: '/js/plugins/slimscroll/jquery.slimscroll.min.js'},
      {rel: 'script', href: '/js/inspinia.js'},
      {rel: 'script', href: '/js/plugins/wow/wow.min.js'},
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#1ab394',
    height: '2px'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
