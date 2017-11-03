var webpack = require('webpack');

var config            = require('../config');
var webpackBaseConfig = require('./webpack.conf.base');

/** 插件引用 **/
    // 清理打包文件夹
var CleanWebpackPlugin = require('clean-webpack-plugin');

// 合并webpack配置
var merge = require('webpack-merge');

module.exports = merge(webpackBaseConfig, {
    // 定义出口
    output : {
        path         : config.devDirPath,
        filename     : '[name].js',
        chunkFilename: '[name].js',

        // 指定index.html中的外部资源引用目录前缀
        publicPath: './',
    },
    plugins: [
        // new CleanWebpackPlugin(webpackConfig.dev, {
        //     root: webpackConfig.bundlesDirPath,
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(config.dev),
            },
        }),
    ],

    // 提供代码sourceMap追溯，方便调试
    // source-map比inline-source-map打包更小，打包时间更快
    // devtool  : 'source-map',
    // webpack-dev-server，提供热替换
    // 开箱即可对js/js(import)、css/css(@import)等文件进行监控
    // devServer: {
    //     contentBase: webpackConfig.devDirPath,
    // },
});