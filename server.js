const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);

const server1 = new WebpackDevServer(compiler.compilers[0], {
  hot: true,
  port: 4500,
  historyApiFallback: true,
});

const server2 = new WebpackDevServer(compiler.compilers[1], {
  hot: true,
  port: 4600,
  historyApiFallback: true,
});

server1.listen(4500, 'localhost', function () {
});
server2.listen(4600, 'localhost', function () {
});
