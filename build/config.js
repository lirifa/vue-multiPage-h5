module.exports = {
  HTMLDirs: [
    {
      page: 'index',
      name: 'index',
      title: '首页'
    },
    {
      page: 'a20190419zcyl',
      name: 'index',
      title: '注册有礼',
      dir: 'a20190419zcyl' // 支持设置多级目录

    },
    {
      page: 'list',
      name: 'list',
      title: '列表页',
      dir: 'content/nall' // 支持设置多级目录

    },
    {
      page: 'detail',
      name: 'detail',
      title: '详情页'
    }
  ],
  cssPublicPath: '../',
  imgOutputPath: 'img/',
  fontOutputPath: 'font',
  cssOutputPath: './css/styles.css',
  devServerOutputPath: '../dist',
};
