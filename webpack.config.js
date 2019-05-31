const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
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
        test: /\.(gif|jpg|jpeg|png|svg))$/, 
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
  mode: 'development',
  plugins: [
    // 解决vender后面的hash每次都改变
    new webpack.HashedModuleIdsPlugin(),
    new HTMLPlugin(),
    new VueLoaderPlugin()
  ]
}