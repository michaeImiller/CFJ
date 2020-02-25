const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    // môi trường : development
    mode: 'development',
    
    //  nó sẽ hiển thị lỗi ở đâu (vì khi lỗi nó sẽ hiển thị ở file đã build trong folder dist
    // mà khi build là cú pháp js5 cái ta cần là chính xác lỗi chỗ nào, 
    // đó là lý do bạn nên để 'inline-source-map'
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.scss$/,
            use: [{
               loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            }, 
            {
                loader: 'sass-loader'
            }]
        }
        ]
    },
    watch: true,
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
});