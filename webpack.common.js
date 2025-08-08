const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin()],
        minimize: true
    },
    plugins:[
        new HtmlWebpackPlugin(
        {
           template: './src/template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'html-loader'
            }
        ]
    }
}