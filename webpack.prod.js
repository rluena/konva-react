var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

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
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('./build/js/'),
    filename: 'auth-app.js',
    publicPath: '/'
  },
  module: {
      rules: loaders
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};