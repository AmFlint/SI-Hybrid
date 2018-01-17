const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader']
});
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    'index': './src/js/index.js',
    'page2': './src/js/page2.js',
    'login': './src/js/login.js'
  },
  devtool: isProd ? '' : 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          'image-webpack-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'www'),
    compress: true,
    hot: true,
    open: true
  },
  plugins: [
    new CleanWebpackPlugin(['www']),
    new HtmlWebpackPlugin({
      title: 'Index',
      template: './src/pages/index.pug',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'Page 2',
      template: './src/pages/page2.pug',
      filename: 'page2.html',
      chunks: ['page2']
    }),
    new HtmlWebpackPlugin({
      title: 'Login',
      template: './src/pages/login.pug',
      filename: 'login.html',
      chunks: ['login']
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new UglifyJSPlugin()
  ]
};
