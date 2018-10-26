const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let fs = require('fs');

const header = fs.readFileSync(__dirname + '/src/templates/header.html');
const footer = fs.readFileSync(__dirname + '/src/templates/footer.html');

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/about.js',
        contacts: './src/contacts.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: "html-loader", options: { minimize: true } }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(pug|jade)$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(png|jpe?g)/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "./img/[name].[ext]",
                            limit: 10000
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            title: 'main',
            myPageHeader: 'Main',
            chunks:['index'],
        }),
        new HtmlWebPackPlugin({
            template: "./src/about.html",
            filename: "./about.html",
            title: 'about',
            myPageHeader: 'About',
            chunks:['about']
        }),
        new HtmlWebPackPlugin({
            template: "./src/contacts.html",
            header:(__dirname + '/src/templates/header.html'),
            footer:(__dirname + '/src/templates/footer.html'),
            title:'contacts',
            filename: "./contacts.html",
            myPageHeader: 'contacts',
            chunks:['contacts']
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};