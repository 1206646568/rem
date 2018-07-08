import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import home from '@/views/home'

Vue.use(Router)

let VueRouter = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'login',
    component: login
  },{
    path: '/home',
    name: 'home',
    component: home
  }]
})
VueRouter.beforeEach((to, from, next) => {
  next()
})

export default VueRouter
