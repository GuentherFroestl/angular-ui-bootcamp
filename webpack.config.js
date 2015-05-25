var path = require('path');
var webpack = require('webpack');

module.exports = {
    watch: true,
    target: 'web',
    entry: {
        app: path.join(__dirname, '/app/app.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "build")
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html?{"minimize":true,"removeRedundantAttributes":false}'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};
