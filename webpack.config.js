// webpack.config.js
var webpack = require('webpack');

module.exports = {
  entry: "./src/js/app.js",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      }
    ]
  }
};
