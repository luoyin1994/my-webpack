const PORT = 3000;

const path = require('path');

const Koa   = require('koa');
const app   = new Koa();
const serve = require('koa-static');

app.use(serve(path.resolve(__dirname, 'dev')));

app.use(async (ctx, next) => {
    ctx.body = 'hello world!';
});

app.listen(PORT);
console.log(`listening on port ${PORT}`);