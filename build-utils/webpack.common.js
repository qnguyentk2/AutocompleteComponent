/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const DIST_DIR = path.resolve(__dirname, '../', 'dist');
const SRC_DIR = path.resolve(__dirname, '../', 'src');
// const DIR = path.resolve(__dirname);

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css)$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        loader: [
          isDevelopment
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.(scss)$/,
        loader: [
          isDevelopment
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: path.resolve(
          __dirname,
          'node_modules',
          'font-awesome',
        ),
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|woff(2)?|eot|ttf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.(jpg|png|ttf|eot|svg)(\?[\s\S]+)?$/,
        include: path.resolve(
          __dirname,
          'node_modules',
          'font-awesome',
        ),
        use: [
          {
            loader: 'file-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.json'],
    alias: {
      '@components': path.resolve(__dirname, `${SRC_DIR}/components`),
      '@assets': path.resolve(__dirname, '../', 'assets'),
      '@contexts': path.resolve(__dirname, '../', `${SRC_DIR}/components/Contexts`),
    },
  },
  output: {
    path: `${DIST_DIR}`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Hello Webpack bundled JavaScript Project',
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
