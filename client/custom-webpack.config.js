/*
* This config is loaded by the @angular-builders/custom-webpack Angular CLI plugin,
* configured within angular.json's builder params and within customWebpackConfig options.
* See https://www.npmjs.com/package/@angular-builders/custom-webpack for documentation.
*/
'use strict';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode,
  module: {
    rules: [
      {
        test   : /\.less$/,
        loader: 'less-loader',
        options: {
          lessOptions: {
            math: 'always',
            javascriptEnabled: true,
          }
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};
