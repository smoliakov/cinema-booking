const path = require('path');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PUBLIC_PATH = '/cinema-booking/';

module.exports = [
  {
    mode: 'production',
    devtool: 'source-map',

    entry: [
      './src/index.js',
    ],
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].[hash:5].js',
      publicPath: PUBLIC_PATH,
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
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]',
          },
        },
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
      new webpack.DefinePlugin({
        BASENAME: JSON.stringify(PUBLIC_PATH),
      }),
      new CopyWebpackPlugin([
        './src/manifest.json',
      ]),
      new HtmlWebpackPlugin({
        favicon: './src/assets/favicon.png',
        template: './src/index.html',
        publicPath: PUBLIC_PATH,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash:5].css',
      }),
    ],
  },
  {
    mode: 'production',
    devtool: 'source-map',

    entry: [
      './src/admin/index.js',
    ],
    output: {
      path: path.join(__dirname, 'build/admin'),
      filename: 'admin.[name].[hash:5].js',
      publicPath: PUBLIC_PATH,
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
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]',
          },
        },
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
      new webpack.DefinePlugin({
        BASENAME: JSON.stringify(PUBLIC_PATH),
      }),
      new CopyWebpackPlugin([
        './src/manifest.json',
      ]),
      new HtmlWebpackPlugin({
        favicon: './src/assets/favicon.png',
        template: './src/index.html',
        publicPath: PUBLIC_PATH,
      }),
      new MiniCssExtractPlugin({
        filename: 'admin.[name].[hash:5].css',
      }),
    ],
  },
];
