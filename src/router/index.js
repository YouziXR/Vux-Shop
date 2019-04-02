import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import VuxHello from '@/components/HelloFromVux'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',5
      component: HelloWorld
    },
    {
      path: '/vux',
      name: 'VuxHello',
      component: VuxHello
    } */
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
