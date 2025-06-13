import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TradeMart Documentation",
  description: "Documentation for the TradeMart Mobile App",
  base: "/TradeMartDocs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/TradeMart' }
    ],

    sidebar: [
      {
          text: 'Requests',
          items: [
              {text: 'Request', link: '/request/Request'},
              {text: 'RequestUtil', link: '/request/RequestUtil'},
              {text: 'Content', link: '/request/Content'}
          ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RedFlameKen/TradeMartDocs' }
    ]
  }
})
