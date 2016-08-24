var webpack = require('webpack');
var path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

var config = require('./webpack.config');

config.debug = false;
config.devtool = 'source-map';
config.output = {
    filename: '[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, 'dist')
};

config.plugins = config.plugins.concat([
  // Reduces bundles total size
    new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
            screw_ie8: true,
            keep_fnames: true,
            except: ['$super', '$', 'exports', 'require', 'angular']
        },
        compress: {
            screw_ie8: true,
            unused: true,
            dead_code: true
        },
        comments: false
    }),
    new CompressionPlugin({
        regExp: /\.css$|\.html$|\.js$|\.map$/,
        threshold: 2 * 1024
    })

]);

module.exports = config;
