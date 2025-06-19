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
          collapsed: true,
          text: 'Requests',
          items: [
              {text: 'Request', link: '/request/Request'},
              {text: 'RequestUtil', link: '/request/RequestUtil'},
              {text: 'Response', link: '/request/Response'},
              {text: 'Content', link: '/request/Content'},
              {text: 'ContentRange', link: '/request/ContentRange'}
          ]
      },
      {
          collapsed: true,
          text: 'HTTP Server Endpoints',
          items: [
              {text: 'Server', link: '/server/server'},
              {text: 'Endpoints', link: '/server/endpoints'},
          ]
      },
      {
          collapsed: true,
          text: 'Encryption',
          items: [
              {text: 'Encryption', link: '/encryption/Encryption'},
              {text: 'Encryptor', link: '/encryption/Encryptor'},
              {text: 'Decryptor', link: '/encryption/Decryptor'}
          ]
      },
      {
          collapsed: true,
          text: 'Utilities',
          items: [
              {text: 'Encoder', link: '/util/Encoder'},
              {text: 'Logger', link: '/util/Logger'},
              {text: 'Dialogs', link: '/util/Dialogs'},
              {text: 'DimensionsUtil', link: '/util/DimensionsUtil'}
          ]
      }
    ],
    search: {
        provider: "local"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RedFlameKen/TradeMartDocs' }
    ]
  }
})
