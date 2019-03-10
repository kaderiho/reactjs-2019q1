const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    mode: 'production',
    
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()]
});