var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

config.devtool = 'eval';
// config.devtool = 'eval-cheap-module-source-map';
config.output = {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'src')
};

config.plugins = config.plugins
    .concat([
        new webpack.HotModuleReplacementPlugin()
    ]);

module.exports = config;
