const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app.js', 
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        hot: true,
        overlay: true,
        port: 9000
    }
}