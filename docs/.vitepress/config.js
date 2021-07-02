module.exports = {
  title: 'xin-ui', // 设置网站标题
  description: 'vue3组件库',
  dest: './build', // 输出目录
  themeConfig: {
    nav: [
      { test: '主页', link: '/' },
      { test: '联系我', link: '/' },
      { test: '源码', link: '/' },
    ],
    sidebar: [
      {
        text: 'Button按钮',
        link: '/button/',
        collapsable: false,
        sidebarDepth: 1
      }
    ]
  }
}