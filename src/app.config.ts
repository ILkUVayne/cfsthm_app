export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/search/index',
    'pages/article/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#000000',
    backgroundColor: '#000000',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/search/index',
        text: '查询',
      },
      {
        pagePath: 'pages/article/index',
        text: '查询',
      },
    ],
  },
})
