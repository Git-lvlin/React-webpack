## React(典型的MVVM框架)
## 技术栈
### 三架马车
* 1、class类组件、函数式组件Hooks / Facebook
* 2、React-Router / React-Rranning
* 3、Flux / facebook=>Mobx-Redux (状态管理)

## 
* Ant-Design /Antd-Mobile

## 面试题
* 在 React 应用程序中,组合组件形式，不是继承
* 


## create-react-app
* dva
* umi

## js语法
* Es6 / TypeScript


## JSX
* JSX=Javascript+XML,这是一种语法糖
* JSX语法，是可选的，但是React建议使用
* JSX语法，浏览器不支持，使用@babel/preset-react进行编译
* JSX元素，是对象，也是变量，是表达式，不是字符串
* JSX可以任意嵌套，语法是使用 { } 包裹jsx子元素
* JSX中可以用 {/* 注释 */}
* 在JSX中，可以使用表达式，也是使用 { } 包裹
* JSX的动态元素，也要使用 { } 包裹
* 在JSX中，有三个属性：className(class),htmlFor(for),tabIndex(tabindex)
* 在JSX中，新增属性：key,ref,dangerouslySetInnerHTML
* JSX可防 注入攻击（XSS)
* Babel会把JSX转译成React.createElement调用
* JSX支持属性展开语法 <Child {...obj}/>
* 布尔类型、Null以及Undefined在JSX中会被忽略，不能当做文本进行渲染
* JSX是不可变对象,当JSX元素需要更新时，我们的做法生成新JSX对象，使用render方法重新执行并渲染
* jsx重新生成，render重新调用(this.setState()会修改声明式变化，一旦声明式变量发生变化，React系统会生成新JSX对象，对应生成新虚拟DOM，进而触发diff运算，找出两个虚拟DOM变化的最小差异，最后把这个最小差异render（渲染）到DOM上)

## 组件
* 自定义组件必须以大写字母开头
* 组件是类，类的实例是元素(<>包裹的)
* React组件实例化后，得到JSX元素
* - 1、类组件
* - 2、函数式组件（无状态组件，纯组件，PureComponent）
* 两种组件的区别：
* - 1、类组件：要用class关键字来定义，它有state状态，有生命周期，有this，有ref，有执行上下文。缺点：运行速度相对较慢，性能较差
* - 2、函数式组件：默认啥都没有，也就是是默认没有类组件那些特性。好处：运行速度较快，性能更好。（使用Hooks（v16.8）可以模拟出像类组件一样的众多特性）

## 元素渲染
* ReactDOM.render只会更新它需要更新的部分（相对于背后有虚拟dom和diff运算）

## 进一步理解props
* 1、在React开发中，props的作用远远比state更强大
* 2、在类组件和函数式组件中，都默认有props
* 3、props是父子组件之间的通信的纽带
* 4、props是不能修改的，因为React函数式组件使用是纯函数，纯函数的特点是入参不能修改
* 5、props可以传递任何数据类型，还可以传递事件函数，JSX元素
* 6、props和state不能交叉赋值，就是不能相互赋值,本质上没有任何关联
* 7、在最新的React中，props验证是由一个第三方库props-types来实现的
```js
// 不能修改props，所以深复制一下
		const copyTheme=JSON.parse(JSON.stringify(theme))
```


## 进一步理解state
* 1、state是声明式变量，它被this.setState()修改时，会生成一个新的虚拟dom，并触发diff运算，并更新dom视图
* 2、state定义发生在构造器中，但是在构造器中不能使用this.setState()
* 3、要想改变视图，一定要使用this.setState()来修改state
* 4、在React中，可以直接修改state，但是不会触发diff运算,视图不会更新
* 5、重要原则：当我们修改state时，一定要考虑是否由旧值计算而来，如果是建议使用this.setState(fn)的方式进行修改；如果不是，可以使用this.setState({ count })
* 6、this.setState()这个方法是异步的。但是在定时器的内部使用是同步的
* 7、this.setState({},fn),当setState()这个异步操作完成时，第二个回调函数中可以拿到最新的state( 类似于监听器 )
* 8、当多个this.setState()一起调用时，会被React自动合并成一个setState()操作，触发一次diff运算,一次render（）
* 9、state是当前组件实例的私有数据，state数据可向子元素传递，不能反向传递，被称为--- “ React单向数据流 ”

