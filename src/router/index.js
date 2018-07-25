import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
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
          path: 'home',
          name: 'home',
          component: home
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
