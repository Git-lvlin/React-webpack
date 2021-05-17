//为开发环境所配置的选项

// module.exports={
//     mode:'development'
// }
// const { merge }=require('webpack-merge')//merge连接数组并合并对象以创建新对象的功能
// const base=require('./webpack.base.js')//导入公共部分
const path=require('path')
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports={
    //用于指定是开发环境
    mode:'development',
    //解决控制台报错时“行号对不住”的问题，比如报的是Es5行好错误跟Es6的对不上
    devtool:'inline-source-map',
    devServer:{//最新命令为webpack serve
        port:8000,
        //开启热更新(HMR)
        //热更新只对main.js入口文件之后的依赖文件起作用
        //热更新实际上开启了一台socket服务器,当代码发生变化时，通知客户端socket进行更新
        hot:true, 
        open:true,
        //用于指定静态资源目录(本地服务器)
        contentBase:path.resolve(__dirname,'../public'),
        // 当程序报错时，把错误信息覆盖到视图层之上
		overlay: true,
        //QQ音乐代理
        proxy:{
            '/soso':{
                target:'https://c.y.qq.com',
                changeOrigin:true
            }
        }

    },
    module:{
        rules:[
            //项目运行时，eslint-loader加载.js/.jsx文件,交给eslint进行代码检测
            // { 
            //     test:/\.(js\jsx)/,
            //     use:['eslint-loader'],
            //     enforce:'pre',  //前置
            //     //忽略node_modules
            //     exclude:/node_modules/
            // }
        ]
    },
    plugins:[//eslint
        new ESLintPlugin({
            //忽略node_modules包
            exclude:'node_modules'
        }),
        
    ],
    resolve:{
        alias:{//别名
            'react':path.resolve(__dirname,'../node_modules/react/cjs/react.development.js')//构建优化，减少找包的过程
        }
    }
}