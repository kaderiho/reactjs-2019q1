const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    mode: 'development',

    devtool: 'source-map',

    module: {
        rules: [
            {
                /**
                 * Pipeline for inserting CSS into the page
                 * 
                 * Sass loader: compiles SASS to CSS, using Node Sass
                 * CSS loader: Translates CSS into CommonJS (interprets @import and url())
                 * Style loader: Creates style nodes from JS strings
                 */
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    
    /**
     * Configure devServer for development
     * 
     * Allows to turn on HMR during development and immidiatly see changes in a browser
     */
    devServer: {
        contentBase: 'client',
        open: true,
        hot: true,
        port: 3000
    }
});