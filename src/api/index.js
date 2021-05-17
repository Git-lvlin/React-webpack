import axios from '@/utils/axios'

//get /topics 主题首页
//入参：
// page Number 页数
// tab String 主题分类。目前有 ask share job good
// limit Number 每一页的主题数量
// mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
const Topics=params=>axios({
    url:'https://cnodejs.org/api/v1/topics',
    method:'GET',
    params
})
const Music=params=>axios({
    url:'/soso/fcgi-bin/client_search_cp',
    method:'GET',
    params
})

export default{
    Topics,
    Music
}