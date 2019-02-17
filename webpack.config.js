const path = require('path');
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    entry: path.join(__dirname, '/src/index.ts'),
    mode: 'development',
    plugins: [
        new DashboardPlugin()
    ],
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    output: {
        filename: 'index.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};