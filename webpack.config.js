const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = (env) => {
    const isDev = env && env.mode === 'development';
    const mode = isDev ? 'development' : 'production';
    const config = {
        mode: mode,
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            rules: [{
                test: /\.js|jsx$/, use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                    },
                }, exclude: /node_modules/
            },

            {
                test: /\.css$/i,
                use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            },],
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
            isDev && new webpack.ProgressPlugin(),
            !isDev && new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css/',
                chunkFilename: 'css/[name].[contenthash:8].css/',
            })
        ],
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? {
            compress: true,
            port: 3000,
            open: true,
            historyApiFallback: true,
        } : undefined
    }

    return config
}