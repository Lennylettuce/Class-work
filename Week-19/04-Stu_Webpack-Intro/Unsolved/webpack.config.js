const path = require('path');
//if you run npm run build the output command below will run, which names created file main.js and creates a new folder called dist which will have main in it
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
