const Koa      = require('koa');
const app      = new Koa();
const loadHTML = require('./middleware/loadHTML');
const setPubDir = require('./middleware/setPubDir');
app.use(async (ctx, next) => {
    ctx.body = loadHTML('./dev/index.html');
    await next();
});
app.use(async (ctx, next) => {
    ctx.body = setPubDir('./dev');
});

app.listen(3000);