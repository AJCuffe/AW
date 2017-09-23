const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts-loader'}
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.ts']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ]

};
