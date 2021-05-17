//组件懒加载
import loadble from '@loadable/component'
import React from 'react'


const Hooks=loadble(()=>import('./study/Hooks'))
const Todolist=loadble(()=>import('./study/Todolist'))
const Cnode=loadble(()=>import('./study/Cnode'))
const HocComponent=loadble(()=>import('./study/HocComponent'))
const Types=loadble(()=>import('./study/Types'))
const Broup=loadble(()=>import('./study/Broup'))
const FormComponent=loadble(()=>import('./study/FormComponent'))

const RouterHook=loadble(()=>import('./router/RouterHook'))
const UserDetail=loadble(()=>import('./router/UserDetail'))
const Echart=loadble(()=>import('./canvas/Echart'))
const mobxComponent=loadble(()=>import('./mobx/mobxComponent'))
const TodoList2=loadble(()=>import('./mobx/TodoList2'))
const Typets=loadble(()=>import('./ts_study/Test'))




//导入icon
//引入jsx元素一定要导入React
import {
    FileMarkdownOutlined,
    HourglassOutlined,
    BarChartOutlined
  } from '@ant-design/icons';



export default[
    {
        id:1,
        text:'项目作业',
        icon:<FileMarkdownOutlined />,
        children:[
            {id:101,text:'音乐播放列表',path:'/hooks',component:Hooks},
            {id:102,text:'Todolist',path:'/todolist',component:Todolist},
            {id:103,text:'Cnode',path:'/cnode',component:Cnode}
        ]
    },
    {
        id:2,
        text:'基础组件练习',
        icon:<HourglassOutlined />,
        children:[
            {id:201,text:'高阶组件',path:'/hoc',component:HocComponent},
            {id:202,text:'数据类型检查',path:'/types',component:Types},
            {id:203,text:'组合',path:'/broup',component:Broup},
            {id:204,text:'表单',path:'/form',component:FormComponent}, 
        ]
    },
    {
        id:3,
        text:'路由',
        icon:<HourglassOutlined />,
        children:[{
            id:301,
            text:'路由跳转',
            path:'/router/hooks',
            component:RouterHook,
            children:[
             {id:3001,text:'用户详情', path:'/detail/:id',component:UserDetail}//动态路由，路由传参}
            ]
        }]          
    },
    {
        id:4,
        text:'图表',
        icon:<BarChartOutlined />,
        children:[
            {id:401,text:'Echart图表',path:'/echart',component:Echart},
        ]
    },
    {
        id:5,
        text:'状态管理',
        icon:<BarChartOutlined />,
        children:[
            {id:501,text:'mobxComponent',path:'/mobx',component:mobxComponent},
            {id:502,text:'todolist2',path:'/todo',component:TodoList2},
        ]
    },
    {
        id:6,
        text:'Ts学习',
        icon:<BarChartOutlined />,
        children:[
            {id:601,text:'ts',path:'/ts',component:Typets},
        ]
    },

]