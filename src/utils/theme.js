import React from 'react'

//创建上下文
const ThemeCtx=React.createContext()

const themes=[
    {
        color:'black',
        background:'white'
    },
    {
        color:'white',
        background:'blue'
    },
    {
        color:'#000',
        background:'red'
    },
]

export { themes }


export default ThemeCtx