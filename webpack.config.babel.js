import { EnvironmentPlugin } from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import DotenvPlugin from 'webpack-dotenv-plugin';

const dotenvFile = process.env.NODE_ENV === 'production' ? './.env' : './.env-local';

export default {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: '/scripts/bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new DotenvPlugin({ sample: dotenvFile, path: dotenvFile }),
    new EnvironmentPlugin(['API_URL', 'TOKEN_NAME']),
    new ExtractTextPlugin('/styles/bundle.css'),
    new HtmlPlugin({ template: './src/index.html' }),
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
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style!', 'css?sourceMap!sass?sourceMap'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['airbnb'],
        },
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
