const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    /**
     * Entry application point
     */
    entry: {
        app: './src/index.js'
    },

    /**
     * Bundle output for predefined entry
     */
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.[hash].js'
    },

    module: {
        rules: [
            /**
             * Define loader for .js files
             * 
             * Transpile .js files by babel using preset-env/preset-react
             * Allowed to use class properties and HMR during development
             */
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
                            "@babel/plugin-proposal-class-properties",
                            "react-hot-loader/babel"
                        ]
                    }
                }]
            },

            /**
             * File loader
             * 
             * This will emit file.[extension] as a file in the output directory and returns the public URI of the file
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

    plugins: [
        new htmlWebpackPlugin({
            title: 'ReactJS global mentoring application.',
            template: "./src/index.html"
        })
    ]
};