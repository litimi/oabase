const path = require('path');

const APP_PATH = path.resolve(__dirname,'../src'); // 源文件目录
const DIST_PATH = path.resolve(__dirname,'../dist'); //生产目录

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'js/[name].[hash].js', //hash标记
    path: DIST_PATH
  },
  module: {
    rules: [
      {
          test: /\.js?$/,
          use: "babel-loader",
          include: APP_PATH
      },
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader',],
      },
      {
      test:/\.less$/,
      use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      {
          loader: "postcss-loader",//自动加前缀
          options: {
              plugins: [
              require('autoprefixer')({overrideBrowserslist:['> 0.15% in CN']})
              ]
          }
      },
      {  loader: "less-loader" }
      ]
      },
      {
      test: /\.scss$/,
      use: [
          { loader: "style-loader" },
          { loader: "css-loader", },
          { loader: "sass-loader" },
          { loader: "postcss-loader",
              options: {
                  plugins: [
                  require('autoprefixer')({overrideBrowserslist: ['> 0.15% in CN']})
                  ]
              }
          }
      ]
      },
      {
      test: /\.(png|jpg|gif)$/,
      use: [
          {
          loader: 'url-loader',
          options: {
              name: "images/[name].[ext]",
              limit: 1000  //是把小于1000B的文件打成Base64的格式，写入JS
          }
      }]
      },
      {
      test: /\.(woff|svg|eot|woff2|tff)$/,
      use: 'url-loader',
      exclude: /node_modules/ // exclude忽略/node_modules/的文件夹
      },
    ]
  }
}