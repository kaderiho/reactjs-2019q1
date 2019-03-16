const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    /**
     * TerserPlugin is used by default for minification JS.
     * See: https://webpack.js.org/plugins/terser-webpack-plugin/
     */
    mode: 'production',
    
    devtool: 'source-map',

    module: {
        rules: [
            {
                /**
                 * MiniCssExtractPlugin
                 * 
                 * Allows to extract CSS into output file and enject into HTML file
                 */
                test: /\.(sa|sc|c)ss$/,
                use: [
                    
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    optimization: {
        /**
         * Turn on tree-shaking for dead code
         * 
         * The "sideEffects" in package.json value should contains files that should not be removed during shaking
         */
        usedExports: true
    },

    plugins: [new MiniCssExtractPlugin()]
});