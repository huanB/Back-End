// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //引入组件
// import $ from "jquery"
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // $,
  components: { App },
  template: '<App/>'
})
