/**
 * Created by surui on 2016/5/20.
 */
var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack'),
    LiveReloadPlugin = require('webpack-livereload-plugin');

var PATH = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}


module.exports = {
    devtool:'eval',
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:3000/',
            'webpack/hot/only-dev-server',
            './app/index.js'
        ]
    },
    output: {
        path: PATH.build,
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'es6'],
        root: path.resolve('./')
    },

    plugins:[
        new LiveReloadPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './app/template.html',
            // favicon: './webapp/app/icon.jpg',
            inject: 'body',
            // minify: {    //压缩HTML文件
            //     removeAttributeQuotes: true,
            //     removeComments: true,    //移除HTML中的注释
            //     collapseWhitespace: true    //删除空白符与换行符
            // }
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.less/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
            {
                test: /.*\.(gif|png|jpg|jpeg|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
        ]
    }
}