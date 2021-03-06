var path = require("path"),
    HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        controller: path.resolve(__dirname, "./src/javascript/controller.js"),
        app: [
            path.resolve(__dirname, "./src/javascript/app.js"),
            path.resolve(__dirname, "./src/javascript/ng-app.js"),
            path.resolve(__dirname, "./node_modules/angular/angular.js"),
            path.resolve(__dirname, "./node_modules/angular-aria/angular-aria.js"),
            path.resolve(__dirname, "./node_modules/angular-animate/angular-animate.js"),
            path.resolve(__dirname, "./node_modules/angular-material/angular-material.js"),
            path.resolve(__dirname, "./node_modules/angular-material/angular-material.css"),
            path.resolve(__dirname, "./src/styles/main.css")
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    headers: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "controller.html",
            template: "./src/html/controller.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: "app.html",
            template: "./src/html/app.html",
            inject: false
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4000,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
};
