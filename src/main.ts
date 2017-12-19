import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './vuex/index.ts'

Vue.config.productionTip = true

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
