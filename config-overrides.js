/* config-overrides.js */
const path = require('path');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    console.log("Overriding!");
    config.module.rules.push(
        {
            test: /\.module\.css$/,
            use: [
                'graphql',
                {
                    loader: require.resolve('graphql'),
                    // options: {
                    //     modules: true,
                    //     importLoaders: 1,
                    //     localIdentName: '[local]___[hash:base64:5]'
                    // }
                }
            ],
            include: path.resolve(__dirname, '../node-modules/graphql'),
        }
    )
    return config;
}