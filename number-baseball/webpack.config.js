const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin.js');

module.exports = {
  mode: 'development',
  // mode: 'produciton',
  devtool: 'eval',
  // devtool: 'hidden-source-map',
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
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  }
};
