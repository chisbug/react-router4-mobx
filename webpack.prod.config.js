/*
  webpack 生产环境配置
*/
const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const WebWebpackPlugin = require('web-webpack-plugin');
const { WebPlugin, AutoWebPlugin } = WebWebpackPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './index.js',
    vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'mobx-react', 'mobx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '',
    sourceMapFilename: '[file].map'
  },
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { 
              loader: 'css-loader', 
              options: { 
                importLoaders: 1,
                minimize: true
              } 
            },
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          'url-loader?limit=10240&publicPath=static/&outputPath=static/'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          'url-loader?limit=10240&publicPath=static/&outputPath=static/'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Actions: path.resolve(__dirname, 'src/actions'),
      Static: path.resolve(__dirname, 'static')
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        collapse_vars: true,
        reduce_vars: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', 
      filename: 'vendor.js' 
    }),
    new AssetsPlugin(),
    new WebPlugin({
      filename: 'index.html',
      requires: ['vendor', 'main'],
      template: './src/index.html'
    }),
    /* 打包css */
    new ExtractTextPlugin('./style.css')
  ]
}