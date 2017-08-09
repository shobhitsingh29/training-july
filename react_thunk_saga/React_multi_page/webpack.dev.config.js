
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    entry: [
        path.resolve(__dirname, 'src/main.js')
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                presets: ['es2015','react']
                }
            }, {
                test: /\.css$/,
                loaders: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                }]
            }
        ]
    }
};