/** node模块引用 **/
var path = require('path');

// webpack需要的相关配置
var webpackConfig = require('./webpack.config');

var webpack = require('webpack');

/** 插件引用 **/
    // 自动生成html
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取css
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/** 导出的webpack配置 **/
var config            = {
    // 上下文环境，例如为entry中提供相对的路径
    context: path.resolve(webpackConfig.rootDirPath, 'src'),
    // 定义入口
    entry  : {
        main   : './main.js',
        // subMain: './subMain.js',
        a      : './js/vendor/a.js',
        lodash : 'lodash',
    },
    // loaders
    module : {
        rules: [
            // 处理css
            {
                test: /\.css$/,
                use : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use     : 'css-loader',
                }),
            },
            // 处理图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use : [
                    'file-loader',
                    // 压缩图片
                    {
                        loader : 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
            },
            // 处理文字
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use : [
                    'file-loader',
                ],
            },

        ],
    },
    // 插件
    plugins: [
        new ExtractTextPlugin('css/[name]-[chunkhash:5].css'),
        new HtmlWebpackPlugin({
            title: 'Caching',
        }),
        // 模块标识符
        // new webpack.NamedModulesPlugin(),
        // new webpack.HashedModuleIdsPlugin(),
        // 提取其他模块
        new webpack.optimize.CommonsChunkPlugin({
            name    : ['a','lodash'],
            filename: '[name].js',
            minChunks: Infinity
        }),
        //  提取webpack 的样板(boilerplate)和 manifest
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
        }),
    ],
};

module.exports = config;