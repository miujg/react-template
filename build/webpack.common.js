const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../src/dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../src/')
        ],
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ],
        use: ['babel-loader']
      }
    ]
  },

  resolve: {
    alias: {
      js: path.resolve(__dirname, '../src/js'),
      css: path.resolve(__dirname, '../src/css')
    }
  },

  plugins: [
    // 生成html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'), // 模板引用
      filename: 'index.html',  // 输出文件名字
    }),
    
  ]
}