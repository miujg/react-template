const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')
const {address} = require('../config/buildConfig')

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use:[
                    'style-loader', 
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    },
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.resolve(__dirname, '../src/scss/style.scss')
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, '../dist'),
        host: address.ip,
        port: address.port,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            
        })
    ]
})