const path = require('path');
const defaultSettings = require('./defaults');
const autoprefixer = require('autoprefixer');

const additionalPaths = [];

module.exports = {
  additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '../../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath,
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false,
    proxy: {
      '*': 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {},
  postcss: () => [autoprefixer],
};
