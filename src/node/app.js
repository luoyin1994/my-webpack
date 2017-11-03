const PORT   = 3000;
const config = require('config');

const path = require('path');

const Koa   = require('koa');
const app   = new Koa();
const serve = require('koa-static');

app.use(serve(path.resolve(config.prodDirPath)));

app.listen(PORT);
console.log(`listening on port ${PORT}`);