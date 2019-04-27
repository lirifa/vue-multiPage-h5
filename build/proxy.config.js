module.exports = {
  proxyList: {
    '/yapi': {
      // yapi测试环境
      target: 'http://yapi.dev.yitaichang.cn/mock/23',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/yapi': '/',
      },
    },
    '/sbb': {
      // yapi测试环境
      target: 'http://192.168.1.95:8082',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/sbb': '/',
      },
    },
    '/': {
      // 开发环境
      // target: 'http://platform-admin.test.yitaichang.cn',  // test接口域名
      target: 'http://consumer-h5-app.dev.yitaichang.cn',  // dev接口域名
      changeOrigin: true,  //是否跨域
    },
  }
}
