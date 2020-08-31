module.exports = {
    // 基本路径
    publicPath: '/',
    
    // 输出文件目录
    outputDir: 'dist',
    
    // 用于嵌套生成的静态资产 {js, css, img, fonts} 的目录
    assetsDir: '',
    
    // 生产环境sourceMap
    productionSourceMap: true,
    
    // webpack配置
    configureWebpack: () => {},
    chainWebpack: () => {},
    
    // css相关配置
    css: {
    // 启用 CSS modules
    modules: false,
    // 是否启用css分离插件
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    },
    
    // webpack-dev-server 相关配置
    devServer: {
        open: true,    
        port: 8080,
        proxy: {
                // [process.env.VUE_APP_BASE_API]
        '/api': {
            // target: 'http://10.10.10.49:10221/service/',
            //target: 'http://192.168.3.116:8081',
            target: 'http://localhost:8091',
            pathRewrite: {
            '^/api': ''
            }, // 给代理命名后，在访问时把命名删除掉。即 api/xx = target/xx
            changeOrigin: true // target是域名的话，需要这个参数，
            // secure: true // 设置支持https协议的代理
        },
        '/gateway': {
            //target: 'http://10.10.10.49:10221',
            target: 'http://localhost:8091',
            pathRewrite: {
            '^/gateway': ''
            }, // 给代理命名后，在访问时把命名删除掉。即 api/xx = target/xx
            changeOrigin: true // target是域名的话，需要这个参数，
            // secure: true // 设置支持https协议的代理
        }
        }
    },
    
    // 第三方插件配置
    pluginOptions: {
    // ...
    }
    }