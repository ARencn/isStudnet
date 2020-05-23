module.exports={
  //入口
    entry:{
      //可以有多个入口,也可以有一个,如果有一个就从这一个入口开始分析
      "main": './main.js'
    },
    output:{
        //输出的文件
      filename:'./build.js'
    },
    watch:true,// 文件监视改动自动产出build.js
};