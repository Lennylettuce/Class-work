const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Require the GenerateSW class of the WorkBoxPlugin 
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Webpack Plugin',
    }),
    new MiniCssExtractPlugin(),
    // TODO: Add parameters to GenerateSW class to configure runtime caching
      //make sure only certain things are precached(local vs not)cache as user accesses, not as default 
        //generatesw precaches everything my default
        // these parameters on the runtime will in this case update cache as user
    new WorkboxPlugin.GenerateSW({
      //exclude the images in precaching
      exclude: [/\.(?:png|svg|jpg|jpeg|gif)$/],
      runtimeCaching: [{
        //make sure it gets cached in the runtime
        urlPattern: /\.(?:png|svg|jpg|jpeg|gif)$/,
        //then use the cachefirst method to match request to cached asset
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 2
          }
        }
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
