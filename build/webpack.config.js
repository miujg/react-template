const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'
console.log(process.env.NODE_ENV)

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../src/dist'),
  },
  // 启用source-map方便在浏览器调试代码
  devtool: 'source-map',
  // 定义loader
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
           {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,  // Hot Module Reloading 是否实时刷新样式
            },
           },'css-loader', 'sass-loader'
        ]
      },
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

  devServer: {
    hot: true,
    inline: true,
    contentBase: path.resolve(__dirname, '../src/dist'),
    host: '127.0.0.1',
    port: '8083',
    historyApiFallback: true
  },
  plugins: [
    // 生成html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'), // 模板引用
      filename: 'index.html',  // 输出文件名字
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ]
}