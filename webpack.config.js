const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }  
        ]
    },
    plugins: [
        new Dotenv()
    ],
    devServer: {
        contentBase: './dist'
    }
}