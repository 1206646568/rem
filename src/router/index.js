import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import home from '@/views/home'
import theQuickWay from '@/components/public/theQuickWay'

Vue.use(Router)

let VueRouter = new Router({
  mode: 'history',
  routes: [
    // 
    {
      path: '/',
      component: theQuickWay,
      redirect: 'home',
      children: [
        // 
        {
          path: '/home',
          name: 'home',
          component: home
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
VueRouter.beforeEach((to, from, next) => {
  next()
})

export default VueRouter
