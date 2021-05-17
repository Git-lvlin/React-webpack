//为生产环境配置选项

// const { merge }=require('webpack-merge')//merge连接数组并合并对象以创建新对象的功能
// const base=require('./webpack.base.js')//导入公共部分
//压缩js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//压缩css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports={//合并配置对象
    //用于指定是生产环境
    mode:'production',//默认压缩
    devtool:'source-map',
    optimization:{
         splitChunks:{
            //  设置为 all 可能特别强大，因为这意味着 chunk 可以在异步和非异步 chunk 之间共享。
             chunks:'all'
         },
          minimizer: [
              //压缩js
              new UglifyJsPlugin(),
              //压缩css
              new CssMinimizerPlugin()
            ]
    }
}