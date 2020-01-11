const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin.js');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue']
  },
  entry: {
    app: path.join(__dirname, 'main.js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  }
};
