const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    mode: 'development',

    devtool: 'eval-source-map',

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    
    devServer: {
        contentBase: 'client',
        port: 3000
    }
});