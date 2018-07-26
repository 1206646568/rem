import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/views/home'
// import hot from '@/views/hot'
// import list from '@/views/list'
// import Recommend from '@/views/Recommend'
// import user from '@/views/user'
// import login from '@/views/login'

const home = resolve => require(['@/views/home'], resolve)
const hot = resolve => require(['@/views/hot'], resolve)
const list = resolve => require(['@/views/list'], resolve)
const Recommend = resolve => require(['@/views/Recommend'], resolve)
const user = resolve => require(['@/views/user'], resolve)

const login = resolve => require(['@/views/login'], resolve)

import theQuickWay from '@/components/public/template/theQuickWay'

Vue.use(Router)

let VueRouter = new Router({
  mode: 'history',
  routes: [
    // 无快捷方式
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 带有快捷方式的菜单
    {
      path: '/',
      component: theQuickWay,
      redirect: {
        name: 'home'
      },
      children: [
        //
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/hot',
          name: 'hot',
          component: hot
        },
        {
          path: '/list',
          name: 'list',
          component: list
        },
        {
          path: '/Recommend',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: '/user',
          name: 'user',
          component: user
        }
      ]
    },
    // 错误重定向
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
