const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.(png|jpg|gif)$/, use: [
        { loader: 'file-loader', options: {}}
      ]},
      {
        test: /\.(css|sass|scss)$/,
        loader: 'style-loader!css-loader!sass-loader',
      }
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
}