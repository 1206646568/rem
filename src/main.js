// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'
// import fastclick from 'fastclick' // 移动端300m延迟解决(不适用场景，pc、设置了width=device-width、设置了 user-scalable=no)
import VueLazyload from 'vue-lazyload'
import lodash from 'lodash' // javascript函数库
import '@/assets/css/reset.css' // 初始化样式
import '@/assets/js/remStrategy.js' // 移动端适配方案
import '@/assets/plugins/iconfont/iconfont.css'

// 关闭vue生成生产提示
Vue.config.productionTip = false

Vue.prototype.$moment = moment
Vue.prototype.$axios = axios
Vue.prototype.$_ = lodash
// 绑定到body元素上
// fastclick.attach(document.body) // 引起重复点击报错（晚点研究）
Vue.use(VueLazyload, {
  error: './assets/image/default.png', // 未加载成功显示
  loading: './assets/image/default.png' // 加载中显示
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
/**
 * 移动端的经典问题
 * 1、移动端适配问题
 * 2、300ms的故事
 * 3、click点透事件
 * 4、图片模糊问题 // 准备两张不同尺寸的图片，在命名上区分retina屏
 * 5/1px细线问题
 * 
 */