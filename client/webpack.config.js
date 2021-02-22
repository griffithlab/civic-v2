"use strict";

const webpack = require("webpack");

const mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  // WARNING: MUST set the 'mode' manually because it isn't done by NX/NG cli
  mode,
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'less-loader',
        options: {
          // modifyVars: { // modify theme variable
          //   'primary-color': '#1DA57A',
          //   'link-color': '#1DA57A',
          //   'border-radius-base': '2px'
          // },
          javascriptEnabled: true
        }
      },
    ],
  },
  plugins: [
    // add custom plugins here
  ],
};
