const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      model: path.resolve(__dirname, 'src/model'),
      view: path.resolve(__dirname, 'src/view'),
      controller: path.resolve(__dirname, 'src/controller'),
      api: path.resolve(__dirname, 'src/api'),
      config: path.resolve(__dirname, 'src/config'),
      htmlConfiguration: path.resolve(__dirname, 'src/view/htmlConfiguration'),
      utils: path.resolve(__dirname, 'src/view/utils'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './src/view/index.html',
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 4444,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
