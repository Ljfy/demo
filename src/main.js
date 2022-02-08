import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import echarts from 'echarts'


Vue.config.productionTip = false

// Vue.prototype.$echarts = echarts
new Vue({
  router,
  Vue,
  store,
  render: h => h(App)
}).$mount('#app')
