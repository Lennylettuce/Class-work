const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: Import InjectManifest from the workbox-webpack-plugin
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
    new GenerateSW ({
      swDest: 'service-worker.js'
    })
    // TODO: Add the InjectManifest plugin and provide it a service worker file code above
    // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
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
