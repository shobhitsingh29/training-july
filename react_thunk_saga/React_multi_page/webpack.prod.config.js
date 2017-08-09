const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = Merge(CommonConfig,{
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    new webpack.optimize.CommonsChunkPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
})
