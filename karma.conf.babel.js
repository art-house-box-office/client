import webpackConfig from './webpack.config.babel';
import testEntry from './src/app.js';

webpackConfig.entry = {};

export default function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      testEntry,
      './node_modules/angular-mocks/angular-mocks.js',
      './test/**/*.js',
    ],
    webpack: webpackConfig,
    exclude: [],
    preprocessors: {
      [testEntry]: ['webpack'],
      './test/**/*.js': ['babel'],
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  });
}
