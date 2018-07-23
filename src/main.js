// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import lodash from 'lodash' // javascript函数库
import '@/assets/css/reset.css' // 初始化样式
import '@/assets/js/remStrategy.js' // 移动端适配方案
import '@/assets/plugins/iconfont/iconfont.css'

Vue.config.productionTip = false

// 三方库
Vue.prototype.$moment = moment
Vue.prototype.$axios = axios
Vue.prototype.$_ = lodash

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
