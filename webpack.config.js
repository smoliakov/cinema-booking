const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PUBLIC_PATH = '/';

module.exports = [
  {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',

    entry: [
      './src/index.js',
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      publicPath: PUBLIC_PATH,
    },

    module: {
      rules: [
        {
          exclude: [
            /\.html$/,
            /\.(js|jsx)$/,
            /\.css$/,
            /\.less$/,
            /\.styl$/,
            /\.json$/,
            /\.bmp$/,
            /\.gif$/,
            /\.jpe?g$/,
            /\.png$/,
          ],
          loader: require.resolve('file-loader'),
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
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
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.css/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
          ],
        },
        {
          test: /\.less/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true,
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin([
        './src/manifest.json',
      ]),
      new webpack.DefinePlugin({
        BASENAME: JSON.stringify('/'),
      }),
      new HtmlWebpackPlugin({
        favicon: './src/assets/favicon.png',
        template: './src/index.html',
        publicPath: PUBLIC_PATH,
      }),
    ],

    devServer: {
      port: 4500,
      host: '0.0.0.0',
      historyApiFallback: true,
    },
  },
  {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',

    entry: [
      './src/admin/index.js',
    ],
    output: {
      path: path.resolve(__dirname, 'admin'),
      filename: 'admin.[name].js',
      publicPath: PUBLIC_PATH,
    },

    module: {
      rules: [
        {
          exclude: [
            /\.html$/,
            /\.(js|jsx)$/,
            /\.css$/,
            /\.less$/,
            /\.styl$/,
            /\.json$/,
            /\.bmp$/,
            /\.gif$/,
            /\.jpe?g$/,
            /\.png$/,
          ],
          loader: require.resolve('file-loader'),
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
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
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.css/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
          ],
        },
        {
          test: /\.less/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true,
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin([
        './src/manifest.json',
      ]),
      new webpack.DefinePlugin({
        BASENAME: JSON.stringify('/'),
      }),
      new HtmlWebpackPlugin({
        favicon: './src/assets/favicon.png',
        template: './src/index.html',
        publicPath: PUBLIC_PATH,
      }),
    ],

    devServer: {
      port: 4600,
      host: '0.0.0.0',
      historyApiFallback: true,
    },
  },
];
