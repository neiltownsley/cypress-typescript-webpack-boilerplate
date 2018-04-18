module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'ts-loader',
                }],
            },
        ],
    },
};