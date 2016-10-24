const webpack = require('webpack');
const path = require('path');
const open = require('open');
const autoprefixer = require('autoprefixer');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WEBPACK_DEV_SERVER_PORT = 9000;
const EXRESS_SERVER_PORT = 3000;

const PATHS = {
  client: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist')
};

function OpenPlugin() {
  let firstTime = true;
  OpenPlugin.prototype.apply = (compiler) => {
    compiler.plugin('done', () => {
      if (firstTime) {
        open(`http://localhost:${WEBPACK_DEV_SERVER_PORT}`);
        firstTime = false;
      }
    });
  };
}
module.exports = {
  env: process.env.NODE_ENV,
  entry: {
    app: path.resolve(PATHS.client, 'index.js'),
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router']
  },

  output: {
    filename: '[name].js',
    path: PATHS.build,
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: 'cheap-module-eval-source-map',

  stats: {
    colors: true,
    reasons: true
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      include: PATHS.client,
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      include: PATHS.client,
      loader: 'babel'
    }, {
      test: /\.scss/,
      loader: 'style!css!postcss!sass?outputStyle=expanded'
    }, {
      test: /\.(png|jpg|woff|woff2|ttf|svg|eot|gif)$/,
      loader: 'url?limit=8192'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file'
    }]
  },
  postcss: () => [autoprefixer],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    new StyleLintPlugin({
      context: 'src',
      syntax: 'scss'
    }),
    new OpenPlugin()

  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    port: WEBPACK_DEV_SERVER_PORT,
    proxy: [
      {
        context: '/api',
        target: `http://localhost:${EXRESS_SERVER_PORT}`,
        secure: false
      }
    ]
  }

};
