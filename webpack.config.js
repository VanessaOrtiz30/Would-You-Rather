var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

var webpack = require('webpack');

var config = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/dist/', // `dist` is the destination
    filename: 'bundle.js'
  },

  plugins: [HTMLWebpackPluginConfig],

  //To run development server
  devServer: {
    inline: true,
      contentBase:'./',
      port: 3333
  },

  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-0'] 
            },
            enforce: "pre"
        }, {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
        },
        {
            test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
            loader: 'file-loader',
        },
        {
            test: /\.(?:png|jpg|svg|gif)$/,
            loader: 'url-loader',
            query: {
              limit: 10000,
            },
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
        }
    ]
  },

  node: {
    fs: 'empty'
  },

  performance: { 
    hints: false
  },

  devtool: "source-map" // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  config.devtool = ""; 
}

module.exports = config;

