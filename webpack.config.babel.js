import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src')
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      include: [path.join(__dirname, 'src')],
      loader: 'babel'
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    sourceMapFilename: '[file].map',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new StyleLintPlugin({
      context: 'src',
      syntax: 'scss'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
