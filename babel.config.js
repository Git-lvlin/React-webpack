//json写法
// {  //预设
//     // "presets":["@babel/preset-env"]
//     "presets":[
//         ["@babel/preset-env"],
//         []
//     ]

// }


//js写法
module.exports={
    presets:[
        ["@babel/preset-env",{}],//{}里面都是选项
        ["@babel/preset-react",{}],
        ["@babel/preset-typescript"]//解决tsx的问题
    ],
    plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose" : true }]
  ]
}