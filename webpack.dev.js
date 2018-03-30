const path = require('path');

const loaders = [
  {
    "test": /\.(js|jsx)$/,
    "exclude": /node_modules/,
    "loader": "babel-loader"
  },
  { test: /\.(png|jpg|gif)$/, use: [
    { loader: 'file-loader'}
  ]},
  {
    test: /\.(css|scss)$/,
    "use": [{
      "loader": "style-loader"
    }, 
    {
      "loader": "css-loader"
    }, 
    {
      "loader": "sass-loader"
    }]
  }
];


module.exports = {
  devtool: 'eval-source-map',
  watch: true,
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('./public/'),
    filename: 'auth-app.js',
    publicPath: '/'
  },
  module: {
      rules: loaders
  }
};