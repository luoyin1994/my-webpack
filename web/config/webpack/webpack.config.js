var path = require('path');

var prod = 'dist';
var dev  = 'dev';

var rootDirPath    = path.resolve(__dirname, '../../../');
var bundlesDirPath = path.resolve(rootDirPath, 'bundles');
var prodDirPath    = path.resolve(bundlesDirPath, prod);
var devDirPath     = path.resolve(bundlesDirPath, dev);

module.exports = {
    rootDirPath,
    bundlesDirPath,
    prodDirPath,
    devDirPath,
    prod,
    dev,
};