var webpackConfig     = require('./webpack.config');
var webpackBaseConfig = require('./webpack.conf.base');

// 清理打包文件夹
var CleanWebpackPlugin = require('clean-webpack-plugin');

// 合并webpack配置
var merge = require('webpack-merge');

var config = {
    output   : {
        path: webpackConfig.devDirPath,
    },
    plugins  : [
        new CleanWebpackPlugin(webpackConfig.dev, {
            root: webpackConfig.bundlesDirPath,
        }),
    ],
    // 提供代码sourceMap追溯，方便调试
    devtool  : 'inline-source-map',
    // webpack-dev-server，提供热替换
    // 开箱即可对js/js(import)、css/css(@import)等文件进行监控
    devServer: {
        contentBase: webpackConfig.devDirPath,
    },

};

module.exports = merge(webpackBaseConfig, config);