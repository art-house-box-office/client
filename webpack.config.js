// const EnvironmentPlugin = require('webpack').EnvironmentPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'scripts/bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new DotenvPlugin({
      sample: './.env',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ExtractTextPlugin('styles/bundle.css'),
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['airbnb'],
          cacheDirectory: true,
        },
      },
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!sass?sourceMap',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
  sassLoader: {
    includePaths: ['./src/styles'],
  },
};
