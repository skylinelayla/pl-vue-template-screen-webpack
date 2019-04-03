/**
 * @file vue-loader的配置
 * @author {{ author }}
 */
'use strict';
const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';
const sourceMapEnabled = isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap;

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction
    }),
    postcss: [
        require('autoprefixer')({
            browsers: [
                'last 50 versions',
                'ie >= 9'
            ]
        })
    ],
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    transformToRequire: {
        video: [
            'src',
            'poster'
        ],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
};
