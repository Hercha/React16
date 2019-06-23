const path = require('path');

module.exports = {
  devtool: 'cheap-modul-eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  }
};