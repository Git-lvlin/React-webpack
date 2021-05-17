//入口文件
// console.log('我是入口文件')
// console.log('我是改变的入口文件')

// console.log('验证热更新')


// import './utils/dom.js' //直接导入js使用
// import './assets/style.css' 
import './assets/cnode.css' 
// import './assets/broup.css' 







// import './assets/common.scss' //导入scss

//凡是用到jsx语法的地方都要引入React
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//antd
import { DatePicker } from 'antd';
import 'antd/dist/antd.less'; // or 'antd/dist/antd.less'


//react组件的实例化
// const ele=<App /> //jsx语法

ReactDOM.render(<App><DatePicker /></App>, document.getElementById('box'),document.getElementById('admin-layout'))
