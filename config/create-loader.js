//自定义loader
module.exports=function(str){
    const utils=str.replace(/\#/img,'$')
    return `module.exports=${JSON.stringify(utils)}`
}