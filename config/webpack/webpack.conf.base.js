var path = require('path');

var webpackConfig = require('./webpack.config');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    context: path.resolve(webpackConfig.rootDirPath, 'src'),
    entry  : {
        main: './main.js',
    },
    output : {
        filename     : '[name].js',
        chunkFilename: '[name]-[id].js',
    },
    module : {
        rules: [
            {
                test: /\.css$/,
                use : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use     : 'css-loader',
                }),
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use : [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use : [
                    'file-loader',
                ],
            },

        ],
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
    ],
};

module.exports = config;