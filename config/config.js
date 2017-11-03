var path = require('path');

var prod = 'dist';
var dev  = 'dev';

var rootDirPath    = path.resolve(__dirname, '../');
var webDirPath     = path.resolve(rootDirPath, 'src', 'web');
var nodeDirPath    = path.resolve(rootDirPath, 'src', 'node');
var bundlesDirPath = path.resolve(rootDirPath, 'bundles');
var prodDirPath    = path.resolve(bundlesDirPath, prod);
var devDirPath     = path.resolve(bundlesDirPath, dev);

module.exports = {
    rootDirPath,
    webDirPath,
    nodeDirPath,
    bundlesDirPath,
    prodDirPath,
    devDirPath,
    prod,
    dev,
};