import React from 'react'
import routes from '@/views'
import { Route,Switch,Redirect} from 'react-router-dom'


//所有路由规则组件
export default ()=>{
    //对所有拥有路由规则的组件进行遍历（路由规则）
    //利用递归对所有嵌套组件进行遍历
    const renderRoutes=()=>{
        const list=[]
        const recursion=arr=>{
            arr.map(ele=>{
                //Route不能被div包裹，会报错
                list.push(
                    <Route key={ele.id} path={ele.path} component={ele.component}/>
                )
                ele.children&& recursion(ele.children)
            })
        }
       routes.map(ele=>(
        ele.children && recursion(ele.children)
        ))
        return list
    }
    return (
        <div className="L-content">
          <Switch>
            {renderRoutes()}
                {/* 重定向 */}
                <Redirect from="/*" to="/"/>
          </Switch>
        </div>
    )
}