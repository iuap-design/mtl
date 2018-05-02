const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function(env) {
    console.log('-----')
    return {
        mode: "development",
        entry: './index.js',
        devtool: "cheap-eval-source-map",
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, "./")
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['env', 'react', 'stage-0']}
                }
            }]
        },
        devServer: {
            contentBase: "./"
        },
        resolve: {
            extensions: [" ", ".js", ".jsx", ".json"]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html'
            })
        ]
    }
}
