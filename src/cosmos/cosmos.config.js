const overrides = require('../../config-overrides');

const {context, options} = require('../setupProxy').config;

var httpProxy = context.reduce((config, ctx) => {
  config[ctx] = options;
  return config;
}, {});

module.exports = {
  rootPath: '..',
  publicPath: 'assets',
  publicUrl: '/assets/',
  webpack: config => overrides(config),
  globalImports: ['./cosmos/cosmos.css'],
  proxiesPath: './cosmos/cosmos.proxies.js',
  webpackConfigPath: 'react-scripts/config/webpack.config'
  // httpProxy
};
