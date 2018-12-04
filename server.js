const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);

const server1 = new WebpackDevServer(compiler.compilers[0], {
  contentBase: __dirname,
  hot: true,
  historyApiFallback: true,
  compress: true,
  port: 4500,
});

const server2 = new WebpackDevServer(compiler.compilers[1], {
  contentBase: __dirname,
  hot: true,
  historyApiFallback: true,
  compress: true,
  port: 4600,
});

server1.listen(4500, 'localhost', function () {
});
server2.listen(4600, 'localhost', function () {
});
