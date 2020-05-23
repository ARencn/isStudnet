import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index/Index'

import Music from '@/pages/Music/Music'

// 此时的router对象是一个局部的
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'',
    	redirect:'/index'
  
    },
    {
    	path:'/index',
    	name:'index',
    	component:Index
    },
     {
    	path:'/music',
    	name:'music',
    	component:Music
    }
  ]
})
