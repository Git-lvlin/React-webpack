//语法基础：CommonJS语法，它必须运行在Node环境

const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')//引入插件

// process 内置API
console.log('------',process.env.NODE_ENV)
const NODE_ENV=process.env.NODE_ENV

const config={
    //这里是生产环境和开发环境都需要的选项配置
}

module.exports={
    //解决控制台报错时“行号对不住”的问题，比如报的是Es5行好错误跟Es6的对不上
    devtool:'source-map',

    //用于指定生产打包，还是启动开发环境
    // mode:'production',//生产
    mode:'development',//开发

    
    //入口(必须要有)
    //第一种写法
    // entry:'./src/main.js',
    //第二种写法
    // entry:path.resolve(__dirname,'./src/main.js'),//绝对路径
    //第三种写法
    entry:{//推荐
        //这里的app名，是给[name]这个变量使用的
        app:path.resolve(__dirname,'./src/main.js')//dist中新生成一个app.js文件
    },


    //出口(必须要有)
    output:{
        //bundle 一束，一捆
        // filename:'bundle.js',//输出名称默认为app，改成bundle.js
        filename:'[name].[chunkhash].js',//推荐使用chunkhash
        // path:'./dist'//不能用相对路径，只能用绝对路径
        path:path.resolve(__dirname,'./dist'),

        // publicpath对于按需加载或加载外部资源（如图片、文件等）来说是个很重要的选项
        // publicpath:'/' //默认'/'
        // publicpath:'http://cdn.com/qf/h5'  //把打包的js文件放到这里
        // publicPath:'./' ,//放到index.html中

        clean: true,//每次打包自动清理/dist文件夹

    },

    //下面两个可有可无
    //loaders
    module:{//模块
        rules:[]//很多规则
    },
    //plugins
    plugins:[
        //作用：把打包好的js文件自动插入到index.html中
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./public/index.html'),
            title:'Hello',//index.html里面的title
            filename:'index.html',//默认值
        })
    ],
    devServer:{//最新命令为webpack serve
        port:8000,
        //开启热更新(HMR)
        //热更新只对main.js入口文件之后的依赖文件起作用
        //热更新实际上开启了一台socket服务器,当代码发生变化时，通知客户端socket进行更新
        hot:true, 
        open:true,
        //用于指定静态资源目录(本地服务器)
        contentBase:path.resolve(__dirname,'./public')
    }
}