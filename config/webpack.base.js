//语法基础：CommonJS语法，它必须运行在Node环境

const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')//真的生成html5插入到public/index.html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//提取css

// process 内置API
// console.log('------',process.env.NODE_ENV)
// const NODE_ENV=process.env.NODE_ENV

const webpack=require('webpack')

//在控制台显示编译进度条
const handler = (percentage, message, ...args) => {
  console.info(percentage, message, ...args);
};

//打包分析工具
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//开启多线程babel编译构建
const HappyPack = require('happypack');

const config={
    //这里是生产环境和开发环境都需要的选项配置
}
// if(NODE_ENV==='development') {
// 	config.mode = 'development'
// 	config.devServer = {}
// }else{
// 	config.mode = 'production'
// 	config.plugins.push(new AbcPlugin())
// }

// 封装路径
function resolve(arg){
    return path.resolve(__dirname,'..',arg)
}

module.exports={
    //解决控制台报错时“行号对不住”的问题，比如报的是Es5行好错误跟Es6的对不上
    // devtool:'source-map',

    //用于指定生产打包，还是启动开发环境
    // mode:'production',//生产
    // mode:'development',//开发

    
    //入口(必须要有)
    //第一种写法
    // entry:'./src/main.js',
    //第二种写法
    // entry:path.resolve(__dirname,'./src/main.js'),//绝对路径
    //第三种写法
    entry:{//推荐
        //这里的app名，是给[name]这个变量使用的
        app:path.resolve(__dirname,'../src/main.js')//dist中新生成一个app.js文件
    },

    //出口(必须要有)
    output:{
        //bundle 一束，一捆
        // filename:'bundle.js',//输出名称默认为app，改成bundle.js
        filename:'[name].[chunkhash].js',//推荐使用chunkhash
        // path:'./dist'//不能用相对路径，只能用绝对路径
        path:path.resolve(__dirname,'../dist'),

        // publicpath对于按需加载或加载外部资源（如图片、文件等）来说是个很重要的选项
        // publicpath:'/' //默认'/'
        // publicpath:'http://cdn.com/qf/h5'  //把打包的js文件放到这里
        // publicPath:'./' ,//放到index.html中

        clean: true,//每次打包自动清理/dist文件夹

    },

    //下面两个可有可无
    //loaders
    // 用以定义模块编译的规则
    module:{//模块
        //这里定义一条条规则
        rules:[
            //当webpack进行编译打包时，如果检测到文件模块是以.js后缀结尾的，就使用babel-loader进行加载
            //进一步使用@babel/core,@babel/preset-env进行编译、转译
            { 
                test:/\.(js|jsx)$/, 
                use:[{
                //happypack多线程编译模式
                loader:'happypack/loader',
                // 对babel-loader进行缓存，提升二次构建时的速度
                options:{
                    cacheDirectory: true
                }
              }]},
            //css-loader 加载.css文件
            //style-loader,是把css样式添加到DOM树中
            //当use多个loader时，有先后顺序，先起作用的写在后面
            // { test:/\.css$/, use:['style-loader','css-loader'] },
            // //sass-loader,用于加载.scss文件，交给sacc编译器进行编译
            // //sass编译器会把.scss文件编译成.css文件
            // { test:/\.scss$/,use:['style-loader','css-loader','sass-loader'] },
            //合并
             { test:/\.(css|scss)$/,use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader'] },

            //less-loader,用于加载.less文件，交给less编译器进行编译
            //less编译器会把.less文件编译成.css文件
            //antd官网复制过来的主题颜色配置less        
            { 
                test:/\.less$/,
                use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
                              lessOptions: {
                                    modifyVars: {
                                        'primary-color': '#1DA57A',
                                        'link-color': '#1DA57A',
                                        'border-radius-base': '2px',
                                    },
                                    javascriptEnabled: true,
                            }
                        }
					}
				]   
            },

            //file-loader用于加载文件、图片，返回图片的路径 已经过时淘汰了，在最新的webpack5已经废弃
            //  { test:/\.(png|jpe?g|gif|svg)$/,use:['file-loader'] },

            //最新写法
             { test:/\.(png|jpe?g|gif|svg)$/,type:'asset/resource' },

             //自定义loader
             { 
                 test:/\.txt$/,
                 use:[{
                     //__dirname是当前文件,找到自定义loader的路径
                     loader:path.resolve(__dirname,'./create-loader.js')
                 }] 
             },
             //配置tsx
             { test: /\.(ts|tsx)$/, loader: "ts-loader" }
        ]
    },
    //plugins
    plugins:[//插件集合

        // 该插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle
        // 作用：把打包好的js文件自动插入到index.html中
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html'),
            title:'Hello',//index.html里面的title
            filename:'index.html',//打包到dist里面的index.html
            // publicPath:'assets'
        }),

        //将css抽离出来,放在独立的css文件中
        new MiniCssExtractPlugin({
             attributes: {
                id: 'target',
                'data-target': 'example',
            },
			filename: '[name].[chunkhash].css'
        }),
        //在控制台显示编译进度条
        new webpack.ProgressPlugin(handler),

        //打包分析工具
        new BundleAnalyzerPlugin({
            analyzerPort:8888,
            openAnalyzer:true
        }),

        //开启多线程babel编译构建
         new HappyPack({
            loaders: [ 'babel-loader'],
            threads:3 //多少个线程
        })


        
    ],
    resolve:{
        alias:{//别名
            '@':path.resolve(__dirname,'../src'),//方便找到路径
            
        },
        extensions:['.js','jsx','.ts','.tsx','.json','.vue']//省略后缀
    }
}