## 类组件的事件绑定
* 1、所有的事件属性名，都要求是小驼峰命名法，并且一on开头
* 2、键盘事件：onKeyUp={} 鼠标事件：onMouseEnter={}
* 3、如果采用Es5方式绑定事件处理器，一定要使用.bind()改变this指向
* 4、如果采用Es6的方式绑定事件处理器，不再考虑改变this指向问题（箭头函数）
* 5、Es5的方式绑定事件，事件处理器的最后一个参数永远都是事件对象
* 6、采用Es6的方式绑定事件，需要显示地（手动）传递事件对象，否则拿不到
* 7、无论是Es5还是Es6，要想阻止默认事件` ev.preventDefault()`,阻止事件传播`ev.stopPropagation()`
* 8、如果想监听键盘事件，滚轮事件，都要通过事件对象来处理
* 9、React事件绑定支持自定义传参，可以传递任何JS数据类型
* 10、自定义事件，也要遵从onMyEvent的事件命名方式

## 列表渲染
* 1、列表渲染的语法基础：JSX支持数组渲染（数组中的元素可以是基本数据类型）
* 2、当被渲染列表需要数据处理时，常常建议封装自定义render方法来渲染列表
* 3、列表渲染一定要加key（JSX支持数组渲染，一定要加key，key要加数组中的元素之上）
* 4、列表渲染，React官方建议使用map(),但map不是强制的
* 5、当我们进行map渲染数组时，对原数组进行处理，是一种浅复制,多个地方用到会相互干扰


## 生命周期
* 第一阶段：装载阶段（3）constructor/render/componentDidMount
* 第二阶段：更新阶段（2）[shouldComponentUpadte]/render/componentDidUpdate
* 第三阶段：卸载阶段（1）componentWillUnmount

## 条件渲染
* 1、使用 && / ! 实现单条件渲染，相对于vue中v-if
* 2、使用三目运算符 实现条件渲染 相对于vue中 v-if/v-else
* 3、使用if/switch,实现多条件渲染 相对于vue中 v-if/v-else-if/v-else
* 4、使用动态class/style实现条件渲染 


## 表单
* 1、受控表单:指的是表单的value/change属性由state控制
* 2、非受控表单：指的是表单的value/checked属性不由state控制
* 原则：在React开发中尽可能地使用受控表单，但有一个列外<input type="file"/>


## 状态提升（是一种理念）
* 解决多个组件之间数据共享的问题
* 找到这几个组件的最近的父组件，把需要共享的状态数据定义在父组件中
```js
import React from 'react'

//要发送数据的组件
class TChild extends React.Component{
     constructor(props){
        super(props)
        this.state={
            t:0 //传给父组件的数据
        }
    }
    change(e){
        let { onChange }=this.props
        console.log(e)
        this.setState({t:e.target.value},()=>{
            //因为是异步的，所以要在回调函数里把值传给父组件
            // this.props.onChange(this.state.t)
            //摄氏度转为华氏温度
            let celsius=Number((this.state.t * 9 / 5) + 32)
            //可以解决父组件没有给事件的问题
            onChange && onChange(celsius)
        })
        
    }
    render(){
        let { t }=this.state
        return(
        <div>
            <h3>摄氏温度：</h3>
            <input
                type="text"
                value={t}
                onChange={e=>this.change(e)}
            />
        </div>
    )
    }
}
//要接收数据的组件
const Fchild=props=>(//接收TChild传给父组件，再由父组件传过来的数据的组件
    <div>
        <h1>华氏温度：</h1>
        <p>{props.tf}</p>
        <hr/>
    </div>
)

const Uncle=props=>{
    return (
        // <Fchild tf={props.tf}/>
        //更灵活的写法
        <Fchild {...props}/>
    )
}
//要保存共享状态数据的父组件
export default class StateLift extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tf:0  //根据状态提升的理念，需要共享的状态
        }
    }
    change(e){
        //e表示子组件传过来的数据
        console.log('TChild传过来的数据',e)
        this.setState({tf:e})
    }
    render(){
        let { tf }=this.state
        return (
            <div>
              <h1>状态提升</h1>
            <hr/>
            <TChild onChange={(e)=>this.change(e)} />
            <hr/>
            {/* <Fchild tf={tf}/> */}
            <Uncle tf={tf} />
            </div>
            
        )
    }
}
```

