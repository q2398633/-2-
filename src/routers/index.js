// 创建路由对象及配置路由规则,和其他路由配置
import VueRouter from 'vue-router'
import vue from 'vue'
import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  router: [
    { name: 'index', path: '/', redirect: '/login' },
    { name: 'login', path: '/login', component: Login }
  ]
})
export default router
