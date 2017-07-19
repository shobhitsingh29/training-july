/**
 * Created by goku on 19-07-2017.
 */
var path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.jsx',
        another: './src/another-module.js'
    },plugins: [
        new HTMLWebpackPlugin({
            title: 'Code Splitting',
            template: 'src/index.hbss'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './src')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel'
            }
        }],
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }]
    }
};