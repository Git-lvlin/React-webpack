//无状态写法
// function App() {
//     return (
//         //jsx语法
//         <div>
//            <h1>hello react</h1>
//         </div>
//     )
// }

import React from 'react'
// import Subjsx from '@/views/Subjsx'
// import BoxComponent from '@/views/BoxComponent'
// import StateComponent from '@/views/StateComponent'
// import EventComponent from '@/views/EventComponent'
// import ListComponent from '@/views/ListComponent'
// import Todolist from '@/views/Todolist'
// import Lifecycle from '@/views/Lifecycle'
// import Condition from '@/views/Condition'
// import FormComponent from '@/views/FormComponent'
// import Cnode from '@/views/Cnode'
// import StateLift from '@/views/StateLift'
// import Broup from '@/views/Broup'
// import Context from '@/views/Context'
import ThemeCtx from '@/utils/theme.js'
// import HocComponent from '@/views/HocComponent'
// import Types from '@/views/Types'
// import Hooks from '@/views/Hooks'
// import Router from '@/views/Router'


//自定义颜色背景改变组件
const ChangeColor=props=>{
	let { theme,Change }=props
	const changeRgb=(e,type)=>{
		// 不能修改props，所以深复制一下
		const copyTheme=JSON.parse(JSON.stringify(theme))
		copyTheme[type]=e.target.value
		// 触发父组件传递过来的change方法
		Change && Change(copyTheme)
	}
	return(
		<div>
			<span>字体颜色</span>
			<input
				type='color'
				value={theme.color}
				onChange={(e)=>changeRgb(e,'color')}
			/>
			<span>背景颜色</span>
			<input
				type='color'
				value={theme.background}
				onChange={(e)=>changeRgb(e,'background')}
			/>
		</div>
	)
}


//路由集成
import{ HashRouter } from 'react-router-dom'
//导入路由规则组件
import { Lsyout } from '@/components'

//mobx集成
import store from '@/store'
import { Provider } from 'mobx-react'
 
class App extends React.Component {
	constructor(props){
		super(props) 
		this.state={
			theme:{
				color:'#999999',
				background:'#333333'
			}
		}
	}
	childColor(theme){
		//子组件传过来的16进制颜色数据
		this.setState({theme})
	}
	render() {
		let { theme }=this.state
		return (
				<HashRouter>
				{/* store属性随便定义 */}
				{/* <Provider store={store}> */}
				{/* 相当于<Provider todo={todo} music={music}> */}
				{/* 将状态管理的数据注入到被包裹的组件 */}
					<Provider {...store}>
					{/* 向React组件树注入数据 */}
						<ThemeCtx.Provider value={theme}>
							{/* <div id="box"> */}
								{/* <Subjsx></Subjsx> */}
								{/* <BoxComponent /> */}
								{/* <StateComponent /> */}
								{/* <EventComponent /> */}
								{/* <ListComponent /> */}
								{/* <Todolist /> */}
								{/* <Lifecycle /> */}
								{/* <Condition /> */}
								{/* <FormComponent /> */}
								{/* <Cnode /> */}
								{/* <StateLift /> */}
								{/* <Broup /> */}
								<ChangeColor theme={theme} Change={e=>this.childColor(e)} />
								{/* <Context   /> */}
								{/* <HocComponent /> */}
								{/* <Types/> */}
								{/* <Hooks/> */}
								{/* </div> */}
								{/* <Route path='/jsx' component={Subjsx}/> */}
							<Lsyout/>
						</ThemeCtx.Provider>
					</Provider>
				</HashRouter>
		
		)
	}
}

export default App