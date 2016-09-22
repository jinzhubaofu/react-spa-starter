/**
 * @file webpack 构建配置
 * @author chenxiao07 <chenxiao07@baidu.com>
 */

'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

const config = Object.assign({}, require('./webpack.common'), {

    entry: {
        index: ['./src/index.js'],

        // 基础库
        inf: [
            'react',
            'react-dom',
            'react-motion',
            'react-addons-update',
            'ei',
            'numen/HashLocator',
            'melon/Button',
            'melon/Card',
            'melon/Select',
            'melon/Progress',
            'melon/Slider',
            'melon/Zippy',
            'melon/BoxGroup',
            'melon/Pager',
            'melon/SnackBar',
            'melon/Toggle',
            'melon/Alert',
            'melon/Confirm',
            'melon/Dialog',
            'melon/TextBox',
            'melon/Link',
            'melon/Title',
            'melon/Tooltip',
            'melon/Uploader',
            'melon/Table'
        ]
    },

    output: {
        path: 'output',
        filename: 'asset/[name].[chunkhash:8].js'
    },

    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel',
            include: /src|dep\/melon.*?/,
            exclude: /node_modules/,
            query: {
                presets: [
                    ['es2015', {loose: true}],
                    'react',
                    'stage-1'
                ],
                plugins: [
                    ['transform-runtime', {polyfill: false, regenerator: false}]
                ]
            }
        }, {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract('style-loader', [
                'css-loader',
                'stylus-loader?paths=node_modules&resolve url'
            ])
        }, {
            test: /\.(svg|eot|ttf|woff|jpg|png)(\?.*)?$/,
            loader: 'file?name=asset/[name].[hash:8].[ext]',
            publicPath: 'asset'
        }, {
            test: /\.json(\?.*)?$/,
            loader: 'json'
        }]
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('[name].[contenthash:8].css'),
        new HtmlWebpackPlugin({
            inject: true,
            templateContent: (function () {

                return fs
                    .readFileSync(
                        path.join(__dirname, '../index.html'),
                        'utf8'
                    )
                    .replace(/<!--@inject=([\w._-]+)-->/ig, '');

            })()
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.BannerPlugin('2016 Baidu Inc. All Rights Reserved'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
});


module.exports = config;
