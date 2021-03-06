const path = require('path');
const presetKarma = require('poi-preset-karma');
const webpack = require('webpack');
const glob = require('glob').sync;
const {name} = require('./package.json');

module.exports = {
  entry: glob('./src'),
  filename: {
    js: name + '.min.js',
    css: name + '.min.css',
  },
  vendor: false,
  sourceMap: true,
  html: false,
  presets: [
    presetKarma({
      files: ['./test/specs/**.spec.js'],
      browsers: ['PhantomJS'],
      frameworks: ['mocha', 'chai', 'phantomjs-shim'],
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'example'),
  },
  moduleName: 'VueChardin'
};
