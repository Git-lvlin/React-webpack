//高阶组件
import React from 'react'

import { point,icp,context,role,config } from '@/hoc'

//已经用不到了，过时了
// import { withRouter } from ''

//写法一：在class组件使用高阶组件
// class HocComponent extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>高阶组件</h1>
//             </div>
//         )
//     }
// }

// // 加了{...this.props}之后不用考虑顺序
// export default context(icp(point(HocComponent)))

//写法二：无状态组件写法
// export default context(icp(point(props=>{
//      return (
//             <div>
//                 <h1>高阶组件</h1>
//             </div>
//         )
// })))


//写法三：装饰器写法
//eslint读取不到@，要安装@babel/eslint-parser
@context
@icp
@point
@role(['admin','editor'])//权限管理
@config
class HocComponent extends React.Component{
    handle(){
        let { role,dialog }=this.props
        console.log('role',role)
        dialog.alert({title:role})
    }
    render(){
        console.log('this',this)
        return (
            <div>
                <h1>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</h1>
                <button onClick={()=>this.handle()}>元素级别的权限管理</button>
            </div>
        )
    }
}
export default HocComponent
