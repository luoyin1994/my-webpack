var path = require('path');

var webpackConfig = require('./webpack.config');

var config = {
    context: path.resolve(webpackConfig.rootDirPath, 'src'),
    entry  : {
        main  : './main.js',
    },
    output : {
        filename     : '[name].js',
        chunkFilename: '[name]-[id].js',
    },
};

module.exports = config;