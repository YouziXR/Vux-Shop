import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import VuxHello from '@/components/HelloFromVux'
import Login from '@/views/login'
import ForgetPwd from '@/views/forget'
import Register from '@/views/register'
import Home from '@/views/home'
import Me from '@/views/me'
import Tab from '@/views/tabbar'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
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
      name: 'root',
      redirect: { name: 'login' }
    },
    {
      path: '/login',
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
      path: '/tab',
      name: 'tab',
      component: Tab,
      redirect: { name: 'home' },
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'me',
          name: 'me',
          component: Me
        }
      ]
    },
  ]
})
