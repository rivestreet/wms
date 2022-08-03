const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      open: true,
      port: 8080,
      host: "localhost",
      // overlay: {
      //   warnings: false,
      //   errors: true,
      // },

      // 代理跨域的配置
      proxy: {
        // 当我们的本地的请求 有/api的时候，就会代理我们的请求地址向另外一个服务器发出请求
        "/api": {
          target: "http://www-wms-java.itheima.net", //   我们要代理的地址
          changeOrigin: true, // 只有这个值为true的情况下 才表示开启跨域
        },
        "/ips": {
          target: "http://www-wms-java.itheima.net", //   我们要代理的地址
          changeOrigin: true, // 只有这个值为true的情况下 才表示开启跨域
        },
      },
    },
  },
});
