const PORT   = 3000;
const HOST   = 'localhost';
const config = require('./config/config');

const path = require('path');

const Koa = require('koa');
const app = new Koa();

const serve = require('koa-static');

// set public directory
app.use(serve(path.resolve(config.prodDirPath)));

app.listen(PORT);
console.log(`listening on http://${HOST}:${PORT}.`);