## 组合 vs 继承
* 组合和继承都是组件复用的一种思想
* 但是React官方推荐使用组合来实现组件复用
* 组合的语法基础,使用props.children 和 render props（自定义属性可以传递React元素）
* 用到的地方：自定义弹窗


## 上下文
* 1、自上而下地向组件树中注入数据
* 2、注意：上下文的消费者（实际上就是那些被上下文包裹的组件）中不能修改上下文
* 使用上下文：
* 1、使用React.createContext()创建上下文
* 2、使用上下文对象上的<Provider value={theme}></Provider>组件，向React组件树注入数据
* 3、使用上下文对象上的<Consumer>{()=>()}</Consumer>组件，使用上下文数据
* // 上下文在哪些第三库中会用到呢？React-Router，Mobx，Redux

## 高阶组件
* 1、高阶组件本质上是一个纯函数(唯一的输入得到唯一的输出)
* 2、作用：也被称为容器组件，是用于来修饰装饰UI组件
* 3、语法：hocFn(UIComponent){return NewUIComponent} 属性继承
* 4、高阶组件接收一个UI组件（React）作为入参，返回一个新的UI组件（React）
* 4、使用原则：一个高阶组件，一般只复用一个可以复用的逻辑
* 5、 {...this.props}解决一个组件被多个高阶组件修饰覆盖的问题,保留props
```js
//高阶组件
import React from 'react'
//高阶组件（高阶函数）接收一个UI组件(React) 作为入参
//roleArr相当于@role(['admin','editor'])里面的数组
export default roleArr=>WrapComponent=>{
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state={
                role:''
            }
        }
        componentDidMount(){
            //从用户信息中拿到role字段
            this.setState({role:'admin'})
        }
        render(){
            let { role }=this.state
            console.log(roleArr)
            const flag=roleArr.includes(role)//判断高阶组件里有没有这个用户权限
            return(
                <div>
                  {
                      // {...this.props}解决一个组件被多个高阶组件修饰覆盖的问题,保留props
                      flag?<WrapComponent {...this.props} role="admin" />:<h1>没有权限访问</h1>
                  }
                </div>
            )
        }
    }
}

//使用高阶组件的组件
import React from 'react'
import { point,icp,context,role,config } from '@/hoc'
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
                <h1>高阶组件123</h1>
                <button onClick={()=>this.handle()}>元素级别的权限管理</button>
            </div>
        )
    }
}
export default HocComponent
```


## 类型检查(非必须)
* 1、npm i prpo-types -S
* 2、Child.propTypes={  msg:PropTypes.number  }

### 函数式组件 vs 类组件特点类别、优势和劣势？
### React组件（React类）vs React元素（JSX元素）？
### 函数式组件（无状态组件、纯组件、PureComponent)？


## Hook
### useState 
* 1、作用：用于定义声明式变量,模拟类组件中的state
* 2、定义时要用const，因为不能修改useState
* 3、语法：const [ count,setCount]=useState(0)
* 4、useState()一定要赋初始值
* 5、useState定义的声明变量，要使用 set*系列方法去更新，不建议直接修改

### useEffect  
* 1、作用：模拟类组件中生命周期的特性
* 2、只要不是生成JSX的业务，都可以认为是副作用
* 3、副作用包括定时器、调接口，长连接、DOM操作、第三方库的初始化
* 4、语法：useEffect(()=>{return()=>{}},[])
* 5、可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
```js
import React,{useState,useEffect} from 'react'
const [swan,setSwan]=useState('周杰伦')//搜索关键词
  <h1>歌单搜索</h1>
            <input 
              type="text"
              value={swan}
              onChange={e=>setSwan(e.target.value)}
              onKeyUp={e=>search(e)}//键盘抬起进行搜索
            />
    //音乐播放列表
    useEffect(()=>{
        params.w=swan//按歌星名字搜索
        params.p=page //分页
        if(page<=1){
           setPage(1)
        }
        //触发调接口的方法，触发mobx的actions
        music.updateList(params)//相当于componentDidMount
        return undefined //相当于componentWillUnmount
    },[rate,page])//rate,page只要回车rate发生变化就进行搜索,page进行分页
                  //相当于componentDidUpdate
```


