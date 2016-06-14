/**
 * webpack.config.js
 * Created by Huxley on 11/30/15.
 */
var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        ng2: [
            'es6-shim/es6-shim.js',//for IE11 10
            'angular2/bundles/angular2-polyfills',
            'angular2/bootstrap',
            'angular2/common',
            'angular2/core',
            'angular2/router',
            'angular2/http'
        ],
        app: './www/static/app'
    },
    output: {
        path: path.join('www', 'static', 'build'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map'
    },
    module: {
        preLoaders: [
            {test: /\.jsx?$/, loader: "source-map", exclude: [/node_modules\/rxjs/]},
        ],
        loaders: [
            {test: /\.html$/, loader: 'raw'},
            {test: /\.json$/, loader: 'json'},
            {
                test: /\.tsx?$/, loader: 'ts',
                exclude: [/node_modules/, /client/]
            },
            {test: /\.less$/, loader: 'raw!autoprefixer!less'},
            {test: /\.scss$/, loader: 'raw!autoprefixer!sass'}
        ]
    },
    resolve: {
        extensions: ['', '.json', '.ts', '.tsx', '.js', '.jsx', '.less'],
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'ng2',
            minChunks: Infinity
        })
    ],
    devServer: {
        inline: true,
        colors: true,
        historyApiFallback: {index: '/static/index.html'},
        contentBase: 'www',
        publicPath: '/static/build/'
    }
};
