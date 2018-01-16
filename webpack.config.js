// Import misc packages
const path = require('path');

// Import Webpack / Webpack plugins
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Environment set up
const isProd = process.env.NODE_ENV === 'production';

// Set up webpack plugins
const webpackPlugins = [
  new CleanWebpackPlugin(['www']),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html'
  }),
  new webpack.HotModuleReplacementPlugin()
];

if (isProd) {
  webpackPlugins.push(new UglifyJsPlugin());
}

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:9000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index.js'
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
          'presets': ['es2015', 'stage-2', 'react'],
          'plugins': ['react-hot-loader/babel']
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: webpackPlugins,
  devServer: {
    contentBase: './www',
    colors: true,
    historyApiFallback: true,
    inline: false,
    port: 9000,
    hot: true,
    open: true
  }
};
