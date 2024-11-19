/*const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            /*{ test: /\.(png|jpg|jpeg|gif)$/, 
              use: [
                   {
                       loader: 'file-loader',
                        options: { name: '[name].[ext]', outputPath: 'images/', }, 
                      }
          ]
        }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        contentBase: './dist',
    },
    mode: 'development',
}
*/
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        auth: './src/js/auth.js',
        home: './src/js/home.js',
    },
    output: {
        clean: true,
        filename: './js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/auth.html',
            filename: 'auth.html',
            chunks: ['auth']
        }),
        new HtmlWebpackPlugin({
            template: './src/home.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        
    ]
}