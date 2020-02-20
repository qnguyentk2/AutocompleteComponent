const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new Dotenv({
      path: './env/.env.production',
    }),
  ],
};
