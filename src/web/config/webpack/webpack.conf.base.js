/** node模块引用 **/
var path = require('path');

// webpack需要的相关配置
var config = require('../config');

var webpack = require('webpack');

/** 插件引用 **/
    // 自动生成html
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取css
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/** 导出的webpack配置 **/
module.exports = {
    // 上下文环境，例如为entry中提供相对的路径
    context: path.resolve(config.webDirPath, 'src'),
    // 定义入口
    entry  : {
        main  : './main.js',
        // subMain: './subMain.js',
        lodash: 'lodash',
    },
    // loaders
    module : {
        rules: [
            // 处理css
            {
                test: /\.css$/,
                use : ExtractTextPlugin.extract({
                    fallback  : 'style-loader',
                    use       : 'css-loader',
                    // 对于提取出的css中的引用增加的路径前缀
                    publicPath: '../',
                }),
            },
            // 处理图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use : [
                    {
                        loader : 'file-loader',
                        options: {
                            // 打出引用时的目录结构
                            name: '[path][name].[ext]?[hash:5]',
                        },
                    },

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
                    {
                        loader : 'file-loader',
                        options: {
                            // 打出引用时的目录结构
                            name: '[path][name].[ext]?[hash:5]',
                        },
                    },
                ],
            },
        ],
    },
    // 插件
    plugins: [
        new ExtractTextPlugin('css/[name].css?[chunkhash:5]'),
        new HtmlWebpackPlugin({
            title   : 'Caching',
            filename: 'index.html?[hash:5]',
        }),
        // 模块标识符
        // new webpack.NamedModulesPlugin(),
        // new webpack.HashedModuleIdsPlugin(),
        // 提取其他模块
        new webpack.optimize.CommonsChunkPlugin({
            name     : ['lodash'],
            filename : 'js/vendor/[name].js?[hash:5]',
            minChunks: Infinity,
        }),
        //  提取webpack 的样板(boilerplate)和 manifest
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
            filename : 'js/[name].js?[hash:5]',
            minChunks: Infinity,
        }),
    ],
};
