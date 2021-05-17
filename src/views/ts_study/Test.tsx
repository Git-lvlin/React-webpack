import React from 'react'

interface Protype{
    msg:string|number
}

const Child=(props:Protype)=>{
    let {msg}=props
    return(
        <div>
            <h2>我是子组件</h2>
            <h2>{msg}</h2>
        </div>
    )
}


export default ()=>{
    return(
        <div>
            <h1>测试Typescript学习</h1>
            <Child msg={123}/>
        </div>
    )
}