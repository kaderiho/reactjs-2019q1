module.exports = function (api) {
    api.cache(true);

    const presets = [['@babel/preset-env', {
        targets: {
            IE: 11
        }
    }],
    ['@babel/preset-react']];

    const plugins = [
        "@babel/plugin-proposal-class-properties",
        "react-hot-loader/babel"
    ];

    return {
        presets,
        plugins,
        env: {
            test: {
                presets
            }
        }
    }
}