const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/Index.jsx'
  },
  output: {
    path: __dirname + '/Public/JS',
    filename: 'Index.js'
  },
  resolve:{
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        use: ['babel-loader']
      }
    ]
  }
}
