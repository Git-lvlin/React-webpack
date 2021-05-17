
import {makeObservable,observable,action} from 'mobx'

import  api  from '@/api'


export default class MusicStore{
    constructor(){
        makeObservable(this,{
            list:observable,
            updateList:action
        })
    }
    list=[]
    updateList(payload){
        //调用接口
        // this.list=this.fetch(payload)
        api.Music(payload).then(res=>{
        this.list=res.song.list
        })
    }
    //另一种写法
    // async fetch(params){//调用接口方法
    //     const res=await Music(params)
    //     return res
    // }
}