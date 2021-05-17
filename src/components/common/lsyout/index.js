import React,{useState} from 'react'
import ThemeCtx from '@/utils/theme'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


import YeContent from './YeContent.js'
import YeSider from './YeSider.js'
import YeHeader from './YeHeader.js'

import './style.scss'

export default ()=>{
    //设置展开收缩的声明式变量
    const [collapse,setCollapse]=useState(false)
    return (
        //使用颜色上下文
        <ThemeCtx.Consumer>
        {
            theme=>(
                <div className="admin-layout">
                    <>
                        <Layout>
                        <Sider collapsed={collapse} style={{background:theme.background,color:theme.color}}>
                        {/* 给icon展开收缩组件传递声明式变量和事件 */}
                        <YeSider collapse={collapse} onShrink={ble=>setCollapse(ble)} />
                        </Sider>
                        <Layout style={{background:theme.background,color:theme.color}}>
                            <Header><YeHeader/></Header>
                            <Content>
                            <YeContent/>
                            </Content>
                            <Footer style={{background:theme.background,color:theme.color}}>Footer</Footer>
                        </Layout>
                        </Layout>
                    </>
                </div>
                )
        }
        </ThemeCtx.Consumer>
    )
}


