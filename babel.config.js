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
        ["module-resolver", {
            "alias": {
                'components': "./client/src/components",
                'shared': "./client/src/shared",
                'pages': "./client/src/pages",
                'utils': "./client/src/utils",
                'store': "./client/src/store",
                'hoc': "./client/src/hoc",
                'api': "./client/src/api"
            }
        }],
        [
        "babel-plugin-transform-require-ignore",
            {
                "extensions": [".scss"]
            }
        ],
        ["@babel/transform-runtime"]
    ];

    return {
        presets,
        plugins
    }
}