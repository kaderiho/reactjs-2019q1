module.exports = function (api) {
    api.cache(true);

    const presets = [
        ['@babel/preset-env', {
            targets: {
                ie: 11
            }
        }],
        ['@babel/preset-react']
    ];

    const plugins = [
        "@babel/plugin-proposal-class-properties",
        ["@babel/transform-runtime"]
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