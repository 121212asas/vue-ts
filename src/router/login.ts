import HelloWorld from '@/components/HelloWorld.vue'
import login from '@/page/login/login.vue'

const permission = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]
export default permission
