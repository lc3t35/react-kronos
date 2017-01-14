const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ]
  },
  externals: {
       'jsdom': 'window',
       'cheerio': 'window',
       'react/lib/ExecutionEnvironment': true,
       'react/lib/ReactContext': 'window',
       'react/addons': true,
    }
}