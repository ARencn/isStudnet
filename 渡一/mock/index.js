//mock.js

/* 
1.属性是String
Mock.mock({
    'data1|1-4':'String'     '  name| min-max' value为String时, min-max 表示 重复1-4次
    'data2|3':'String'              | number    value为String时 ,number 表示 重复 number次
})

2.属性是Number
Mock.mock({
    'number1|+1':'Number'     '  name| +number' value为Number时, value表示初始值,每次调用 都+1
    'data2|1-100':'Number'              | min-max    value为Number时 ,number 表示 随机在范围内
    'number3|1-100.5'                    | min-max.dcount    value为Number时 ,number 表示 随机在范围内  .dcount 表示随机生成五位小数
    'number3|1-100.1-100'                    | min-max.dcount    value为Number时 ,number 表示 随机在范围内  .dmin-dmax 表示随机生成多少位到多少位的小数
    'number5|123.1-10'   表示 123为固定的 后面跟十位随机小数
})

3.属性值为boolean

Mock.mock({
    'b|1':false       出现的概率各占50%
    'b|1-5' 
})

4.属性值是对象

Mock.mock({
    'Object | 1-3' :{a:2}  随机从这个对象中取出 1-3个属性
    'Object | 2' :{a:2}  随机从这个对象中取出 2个属性

})

5.数组
'arr|1':[1,23,4] 随机取出一个值
'arr|1-3' :[1,2,3] 随机重复1-3次


6.函数

'result':function(){
    return result   返回结果给 属性
}

7.正则表达式
'reg1'



//mock.random

const random = Mock.Random

1.basic
Random.boolean()  //随机一个布尔值
      .natural(min,max) //随机一个自然数
      .integer(min,max) //随机一个整数
      .float(min,max,dmin,dmax)  // 浮点数
      .character('lower','upper','number','symbol')
      .string(length)(min,max)('lower',min-max)
     .range()


     
*/