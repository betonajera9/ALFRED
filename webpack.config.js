module.exports = {
  entry: {
    index: './src/views/index.jsx'
  },
  output: {
    path: __dirname + '/src/public/js',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node-modules/,
        use: ['babel-loader']
      }
    ]
  }
};
