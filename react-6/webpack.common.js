const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: ['./src/index.js', './src/css/style.scss'],
    output: {
        filename: 'js/index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            },
            query: {
                presets: ['es2015']
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
    }
};