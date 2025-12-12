const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@app': path.resolve(__dirname, 'src/app'),
    '@entities': path.resolve(__dirname, 'src/entities'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@features': path.resolve(__dirname, 'src/features'),
    '@widgets': path.resolve(__dirname, 'src/widgets'),
    '@shared': path.resolve(__dirname, 'src/shared')
  })

);