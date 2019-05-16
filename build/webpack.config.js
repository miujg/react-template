const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // JavaScript 执行入口文件
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, '../src/dist'),
  },
  // 定义loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      js: path.resolve(__dirname, '../src/js'),
      css: path.resolve(__dirname, '../src/css')
    }
  },
  devServer: {

  }
}