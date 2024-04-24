const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@model': path.resolve(__dirname, 'src/model'),
      '@view': path.resolve(__dirname, 'src/view'),
      '@controller': path.resolve(__dirname, 'src/controller'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@calculator': path.resolve(__dirname, 'src/calculator'),
      '@validation': path.resolve(__dirname, 'src/calculator/validation'),
      '@validationErrors': path.resolve(__dirname, 'src/calculator/validation/errors'),
      '@utils': path.resolve(__dirname, 'src/calculator/utils'),
      '@symbols': path.resolve(__dirname, 'src/calculator/symbols'),
      '@regexp': path.resolve(__dirname, 'src/calculator/regexp'),
      '@expression': path.resolve(__dirname, 'src/calculator/expression'),
      '@htmlConfiguration': path.resolve(__dirname, 'src/view/htmlConfiguration'),
      '@viewServices': path.resolve(__dirname, 'src/view/services'),
      '@viewElements': path.resolve(__dirname, 'src/view/elements'),
      '@viewBaseElements': path.resolve(__dirname, 'src/view/elements/baseElements'),
    },
    extensions: ['.js'],
  },
  plugins: [
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
    ],
  },
};
