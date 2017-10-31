var webpackConfig     = require('./webpack.config');
var webpackBaseConfig = require('./webpack.conf.base');

var merge = require('webpack-merge');

var config = {
    output: {
        path: webpackConfig.devDirPath,
    },
};

module.exports = merge(webpackBaseConfig, config);