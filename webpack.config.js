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
    'article': './src/js/article.js',
    'home': './src/js/home.js',
    'signup': './src/js/signup.js',
    'discover': './src/js/discover.js',
    'add-card': './src/js/add-card.js',
    'detailsCard' : './src/js/detailsCard.js',
    'tabBar' : './src/js/tabBar.js',
    'profil' : './src/js/profil.js',
    'logout' : './src/js/logout.js'
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
    port: 9000,
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
          title: 'Article',
          template: './src/pages/article.pug',
          filename: 'article.html',
          chunks: ['article']
      }),
    new HtmlWebpackPlugin({
      template: './src/pages/home.pug',
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      title: 'Details Card',
      template: './src/pages/detailsCard.pug',
      filename: 'detailsCard.html',
      chunks: ['detailsCard']
    }),
    new HtmlWebpackPlugin({
      title: 'Sign up',
      template: './src/pages/signup.pug',
      filename: 'signup.html',
      chunks: ['signup']
    }),
      new HtmlWebpackPlugin({
          title: 'Logout',
          template: './src/pages/logout.pug',
          filename: 'logout.html',
          chunks: ['logout']
      }),
    new HtmlWebpackPlugin({
      title: "Le coup de coeur de l'équipe",
      template: './src/pages/discover.pug',
      filename: 'discover.html',
      chunks: ['discover']
    }),
    new HtmlWebpackPlugin({
      title: "Profil",
      template: './src/pages/profil.pug',
      filename: 'profil.html',
      chunks: ['profil']
    }),
    new HtmlWebpackPlugin({
        title: "Ajouter un urbex",
        template: './src/pages/add-card.pug',
        filename: 'add-card.html',
        chunks: ['add-card']
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
