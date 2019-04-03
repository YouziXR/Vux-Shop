import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import VuxHello from '@/components/HelloFromVux'
import Login from '@/views/login'
import ForgetPwd from '@/views/forget'
import Register from '@/views/register'
import Home from '@/views/home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/login/',
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vux',
      name: 'VuxHello',
      component: VuxHello
    } */
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/forget',
      name: 'forgetPwd',
      component: ForgetPwd
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
