var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        demo: './src/demo/demo.js'
    },
    output: {
        path: './output',
        filename: 'script/[name]-[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './view/demo.html',
            filename: 'index-[chunkhash].html'
        })
    ]
};