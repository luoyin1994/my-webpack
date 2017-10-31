var path = require('path');

var rootDirPath    = path.resolve(__dirname, '../../');
var bundlesDirPath = path.resolve(rootDirPath, 'bundles');
var prodDirPath    = path.resolve(bundlesDirPath, 'dist');
var devDirPath     = path.resolve(bundlesDirPath, 'dev');

module.exports = {
    rootDirPath,
    bundlesDirPath,
    prodDirPath,
    devDirPath,
};