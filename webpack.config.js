var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/demo/main.js',
        a: './src/demo/a.js',
        b: './src/demo/b.js',
        c: './src/demo/c.js'
    },
    output: {
        path: './output',
        publicPath: 'https://cdn.com/',
        filename: 'script/[name]-[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './view/demo.html',
            filename: 'a.html',
            title: 'i am a',
            chunks: ['a', 'main'],
            // excludeChunks: ['b', 'c'],
            inject: false
        }),
        new htmlWebpackPlugin({
            template: './view/demo.html',
            filename: 'b.html',
            title: 'i am b',
            chunks: ['main', 'b'],
            inject: false
        }),
        new htmlWebpackPlugin({
            template: './view/demo.html',
            filename: 'c.html',
            title: 'i am c',
            chunks: ['main', 'c'],
            inject: false
        })
    ]
};