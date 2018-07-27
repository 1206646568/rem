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
        name: 'hot'
      },
      children: [
        //
        // {
        //   path: '/home',
        //   name: 'home',
        //   meta: {
        //     title: '首页'
        //   },
        //   component: home
        // },
        {
          path: '/hot',
          name: 'hot',
          meta: {
            title: '热门'
          },
          component: hot
        },
        {
          path: '/list',
          name: 'list',
          meta: {
            title: '列表'
          },
          component: list
        },
        {
          path: '/Recommend',
          name: 'Recommend',
          meta: {
            title: '分类'
          },
          component: Recommend
        },
        {
          path: '/user',
          name: 'user',
          meta: {
            title: '用户'
          },
          component: user
        }
      ]
    },
    // 错误重定向
    {
      path: '*',
      redirect: {
        name: 'hot'
      }
    }
  ]
})
VueRouter.beforeEach((to, from, next) => {
  document.title = (to.meta && to.meta.title) || 'blgo';
  next()
})
export default VueRouter
