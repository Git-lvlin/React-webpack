# 自主搭建的webpack，再利用webpack搭建React的环境

## CommonJS 问世并引入了 require 机制，它允许你在当前文件中加载和使用某个模块。导入需要的每个模块


## 什么是webpack
* Webpack是一个构建工具（rollup、gulp），是众多流行脚手架的首要选择,也可以构建第三方库
* 可以用webpack独立的搭建vue和react环境
* Webpack是一个打包器（打包工具）：入口  => 过程1 => 过程2  => [...] => 出口
* 在Webpack的眼中，一切文件皆模块（这些模块有助于提高前端开发效率）
* Webpack使用各种loaders和plugins，把各种模块编译打包成浏览器能识别的静态资源。
* webpack 运行在 Node.js 中。
* webpack 遵循 CommonJS 模块规范，可以在配置中使用：通过 require(...) 引入其他文件




## "build": "webpack --config webpack.config.js",
* --config webpack.config.js可以省略
* 如果webpack.config.js改它也要改

## chunkhash
* 如果main.js没有改变，哈希值一直是同一个，不生成新的文件
* 如果改变了main.js,会生成一个哈希值不同的文件
* 为了解决“代码浏览器缓存”导致用户端代码不更新的问题

## plugins
* 把打包好的js文件自动插入到index.html中

## 安装
* html-webpack-plugin  --插件
* cross-env  --运行跨平台设置和使用环境变量的脚本
* webpack-dev-server --开发环境中的热更新
* webpack-merge  --连接数组并合并对象以创建新对象的功能




## serve写法
* "serve": "cross-env NODE_ENV=development webpack serve",


## 通过配置来区分环境变量
* "serve": "cross-env NODE_ENV=development webpack serve --config config/webpack.dev.js",
* "build": "cross-env NODE_ENV=production webpack --config config/webpack.build.js",



##  devtool
* source-map  --合适用生产环境
* inline-source-map   --适合开发环境行号不一致的问题,比如报的是Es5行好错误跟Es6的对不上



## 工具
* babel-loader  -将Es6编译成Es5

## babel
* 是JavaScript的编译器
* 两个核心概念：预设、插件
* 预设：把js领域中主要的语法版本（超级、语法糖）转换成Es5
* plugin(插件):弥补preset无法编译某些细节语法的问题

## babel里面的预设（要搞懂）
* @babel/preset-env
* @babel/preset-flow
* @babel/preset-react
* @babel/preset-typescript
* 搭建Vue环境

## 解决装饰器的插件
* 

## 将css样式抽离出来的插件
* Mini-css-extract-plugin



## 常用的loader
* babel-loader、css-loader、sass-loader、ts-loader
* loader的背后，常常需要安装对应的编译器来编译

## eslit最新写法
* 1、使用eslint-loader，不推荐用
* 2、使用eslint-webpack-plugin插件来集成eslint


## 面试题
* 理解webpack
* 性能优化
* 构建优化

## webpack性能优化（为build服务）
* 1、利用optimization.splitChunks提取公共部分（chunk）
```
-build
    All (129.87 KB)
    116.10f2c9ecb40670682f96.js (127.08 KB)
    app.83d678d031ce271549d5.js (2.79 KB)
```

* 2、mode='production' 本身就是一种优化方案
* 3、使用 uglifyjs-webpack-plugin 压缩 ( 压缩你的 JavaScript )
* 4、剥离CSS、压缩JS、图片优化

## webpack构建优化 ( 为dev服务 )
* 1、利用打包分析工具:webpack-bundle-analyzer (8888端口)
* 2、开启babel-loader缓存( 安装 cache-loader )
```
 请注意：保存和读取这些缓存文件会有一些时间开销，所以请只对性能开销较大的 loader 使用此 loader。
 use: [{
            loader: 'babel-loader',
            // 对babel-loader进行缓存，提升二次构建时的速度
            options: {
                cacheDirectory: true
            }
	  }]
```
* 3、使用'react'别名，减少查找时间
```
     resolve:{
        alias:{//别名
            'react':path.resolve(__dirname,'../node_modules/react/cjs/react.development.js')//构建优化，减少找包的过程
        }
    }
```
* 4、HappyPack ( 开启多线程babel编译构建 )


## 自定义loader
*  所有loader都是函数
*  注意：导出时要转换为字符串
*  module.exports=function(str){
*  const utils=str.replace(/\#/img,'$')
*    return `module.exports=${JSON.stringify(utils)}`
*  }
```
//自定义loaders来处理.txt文件
    {
        test: /\.txt$/,
        use: [
            {  //找到自定义loader的路径
                loader: path.resolve(__dirname, './loaders/custom-loader.js')
            }
        ]
    }
```


## webpack和gulp的区别
1、gulp是工具链、构建工具，可以配合各种插件做js压缩，css压缩，less编译 替代手工实现自动化工作，基于文件流
2、webpack是文件打包工具，可以把项目的各种js文、css文件等打包合并成一个或多个文件，主要用于模块化方案，预编译模块的方案


## webpack常用的loader
1、 babel-loader
2、 cache-loader
3、 css-loader  --加载.css文件
4、 file-loader  --用于加载文件、图片，返回图片的路径 已经过时淘汰了，在最新的webpack5已经废弃
5、 sass-loader
6、 style-loader --是把css样式添加到DOM树中
7、 less-loader   --用于加载.less文件，交给less编译器进行编译
## webpack常用的plugin
1、css-minimizer-webpack-plugin  --压缩css
2、mini-css-extract-plugin  --提取css
3、eslint-webpack-plugin  --集成eslint
4、html-webpack-plugin  --真的生成html5插入到public/index.html
5、uglifyjs-webpack-plugin  --压缩js

## 常用的babel
1、babel-loader 如果检测到文件模块是以.js后缀结尾的，将Es6转Es5
2、@babel/core
3、@babel/preset-env
4、@babel/eslint-parser