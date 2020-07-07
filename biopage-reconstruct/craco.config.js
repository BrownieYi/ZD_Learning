/* eslint-disable global-require */
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    { plugin: require('craco-plugin-react-hot-reload') },
    { plugin: require('craco-cesium')() },
    // new CopyPlugin({
    //   patterns: [
    //     { from: '', to: 'dest' },
    //     { from: 'other', to: 'public' },
    //   ],
    // }),
  ],
};
