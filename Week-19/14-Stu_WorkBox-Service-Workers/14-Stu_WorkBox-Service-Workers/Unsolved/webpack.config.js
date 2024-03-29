const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: Explain what the workbox-webpack-plugin does and why it is needed in this case
  // workbox is used to compile files to make complex applications easier to navigate(service worker management?)
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    hot: true,
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev.to Posts',
      template: './index.html',
    }),
    // TODO: add a comment explaining what the GenerateSW plugin does
      //this method does most of the compiling

    // TODO: add a comment explaining what the `clientsClaim` and `skipWaiting` options do
      //clientClaim
      //skipWaiting READ THESE AGAIN
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
