// const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  publicPath: '/',//publicPath取代了baseUrl
  outputDir: 'dist',
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: true,
  runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: () => {
    if (debug) {
      // 本地开发配置
    } else {
      // 生产开发配置
    }
  },
  configureWebpack: () => {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8443,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    before: app => {}
  },
}

