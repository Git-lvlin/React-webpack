import React from 'react'
import routes from '@/views'
import { NavLink} from 'react-router-dom'

import {  Menu } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  } from '@ant-design/icons';

//按需导入
import { config } from '@/hoc'


//左侧菜单组件
export default config(props=>{
    //路由导航链接
    const renderLink=()=>{
        return routes.map(ele=>(
            // <div key={ele.id}>
            //     <NavLink to={ele.path}>{ele.text}</NavLink>
            // </div>
            
            <SubMenu key={ele.id} title={ele.text} icon={ele.icon}>
                {
                    // 可以更健壮,没有children时不会报错
                    ele.children&&ele.children.map(ele=>(
                        <Menu.Item key={ele.id}>
                            <NavLink to={ele.path}>{ele.text}</NavLink>
                        </Menu.Item>
                    ))
                }
            </SubMenu>
        ))
    }

    return (
        <div className="L-sider">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            theme="dark"
        >
          {renderLink()}
        </Menu>

        {/* 展开收缩icon组件 */}
        {/* <Shrink collapse={collapse} onShrink={bel=>onShrink(bel)} /> */}
        {/* {...props}接收父组件传过来的声明式变量和事件 */}
        <Shrink {...props} />
        
       
        </div>
    )
}
)


const Shrink=props=>{
    let { collapse,onShrink }=props
    return (
        <div className="ye-Shrink">
            {
                collapse? <MenuFoldOutlined onClick={()=>onShrink(false)}/>
                        : <MenuUnfoldOutlined onClick={()=>onShrink(true)}/>
            }
        </div>
    )
}