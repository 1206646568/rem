import Vue from 'Vue'
import axios from 'axios'

axios.install = function (Vue, options) {
  Vue.prototype.$axios = axios
}
export default axios
