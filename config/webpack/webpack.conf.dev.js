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
    devtool  : 'inline-source-map',
    devServer: {
        contentBase: webpackConfig.devDirPath,
    },
};

module.exports = merge(webpackBaseConfig, config);