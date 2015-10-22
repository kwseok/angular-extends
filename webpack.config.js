const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'angular-extends.js',
        minifyFilename: 'angular-extends.min.js',
        sourceMapFilename: 'angular-extends.js.map',
        libraryTarget: 'umd',
        library: 'angular'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?optional=runtime'
            }
            //{test: /\.coffee$/, loader: 'coffee-loader'}
        ]
    },
    externals: {
        jquery: {
            root: "jQuery",
            commonjs: "jquery",
            commonjs2: "jquery",
            amd: "jquery"
        },
        angular: 'angular'
    },
    devtool: '#inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            window: __dirname + '/src/vars/window',
            document: __dirname + '/src/vars/document',
            $: __dirname + '/src/vars/jquery',
            jQuery: __dirname + '/src/vars/jquery',
            angular: __dirname + '/src/vars/angular'
        })
    ]
};
