const path = require('path')
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const rootDir = __dirname
const srcDir = path.resolve(rootDir, 'src')
const distDir = path.resolve(rootDir, 'dist')

module.exports = {
    entry: path.resolve(srcDir, 'index.js'),
    output: {
        path: distDir,
        filename: 'angular-extends.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime'],
                },
            },
            {
                test: /\.coffee$/,
                use: [
                    {
                        loader: 'coffee-loader',
                        options: {
                            sourceMap: true,
                            transpile: {
                                presets: ['@babel/preset-env'],
                                plugins: ['@babel/plugin-transform-runtime'],
                            },
                        },
                    },
                ],
                exclude: /(node_modules|bower_components)/,
            },
        ],
    },
    externals: {
        angular: 'angular'
    },
    devtool: '#inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            window: [path.resolve(srcDir, 'vars/window'), 'default'],
            document: [path.resolve(srcDir, 'vars/document'), 'default'],
            angular: [path.resolve(srcDir, 'vars/angular'), 'default'],
        }),
        new UglifyJsPlugin({
            sourceMap: true,
        }),
    ],
};
