
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')

module.exports = {
  entry: [
    // 配置react局部刷新
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/app.js')
  ],
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
          {
            loader: 'babel-loader',
            options: {
              // 开启 babel缓存
              cacheDirectory: true
            }
          }
        ]
      },
      // 配置图片/文件loader
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][hash].[ext]',
              // 单位为bytes
              limit: '10000'
            }
          }
        ]
      },
      // 字体文件使用
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: ['file-loader']
      }
    ]
  },

  resolve: {
    // 配置别名
    alias: {
      // 组件目录
      coms: path.resolve(__dirname, '../src/components'),
      cons: path.resolve(__dirname, '../src/containers'),
      imgs: path.resolve(__dirname, '../public/images'),
      css: path.resolve(__dirname, '../public/css'),
      action: path.resolve(__dirname, '../src/redux/action'),
      reducer: path.resolve(__dirname, '../src/redux/reducer'),
      scss: path.resolve(__dirname, '../src/scss'),
      config: path.resolve(__dirname, '../config/config.js'),
      tooles: path.resolve(__dirname, '../src/tooles')
    },
    // 配置第三方包的位置
    modules: [
      path.resolve(__dirname, '../node_modules')
    ],
    // 后缀名省略
    extensions: ['.js', '.json', '.*']
  },

  plugins: [
    // 生成html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板引用
      filename: 'index.html',  // 输出文件名字
      title: 'my app',
      favicon: path.resolve(__dirname, '../public/images/favicon.ico')
    }),
    // 配置自动加载模块插件
    new webpack.ProvidePlugin({
      React: 'react',
      Component: ['react', 'Component'],
      Fragment : ['react', 'Fragment'],
      PropTypes: 'prop-types',
      classnames: 'classnames'
    })
  ]
}