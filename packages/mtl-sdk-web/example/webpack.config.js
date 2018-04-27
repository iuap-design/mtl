const path = require('path');
const webpack = require('webpack');
const publicPath = path.resolve(__dirname, 'dist')

// env 可以配置全局环境变量
module.exports = function(env) {
    return {
        mode: "development",
        entry: './src/index.js',
        output: {
            filename: '[name].js',
            path: publicPath,
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
        devServer: {
            contentBase: "../"
        },
        
        plugins: [
            
        ]
    }
}
