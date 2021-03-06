const path = require('path');
const srcPath = path.join(__dirname, '/../../src');
const dfltPort = 8000;

/* eslint no-confusing-arrow:0 */
const loader = (loaderName, ...opts) => !opts ? loaderName : `${loaderName}?${opts.join('&')}`;
const localIdentName = '[folder]--[local]--[hash:base64:2]';
const cssLoaderOpts = ['modules', 'importLoaders=1', 'sourceMap', `localIdentName=${localIdentName}`];

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js)$/,
        include: srcPath,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.less/,
        loader: `style!${loader('css', ...cssLoaderOpts)}!postcss!less`,
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|otf|eot|ttf)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(mp4|ogg)$/,
        loader: 'file-loader',
      },
    ],
  };
}

module.exports = {
  srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules,
};
