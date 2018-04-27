const path = require('path');
const webpack = require('webpack');
const publicPath = path.resolve(__dirname, 'dist')

// env 可以配置全局环境变量
module.exports = function(env) {
    return {
        mode: "production",
        entry: './src/index.js',
        output: {
            filename: 'MTLSDKWeb.js',
            path: publicPath,
            library: "MTLSDKWeb",
            libraryTarget: "umd"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                }
            ]
        },
        externals: {
            react: 'react',
            'react-dom': 'react-dom'
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: `
                    description: 一套基于一致性协议的Web端解析引擎
                    author: Yonyou FED Team
                    date: 2018-04-27
                    hash: [hash],
                    file: [file]
                `
            })
        ]
    }
}
