var webpack    = require('webpack');
var path       = require('path');
module.exports = {
    entry  : [
        'lodash',
    ],
    output : {
        path    : path.resolve(__dirname, '../test'),
        filename: 'vendor.js',
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name   : '[name]',
            path   : path.resolve(__dirname, '../test', 'vendor-manifest.json'),
        }),
    ],
};