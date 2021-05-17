//ESLint是一种代码规范的检测工具

//社区里有很多种不同版本的eslint工具，比如
// eslint 
// eslint-babel
// eslint-config-airbnb
// eslint-plugin-jsx-a11y

//在webpack有两种写法：
//1、使用eslint-loader，不推荐用
//2、使用eslint-webpack-plugin插件来集成eslint

//eslint检测结果有三种情况：
// eror - 2
// wran - 1
// off - 0

//解决项目中的ESLint报错问题
// 1、在ESLint的配置文件中，修改rules规则，不建议用
// 2、使用eslint注释的方式，临时解决掉eslint报错问题
// 3、在项目根目录添加 .eslintignore忽略文件
// 4、老老实实找到ESLint提示的报错地方，改成规范的写法

//ESLint的配置目前有5种写法，参考官方文档

module.exports = {
  parser: "@babel/eslint-parser",
	extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
	plugins: [
    "react"
  ],
	env: {
    "browser": true,
    "node": false,
    "es6":true//解决promise没有定义的问题
  },
	// 定义规则检测的级别
  rules: {
      // "semi": "error"
			"no-console": "off",
      "react/prop-types":'off',//解决自定义事件的问题
      "react/display-name":'off'//解决没有定义名字的问题
  }
}