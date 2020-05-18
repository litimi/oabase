const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: "js/[name].[hash:16].js",
  },
  devtool: 'inline-source-map', // 源错误检查
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      minify: {
        html5: true
      },
      hash: false
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新
  ],
  devServer: {  // 热更新服务配置
    port: '3001',
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    historyApiFallback: true,
    hot: true,  //开启
    https: false,
    noInfo: true,
    open: true,
    proxy: {}
  }
});
