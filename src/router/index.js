import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import VuxHello from '@/components/HelloFromVux'
import Login from '@/views/login'

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
    }
  ]
})
