var webpackConfig     = require('./webpack.config');
var webpackBaseConfig = require('./webpack.conf.base');

/** 插件引用 **/
    // 清理打包文件夹
var CleanWebpackPlugin = require('clean-webpack-plugin');
// 代码压缩
var UglifyJSPlugin     = require('uglifyjs-webpack-plugin');

// 合并webpack配置
var merge = require('webpack-merge');

var config = {
    output : {
        path: webpackConfig.prodDirPath,
    },
    plugins: [
        new CleanWebpackPlugin(webpackConfig.prod, {
            root: webpackConfig.bundlesDirPath,
        }),
        /** 代码压缩 **/
        // 不在dev中压缩代码，压缩代码需要花费的时间将占打包时间的绝大部分。自我测试在60%以上
        // 删除未引用代码,
        // 压缩代码
        new UglifyJSPlugin({
            // 开启可以实现打包后代码出错定位，实现dev中配置devtool后的效果
            sourceMap: true,
        }),
    ],
};

module.exports = merge(webpackBaseConfig, config);