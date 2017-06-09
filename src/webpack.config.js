var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
    entry: path.join(__dirname, "js/index.js"),
    output: {
        path: path.join(__dirname, "../public"),
        filename: "js/index.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader", "postcss-loader"]
                // use: ["css-loader", "sass-loader" ]
            }) //把 css 抽离出来生成一个文件
        }],
    },
    resolve: {
        alias: {
            // jquery: path.join(__dirname, "js/lib/jquery-2.0.3.min.js"),
            // mod: path.join(__dirname, "js/mod"),
            // less: path.join(__dirname, "less")
        }
    },
    plugins: [

        new ExtractTextPlugin("css/index.css"),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer(),
                ]
            }
        })

    ]
};