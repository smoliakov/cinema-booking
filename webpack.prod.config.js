const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const PUBLIC_PATH = '/';

module.exports = {
  mode: 'production',
  devtool: 'source-map',

  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash:5].js',
    publicPath: '/',
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
      },
      {
        test: /\.css/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.less/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'less-loader' },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/favicon.png',
      template: './src/index.html',
      publicPath: PUBLIC_PATH,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css',
    }),
  ],
};
