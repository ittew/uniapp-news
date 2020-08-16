import Vue from 'vue'
import App from './App'
//引入 封装后的数据访问方法
import api from './common/api'
Vue.config.productionTip = false
//绑定 封装方法
Vue.prototype.$api = api
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
