const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../src/dist'),
  },
  // 定义loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
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
    hot: true,
    inline: true,
    contentBase: path.resolve(__dirname, '../src/dist'),
    host: '127.0.0.1',
    port: '8083',
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my app',
      template: path.resolve(__dirname, '../src/index.html'),
    })
  ]
}