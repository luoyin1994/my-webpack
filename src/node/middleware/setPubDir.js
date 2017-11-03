module.exports = function(dir) {
    const fs           = require('fs');
    const path         = require('path');
    const testFilename = require('../../lib/regExp/regExp').testFilename;
    let files          = fs.readdirSync(path.resolve(__dirname, '../', dir), 'utf-8');
    files.forEach(filename => {
        if (testFilename.test(filename)) {
            let fileContents = fs.readFileSync(path.resolve(__dirname, '../', dir), 'utf-8');
        }
    });
    return fileContents;
};