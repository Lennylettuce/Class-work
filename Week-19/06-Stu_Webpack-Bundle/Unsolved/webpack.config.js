const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // TODO: Add a new set of rules to handle images
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      //this is a regex that looks for a set prop extension as listed below
        //then use asset/resource from webpage to parse this info to be referenced
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        type: 'asset/resource'
      }
    ],
  },
};
