let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
  //入口
    entry:{
      //可以有多个入口,也可以有一个,如果有一个就从这一个入口开始分析
      "main": './main.js'
    },
    output:{
        //输出的文件
      filename:'./build.js',
        path:path.resolve('./dist') //相对转绝对
    },
    watch:true,// 文件监视改动自动产出build.js
    //声明模块
    //包含各个loader
    //loader的引用是自有向左调用
    module:{
        loaders:[
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jpg|png|jpeg|gif|svg$/,
                //limit=4000 代表以base64生成图片文件
                loader:'url-loader?limit=4000'
            },
            {
                test:/\.less$/,
                loader:"style-loader!css-loader!less-loader"
            },
            {
                test:/\.js/,
                loader:"babel-loader",
                exclude:/node_modules/, //排除不需要编译的
                options:{
                    presets:['env'],//处理的关键字 env代表es2015 16 17都处理
                    plugins:['transform-runtime'], //处理函数

                }
            }
        ]
    },
    plugins:[
        //插件的执行顺序与元素索引有关
        new HtmlWebpackPlugin({
            template : './index.html', //生成的参照物的地址
        })


    ]
};