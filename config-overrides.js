const path = require('path');
const webpack = require('webpack');
const { override, addWebpackAlias, useBabelRc } = require('customize-cra');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';
const isProduction = NODE_ENV === 'production';

const alias = path_ => path.join(__dirname, path_);

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    src: alias('src'),
    assets: alias('src/assets'),
    config: alias('src/config'),
    components: alias('src/components'),
    atoms: alias('src/components/atoms'),
    common: alias('src/components/common'),
    icons: alias('src/components/icons'),
    molecules: alias('src/components/molecules'),
    organisms: alias('src/components/organisms'),
    templates: alias('src/components/templates'),
    pages: alias('src/components/pages'),
    forms: alias('src/components/forms'),
    services: alias('src/services'),
    stores: alias('src/stores'),
    theme: alias('src/theme'),
    utils: alias('src/utils')
  }),
  config => {
    config.resolve.extensions = ['*', '.js', '.jsx'];

    return config;
  },
  config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.isDevelopment': JSON.stringify(isDevelopment),
        'process.env.isProduction': JSON.stringify(isProduction)
      })
    );
    return config;
  }
);
