var webpack = require('webpack');

var config            = require('./config');
var webpackBaseConfig = require('./webpack.conf.base');

/** 插件引用 **/
    // 清理打包文件夹
var CleanWebpackPlugin   = require('clean-webpack-plugin');
// 代码压缩
var UglifyJSPlugin       = require('uglifyjs-webpack-plugin');
// 图形化打包分析
var BundleAnalyzerPlugin = require(
    'webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 合并webpack配置
var merge = require('webpack-merge');

module.exports = merge(webpackBaseConfig, {
    // 定义出口
    output : {
        path         : config.prodDirPath,
        filename     : '[name].js',
        chunkFilename: 'js/[name].js',
    },
    plugins: [
        // new CleanWebpackPlugin(webpackConfig.prod, {
        //     root: webpackConfig.bundlesDirPath,
        // }),
        /** 代码压缩 **/
        // 不在dev中压缩代码，压缩代码需要花费的时间将占打包时间的绝大部分。自我测试在60%以上
        // 删除未引用代码,
        // 压缩代码
        new UglifyJSPlugin({
            sourceMap    : true,
            uglifyOptions: {
                compress: true,
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(config.prod),
            },
        }),
        // 图形化打包分析
        // new BundleAnalyzerPlugin(),
    ],
});