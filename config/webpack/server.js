var express              = require('express');
var webpack              = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');

var app      = express();
var config   = require('./webpack.conf.dev');
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));

app.listen(3000, function() {
    console.log('App is listening on port 3000!\n');
});