const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        app: './src/index.js'
    },
    // output: {
    //     filename: '[name].bundle.js',
    //     path: path.resolve(__dirname, 'dist'),
    // },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
}