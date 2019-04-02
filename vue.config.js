const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');
const path = require('path');
const chainWebpack = require('webpack-chain');
//
// const isProduction = (process.env.NODE_ENV === 'production');
// const isDevelopment = (process.env.NODE_ENV === 'development');


module.exports = {

    configureWebpack: {
        plugins: [
            // new HtmlWebpackPlugin({
            //     minify: {
            //         removeComments: false,
            //         collapseWhitespace: true,
            //         removeAttributeQuotes: true
            //     },
            // }),
            new SkeletonPlugin({
                minify: {
                    // minifyCSS: { level: 2 },
                    removeComments: false,
                    // removeAttributeQuotes: true,
                    // removeEmptyAttributes: false
                },
                pathname: path.resolve(__dirname, './shell'),
                staticDir: path.resolve(__dirname, './dist'),
                routes: ['/', '/foo', '/bar'],
            })
        ]
    },
    // configureWebpack: () => {
    //     if (process.env.NODE_ENV === 'production') {
    //         return{
    //             externals: {
    //                 'IPLAT': 'IPLAT',
    //             },
    //             plugins: [
    //                 new CompressionPlugin({
    //                     test:/\.js$|\.html$|.\css/, //匹配文件名
    //                     threshold: 10240,//对超过10k的数据压缩
    //                     deleteOriginalAssets: false //不删除源文件
    //                 })
    //             ],
    //         }
    //     } else {
    //         return{
    //             externals: {
    //                 'IPLAT': 'IPLAT',
    //             },
    //         }
    //     }
    // },
    // configureWebpack: config => {
    //     config.externals = {
    //         'IPLAT': 'IPLAT',
    //     };
    //     if (isProduction) {
    //         config.plugins = [
    //             new CompressionPlugin({
    //                 test:/\.js$|\.html$|.\css/, //匹配文件名
    //                 threshold: 10240,//对超过10k的数据压缩
    //                 deleteOriginalAssets: false //不删除源文件
    //             })
    //         ];
    //     }
    // },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(opts => {
                opts[0].minify.removeComments = false;
                return opts
            })
    }
};