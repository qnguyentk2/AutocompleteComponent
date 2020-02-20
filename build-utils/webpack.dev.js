const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  plugins: [
    new Dotenv({
      path: './env/.env.development',
    }),
  ],
};
