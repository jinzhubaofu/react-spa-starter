/**
 * @file webpack 开发配置
 * @author chenxiao07 <chenxiao07@baidu.com>
 */

'use strict';

const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const config = Object.assign({}, require('./webpack.common'), {

    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8082',
        './src/index.js'
    ],

    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: [
                'react-hot',
                'babel?presets[]=es2015,presets[]=react,presets[]=stage-1&cacheDirectory'
            ],
            exclude: [
                /node_modules/
            ]
        }, {
            test: /\.styl$/,
            loaders: ['style', 'css', 'stylus?paths=node_modules&resolve url']
        }, {
            test: /\.(svg|eot|ttf|woff|jpg|png)(\?.*)?$/,
            loader: 'file?name=asset/[name].[ext]'
        }, {
            test: /\.json(\?.*)?$/,
            loader: 'json'
        }]
    },

    output: {
        path: path.resolve(__dirname, '../asset'),
        publicPath: '/',
        filename: '[name].js'
    },

    cache: true,

    debug: true,

    devtool: 'eval-source-map',

    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require('../asset/inf-manifest.json')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            templateContent: (function () {

                return fs
                    .readFileSync(
                        path.join(__dirname, '../index.html'),
                        'utf8'
                    )
                    .replace(/<!--@inject=([\w._-]+)-->/ig, function ($0, $1) {
                        return `<script src="${$1}"></script>`;
                    });

            })(),
            // 这里可以设定 favicon
            // favicon: 'favicon.ico',
            filename: path.resolve(__dirname, '../asset/index.html'),
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.IgnorePlugin(/regenerator|nodent|js\-beautify/, /ajv/),
        new webpack.IgnorePlugin(/locale/, /moment/)
    ],

    devServer: {
        port: 8082,
        host: '0.0.0.0',
        publicPath: '/',
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true
        },
        inline: true,
        contentBase: path.resolve(__dirname, '../asset'),
        proxy: {
            '/ajax/*': {
                target: 'http://0.0.0.0:8088',
                secure: false
            }
        }
    }
});


module.exports = config;
