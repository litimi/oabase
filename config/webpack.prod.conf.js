const merge = require('webpack-merge'); //合并配置
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',  //mode是webpack4新增的模式
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: 'PresByter', //更改HTML的title的内容
            minify: {
		        removeComments: true,
		        collapseWhitespace: true,
		        removeAttributeQuotes: true
            },
        }),
    ]
});
