export default {
  head: {
    title: 'CV Alexey Stratan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  router: {
    middleware: 'i18n',
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/cv/' : '/'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: ['/', '/en'],
    dir: 'docs'
  },
  css: [
    '@/assets/main.css'
  ],
}
