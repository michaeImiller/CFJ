const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        },
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
        },
        { 
            test: /\.png$/, loader: "url-loader?mimetype=image/png" 
        }
        ]
    },
        plugins: [
            new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};