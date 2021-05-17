const { merge }=require('webpack-merge')//合并
const base=require('./webpack.base.js')//导入公共部分
const build=require('./webpack.build.js')//生产打包
const dev=require('./webpack.dev.js')//开发

// process 内置API
//用来获取是开发环境还是生产环境
const NODE_ENV=process.env.NODE_ENV

module.exports=()=>{
    if(NODE_ENV=='development'){//判断是开发环境还是生产环境
        return merge(base,dev)
    }else{
        return merge(base,build)
    }
}

