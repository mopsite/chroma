import { defineConfig } from 'vitepress'

// https://skewb.gitee.io/vitepress/reference/site-config
export default defineConfig({
  base: '/chroma/',
  title: 'Chroma.js',
  description: '极小且零依赖的 JavaScript 颜色库',
  head: [['link', { rel: 'icon', href: '/chroma/logo.svg' }]],
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://skewb.gitee.io/vitepress/reference/default-theme-config
    logo: '/logo.svg',
    lastUpdated: {
      text: '上次更新'
    },
    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '显示详细列表',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/gka/chroma.js' }]
  }
})

function nav() {
  return [
    { text: '指南', link: '/guide/install', activeMatch: '/guide/' },
    {
      text: 'API',
      activeMatch: '/api/',
      items: [
        { text: 'Chroma', link: '/api/chroma' },
        { text: 'Color', link: '/api/color' },
        { text: 'Color Scales', link: '/api/color-scales' },
        { text: 'Cubehelix', link: '/api/cubehelix' }
      ]
    },
    { text: '官网', link: 'https://gka.github.io/chroma.js/' }
  ]
}

function sidebar() {
  return [
    {
      text: '指南',
      items: [
        { text: '安装', link: '/guide/install' },
        { text: '快速开始', link: '/guide/start' }
      ]
    },
    {
      text: 'API',
      items: [
        { text: 'Chroma', link: '/api/chroma' },
        { text: 'Color', link: '/api/color' },
        { text: 'Color Scales', link: '/api/color-scales' },
        { text: 'Cubehelix', link: '/api/cubehelix' }
      ]
    }
  ]
}
