const withCss = require('@zeit/next-css');

const configs = {
  // 编译文件的输出目录， 没有配置输出在.next目录下
  distDir: 'dest',
  // 是否给每个路由生成Etag
  generateEtags: true,
  // 页面内容缓存配置
  onDemandEntries: {
    // 内容在内存中缓存的时长
    maxInactiveAge: 25* 1000,
    // 同时缓存多少个页面
    pagesBufferLength: 2
  },
  // 在page 目录下那种后缀的文件会被认为是页面
  pageExtensions: ['jsx', 'js'],
  // 配置buildId
  generateBuildId: async() => {
    if(process.env.YOUR_BUILD_ID){
      return process.env.YOUR_BUILD_ID
    }
    // 返回null使用默认的unique id
    return null
  },
  // 手动修改webpack配置
  webpack(config, options){
    return config
  },
  // 修改webpackDevMiddleware配置
  webpackDevMiddleware: config => {
    return config;
  },
  // 可以在页面上通过process.env.customKey 获取 value
  env: {
    customKey: 'value'
  },
  // 下面俩个要通过'next/config'来读取
  // 只有在服务端渲染时才会获取的配置
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: process.env.SECON_SECRET
  },
  // 在服务端渲染和客户端渲染都会获取的配置
  publicRuntimeConfig: {
    staticFolder: '/static'
  }
}

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {
  }
}

module.exports = withCss({
  distDir: 'dest',
});
