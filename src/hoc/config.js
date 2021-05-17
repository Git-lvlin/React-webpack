import React from 'react'
import img from '@/utils/img'
import dialog from '@/utils/dialog'


export default WrapComponent=>{
    return props=>(  
        <WrapComponent  {...props} dialog={dialog} img={img} />
    )
}