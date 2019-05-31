const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader','css-loader']
      },
      {
        test: /\.vue$/, 
        loader: 'vue-loader'
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/, 
        use: [
          {
            loader:'url-loader',
            options: {
              limit: 1024,
              name: '[name]-aa.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 解决vender后面的hash每次都改变
    // new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    }),
  ]
}