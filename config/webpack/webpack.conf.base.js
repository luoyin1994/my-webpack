/** node模块引用 **/
var path = require('path');

// webpack需要的相关配置
var webpackConfig = require('./webpack.config');

/** 插件引用 **/
    // 提取css
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 自动生成html
var HtmlWebpackPlugin = require('html-webpack-plugin');

/** 导出的webpack配置 **/
var config = {
    // 上下文环境，例如为entry中提供相对的路径
    context: path.resolve(webpackConfig.rootDirPath, 'src/entries'),
    // 定义入口
    entry  : {
        main   : './main.js',
        subMain: './subMain.js',
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
        new ExtractTextPlugin('css/[name]-[hash].css'),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
};

module.exports = config;