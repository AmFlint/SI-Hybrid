// Import misc packages
const path = require('path');

// Import Webpack / Webpack plugins
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Environment set up
const isProd = process.env.NODE_ENV === 'production';

// Set up webpack plugins
const webpackPlugins = [
  new CleanWebpackPlugin(['www']),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'oldSrc/index.pug'
  }),
  new UglifyJsPlugin(),
  new ExtractTextPlugin("styles.css")
];

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: [
    'babel-polyfill',
    './oldSrc/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'app-[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          'presets': ['es2015', 'stage-2', 'react']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          'file-loader?name=assets/images/[name]-[hash:6].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: webpackPlugins,
};
