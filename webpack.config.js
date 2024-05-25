const million = require('million/compiler');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require("webpack")

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [million.webpack({ auto: true }),
    new Dotenv({
        path: "./.env",
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new ESLintPlugin({
        // Plugin options
        extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    ],
};
