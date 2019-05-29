const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../src/dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ],
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  resolve: {
    // 配置别名
    alias: {
      js: path.resolve(__dirname, '../src/js'),
      css: path.resolve(__dirname, '../src/css'),
      // 组件目录
      coms: path.resolve(__dirname, '../src/components'),
      cons: path.resolve(__dirname, '../src/containers')
    },
    // 配置第三方包的位置
    modules: [
      path.resolve(__dirname, '../node_modules')
    ]
  },

  plugins: [
    // 生成html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板引用
      filename: 'index.html',  // 输出文件名字
    }),
    // 配置自动加载模块插件
    new webpack.ProvidePlugin({
      React: 'react',
      Component: ['react', 'Component'],
      Fragment : ['react', 'Fragment'],
    })
  ]
}