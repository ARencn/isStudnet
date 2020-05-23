let app ={
    template :`
    <div>
        I am an entry component
    </div>
    `
};



//声明并导出
export let num1 =1; //作为一整个对象的key导出

//声明再导出
let num2=3;
export {num2}

export function add(x,y){
    return console.log(x+y);
}

//export 导出的内容 在使用 import导入的时候必须 {}以大括号的形式取出来 而且必须与抛出的名字一样
//抛出对象  只能有一个  export default 在 import 时 可以随意取名字   再写from  比如 import q from App.js    再使用 q  q=app;
export default app;