const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    mode: 'development',

    devtool: 'eval-source-map',
    
    devServer: {
        contentBase: 'client',
        port: 3000
    }
});