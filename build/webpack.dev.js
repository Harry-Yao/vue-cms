const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const path = require('path')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    port:8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: []
  },
  mode: 'development',
  plugins: [
  ]
});