const http = require('http');
const Koa  = require('koa');
const app  = new Koa();

// X-Response-Time
app.use(async (ctx, next) => {
    let start = Date.now();
    console.log(1);
    await next();
    console.log(2);
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
    let start = Date.now();
    console.log(3);
    await next();
    console.log(4);
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// get cookies
app.use(async (ctx, next) => {
    console.log(5.2);
    await next();
    let name = ctx.cookies.get('name');
    console.log(name);
});

app.keys = ['im a newer secret', 'i like turtle'];

// set cookies
app.use(async (ctx, next) => {
    console.log(5);
    await next();
    ctx.cookies.set('name', 'zhangsan', {signed: true});
});

app.context.num = 555;

// set custom
app.use(async (ctx, next) => {
    ctx.set('custom-xxx', 'xxx-----------xxx');
    console.log(ctx.num);
    await next();
});

// request and response
app.use(async (ctx, next) => {
    console.log(6);
    await next();
});

// response
app.use(async (ctx, next) => {
    console.log(7);
    ctx.body = 'Hello world!';
});

// error
app.on('error', (err, ctx) => {
    console.log(8);
    console.error(err);
});

// app.listen(3000);
// is sugar for the following:
http.createServer(app.callback()).listen(3000);