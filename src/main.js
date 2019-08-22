import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Vuex from 'vuex'
// import VueRouter from 'vue-router'
// eslint-disable-next-line no-console
console.log('[i] Starting client app')


// Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(Antd)


// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  render: h => h(App),
  store,
  router,
  components: { App }
}).$mount('#app')