//ECMAScript6 Module

//整个项目的入口文件

//引入模板
//import App  from "./App.js";  作为对象导出的名字可以自己取
import Vue from "../../vue.js";

//键值对形式导出的 名字必须与 导出时的一样 import {num1,num2,add} from  './App'
//整个模块加载

 import * as obj from "./App"
    //在`这个时候 obj.default 就是export default 抛出的内容

console.log(obj.num1);
console.log(obj.num2);
obj.add(3,5);

new Vue({

    template:`<App/>`,
    components:{
        App:obj.default
    }
}).$mount('#app');



