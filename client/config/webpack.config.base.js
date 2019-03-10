const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * Build plugins;
 */
const htmlPlugin = new htmlWebpackPlugin({
    template: "./src/index.html"
});
const MiniCSSExtrancPlugin = new MiniCssExtractPlugin({});

module.exports = {
    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[{
                    loader: "babel-loader",
                    options: {
                        babelrc: false,
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    IE: 11
                                }
                            }],
                            ['@babel/preset-react']
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }]
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            /**
             * File loader.
             * Allows to import images.
             * This will emit file.png as a file in the output directory and returns the public URI of the file.
             * 
             * See: https://www.npmjs.com/package/file-loader
             */
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },

    optimization: {
        /**
         * Turn on tree-shaking for dead code;
         * 
         * The "sideEffects" in package.json value should contains files that should not be removed during shaking;
         */
        usedExports: true
    },

    plugins: [
        MiniCSSExtrancPlugin,
        htmlPlugin
    ]
};