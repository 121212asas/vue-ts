import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import permission from './login'

Vue.use(Router)
let routes: Array<any> = permission

export default new Router({
  routes
})
