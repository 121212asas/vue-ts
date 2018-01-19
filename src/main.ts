import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { store } from './vuex/index'
import mintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = true
Vue.use(mintUi)
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