## 代码分割
* 1、代码分割（相当于是Vue-Router中的路由懒加载）
* 2、作用：提升应用程序的运行速度，本质上是一种性能优化
* 3、技术核心点：异步地动态地import组件，Webpack代码分割技术


* 参考文档：https://reactrouter.com/web/guides/code-splitting

* 第1步：cnpm i @babel/plugin-syntax-dynamic-import -D
* 第2步：在 babel.config.js 中进行配置，以支持动态import这种语法
* 第3步：cnpm i @loadable/component -S
* 第4步：使用 @loadable/component 库，动态import页面组件
* Webpack打包时，会根据 @loadable/component 配置的路由规则，实现代码分割。


## 路由React-Router-DOM
* 在React路由系统中，并不是所有的组件中都能拿到路由信息和路由API
* 只有被Route包裹过（也就是定义在路由匹配规则上）的组件中，才能通过props拿到路由信息和路由API
* 使用withRouter这个高阶组件给没有被Route包裹过的组件使用路由API(已经过时了)
* 路由跳转要导入的方法:import { useHistory } from "react-router-dom";

## ref
* 在函数式组件中默认没有ref特性
* 使用 useRef 可获得ref特性`const aRef = useRef(null)`
* 在jsx元素上，使用ref属性绑定`<div ref={aRef}></div>`
* 在业务逻辑中，使用 aRef.current 拿到ref实例对象


## 状态管理
* 1、Flux（是一套数据架构的思想）是Facebook提出的
* 2、Vuex、Mobx、Redux它们都是Flux思想指导下的一种具体的解决方案
* 3、状态管理工具：可预测状态的数据容器
* 4、Flux是一种用于React的应用程序架构，它利用单向数据流
* 原则：在React规范中，一切外部数据都要从props进入组件，所以几乎是一定要使用状态管理工具

## 
* 1、在React技术栈：mobx和eedux
* 2、小项目可以考虑使用mobx 6 & mobx-react 7
* 3、大项目，建议使用redux & react-redux

## mobx
* 语法：inject('store')(observer(UIcomponent))
* observer(观察者):它的作用是把React组件变成观察者，当mobx中被观察的数据发生变化时，观察者自动更新
* inject('store')(UIconponent)它的作用是注入mobx中的状态数据
* 特点：一旦注入成功，在props上就可以直接访问


# store的使用

## 安装两个库
* mobx、mobx-react

## 定义根store
```js
import TodoStore from './modules/todolist'
import MusicStore from './modules/music'
class Store{
    construstor(){
        //对多个子module进行实列化
        //把需要共享的状态数据挂载到todo上
        this.todo=new TodoStore()
        this.music=new MusicStore()
    }
}
```

## 定义子Store
```js
import {makeObservable,observable,action} from 'mobx'
export default class TodoStore{
    construstor(){
        makeObservable(this,{
            list:observable,
            updateList:action
        })
    }
}
```

## 连接Mobx和React应用
```js
//store属性随便定义 
//<Provider store={store}> 
//相当于<Provider todo={todo} music={music}> 
function App(){
    return(
        <Provider {...store}/>
    )
}
```



## 在React组件中使用Mobx
```js
//这是两个高阶组件
//observer(观察者):它的作用是把React组件变成观察者，当mobx中被观察的数据发生变化时，观察者自动更新
//inject('store')(UIconponent)它的作用是注入mobx中的状态数据
//特点：一旦注入成功，在props上就可以直接访问
import {inject,observer} from 'mobx-react'
//先观察变化在注入
const TestMobx=inject('todo')(observer(props=>(<div></div>)))

//使用store数据
let {todo}=props

  {
    //走状态管理的list数组,从状态管理里面获取
    todo.list.map(ele=>{//map循环一定要分清楚是“{}”还是“（）”
        return (<div key={ele.id}>
            <span>{ele.id}</span>
            <input type="text" value={ele.task} onChange={e=>edit(ele,e)} />
            <button onClick={()=>dele(ele)}>删除</button>
        </div>)
    })
}
```

