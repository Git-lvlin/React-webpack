# Ts

## 启用ts步骤
* 1、在webpack.base文件里面
```js
//配置tsx
    { test: /\.(ts|tsx)$/, loader: "ts-loader" }
//添加省略后缀
    extensions:['.js','jsx','.ts','.tsx','.json','.vue']//省略后缀

```
* 2、去npm搜索ts-loader安装一系列规则
```js
- npm install ts-loader --save-dev
- npm install typescript --save-dev
//配置规则
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
```
* 3、tsconfig.json里面的 `"sourceMap": true` 、`"rootDir": "./",` 、`"outDir": "dist",`

* 4、安装babel
```js
npm install --save-dev @babel/preset-typescript

//babel.config.js中添加
{
  "presets": ["@babel/preset-typescript"]
}
```
* 5、安装@types/react

* 6、tsconfig.json中添加
```js
 "esModuleInterop":true,
 "experimentalDecorators":true
```

