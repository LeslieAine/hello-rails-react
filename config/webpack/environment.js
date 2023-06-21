const { environment } = require('@rails/webpacker');

// Add the following code at the end of the file
environment.loaders.append('jsx', {
  test: /\.jsx?$/,
  use: {
    loader: 'babel-loader'
  },
  exclude: /node_modules/
});

module.exports = environment;
