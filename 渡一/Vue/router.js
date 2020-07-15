class VueRouter{
    constructor(options){
        this.routes = options.routes;

    }
}
VueRouter.install = Vue=>{
    //在Vue.use 时  Vue会自动调用 被use 的构造函数的 install方法 并将 Vue 传递给该方法
    Object.defineProperty(Vue.prototype,'$router',{
        get(){
            //使用defineProperty可以使用 组件内的this
            return{

            }
        }
    })
    Object.defineProperty(Vue.prototype,'$route',{
        get(){
            return{
                
            }
        }
    })
}

export default VueRouter