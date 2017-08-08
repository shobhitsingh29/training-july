
var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.jsx'
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

    devServer: {
        inline: true,
        port: 8083,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015'],
                    }
                }
            },
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
