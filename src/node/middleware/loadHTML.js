module.exports = function(dir) {
    const fs   = require('fs');
    const path = require('path');
    let html   = fs.readFileSync(path.resolve(__dirname, '../', dir), 'utf-8');
    return html;
};