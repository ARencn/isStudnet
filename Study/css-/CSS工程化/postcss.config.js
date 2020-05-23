const autoprefixer = require('autoprefixer');//自动加入前缀
const atImport=require('postcss-import');//引入模块的
const cssnano=require('cssnano');//压缩的
const cssnext=require('postcss-cssnext');
const pxtorem = require('postcss-pxtorem');//将px转化为rem
const precss=require('precss');//支持变量等
module.exports={
  plugins:[
    atImport,cssnext,
    autoprefixer({
      // browsers:['last 2 versions'],  //指定适配的浏览器 最近两个版本
     // browsers:['>10%']  //指定适配的浏览器 市场份额大于百分之10的浏览器
     // browsers:['Firefox > 30'] 指定浏览器大于30的版本firefox    browserlist 信息来源
    }),
    pxtorem({
        rootValue: 16, propList: ['*'],
    }),
    precss,
    cssnano //一般放到最后 把其他都处理完再压缩
  ]
  
  


}