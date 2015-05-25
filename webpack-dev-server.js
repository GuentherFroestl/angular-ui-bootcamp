var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

var compiler = webpack(config);
var devServer = new WebpackDevServer(compiler, {});
var port = 3000;

devServer.listen(port, 'localhost', function () {
    console.log('webpack-dev-server listen on port ' + port);
});
