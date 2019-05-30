const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use:['style-loader', 
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')]
                    }
                },
                'sass-loader']
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, '../src/dist'),
        host: '127.0.0.1',
        port: '8083',
        historyApiFallback: true
    },
})