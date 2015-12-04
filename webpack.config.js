const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'angular-extends.js',
        minifyFilename: 'angular-extends.min.js',
        sourceMapFilename: 'angular-extends.js.map',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                } 
            },
            {
                test: /\.coffee$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'coffee-loader'
            }
        ]
    },
    externals: {
        angular: 'angular'
    },
    devtool: '#inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            window: __dirname + '/src/vars/window',
            document: __dirname + '/src/vars/document',
            angular: __dirname + '/src/vars/angular'
        })
    ]
};
